/* Isi kartu, skor, dan kunci kedua game pelatihan PNM, 19 November 2026.
   Ubah teks atau angka di berkas ini saja; halaman game membacanya otomatis. */
window.PNMDATA = (function () {
  'use strict';

  /* ===================== GAME 1: PILIH AKADNYA! ===================== */
  const AKAD = [
    { id: 'IJ', nama: 'Ijarah / IMBT', rumpun: 'Sewa-menyewa', warna: '#7c5cbf' },
    { id: 'MD', nama: 'Mudharabah', rumpun: 'Kerja sama', warna: '#c0692b' },
    { id: 'MS', nama: 'Musyarakah', rumpun: 'Kerja sama', warna: '#b8862b' },
    { id: 'MR', nama: 'Murabahah', rumpun: 'Jual beli', warna: '#2f7d6d' },
    { id: 'MW', nama: 'Murabahah bil Wakalah / Wakalah Muallaqah', rumpun: 'Jual beli', warna: '#1f5fa8' },
  ];
  const KRITERIA = [
    'Nasabah sah menerima yang ia butuhkan',
    'Imbal hasil PNM relatif pasti',
    'Bukti mudah dikumpulkan',
    'Bisa dijalankan massal oleh petugas',
    'Celah moral hazard kecil',
  ];
  /* nilai: [IJ, MD, MS, MR, MW], tiap akad lima angka 0-2 sesuai urutan KRITERIA */
  const KARTU = [
    {
      judul: 'Bu Ani, Mekaar', ikon: '🧺',
      cerita: 'Bu Ani berjualan gorengan dan sembako kecil di teras rumah. Ia memerlukan Rp5 juta untuk menambah stok, tidak memiliki pembukuan, dan membayar angsuran mingguan di pertemuan kelompok.',
      fakta: 'Hampir separuh dana PNM berasal dari pinjaman bank dan sukuk yang imbalnya tetap, sehingga PNM memerlukan penerimaan yang terjadwal.',
      nilai: [[0, 2, 1, 0, 1], [2, 0, 0, 0, 0], [2, 0, 0, 0, 1], [1, 2, 2, 0, 2], [2, 2, 1, 2, 1]],
      alasan: [
        'Stok habis pakai tidak dapat disewakan, sehingga Ijarah tidak menampung kebutuhan Bu Ani.',
        'Bagi hasil memerlukan laporan usaha, sedangkan Bu Ani tidak memiliki pembukuan dan dana PNM berbiaya tetap.',
        'Porsi modal Bu Ani kecil dan hasil usaha harus dilaporkan tiap periode, sehingga sulit dijalankan untuk jutaan ibu.',
        'Akadnya bersih, tetapi PNM harus membeli sendiri stok untuk setiap ibu, sesuatu yang mustahil pada skala Mekaar.',
        'Bu Ani berbelanja sebagai wakil PNM, margin disepakati di muka, dan akad dapat diselesaikan di pertemuan kelompok.',
      ],
      rujukan: 'Fatwa 04/DSN-MUI/IV/2000 tentang Murabahah; Fatwa 111/DSN-MUI/IX/2017 tentang Akad Jual Beli Murabahah',
    },
    {
      judul: 'Pak Budi, ULaMM', ikon: '⚙️',
      cerita: 'Pak Budi memproduksi keripik pisang dan memerlukan mesin pengiris seharga Rp40 juta. Ia sudah memegang surat penawaran dari distributor resmi.',
      fakta: 'PNM tidak memiliki gudang dan bengkel. Aset yang disewakan harus tercatat atas nama PNM, diasuransikan, dan dirawat oleh pemiliknya.',
      nilai: [[2, 2, 1, 0, 1], [1, 0, 0, 0, 0], [2, 0, 0, 0, 1], [2, 2, 2, 0, 2], [2, 2, 2, 2, 1]],
      alasan: [
        'IMBT cocok untuk mesin, tetapi PNM menanggung kepemilikan, perawatan mayor, dan asuransi selama masa sewa.',
        'Pak Budi tidak memerlukan mitra yang menanggung rugi usaha, melainkan mesin.',
        'Musyarakah dapat dipakai, tetapi bagi hasil harus dihitung dari laporan usaha setiap periode.',
        'Barangnya jelas dan ada penawaran, tetapi PNM harus membeli dan menerima mesin itu sendiri.',
        'Pak Budi membeli mesin atas nama PNM dengan nota distributor yang jelas, sehingga akad berjalan cepat dan buktinya kuat.',
      ],
      rujukan: 'Fatwa 27/DSN-MUI/III/2002 tentang IMBT; Fatwa 04/DSN-MUI/IV/2000 tentang Murabahah',
    },
    {
      judul: 'Pak Dedi, ULaMM', ikon: '🏪',
      cerita: 'Pak Dedi mengelola kios sembako dan memerlukan Rp100 juta untuk modal kerja. Ia memiliki catatan penjualan sederhana di buku tulis.',
      fakta: 'Bagi hasil wajib dihitung dari laporan hasil usaha setiap periode, dan PNM dilarang menyesuaikan perhitungan agar imbalnya selalu sama dengan proyeksi.',
      nilai: [[0, 2, 1, 0, 1], [2, 0, 0, 0, 0], [2, 0, 1, 0, 1], [1, 2, 2, 0, 2], [2, 2, 1, 2, 1]],
      alasan: [
        'Modal kerja bukan manfaat aset, sehingga tidak tertampung akad sewa.',
        'Seluruh modal berasal dari PNM, sedangkan catatan penjualan di buku tulis belum cukup untuk menghitung bagi hasil yang adil.',
        'Musyarakah paling sesuai dengan sifat usahanya, tetapi menuntut laporan dan verifikasi setiap periode.',
        'Stok sembako beragam dan berganti setiap minggu, sehingga PNM sulit membelinya sendiri.',
        'Pak Dedi membeli stok sebagai wakil PNM dengan margin yang pasti, sehingga sejalan dengan dana PNM yang berbiaya tetap.',
      ],
      rujukan: 'OJK (2024), Pedoman Produk Pembiayaan Musyarakah, hlm. 16–17; Fatwa 08/DSN-MUI/IV/2000',
    },
    {
      judul: 'Kelompok Mawar, Mekaar', ikon: '👥',
      cerita: 'Sepuluh ibu Kelompok Mawar memasuki siklus kedua. Satu petugas memegang sekitar 400 ibu dan seluruh akad harus selesai di pertemuan mingguan yang berlangsung 60 menit.',
      fakta: 'Pembiayaan ultra mikro hanya dapat berjalan bila akadnya seragam, singkat, dan dapat diajarkan kepada ribuan petugas.',
      nilai: [[0, 2, 1, 0, 1], [2, 0, 0, 0, 0], [2, 0, 0, 0, 1], [1, 2, 2, 0, 2], [2, 2, 1, 2, 1]],
      alasan: [
        'Kebutuhan sepuluh ibu berbeda-beda dan sebagian besar bukan manfaat aset.',
        'Sepuluh laporan usaha setiap minggu tidak mungkin diperiksa oleh satu petugas.',
        'Penilaian porsi modal sepuluh ibu dalam 60 menit terlalu berat.',
        'PNM tidak dapat membelanjakan kebutuhan sepuluh ibu satu per satu.',
        'Satu format akad untuk seluruh kelompok, ditandatangani di pertemuan, dengan bukti belanja menyusul.',
      ],
      rujukan: 'Fatwa 119/DSN-MUI/II/2018 tentang Pembiayaan Ultra Mikro',
    },
    {
      judul: 'Bu Sri, Mekaar', ikon: '🏬',
      cerita: 'Bu Sri memerlukan Rp3 juta untuk membayar sewa lapak di pasar selama satu tahun. Yang ia butuhkan adalah manfaat tempat, bukan barang.',
      fakta: 'Objek Murabahah harus barang. Jasa dan manfaat tidak dapat diperjualbelikan dengan akad Murabahah.',
      nilai: [[2, 2, 1, 1, 1], [1, 0, 0, 0, 0], [1, 0, 0, 0, 1], [0, 2, 1, 0, 1], [0, 2, 1, 2, 0]],
      alasan: [
        'PNM menyewa lapak lalu menyewakannya kembali kepada Bu Sri, sehingga Ijarah menampung kebutuhan manfaat secara sah.',
        'Sewa lapak bukan usaha yang menghasilkan laba untuk dibagi.',
        'Tidak ada modal bersama yang dapat dibagi porsinya.',
        'Sewa adalah manfaat, bukan barang, sehingga Murabahah tidak dapat dipakai.',
        'Bila dana Murabahah dipakai membayar sewa, objek akadnya tidak ada dan akad menjadi cacat.',
      ],
      rujukan: 'Fatwa 09/DSN-MUI/IV/2000 tentang Ijarah; Fatwa 04/DSN-MUI/IV/2000 Ketentuan Pertama angka 4',
      catatan: 'Kartu ini sengaja jujur: ada kebutuhan nasabah yang tidak tertampung Murabahah.',
    },
    {
      judul: 'Pak Hasan, ULaMM', ikon: '🏗️',
      cerita: 'Pak Hasan memerlukan Rp150 juta untuk bahan baku Rp80 juta, upah tukang Rp30 juta, dan renovasi bengkel Rp40 juta.',
      fakta: 'Multi-akad sah sepanjang tiap akad diteken terpisah dan tidak saling disyaratkan, tetapi bebannya berat bagi petugas yang dikejar target.',
      nilai: [[1, 2, 1, 0, 1], [2, 0, 0, 0, 0], [2, 0, 1, 0, 1], [1, 2, 2, 0, 2], [1, 2, 2, 2, 1]],
      alasan: [
        'Hanya bagian renovasi yang dapat ditampung sebagai sewa, dan itu pun memerlukan aset atas nama PNM.',
        'Seluruh kebutuhan tertampung, tetapi bagi hasil memerlukan laporan dan verifikasi.',
        'Seluruh kebutuhan tertampung dan Pak Hasan ikut menyetor modal, tetapi laporan usaha tetap diperlukan.',
        'Hanya bahan baku dan material renovasi yang tertampung; upah tukang tidak.',
        'Bahan baku dan material dapat diwakilkan dengan bukti nota; upah tukang tetap tidak tertampung.',
      ],
      rujukan: 'Fatwa 04/DSN-MUI/IV/2000; Fatwa 08/DSN-MUI/IV/2000; materi Menentukan Akad Pembiayaan (multi-akad)',
      catatan: 'Pelajarannya: PNM memerlukan satu akad yang menampung semua kebutuhan. Jawabannya dibahas di Sesi 1.',
    },
    {
      judul: 'Bu Rina, Mekaar', ikon: '🧾',
      cerita: 'Bu Rina menerima dana Rp4 juta. Nota belanja baru masuk pada hari ke-15, dan sebagian dana ternyata dipakai untuk biaya sekolah anak.',
      fakta: 'Pada Murabahah, barang harus menjadi milik PNM lebih dahulu sebelum dijual. Urutan akad dan bukti belanja menentukan keabsahan.',
      nilai: [[0, 2, 1, 0, 1], [1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 2, 2, 0, 2], [2, 2, 0, 2, 1]],
      alasan: [
        'Biaya sekolah bukan manfaat aset yang dapat disewakan.',
        'Dana yang dipakai di luar usaha bertentangan dengan sifat Mudharabah.',
        'Modal syirkah tidak boleh dipakai di luar usaha yang menjadi objek akad.',
        'Akadnya paling bersih karena PNM membeli sendiri, tetapi tidak dapat dijalankan massal.',
        'Tetap paling sesuai dengan model bisnis, tetapi buktinya lemah dan kepatuhan bergantung pada perilaku nasabah setelah dana cair.',
      ],
      rujukan: 'Fatwa 04/DSN-MUI/IV/2000 Ketentuan Pertama angka 9; Hamsah (2023); Anggraini dkk. (2025)',
      catatan: 'Inilah titik lemah pertama: bukti dan perilaku setelah dana cair.',
    },
    {
      judul: 'Bu Ani minggu ke-30', ikon: '⏳',
      cerita: 'Usaha Bu Ani sepi selama dua bulan dan angsurannya mulai tertunggak. Ia meminta tambahan waktu 20 minggu agar angsurannya lebih ringan.',
      fakta: 'Penjadwalan ulang Murabahah tidak boleh menambah jumlah tagihan yang tersisa (Fatwa 48/2005). Pada MMQ, pembiayaan bermasalah diselesaikan melalui musyawarah (Keputusan DSN-MUI 01/2013 angka 7c).',
      nilai: [[1, 1, 1, 0, 1], [1, 0, 1, 0, 1], [2, 1, 0, 0, 2], [0, 0, 1, 1, 0], [0, 0, 1, 1, 0]],
      alasan: [
        'Ujrah atas manfaat yang belum diterima dapat ditinjau ulang, tetapi Bu Ani tidak menyewa aset.',
        'Kerugian usaha ditanggung PNM bila bukan karena kelalaian, sehingga risikonya berpindah penuh ke PNM.',
        'Jadwal, jangka waktu, dan nisbah dapat dimusyawarahkan ulang secara adil bagi kedua pihak.',
        'Jadwal dapat diperpanjang, tetapi tagihan tidak boleh bertambah, sehingga PNM menanggung biaya dana selama 20 minggu tambahan.',
        'Sama dengan Murabahah: tagihan terkunci sejak akad, dan ruang 3R menjadi sempit.',
      ],
      rujukan: 'Fatwa 48/DSN-MUI/II/2005; Keputusan DSN-MUI 01/DSN-MUI/X/2013 angka 7c; OJK (2024) hlm. 27–29',
      catatan: 'Tidak ada akad yang unggul di delapan ronde sekaligus. Akad yang menjawab ronde 1 sampai 8 dibahas di Sesi 1: Musyarakah Mutanaqishah.',
      akhir: true,
    },
  ];

  /* ===================== GAME 2: CABANG VS PUSAT ===================== */
  /* Kategori skor "Satu PNM": maksimum tiap kategori */
  const KATEGORI = [
    { id: 'pny', nama: 'Penyaluran', maks: 25 },
    { id: 'npf', nama: 'NPF dan pengaduan', maks: 20 },
    { id: 'aud', nama: 'Temuan audit syariah', maks: 30 },
    { id: 'sys', nama: 'Sistem dan data', maks: 15 },
    { id: 'ang', nama: 'Sisa anggaran', maks: 10 },
  ];
  const ANGGARAN = 100;

  /* Babak: kebijakan (pilihan dengan biaya, temuan bawaan bila dipilih) dan kejadian cabang.
     Fungsi hasil(p) menerima paket kebijakan p = {kodeKebijakan: indeksPilihan} dan mengembalikan
     penalti per kategori, pesan, serta temuan audit (bila ada). */
  const BABAK = [
    {
      id: 'ulamm', nama: 'Babak 1 · ULaMM', sub: 'MMQ yang sudah berjalan sekitar dua tahun: pembiayaan ulang, al-bai\' dalam rangka MMQ, dan MMQ modal usaha.',
      kebijakan: [
        { k: 'U1', judul: 'Pemilihan varian MMQ', pilihan: [
          { t: 'Semua kebutuhan memakai MMQ modal usaha', b: 0, pen: { aud: 5 }, tem: 'Modal syirkah dipakai untuk kebutuhan di luar usaha (OJK 2024, Bab III.A angka 14)' },
          { t: 'Varian dipilih per kebutuhan: pembiayaan ulang untuk kebutuhan campuran, modal usaha untuk nasabah yang memiliki catatan penjualan', b: 10 } ] },
        { k: 'U2', judul: 'Laporan hasil usaha pada MMQ modal usaha', pilihan: [
          { t: 'Tidak dipungut; bagian PNM dibuat tetap setiap bulan', b: 0, pen: { aud: 6 }, tem: 'Bagian PNM tetap tanpa realisasi hasil usaha (OJK 2024, hlm. 17 angka 19)' },
          { t: 'Laporan sederhana bulanan, bagi hasil dihitung dari realisasi (RBH)', b: 15 } ] },
        { k: 'U3', judul: 'Taksiran aset', pilihan: [
          { t: 'Ditaksir sendiri oleh AO', b: 0, pen: { npf: 2 } },
          { t: 'Harga acuan pusat, penilai independen untuk aset di atas Rp100 juta', b: 15 } ] },
        { k: 'U4', judul: 'Dokumen akad', pilihan: [
          { t: 'Satu formulir gabungan', b: 0, pen: { aud: 5, npf: 2 }, tem: 'Wa\'d tidak tertulis terpisah, salinan akad tidak diserahkan (OJK 2024, Bab IV angka 5–6, Bab V.A angka 2)' },
          { t: 'Akad MMQ, Wa\'d tertulis, akad Ijarah terpisah, surat pengakuan, salinan untuk nasabah', b: 10 } ] },
        { k: 'U5', judul: 'Agunan dan penyelesaian macet', pilihan: [
          { t: 'Agunan dijual begitu tunggakan mencapai 90 hari', b: 0 },
          { t: 'Musyawarah lebih dahulu; agunan dijual setelah putusan inkracht atau diserahkan sukarela', b: 10 } ] },
        { k: 'U6', judul: 'Sistem', pilihan: [
          { t: 'Sistem Murabahah lama dengan penyesuaian manual', b: 0, pen: { sys: 6 } },
          { t: 'Modul MMQ: unit porsi, akrual PBH dan RBH, berhenti otomatis saat NPF', b: 30 } ] },
        { k: 'U7', judul: '3R dan pelunasan dipercepat', pilihan: [
          { t: 'Belum ada pedoman', b: 0 },
          { t: 'Pedoman 3R dan pelunasan dipercepat, biaya riil saja (Fatwa 134/2020)', b: 10 } ] },
        { k: 'U8', judul: 'Insentif AO', pilihan: [
          { t: 'Volume penyaluran saja', b: 0, pen: { aud: 3 }, tem: 'Insentif hanya volume mendorong taksiran mengikuti plafon' },
          { t: 'Volume dan mutu dokumen serta laporan', b: 10 } ] },
      ],
      kejadian: [
        { judul: 'Laporan Pak Budi tidak masuk', ikon: '📒',
          cerita: 'Pak Budi, nasabah MMQ modal usaha, tidak menyerahkan laporan hasil usaha selama tiga bulan, tetapi angsurannya lancar.',
          pilihan: ['Biarkan saja, yang penting angsuran lancar', 'Kunjungi, bantu menyusun laporan sederhana, lalu hitung RBH', 'Ubah menjadi angsuran tetap tanpa laporan'],
          hasil: (p, i) => i === 0 ? (p.U2 === 1 ? { aud: 5, m: 'Kebijakan pusat sudah mewajibkan laporan, tetapi cabang tidak menjalankannya.', tem: 'Laporan hasil usaha tidak dipungut walau diwajibkan' }
                                                 : { aud: 8, m: 'Bagian PNM diterima tanpa dasar realisasi hasil usaha.', tem: 'Bagi hasil tanpa laporan hasil usaha (OJK 2024, hlm. 17)' })
            : i === 1 ? (p.U2 === 1 ? { pny: 1, m: 'Tepat. Format laporan dari pusat memudahkan AO, dan RBH dapat dihitung.' }
                                     : { sys: 3, aud: 2, m: 'Niatnya tepat, tetapi tanpa format dari pusat setiap AO membuat laporan sendiri.' })
            : { aud: 10, m: 'Angsuran tetap tanpa laporan menghilangkan karakter Musyarakah.', tem: 'Bagi hasil diubah menjadi nominal tetap (OJK 2024, hlm. 16 angka 4)' } },
        { judul: 'Bu Ratna minta tambahan dana', ikon: '🔧',
          cerita: 'Bu Ratna, nasabah MMQ pembiayaan ulang atas ruko, meminta tambahan Rp50 juta pada bulan ke-13.',
          pilihan: ['Tambahkan ke akad lama tanpa menaksir ulang', 'Taksir ulang ruko, lalu buat akad baru untuk tambahan porsi', 'Tolak permintaan'],
          hasil: (p, i) => i === 0 ? { aud: 8, sys: 2, m: 'Porsi PNM bertambah tanpa dasar nilai aset yang baru.', tem: 'Tambahan porsi tanpa taksiran ulang (OJK 2024, Bab III.A angka 5)' }
            : i === 1 ? (p.U3 === 1 ? { m: 'Tepat. Taksiran ulang dengan harga acuan menjadi dasar tambahan porsi.' } : { aud: 2, m: 'Langkahnya tepat, tetapi taksiran ulang tanpa harga acuan mudah dipersoalkan auditor.' })
            : { pny: 5, m: 'Aman, tetapi nasabah lancar kehilangan layanan dan penyaluran turun.' } },
        { judul: 'Taksiran ruko terlalu tinggi', ikon: '🏢',
          cerita: 'AO menaksir ruko Rp500 juta, sedangkan harga pasar di sekitarnya sekitar Rp380 juta. Nasabah dikenal lancar.',
          pilihan: ['Tetap pakai Rp500 juta karena nasabah lancar', 'Turunkan sesuai harga acuan atau penilai independen', 'Tetap Rp500 juta, tetapi minta agunan tambahan'],
          hasil: (p, i) => i === 0 ? { aud: 10, npf: 4, m: 'Porsi PNM dihitung dari nilai yang tidak wajar.', tem: 'Porsi fiktif: nilai pembiayaan melebihi nilai aset dan kebutuhan (OJK 2024, Bab III.A angka 11)' }
            : i === 1 ? (p.U3 === 1 ? { pny: 2, m: 'Tepat. Plafon menyesuaikan nilai yang wajar.' } : { pny: 2, sys: 2, aud: 2, m: 'Tepat arahnya, tetapi tanpa harga acuan pusat angka penurunannya mudah diperdebatkan.' })
            : { aud: 6, npf: 2, m: 'Agunan tambahan tidak menyembuhkan porsi yang dinilai terlalu tinggi.', tem: 'Taksiran tidak wajar ditutup dengan agunan' } },
        { judul: 'Nasabah macet 120 hari', ikon: '⚠️',
          cerita: 'Seorang nasabah MMQ menunggak 120 hari karena usahanya terdampak banjir. Agunannya sertifikat rumah.',
          pilihan: ['Segera lelang agunan', 'Musyawarah 3R: perpanjang jangka waktu, ubah jadwal pembelian porsi, biaya riil saja', 'Kenakan denda keterlambatan dan catat sebagai pendapatan'],
          hasil: (p, i) => i === 0 ? (p.U5 === 1 ? { aud: 8, npf: 6, m: 'Kebijakan pusat meminta musyawarah dan inkracht, tetapi cabang langsung melelang.', tem: 'Agunan dijual sebelum inkracht dan tanpa penyerahan sukarela (OJK 2024, Bab V.B angka 2)' }
                                                 : { aud: 6, npf: 6, m: 'Agunan dijual tanpa musyawarah dan sebelum ada putusan.', tem: 'Agunan dijual sebelum inkracht (OJK 2024, Bab V.B angka 2)' })
            : i === 1 ? (p.U7 === 1 ? { npf: 2, m: 'Tepat. Pedoman 3R memberi cabang pegangan yang seragam.' } : { npf: 2, sys: 2, aud: 2, m: 'Tepat arahnya, tetapi tanpa pedoman pusat setiap cabang memakai cara sendiri.' })
            : { aud: 10, npf: 3, m: 'Denda tidak boleh menjadi pendapatan PNM.', tem: 'Ta\'zir diakui sebagai pendapatan (Fatwa 17/DSN-MUI/IX/2000; OJK 2024, Bab V.E angka 4)' } },
        { judul: 'Pelunasan dipercepat', ikon: '💰',
          cerita: 'Nasabah ingin melunasi seluruh porsi PNM pada bulan ke-18 dari 36 bulan.',
          pilihan: ['Tagih seluruh sisa ujrah sampai bulan ke-36', 'Nilai porsi tersisa yang disepakati ditambah biaya riil', 'Beri potongan besar tanpa dasar perhitungan'],
          hasil: (p, i) => i === 0 ? { aud: 8, npf: 3, m: 'Ujrah ditagih atas manfaat yang tidak lagi diterima nasabah.', tem: 'Sisa ujrah ditagih pada pelunasan dipercepat (Fatwa 134/2020; OJK 2024, Bab V.I)' }
            : i === 1 ? (p.U7 === 1 ? { m: 'Tepat. Nilai porsi disepakati dan biaya riil mengikuti pedoman.' } : { aud: 2, m: 'Tepat arahnya, tetapi tanpa pedoman perhitungan biaya riil berbeda antarcabang.' })
            : { pny: 2, aud: 2, m: 'Nasabah senang, tetapi potongan tanpa dasar menimbulkan perlakuan yang tidak seragam.' } },
        { judul: 'Tutup buku akhir bulan', ikon: '📊',
          cerita: 'Akuntansi meminta laporan pendapatan MMQ akhir bulan. Empat puluh rekening sudah masuk kategori NPF.',
          pilihan: ['Akui pendapatan akrual seperti biasa', 'Hentikan akrual untuk rekening NPF, akui saat kas diterima', 'Akui mengikuti jadwal Murabahah lama'],
          hasil: (p, i) => i === 0 ? (p.U6 === 1 ? { m: 'Modul MMQ menolak akrual untuk rekening NPF, sehingga kesalahan tercegah.' } : { aud: 6, sys: 4, m: 'Pendapatan diakui atas rekening NPF.', tem: 'Akrual tetap berjalan saat NPF (OJK 2024, Bab V.L angka 2)' })
            : i === 1 ? (p.U6 === 1 ? { m: 'Tepat, dan modul MMQ melakukannya otomatis.' } : { sys: 3, m: 'Tepat, tetapi dikerjakan manual untuk 40 rekening.' })
            : { aud: 8, sys: 6, m: 'Pendapatan MMQ dicatat seolah margin Murabahah.', tem: 'Pencatatan MMQ memakai pola Murabahah' } },
      ],
    },
    {
      id: 'mekaar', nama: 'Babak 2 · Mekaar', sub: 'Pilot MMQ pembiayaan ulang di Cabang Cempaka: aset ibu nasabah ditaksir, PNM membeli porsi, ibu menyewa dan membeli kembali setiap minggu.',
      kebijakan: [
        { k: 'P1', judul: 'Ibu yang tidak memiliki aset layak', pilihan: [
          { t: 'Tidak ada jalur lain', b: 0 },
          { t: 'Jalur Murabahah Wakalah Muallaqah tetap dibuka untuk ibu tanpa aset', b: 15 } ] },
        { k: 'P2', judul: 'Taksiran aset', pilihan: [
          { t: 'Petugas menaksir sendiri', b: 0 },
          { t: 'Petugas menaksir, KUM atau Kacab mengesahkan', b: 10 },
          { t: 'Daftar harga acuan pusat, pengesah kedua, sistem menolak nilai di luar rentang', b: 25 } ] },
        { k: 'P3', judul: 'Nilai unit porsi dan formula bagian PNM', pilihan: [
          { t: 'Ditetapkan unit bisnis tanpa opini DPS', b: 0, pen: { aud: 6 }, tem: 'Nilai unit porsi tanpa persetujuan DPS (OJK 2024, Bab III.A angka 7)' },
          { t: 'Disetujui DPS; bagian PNM mengikuti sisa porsi', b: 10 } ] },
        { k: 'P4', judul: 'Dokumen akad', pilihan: [
          { t: 'Satu formulir gabungan', b: 0, pen: { aud: 6, npf: 2 }, tem: 'Wa\'d tidak tertulis dan salinan akad tidak diserahkan (OJK 2024, Bab IV angka 5–6, Bab V.A angka 2)' },
          { t: 'Akad MMQ, Wa\'d tertulis, Ijarah, surat pengakuan, salinan untuk ibu', b: 10 } ] },
        { k: 'P5', judul: 'Sistem pencatatan', pilihan: [
          { t: 'Spreadsheet di cabang', b: 0, pen: { sys: 6 } },
          { t: 'Spreadsheet dengan rekonsiliasi harian ke pusat', b: 10 },
          { t: 'Modul core: porsi, ujrah, nisbah, foto aset wajib', b: 30 } ] },
        { k: 'P6', judul: 'Insentif petugas', pilihan: [
          { t: 'Volume penyaluran saja', b: 0, pen: { aud: 4 }, tem: 'Insentif hanya volume mendorong taksiran mengikuti plafon' },
          { t: 'Volume dan mutu taksiran serta dokumen', b: 10 } ] },
        { k: 'P7', judul: 'Pedoman 3R', pilihan: [
          { t: 'Belum ada pedoman', b: 0 },
          { t: 'Musyawarah jadwal, jangka waktu, dan nisbah; biaya riil saja', b: 10 } ] },
        { k: 'P8', judul: 'Skrip nasabah dan tanggung renteng', pilihan: [
          { t: 'Tidak ada', b: 0, pen: { npf: 4 } },
          { t: 'Skrip tiga kalimat; tanggung renteng hanya untuk ujrah dan pembelian porsi yang tertunggak', b: 10 } ] },
      ],
      kejadian: [
        { judul: 'Ibu tanpa aset', ikon: '🙋‍♀️',
          cerita: 'Seorang ibu memerlukan Rp5 juta, tetapi asetnya hanya gerobak senilai Rp1,5 juta. Target cabang bulan ini naik 20%.',
          pilihan: ['Tolak pengajuan', 'Taksir seadanya agar plafon masuk', 'Arahkan ke jalur lain atau naikkan ke pusat'],
          hasil: (p, i) => i === 0 ? { pny: p.P1 === 1 ? 3 : 6, m: p.P1 === 1 ? 'Ada jalur lain yang tidak dipakai, sehingga penyaluran hilang percuma.' : 'Tanpa jalur lain, ibu ini tidak terlayani.' }
            : i === 1 ? (p.P2 === 2 ? { aud: 2, pny: 2, m: 'Sistem menolak taksiran di luar rentang harga acuan.' } : { aud: 10, npf: 4, m: 'Porsi PNM dihitung dari nilai yang dipaksakan.', tem: 'Taksiran dipaksakan agar plafon masuk (OJK 2024, Bab III.A angka 11)' })
            : (p.P1 === 1 ? { m: 'Tepat. Ibu dilayani dengan akad yang sesuai.' } : { pny: 5, m: 'Tepat arahnya, tetapi pusat belum menyediakan jalur lain.' }) },
        { judul: 'Empat puluh taksiran kembar', ikon: '🔍',
          cerita: 'Dalam dua minggu, satu petugas menyerahkan 40 taksiran yang semuanya bernilai persis Rp10 juta, tepat dua kali plafon.',
          pilihan: ['Sahkan karena target', 'Uji petik 10 aset di lapangan', 'Hentikan petugas dan taksir ulang seluruhnya'],
          hasil: (p, i) => i === 0 ? { aud: p.P2 === 0 ? 12 : p.P2 === 1 ? 8 : 3, npf: 3, m: p.P2 === 2 ? 'Sistem menandai sebaran yang janggal, tetapi cabang tetap mengesahkan.' : 'Taksiran mengikuti plafon, bukan nilai aset.', tem: 'Taksiran seragam mengikuti plafon' }
            : i === 1 ? (p.P2 === 0 ? { aud: 4, pny: 1, m: 'Uji petik tanpa harga acuan tidak memiliki patokan.' } : { pny: 1, m: 'Tepat. Uji petik memakai patokan yang jelas.' })
            : { pny: 6, m: 'Aman, tetapi penyaluran tertahan dan petugas lain ikut berhati-hati berlebihan.' } },
        { judul: 'Motor Bu Ani dijual', ikon: '🏍️',
          cerita: 'Bu Ani menjual motor yang menjadi objek MMQ untuk membayar biaya rumah sakit. Angsurannya masih lancar.',
          pilihan: ['Biarkan, angsuran tetap berjalan', 'Musyawarah: aset pengganti atau perubahan akad', 'Tagih lunas seketika'],
          hasil: (p, i) => i === 0 ? { aud: 8, m: 'Ujrah ditagih atas aset yang sudah tidak ada.', tem: 'Objek sewa MMQ dijual tanpa pengganti (OJK 2024, Bab III.B angka 7)' }
            : i === 1 ? (p.P7 === 1 ? { m: 'Tepat. Pedoman memberi jalan aset pengganti atau perubahan akad.' } : { aud: 2, sys: 2, m: 'Tepat arahnya, tetapi tanpa pedoman setiap petugas memutuskan sendiri.' })
            : { npf: 8, m: 'Ibu yang sedang kesulitan ditekan, dan pengaduan muncul.' } },
        { judul: 'Aset hanyut terbawa banjir', ikon: '🌊',
          cerita: 'Gerobak dan etalase Bu Siti hanyut terbawa banjir. Kelompok bertanya apa yang harus mereka tanggung.',
          pilihan: ['Kelompok menanggung seluruh sisa porsi PNM', 'Rugi aset dibagi sesuai porsi; kelompok hanya menanggung ujrah dan pembelian porsi yang tertunggak', 'PNM menghapus seluruhnya'],
          hasil: (p, i) => i === 0 ? { aud: 10, npf: 6, m: 'Kerugian aset dibebankan seluruhnya kepada nasabah dan kelompok.', tem: 'Kerugian aset tidak dibagi sesuai porsi (Fatwa 73/2008 Keempat angka 3)' }
            : i === 1 ? (p.P8 === 1 ? { m: 'Tepat. Definisi tanggung renteng sudah jelas sejak akad.' } : { npf: 4, sys: 2, m: 'Tepat, tetapi kelompok baru mendengar aturannya hari ini dan merasa dirugikan.' })
            : { aud: 3, npf: 4, m: 'PNM melepas haknya tanpa dasar, dan kelompok lain menunggu perlakuan yang sama.' } },
        { judul: 'Pelunasan dipercepat', ikon: '💵',
          cerita: 'Seorang ibu menerima uang dari anaknya dan ingin melunasi porsi PNM pada minggu ke-30. Ia menolak membayar biaya apa pun.',
          pilihan: ['Tagih sisa ujrah sampai minggu ke-50', 'Nilai porsi tersisa ditambah biaya riil', 'Gratiskan tanpa catatan'],
          hasil: (p, i) => i === 0 ? { aud: 8, npf: 4, m: 'Ujrah ditagih atas manfaat yang tidak lagi diterima.', tem: 'Sisa ujrah ditagih pada pelunasan dipercepat (Fatwa 134/2020)' }
            : i === 1 ? (p.P7 === 1 ? { m: 'Tepat. Biaya riil mengikuti pedoman.' } : { aud: 2, sys: 2, m: 'Tepat arahnya, tetapi perhitungan biaya riil berbeda antarunit.' })
            : { pny: 1, m: 'Ringan bagi nasabah; pastikan tidak ada biaya riil yang terlewat.' } },
        { judul: 'Sistem belum siap', ikon: '💻',
          cerita: 'Pilot dimulai bulan depan. Data porsi, ujrah, dan jadwal pembelian porsi setiap ibu harus tercatat sejak minggu pertama.',
          pilihan: ['Tunda pilot tiga bulan', 'Jalan dengan spreadsheet dan rekonsiliasi harian', 'Jalan, dicatat seperti Murabahah di sistem lama'],
          hasil: (p, i) => i === 0 ? { pny: 8, m: p.P5 === 2 ? 'Modul pusat sebenarnya sudah siap, sehingga penundaan tidak perlu.' : 'Aman, tetapi target pilot meleset.' }
            : i === 1 ? (p.P5 === 2 ? { m: 'Modul pusat siap; spreadsheet hanya menjadi cadangan.' } : p.P5 === 1 ? { sys: 2, m: 'Tepat. Rekonsiliasi harian menjaga data tetap utuh.' } : { sys: 6, aud: 3, m: 'Tanpa rekonsiliasi, bagian PNM salah hitung di banyak rekening.', tem: 'Data porsi dan ujrah tidak terekonsiliasi' })
            : { aud: 10, sys: 8, m: 'Akad MMQ dicatat sebagai piutang Murabahah.', tem: 'Pencatatan MMQ memakai pola Murabahah' } },
      ],
    },
  ];

  /* Skor satu babak: paket kebijakan p dan pilihan cabang c (array indeks). */
  function nilaiBabak(bIdx, p, c) {
    const B = BABAK[bIdx];
    const pen = { pny: 0, npf: 0, aud: 0, sys: 0 }; const temuan = []; const cat = [];
    let biaya = 0;
    B.kebijakan.forEach(k => {
      const o = k.pilihan[p[k.k] || 0]; biaya += o.b;
      if (o.pen) for (const x in o.pen) pen[x] += o.pen[x];
      if (o.tem) temuan.push({ t: o.tem, dari: 'Pusat' });
    });
    B.kejadian.forEach((e, i) => {
      if (c[i] == null) { pen.pny += 4; cat.push({ e: e.judul, m: 'Tidak sempat diputuskan.' }); return }
      const r = e.hasil(p, c[i]);
      ['pny', 'npf', 'aud', 'sys'].forEach(x => pen[x] += r[x] || 0);
      if (r.tem) temuan.push({ t: r.tem, dari: 'Cabang' });
      cat.push({ e: e.judul, pilih: e.pilihan[c[i]], m: r.m });
    });
    const sisa = Math.max(0, ANGGARAN - biaya);
    const skor = {
      pny: Math.max(0, 25 - pen.pny), npf: Math.max(0, 20 - pen.npf), aud: Math.max(0, 30 - pen.aud),
      sys: Math.max(0, 15 - pen.sys), ang: Math.round(sisa / ANGGARAN * 10 * 10) / 10,
    };
    skor.total = Math.round((skor.pny + skor.npf + skor.aud + skor.sys + skor.ang) * 10) / 10;
    return { skor, temuan, cat, biaya, sisa };
  }

  /* ===================== GAME 3: JEJAK AUDIT MMQ (sesi Bu Dina) ===================== */
  const RISIKO = ['Kepatuhan syariah', 'Nilai aset dan taksiran', 'Operasional dan data', 'Hukum dan penagihan'];
  /* temuan: true/false; risiko: indeks benar (boleh lebih dari satu); tindakan: [teks, benar?] */
  const BERKAS = [
    { judul: 'Pak Budi · MMQ modal usaha', seg: 'ULaMM', ikon: '📒',
      isi: ['Akad MMQ modal usaha Rp120 juta, 24 bulan, nisbah PNM disepakati.', 'Laporan hasil usaha bulan 1 sampai 6: tidak ada di berkas.', 'Bagian PNM dibayar tepat Rp2.400.000 setiap bulan.', 'Rasio realisasi terhadap proyeksi bagi hasil: 100% enam bulan berturut-turut.'],
      temuan: true, risiko: [0],
      tindakan: [['AO memungut laporan hasil usaha, bagi hasil enam bulan dihitung ulang dari realisasi, dan audit memantau rasio yang selalu 100%.', true], ['Tidak perlu tindakan karena angsuran lancar.', false], ['Ubah akad menjadi Murabahah agar angsuran tetap sah.', false]],
      bahas: 'Bagian PNM yang selalu sama tanpa laporan hasil usaha bertentangan dengan pedoman OJK, yang melarang perhitungan disesuaikan agar imbalnya tetap sesuai proyeksi. Angsuran yang lancar tidak membuat akadnya benar.',
      rujukan: 'OJK (2024), Pedoman Produk Pembiayaan Musyarakah, hlm. 17 angka 19 dan 20' },
    { judul: 'Bu Ratna · MMQ pembiayaan ulang ruko', seg: 'ULaMM', ikon: '🏢',
      isi: ['Ruko ditaksir Rp500 juta oleh penilai independen; harga acuan pusat Rp480 sampai 520 juta.', 'Akad MMQ, janji (wa\'d) tertulis, dan akad ijarah ditandatangani terpisah dan berurutan.', 'Salinan akad diterima nasabah, dengan tanda tangan.', 'Ujrah dibayar lancar dan bagian PNM menurun mengikuti sisa porsi.'],
      temuan: false, risiko: [], tindakan: [],
      bahas: 'Berkas ini bersih. Auditor yang baik juga harus berani menyatakan tidak ada temuan, sehingga waktu pemeriksaan dipakai untuk berkas yang benar-benar bermasalah.',
      rujukan: 'Fatwa 89/DSN-MUI/XII/2013; OJK (2024) Bab III.A angka 5, Bab IV angka 5–6' },
    { judul: 'Pak Hasan · al-bai\' dalam rangka MMQ', seg: 'ULaMM', ikon: '🚚',
      isi: ['Akad MMQ ditandatangani pada 3 Mei.', 'Akta jual beli kendaraan dari Pak Hasan kepada PNM bertanggal 10 Mei.', 'Kendaraan disertakan sebagai modal PNM dalam akad MMQ.', 'Angsuran berjalan lancar sejak Juni.'],
      temuan: true, risiko: [0],
      tindakan: [['Hentikan pola ini, perbaiki urutan pada akad berikutnya, dan mintakan pendapat DPS atas akad yang sudah berjalan.', true], ['Cukup tanggal akad MMQ diubah menjadi 10 Mei.', false], ['Tidak perlu tindakan karena selisihnya hanya seminggu.', false]],
      bahas: 'PNM menyertakan kendaraan sebagai modal sebelum memilikinya. Urutan yang terbalik membuat modal PNM belum ada pada saat akad. Mengubah tanggal di dokumen justru menambah persoalan baru.',
      rujukan: 'OJK (2024) hlm. 57 (al-bai\' dalam rangka MMQ refinancing)' },
    { judul: 'Bu Wati · nasabah macet 120 hari', seg: 'ULaMM', ikon: '⚠️',
      isi: ['Usaha terdampak banjir; tunggakan 120 hari.', 'Agunan sertifikat rumah dilelang 15 hari setelah status macet.', 'Tidak ada putusan pengadilan dan tidak ada surat penyerahan sukarela.', 'Denda keterlambatan Rp3 juta dicatat sebagai pendapatan lain-lain.'],
      temuan: true, risiko: [3, 0],
      tindakan: [['Tunda lelang, buka musyawarah 3R, dan pindahkan denda ke rekening dana sosial.', true], ['Lanjutkan lelang karena agunan sudah diikat.', false], ['Hapus seluruh kewajiban Bu Wati.', false]],
      bahas: 'Agunan pada pembiayaan musyarakah baru boleh dijual setelah ada putusan berkekuatan hukum tetap atau diserahkan sukarela. Denda tidak boleh menjadi pendapatan dan harus masuk dana sosial.',
      rujukan: 'OJK (2024) Bab V.B angka 2 dan Bab V.E angka 4; Fatwa 17/DSN-MUI/IX/2000' },
    { judul: 'Cabang Cempaka · taksiran petugas A', seg: 'Mekaar', ikon: '🔍',
      isi: ['Petugas A menyerahkan 40 taksiran dalam dua minggu.', 'Semua taksiran bernilai persis Rp10 juta, tepat dua kali plafon Rp5 juta.', 'Foto aset ada, tetapi tidak ada nama pengesah kedua.', 'Harga acuan pusat belum diterbitkan.'],
      temuan: true, risiko: [1, 0],
      tindakan: [['Uji petik aset di lapangan, tetapkan harga acuan dan pengesah kedua, lalu nilai kembali insentif petugas.', true], ['Sahkan saja karena semua foto lengkap.', false], ['Batalkan seluruh 40 akad tanpa pemeriksaan.', false]],
      bahas: 'Taksiran yang seragam dan selalu pas dengan plafon menandakan nilai mengikuti target, bukan nilai aset. Porsi PNM menjadi tidak wajar, dan kerugian membesar bila aset kelak dijual.',
      rujukan: 'OJK (2024) Bab III.A angka 5 dan 11' },
    { judul: 'Bu Siti · aset hanyut terbawa banjir', seg: 'Mekaar', ikon: '🌊',
      isi: ['Gerobak dan etalase objek MMQ hanyut pada minggu ke-20.', 'Sisa porsi PNM saat itu Rp3,1 juta.', 'Kelompok ditagih seluruh sisa porsi PNM melalui tanggung renteng.', 'Akad tidak memuat definisi tanggung renteng untuk MMQ.'],
      temuan: true, risiko: [0, 3],
      tindakan: [['Hitung ulang kerugian sesuai porsi, kelompok hanya menanggung tunggakan ujrah dan pembelian porsi, dan mintakan opini DPS atas definisi tanggung renteng.', true], ['Tagihan kepada kelompok dilanjutkan karena sudah disepakati.', false], ['Tagih seluruhnya kepada Bu Siti secara pribadi.', false]],
      bahas: 'Pada MMQ, kerugian atas aset ditanggung para pihak sesuai porsi kepemilikannya. Membebankan seluruh porsi PNM kepada kelompok membuat PNM tidak ikut menanggung risiko kepemilikannya.',
      rujukan: 'Fatwa 73/DSN-MUI/XI/2008 Ketentuan Keempat angka 3' },
    { judul: 'Pembukuan pilot MMQ', seg: 'Mekaar', ikon: '💻',
      isi: ['Sebanyak 1.200 akad MMQ dicatat di pos piutang Murabahah.', 'Pendapatan dicatat sebagai margin Murabahah.', 'Pengakuan pendapatan tetap berjalan untuk 85 rekening yang sudah macet.', 'Tidak ada rekonsiliasi porsi mingguan.'],
      temuan: true, risiko: [2],
      tindakan: [['Pindahkan ke pos Pembiayaan MMQ, hentikan pengakuan pendapatan rekening macet, dan jalankan rekonsiliasi porsi setiap minggu.', true], ['Biarkan sampai tutup buku akhir tahun.', false], ['Cukup ubah nama pos tanpa memperbaiki angkanya.', false]],
      bahas: 'Akad yang benar tetapi pembukuannya mengikuti Murabahah akan menghasilkan laporan yang keliru. Pendapatan rekening macet juga tidak boleh terus diakui.',
      rujukan: 'OJK (2024) Bab V.L angka 2, jurnal MMQ hlm. 53' },
    { judul: 'Bu Ani · pelunasan dipercepat', seg: 'Mekaar', ikon: '💵',
      isi: ['Bu Ani melunasi pada minggu ke-30 dari 50.', 'Yang dibayar: nilai sisa porsi PNM yang disepakati, ditambah biaya riil Rp25.000.', 'Rincian biaya riil tercatat dan disetujui sesuai pedoman.', 'Addendum pelunasan ditandatangani kedua pihak.'],
      temuan: false, risiko: [], tindakan: [],
      bahas: 'Berkas ini bersih. PNM tidak menagih sisa ujrah atas manfaat yang tidak lagi dinikmati, dan biaya yang dikenakan hanya biaya riil.',
      rujukan: 'Fatwa 134/DSN-MUI/II/2020; OJK (2024) Bab V.I' },
  ];

  const PESAN = {
    akad: 'Akadnya sendiri mudah. Yang menentukan kepatuhan syariah adalah proses bisnis yang menyertainya, sehingga diskusi cabang dan pusat menjadi kuncinya.',
    cp: 'Kebijakan pusat yang tidak memahami pekerjaan cabang akan muncul kembali sebagai temuan audit, pengaduan nasabah, atau penyaluran yang tertahan.',
    audit: 'Audit yang baik tidak dimulai saat pemeriksaan, tetapi sejak kebijakan ditulis dan akad ditandatangani. Bukti yang tidak dibuat hari ini tidak dapat diminta setahun kemudian.',
    maqasid: 'Memilih akad yang tepat adalah bagian dari menjaga harta (hifzh al-mal): harta nasabah terlindungi, harta PNM terjaga, dan transaksi tetap jelas serta adil.',
  };

  return { AKAD, KRITERIA, KARTU, KATEGORI, ANGGARAN, BABAK, nilaiBabak, RISIKO, BERKAS, PESAN };
})();
