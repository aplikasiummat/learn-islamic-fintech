/* Mesin simulasi model bisnis 12 bulan. Data permainan ada di window.SIM (lihat rcf/ dan agregator/).
   Alur: layar awal (identitas) -> 12 bulan (kejadian, keputusan, pembahasan, kuis akad) -> hasil (nilai, tinjauan, refleksi, PDF) -> ulangi. */
(function () {
  'use strict';
  const D = window.SIM, K = 'ifl-' + D.key, $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const md = s => esc(s).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/\*([^*]+)\*/g, '<i>$1</i>');
  const plain = s => String(s).replace(/\*/g, '');
  const get = (k, d) => { try { const v = localStorage.getItem(K + k); return v ? JSON.parse(v) : d } catch (e) { return d } };
  const put = (k, v) => { try { localStorage.setItem(K + k, JSON.stringify(v)) } catch (e) { } };
  const words = s => (s.trim().match(/\S+/g) || []).length;
  const MINW = D.minWords || 40;
  const rp = v => (v < 0 ? '-' : '') + 'Rp' + Math.abs(Math.round(v)).toLocaleString('id-ID') + ' jt';
  const fmt = (ind, v) => ind.money ? rp(v) : ind.unit ? Math.round(v).toLocaleString('id-ID') + ' ' + ind.unit : String(Math.round(v));
  const nowStr = () => { const d = new Date(); return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) + ' ' + d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) };
  let S = get('-state', null);

  function fresh() {
    const v = {}; D.ind.forEach(i => v[i.k] = i.start);
    const atts = get('-att', []);
    const n = atts.length + 1;
    atts.push({ n, start: nowStr(), end: null, status: 'berjalan', sc: null }); put('-att', atts);
    return { v, m: 0, phase: 'ev', pick: null, qa: null, flags: {}, seenEv: {}, log: [], picks: [], quiz: [], att: n, id: get('-id', {}), t0: Date.now() };
  }
  const save = () => put('-state', S);
  function attUpd(patch) { const a = get('-att', []); const r = a.find(x => x.n === S.att); if (r) Object.assign(r, patch); put('-att', a) }

  // ---------- pop up panduan
  function pop(title, html, btn) {
    const old = $('pop'); if (old) old.remove();
    const m = document.createElement('div'); m.className = 'pop'; m.id = 'pop';
    m.innerHTML = `<div class="box" role="dialog" aria-modal="true"><div class="eyebrow">Panduan</div><h3>${esc(title)}</h3><div class="muted">${html}</div>
      <div class="nextrow"><button class="btn gold" type="button" id="popOk">${esc(btn || 'Mengerti')}</button></div></div>`;
    document.body.appendChild(m);
    const close = () => m.remove();
    $('popOk').onclick = close; m.addEventListener('click', e => { if (e.target === m) close() });
    $('popOk').focus();
  }
  function popOnce(key, title, html) { try { if (sessionStorage.getItem(K + 'pop' + key)) return; sessionStorage.setItem(K + 'pop' + key, '1') } catch (e) { } pop(title, html) }
  function helpNow() {
    if (!S || S.phase === 'intro') return pop('Cara bermain', D.howto.map(x => '<li>' + md(x) + '</li>').join('').replace(/^/, '<ol>') + '</ol>');
    if (S.phase === 'end') return pop('Langkah terakhir', '<ol><li>Baca nilai dan rinciannya.</li><li>Pelajari tabel tinjauan: pilihan terbaik ditandai beserta alasannya.</li><li>Isi identitas dan ' + D.refl.length + ' refleksi (minimal ' + MINW + ' kata), lalu tekan <b>Unduh PDF</b> dan unggah ke LMS.</li><li>Ingin memperbaiki nilai? Tekan <b>Ulangi permainan</b>. Semua percobaan tetap tercatat.</li></ol>');
    const p = { ev: 'Bacalah kabar bulan ini, lalu tekan <b>Lanjut ke keputusan</b>.', dec: 'Pilih satu dari tiga keputusan. Pertimbangkan akad, risiko, dan dampaknya pada indikator di sebelah kiri. Keputusan tidak dapat diubah setelah dipilih.', fb: 'Bacalah pembahasan dan rujukannya. ' + (D.months[S.m].quiz ? 'Setelah itu jawab <b>kuis akad</b> di bawahnya.' : 'Setelah itu tekan <b>Lanjut</b>.'), qz: 'Jawab kuis akad. Jawaban yang tepat menambah nilai literasi akad.' }[S.phase] || '';
    pop('Bulan ' + (S.m + 1) + ' dari 12 · ' + D.stages[D.months[S.m].stage], '<p>' + p + '</p><p class="dim">Indikator bergerak setelah setiap keputusan. Beberapa keputusan baru terasa akibatnya beberapa bulan kemudian.</p>');
  }

  // ---------- tampilan
  function topbar(extra) {
    return `<div class="topbar"><a class="home" href="../../">← Learn Islamic Fintech</a><div class="acts">${extra || ''}<button class="btn ghost" type="button" id="hlp">❓ Panduan</button></div></div>`;
  }
  function render() {
    if (!S || S.phase === 'intro') return intro();
    if (S.phase === 'end') return hasil();
    return main();
  }

  function intro() {
    const atts = get('-att', []), id = get('-id', {});
    $('app').innerHTML = topbar() + `
    <section class="hero"><div class="eyebrow">${esc(D.eyebrow)}</div><h1>${D.titleHtml}</h1><div class="sub">${esc(D.sub)}</div><p>${md(D.lead)}</p></section>
    <div class="grid2">
      <div class="panel goals"><b class="h">Capaian belajar</b><ol>${D.goals.map(g => '<li>' + md(g) + '</li>').join('')}</ol>
        <p class="dim" style="margin-top:10px">${md(D.materi)}</p></div>
      <div class="panel"><b class="h">Mulai sebagai ${esc(D.role)}</b>
        <div class="form"><label>Nama lengkap<input id="iNama" autocomplete="name" value="${esc(id.nama || '')}"></label>
        <label>NIM<input id="iNim" inputmode="numeric" value="${esc(id.nim || '')}"></label>
        <label>Kelas (opsional)<input id="iKelas" value="${esc(id.kelas || '')}"></label>
        <button class="btn gold" type="button" id="mulai">Mulai bulan pertama ▶</button>
        <p class="dim" id="iErr" style="margin:0"></p></div></div>
    </div>
    <div class="rules">${D.rules.map(r => `<div class="rule"><b>${esc(r[0])}</b><span>${md(r[1])}</span></div>`).join('')}</div>
    ${atts.length ? `<div class="panel" style="margin-top:16px"><b class="h">Riwayat percobaan di perangkat ini</b><div class="scrollx"><table class="hist"><tr><th>Ke</th><th>Mulai</th><th>Selesai</th><th>Status</th><th>Nilai</th></tr>${atts.map(a => `<tr><td>${a.n}</td><td>${esc(a.start || '-')}</td><td>${esc(a.end || '-')}</td><td>${esc(a.status)}</td><td>${a.sc == null ? '-' : a.sc}</td></tr>`).join('')}</table></div></div>` : ''}`;
    $('hlp').onclick = helpNow;
    $('mulai').onclick = () => {
      const nama = $('iNama').value.trim(), nim = $('iNim').value.trim();
      if (nama.length < 3 || nim.length < 3) { $('iErr').textContent = 'Nama lengkap dan NIM wajib diisi.'; $('iErr').style.color = 'var(--red)'; return }
      put('-id', { nama, nim, kelas: $('iKelas').value.trim() });
      S = fresh(); save(); render(); window.scrollTo(0, 0);
      pop('Selamat datang, ' + nama.split(' ')[0], '<ol>' + D.howto.map(x => '<li>' + md(x) + '</li>').join('') + '</ol>', 'Mulai bulan 1');
    };
    popOnce('intro', 'Sebelum mulai', '<ol>' + D.howto.map(x => '<li>' + md(x) + '</li>').join('') + '</ol>');
  }

  function meterHtml(i, d) {
    const v = S.v[i.k];
    let pct, cls = '';
    if (i.money) { pct = Math.max(0, Math.min(100, v / i.target * 100)) } else if (i.unit) { pct = Math.max(0, Math.min(100, v / i.target * 100)) } else pct = Math.max(0, Math.min(100, v));
    cls = pct < 35 ? 'low' : pct < 65 ? 'mid' : '';
    const dl = d && d[i.k] ? `<span class="delta ${d[i.k] > 0 ? 'up' : 'dn'}">${d[i.k] > 0 ? '+' : ''}${i.money ? d[i.k] : Math.round(d[i.k])}</span>` : '';
    return `<div class="meter"><b>${esc(i.label)}<span>${fmt(i, v)}${dl}</span></b><div class="bar"><i class="${cls}" style="width:${pct}%"></i></div></div>`;
  }

  function apply(eff) { const d = {}; Object.entries(eff || {}).forEach(([k, n]) => { const i = D.ind.find(x => x.k === k); if (!i) return; let v = S.v[k] + n; if (!i.money && !i.unit) v = Math.max(0, Math.min(100, v)); if (i.unit) v = Math.max(0, v); S.v[k] = v; d[k] = n }); return d }

  function effHtml(d) { return '<div class="eff">' + Object.entries(d || {}).filter(([, n]) => n).map(([k, n]) => { const i = D.ind.find(x => x.k === k); return `<span style="color:${n > 0 ? 'var(--green)' : 'var(--red)'}">${esc(i.label)} ${n > 0 ? '+' : ''}${i.money ? n + ' jt' : n}</span>` }).join('') + '</div>' }

  function eventsFor(m) { return (D.events || []).filter(e => e.month === m + 1 && (!e.if || e.if.split(' ').every(f => S.flags[f])) && (!e.unless || !S.flags[e.unless])) }

  function main() {
    const M = D.months[S.m];
    if (S.phase === 'ev') {
      const evs = eventsFor(S.m).filter(e => !S.seenEv[e.id]);
      evs.forEach(e => { S.seenEv[e.id] = { d: apply(e.eff), t: e.text, good: e.good }; S.log.push({ mo: 'Bulan ' + (S.m + 1), t: plain(e.text), cls: e.good ? 'good' : 'bad' }) });
      if (!eventsFor(S.m).length) S.phase = 'dec';
      save();
    }
    const evHtml = eventsFor(S.m).map(e => { const x = S.seenEv[e.id]; return x ? `<div class="event ${x.good ? 'good' : ''}"><b>${x.good ? '✓ Kabar baik' : '⚠ Akibat keputusan sebelumnya'}</b>${md(x.t)}${effHtml(x.d)}</div>` : '' }).join('');
    const last = S.lastD || {};
    $('app').innerHTML = topbar(`<button class="btn ghost" type="button" id="ulang">↺ Mulai ulang</button>`) + `
    <div class="proc">${D.stages.map((s, i) => `<div class="step ${i === M.stage ? 'on' : ''}"><span class="n">${i + 1}</span><span class="t">${esc(s)}</span></div>`).join('')}</div>
    <div class="game">
      <aside class="panel ind"><div><div class="eyebrow">${esc(D.org)}</div><div class="months">${D.months.map((_, i) => `<i class="${i < S.m ? 'done' : i === S.m ? 'on' : ''}"></i>`).join('')}</div><div class="dim">Bulan ${S.m + 1} dari 12 · percobaan ke-${S.att}</div></div>
        ${D.ind.map(i => meterHtml(i, last)).join('')}
        <div class="meter"><b>Literasi akad<span>${S.quiz.filter(q => q.ok).length}/${D.months.filter(m => m.quiz).length}</span></b></div>
        <div><div class="eyebrow" style="margin-bottom:6px">Jejak keputusan</div><div class="log">${S.log.slice().reverse().map(l => `<div class="${l.cls || ''}"><b>${esc(l.mo)}</b> · ${esc(l.t)}</div>`).join('') || '<div>Belum ada keputusan.</div>'}</div></div>
      </aside>
      <section class="panel card">
        ${evHtml}
        <div class="meta"><span class="chip">Bulan ${S.m + 1}</span><span class="chip ghost">Tahap ${M.stage + 1} · ${esc(D.stages[M.stage])}</span></div>
        <h2>${esc(M.title)}</h2><p class="sit">${md(M.sit)}</p>
        <div id="zone"></div>
      </section>
    </div>`;
    $('hlp').onclick = helpNow;
    let armed = false;
    $('ulang').onclick = () => { if (!armed) { armed = true; $('ulang').textContent = 'Ketuk lagi untuk mengulang'; setTimeout(() => { armed = false; const b = $('ulang'); if (b) b.textContent = '↺ Mulai ulang' }, 3000); return } retake('dihentikan') };
    zone();
    if (S.m === 0 && S.phase === 'dec') popOnce('m1', 'Bulan pertama', '<p>Bacalah situasinya, lalu pilih satu dari tiga keputusan. Setelah memilih, Anda akan melihat <b>pembahasan</b>: mengapa pilihan itu tepat atau keliru, dasar akad dan aturannya, serta perubahan indikator.</p><p>Tombol <b>❓ Panduan</b> di kanan atas selalu tersedia.</p>');
  }

  function zone() {
    const M = D.months[S.m], z = $('zone');
    if (S.phase === 'ev') { z.innerHTML = `<div class="nextrow"><button class="btn gold" type="button" id="toDec">Lanjut ke keputusan ▶</button></div>`; $('toDec').onclick = () => { S.phase = 'dec'; save(); zone() }; return }
    const letters = 'ABC';
    const opts = M.opts.map((o, i) => `<button class="opt ${S.pick === i ? 'pick' : ''} ${S.phase !== 'dec' && o.best ? 'best' : ''}" type="button" data-i="${i}" ${S.phase !== 'dec' ? 'disabled' : ''}><span class="k">${letters[i]}</span><span>${md(o.t)}</span></button>`).join('');
    let h = `<div class="opts">${opts}</div>`;
    if (S.phase !== 'dec') {
      const o = M.opts[S.pick];
      const best = M.opts.findIndex(x => x.best);
      h += `<div class="fb ${o.best ? 'good' : o.bad ? 'bad' : ''}"><b class="v">${o.best ? '✓ Keputusan terbaik' : o.bad ? '✗ Keputusan berisiko' : '△ Dapat diterima, tetapi bukan yang terbaik'}</b>${md(o.fb)}
        ${!o.best ? `<p style="margin:8px 0 0"><b>Pilihan terbaik: ${letters[best]}.</b> ${md(M.opts[best].fb)}</p>` : ''}
        ${M.ref ? `<div class="ref">Rujukan: ${md(M.ref)}</div>` : ''}${effHtml(S.lastD)}</div>`;
      if (M.quiz && (S.phase === 'qz' || S.phase === 'done')) {
        const q = M.quiz;
        h += `<div class="quiz"><div class="eyebrow">Kuis akad bulan ini</div><p style="margin:4px 0 10px"><b>${md(q.q)}</b></p><div class="opts">${q.opts.map((t, i) => `<button class="opt ${S.qa === i ? 'pick' : ''} ${S.phase === 'done' && i === q.a ? 'best' : ''}" type="button" data-q="${i}" ${S.phase !== 'qz' ? 'disabled' : ''}><span class="k">${i + 1}</span><span>${md(t)}</span></button>`).join('')}</div>
        ${S.phase === 'done' ? `<div class="fb ${S.qa === q.a ? 'good' : 'bad'}"><b class="v">${S.qa === q.a ? '✓ Tepat' : '✗ Belum tepat'}</b>${md(q.why)}</div>` : ''}</div>`;
      }
      if (S.phase === 'done' || (S.phase === 'fb' && !M.quiz)) h += `<div class="nextrow"><button class="btn gold" type="button" id="next">${S.m < 11 ? 'Lanjut ke bulan ' + (S.m + 2) + ' ▶' : 'Lihat hasil akhir ▶'}</button></div>`;
      else if (S.phase === 'fb') h += `<div class="nextrow"><button class="btn gold" type="button" id="toQ">Jawab kuis akad ▶</button></div>`;
    }
    z.innerHTML = h;
    z.querySelectorAll('[data-i]').forEach(b => b.onclick = () => decide(+b.dataset.i));
    z.querySelectorAll('[data-q]').forEach(b => b.onclick = () => answer(+b.dataset.q));
    if ($('toQ')) $('toQ').onclick = () => { S.phase = 'qz'; save(); zone() };
    if ($('next')) $('next').onclick = next;
  }

  function decide(i) {
    if (S.phase !== 'dec') return;
    const M = D.months[S.m], o = M.opts[i];
    S.pick = i; S.lastD = apply(o.eff);
    (o.set || '').split(' ').filter(Boolean).forEach(f => S.flags[f] = true);
    S.picks[S.m] = { pick: i, best: !!o.best };
    S.log.push({ mo: 'Bulan ' + (S.m + 1), t: plain(o.short || o.t), cls: o.best ? 'good' : o.bad ? 'bad' : '' });
    S.phase = 'fb'; save(); main();
    const z = $('zone'); if (z) z.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (S.m === 0) popOnce('fb1', 'Membaca pembahasan', '<p>Kotak pembahasan menjelaskan dasar akad dan aturannya. Angka berwarna menunjukkan perubahan indikator.</p><p>' + (M.quiz ? 'Setelah membaca, tekan <b>Jawab kuis akad</b>.' : 'Setelah membaca, tekan <b>Lanjut</b>.') + '</p>');
  }
  function answer(i) {
    if (S.phase !== 'qz') return;
    const q = D.months[S.m].quiz;
    S.qa = i; S.quiz[S.m] = { ok: i === q.a, q: plain(q.q), a: plain(q.opts[q.a]) };
    S.phase = 'done'; save(); zone();
  }
  function next() {
    if (S.m >= 11) { finish(); return }
    S.m++; S.pick = null; S.qa = null; S.lastD = {}; S.phase = 'ev'; save(); render(); window.scrollTo(0, 0);
  }

  // ---------- penilaian
  function score() {
    const parts = [];
    D.ind.forEach(i => { const w = D.weights[i.k] || 0; if (!w) return; const v = S.v[i.k]; const r = (i.money || i.unit) ? Math.max(0, Math.min(1, v / i.target)) : Math.max(0, Math.min(1, v / 100)); parts.push([i.label, w, Math.round(r * w)]) });
    const nq = D.months.filter(m => m.quiz).length, ok = S.quiz.filter(q => q && q.ok).length;
    parts.push(['Literasi akad (' + ok + '/' + nq + ')', D.weights.quiz, Math.round(ok / nq * D.weights.quiz)]);
    const total = parts.reduce((a, p) => a + p[2], 0);
    const letter = total >= 85 ? 'A' : total >= 75 ? 'B+' : total >= 65 ? 'B' : total >= 55 ? 'C+' : total >= 45 ? 'C' : 'D';
    const v = D.verdicts.find(x => total >= x[0]);
    return { parts, total, letter, verdict: v[1], vdesc: v[2], bestN: S.picks.filter(p => p && p.best).length };
  }
  function finish() {
    S.phase = 'end'; S.t1 = Date.now(); const sc = score(); S.sc = sc.total; save();
    attUpd({ end: nowStr(), status: 'selesai', sc: sc.total }); render(); window.scrollTo(0, 0);
    pop('Satu tahun selesai', '<p>Nilai akhir Anda <b>' + sc.total + '</b> (' + sc.letter + '). ' + esc(sc.verdict) + '.</p><ol><li>Pelajari tabel tinjauan keputusan.</li><li>Isi refleksi lalu unduh PDF.</li><li>Tekan <b>Ulangi permainan</b> bila ingin mencoba strategi lain.</li></ol>');
  }
  function retake(status) {
    if (S && S.phase !== 'end') attUpd({ end: nowStr(), status: status || 'dihentikan' });
    try { localStorage.removeItem(K + '-state') } catch (e) { }
    S = fresh(); save(); render(); window.scrollTo(0, 0);
    pop('Percobaan ke-' + S.att, '<p>Permainan dimulai lagi dari bulan pertama dengan indikator awal. Riwayat percobaan sebelumnya tetap tersimpan dan ikut tercantum di PDF.</p>', 'Mulai bulan 1');
  }

  function hasil() {
    const sc = score(), id = S.id && S.id.nama ? S.id : get('-id', {}), letters = 'ABC';
    const draft = get('-draft', {});
    const nq = D.months.filter(m => m.quiz).length;
    $('app').innerHTML = topbar() + `
    <section class="panel"><div class="score"><div class="big"><div><span>${sc.total}</span><small>dari 100 · ${sc.letter}</small></div></div>
      <div><div class="eyebrow">Hasil percobaan ke-${S.att} · ${esc(id.nama || '')}</div><h2 style="font-size:30px;margin:4px 0">${esc(sc.verdict)}</h2><p class="muted" style="margin:0 0 10px">${md(sc.vdesc)}</p>
      <div class="parts">${sc.parts.map(p => `<div class="meter"><b>${esc(p[0])}<span>${p[2]} / ${p[1]}</span></b><div class="bar"><i class="${p[2] / p[1] < .35 ? 'low' : p[2] / p[1] < .65 ? 'mid' : ''}" style="width:${p[2] / p[1] * 100}%"></i></div></div>`).join('')}</div>
      <p class="dim">Keputusan terbaik: ${sc.bestN} dari 12 · kuis akad tepat: ${S.quiz.filter(q => q && q.ok).length} dari ${nq}. Indikator akhir: ${D.ind.map(i => esc(i.label) + ' ' + fmt(i, S.v[i.k])).join(', ')}.</p></div></div>
      <div class="nextrow"><button class="btn gold" type="button" id="again">↺ Ulangi permainan (retake)</button></div></section>
    <section class="panel" style="margin-top:14px"><b class="h">Tinjauan keputusan dan pembahasan</b>
      <div class="scrollx"><table class="review"><tr><th>Bulan</th><th>Situasi</th><th>Pilihan Anda</th><th>Pilihan terbaik dan alasannya</th></tr>
      ${D.months.map((m, i) => { const p = S.picks[i] || {}; const b = m.opts.findIndex(x => x.best); return `<tr><td>${i + 1}</td><td>${esc(m.title)}</td><td class="${p.best ? 'ok' : 'no'}">${p.pick == null ? '-' : letters[p.pick] + (p.best ? ' ✓' : ' ✗')}</td><td><b>${letters[b]}.</b> ${md(m.opts[b].t)}<div class="dim">${md(m.opts[b].fb)}</div></td></tr>` }).join('')}
      </table></div></section>
    <section class="panel" style="margin-top:14px"><b class="h">Refleksi dan lembar hasil PDF</b>
      <div class="form"><div class="grid2"><label>Nama lengkap<input id="fNama" value="${esc(draft.fNama || id.nama || '')}"></label><label>NIM<input id="fNim" value="${esc(draft.fNim || id.nim || '')}"></label></div>
      ${D.refl.map((q, i) => `<label>${i + 1}. ${esc(q)}<textarea id="fR${i}">${esc(draft['fR' + i] || '')}</textarea><span class="wc" id="wc${i}"></span></label>`).join('')}
      <div class="nextrow" style="justify-content:flex-start"><button class="btn gold" type="button" id="pdf">⬇ Unduh PDF</button><span class="dim" id="pdfSt"></span></div></div></section>`;
    $('hlp').onclick = helpNow;
    $('again').onclick = () => retake();
    const ids = ['fNama', 'fNim'].concat(D.refl.map((_, i) => 'fR' + i));
    const upd = () => { D.refl.forEach((_, i) => { const n = words($('fR' + i).value), el = $('wc' + i); el.textContent = n + ' kata' + (n < MINW ? ' (minimal ' + MINW + ')' : ''); el.classList.toggle('ok', n >= MINW) }); const d = {}; ids.forEach(x => d[x] = $(x).value); put('-draft', d) };
    ids.forEach(x => $(x).addEventListener('input', upd)); upd();
    $('pdf').onclick = () => pdf(sc);
  }

  function vcode(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) } return (h >>> 0).toString(36).toUpperCase() }

  function pdf(sc) {
    const st = $('pdfSt'), nama = $('fNama').value.trim(), nim = $('fNim').value.trim();
    const ans = D.refl.map((_, i) => $('fR' + i).value.trim());
    const bad = m => { st.style.color = 'var(--red)'; st.textContent = m };
    if (!nama || !nim) return bad('Nama lengkap dan NIM wajib diisi.');
    const short = ans.findIndex(a => words(a) < MINW);
    if (short >= 0) { $('fR' + short).focus(); return bad('Refleksi nomor ' + (short + 1) + ' belum mencapai ' + MINW + ' kata.') }
    if (!window.jspdf) return bad('Pembuat PDF belum termuat. Muat ulang halaman.');
    const { jsPDF } = window.jspdf, doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const W = 210, Mg = 16, CWm = W - 2 * Mg, NV = [16, 36, 63], GD = [190, 145, 0], GR = [90, 98, 110];
    let y = 18;
    const need = h => { if (y + h > 282) { doc.addPage(); y = 18 } };
    const head = t => { need(12); y += 2; doc.setFont('helvetica', 'bold'); doc.setFontSize(12); doc.setTextColor(...NV); doc.text(t, Mg, y); y += 2; doc.setDrawColor(...GD); doc.setLineWidth(.6); doc.line(Mg, y, Mg + 30, y); y += 6 };
    const para = (t, size = 10, col = [30, 30, 30], bold = false) => { doc.setFont('helvetica', bold ? 'bold' : 'normal'); doc.setFontSize(size); doc.setTextColor(...col); doc.splitTextToSize(plain(t), CWm).forEach(l => { need(size * .45); doc.text(l, Mg, y); y += size * .45 }); y += 1.5 };
    const row = (k, v) => { need(6); doc.setFont('helvetica', 'normal'); doc.setFontSize(10); doc.setTextColor(...GR); doc.text(k, Mg, y); doc.setTextColor(30, 30, 30); doc.setFont('helvetica', 'bold'); const l = doc.splitTextToSize(String(v), CWm - 45); doc.text(l, Mg + 45, y); y += 5 * l.length };
    const atts = get('-att', []), done = atts.filter(a => a.sc != null), best = done.length ? Math.max(...done.map(a => a.sc)) : sc.total;
    doc.setFillColor(...NV); doc.rect(0, 0, W, 30, 'F');
    doc.setTextColor(242, 194, 0); doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.text(D.pdfKicker, Mg, 11);
    doc.setTextColor(255, 255, 255); doc.setFontSize(16); doc.text(D.pdfTitle, Mg, 20);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(9); doc.text('Keuangan Digital Syariah (Magister)  -  Dosen Pengampu: Dr. Yaser Taufik Syamlan, ME, CIFP', Mg, 26);
    y = 40;
    head('Identitas');
    row('Nama', nama); row('NIM', nim); row('Waktu', nowStr());
    row('Percobaan', 'ke-' + S.att + ' dari ' + atts.length + ' percobaan di perangkat ini (nilai terbaik ' + best + ')');
    row('Kode verifikasi', vcode([nama, nim, sc.total, S.att, JSON.stringify(S.picks.map(p => p && p.pick))].join('|')));
    head('Nilai');
    row('Nilai akhir', sc.total + ' dari 100 (' + sc.letter + ')'); row('Vonis', sc.verdict);
    sc.parts.forEach(p => row(p[0], p[2] + ' / ' + p[1]));
    row('Indikator akhir', D.ind.map(i => i.label + ' ' + fmt(i, S.v[i.k])).join('; '));
    head('Jejak keputusan dan pembahasan');
    D.months.forEach((m, i) => { const p = S.picks[i] || {}; const b = m.opts.findIndex(x => x.best); para('Bulan ' + (i + 1) + ' - ' + m.title + ': pilihan ' + 'ABC'[p.pick] + (p.best ? ' (terbaik)' : ' (terbaik: ' + 'ABC'[b] + ')') + '. ' + (p.pick != null ? m.opts[p.pick].t : ''), 9.5); if (m.quiz && S.quiz[i]) para('   Kuis: ' + (S.quiz[i].ok ? 'tepat' : 'belum tepat') + '. Jawaban: ' + S.quiz[i].a, 9, GR) });
    const evs = Object.values(S.seenEv || {}); if (evs.length) { head('Akibat yang muncul'); evs.forEach(e => para(e.t, 9.5)) }
    head('Riwayat percobaan di perangkat ini');
    atts.forEach(a => para((a.n === S.att ? '(*) ' : '') + 'Percobaan ' + a.n + ' | mulai ' + (a.start || '-') + ' | selesai ' + (a.end || '-') + ' | ' + a.status + ' | nilai ' + (a.sc == null ? '-' : a.sc), 9));
    head('Refleksi');
    D.refl.forEach((q, i) => { para((i + 1) + '. ' + q, 10, NV, true); para(ans[i], 10) });
    const fn = D.key.toUpperCase() + ' Simulation - ' + nama.replace(/[^\w ]+/g, '') + ' - ' + nim + '.pdf';
    try { doc.save(fn) } catch (e) { window.open(doc.output('bloburl')) }
    st.style.color = 'var(--green)'; st.textContent = 'PDF dibuat: ' + fn + '. Unggah berkas ini ke LMS.';
    attUpd({ pdf: true });
  }

  window.addEventListener('keydown', e => { if (e.key === 'Escape') { const p = $('pop'); if (p) p.remove() } });
  render();
  window.CFSIM = { get state() { return S }, score, retake };
})();
