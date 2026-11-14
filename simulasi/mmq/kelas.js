/* Mode kelas untuk game pelatihan PNM: papan skor fasilitator dan pertukaran paket kebijakan antarkelompok.
   Diadaptasi dari mode kelas Bursa Syariah Simulator (learnislamicfintech.tazkia.ac.id).
   Transport: broker MQTT publik lewat WebSocket. Isi pesan dienkripsi AES-GCM dengan kunci dari kode kelas,
   dan nama topik di-hash, sehingga broker tidak melihat nama kelompok maupun kode kelas. */
window.PNMKelas = (function () {
  'use strict';
  const BROKERS = ['wss://broker.emqx.io:8084/mqtt', 'wss://broker.hivemq.com:8884/mqtt'];
  const enc = new TextEncoder(), dec = new TextDecoder();
  const hex = b => [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
  const b64 = u => { let s = ''; u.forEach(c => s += String.fromCharCode(c)); return btoa(s) };
  const unb64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  const ALPHA = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

  function newCode() { const r = crypto.getRandomValues(new Uint8Array(5)); return [...r].map(x => ALPHA[x % ALPHA.length]).join('') }
  function cleanCode(c) { return String(c || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8) }
  async function sha(t) { return hex(await crypto.subtle.digest('SHA-256', enc.encode(t))) }
  async function keyFor(code) {
    const base = await crypto.subtle.importKey('raw', enc.encode(code), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey({ name: 'PBKDF2', salt: enc.encode('pnm-mmq-kelas-v1'), iterations: 100000, hash: 'SHA-256' },
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
  function tryBroker(url, ms) {
    return new Promise(res => {
      let c; try { c = window.mqtt.connect(url, { connectTimeout: ms, reconnectPeriod: 3000, clean: true, keepalive: 30 }) } catch (e) { res(null); return }
      const t = setTimeout(() => { try { c.end(true) } catch (e) { } res(null) }, ms + 500);
      c.once('connect', () => { clearTimeout(t); res(c) });
      c.once('error', () => { });
    });
  }

  /* join(code, {role:'host'|'player', onCtl, onStatus, onPair, onConn}) -> channel
     host  : membuat kelas di broker pertama yang menjawab; menerima status semua kelompok (s/+) dan paket (p/+).
     player: mencari pesan kontrol kelas di tiap broker; menerima kontrol (ctl) dan semua paket pasangan (p/+). */
  async function join(code, h) {
    for (let i = 0; i < 50 && !window.mqtt; i++) await new Promise(r => setTimeout(r, 200));
    if (!window.mqtt) throw new Error('lib');
    code = cleanCode(code); const key = await keyFor(code);
    const base = 'pnmmmq/v1/' + (await sha('pnm-mmq|' + code)).slice(0, 24);
    let client = null;
    for (let round = 0; round < (h.role === 'host' ? 1 : 3) && !client; round++)
    for (const url of BROKERS) {
      const c = await tryBroker(url, 6000); if (!c) continue;
      if (h.role === 'host' && !h.findOnly) { client = c; break }
      const found = await new Promise(res => {
        let done = false; const fin = v => { if (!done) { done = true; c.unsubscribe(base + '/ctl'); c.removeListener('message', onm); res(v) } };
        const onm = (t, m) => { if (t === base + '/ctl' && m.length) fin(true) };
        c.on('message', onm); c.subscribe(base + '/ctl', { qos: 1 }); setTimeout(() => fin(false), 5000);
      });
      if (found) { client = c; break }
      c.end(true);
    }
    if (!client) throw new Error(h.role === 'host' ? 'net' : 'notfound');
    client.on('message', async (t, m) => {
      const sub = t.slice(base.length + 1);
      if (!m.length) { if (sub.startsWith('s/') && h.onStatus) h.onStatus(sub.slice(2), null); return }
      let o; try { o = await open(key, m.toString()) } catch (e) { return }
      if (sub === 'ctl' && h.onCtl) h.onCtl(o);
      else if (sub.startsWith('s/') && h.onStatus) h.onStatus(sub.slice(2), o);
      else if (sub.startsWith('p/') && h.onPair) h.onPair(sub.slice(2), o);
    });
    client.on('connect', () => { h.onConn && h.onConn(true) });
    client.on('offline', () => { h.onConn && h.onConn(false) });
    client.on('reconnect', () => { h.onConn && h.onConn(false) });
    client.subscribe([base + '/ctl', base + '/p/+'].concat(h.role === 'host' ? [base + '/s/+'] : []), { qos: 1 });
    const pub = async (path, obj, retain) => client.publish(base + '/' + path, obj === null ? '' : await seal(key, obj), { qos: 1, retain: !!retain });
    return {
      code,
      setCtl: o => pub('ctl', o, true),
      setStatus: (id, o) => pub('s/' + id, o, true),
      setPair: (k, o) => pub('p/' + k, o, true),
      clear: id => pub('s/' + id, null, true),
      clearPair: k => pub('p/' + k, null, true),
      close: () => client.end(),
    };
  }
  return { newCode, cleanCode, join, sha };
})();
