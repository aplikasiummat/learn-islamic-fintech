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
| `assets/` | Logo dan foto |

## Deploy

Situs tayang di <https://learnislamicfintech.tazkia.ac.id> dan di-deploy otomatis oleh GitHub Actions (`.github/workflows/deploy.yml`) setiap ada tag versi baru:

```bash
git checkout main && git pull
git tag v1.2.0          # naikkan nomor versi setiap rilis
git push origin v1.2.0
```

Pantau hasilnya di tab **Actions**. Commit yang di-tag harus sudah ada di `main`. Untuk kembali ke versi lama, buka **Actions → Deploy → Run workflow** lalu pilih tag-nya pada *Use workflow from*.

Versi pada tautan `site.js` dan `site.css` diganti otomatis dengan nama tag supaya cache Cloudflare ikut diperbarui, jadi tidak perlu diubah manual.

## Lisensi

Materi dilisensikan dengan [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/): boleh dipelajari, dibagikan, dan diadaptasi untuk pembelajaran dengan menyebut sumber, tidak untuk tujuan komersial. Logo Universitas Tazkia, foto pihak ketiga, dan merek yang dibahas dalam studi kasus tetap milik pemiliknya masing-masing.

Wallahu a'lam.
