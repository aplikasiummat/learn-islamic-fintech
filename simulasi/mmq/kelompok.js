/* Data pendaftaran kelompok yang dipakai bersama oleh ruang tunggu (daftar.html) dan ketiga game.
   Satu gawai = satu kelompok. Data hanya tersimpan di gawai ini; pengajar melihatnya lewat dashboard. */
window.PNMReg = (function () {
  'use strict';
  const K = 'pnmreg.v1';
  const get = () => { try { return JSON.parse(localStorage.getItem(K) || 'null') } catch (e) { return null } };
  const set = r => { try { localStorage.setItem(K, JSON.stringify(r)) } catch (e) { } return r };
  const clear = () => { try { localStorage.removeItem(K) } catch (e) { } };
  const baru = (nama, anggota, kode) => set({ id: 'g' + Math.random().toString(36).slice(2, 9), nama, anggota, kode, t: Date.now(), pergi: 0 });
  // status singkat yang dikirim ke dashboard pengajar
  const status = (r, extra) => Object.assign({ g: 'reg', reg: r.id, nama: r.nama, anggota: r.anggota, t0: r.t, t: Date.now() }, extra || {});
  // nama halaman game untuk setiap kode game di dashboard
  const HAL = { akad: 'pilih-akad.html', cp: 'cabang-pusat.html', audit: 'jejak-audit.html' };
  const fmtDetik = d => d == null ? '–' : Math.floor(d / 60) + ':' + String(Math.round(d % 60)).padStart(2, '0');
  return { get, set, clear, baru, status, HAL, fmtDetik };
})();
