/* Turnamen di layar peserta: setelah babak lawan komputer selesai, dashboard pengajar mengacak pasangan
   dan menjalankan laga gugur sampai final. Halaman ini hanya mengikuti ctl.tur dan mengirim kemajuan laga lewat kanal p/.
   Memakai fungsi dan variabel global dari main.html (D, app, esc, store, rng, shuffle, nilai, poin, bunyi, ...). */
const TUR = (function () {
  'use strict';
  const LIVE = {};           // kemajuan semua peserta: kunci laga -> {i,n,skor,detik,done}
  let tm = null, draftT = null, tick = null, lastView = '', diumumkan = '';

  const T = () => CTL && CTL.tur;
  const aktif = () => { const t = T(); return !!(t && t.P && t.P[PID] && (t.st === 'run' || t.st === 'done')) };
  // posisi peserta di turnamen saat ini
  function posisi() {
    const t = T(); if (!aktif()) return null;
    if (t.st === 'done') return { k: 'done' };
    const R = t.R[t.cur]; const m = R && R.M.find(x => x.a === PID || x.b === PID);
    if (!m) { // tersingkir di ronde sebelumnya
      let r = 0; for (; r < t.cur; r++) { const mm = t.R[r].M.find(x => x.a === PID || x.b === PID); if (mm && mm.w && mm.w !== PID) break }
      return { k: 'out', r };
    }
    if (!m.b) return { k: 'bye', m, r: t.cur };
    if (m.w) return { k: 'hasil', m, r: t.cur };
    return { k: 'main', m, r: t.cur };
  }
  function viewKey() { const t = T(), p = posisi(); return t && p ? [t.id, t.st, t.cur, p.k, p.m ? p.m.id + (p.m.w || '') : ''].join('|') : '' }

  function onCtl() {
    if (!aktif()) { if (lastView) { lastView = ''; render() } return }
    const v = viewKey();
    const t = T(); if (diumumkan !== t.id && t.st === 'run') { diumumkan = t.id; bunyi('mulai'); toast('⚔️ Turnamen dimulai! Sistem sudah mengacak pasangan.', 6000) }
    if (v !== lastView) { lastView = v; render() } else perbaruiLive();
  }
  function onPair(k, o) { if (o) LIVE[k] = o; else delete LIVE[k]; if (aktif()) perbaruiLive() }

  const kunciSaya = m => Bagan.kunci(T(), m, PID);
  const lawan = m => m.a === PID ? m.b : m.a;
  function kirimLaga(m) {
    if (!CH || !tm) return;
    const o = { i: tm.ans.length, n: T().n, skor: tm.skor, detik: tm.ans.reduce((s, a) => s + a.detik, 0), done: tm.ans.length >= T().n, t: Date.now() };
    LIVE[kunciSaya(m)] = o; CH.setPair(kunciSaya(m), o).catch(() => { });
  }
  function muatLaga(m) {
    const key = T().id + '|' + m.id; tm = store.get('tm', null);
    if (!tm || tm.key !== key) { tm = { key, ans: [], skor: 0, phase: 'q', tq: Date.now() }; draftT = null; store.set('tm', tm); kirimLaga(m) }
    return tm;
  }
  function simpan(m) { store.set('tm', tm); kirimLaga(m) }

  function bilahLaga(m, r) {
    const t = T(), op = lawan(m), lo = LIVE[Bagan.kunci(t, m, op)] || {};
    return `<div class="matchbar"><div><div class="nm">🧑‍⚖️ ${esc(t.P[PID].nm)}</div><div class="sc" style="color:var(--blue)" id="tmMe">${tm ? tm.skor : 0}</div></div>
      <div class="vs">⚔️<small>${Bagan.namaRonde(t, r)}</small></div>
      <div class="r"><div class="nm">${esc(t.P[op].nm)} 🧑‍💼</div><div class="sc" style="color:var(--gold)" id="tmOp">${lo.skor || 0}</div><small class="muted" id="tmOpP">${lo.done ? 'selesai' : lo.i != null ? 'soal ' + Math.min(lo.i + 1, t.n) + ' dari ' + t.n : 'belum mulai'}</small></div></div>`;
  }
  function perbaruiLive() {
    const p = posisi(); if (!p) return;
    if (p.m && p.m.b && $('#tmOp')) { const t = T(), lo = LIVE[Bagan.kunci(t, p.m, lawan(p.m))] || {}; $('#tmOp').textContent = lo.skor || 0; $('#tmOpP').textContent = lo.done ? 'selesai' : lo.i != null ? 'soal ' + Math.min(lo.i + 1, t.n) + ' dari ' + t.n : 'belum mulai' }
    const bg = $('#bagan'); if (bg) bg.innerHTML = Bagan.html(T(), LIVE, PID);
  }

  function render() {
    clearInterval(tick); clearInterval(timerH);
    const t = T(), p = posisi(); lastView = viewKey();
    const bagan = `<div class="card"><h3>Bagan turnamen</h3><div id="bagan">${Bagan.html(t, LIVE, PID)}</div></div>`;
    if (p.k === 'done') {
      const pod = Bagan.podium(t), rank = pod.indexOf(PID);
      const juara = t.juara === PID;
      app.innerHTML = `<div class="card hero winner"><div class="em">${juara ? '🏆' : rank === 1 ? '🥈' : rank >= 2 ? '🥉' : '🎖️'}</div><div class="kicker">Turnamen selesai</div>
        <h1>${juara ? 'Anda juara turnamen!' : 'Juara: ' + esc(t.P[t.juara].nm)}</h1><p style="color:#dbe6f6;font-size:1.15rem">${juara ? 'Selamat! Anda mengalahkan semua lawan sampai final.' : rank === 1 ? 'Runner-up. Tinggal satu langkah lagi!' : rank >= 2 ? 'Semifinalis. Penampilan yang kuat.' : 'Terima kasih sudah bertanding. Pelajari lagi pembahasan di babak lawan komputer.'}</p></div>` + bagan;
      if (juara) { bunyi('menang'); konfeti() }
      return;
    }
    if (p.k === 'out') { app.innerHTML = `<div class="card hero"><div class="kicker">Turnamen berjalan</div><h2>Anda tersingkir di ${Bagan.namaRonde(t, p.r)}</h2><p style="color:#dbe6f6">Ikuti terus laga lainnya di bagan. Bagan diperbarui langsung.</p></div>` + bagan; return }
    if (p.k === 'bye') { app.innerHTML = `<div class="card hero"><div class="kicker">${Bagan.namaRonde(t, p.r)}</div><h2>Anda lolos otomatis ke babak berikutnya</h2><p style="color:#dbe6f6">Jumlah pemain di babak ini ganjil, dan skor Anda di babak lawan komputer termasuk yang tertinggi. Laga berikutnya mulai otomatis setelah babak ini selesai.</p></div>` + bagan; return }
    if (p.k === 'hasil') {
      const menang = p.m.w === PID, sMe = p.m.a === PID ? p.m.sa : p.m.sb, sOp = p.m.a === PID ? p.m.sb : p.m.sa, akhir = Bagan.totalRonde(t) - p.r === 1;
      app.innerHTML = `<div class="card hero winner"><div class="em">${menang ? '🎉' : '🛡️'}</div><div class="kicker">${Bagan.namaRonde(t, p.r)} · ${sMe} lawan ${sOp}</div>
        <h1>${menang ? (akhir ? 'Anda juara!' : 'Anda lolos ke babak berikutnya!') : 'Anda tersingkir'}</h1>
        <p style="color:#dbe6f6">${menang ? (akhir ? '' : 'Laga berikutnya mulai otomatis setelah semua laga di babak ini selesai.') : esc(t.P[lawan(p.m)].nm) + ' melaju. Ikuti terus bagan di bawah.'}${p.m.why ? ' <small>(' + esc(p.m.why) + ')</small>' : ''}</p></div>` + bagan;
      bunyi(menang ? 'menang' : 'kalah'); if (menang) konfeti();
      return;
    }
    // bermain
    muatLaga(p.m);
    if (tm.ans.length >= t.n) {
      app.innerHTML = bilahLaga(p.m, p.r) + `<div class="card wait"><div class="spin"></div><h2>Jawaban Anda sudah terkunci</h2><p class="muted">Menunggu lawan menyelesaikan laga. Pemenang ditentukan dari skor; bila sama, yang lebih cepat menang.</p></div>` + bagan;
      return;
    }
    const R = t.R[p.r], [bi, qi] = R.qs[tm.ans.length], q = D.soalDari(bi, qi), b = D.babakDari(bi);
    const ord = shuffle(q.t === 'sort' || q.t === 'order' ? q.items.length : q.o.length, rng(tm.key + ':' + tm.ans.length));
    if (tm.phase === 'rev') return bahas(p, q, b, ord);
    soal(p, q, b, ord);
  }

  function soal(p, q, b, ord) {
    const t = T(); if (!draftT) draftT = q.t === 'mc' ? null : q.t === 'sort' ? q.items.map(() => null) : [];
    const petunjuk = { mc: 'Pilih satu jawaban, lalu kunci.', multi: 'Pilih SEMUA jawaban yang benar. Pilihan salah mengurangi nilai.', sort: 'Untuk setiap baris, pilih kotak yang tepat.', order: 'Klik langkah sesuai urutan yang benar.' }[q.t];
    let body = '';
    if (q.t === 'mc' || q.t === 'multi') body = `<div class="opts">${ord.map((oi, k) => `<button type="button" class="opt" data-o="${oi}"><span class="L">${q.t === 'multi' ? '☐' : LET[k]}</span><span>${q.o[oi]}</span></button>`).join('')}</div>`;
    else if (q.t === 'sort') body = ord.map(ii => `<div class="sortrow"><div class="it">${esc(q.items[ii][0])}</div><div class="bins">${q.bins.map((bn, bj) => `<button type="button" data-i="${ii}" data-b="${bj}">${esc(bn)}</button>`).join('')}</div></div>`).join('');
    else body = `<div class="orderbox"><div class="pool"><h4>Pilihan</h4><div id="pool"></div></div><div class="seq"><h4>Urutan Anda</h4><div id="seq"></div><button type="button" class="btn ghost sm" id="ulang">↺ Ulangi urutan</button></div></div>`;
    app.innerHTML = bilahLaga(p.m, p.r) + `<div class="card" style="border-top:6px solid ${b.warna}">
      <div class="qhead"><span class="bk" style="background:${b.warna}">${b.ikon} ${esc(b.nama)}</span><span class="no">Soal ${tm.ans.length + 1} dari ${t.n}</span>
      <div class="timer" id="tm"><svg width="64" height="64"><circle cx="32" cy="32" r="27" stroke="#25406b" stroke-width="6" fill="none"/><circle id="tmc" cx="32" cy="32" r="27" stroke="#f2b632" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="169.6"/></svg><b id="tmb">${D.DETIK}</b></div></div>
      <div class="q">${q.q}</div>${q.ctx ? `<div class="ctx">${q.ctx}</div>` : ''}<p class="muted" style="margin:0 0 10px">${petunjuk}</p>${body}
      <div class="row" style="margin-top:16px"><div style="flex:1"></div><button class="btn gold" id="kunciT" type="button" disabled>🔒 Kunci jawaban</button></div></div>`;
    const cek = () => { $('#kunciT').disabled = !(q.t === 'mc' ? draftT != null : q.t === 'multi' ? draftT.length > 0 : q.t === 'sort' ? draftT.every(x => x != null) : draftT.length === q.items.length) };
    if (q.t === 'mc' || q.t === 'multi') app.querySelectorAll('.opt').forEach(el => el.onclick = () => {
      const oi = +el.dataset.o;
      if (q.t === 'mc') { draftT = oi; app.querySelectorAll('.opt').forEach(x => x.classList.toggle('sel', x === el)) }
      else { draftT = draftT.includes(oi) ? draftT.filter(x => x !== oi) : draftT.concat(oi); el.classList.toggle('sel'); el.querySelector('.L').textContent = draftT.includes(oi) ? '☑' : '☐' }
      cek();
    });
    else if (q.t === 'sort') app.querySelectorAll('.bins button').forEach(el => el.onclick = () => { draftT[+el.dataset.i] = +el.dataset.b; el.parentNode.querySelectorAll('button').forEach(x => x.classList.toggle('sel', x === el)); cek() });
    else { const g = () => { $('#pool').innerHTML = ord.filter(ii => !draftT.includes(ii)).map(ii => `<button type="button" data-ii="${ii}">${esc(q.items[ii])}</button>`).join(''); $('#seq').innerHTML = draftT.map((ii, k) => `<div><i>${k + 1}</i>${esc(q.items[ii])}</div>`).join(''); $('#pool').querySelectorAll('button').forEach(el => el.onclick = () => { draftT.push(+el.dataset.ii); g(); cek() }) }; $('#ulang').onclick = () => { draftT = []; g(); cek() }; g() }
    cek();
    const kunciJawab = () => {
      clearInterval(tick); if (tm.phase !== 'q') return;
      let pick = draftT; if (q.t === 'sort' && pick && pick.every(x => x == null)) pick = null; if ((q.t === 'multi' || q.t === 'order') && pick && !pick.length) pick = null;
      const detik = Math.min(D.DETIK, Math.round((Date.now() - tm.tq) / 1000)), f = nilai(q, pick), pts = poin(f, detik);
      tm.ans.push({ pick, f, pts, detik }); tm.skor += pts; tm.phase = 'rev'; draftT = null; simpan(p.m); bunyi(f >= 1 ? 'ok' : 'bad'); render();
    };
    $('#kunciT').onclick = kunciJawab;
    const step = () => { const s = Math.max(0, D.DETIK - (Date.now() - tm.tq) / 1000), el = $('#tmb'); if (!el) { clearInterval(tick); return } el.textContent = Math.ceil(s); $('#tmc').style.strokeDashoffset = 169.6 * (1 - s / D.DETIK); $('#tmc').style.stroke = s < 10 ? '#ff4d5e' : s < 25 ? '#ffa53b' : '#f2b632'; $('#tm').classList.toggle('low', s < 10); if (s <= 0) kunciJawab() };
    step(); tick = setInterval(step, 250);
  }

  function bahas(p, q, b, ord) {
    const t = T(), a = tm.ans[tm.ans.length - 1], last = tm.ans.length >= t.n;
    let jawab = '';
    if (q.t === 'mc') jawab = 'Jawaban benar: <b>' + q.o[q.a] + '</b>';
    else if (q.t === 'multi') jawab = 'Jawaban benar: <b>' + q.a.map(i => q.o[i]).join('; ') + '</b>';
    else if (q.t === 'sort') jawab = q.items.map(it => esc(it[0]) + ' → <b>' + esc(q.bins[it[1]]) + '</b>').join('<br>');
    else jawab = q.items.map((x, k) => (k + 1) + '. ' + esc(x)).join('<br>');
    app.innerHTML = bilahLaga(p.m, p.r) + `<div class="card" style="border-top:6px solid ${b.warna}">
      <div class="verdict" style="grid-template-columns:1fr"><div style="border-color:${a.f >= 1 ? 'var(--green)' : a.f > 0 ? 'var(--amber)' : 'var(--red)'}"><div class="muted">Soal ${tm.ans.length} dari ${t.n} · ${a.detik} detik</div><div class="big" style="color:${a.f >= 1 ? 'var(--green)' : a.f > 0 ? 'var(--amber)' : 'var(--red)'}">${a.f >= 1 ? '✓ Tepat' : a.f > 0 ? '◐ ' + Math.round(a.f * 100) + '% tepat' : '✕ Belum tepat'} · +${a.pts}</div></div></div>
      <div class="q" style="font-size:1.1rem">${q.q}</div><div class="exp">${jawab}</div>
      <div class="lgl"><span class="ic">⚖️</span><div><b class="h">Kacamata Legal</b>${q.legal}</div></div>
      <div class="row" style="justify-content:flex-end"><button class="btn gold" id="lanjutT" type="button">${last ? '🏁 Selesaikan laga' : 'Soal berikutnya ▶'}</button></div></div>`;
    $('#lanjutT').onclick = () => { tm.phase = 'q'; tm.tq = Date.now(); simpan(p.m); render(); scrollTo(0, 0) };
  }
  return { aktif, render, onCtl, onPair, LIVE };
})();
