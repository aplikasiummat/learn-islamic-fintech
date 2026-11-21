/* Round robin Liga Crowdfunding: pembagian grup, jadwal, klasemen, dan tampilan bagan.
   Dipakai bersama oleh dashboard pengajar (wasit) dan layar peserta. Struktur turnamen T ada di ctl.tur:
   { id, st:'run'|'done', n, P:{pid:{nm,q}}, G:[[pid]], J:[[{g,a,b}]], R:[{f:'grup'|'final', qs, t0, dl, M:[{id,g,a,b,w,sa,sb,why}], tEnd}], cur, juara } */
window.RR = (function () {
  'use strict';
  const esc = t => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const kunci = (T, m, pid) => T.id + '_' + m.id + '_' + pid;

  // grup berisi 3 sampai 5 pemain; ular (snake) berdasarkan nilai tahap, sehingga kekuatan tiap grup seimbang
  function grup(ids) {
    const n = ids.length;
    if (n <= 5) return [ids.slice()];
    let a = Math.floor(n / 4), b = 0;
    while (a >= 0 && (n - 4 * a) % 3) a--;
    b = (n - 4 * a) / 3;
    const k = a + b, G = Array.from({ length: k }, () => []), cap = G.map((_, i) => i < a ? 4 : 3);
    let i = 0, dir = 1;
    ids.forEach(id => {
      while (G[i].length >= cap[i]) { i += dir; if (i >= k || i < 0) { dir = -dir; i += dir } }
      G[i].push(id); i += dir; if (i >= k || i < 0) { dir = -dir; i += dir }
    });
    return G;
  }
  // metode lingkaran: setiap pemain bertemu semua pemain lain di grupnya tepat sekali
  function jadwal(G) {
    const per = G.map((g, gi) => {
      const p = g.slice(); if (p.length % 2) p.push(null);
      const m = p.length, R = [];
      for (let r = 0; r < m - 1; r++) {
        const L = [];
        for (let i = 0; i < m / 2; i++) { const a = p[i], b = p[m - 1 - i]; if (a == null && b == null) continue; L.push(a == null ? { g: gi, a: b, b: null } : { g: gi, a, b }) }
        R.push(L); p.splice(1, 0, p.pop());
      }
      return R;
    });
    const nR = Math.max(...per.map(r => r.length));
    return Array.from({ length: nR }, (_, r) => per.flatMap(x => x[r] || []));
  }

  // klasemen: menang 3, seri 1, kalah 0; urutan poin, selisih skor, total skor, lalu nilai tahap
  function klasemen(T) {
    const K = {};
    Object.keys(T.P).forEach(pid => K[pid] = { pid, nm: T.P[pid].nm, q: T.P[pid].q, g: -1, main: 0, m: 0, s: 0, k: 0, pts: 0, sf: 0, sa: 0 });
    (T.G || []).forEach((g, gi) => g.forEach(pid => { if (K[pid]) K[pid].g = gi }));
    T.R.forEach(R => { if (R.f !== 'grup') return; R.M.forEach(m => {
      if (!m.b || !m.w) return;
      const A = K[m.a], B = K[m.b]; A.main++; B.main++; A.sf += m.sa; A.sa += m.sb; B.sf += m.sb; B.sa += m.sa;
      if (m.w === 'seri') { A.s++; B.s++; A.pts++; B.pts++ } else if (m.w === m.a) { A.m++; B.k++; A.pts += 3 } else { B.m++; A.k++; B.pts += 3 }
    }) });
    return Object.values(K).sort((x, y) => y.pts - x.pts || (y.sf - y.sa) - (x.sf - x.sa) || y.sf - x.sf || y.q - x.q);
  }
  const nGrupRonde = T => (T.J || []).length;
  function namaRonde(T, r) { const R = T.R[r]; if (!R) return ''; return R.f === 'final' ? 'Final' : 'Round robin · laga ' + (r + 1) + ' dari ' + nGrupRonde(T) }

  // tabel klasemen per grup, dengan zona final (dua teratas klasemen gabungan)
  function tabel(T, me) {
    const K = klasemen(T), top2 = K.slice(0, 2).map(x => x.pid), G = T.G || [];
    const baris = x => `<tr class="${x.pid === me ? 'me' : ''}${top2.includes(x.pid) ? ' zf' : ''}"><td><b>${esc(x.nm)}</b>${top2.includes(x.pid) ? ' <span class="pill w">zona final</span>' : ''}</td><td class="n">${x.main}</td><td class="n">${x.m}</td><td class="n">${x.s}</td><td class="n">${x.k}</td><td class="n">${x.sf - x.sa > 0 ? '+' : ''}${x.sf - x.sa}</td><td class="n"><b>${x.pts}</b></td></tr>`;
    const head = '<tr><th>Peserta</th><th>Main</th><th>M</th><th>S</th><th>K</th><th>Selisih</th><th>Poin</th></tr>';
    const grupHtml = G.map((g, gi) => `<div class="card grp"><h3>${G.length > 1 ? 'Grup ' + 'ABCDEFGH'[gi] : 'Klasemen'}</h3><div class="scroll"><table class="tb">${head}${K.filter(x => x.g === gi).map(baris).join('')}</table></div></div>`).join('');
    const gab = G.length > 1 ? `<div class="card"><h3>Klasemen gabungan · dua teratas masuk final</h3><div class="scroll"><table class="tb"><tr><th>#</th><th>Peserta</th><th>Grup</th><th>Poin</th><th>Selisih</th><th>Total skor</th></tr>${K.map((x, i) => `<tr class="${x.pid === me ? 'me' : ''}${i < 2 ? ' zf' : ''}"><td>${i + 1}</td><td><b>${esc(x.nm)}</b></td><td>${'ABCDEFGH'[x.g] || '-'}</td><td class="n"><b>${x.pts}</b></td><td class="n">${x.sf - x.sa > 0 ? '+' : ''}${x.sf - x.sa}</td><td class="n">${x.sf}</td></tr>`).join('')}</table></div></div>` : '';
    return `<div class="grps">${grupHtml}</div>${gab}`;
  }
  // daftar laga pada ronde berjalan beserta skor langsung
  function laga(T, LIVE, me) {
    const R = T.R[T.cur]; if (!R) return '';
    const sk = (m, p) => { const l = LIVE[kunci(T, m, p)] || {}; return { s: l.skor || 0, t: l.done ? 'selesai' : l.i != null ? 'soal ' + Math.min(l.i + 1, T.n) : 'belum mulai' } };
    return `<div class="lagas">${R.M.map(m => {
      if (!m.b) return `<div class="lg bye"><b>${esc(T.P[m.a].nm)}</b><small>istirahat di laga ini</small></div>`;
      const A = sk(m, m.a), B = sk(m, m.b), wa = m.w === m.a, wb = m.w === m.b;
      return `<div class="lg${m.a === me || m.b === me ? ' mine' : ''}${R.f === 'final' ? ' fin' : ''}">${R.f === 'grup' && (T.G || []).length > 1 ? `<small class="gl">Grup ${'ABCDEFGH'[m.g]}</small>` : ''}
        <div class="pr${wa ? ' win' : wb ? ' lose' : ''}"><span>${esc(T.P[m.a].nm)}</span><b>${m.w ? m.sa : A.s}</b><small>${m.w ? '' : A.t}</small></div>
        <div class="pr${wb ? ' win' : wa ? ' lose' : ''}"><span>${esc(T.P[m.b].nm)}</span><b>${m.w ? m.sb : B.s}</b><small>${m.w ? '' : B.t}</small></div>
        ${m.w ? `<small class="hs">${m.w === 'seri' ? 'Seri' : 'Menang: ' + esc(T.P[m.w].nm)}${m.why ? ' · ' + esc(m.why) : ''}</small>` : ''}</div>`;
    }).join('')}</div>`;
  }
  return { grup, jadwal, klasemen, kunci, namaRonde, nGrupRonde, tabel, laga };
})();
