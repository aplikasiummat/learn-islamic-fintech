# Learn Islamic Fintech with Tazkia

**Wakaf ilmu dari Dr. Yaser Taufik Syamlan, ME, CIFP** bersama Universitas Tazkia.

Situs ini membuka materi kuliah Teknologi Keuangan Islam (Islamic Fintech) agar semua orang dapat belajar dengan mudah dan murah: deck kuliah dalam format PDF, studi kasus Indonesia, serta simulasi interaktif *Donation Based Crowdfunding Simulation*. Tersedia dalam Bahasa Indonesia dan English.

*A knowledge waqf (wakaf ilmu) from Dr. Yaser Taufik Syamlan with Universitas Tazkia: open Islamic Fintech lecture materials, Indonesian case studies, and an interactive simulation, free for everyone.*

## Isi

| Folder | Isi |
|---|---|
| `index.html` | Halaman utama dua bahasa (ID/EN) |
| `materi/` | Deck kuliah dan modul dalam format PDF |
| `simulasi/dbcf/` | Donation Based Crowdfunding Simulation (10 menit, 12 bulan simulasi) |
| `simulasi/saham/` | Simulasi Saham Syariah "Bursa Syariah" (20 menit, 10 hari bursa) |
| `assets/` | CSS, JavaScript, logo, foto, dan thumbnail materi |
| `.github/workflows/deploy.yml` | Deploy otomatis ke server |

## Deploy

Situs tayang di <https://learnislamicfintech.tazkia.ac.id>. Deploy dilakukan **otomatis oleh GitHub Actions setiap ada tag versi baru** (`v1.0.0`, `v1.0.1`, dan seterusnya). Push ke `main` saja **tidak** mengubah situs, jadi Anda bisa commit sebanyak apa pun dengan aman; situs baru berubah saat tag dibuat.

Tidak perlu akses SSH ke server, dan tidak perlu menyalin file secara manual.

### Persiapan (sekali saja)

1. Pastikan akun GitHub Anda sudah ditambahkan sebagai collaborator di repo `idtazkia/Belajar-Fintech`, dengan akses **Write** atau lebih.
2. Clone repo, atau arahkan salinan lama ke repo ini:
   ```bash
   git clone git@github.com:idtazkia/Belajar-Fintech.git
   # atau, kalau sudah punya salinan dari repo lama:
   git remote set-url origin git@github.com:idtazkia/Belajar-Fintech.git
   ```

### Langkah merilis

1. **Simpan perubahan ke `main`.**
   ```bash
   git checkout main
   git pull
   # ... ubah file, cek di browser lokal ...
   git add .
   git commit -m "Jelaskan perubahannya"
   git push origin main
   ```
2. **Lihat tag terakhir**, lalu tentukan nomor berikutnya:
   ```bash
   git fetch --tags
   git tag --sort=-v:refname | head -3
   ```
3. **Buat dan push tag baru.** Ini yang memicu deploy:
   ```bash
   git tag -a v1.0.1 -m "Ringkasan isi rilis"
   git push origin v1.0.1
   ```
4. **Pantau hasilnya** di tab **Actions → Deploy** di GitHub. Biasanya selesai dalam 1 menit.
   - ✅ Hijau: situs sudah ter-update. Buka situsnya dan cek perubahan Anda.
   - ❌ Merah: buka run tersebut untuk melihat langkah mana yang gagal (lihat bagian *Kalau deploy gagal*).

### Aturan nomor versi

Tag harus diawali huruf `v`. Tag tanpa awalan `v` tidak memicu deploy. Gunakan pola `vMAYOR.MINOR.PATCH`:

| Jenis perubahan | Contoh | Dari `v1.2.3` menjadi |
|---|---|---|
| Perbaikan kecil (salah ketik, gambar, tautan) | perbaiki typo materi 03 | `v1.2.4` |
| Tambahan konten atau fitur | materi baru, simulasi baru | `v1.3.0` |
| Perubahan besar (desain ulang, struktur situs) | ganti tampilan seluruh situs | `v2.0.0` |

Satu nomor tag hanya bisa dipakai sekali. Jangan menghapus atau memindahkan tag yang sudah pernah di-deploy; buat nomor baru saja.

### Kembali ke versi sebelumnya (rollback)

Kalau rilis terbaru bermasalah:

1. Buka tab **Actions → Deploy → Run workflow**.
2. Pada *Use workflow from*, pilih **Tags**, lalu pilih tag versi lama yang masih baik, misalnya `v1.0.0`.
3. Klik **Run workflow**.

Setelah masalahnya diperbaiki di `main`, rilis lagi dengan nomor tag baru.

### Kalau deploy gagal

| Pesan di Actions | Artinya | Yang dilakukan |
|---|---|---|
| `Deploy hanya dari tag` | Run workflow dijalankan dari branch, bukan dari tag | Ulangi dan pilih tag pada *Use workflow from* |
| `Tag ... menunjuk commit yang belum ada di main` | Tag dibuat di branch lain, atau commit belum di-push ke `main` | Push commit ke `main` dulu, lalu buat tag baru di `main` |
| `Secret DEPLOY_SSH_KEY belum diisi` | Kunci deploy di GitHub hilang atau terhapus | Hubungi admin repo |
| Gagal di langkah *Kirim file ke server* | Server tidak bisa dihubungi atau kunci ditolak | Coba **Re-run jobs** beberapa menit kemudian; kalau masih gagal, hubungi admin server |
| Gagal di langkah *Periksa situs* | File terkirim, tapi ada halaman yang tidak terbuka (bukan kode 200) | Cek halaman yang disebut di log; kemungkinan ada file atau folder yang terhapus atau salah nama |

### Hal yang perlu diketahui

- **Cache tidak perlu diurus manual.** Cloudflare menyimpan CSS dan JavaScript sampai 7 hari. Saat deploy, tautan `assets/site.js?v=...` dan `assets/site.css?v=...` otomatis diganti dengan nama tag, jadi pengunjung langsung mendapat versi baru. Kalau membuat halaman baru, pakai tautan dengan pola yang sama, misalnya `<script src="../../assets/site.js?v=1"></script>`.
- **Isi server selalu disamakan dengan repo.** File yang dihapus dari repo juga terhapus dari situs saat deploy berikutnya, dan file yang diubah langsung di server akan tertimpa. Jadi semua perubahan harus lewat repo ini.
- **Tidak ikut di-deploy:** `README.md`, `LICENSE`, `.nojekyll`, dan folder `.git` serta `.github`.
- **Server dipakai bersama website utama `tazkia.ac.id`.** Kunci deploy hanya bisa menulis ke folder situs ini, jadi deploy yang gagal atau keliru tidak memengaruhi website utama.

## Lisensi

Materi dilisensikan dengan [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/): boleh dipelajari, dibagikan, dan diadaptasi untuk pembelajaran dengan menyebut sumber, tidak untuk tujuan komersial. Logo Universitas Tazkia, foto pihak ketiga, dan merek yang dibahas dalam studi kasus tetap milik pemiliknya masing-masing.

Wallahu a'lam.
