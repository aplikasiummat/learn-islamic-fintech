/* Bagan turnamen Duel Komite: dipakai bersama oleh dashboard pengajar (yang menjalankan turnamen) dan layar peserta.
   Struktur ctl.tur: { id, st:'run'|'done', n (soal per laga), P:{pid:{nm,un,q}}, R:[{qs:[[b,k]], t0, dl, tEnd, M:[{id,a,b,w,sa,sb,why}]}], cur, juara } */
window.Bagan = (function () {
  'use strict';
  const esc = t => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const totalRonde = T => T && T.R && T.R[0] ? Math.round(Math.log2(T.R[0].M.length * 2)) : 0;
  function namaRonde(T, r) {
    const sisa = totalRonde(T) - r;
    return sisa === 1 ? 'Final' : sisa === 2 ? 'Semifinal' : sisa === 3 ? 'Perempat final' : sisa === 4 ? 'Babak 16 besar' : 'Babak ' + (r + 1);
  }
  const kunci = (T, m, pid) => T.id + '_' + m.id + '_' + pid;
  // skor yang tampil: skor akhir bila laga selesai, bila belum skor langsung dari peserta
  function skor(T, m, pid, live) {
    if (!pid) return null;
    if (m.w) return pid === m.a ? m.sa : m.sb;
    const l = live && live[kunci(T, m, pid)]; return l ? l.skor : null;
  }
  function prog(T, m, pid, live) { const l = live && live[kunci(T, m, pid)]; return l ? (l.done ? '✓' : l.i + '/' + T.n) : '' }
  function baris(T, m, pid, live, me) {
    if (!pid) return `<div class="bm-p bye"><span>— lolos otomatis —</span></div>`;
    const p = T.P[pid] || { nm: '?' }, s = m.b ? skor(T, m, pid, live) : null, win = m.w === pid, lose = m.w && m.w !== pid;
    return `<div class="bm-p${win ? ' win' : ''}${lose ? ' lose' : ''}${pid === me ? ' me' : ''}"><span class="nm">${win ? '🏅 ' : ''}${esc(p.nm)}</span><span class="pg">${m.w ? '' : prog(T, m, pid, live)}</span><b>${s == null ? '' : s}</b></div>`;
  }
  function html(T, live, me) {
    if (!T || !T.R) return '';
    const tot = totalRonde(T); let out = '<div class="bracket">';
    for (let r = 0; r < tot; r++) {
      const R = T.R[r], nM = T.R[0].M.length / Math.pow(2, r);
      out += `<div class="br-col"><div class="br-h">${namaRonde(T, r)}${R && r === T.cur && T.st === 'run' ? ' <i class="live">● LIVE</i>' : ''}</div>`;
      for (let k = 0; k < nM; k++) {
        const m = R && R.M[k];
        out += m ? `<div class="bm${m.w ? ' done' : ''}${(m.a === me || m.b === me) && me ? ' mine' : ''}">${baris(T, m, m.a, live, me)}${baris(T, m, m.b, live, me)}</div>`
          : `<div class="bm wait"><div class="bm-p"><span class="muted">menunggu</span></div><div class="bm-p"><span class="muted">menunggu</span></div></div>`;
      }
      out += '</div>';
    }
    out += `<div class="br-col champ"><div class="br-h">Juara</div><div class="bm trophy">${T.juara ? `<div class="em">🏆</div><b>${esc(T.P[T.juara].nm)}</b>` : '<div class="em" style="opacity:.3">🏆</div><span class="muted">?</span>'}</div></div></div>`;
    return out;
  }
  // peringkat akhir: juara, runner-up, lalu yang kalah di semifinal
  function podium(T) {
    if (!T || T.st !== 'done') return [];
    const f = T.R[T.R.length - 1].M[0], out = [T.juara, f.a === T.juara ? f.b : f.a];
    const sf = T.R[T.R.length - 2]; if (sf) sf.M.forEach(m => { const l = m.w === m.a ? m.b : m.a; if (l) out.push(l) });
    return out.filter(Boolean);
  }
  return { html, namaRonde, totalRonde, kunci, podium, esc };
})();
