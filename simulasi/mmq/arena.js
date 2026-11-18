/* Unsur permainan bersama: petunjuk langkah, bunyi, konfeti, hitung naik, bilah waktu, dan peringkat langsung. */
window.Arena = (function () {
  'use strict';
  const esc = t => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  let on = true; try { on = localStorage.getItem('pnm.sfx') !== '0' } catch (e) { }
  let ac = null;
  function tone(f, d, type, v, when) {
    if (!on) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime + (when || 0);
      o.type = type || 'sine'; o.frequency.setValueAtTime(f, t); g.gain.setValueAtTime(v || .08, t); g.gain.exponentialRampToValueAtTime(.0001, t + d);
      o.connect(g); g.connect(ac.destination); o.start(t); o.stop(t + d + .02);
    } catch (e) { }
  }
  const sfx = k => ({
    tick: () => tone(880, .06, 'square', .04),
    ok: () => { tone(660, .12, 'triangle', .1); tone(880, .12, 'triangle', .1, .1); tone(1320, .2, 'triangle', .1, .2) },
    mid: () => { tone(520, .15, 'triangle', .08); tone(660, .2, 'triangle', .08, .12) },
    bad: () => { tone(220, .25, 'sawtooth', .06); tone(160, .3, 'sawtooth', .06, .15) },
    alarm: () => { tone(740, .12, 'square', .06); tone(740, .12, 'square', .06, .2) },
    win: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, .25, 'triangle', .1, i * .12)),
  }[k] || (() => { }))();
  // tombol bunyi di bilah atas
  function pasangSfx() {
    const top = document.querySelector('.top'); if (!top || top.querySelector('.sfx')) return;
    const b = document.createElement('button'); b.className = 'sfx'; b.type = 'button';
    const tulis = () => b.textContent = on ? '🔊 Bunyi' : '🔇 Bunyi';
    tulis(); b.onclick = () => { on = !on; try { localStorage.setItem('pnm.sfx', on ? '1' : '0') } catch (e) { } tulis(); if (on) sfx('ok') };
    top.insertBefore(b, top.querySelector('.conn'));
  }
  // petunjuk: langkah-langkah (array teks), indeks langkah sekarang, dan kalimat "berikutnya"
  function coach(steps, now, next) {
    return `${steps ? `<div class="stepper">${steps.map((s, i) => `<span class="${i < now ? 'done' : i === now ? 'now' : ''}">${i < now ? '✓ ' : (i + 1) + ' · '}${esc(s)}</span>`).join('')}</div>` : ''}
      ${next ? `<div class="coach"><span class="ar">👉</span><div><b>Langkah berikutnya:</b> ${next}</div></div>` : ''}`;
  }
  function confetti(ms) {
    let c = document.getElementById('confetti'); if (!c) { c = document.createElement('canvas'); c.id = 'confetti'; document.body.appendChild(c) }
    const x = c.getContext('2d'); c.width = innerWidth; c.height = innerHeight;
    const col = ['#e2a72e', '#0066b3', '#0f8a63', '#d2452f', '#ffd57a', '#7fb2ee'];
    const P = Array.from({ length: 160 }, () => ({ x: Math.random() * c.width, y: -20 - Math.random() * c.height * .5, r: 4 + Math.random() * 6, vx: -2 + Math.random() * 4, vy: 2 + Math.random() * 4, a: Math.random() * 6, c: col[Math.floor(Math.random() * col.length)] }));
    const t0 = performance.now();
    (function f(t) {
      x.clearRect(0, 0, c.width, c.height);
      P.forEach(p => { p.x += p.vx; p.y += p.vy; p.a += .1; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); x.restore() });
      if (t - t0 < (ms || 3500)) requestAnimationFrame(f); else x.clearRect(0, 0, c.width, c.height);
    })(t0);
  }
  function countUp(el, to, ms) {
    if (!el) return; const from = 0, t0 = performance.now(), dec = String(to).includes('.') ? 1 : 0;
    (function f(t) { const k = Math.min(1, (t - t0) / (ms || 900)); el.textContent = (from + (to - from) * (1 - Math.pow(1 - k, 3))).toFixed(dec); if (k < 1) requestAnimationFrame(f) })(t0);
  }
  // bilah waktu: dipanggil setiap detik dari halaman game
  function waktu(sisa, total) {
    const t = document.getElementById('tm'); const b = document.getElementById('tb');
    if (b) b.style.width = Math.max(0, sisa / total * 100) + '%';
    if (t && sisa <= 10 && sisa > 0) sfx('tick');
  }
  // peringkat langsung dari dashboard (ctl.papan[game][regId] = [peringkat, jumlah, selisih dari pemimpin])
  function peringkat(ctl, game, regId) {
    const top = document.querySelector('.top'); if (!top) return;
    let c = top.querySelector('.chip.rank');
    const r = ctl && ctl.papan && ctl.papan[game] && ctl.papan[game][regId];
    if (!r) { if (c) c.remove(); return }
    if (!c) { c = document.createElement('span'); c.className = 'chip rank'; top.insertBefore(c, top.querySelector('.sfx') || top.querySelector('.conn')) }
    c.textContent = r[0] === 1 ? '🏆 Memimpin · 1 dari ' + r[1] : 'Peringkat ' + r[0] + ' dari ' + r[1] + (r[2] ? ' · kurang ' + r[2] + ' poin' : '');
  }
  // pemahaman yang diharapkan dan kaitannya dengan materi hari ini
  const PAHAM = {
    akad: { judul: 'Pilih Akadnya', sesi: 'Sesi 1 · Akad-Akad Syariah dan MMQ dari Teori ke Praktik', poin: ['Akad dipilih dari model bisnis: apa yang dibutuhkan nasabah, dari mana dana PNM, dan apakah transaksinya bisa dibuktikan pada skala jutaan nasabah.', 'Murabahah unggul dalam keadaan normal karena marginnya pasti, sejalan dengan dana PNM yang berimbal tetap.', 'Saat nasabah kesulitan membayar, tagihan murabahah terkunci sehingga 3R menjadi sempit. Di sinilah MMQ menjadi jawaban.'], kait: 'Dua rumpun akad (pasti dan tidak pasti), premis dana berimbal tetap, dan fenomena 3R (Fatwa DSN-MUI 48/2005) yang dibahas di Sesi 1.' },
    cp: { judul: 'Cabang vs Pusat', sesi: 'Sesi 2 · Aspek Strategis dari MMQ', poin: ['Akadnya mudah; proses bisnis yang menyertainya yang menentukan kepatuhan syariah.', 'Kebijakan pusat yang tidak memahami pekerjaan cabang muncul kembali sebagai temuan audit, pengaduan nasabah, atau penyaluran yang tertahan.', 'Taksiran, sistem, dan insentif petugas adalah titik kritis MMQ, terutama di Mekaar.'], kait: 'Tugas kantor pusat dan cabang, kebijakan dan SOP yang disusun bersama, tujuh pilar, serta implikasi MMQ bagi setiap divisi yang dibahas di Sesi 2.' },
    audit: { judul: 'Jejak Audit MMQ', sesi: 'Sesi terakhir · Risiko dan audit MMQ', poin: ['Bukti yang tidak dibuat saat akad tidak dapat diminta setahun kemudian.', 'Auditor menilai tiga hal: ada atau tidaknya temuan, jenis risikonya, dan tindakan perbaikannya.', 'Berkas yang bersih juga harus berani dinyatakan bersih.'], kait: 'Pilar risiko dan pengendalian serta pilar DPS, audit, dan kepatuhan yang dibahas di sesi terakhir, dengan kejadian yang berasal dari Game 2.' },
  };
  function paham(g) {
    const x = PAHAM[g]; if (!x) return '';
    return `<div class="card" style="border-left:8px solid var(--gold)"><div class="kicker">Yang ingin dipahami dari ${esc(x.judul)}</div>
      <ol style="margin:8px 0 10px;padding-left:22px">${x.poin.map(t => `<li style="margin:4px 0">${esc(t)}</li>`).join('')}</ol>
      <div class="fact" style="margin:0"><b>Kaitan dengan materi hari ini · ${esc(x.sesi)}.</b> ${esc(x.kait)}</div></div>`;
  }
  // tombol "Mulai ulang" di bilah atas: menghapus permainan yang sedang berjalan di perangkat ini (riwayat skor tetap tercatat)
  function ulang(kunci) {
    const top = document.querySelector('.top'); if (!top || top.querySelector('.ulang')) return;
    const b = document.createElement('button'); b.className = 'sfx ulang'; b.type = 'button'; b.textContent = '↺ Mulai ulang';
    b.onclick = () => {
      if (!b.dataset.y) { b.dataset.y = 1; b.textContent = 'Ketuk lagi untuk mulai dari awal'; setTimeout(() => { delete b.dataset.y; b.textContent = '↺ Mulai ulang' }, 4000); return }
      try { localStorage.removeItem(kunci) } catch (e) { }
      location.href = location.pathname + '?baru=' + Date.now();
    };
    top.insertBefore(b, top.querySelector('.sfx') || top.querySelector('.conn'));
  }
  document.addEventListener('DOMContentLoaded', pasangSfx);
  return { sfx, coach, confetti, countUp, waktu, peringkat, esc, paham, ulang };
})();
