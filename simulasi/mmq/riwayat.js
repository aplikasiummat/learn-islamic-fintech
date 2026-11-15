/* Riwayat percobaan untuk game MMQ: setiap percobaan kelompok tercatat di perangkat ini dan tidak pernah dihapus,
   termasuk saat kelompok bermain ulang (retake). Dipakai oleh pilih-akad, cabang-pusat, dan jejak-audit. */
window.PNMRiwayat = (function () {
  'use strict';
  const key = g => 'pnmriwayat.' + g;
  const baca = g => { try { return JSON.parse(localStorage.getItem(key(g)) || '[]') } catch (e) { return [] } };
  const tulis = (g, a) => { try { localStorage.setItem(key(g), JSON.stringify(a.slice(-200))) } catch (e) { } };
  const waktu = () => new Date().toLocaleString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // percobaan baru: percobaan lain yang masih berjalan dicatat "tidak selesai"; mengembalikan nomor percobaan
  function mulai(g, id, nama) {
    const a = baca(g); a.forEach(r => { if (r.status === 'berjalan' && r.id !== id) r.status = 'tidak selesai' });
    let r = a.find(x => x.id === id);
    if (!r) { r = { n: a.reduce((m, x) => Math.max(m, x.n), 0) + 1, id, nama, mulai: waktu(), selesai: '', status: 'berjalan', skor: null, maks: null }; a.push(r) }
    tulis(g, a); return r.n;
  }
  // percobaan selesai dengan skornya (aman dipanggil berulang kali)
  function selesai(g, id, nama, skor, maks) {
    const a = baca(g); let r = a.find(x => x.id === id);
    if (!r) { r = { n: a.reduce((m, x) => Math.max(m, x.n), 0) + 1, id, mulai: '-' }; a.push(r) }
    if (r.status !== 'selesai') r.selesai = waktu();
    Object.assign(r, { nama, status: 'selesai', skor, maks }); tulis(g, a); return r.n;
  }
  const nomor = (g, id) => { const r = baca(g).find(x => x.id === id); return r ? r.n : 0 };
  // tabel riwayat untuk layar awal dan layar akhir
  function html(g, idKini) {
    const a = baca(g); if (!a.length) return '';
    const sel = a.filter(r => r.skor != null), best = sel.length ? Math.max(...sel.map(r => r.skor)) : null;
    return `<div class="card"><h3>Riwayat percobaan di perangkat ini · ${a.length} percobaan${best != null ? ' · skor terbaik ' + best : ''}</h3>
      <p class="muted" style="margin-top:0">Setiap percobaan tercatat, termasuk yang tidak selesai. Bermain ulang tidak menghapus riwayat ini, dan fasilitator melihat setiap percobaan di papan skornya.</p>
      <table><tr><th>#</th><th>Kelompok</th><th>Mulai</th><th>Status</th><th style="text-align:right">Skor</th></tr>
      ${a.slice().reverse().map(r => `<tr${r.id === idKini ? ' style="background:#fbf1d0;font-weight:700"' : ''}><td>${r.n}</td><td>${esc(r.nama || '-')}</td><td>${esc(r.mulai || '-')}</td><td>${esc(r.status)}</td><td style="text-align:right">${r.skor != null ? r.skor + (r.maks ? ' / ' + r.maks : '') : '-'}</td></tr>`).join('')}
      </table></div>`;
  }
  // nama yang dikirim ke papan skor fasilitator: percobaan kedua dan seterusnya diberi tanda
  const label = (g, id, nama) => { const n = nomor(g, id); return n > 1 ? nama + ' · percobaan ' + n : nama };
  return { mulai, selesai, nomor, html, label };
})();
