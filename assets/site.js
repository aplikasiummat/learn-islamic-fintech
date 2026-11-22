/* Learn Islamic Fintech with Tazkia — data dan perilaku bersama */
(function(){
const BASE = document.body.dataset.base || "";
const PAGE = document.body.dataset.page || "home";
document.documentElement.classList.add("js");

const T = {
 id:{
  topbar:"<b>Wakaf ilmu</b> dari Dr. Yaser Taufik Syamlan, ME, CIFP",
  topbar2:"Terbuka dan gratis untuk semua",
  nav0:"Beranda", nav1:"Bahan Ajar", nav2:"Simulasi", nav3:"Peta Belajar", nav4:"Penyusun", navCta:"Mulai Belajar",
  pre:"LEARN ISLAMIC FINTECH · UNIVERSITAS TAZKIA",
  heroEyebrow:"Wakaf Ilmu · Islamic Fintech",
  heroLead:"Kini semua orang dapat belajar Islamic Fintech. Materi kuliah, studi kasus Indonesia, dan simulasi interaktif yang semula disusun untuk mahasiswa Universitas Tazkia kini dibuka untuk publik tanpa biaya, sehingga siapa pun dapat memahami akad, risiko, dan model bisnis keuangan digital syariah.",
  ctaStart:"Jelajahi Bahan Ajar", ctaSim:"Coba Simulasi DBCF",
  fact1:"Materi Kuliah", fact2:"Simulasi", fact3:"Topik Belajar", fact4:"Biaya Belajar",
  ayatTr:"“Dan katakanlah: Ya Tuhanku, tambahkanlah kepadaku ilmu.”", ayatRef:"QS Thaha · 114",
  hadisTr:"“Apabila manusia wafat, terputuslah amalnya kecuali tiga perkara: sedekah jariyah, ilmu yang bermanfaat, atau anak saleh yang mendoakannya.”", hadisRef:"HR Muslim",
  marqLbl:"Akad",
  storyEyebrow:"Mengapa Wakaf Ilmu", storyTitle:"Dari ruang kuliah Tazkia, untuk semua",
  story1:"Materi di situs ini lahir dari ruang kuliah Universitas Tazkia, yaitu mata kuliah Teknologi Keuangan Islam pada jenjang Sarjana dan Keuangan Digital Syariah pada Program Magister Ekonomi Syariah. Setiap pertemuan membahas satu model bisnis keuangan digital, lengkap dengan akad, risiko syariah, regulasi, dan studi kasus Indonesia.",
  story2:"Pada akhirnya ilmu yang bermanfaat tidak cukup berhenti di ruang kelas. Sejalan dengan semangat wakaf, materi ini diwakafkan agar dapat dipelajari oleh mahasiswa, praktisi, regulator, maupun masyarakat umum yang ingin memahami Islamic Fintech secara utuh.",
  story3:"Dengan kata lain, situs ini merupakan wakaf ilmu: boleh dipelajari, dibagikan, dan digunakan untuk mengajar, selama tidak untuk tujuan komersial. Semoga menjadi amal jariyah bagi semua yang ikut menyebarkannya.",
  p1t:"Mudah", p1s:"Bahasa lugas, kasus Indonesia yang dekat, dan alur runtut dari fenomena hingga risiko.",
  p2t:"Murah", p2s:"Seluruh materi gratis dan dapat diunduh dalam format PDF tanpa pendaftaran.",
  p3t:"Bermakna", p3s:"Setiap topik dibaca melalui lensa akad, risiko syariah, regulasi, dan maqashid syariah.",
  p4t:"Praktis", p4s:"Simulasi interaktif melatih pengambilan keputusan, bukan sekadar hafalan.",
  modEyebrow:"Bahan Ajar Pilihan", modTitle:"Mulai dari materi berikut", modLead:"Setiap materi berbentuk deck kuliah dalam format PDF berbahasa Indonesia. Materi bertanda Magister membahas topik yang sama secara lebih mendalam melalui diskusi kasus.",
  moreMods:"Lihat Seluruh Bahan Ajar",
  open:"Pratinjau", dl:"Unduh PDF", pages:"halaman", play:"Mainkan Simulasi", module:"Modul Bacaan", session:"Pertemuan",
  simEyebrow:"Simulasi Interaktif",
  simLead:"Pimpin platform donasi fiktif Lumbung Amanah selama 12 bulan dalam 10 menit. Setiap bulan Anda menjawab kuis akad, lalu mengambil satu keputusan yang berdampak pada kepercayaan publik, kepatuhan syariah, kas, dan misi sosial.",
  sim1:"Peta tujuh tahap alur DBCF beserta akad dan risikonya", sim2:"Kuis akad dengan penjelasan di setiap bulan", sim3:"Model bisnis terbentuk dari keputusan: Orkestrasi Mitra, berbasis AI, atau Ekosistem Bundling", sim4:"Nilai akhir, lembar refleksi, dan unduhan PDF hasil belajar",
  simBtn:"Mainkan Sekarang", simNote:"Mahasiswa Universitas Tazkia mengunggah PDF hasil belajar ke SMILE sesuai arahan dosen.",
  scrQ:"Kuis akad", scrQt:"Investor membeli saham PT teknologi milik grup. Akad yang paling mendekati adalah?",
  scrO1:"A. Bentuk PT dengan harga jasa wajar dan kunci misi", scrO2:"B. Bentuk PT dengan target pertumbuhan agresif", scrO3:"C. Tetap satu yayasan dan bangun Karyawan AI",
  scrM1:"Kepercayaan publik", scrM2:"Kepatuhan syariah", scrM3:"Misi sosial",
  pathEyebrow:"Peta Belajar", pathTitle:"Empat belas topik Islamic Fintech", pathLead:"Peta ini mengikuti Rencana Pembelajaran Semester mata kuliah Keuangan Digital Syariah di Universitas Tazkia. Topik bertanda emas sudah tersedia, sedangkan topik lainnya ditambahkan secara bertahap.",
  ready:"Tersedia", soon:"Segera hadir",
  howEyebrow:"Cara Belajar", howTitle:"Empat langkah sederhana",
  h1t:"Pilih topik", h1s:"Mulai dari Pertemuan 1 untuk memahami ekosistem, atau langsung ke topik yang dibutuhkan.",
  h2t:"Baca deck", h2s:"Setiap deck dibuka dengan fenomena, dilanjutkan teori, akad, risiko, dan studi kasus.",
  h3t:"Mainkan simulasi", h3s:"Uji pemahaman melalui keputusan bulanan dalam simulasi interaktif.",
  h4t:"Tulis refleksi", h4s:"Kaitkan hasil simulasi dengan kasus nyata, lalu bagikan pelajaran tersebut kepada orang lain.",
  aboutEyebrow:"Penyusun Materi",
  about1:"Dr. Yaser Taufik Syamlan, ME, CIFP merupakan dosen Universitas Tazkia yang mengampu Teknologi Keuangan Islam pada jenjang Sarjana dan Keuangan Digital Syariah pada Program Magister Ekonomi Syariah, serta pemerhati perbankan syariah. Beliau pernah terlibat dalam penyusunan produk Shariah Restricted Investment Account (SRIA) bersama OJK dan Asbisindo.",
  about2:"Di Tazkia, beliau mengembangkan pembelajaran berbasis kasus dan simulasi, di mana mahasiswa tidak hanya memahami akad, tetapi juga berlatih mengambil keputusan sebagaimana pengelola lembaga keuangan syariah. Sejalan dengan karakter T.A.Z.K.I.A, materi tersebut kini diwakafkan agar literasi keuangan digital syariah dapat dinikmati oleh siapa saja.",
  quote:"Ilmu yang bermanfaat sebaiknya mengalir seperti wakaf: pokoknya tetap terjaga, manfaatnya terus dinikmati banyak orang.",
  quoteBy:"Semangat wakaf ilmu di balik situs ini",
  archCap:"WAKAF ILMU",
  ctaTitle:"Bersama membumikan <em class=\"foil\">literasi Islamic Fintech</em> untuk semua",
  ctaBtn2:"Bagikan Situs Ini", copied:"Tautan disalin",
  footAbout:"Wakaf ilmu dari Dr. Yaser Taufik Syamlan, ME, CIFP bersama Universitas Tazkia untuk memudahkan siapa pun belajar Islamic Fintech.",
  footNav:"Jelajahi", footLic:"Lisensi",
  footLicTxt:"Materi dilisensikan dengan <a href=\"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.id\" target=\"_blank\" rel=\"noopener\">CC BY-NC-SA 4.0</a>: boleh dipelajari, dibagikan, dan diadaptasi untuk pembelajaran dengan menyebut sumber, tidak untuk tujuan komersial. Angka dan peristiwa dalam simulasi bersifat fiktif.",
  footBottom:"© 2026 Learn Islamic Fintech with Tazkia",
  /* bahan ajar */
  baTitle:"Bahan Ajar", baLead:"Seluruh deck kuliah, modul bacaan, dan simulasi Islamic Fintech dalam satu tempat. Pratinjau langsung di halaman ini atau unduh untuk dipelajari kapan saja.",
  fAll:"Semua", fS1:"Sarjana", fS2:"Magister", fMod:"Modul", fSim:"Simulasi", searchPh:"Cari topik, akad, atau kasus", searchLbl:"CARI",
  empty:"Belum ada bahan ajar yang sesuai. Coba kata kunci lain.",
  readEyebrow:"Bacaan Pendukung", readTitle:"Rujukan untuk memperdalam", readLead:"Bacaan berikut menjadi landasan teori pada beberapa pertemuan. Tautan mengarah ke sumber resminya.",
  close:"Tutup", newTab:"Buka di tab baru",
  simCardT:"Donation Based Crowdfunding Simulation", simCardD:"Simulasi 10 menit memimpin platform donasi fiktif: kuis akad, alur DBCF, register risiko, nilai, dan lembar refleksi PDF.",
  lvlSim:"Simulasi", minutes:"menit", term:"Gasal 2026/2027",
  menuAbout:"Tentang", mKisah:"Kisah Wakaf Ilmu", mPenyusun:"Penyusun Materi", mCara:"Cara Belajar", mKolom:"Kolom Penyusun",
  menuPub:"Publikasi", mDeck:"Deck Kuliah", mModul:"Modul Bacaan", mBacaan:"Bacaan Pendukung",
  searchHint:"TEKAN ESC UNTUK MENUTUP", searchBig:"Cari bahan ajar...",
  s2Eyebrow:"Simulasi Interaktif", s2Title:"Donation Based Crowdfunding Simulation", s2Lead:"Pimpin platform donasi fiktif selama 12 bulan dalam 10 menit, lalu unduh lembar hasil belajar Anda.",
  s3Eyebrow:"Bahan Ajar Unggulan", s3Title:"Payment Gateway dan Blockchain", s3Lead:"Dari QRIS hingga kripto dan NFT, lengkap dengan fatwa dari sepuluh negara. 66 halaman, gratis untuk diunduh.", s3Btn:"Unduh Deck",
  kolEyebrow:"Kolom Penyusun", kolLead:"Tulisan analisis Dr. Yaser Taufik Syamlan di media nasional, sebagai pengayaan atas bahan ajar di situs ini.",
  kolCat:"Republika · Analisis · 11 April 2020", kolT:"Inovasi Produk Bank Syariah Terganjal GWM", kolS:"Mengapa Shariah Restricted Investment Account (SRIA) sebaiknya tidak diikutkan dalam perhitungan Giro Wajib Minimum, dan dampaknya bagi pembiayaan proyek.", kolRead:"BACA SELENGKAPNYA →",
  kolMore:"Ingin materi ini dipakai di kampus atau lembaga Anda? Silakan gunakan dan bagikan dengan menyebut sumber.",
  selEyebrow:"Selayang Pandang", selTitle:"Seputar Learn Islamic Fintech with Tazkia", selBtn:"Selengkapnya tentang Wakaf Ilmu", galCap:"Universitas Tazkia",
  cntEyebrow:"Capaian", cntTitle:"Belajar tanpa biaya, kapan saja",
  newsEyebrow:"Bahan Ajar Terbaru", newsTitle:"Deck kuliah terbaru", seeAll:"Selengkapnya",
  footRel:"Situs Terkait", footAddr:"Universitas Tazkia · Sentul City, Bogor, Jawa Barat",
  mSimDbcf:"Simulasi Donasi (DBCF)", mSimSaham:"Simulasi Saham Syariah", mSimMmq:"Simulasi Musyarakah Mutanaqishah", mSimKomite:"Duel Komite Pembiayaan BPRS", mSimRcf:"Simulasi Reward Crowdfunding (RCF)", mSimAgg:"Simulasi Agregator Syariah", mSimLiga:"Liga Crowdfunding Syariah", mSimSukuk:"Simulasi Bursa Sukuk", mSimAmanah:"Simulasi Dana Sosial (Amanah)", mSimSantribos:"Kantor AI SantriBos",
  sbCrumb:"Kantor AI", sbTitle:"Kantor AI SantriBos", sbStart:"Masuk ke Kantor", sbHow:"Cara Bermain",
  sbLead:"Buka toko perlengkapan santri di marketplace, lalu pimpin tujuh karyawan AI: Team Leader, Konten, Editor, Akunting, Finance, Admin Toko, dan CS. Lihat mereka bekerja dari chat pertama sampai jurnal terakhir. Anda Bos-nya.",
  sbF1:"menit untuk satu hari kerja", sbF2:"karyawan AI", sbF3:"transaksi di Hari 1", sbF4:"token AI yang dibutuhkan",
  sbLearnEyebrow:"Yang Anda Pelajari", sbLearnTitle:"Dari pengguna AI menjadi Bos para karyawan AI",
  sbL1:"Struktur kantor AI: pimpinan, tim marketing, tim keuangan, dan tim operasional",
  sbL2:"Alur satu transaksi: chat masuk, dibalas, checkout, dana diverifikasi, barang dikirim, jurnal dicatat",
  sbL3:"Konten IG dan TikTok dibuat Konten AI, diedit Editor AI, lalu disetujui Bos sebelum tayang",
  sbL4:"Peran Bos: mengarahkan, menilai (setujui, revisi, tolak), dan bertanggung jawab",
  sbL5:"Perintah bebas: diskon, iklan, restock, produk baru, laporan, zakat, atau apa saja",
  sbL6:"Ruang pelatihan: koreksi Bos menjadi panduan agen berikutnya",
  sbBlocked:"🔔 Perlu persetujuan Bos: diskon 7% untuk 5 sarung Pak Darmawan.",
  sbM1:"Omzet", sbM2:"Menunggu Bos",
  sbHowEyebrow:"Alur Permainan", sbHowTitle:"Empat langkah jadi Bos",
  sbS1t:"Masuk kantor", sbS1s:"Tekan Mulai hari. Team Leader membagi tugas ke tujuh karyawan AI.",
  sbS2t:"Lihat tim bekerja", sbS2s:"Chat dibalas, pesanan dikirim, konten dibuat, jurnal dicatat. Semua terlihat di lantai kantor.",
  sbS3t:"Putuskan", sbS3s:"Setujui, revisi, atau tolak konten, diskon, dan harga grosir. Revisi masuk ruang pelatihan.",
  sbS4t:"Perintah apa saja", sbS4s:"Ketik perintah bebas. Team Leader memilih agen yang tepat dan hasilnya kembali ke meja Bos.",
  sbMechEyebrow:"Mekanisme", sbMechTitle:"Apa saja yang disimulasikan", sbMechLead:"Berjalan langsung di browser, tanpa token AI. Agen bekerja dengan alur dan templat yang meniru kantor AI sungguhan.",
  sbK1:"Operasional", sbK1t:"CS dan Admin Toko", sbK1s:"Sari membalas chat, termasuk soal halal dan nego harga; Tari mengemas, input resi, dan menjaga stok.",
  sbK2:"Keuangan", sbK2t:"Finance dan Akunting", sbK2s:"Fikri memverifikasi dana dan menghitung margin; Aldi mencatat jurnal dan menyusun laba rugi.",
  sbK3:"Marketing", sbK3t:"Konten dan Editor", sbK3s:"Raka menulis naskah dan caption; Nisa mengedit video dan memposting ke IG dan TikTok.",
  sbK4:"Pimpinan", sbK4t:"Team Leader", sbK4s:"Lina membuka hari, membagi tugas, meneruskan perintah Bos, dan melapor di akhir hari.",
  sbK5:"Bos", sbK5t:"Setujui, revisi, tolak", sbK5s:"Keputusan penting menunggu Anda. Autopilot ada, tetapi tanggung jawab tetap di Bos.",
  sbK6:"Perintah", sbK6t:"Apa saja jalan", sbK6s:"Diskon, iklan, live, restock, produk baru, laporan, zakat, atau tugas di luar itu: semuanya dikerjakan.",
  sbK7:"Hari", sbK7t:"Hari 1 dan seterusnya", sbK7s:"Hari 1 berisi 10 transaksi. Hari berikutnya pembeli datang dari konten, iklan, dan live.",
  sbK8:"Syariah", sbK8t:"Bisnis yang amanah", sbK8s:"Jawaban jujur soal halal, akad jual beli yang jelas, dan cadangan zakat perdagangan dari laba.",
  sbDosen:"Untuk pemateri: simulasi ini melengkapi seminar Gen Z dan Masa Depan Ekonomi Syariah. Tampilkan di layar, lalu ajak peserta memberi perintah.",
  sbCta:"Jangan cuma tanya jawab dengan AI. <em>Pimpin</em> AI.",
  amCrumb:"Dana Sosial", amTitle:"Amanah", amStart:"Mulai Simulasi", amHow:"Cara Bermain",
  amLead:"Pegang tiga amanah sekaligus selama enam tahun: amil zakat, nazhir wakaf uang, dan pengelola dana haji. Setiap keputusan diuji banjir, krisis rupiah, gagal bayar sukuk, dan godaan konflik kepentingan.",
  amF1:"menit untuk satu sesi", amF2:"tahun masa jabatan", amF3:"peran yang dimainkan", amF4:"soal di akhir tiap tahun",
  amLearnEyebrow:"Yang Anda Pelajari", amLearnTitle:"Dana umat dikelola dengan aturan yang lebih ketat daripada bisnis",
  amL1:"Membagi zakat ke delapan asnaf, termasuk batas bagian amil seperdelapan",
  amL2:"Zakat produktif, pendampingan, dan perjalanan mustahik menjadi muzakki",
  amL3:"Wakaf uang: pokok dijaga, manfaat dialirkan, imbalan nazhir paling banyak 10% hasil bersih",
  amL4:"CWLS, sukuk korporasi, dan wakaf rumah sakit sebagai pilihan wakaf produktif",
  amL5:"Dana haji: batas penempatan bank 30%, likuiditas dua tahun, dan subsidi antargenerasi",
  amL6:"Laporan PDF berisi nilai amanah, dampak, keberlanjutan, dan jurnal keputusan",
  amBlocked:"Pelanggaran amanah: bagian amil 14%, melebihi seperdelapan.",
  amM1:"Nilai amanah", amM2:"Nilai",
  amHowEyebrow:"Alur Permainan", amHowTitle:"Enam tahun, tiga meja",
  amS1t:"Ambil sumpah jabatan", amS1s:"Isi nama dan NIM. Anda memimpin tiga dana sekaligus.",
  amS2t:"Putuskan", amS2s:"Tiap tahun ada 2,5 menit untuk mengatur zakat, wakaf, dan dana haji. Tips pelatih membantu.",
  amS3t:"Hadapi peristiwa", amS3s:"Banjir, ekonomi tumbuh, rupiah jatuh, biaya masyair naik, sukuk gagal bayar, skandal lembaga lain.",
  amS4t:"Laporan", amS4s:"Nilai 0 sampai 100 dari amanah, dampak, keberlanjutan, dan soal, lengkap dengan PDF.",
  amMechEyebrow:"Mekanisme", amMechTitle:"Apa saja yang disimulasikan", amMechLead:"Angka disederhanakan; aturan mengikuti UU 23/2011, UU 41/2004, dan UU 34/2014.",
  amK1:"Zakat", amK1t:"Delapan asnaf", amK1s:"Bantuan konsumtif, zakat produktif, pendampingan, darurat, dan bagian amil. Kepercayaan menentukan zakat tahun berikutnya.",
  amK2:"Zakat", amK2t:"Mustahik jadi muzakki", amK2s:"Usaha mikro yang didampingi lebih bertahan dan lulus menjadi pembayar zakat dua tahun kemudian.",
  amK3:"Wakaf", amK3t:"Pokok tidak boleh habis", amK3s:"CWLS, deposito syariah, sukuk korporasi, atau rumah sakit wakaf. Membelanjakan pokok adalah pelanggaran.",
  amK4:"Wakaf", amK4t:"Godaan konflik kepentingan", amK4s:"Di tahun kedua datang tawaran pinjaman 15% dari perusahaan milik pejabat daerah. Terima atau tolak?",
  amK5:"Haji", amK5t:"Portofolio BPKH", amK5s:"Penempatan bank, SBSN dan SDHI, sukuk korporasi, investasi langsung di Makkah, dan emas.",
  amK6:"Haji", amK6t:"Subsidi antargenerasi", amK6s:"Bila subsidi melebihi nilai manfaat, jamaah tunggu membiayai jamaah berangkat. Seberapa adil?",
  amK7:"Waktu", amK7t:"Jam berdetak", amK7s:"Tiap tahun 2,5 menit. Bila waktu habis, pilihan terakhir Anda yang dipakai.",
  amK8:"Nilai", amK8t:"Amanah, dampak, keberlanjutan", amK8s:"30 poin amanah, 30 dampak, 25 keberlanjutan, dan 15 soal.",
  amDosen:"Untuk dosen: simulasi ini melengkapi materi Week 12, Islamic Social Funds. Minta mahasiswa membawa laporan PDF ke kelas.",
  amCta:"Enam tahun, tiga amanah. Berapa yang bisa Anda <em>jaga</em>?",
  skCrumb:"Sukuk", skTitle:"Bursa Sukuk", skStart:"Mulai Simulasi", skHow:"Cara Bermain",
  skLead:"Satu tahun pasar sukuk dalam sepuluh menit. Ikut lelang SBSN, pesan sukuk ritel, jual beli sukuk korporasi, dan rasakan bagaimana BI-Rate, peringkat, dan panen yang gagal menggerakkan harga.",
  skF1:"menit untuk satu sesi", skF2:"bulan pasar simulasi", skF3:"modal virtual awal", skF4:"seri sukuk dan obligasi",
  skLearnEyebrow:"Yang Anda Pelajari", skLearnTitle:"Belajar sukuk dari teori sampai ke layar bursa",
  skL1:"Akad di balik setiap seri: ijarah, wakalah, mudharabah, murabahah, dan wakaf temporer pada CWLS",
  skL2:"Harga bersih, ujrah berjalan, dan imbal hasil: mengapa harga turun saat yield naik",
  skL3:"Mengapa sukuk murabahah, ST, dan CWLS tidak bisa diperdagangkan, sementara ijarah bisa",
  skL4:"Lelang PBS dengan harga beragam (multiple price) dan pemesanan SR serta ST di pasar perdana",
  skL5:"Risiko nyata: BI-Rate, peringkat Pefindo, guncangan global, dan restrukturisasi sukuk mudharabah",
  skL6:"Laporan PDF berisi nilai, profil perilaku, dan jurnal akad",
  skBlocked:"Ditolak: MFS-26 adalah sukuk murabahah. Menjual piutang di bawah nilai nominal adalah riba.",
  skM1:"Yield SBSN 10 tahun", skM2:"Penyelesaian",
  skHowEyebrow:"Alur Permainan", skHowTitle:"Empat langkah, dua belas bulan",
  skS1t:"Buka akun", skS1s:"Isi nama dan NIM. Anda mulai dengan Rp500 juta di akun syariah.",
  skS2t:"Pasar perdana", skS2s:"Ikut lelang PBS, pesan SR, ST, sukuk murabahah, atau CWLS saat masa penawaran.",
  skS3t:"Pasar sekunder", skS3s:"Beli dan jual seri yang bisa diperdagangkan sambil membaca berita bulanan.",
  skS4t:"Laporan", skS4s:"Di akhir bulan ke-12 Anda mendapat nilai 0 sampai 100 dan laporan PDF.",
  skMechEyebrow:"Mekanisme", skMechTitle:"Apa saja yang disimulasikan", skMechLead:"Disederhanakan, tetapi mengikuti praktik SBSN dan Bursa Efek Indonesia.",
  skK1:"Harga", skK1t:"Persen dari nominal", skK1s:"Harga bersih dikutip dalam persen. Saat membeli, Anda juga membayar ujrah berjalan kepada penjual.",
  skK2:"Kurva", skK2t:"BI-Rate dan yield", skK2s:"Perubahan BI-Rate menggeser kurva. Seri bertenor panjang bergerak paling besar.",
  skK3:"Perdana", skK3t:"Lelang dan bookbuilding", skK3s:"PBS dilelang dengan harga beragam; SR, ST, CWLS, dan sukuk korporasi dijual pada harga nominal.",
  skK4:"Akad", skK4t:"Bisa atau tidak diperdagangkan", skK4s:"Ijarah, wakalah, dan mudharabah bisa diperdagangkan. Murabahah tidak, karena berupa piutang.",
  skK5:"Syariah", skK5t:"Akun syariah dan reguler", skK5s:"Akun reguler membuka obligasi konvensional sebagai pembanding, dan pilihan itu tercatat dalam profil perilaku.",
  skK6:"Risiko", skK6t:"Peringkat dan restrukturisasi", skK6s:"Pefindo bisa menaikkan atau menurunkan peringkat; sukuk mudharabah bisa menunda bagi hasil.",
  skK7:"Sosial", skK7t:"Green sukuk dan CWLS", skK7s:"ST hijau berimbal hasil mengambang dengan batas bawah; ujrah CWLS mengalir ke program wakaf.",
  skK8:"Nilai", skK8t:"Imbal hasil, soal, dan perilaku", skK8s:"40 poin imbal hasil, 30 poin soal di setiap peristiwa pasar, 30 poin perilaku dan kepatuhan syariah.",
  skDosen:"Untuk dosen: simulasi ini melengkapi materi Sukuk (Theory and Practice). Minta mahasiswa membawa laporan PDF ke kelas.",
  skCta:"Coba sendiri: apa yang terjadi pada sukuk Anda saat BI-Rate naik?",
  sim5CardT:"Reward Based Crowdfunding Simulation", sim5CardD:"Memimpin platform urun dana berbasis imbalan selama 12 bulan: akad per tingkatan imbalan, rekening penampung, pencairan bertahap, akibat tertunda, kuis akad, dan lembar hasil PDF.", sim5Meta:"12 bulan · kuis akad · PDF",
  sim6CardT:"Agregator Syariah Simulation", sim6CardD:"Memimpin aplikasi pembanding produk keuangan syariah: izin, penyaringan syariah, amanah data, urutan rekomendasi netral, akad samsarah dan ju'alah, serta godaan memegang dana pengguna.", sim6Meta:"12 bulan · kuis akad · PDF",
  sim4CardT:"Duel Komite Pembiayaan BPRS", sim4CardD:"Reviewer legal dan risiko melawan komputer: 5C, neraca, siklus kas, opini audit, trik AO, pemalsuan data MUP, dan sidang komite pembiayaan BPRS. Dengan dashboard pengajar.", sim4Meta:"10 babak · 15–30 menit · lawan komputer",
  sim3CardT:"Simulasi Musyarakah Mutanaqishah (MMQ)", sim3CardD:"Tiga permainan kelompok tentang MMQ: Maqasid dan Pemilihan Akad, Cabang vs Pusat, dan Jejak Audit MMQ, lengkap dengan konsol fasilitator dan papan skor kelas.", sim3Meta:"3 permainan · 15–30 menit",
  ssCrumb:"Saham Syariah", ssTitle:"Bursa Syariah", ssStart:"Mulai Simulasi", ssHow:"Cara Bermain",
  ssLead:"Rasakan jual beli saham dan sukuk seperti di Bursa Efek Indonesia, dengan aturan syariah yang benar-benar bekerja. Satu bulan bursa dalam lima belas menit, modal virtual Rp1 miliar, dan target untung 50% yang hanya sah bila Anda memegang saham dan sukuk bersamaan.",
  ssF1:"menit untuk satu sesi", ssF2:"hari bursa simulasi", ssF3:"modal virtual awal", ssF4:"misi pembelajaran",
  ssLearnEyebrow:"Yang Anda Pelajari", ssLearnTitle:"Belajar pasar modal syariah dengan tangan sendiri",
  ssL1:"Akad di balik setiap transaksi: wakalah kepada broker, bay' al-musawamah di bursa, musyarakah sebagai pemegang saham",
  ssL2:"Screening saham syariah: sektor usaha, utang berbunga maksimal 45%, pendapatan nonhalal maksimal 10%",
  ssL3:"Transaksi terlarang menurut Fatwa DSN-MUI 40/2003: margin trading dan short selling diblokir di akun SOTS",
  ssL4:"Mekanisme BEI: lot, fraksi harga, ARA dan ARB, sesi perdagangan, biaya, dan penyelesaian T+2",
  ssL5:"Pasar perdana lewat proses IPO tujuh tahap: prospektus, book building, pernyataan efektif OJK, e-IPO, penjatahan pooling, distribusi KSEI, dan listing",
  ssL6:"Peristiwa makro yang langsung menggerakkan harga: inflasi BPS, RDG BI Rate, The Fed, rupiah, batu bara, CPO, review MSCI, dan review DES oleh OJK",
  ssBlocked:"Diblokir SOTS: BKNV tidak masuk Daftar Efek Syariah karena usaha intinya perbankan berbasis bunga.",
  ssM1:"Purifikasi dividen SHJY", ssM2:"Dana hasil jual cair",
  ssHowEyebrow:"Cara Bermain", ssHowTitle:"Empat langkah, dua puluh menit",
  ssS1t:"Daftar", ssS1s:"Masukkan nama lengkap dan NIM. Kemajuan tersimpan di perangkat Anda dengan NIM tersebut.",
  ssS2t:"Bertransaksi", ssS2s:"Beli dan jual saham fiktif dan sukuk di akun SOTS. Setiap hari bursa berlangsung 45 detik; rumor, pengumuman, dan berita pasar datang silih berganti.",
  ssS3t:"Selesaikan misi", ssS3s:"Lima belas misi menuntun Anda: proses IPO, dividen, purifikasi, T+2, tebakan BI Rate, rebalancing MSCI, review DES, hingga membandingkan dengan akun reguler.",
  ssS4t:"Kirim laporan", ssS4s:"Setelah hari ke-10, unduh laporan PDF berisi nilai, profil perilaku (homo islamicus atau homo economicus), dan analisis permainan, lalu jawab dua pertanyaan refleksi. Selesai lebih cepat boleh, mengulang (retake) juga boleh; setiap percobaan tetap tercatat di laporan.",
  ssMechEyebrow:"Meniru Bursa Sungguhan", ssMechTitle:"Mekanisme yang Anda temui di simulasi",
  ssMechLead:"Emiten dan harga bersifat fiktif, tetapi aturan mainnya mengikuti praktik Bursa Efek Indonesia yang diajarkan di kelas.",
  ssK1:"Satuan", ssK1t:"Lot dan fraksi harga", ssK1s:"1 lot = 100 lembar. Harga bergerak sesuai fraksi Rp1 sampai Rp25 menurut rentang harga.",
  ssK2:"Batas harian", ssK2t:"ARA dan ARB", ssK2s:"Order di luar batas auto rejection langsung ditolak, lengkap dengan alasannya.",
  ssK3:"Waktu", ssK3t:"Sesi perdagangan", ssK3s:"Pra-pembukaan, Sesi 1, istirahat, Sesi 2, dan pra-penutupan. Order di luar sesi masuk antrean.",
  ssK4:"Uang", ssK4t:"Biaya dan dana instan", ssK4s:"Biaya beli 0,15% dan biaya jual 0,25%. Hasil penjualan langsung bisa dipakai lagi agar permainan cepat; di BEI sungguhan dananya cair T+2.",
  ssK5:"Syariah", ssK5t:"Akun SOTS dan DES", ssK5s:"Hanya saham dalam Daftar Efek Syariah yang bisa dibeli. Akun reguler membuka opsi margin trading dan short selling sebagai pembanding, dan setiap pilihan tercatat dalam profil perilaku.",
  ssK6:"Pasar perdana", ssK6t:"Proses IPO lengkap", ssK6s:"Telaah prospektus HALA, ikut book building, lihat harga final terbentuk, pesan lewat e-IPO, terima penjatahan dan refund, lalu saksikan listing di hari ke-6.",
  ssK7:"Makro", ssK7t:"BI Rate, The Fed, dan rupiah", ssK7s:"Kalender ekonomi berjalan: tebak keputusan RDG BI sebelum diumumkan, lalu lihat tiap sektor bereaksi. Pasar bergerak karena kejutan, bukan karena beritanya.",
  ssK8:"Indeks", ssK8t:"MSCI dan review DES", ssK8s:"Saham masuk atau keluar indeks MSCI, dana pasif membeli di hari efektif, dan review DES OJK bisa mengeluarkan saham dari daftar syariah.",
  ssDosen:"Untuk dosen: simulasi ini disusun untuk mata kuliah Islamic Financial Market and Institution (pertemuan Pasar Modal Syariah). Antarmuka simulasi berbahasa Inggris. Mahasiswa mengunduh laporan PDF berisi nilai otomatis 0 sampai 100 (misi 35, kepatuhan syariah 20, membaca peristiwa makro 15, kinerja dibanding ISSI 20, aktivitas 10), profil perilaku homo islamicus atau homo economicus, analisis, dan dua pertanyaan refleksi. Nilai bersifat formatif; penilaian akhir tetap di tangan dosen.",
  ssCta:"Lima belas menit, satu bulan bursa, target <em>+50%</em>",
  ssKelasT:"Main bareng satu kelas (mabar)", ssKelasS:"Dosen membuka kelas dan mendapat kode. Mahasiswa memilih Join a class lalu memasukkan kode itu. Semua melihat pasar yang sama; dosen memulai, menjeda, dan mengakhiri permainan, mengirim isu yang menggerakkan harga, serta memantau papan peringkat berisi imbal hasil, nilai, dan profil perilaku, lalu mengunduh nilainya dalam CSV. Mahasiswa juga bisa bermain sendiri 20 menit atau tanpa batas waktu.", ssKelasBtn:"Buka kelas (dosen)", ssKelasJoin:"Gabung kelas (mahasiswa)",
  sim2CardT:"Bursa Syariah: Simulasi Saham", sim2CardD:"Simulasi saham dan sukuk sebulan bursa (15 menit) ala BEI di akun SOTS, modal Rp1 miliar, target +50%: screening DES, ARA/ARB, rumor dan pengumuman, papan sukuk, proses IPO lengkap, BI Rate, MSCI, review DES, purifikasi dividen, dan laporan PDF berisi nilai serta profil perilaku.", sim2Days:"hari bursa",
  baCrumb:"Bahan Ajar",
  cr1:"Universitas Tazkia", cr4:"Sertifikasi keuangan Islam"
 },
 en:{
  topbar:"<b>A knowledge waqf</b> from Dr. Yaser Taufik Syamlan, ME, CIFP",
  topbar2:"Open and free for everyone",
  nav0:"Home", nav1:"Learning Materials", nav2:"Simulation", nav3:"Learning Path", nav4:"Author", navCta:"Start Learning",
  pre:"LEARN ISLAMIC FINTECH · UNIVERSITAS TAZKIA",
  heroEyebrow:"Knowledge Waqf · Islamic Fintech",
  heroLead:"Now everyone can learn Islamic Fintech. Lecture materials, Indonesian case studies, and an interactive simulation originally prepared for Universitas Tazkia students are now open to the public at no cost, so anyone can understand the contracts, risks, and business models of Islamic digital finance.",
  ctaStart:"Explore the Materials", ctaSim:"Try the DBCF Simulation",
  fact1:"Lecture Decks", fact2:"Simulation", fact3:"Learning Topics", fact4:"Cost to Learn",
  ayatTr:"“And say: My Lord, increase me in knowledge.”", ayatRef:"Qur'an, Ta-Ha · 114",
  hadisTr:"“When a person dies, their deeds come to an end except for three: a continuing charity, beneficial knowledge, or a righteous child who prays for them.”", hadisRef:"Narrated by Muslim",
  marqLbl:"Contracts",
  storyEyebrow:"Why a Knowledge Waqf", storyTitle:"From Tazkia's classrooms, for everyone",
  story1:"The materials on this site were born in the classrooms of Universitas Tazkia: the Islamic Financial Technology course for undergraduates and the Islamic Digital Finance course in the Master of Islamic Economics programme. Each session covers one digital finance business model, complete with its contracts (akad), Shariah risks, regulation, and Indonesian case studies.",
  story2:"Beneficial knowledge should not stay inside the classroom. In the spirit of waqf, these materials are endowed so that students, practitioners, regulators, and the general public can understand Islamic Fintech as a whole.",
  story3:"In other words, this site is a knowledge waqf: you may study, share, and teach with it, as long as it is not for commercial purposes. May it become a continuing charity (amal jariyah) for everyone who helps spread it.",
  p1t:"Easy", p1s:"Plain language, familiar Indonesian cases, and a clear flow from phenomenon to risk.",
  p2t:"Affordable", p2s:"Every material is free and downloadable as a PDF, no registration required.",
  p3t:"Meaningful", p3s:"Each topic is read through the lenses of contract, Shariah risk, regulation, and maqasid al-shariah.",
  p4t:"Practical", p4s:"An interactive simulation trains decision making rather than memorisation.",
  modEyebrow:"Featured Materials", modTitle:"Start with these materials", modLead:"Each material is a lecture deck in PDF, written in Bahasa Indonesia. Items marked Master's cover the same topic in more depth through case discussions.",
  moreMods:"See All Learning Materials",
  open:"Preview", dl:"Download PDF", pages:"pages", play:"Play Simulation", module:"Reading Module", session:"Session",
  simEyebrow:"Interactive Simulation",
  simLead:"Lead the fictional donation platform Lumbung Amanah for 12 months in 10 minutes. Each month you answer a contract (akad) quiz, then make one decision that affects public trust, Shariah compliance, cash, and social mission.",
  sim1:"A seven-stage DBCF process map with the contract and risk at each stage", sim2:"A monthly akad quiz with explanations", sim3:"Your business model emerges from your decisions: partner orchestration, AI-based, or a bundled ecosystem", sim4:"A final score, a reflection sheet, and a downloadable PDF of your results",
  simBtn:"Play Now", simNote:"The simulation is in Bahasa Indonesia. Universitas Tazkia students upload their result PDF to SMILE as instructed by the lecturer.",
  scrQ:"Akad quiz", scrQt:"An investor buys shares in the group's technology company. Which contract is closest?",
  scrO1:"A. Set up a company with fair fees and a mission lock", scrO2:"B. Set up a company with aggressive growth targets", scrO3:"C. Stay a single foundation and build AI employees",
  scrM1:"Public trust", scrM2:"Shariah compliance", scrM3:"Social mission",
  pathEyebrow:"Learning Path", pathTitle:"Fourteen Islamic Fintech topics", pathLead:"This path follows the semester plan of the Islamic Digital Finance course at Universitas Tazkia. Topics marked in gold are available now; the rest will be added gradually.",
  ready:"Available", soon:"Coming soon",
  howEyebrow:"How to Learn", howTitle:"Four simple steps",
  h1t:"Pick a topic", h1s:"Start with Session 1 to understand the ecosystem, or jump straight to the topic you need.",
  h2t:"Read the deck", h2s:"Each deck opens with a phenomenon, then moves to theory, contracts, risks, and case studies.",
  h3t:"Play the simulation", h3s:"Test your understanding through monthly decisions in the interactive simulation.",
  h4t:"Write a reflection", h4s:"Connect your simulation results to real cases, then share the lessons with others.",
  aboutEyebrow:"About the Author",
  about1:"Dr. Yaser Taufik Syamlan, ME, CIFP is a lecturer at Universitas Tazkia, where he teaches Islamic Financial Technology to undergraduates and Islamic Digital Finance in the Master of Islamic Economics programme, and an observer of Islamic banking. He was involved in designing the Shariah Restricted Investment Account (SRIA) product together with OJK and Asbisindo.",
  about2:"At Tazkia he develops case-based and simulation-based learning, so that students not only understand contracts but also practise making decisions as managers of Islamic financial institutions. In line with the T.A.Z.K.I.A character, these materials are now endowed so that anyone can benefit from Islamic digital finance literacy.",
  quote:"Beneficial knowledge should flow like a waqf: the principal stays preserved, while its benefits keep reaching many people.",
  quoteBy:"The spirit of knowledge waqf behind this site",
  archCap:"KNOWLEDGE WAQF",
  ctaTitle:"Together, bringing <em class=\"foil\">Islamic Fintech literacy</em> to everyone",
  ctaBtn2:"Share This Site", copied:"Link copied",
  footAbout:"A knowledge waqf from Dr. Yaser Taufik Syamlan, ME, CIFP with Universitas Tazkia, making Islamic Fintech easy for anyone to learn.",
  footNav:"Explore", footLic:"License",
  footLicTxt:"Materials are licensed under <a href=\"https://creativecommons.org/licenses/by-nc-sa/4.0/\" target=\"_blank\" rel=\"noopener\">CC BY-NC-SA 4.0</a>: you may study, share, and adapt them for learning with attribution, not for commercial purposes. Figures and events in the simulation are fictional.",
  footBottom:"© 2026 Learn Islamic Fintech with Tazkia",
  baTitle:"Learning Materials", baLead:"All Islamic Fintech lecture decks, reading modules, and the simulation in one place. Preview them right here or download them to study anytime.",
  fAll:"All", fS1:"Undergraduate", fS2:"Master's", fMod:"Modules", fSim:"Simulation", searchPh:"Search topics, contracts, or cases", searchLbl:"SEARCH",
  empty:"No matching materials yet. Try another keyword.",
  readEyebrow:"Further Reading", readTitle:"References to go deeper", readLead:"These readings underpin the theory in several sessions. Links point to the official sources.",
  close:"Close", newTab:"Open in a new tab",
  simCardT:"Donation Based Crowdfunding Simulation", simCardD:"A 10-minute simulation of leading a fictional donation platform: akad quizzes, the DBCF process, a risk register, a score, and a PDF reflection sheet.",
  lvlSim:"Simulation", minutes:"minutes", term:"Odd Semester 2026/2027",
  menuAbout:"About", mKisah:"The Knowledge Waqf", mPenyusun:"The Author", mCara:"How to Learn", mKolom:"Author's Column",
  menuPub:"Publications", mDeck:"Lecture Decks", mModul:"Reading Modules", mBacaan:"Further Reading",
  searchHint:"PRESS ESC TO CLOSE", searchBig:"Search materials...",
  s2Eyebrow:"Interactive Simulation", s2Title:"Donation Based Crowdfunding Simulation", s2Lead:"Lead a fictional donation platform for 12 months in 10 minutes, then download your learning result sheet.",
  s3Eyebrow:"Featured Material", s3Title:"Payment Gateways and Blockchain", s3Lead:"From QRIS to crypto and NFTs, with fatwas from ten countries. 66 pages, free to download.", s3Btn:"Download Deck",
  kolEyebrow:"Author's Column", kolLead:"Analysis pieces by Dr. Yaser Taufik Syamlan in national media, enriching the materials on this site.",
  kolCat:"Republika · Analysis · 11 April 2020", kolT:"Inovasi Produk Bank Syariah Terganjal GWM", kolS:"Why the Shariah Restricted Investment Account (SRIA) should be excluded from the statutory reserve requirement, and what it means for project financing (in Indonesian).", kolRead:"READ MORE →",
  kolMore:"Would you like to use these materials at your campus or institution? Please use and share them with attribution.",
  selEyebrow:"At a Glance", selTitle:"About Learn Islamic Fintech with Tazkia", selBtn:"More about the Knowledge Waqf", galCap:"Universitas Tazkia",
  cntEyebrow:"Milestones", cntTitle:"Learn at no cost, anytime",
  newsEyebrow:"Latest Materials", newsTitle:"Latest lecture decks", seeAll:"See all",
  footRel:"Related Sites", footAddr:"Universitas Tazkia · Sentul City, Bogor, West Java",
  mSimDbcf:"Donation Simulation (DBCF)", mSimSaham:"Islamic Stock Simulation", mSimMmq:"Diminishing Partnership (MMQ) Simulation", mSimKomite:"BPRS Financing Committee Duel", mSimRcf:"Reward Crowdfunding Simulation (RCF)", mSimAgg:"Islamic Aggregator Simulation", mSimLiga:"Islamic Crowdfunding League", mSimSukuk:"Sukuk Market Simulation", mSimAmanah:"Social Fund Simulation (Amanah)", mSimSantribos:"SantriBos AI Office",
  sbCrumb:"AI Office", sbTitle:"SantriBos AI Office", sbStart:"Enter the Office", sbHow:"How to Play",
  sbLead:"Open a santri supplies shop on a marketplace, then lead seven AI employees: Team Leader, Content, Editor, Accounting, Finance, Store Admin, and CS. Watch them work from the first chat to the last journal entry. You are the boss.",
  sbF1:"minutes per working day", sbF2:"AI employees", sbF3:"transactions on Day 1", sbF4:"AI tokens needed",
  sbLearnEyebrow:"What You Learn", sbLearnTitle:"From AI user to boss of AI employees",
  sbL1:"An AI office structure: leader, marketing, finance, and operations teams",
  sbL2:"One transaction end to end: chat, reply, checkout, payment check, shipping, journal",
  sbL3:"IG and TikTok content written by Content AI, edited by Editor AI, approved by the boss before it goes live",
  sbL4:"The boss's role: direct, judge (approve, revise, reject), and take responsibility",
  sbL5:"Free commands: discounts, ads, restock, new products, reports, zakat, or anything else",
  sbL6:"A training room: the boss's corrections become guidance for the agents",
  sbBlocked:"🔔 Boss approval needed: 7% discount for 5 sarongs, Pak Darmawan.",
  sbM1:"Revenue", sbM2:"Waiting for boss",
  sbHowEyebrow:"How It Runs", sbHowTitle:"Four steps to be the boss",
  sbS1t:"Enter the office", sbS1s:"Press Start. The Team Leader assigns work to seven AI employees.",
  sbS2t:"Watch the team", sbS2s:"Chats answered, orders shipped, content made, journals recorded, all on the office floor.",
  sbS3t:"Decide", sbS3s:"Approve, revise, or reject content, discounts, and wholesale prices. Revisions go to the training room.",
  sbS4t:"Command anything", sbS4s:"Type any command. The Team Leader picks the right agent and the result comes back to your desk.",
  sbMechEyebrow:"Mechanics", sbMechTitle:"What is simulated", sbMechLead:"Runs in the browser with no AI tokens. Agents follow workflows and templates that mimic a real AI office.",
  sbK1:"Operations", sbK1t:"CS and Store Admin", sbK1s:"Sari answers chats, including halal questions and haggling; Tari packs, ships, and watches stock.",
  sbK2:"Finance", sbK2t:"Finance and Accounting", sbK2s:"Fikri checks payments and margins; Aldi records journals and builds the profit and loss.",
  sbK3:"Marketing", sbK3t:"Content and Editor", sbK3s:"Raka writes scripts and captions; Nisa edits videos and posts to IG and TikTok.",
  sbK4:"Leadership", sbK4t:"Team Leader", sbK4s:"Lina opens the day, assigns work, passes on your commands, and reports at the end of the day.",
  sbK5:"Boss", sbK5t:"Approve, revise, reject", sbK5s:"Important decisions wait for you. Autopilot exists, but responsibility stays with the boss.",
  sbK6:"Commands", sbK6t:"Anything runs", sbK6s:"Discounts, ads, live streams, restock, new products, reports, zakat, or tasks beyond these.",
  sbK7:"Days", sbK7t:"Day 1 and beyond", sbK7s:"Day 1 has 10 transactions. Later days bring buyers from content, ads, and live streams.",
  sbK8:"Sharia", sbK8t:"Business with amanah", sbK8s:"Honest halal answers, a clear sale contract, and a zakat reserve from profit.",
  sbDosen:"For speakers: this simulation accompanies the seminar Gen Z and the Future of the Islamic Economy. Put it on screen and let the audience give commands.",
  sbCta:"Do not just chat with AI. <em>Lead</em> it.",
  amCrumb:"Social Funds", amTitle:"Amanah", amStart:"Start the Simulation", amHow:"How to Play",
  amLead:"Hold three trusts at once for six years: amil of zakat, nazhir of cash waqf, and manager of the hajj fund. Every decision is tested by floods, a rupiah crash, a sukuk default, and a conflict-of-interest temptation.",
  amF1:"minutes per session", amF2:"years in office", amF3:"roles you play", amF4:"questions, one each year",
  amLearnEyebrow:"What You Learn", amLearnTitle:"Social funds run on stricter rules than business",
  amL1:"Splitting zakat among the eight asnaf, including the one-eighth cap for the amil",
  amL2:"Productive zakat, coaching, and the path from mustahik to muzakki",
  amL3:"Cash waqf: keep the principal, let the benefit flow, nazhir fee at most 10% of net return",
  amL4:"CWLS, corporate sukuk, and a waqf hospital as productive waqf choices",
  amL5:"The hajj fund: the 30% bank placement cap, two years of liquidity, and the inter-generational subsidy",
  amL6:"A PDF report with amanah, impact, sustainability, and a decision journal",
  amBlocked:"Breach of amanah: amil share 14%, above one eighth.",
  amM1:"Amanah score", amM2:"Grade",
  amHowEyebrow:"How It Runs", amHowTitle:"Six years, three desks",
  amS1t:"Take the oath", amS1s:"Enter your name and student ID. You run three funds at once.",
  amS2t:"Decide", amS2s:"Each year you have two and a half minutes to set zakat, waqf, and the hajj fund. Coach tips help.",
  amS3t:"Face events", amS3s:"Floods, a boom, a rupiah crash, higher masyair fees, a sukuk default, a scandal elsewhere.",
  amS4t:"Report", amS4s:"A score from 0 to 100 for amanah, impact, sustainability, and questions, with a PDF.",
  amMechEyebrow:"Mechanics", amMechTitle:"What is simulated", amMechLead:"Numbers are stylised; rules follow UU 23/2011, UU 41/2004, and UU 34/2014.",
  amK1:"Zakat", amK1t:"Eight asnaf", amK1s:"Consumptive aid, productive zakat, coaching, emergencies, and the amil share. Trust sets the next collection.",
  amK2:"Zakat", amK2t:"Mustahik to muzakki", amK2s:"Coached micro-businesses survive more often and graduate to zakat payers two years later.",
  amK3:"Waqf", amK3t:"The principal must last", amK3s:"CWLS, sharia deposits, corporate sukuk, or a waqf hospital. Spending principal is a breach.",
  amK4:"Waqf", amK4t:"A conflict-of-interest test", amK4s:"In year two a regional official's company offers 15%. Accept or refuse?",
  amK5:"Hajj", amK5t:"A BPKH-style portfolio", amK5s:"Bank placements, SBSN and SDHI, corporate sukuk, direct investment in Makkah, and gold.",
  amK6:"Hajj", amK6t:"The inter-generational subsidy", amK6s:"When subsidies exceed nilai manfaat, waiting pilgrims pay for departing ones. How fair is that?",
  amK7:"Time", amK7t:"The clock is running", amK7s:"Two and a half minutes a year. When time runs out, your current choices are used.",
  amK8:"Score", amK8t:"Amanah, impact, sustainability", amK8s:"30 points for amanah, 30 for impact, 25 for sustainability, and 15 for questions.",
  amDosen:"For lecturers: this simulation accompanies the Week 12 deck, Islamic Social Funds. Ask students to bring their PDF report to class.",
  amCta:"Six years, three trusts. How much can you <em>keep</em>?",
  skCrumb:"Sukuk", skTitle:"Bursa Sukuk", skStart:"Start the Simulation", skHow:"How to Play",
  skLead:"One year of a sukuk market in ten minutes. Bid in SBSN auctions, order retail sukuk, trade corporate sukuk, and feel how BI-Rate, ratings, and a failed harvest move prices.",
  skF1:"minutes per session", skF2:"simulated market months", skF3:"virtual starting capital", skF4:"sukuk and bond series",
  skLearnEyebrow:"What You Learn", skLearnTitle:"From sukuk theory to the trading screen",
  skL1:"The akad behind every series: ijarah, wakalah, mudharabah, murabahah, and temporary waqf in CWLS",
  skL2:"Clean price, accrued ujrah, and yield: why prices fall when yields rise",
  skL3:"Why murabahah sukuk, ST, and CWLS cannot trade while ijarah can",
  skL4:"Multiple-price PBS auctions and SR and ST orders in the primary market",
  skL5:"Real risks: BI-Rate, Pefindo ratings, global shocks, and a mudharabah restructuring",
  skL6:"A PDF report with your score, behaviour profile, and akad journal",
  skBlocked:"Blocked: MFS-26 is a murabahah sukuk. Selling a receivable below face value is riba.",
  skM1:"SBSN 10-year yield", skM2:"Settlement",
  skHowEyebrow:"How It Runs", skHowTitle:"Four steps, twelve months",
  skS1t:"Open an account", skS1s:"Enter your name and student ID. You start with Rp500 million in a sharia account.",
  skS2t:"Primary market", skS2s:"Bid in the PBS auction; order SR, ST, murabahah sukuk, or CWLS during their offer windows.",
  skS3t:"Secondary market", skS3s:"Buy and sell tradable series while reading the monthly news.",
  skS4t:"Report", skS4s:"At the end of month 12 you get a score from 0 to 100 and a PDF report.",
  skMechEyebrow:"Mechanics", skMechTitle:"What is simulated", skMechLead:"Simplified, but following SBSN and Indonesia Stock Exchange practice.",
  skK1:"Price", skK1t:"Percent of face value", skK1s:"Clean prices are quoted in percent. When you buy, you also pay the seller the accrued ujrah.",
  skK2:"Curve", skK2t:"BI-Rate and yields", skK2s:"BI-Rate moves shift the curve. Long series move most.",
  skK3:"Primary", skK3t:"Auction and book building", skK3s:"PBS is auctioned at multiple prices; SR, ST, CWLS, and corporate sukuk sell at par.",
  skK4:"Akad", skK4t:"Tradable or not", skK4s:"Ijarah, wakalah, and mudharabah can trade. Murabahah cannot, because it is a receivable.",
  skK5:"Sharia", skK5t:"Sharia and regular accounts", skK5s:"A regular account opens a conventional bond for comparison, and the choice is recorded in your behaviour profile.",
  skK6:"Risk", skK6t:"Ratings and restructuring", skK6s:"Pefindo may upgrade or downgrade; a mudharabah sukuk may suspend its profit share.",
  skK7:"Social", skK7t:"Green sukuk and CWLS", skK7s:"Green ST floats with a floor; CWLS ujrah flows to waqf programmes.",
  skK8:"Score", skK8t:"Return, questions, conduct", skK8s:"40 points for return, 30 for questions at market events, 30 for conduct and sharia compliance.",
  skDosen:"For lecturers: this simulation accompanies the Sukuk (Theory and Practice) deck. Ask students to bring their PDF report to class.",
  skCta:"Try it: what happens to your sukuk when BI-Rate rises?",
  sim5CardT:"Reward Based Crowdfunding Simulation", sim5CardD:"Lead a reward-based crowdfunding platform for 12 months: contracts per reward tier, escrow, milestone disbursement, delayed consequences, contract quizzes, and a PDF result sheet (in Indonesian).", sim5Meta:"12 months · quizzes · PDF",
  sim6CardT:"Islamic Aggregator Simulation", sim6CardD:"Lead an Islamic financial product comparison app: licensing, sharia screening, data trust, neutral ranking, samsarah and ju'alah fees, and the temptation to hold user funds (in Indonesian).", sim6Meta:"12 months · quizzes · PDF",
  sim4CardT:"BPRS Financing Committee Duel", sim4CardD:"Legal and risk reviewers versus the computer: 5C, balance sheet, cash cycle, audit opinion, account officer tricks, falsified financing memos, and the committee hearing. With an instructor dashboard (Indonesian).", sim4Meta:"10 rounds · 15–30 minutes · vs computer",
  sim3CardT:"Diminishing Partnership (MMQ) Simulation", sim3CardD:"Three group games on musyarakah mutanaqishah: Maqasid and Contract Choice, Branch vs Head Office, and MMQ Audit Trail, with a facilitator console and class scoreboard. Interface in Indonesian.", sim3Meta:"3 games · 15–30 minutes",
  ssCrumb:"Islamic Stocks", ssTitle:"Bursa Syariah", ssStart:"Start the Simulation", ssHow:"How to Play",
  ssLead:"Trade stocks and sukuk the way the Indonesia Stock Exchange works, with Shariah rules that actually bite. One market month in fifteen minutes, Rp1 billion of virtual capital, and a +50% target that only counts when you hold stocks and sukuk together.",
  ssF1:"minutes per session", ssF2:"simulated trading days", ssF3:"virtual starting capital", ssF4:"learning missions",
  ssLearnEyebrow:"What You Learn", ssLearnTitle:"Learn the Islamic capital market by doing",
  ssL1:"The contract behind every trade: wakalah with your broker, bay' al-musawamah on the exchange, musyarakah as a shareholder",
  ssL2:"Shariah stock screening: line of business, interest-bearing debt up to 45%, non-halal income up to 10%",
  ssL3:"Prohibited transactions under DSN-MUI Fatwa 40/2003: margin trading and short selling are blocked in SOTS",
  ssL4:"IDX mechanics: lots, tick sizes, ARA and ARB limits, trading sessions, fees, and T+2 settlement",
  ssL5:"The primary market through a seven-step IPO: prospectus, book building, OJK effective statement, e-IPO, pooling allotment, KSEI distribution, and listing",
  ssL6:"Macro events that move prices at once: BPS inflation, the BI Rate decision, the Fed, the rupiah, coal, CPO, the MSCI review, and the OJK review of the DES",
  ssBlocked:"Blocked by SOTS: BKNV is not in the Shariah securities list because its core business is interest-based banking.",
  ssM1:"SHJY dividend purification", ssM2:"Sale proceeds settle",
  ssHowEyebrow:"How to Play", ssHowTitle:"Four steps, twenty minutes",
  ssS1t:"Register", ssS1s:"Enter your full name and student ID (NIM). Progress is saved on your device under that NIM.",
  ssS2t:"Trade", ssS2s:"Buy and sell fictional stocks and sukuk in a SOTS account. Each trading day lasts 45 seconds, with rumours, disclosures, and market news coming fast.",
  ssS3t:"Complete missions", ssS3s:"Fifteen missions guide you through the IPO, dividends, purification, T+2, a BI Rate call, the MSCI rebalancing, the DES review, and a comparison with a regular account.",
  ssS4t:"Submit your report", ssS4s:"After day 10, download the PDF report with your score, behaviour profile (homo islamicus or homo economicus), and game analysis, then answer two reflection questions. You may finish early or retake; every attempt stays on record in the report.",
  ssMechEyebrow:"Mirrors the Real Exchange", ssMechTitle:"Mechanics you will meet in the simulation",
  ssMechLead:"Issuers and prices are fictional, but the rules follow Indonesia Stock Exchange practice taught in class.",
  ssK1:"Units", ssK1t:"Lots and tick sizes", ssK1s:"1 lot = 100 shares. Prices move in ticks of Rp1 to Rp25 depending on the price range.",
  ssK2:"Daily limits", ssK2t:"ARA and ARB", ssK2s:"Orders outside the auto rejection band are refused, with the reason shown.",
  ssK3:"Time", ssK3t:"Trading sessions", ssK3s:"Pre-opening, Session 1, break, Session 2, and pre-closing. Orders outside sessions wait in the queue.",
  ssK4:"Money", ssK4t:"Fees and instant cash", ssK4s:"A 0.15% buy fee and a 0.25% sell fee. Sale money is reusable at once to keep the game fast; on the real IDX it settles at T+2.",
  ssK5:"Shariah", ssK5t:"SOTS account and DES", ssK5s:"Only stocks in the Shariah securities list can be bought. A regular account unlocks margin trading and short selling for comparison, and every choice feeds the behaviour profile.",
  ssK6:"Primary market", ssK6t:"The full IPO process", ssK6s:"Screen the HALA prospectus, bid in book building, see the final price form, order through e-IPO, receive your allotment and refund, then watch it list on Day 6.",
  ssK7:"Macro", ssK7t:"BI Rate, the Fed, and the rupiah", ssK7s:"A live economic calendar: call the BI Rate decision before it is announced, then watch each sector react. Markets move on surprises, not on the news itself.",
  ssK8:"Indices", ssK8t:"MSCI and the DES review", ssK8s:"Stocks enter or leave the MSCI index, passive funds buy on the effective date, and the OJK review can drop a stock from the Shariah list.",
  ssDosen:"For lecturers: this simulation supports the Islamic Financial Market and Institution course (Islamic capital market sessions). The simulator interface is in English. Students download a PDF report with an automatic score from 0 to 100 (missions 35, Shariah compliance 20, macro calls 15, performance against the ISSI 20, activity 10), a homo islamicus or homo economicus behaviour profile, an analysis, and two reflection questions. The score is formative; the lecturer makes the final assessment.",
  ssCta:"Fifteen minutes, one market month, a <em>+50%</em> target",
  ssKelasT:"Play together as a class", ssKelasS:"The lecturer opens a class and gets a code. Students choose Join a class and enter the code. Everyone sees the same market; the lecturer starts, pauses, and ends the game, sends issues that move prices, watches a leaderboard with returns, scores, and behaviour profiles, and downloads the grades as CSV. Students can also play solo for 20 minutes or with no time limit.", ssKelasBtn:"Open a class (lecturer)", ssKelasJoin:"Join a class (student)",
  sim2CardT:"Bursa Syariah: Stock Simulation", sim2CardD:"A one-month (15-minute) IDX-style stock and sukuk simulation in a SOTS account, Rp1 billion, +50% target: DES screening, ARA/ARB, rumours and disclosures, a sukuk board, a full IPO process, the BI Rate, MSCI, the DES review, dividend purification, and a PDF report with a score and behaviour profile.", sim2Days:"trading days",
  baCrumb:"Learning Materials",
  cr1:"Universitas Tazkia", cr4:"Islamic finance certifications"
 }
};

const MODS = [
 {no:"01", lvl:"s1", pg:20, f:"01-perkembangan-fintek-syariah.pdf", feat:true,
  t:{id:"Perkembangan Pasar Fintek di Indonesia dan Fintek Syariah", en:"The Fintech Market in Indonesia and Islamic Fintech"},
  d:{id:"Definisi dan ekosistem digital, perkembangan industri 2016 sampai 2025, Disruptive Innovation, Sharing Economy, serta kerangka regulasi dan sandbox.", en:"Definitions and the digital ecosystem, industry growth from 2016 to 2025, disruptive innovation, the sharing economy, and the regulatory framework and sandbox."}},
 {no:"02", lvl:"s1", pg:21, f:"02-etika-fintek-dan-regtech.pdf",
  t:{id:"Etika Fintek, Fintek Syariah, dan RegTech", en:"Fintech Ethics, Islamic Fintech, and RegTech"},
  d:{id:"Sumber dilema etis pada layanan keuangan digital, kerangka etika, etika fintek syariah, hingga kepatuhan yang terprogram melalui RegTech.", en:"Sources of ethical dilemmas in digital finance, ethical frameworks, Islamic fintech ethics, and programmed compliance through RegTech."}},
 {no:"02", lvl:"s2", pg:26, f:"02m-label-syariah-dan-amanah.pdf", extra:"02m-modul-label-syariah-dan-amanah.pdf",
  t:{id:"Ketika Label Syariah Gagal Menjaga Amanah", en:"When the Shariah Label Fails to Keep the Trust"},
  d:{id:"Etika fintek syariah dalam kasus Dana Syariah Indonesia dan Investree, serta respons regulator. Dilengkapi modul bacaan.", en:"Islamic fintech ethics in the Dana Syariah Indonesia and Investree cases, and the regulator's response. Includes a reading module."}},
 {no:"03", lvl:"s1", pg:8, f:"03-ai-robo-advisor-credit-scoring.pdf",
  t:{id:"Kecerdasan Buatan, Robo Advisor, dan Credit Scoring", en:"Artificial Intelligence, Robo Advisors, and Credit Scoring"},
  d:{id:"Cara kerja AI, robo advisor, dan credit scoring, serta batas riba, gharar, dan maysir pada sistem yang mengambil keputusan sendiri.", en:"How AI, robo advisors, and credit scoring work, and the limits of riba, gharar, and maysir in systems that make their own decisions."}},
 {no:"04", lvl:"s2", pg:66, f:"04-payment-gateway-dan-blockchain.pdf", feat:true,
  t:{id:"Payment Gateway dan Blockchain: Teknologinya Netral, Akadnya yang Diuji", en:"Payment Gateways and Blockchain: Neutral Technology, Tested Contracts"},
  d:{id:"Dari ATM, payment gateway, e-money, dan QRIS hingga blockchain, kripto, NFT, serta fatwa dari sepuluh negara.", en:"From ATMs, payment gateways, e-money, and QRIS to blockchain, crypto, NFTs, and fatwas from ten countries."}},
 {no:"05", lvl:"s2", pg:20, f:"05-tokenisasi-real-world-asset.pdf",
  t:{id:"Tokenisasi Real World Asset: Mirip Efek, Tanpa Pagar Bursa", en:"Real World Asset Tokenisation: Securities-like, Without Exchange Safeguards"},
  d:{id:"Definisi, model bisnis, akad, akuntansi, risiko, dan RPOJK, serta kasus Goro, Orbitum, emas, SRIA, dan wakaf.", en:"Definitions, business models, contracts, accounting, risks, and the draft OJK rules, with the Goro, Orbitum, gold, SRIA, and waqf cases."}},
 {no:"06", lvl:"s1", pg:20, f:"06-donation-based-crowdfunding.pdf", sim:true, feat:true,
  t:{id:"Model Bisnis Donation Based Crowdfunding", en:"The Donation Based Crowdfunding Business Model"},
  d:{id:"Fenomena donasi daring, pelajaran dari ACT, teori Mission Drift, akad, risiko, perizinan, serta studi kasus Kitabisa dan Raihmimpi.", en:"Online giving in Indonesia, lessons from ACT, mission drift theory, contracts, risks, licensing, and the Kitabisa and Raihmimpi case studies."}}
];
const PATH = [
 {id:"Ekosistem digital, Disruptive Innovation, dan Sharing Economy", en:"The digital ecosystem, disruptive innovation, and the sharing economy", m:"01"},
 {id:"Etika fintek, definisi Islamic Fintech, dan RegTech", en:"Fintech ethics, defining Islamic Fintech, and RegTech", m:"02"},
 {id:"AI, Machine Learning, Robo Advisor, dan Credit Scoring", en:"AI, machine learning, robo advisors, and credit scoring", m:"03"},
 {id:"Blockchain, Payment Gateway, E-Money, dan QRIS", en:"Blockchain, payment gateways, e-money, and QRIS", m:"04"},
 {id:"Cryptocurrency, NFT, dan fatwa terkait", en:"Cryptocurrency, NFTs, and related fatwas", m:"04"},
 {id:"Tokenisasi Non-RWA: utility dan governance token", en:"Non-RWA tokenisation: utility and governance tokens"},
 {id:"Tokenisasi Real World Asset: properti, sukuk, komoditas", en:"Real world asset tokenisation: property, sukuk, commodities", m:"05"},
 {id:"Model bisnis aggregator", en:"The aggregator business model"},
 {id:"Securities Crowdfunding dan Fatwa No. 130 Tahun 2020", en:"Securities crowdfunding and Fatwa No. 130 of 2020"},
 {id:"Reward Based dan Donation Based Crowdfunding", en:"Reward-based and donation-based crowdfunding", m:"06"},
 {id:"P2P Lending Syariah, PayLater, dan Fatwa No. 117 Tahun 2018", en:"Islamic P2P lending, PayLater, and Fatwa No. 117 of 2018"},
 {id:"Insurtech dan Wealth Management syariah", en:"Islamic insurtech and wealth management"},
 {id:"Koperasi digital syariah dan Cooperative Based Crowdfunding", en:"Islamic digital cooperatives and cooperative-based crowdfunding"},
 {id:"Neo Banking dalam perspektif syariah", en:"Neo banking from a Shariah perspective"}
];
const READS = [
 {k:{id:"Teori disrupsi",en:"Disruption theory"}, t:"What Is Disruptive Innovation?", s:"Christensen, Raynor & McDonald · Harvard Business Review, 2015", u:"https://hbr.org/2015/12/what-is-disruptive-innovation"},
 {k:{id:"Regulasi",en:"Regulation"}, t:"Spontaneous Deregulation", s:"Edelman & Geradin · Harvard Business Review, 2016", u:"https://hbr.org/2016/04/spontaneous-deregulation"},
 {k:{id:"Fatwa",en:"Fatwas"}, t:"Fatwa Dewan Syariah Nasional MUI", s:"DSN-MUI · himpunan fatwa keuangan syariah", u:"https://dsnmui.or.id/"},
 {k:{id:"Regulator",en:"Regulator"}, t:"Inovasi Teknologi Sektor Keuangan", s:"Otoritas Jasa Keuangan · regulasi dan perizinan fintech", u:"https://www.ojk.go.id/"}
];
const AKAD = [["وَكَالَة","Wakalah"],["مُضَارَبَة","Mudharabah"],["مُشَارَكَة","Musyarakah"],["إِجَارَة","Ijarah"],["مُرَابَحَة","Murabahah"],["قَرْض","Qardh"],["تَبَرُّع","Tabarru'"],["وَدِيْعَة","Wadiah"],["كَفَالَة","Kafalah"],["صَرْف","Sharf"],["سَلَم","Salam"],["اِسْتِصْنَاع","Istishna'"],["هِبَة","Hibah"],["وَقْف","Wakaf"],["زَكَاة","Zakat"]];

const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
let lang = "id", filter = "all", query = "";

function lvlLabel(m){ const L = T[lang]; return m.lvl==="s2" ? L.fS2 : L.fS1; }
function modCard(m){
  const L = T[lang];
  const thumb = BASE + "assets/thumbs/" + m.f.replace(".pdf", ".jpg");
  return `<article class="mod corner reveal" id="m${m.no}${m.lvl}">
    <a class="thumb" href="${BASE}materi/${m.f}" target="_blank" rel="noopener" data-view="${m.f}" data-title="${m.t[lang].replace(/"/g,'&quot;')}"><img src="${thumb}" alt="" loading="lazy" width="800" height="450"><span class="tag ${m.lvl==='s2'?'m':''}">${lvlLabel(m)}</span></a>
    <div class="body">
      <div class="meta">${L.session} ${m.no} · ${m.pg} ${L.pages} · ${L.term}</div>
      <h3>${m.t[lang]}</h3>
      <p>${m.d[lang]}</p>
      <div class="acts">
        <button class="btn ink sm" type="button" data-view="${m.f}" data-title="${m.t[lang].replace(/"/g,'&quot;')}">${L.open}</button>
        <a class="btn sm" href="${BASE}materi/${m.f}" download>${L.dl}</a>
        ${m.extra ? `<a class="btn sm" href="${BASE}materi/${m.extra}" target="_blank" rel="noopener">${L.module}</a>` : ""}
        ${m.sim ? `<a class="btn gold sm" href="${BASE}simulasi/dbcf/">${L.play}</a>` : ""}
      </div>
    </div></article>`;
}
function simCard(){
  const L = T[lang];
  return `<article class="mod corner reveal" style="background:radial-gradient(ellipse at 30% 0%,#14503d,#061a14 70%);border-color:var(--gold);color:#e9e4d5">
    <a class="thumb" href="${BASE}simulasi/dbcf/" style="display:grid;place-items:center;background:radial-gradient(ellipse at 50% 30%,#14503d,#03100c)"><span class="foil" style="font-family:var(--ar);font-size:64px;line-height:1">أَمَانَة</span><span class="tag m">${L.lvlSim}</span></a>
    <div class="body"><div class="meta" style="color:#a9b4ab">10 ${L.minutes} · 12 ${lang==='id'?'bulan simulasi':'simulated months'}</div>
    <h3 style="color:#fff">${L.simCardT}</h3><p style="color:#c3cec6">${L.simCardD}</p>
    <div class="acts"><a class="btn gold sm" href="${BASE}simulasi/dbcf/">${L.play}</a></div></div></article>`;
}
function simCard2(){
  const L = T[lang];
  return `<article class="mod corner reveal" style="background:radial-gradient(ellipse at 30% 0%,#1b3a63,#0a1730 70%);border-color:var(--gold);color:#e9e4d5">
    <a class="thumb" href="${BASE}simulasi/saham/" style="display:grid;place-items:center;background:radial-gradient(ellipse at 50% 30%,#1b3a63,#06101f)"><span class="foil" style="font-family:var(--ar);font-size:60px;line-height:1">مُشَارَكَة</span><span class="tag m">${L.lvlSim}</span></a>
    <div class="body"><div class="meta" style="color:#a9b4ab">20 ${L.minutes} · 10 ${L.sim2Days}</div>
    <h3 style="color:#fff">${L.sim2CardT}</h3><p style="color:#c3cec6">${L.sim2CardD}</p>
    <div class="acts"><a class="btn gold sm" href="${BASE}simulasi/saham/">${L.play}</a></div></div></article>`;
}
function simCard3(){
  const L = T[lang];
  return `<article class="mod corner reveal" style="background:radial-gradient(ellipse at 30% 0%,#3a2a10,#1a1206 70%);border-color:var(--gold);color:#e9e4d5">
    <a class="thumb" href="${BASE}simulasi/mmq/" style="display:grid;place-items:center;background:radial-gradient(ellipse at 50% 30%,#4a3412,#120c04)"><span class="foil" style="font-family:var(--ar);font-size:54px;line-height:1">مُتَنَاقِصَة</span><span class="tag m">${L.lvlSim}</span></a>
    <div class="body"><div class="meta" style="color:#a9b4ab">${L.sim3Meta}</div>
    <h3 style="color:#fff">${L.sim3CardT}</h3><p style="color:#c3cec6">${L.sim3CardD}</p>
    <div class="acts"><a class="btn gold sm" href="${BASE}simulasi/mmq/">${L.play}</a></div></div></article>`;
}
function simCard4(){
  const L = T[lang];
  return `<article class="mod corner reveal" style="background:radial-gradient(ellipse at 30% 0%,#4a1520,#0a1730 70%);border-color:var(--gold);color:#e9e4d5">
    <a class="thumb" href="${BASE}simulasi/komite/" style="display:grid;place-items:center;background:radial-gradient(ellipse at 50% 30%,#5a1a28,#06101f)"><span class="foil" style="font-family:var(--ar);font-size:60px;line-height:1">لَجْنَة</span><span class="tag m">${L.lvlSim}</span></a>
    <div class="body"><div class="meta" style="color:#a9b4ab">${L.sim4Meta}</div>
    <h3 style="color:#fff">${L.sim4CardT}</h3><p style="color:#c3cec6">${L.sim4CardD}</p>
    <div class="acts"><a class="btn gold sm" href="${BASE}simulasi/komite/">${L.play}</a></div></div></article>`;
}
function simCardX(n, path, ar, c1, c2){
  const L = T[lang];
  return `<article class="mod corner reveal" style="background:radial-gradient(ellipse at 30% 0%,${c1},#0a1730 70%);border-color:var(--gold);color:#e9e4d5">
    <a class="thumb" href="${BASE}simulasi/${path}/" style="display:grid;place-items:center;background:radial-gradient(ellipse at 50% 30%,${c2},#06101f)"><span class="foil" style="font-family:var(--ar);font-size:56px;line-height:1">${ar}</span><span class="tag m">${L.lvlSim}</span></a>
    <div class="body"><div class="meta" style="color:#a9b4ab">${L["sim"+n+"Meta"]}</div>
    <h3 style="color:#fff">${L["sim"+n+"CardT"]}</h3><p style="color:#c3cec6">${L["sim"+n+"CardD"]}</p>
    <div class="acts"><a class="btn gold sm" href="${BASE}simulasi/${path}/">${L.play}</a></div></div></article>`;
}
function renderMods(){
  const featBox = $("#featMods");
  if (featBox) featBox.innerHTML = MODS.slice().reverse().filter(m => !m.extra).slice(0,3).map(modCard).join("");
  const cat = $("#catalog");
  if (cat){
    const q = query.trim().toLowerCase();
    let list = MODS.filter(m => filter==="all" || (filter==="s1" && m.lvl==="s1") || (filter==="s2" && m.lvl==="s2") || (filter==="mod" && m.extra));
    if (q) list = list.filter(m => (m.t.id+" "+m.t.en+" "+m.d.id+" "+m.d.en).toLowerCase().includes(q));
    let html = list.map(modCard).join("");
    const simOk = (filter==="all" || filter==="sim") && (!q || (T.id.simCardT+" "+T.id.simCardD+" "+T.en.simCardD+" dbcf donasi").toLowerCase().includes(q));
    if (filter==="sim") html = "";
    if (simOk) html += simCard();
    const sim2Ok = (filter==="all" || filter==="sim") && (!q || (T.id.sim2CardT+" "+T.id.sim2CardD+" "+T.en.sim2CardD+" saham stock bursa").toLowerCase().includes(q));
    if (sim2Ok) html += simCard2();
    const sim3Ok = (filter==="all" || filter==="sim") && (!q || (T.id.sim3CardT+" "+T.id.sim3CardD+" mmq musyarakah mutanaqishah pnm audit akad").toLowerCase().includes(q));
    if (sim3Ok) html += simCard3();
    const sim4Ok = (filter==="all" || filter==="sim") && (!q || (T.id.sim4CardT+" "+T.id.sim4CardD+" "+T.en.sim4CardD+" komite pembiayaan bprs kredit legal fraud mup muk neraca 5c").toLowerCase().includes(q));
    if (sim4Ok) html += simCard4();
    const simX = (n, kw) => (filter==="all" || filter==="sim") && (!q || (T.id["sim"+n+"CardT"]+" "+T.id["sim"+n+"CardD"]+" "+T.en["sim"+n+"CardD"]+" "+kw).toLowerCase().includes(q));
    if (simX(5, "rcf reward crowdfunding istishna salam imbalan")) html += simCardX(5, "rcf", "جَعَالَة", "#123d3a", "#16504a");
    if (simX(6, "agregator aggregator samsarah wasathah pembanding")) html += simCardX(6, "agregator", "سَمْسَرَة", "#2b1d4a", "#3a2a63");
    cat.innerHTML = html || `<div class="empty">${T[lang].empty}</div>`;
  }
  const reads = $("#reads");
  if (reads) reads.innerHTML = READS.map(r => `<a class="read" href="${r.u}" target="_blank" rel="noopener"><small>${r.k[lang]}</small><b>${r.t}</b><span>${r.s}</span></a>`).join("");
  bindViewers(); observe();
}
function renderPath(){
  const box = $("#path"); if (!box) return;
  const L = T[lang];
  box.innerHTML = PATH.map((p,i) => {
    const inner = `<span class="n">${String(i+1).padStart(2,"0")}</span><span><b>${p[lang]}</b><small>${p.m ? L.ready : L.soon}</small></span>`;
    return p.m ? `<a class="topic ready" href="${BASE}bahan-ajar/#m${p.m}">${inner}</a>` : `<div class="topic">${inner}</div>`;
  }).join("");
}
function applyLang(l){
  lang = l;
  const L = T[l];
  document.documentElement.lang = l;
  $$("[data-i]").forEach(el => { const k = el.dataset.i; if (L[k] !== undefined) el.innerHTML = L[k]; });
  $$("[data-ph]").forEach(el => { const k = el.dataset.ph; if (L[k] !== undefined) el.placeholder = L[k]; });
  $$(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang===l)));
  renderMods(); renderPath();
  try { localStorage.setItem("lif-lang", l); } catch(e){}
}

/* viewer PDF */
function bindViewers(){
  $$("[data-view]").forEach(b => { if (b._b) return; b._b = 1; b.addEventListener("click", e => { if (window.innerWidth >= 760){ e.preventDefault(); openViewer(b.dataset.view, b.dataset.title); } else if (b.tagName === "BUTTON") openViewer(b.dataset.view, b.dataset.title); }); });
}
function openViewer(f, title){
  const url = BASE + "materi/" + f;
  if (window.innerWidth < 760){ window.open(url, "_blank", "noopener"); return; }
  const L = T[lang];
  const v = document.createElement("div");
  v.className = "viewer"; v.setAttribute("role","dialog"); v.setAttribute("aria-label", title);
  v.innerHTML = `<div class="vh"><b>${title}</b><div><a class="btn line sm" href="${url}" target="_blank" rel="noopener">${L.newTab}</a><a class="btn line sm" href="${url}" download>${L.dl}</a><button class="btn gold sm" type="button">${L.close}</button></div></div><iframe src="${url}" title="${title}"></iframe>`;
  document.body.appendChild(v);
  const close = () => { v.remove(); document.removeEventListener("keydown", esc); };
  const esc = e => { if (e.key === "Escape") close(); };
  v.querySelector("button").addEventListener("click", close);
  document.addEventListener("keydown", esc);
  v.querySelector("button").focus();
}

/* reveal */
let io = null;
function observe(){
  const els = $$(".reveal:not(.in)");
  if (!("IntersectionObserver" in window)){ els.forEach(e => e.classList.add("in")); return; }
  if (!io) io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold:.12});
  els.forEach(e => io.observe(e));
}
setTimeout(() => $$(".reveal").forEach(e => e.classList.add("in")), 2600);

/* emblem lengkung tapal kuda */
function horseshoe(o){
  const {cx=260,cy=290,ri=196,ro=236,span=118,n=25,bottom=640,alfiz=true} = o; let s = "";
  const pt = (r,a) => [cx+r*Math.cos(a), cy+r*Math.sin(a)];
  const a0 = (-90-span)*Math.PI/180, a1 = (-90+span)*Math.PI/180;
  if (alfiz){
    const top = cy-ro-22;
    s += `<rect x="${cx-ro-22}" y="${top}" width="${(ro+22)*2}" height="${bottom-top}" fill="none" stroke="url(#gd)" stroke-width="1.4"/><rect x="${cx-ro-12}" y="${top+10}" width="${(ro+12)*2}" height="${bottom-top-10}" fill="none" stroke="#c9a24a" stroke-opacity=".35"/>`;
    [[cx-ro-2,top+30],[cx+ro+2,top+30]].forEach(([x,y]) => s += `<g transform="translate(${x} ${y})"><rect x="-9" y="-9" width="18" height="18" fill="#a8452c" stroke="#c9a24a"/><rect x="-9" y="-9" width="18" height="18" transform="rotate(45)" fill="#a8452c" stroke="#c9a24a"/><circle r="3" fill="#e6cf94"/></g>`);
  }
  for (let i=0;i<n;i++){
    const b0 = a0+(a1-a0)*i/n, b1 = a0+(a1-a0)*(i+1)/n;
    const [x1,y1] = pt(ri,b0), [x2,y2] = pt(ro,b0), [x3,y3] = pt(ro,b1), [x4,y4] = pt(ri,b1);
    s += `<path d="M${x1},${y1} L${x2},${y2} A${ro},${ro} 0 0 1 ${x3},${y3} L${x4},${y4} A${ri},${ri} 0 0 0 ${x1},${y1}Z" fill="${i%2?'#efe2c4':'#a8452c'}" stroke="#c9a24a" stroke-width=".8"/>`;
  }
  const [lx,ly] = pt(ri,a0), [rx,ry] = pt(ri,a1), [lxo] = pt(ro,a0), [rxo] = pt(ro,a1);
  s += `<path d="M${lxo},${ly} L${lxo},${bottom} M${rxo},${ry} L${rxo},${bottom}" stroke="url(#gd)" stroke-width="1.4"/>`;
  s += `<rect x="${lxo-6}" y="${ly-4}" width="${lx-lxo+12}" height="10" fill="url(#gd)"/><rect x="${rx-6}" y="${ry-4}" width="${rxo-rx+12}" height="10" fill="url(#gd)"/>`;
  return {s, inner:`M${lx},${bottom} L${lx},${ly} A${ri},${ri} 0 1 1 ${rx},${ry} L${rx},${bottom}Z`};
}
const GD = `<linearGradient id="gd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6e7b6"/><stop offset=".5" stop-color="#c9a24a"/><stop offset="1" stop-color="#8a6520"/></linearGradient>`;
function emblem(){
  const box = $("#emblem"); if (!box) return;
  const c = 260, cy = 330, A = horseshoe({cx:260, cy:300, ri:200, ro:238, bottom:640});
  let s = `<defs>${GD}<radialGradient id="glow"><stop offset="0" stop-color="#e6cf94" stop-opacity=".3"/><stop offset=".6" stop-color="#c9a24a" stop-opacity=".05"/><stop offset="1" stop-color="#c9a24a" stop-opacity="0"/></radialGradient><linearGradient id="archfill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14503d" stop-opacity=".7"/><stop offset="1" stop-color="#061a14" stop-opacity=".1"/></linearGradient></defs>`;
  s += `<path d="${A.inner}" fill="url(#archfill)"/>` + A.s + `<circle cx="${c}" cy="${cy}" r="210" fill="url(#glow)"/>`;
  s += `<g class="spin"><circle cx="${c}" cy="${cy}" r="182" fill="none" stroke="#c9a24a" stroke-opacity=".45" stroke-dasharray="2 8"/>`;
  for (let i=0;i<99;i++){ const a = i/99*Math.PI*2; s += `<circle cx="${c+Math.cos(a)*172}" cy="${cy+Math.sin(a)*172}" r="${i%11===0?2.4:1.3}" fill="#e6cf94" opacity="${i%11===0?.9:.5}"/>`; }
  s += `</g><g class="spin rev"><g fill="none" stroke="url(#gd)" stroke-width="1.5"><rect x="${c-108}" y="${cy-108}" width="216" height="216"/><rect x="${c-108}" y="${cy-108}" width="216" height="216" transform="rotate(45 ${c} ${cy})"/><rect x="${c-78}" y="${cy-78}" width="156" height="156" transform="rotate(22.5 ${c} ${cy})" stroke-opacity=".5"/><rect x="${c-78}" y="${cy-78}" width="156" height="156" transform="rotate(67.5 ${c} ${cy})" stroke-opacity=".5"/></g></g>`;
  s += `<circle cx="${c}" cy="${cy}" r="74" fill="#03100c" stroke="url(#gd)" stroke-width="2"/><circle cx="${c}" cy="${cy}" r="67" fill="none" stroke="#a8452c" stroke-opacity=".8" stroke-dasharray="4 3"/>`;
  s += `<text x="${c}" y="${cy-6}" text-anchor="middle" font-family="Amiri,serif" font-size="30" fill="url(#gd)">عِلْم</text><text x="${c}" y="${cy+18}" text-anchor="middle" font-family="Cinzel,serif" font-size="13" font-weight="600" letter-spacing="3" fill="url(#gd)">FINTECH</text><text x="${c}" y="${cy+32}" text-anchor="middle" font-family="Cinzel,serif" font-size="7" letter-spacing="2" fill="#c9a24a">TAZKIA</text>`;
  const N = [["عَقْد","Akad"],["مُخَاطَرَة","Risiko"],["تَنْظِيْم","Regulasi"],["مَقَاصِد","Maqashid"]];
  const P = [[c,cy-150],[c+150,cy],[c,cy+150],[c-150,cy]];
  N.forEach(([ar,n],i) => { const [x,y] = P[i]; s += `<circle cx="${x}" cy="${y}" r="42" fill="#03100c" stroke="url(#gd)" stroke-width="1.6"/><circle cx="${x}" cy="${y}" r="36" fill="none" stroke="#a8452c" stroke-opacity=".7"/><text x="${x}" y="${y+4}" text-anchor="middle" font-family="Amiri,serif" font-size="20" fill="url(#gd)">${ar}</text><text x="${x}" y="${y+21}" text-anchor="middle" font-family="Cinzel,serif" font-size="7.5" letter-spacing="1.6" fill="#cfd6cb">${n.toUpperCase()}</text>`; });
  box.innerHTML = `<svg viewBox="0 0 520 640" role="img" aria-label="Akad, Risiko, Regulasi, Maqashid">${s}</svg>`;
}
function arch(){
  const box = $("#arch"); if (!box) return;
  const A = horseshoe({cx:260, cy:300, ri:196, ro:234, bottom:660, n:23});
  box.innerHTML = `<svg viewBox="0 0 520 660" role="img" aria-label="Dr. Yaser Taufik Syamlan"><defs>${GD}<pattern id="pt" width="48" height="48" patternUnits="userSpaceOnUse"><g fill="none" stroke="#c9a24a" stroke-opacity=".35"><path d="M24 5 29 19 43 24 29 29 24 43 19 29 5 24 19 19Z"/><rect x="12" y="12" width="24" height="24"/></g></pattern><radialGradient id="pg" cx=".5" cy=".3"><stop offset="0" stop-color="#1a5a45"/><stop offset="1" stop-color="#061a14"/></radialGradient></defs>
  <path d="${A.inner}" fill="url(#pg)"/><path d="${A.inner}" fill="url(#pt)"/>${A.s}
  <text x="260" y="380" text-anchor="middle" font-family="Cinzel,serif" font-size="96" font-weight="500" letter-spacing="6" fill="url(#gd)">YTS</text>
  <text x="260" y="420" text-anchor="middle" font-family="Cinzel,serif" font-size="12" letter-spacing="5" fill="#cfd6cb" data-arch>${T[lang].archCap}</text>
  <text x="260" y="470" text-anchor="middle" font-family="Amiri,serif" font-size="30" fill="url(#gd)">وَقْفُ الْعِلْمِ</text></svg>`;
}
function marquee(){
  const box = $("#marq"); if (!box) return;
  const row = AKAD.map(([a,n]) => `<span class="foil">${a}</span><em>${n}</em><i>◆</i>`).join("");
  box.innerHTML = row + row;
}
function sparks(){
  const cv = $("#spark"); if (!cv || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const x = cv.getContext("2d"); let W, H; const pts = [];
  const rs = () => { W = cv.width = cv.offsetWidth*devicePixelRatio; H = cv.height = cv.offsetHeight*devicePixelRatio; };
  rs(); addEventListener("resize", rs);
  for (let i=0;i<70;i++) pts.push({x:Math.random(), y:Math.random(), r:Math.random()*1.8+.4, s:Math.random()*.0006+.0002, p:Math.random()*6.28});
  (function f(t){
    x.clearRect(0,0,W,H);
    pts.forEach(p => { p.y -= p.s; if (p.y < -.02){ p.y = 1.02; p.x = Math.random(); }
      const a = .35 + .35*Math.sin(t/900 + p.p);
      x.beginPath(); x.arc(p.x*W, p.y*H, p.r*devicePixelRatio, 0, 6.28); x.fillStyle = `rgba(230,207,148,${a})`; x.fill(); });
    requestAnimationFrame(f);
  })(0);
}

/* navigasi */
function nav(){
  const h = $("header.nav");
  if (h) addEventListener("scroll", () => h.classList.toggle("solid", scrollY > 30), {passive:true});
  const b = $(".burger"), m = $(".menu");
  if (b && m){ b.addEventListener("click", () => { const o = m.classList.toggle("open"); b.setAttribute("aria-expanded", String(o)); }); m.addEventListener("click", e => { if (e.target.tagName === "A") m.classList.remove("open"); }); }
  $$(".lang button").forEach(btn => btn.addEventListener("click", () => { applyLang(btn.dataset.lang); arch(); }));
  $$(".chips button").forEach(btn => btn.addEventListener("click", () => { filter = btn.dataset.f; $$(".chips button").forEach(x => x.classList.toggle("on", x===btn)); renderMods(); }));
  const s = $("#search"); if (s) s.addEventListener("input", () => { query = s.value; renderMods(); });
  $$("[data-share]").forEach(btn => btn.addEventListener("click", async () => {
    const url = location.origin + location.pathname.replace(/bahan-ajar\/.*$/, "");
    try { if (navigator.share) { await navigator.share({title:"Learn Islamic Fintech with Tazkia", url}); return; } await navigator.clipboard.writeText(url); btn.textContent = T[lang].copied; } catch(e){}
  }));
}

/* slider */
function slider(){
  const sl = $$(".slide"); if (!sl.length) return;
  const dots = $(".sctl"); let i = 0, timer = null;
  dots.innerHTML = sl.map((_,k) => `<button type="button" aria-label="Slide ${k+1}"></button>`).join("");
  const go = k => { i = (k + sl.length) % sl.length; sl.forEach((s,j) => s.classList.toggle("on", j===i)); $$(".sctl button").forEach((d,j) => d.classList.toggle("on", j===i)); };
  const auto = () => { clearInterval(timer); if (!matchMedia("(prefers-reduced-motion: reduce)").matches) timer = setInterval(() => go(i+1), 7000); };
  $$(".sctl button").forEach((d,k) => d.addEventListener("click", () => { go(k); auto(); }));
  const l = $(".sarrow.l"), r = $(".sarrow.r");
  if (l) l.addEventListener("click", () => { go(i-1); auto(); });
  if (r) r.addEventListener("click", () => { go(i+1); auto(); });
  go(0); auto();
}
/* counter */
function counters(){
  const els = $$("[data-count]"); if (!els.length) return;
  const run = el => { const to = +el.dataset.count, pre = el.dataset.pre || ""; let t0 = null;
    const step = ts => { if (!t0) t0 = ts; const k = Math.min(1, (ts-t0)/1400); el.textContent = pre + Math.round(to * (1 - Math.pow(1-k,3))); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step); };
  if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
  const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ run(e.target); o.unobserve(e.target); } }), {threshold:.4});
  els.forEach(e => o.observe(e));
}
/* pencarian overlay */
function searchOverlay(){
  const btn = $("[data-search]"); if (!btn) return;
  btn.addEventListener("click", () => {
    const L = T[lang];
    const v = document.createElement("div"); v.className = "sov"; v.setAttribute("role","dialog");
    v.innerHTML = `<button class="icobtn x" type="button" aria-label="${L.close}">✕</button><input type="search" placeholder="${L.searchBig}" aria-label="${L.searchBig}"><small>${L.searchHint}</small><div class="res"></div>`;
    document.body.appendChild(v);
    const inp = v.querySelector("input"), res = v.querySelector(".res");
    const draw = () => { const q = inp.value.trim().toLowerCase();
      const list = MODS.filter(m => !q || (m.t.id+" "+m.t.en+" "+m.d.id+" "+m.d.en).toLowerCase().includes(q));
      res.innerHTML = list.map(m => `<a href="${BASE}bahan-ajar/#m${m.no}"><img src="${BASE}assets/thumbs/${m.f.replace('.pdf','.jpg')}" alt=""><div><span>${L.session} ${m.no} · ${lvlLabel(m)}</span><b>${m.t[lang]}</b></div></a>`).join(""); };
    const close = () => { v.remove(); document.removeEventListener("keydown", esc); };
    const esc = e => { if (e.key === "Escape") close(); };
    v.querySelector(".x").addEventListener("click", close);
    document.addEventListener("keydown", esc);
    inp.addEventListener("input", draw); draw(); inp.focus();
  });
}
function toTop(){
  const b = $(".totop"); if (!b) return;
  addEventListener("scroll", () => b.classList.toggle("on", scrollY > 600), {passive:true});
  b.addEventListener("click", () => scrollTo({top:0, behavior:"smooth"}));
}

/* mulai */
let start = "id";
try { start = localStorage.getItem("lif-lang") || "id"; } catch(e){}
if (location.hash === "#en") start = "en";
if (location.hash === "#id") start = "id";
const qs = new URLSearchParams(location.search);
if (qs.has("lang")) start = qs.get("lang") === "en" ? "en" : "id";
emblem(); marquee(); nav(); applyLang(start); arch(); sparks(); slider(); counters(); searchOverlay(); toTop();
if (PAGE === "bahan-ajar" && location.hash === "#modul"){ const c = document.querySelector('.chips button[data-f="mod"]'); if (c) c.click(); }
if (PAGE === "bahan-ajar" && location.hash.startsWith("#m")){ setTimeout(() => { const el = document.getElementById(location.hash.slice(1)+"s1") || document.getElementById(location.hash.slice(1)+"s2"); if (el){ el.scrollIntoView({block:"center"}); el.style.borderColor = "var(--gold)"; } }, 300); }
const pre = $("#pre");
if (pre){ if (qs.has("shot")) pre.remove(); else { const done = () => setTimeout(() => pre.classList.add("out"), 900); if (document.readyState === "complete") done(); else addEventListener("load", done); setTimeout(() => pre.classList.add("out"), 3500); } }
if (qs.has("shot")) $$(".reveal").forEach(e => e.classList.add("in"));
})();
