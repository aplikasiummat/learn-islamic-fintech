/* Bursa Syariah class mode (mabar): shared channel for the lecturer page and the student simulator.
   Transport: public MQTT brokers over WebSocket. Payloads are AES-GCM encrypted with a key derived
   from the class code, and topics are hashed, so the broker never sees names, NIMs, or the code. */
window.BSKelas = (function () {
  'use strict';
  const BROKERS = ['wss://broker.emqx.io:8084/mqtt', 'wss://broker.hivemq.com:8884/mqtt'];
  const enc = new TextEncoder(), dec = new TextDecoder();
  const hex = b => [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
  const b64 = u => { let s = ''; u.forEach(c => s += String.fromCharCode(c)); return btoa(s) };
  const unb64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  const ALPHA = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

  function newCode() { const r = crypto.getRandomValues(new Uint8Array(6)); return [...r].map(x => ALPHA[x % ALPHA.length]).join('') }
  function cleanCode(c) { return String(c || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8) }
  async function sha(t) { return hex(await crypto.subtle.digest('SHA-256', enc.encode(t))) }
  async function keyFor(code) {
    const base = await crypto.subtle.importKey('raw', enc.encode(code), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey({ name: 'PBKDF2', salt: enc.encode('bursa-syariah-kelas-v1'), iterations: 120000, hash: 'SHA-256' },
      base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
  }
  async function seal(key, obj) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(JSON.stringify(obj))));
    const out = new Uint8Array(12 + ct.length); out.set(iv); out.set(ct, 12); return b64(out);
  }
  async function open(key, txt) {
    const u = unb64(txt); const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: u.slice(0, 12) }, key, u.slice(12));
    return JSON.parse(dec.decode(pt));
  }

  // server clock: the site's HTTP Date header, so every device agrees on "now" within about a second
  let offset = 0;
  async function syncClock() {
    if (location.protocol === 'file:') return 0;
    try {
      const t0 = Date.now(); const r = await fetch(location.pathname + '?clock=' + t0, { method: 'HEAD', cache: 'no-store' }); const t1 = Date.now();
      const d = Date.parse(r.headers.get('date')); if (d) offset = d + 500 - (t0 + t1) / 2;
    } catch (e) { }
    return offset;
  }
  const now = () => Date.now() + offset;

  function tryBroker(url, ms) {
    return new Promise(res => {
      const c = window.mqtt.connect(url, { connectTimeout: ms, reconnectPeriod: 3000, clean: true, keepalive: 30 });
      const t = setTimeout(() => { c.end(true); res(null) }, ms + 500);
      c.once('connect', () => { clearTimeout(t); res(c) });
      c.once('error', () => { });
    });
  }

  /* join(code, {role, onCtl, onStatus, onBoard, onConn}) → channel
     role 'host' creates the class on the first broker that answers;
     role 'student' looks for the class's retained control message on each broker in turn. */
  async function join(code, h) {
    if (!window.mqtt) throw new Error('lib');
    code = cleanCode(code); const key = await keyFor(code); const base = 'bsyariah/v1/' + (await sha('bursa-syariah|' + code)).slice(0, 24);
    await syncClock();
    let client = null, found = false;
    for (const url of BROKERS) {
      const c = await tryBroker(url, 7000); if (!c) continue;
      if (h.role === 'host' && !h.findOnly) { client = c; break }
      found = await new Promise(res => {
        let done = false; const fin = v => { if (!done) { done = true; c.unsubscribe(base + '/ctl'); c.removeListener('message', onm); res(v) } };
        const onm = (t, m) => { if (t === base + '/ctl' && m.length) fin(true) };
        c.on('message', onm); c.subscribe(base + '/ctl', { qos: 1 }); setTimeout(() => fin(false), 3500);
      });
      if (found) { client = c; break }
      c.end(true);
    }
    if (!client) throw new Error(h.role === 'host' ? 'net' : 'notfound');
    const handle = async (t, m) => {
      if (!m.length) { if (t.startsWith(base + '/s/') && h.onStatus) h.onStatus(t.slice(base.length + 3), null); return }
      let o; try { o = await open(key, m.toString()) } catch (e) { return }
      if (t === base + '/ctl' && h.onCtl) h.onCtl(o);
      else if (t === base + '/lb' && h.onBoard) h.onBoard(o);
      else if (t.startsWith(base + '/s/') && h.onStatus) h.onStatus(t.slice(base.length + 3), o);
    };
    client.on('message', handle);
    client.on('connect', () => { h.onConn && h.onConn(true) });
    client.on('offline', () => { h.onConn && h.onConn(false) });
    client.on('reconnect', () => { h.onConn && h.onConn(false) });
    const subs = [base + '/ctl', base + '/lb'].concat(h.role === 'host' ? [base + '/s/+'] : []);
    client.subscribe(subs, { qos: 1 });
    const pub = async (path, obj, retain) => client.publish(base + '/' + path, obj === null ? '' : await seal(key, obj), { qos: 1, retain: !!retain });
    return {
      code, url: client.options.href || '', now,
      setCtl: o => pub('ctl', o, true),
      setBoard: o => pub('lb', o, true),
      setStatus: (id, o) => pub('s/' + id, o, true),
      clear: id => pub('s/' + id, null, true),
      wipe: async ids => { for (const id of ids) await pub('s/' + id, null, true); await pub('lb', null, true); await pub('ctl', null, true) },
      close: () => client.end(),
    };
  }
  // tick index on the shared clock
  function tickAt(ctl, t) {
    if (!ctl) return 0; const max = ctl.days * ctl.tpd;
    const g = ctl.state === 'run' ? ctl.baseTick + Math.floor((t - ctl.baseTime) / ctl.tickMs) : ctl.baseTick;
    return Math.max(0, Math.min(max, g));
  }
  return { newCode, cleanCode, join, tickAt, now, syncClock, sha };
})();
