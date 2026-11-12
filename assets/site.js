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
  mSimDbcf:"Simulasi Donasi (DBCF)", mSimSaham:"Simulasi Saham Syariah",
  ssCrumb:"Saham Syariah", ssTitle:"Bursa Syariah", ssStart:"Mulai Simulasi", ssHow:"Cara Bermain",
  ssLead:"Rasakan jual beli saham seperti di Bursa Efek Indonesia, dengan aturan syariah yang benar-benar bekerja. Dua puluh menit, sepuluh hari bursa, dan modal virtual Rp100 juta di akun SOTS.",
  ssF1:"menit untuk satu sesi", ssF2:"hari bursa simulasi", ssF3:"modal virtual awal", ssF4:"misi pembelajaran",
  ssLearnEyebrow:"Yang Anda Pelajari", ssLearnTitle:"Belajar pasar modal syariah dengan tangan sendiri",
  ssL1:"Akad di balik setiap transaksi: wakalah kepada broker, bay' al-musawamah di bursa, musyarakah sebagai pemegang saham",
  ssL2:"Screening saham syariah: sektor usaha, utang berbunga maksimal 45%, pendapatan nonhalal maksimal 10%",
  ssL3:"Transaksi terlarang menurut Fatwa DSN-MUI 40/2003: margin trading dan short selling diblokir di akun SOTS",
  ssL4:"Mekanisme BEI: lot, fraksi harga, ARA dan ARB, sesi perdagangan, biaya, dan penyelesaian T+2",
  ssL5:"Pasar perdana lewat IPO dan purifikasi bagian nonhalal dari dividen",
  ssBlocked:"Diblokir SOTS: BKNV tidak masuk Daftar Efek Syariah karena usaha intinya perbankan berbasis bunga.",
  ssM1:"Purifikasi dividen SHJY", ssM2:"Dana hasil jual cair",
  ssHowEyebrow:"Cara Bermain", ssHowTitle:"Empat langkah, dua puluh menit",
  ssS1t:"Daftar", ssS1s:"Masukkan nama lengkap dan NIM. Kemajuan tersimpan di perangkat Anda dengan NIM tersebut.",
  ssS2t:"Bertransaksi", ssS2s:"Beli dan jual saham fiktif di akun SOTS. Setiap hari bursa berlangsung dua menit.",
  ssS3t:"Selesaikan misi", ssS3s:"Sembilan misi menuntun Anda: IPO, dividen, purifikasi, T+2, hingga membandingkan dengan akun reguler.",
  ssS4t:"Kirim laporan", ssS4s:"Setelah hari ke-10, tangkap layar kartu laporan berisi nama dan NIM, lalu tulis refleksi singkat.",
  ssMechEyebrow:"Meniru Bursa Sungguhan", ssMechTitle:"Mekanisme yang Anda temui di simulasi",
  ssMechLead:"Emiten dan harga bersifat fiktif, tetapi aturan mainnya mengikuti praktik Bursa Efek Indonesia yang diajarkan di kelas.",
  ssK1:"Satuan", ssK1t:"Lot dan fraksi harga", ssK1s:"1 lot = 100 lembar. Harga bergerak sesuai fraksi Rp1 sampai Rp25 menurut rentang harga.",
  ssK2:"Batas harian", ssK2t:"ARA dan ARB", ssK2s:"Order di luar batas auto rejection langsung ditolak, lengkap dengan alasannya.",
  ssK3:"Waktu", ssK3t:"Sesi perdagangan", ssK3s:"Pra-pembukaan, Sesi 1, istirahat, Sesi 2, dan pra-penutupan. Order di luar sesi masuk antrean.",
  ssK4:"Uang", ssK4t:"Biaya dan T+2", ssK4s:"Biaya beli 0,15%, biaya jual 0,25%, dan dana hasil penjualan baru cair dua hari bursa kemudian.",
  ssK5:"Syariah", ssK5t:"Akun SOTS dan DES", ssK5s:"Hanya saham dalam Daftar Efek Syariah yang bisa dibeli. Akun reguler tersedia sebagai pembanding.",
  ssK6:"Pasar perdana", ssK6t:"IPO dan dividen", ssK6s:"Ikuti book building HALA, terima penjatahan, kumpulkan dividen, lalu sucikan bagian nonhalalnya.",
  ssDosen:"Untuk dosen: simulasi ini disusun untuk mata kuliah Islamic Financial Market and Institution (pertemuan Pasar Modal Syariah). Antarmuka simulasi berbahasa Inggris. Mintalah mahasiswa mengirim tangkapan layar kartu laporan beserta refleksi tentang satu aturan syariah yang mengubah keputusan mereka.",
  ssCta:"Dua puluh menit untuk merasakan bursa yang <em>adil</em>",
  sim2CardT:"Bursa Syariah: Simulasi Saham", sim2CardD:"Simulasi 20 menit jual beli saham ala BEI di akun SOTS: screening DES, ARA/ARB, T+2, IPO, purifikasi dividen, dan kartu laporan bernama dan ber-NIM.", sim2Days:"hari bursa",
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
  mSimDbcf:"Donation Simulation (DBCF)", mSimSaham:"Islamic Stock Simulation",
  ssCrumb:"Islamic Stocks", ssTitle:"Bursa Syariah", ssStart:"Start the Simulation", ssHow:"How to Play",
  ssLead:"Trade stocks the way the Indonesia Stock Exchange works, with Shariah rules that actually bite. Twenty minutes, ten trading days, and Rp100 million of virtual capital in a SOTS account.",
  ssF1:"minutes per session", ssF2:"simulated trading days", ssF3:"virtual starting capital", ssF4:"learning missions",
  ssLearnEyebrow:"What You Learn", ssLearnTitle:"Learn the Islamic capital market by doing",
  ssL1:"The contract behind every trade: wakalah with your broker, bay' al-musawamah on the exchange, musyarakah as a shareholder",
  ssL2:"Shariah stock screening: line of business, interest-bearing debt up to 45%, non-halal income up to 10%",
  ssL3:"Prohibited transactions under DSN-MUI Fatwa 40/2003: margin trading and short selling are blocked in SOTS",
  ssL4:"IDX mechanics: lots, tick sizes, ARA and ARB limits, trading sessions, fees, and T+2 settlement",
  ssL5:"The primary market through an IPO, and purifying the non-halal share of dividends",
  ssBlocked:"Blocked by SOTS: BKNV is not in the Shariah securities list because its core business is interest-based banking.",
  ssM1:"SHJY dividend purification", ssM2:"Sale proceeds settle",
  ssHowEyebrow:"How to Play", ssHowTitle:"Four steps, twenty minutes",
  ssS1t:"Register", ssS1s:"Enter your full name and student ID (NIM). Progress is saved on your device under that NIM.",
  ssS2t:"Trade", ssS2s:"Buy and sell fictional stocks in a SOTS account. Each trading day lasts two minutes.",
  ssS3t:"Complete missions", ssS3s:"Nine missions guide you through the IPO, dividends, purification, T+2, and a comparison with a regular account.",
  ssS4t:"Submit your report", ssS4s:"After day 10, screenshot your report card with your name and NIM, then write a short reflection.",
  ssMechEyebrow:"Mirrors the Real Exchange", ssMechTitle:"Mechanics you will meet in the simulation",
  ssMechLead:"Issuers and prices are fictional, but the rules follow Indonesia Stock Exchange practice taught in class.",
  ssK1:"Units", ssK1t:"Lots and tick sizes", ssK1s:"1 lot = 100 shares. Prices move in ticks of Rp1 to Rp25 depending on the price range.",
  ssK2:"Daily limits", ssK2t:"ARA and ARB", ssK2s:"Orders outside the auto rejection band are refused, with the reason shown.",
  ssK3:"Time", ssK3t:"Trading sessions", ssK3s:"Pre-opening, Session 1, break, Session 2, and pre-closing. Orders outside sessions wait in the queue.",
  ssK4:"Money", ssK4t:"Fees and T+2", ssK4s:"A 0.15% buy fee, a 0.25% sell fee, and sale proceeds that settle two trading days later.",
  ssK5:"Shariah", ssK5t:"SOTS account and DES", ssK5s:"Only stocks in the Shariah securities list can be bought. A regular account is available for comparison.",
  ssK6:"Primary market", ssK6t:"IPO and dividends", ssK6s:"Join the HALA book building, receive an allotment, collect dividends, then purify the non-halal share.",
  ssDosen:"For lecturers: this simulation supports the Islamic Financial Market and Institution course (Islamic capital market sessions). The simulator interface is in English. Ask students to submit a screenshot of their report card with a reflection on one Shariah rule that changed their decisions.",
  ssCta:"Twenty minutes to feel a <em>fair</em> market",
  sim2CardT:"Bursa Syariah: Stock Simulation", sim2CardD:"A 20-minute IDX-style stock trading simulation in a SOTS account: DES screening, ARA/ARB, T+2, IPO, dividend purification, and a report card with name and NIM.", sim2Days:"trading days",
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
