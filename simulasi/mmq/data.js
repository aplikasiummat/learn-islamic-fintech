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
      fakta: 'Bagi hasil wajib dihitung dari hasil usaha yang benar-benar terjadi, sehingga PNM memerlukan laporan usaha setiap periode.',
      nilai: [[0, 2, 1, 0, 1], [2, 0, 0, 0, 0], [2, 0, 1, 0, 1], [1, 2, 2, 0, 2], [2, 2, 1, 2, 1]],
      alasan: [
        'Modal kerja bukan manfaat aset, sehingga tidak tertampung akad sewa.',
        'Seluruh modal berasal dari PNM, sedangkan catatan penjualan di buku tulis belum cukup untuk menghitung bagi hasil yang adil.',
        'Musyarakah paling sesuai dengan sifat usahanya, tetapi menuntut laporan dan verifikasi setiap periode.',
        'Stok sembako beragam dan berganti setiap minggu, sehingga PNM sulit membelinya sendiri.',
        'Pak Dedi membeli stok sebagai wakil PNM dengan margin yang pasti, sehingga sejalan dengan dana PNM yang berbiaya tetap.',
      ],
      rujukan: 'Fatwa 08/DSN-MUI/IV/2000 tentang Pembiayaan Musyarakah; Keputusan DSN-MUI 01/DSN-MUI/X/2013 angka 5 huruf d',
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
      rujukan: 'Fatwa 48/DSN-MUI/II/2005; Keputusan DSN-MUI 01/DSN-MUI/X/2013 angka 7c',
      catatan: 'Tidak ada akad yang unggul di delapan ronde sekaligus. Akad yang menjawab ronde 1 sampai 8 dibahas di Sesi 1: Musyarakah Mutanaqishah.',
      akhir: true,
    },
  ];

  /* ===================== GAME 2: CABANG VS PUSAT ===================== */
  /* Kategori skor "Satu PNM": maksimum tiap kategori */
  const KATEGORI = [
    { id: 'pny', nama: 'Penyaluran', maks: 25 },
    { id: 'npf', nama: 'Kredit macet dan pengaduan', maks: 20 },
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
      id: 'ulamm', nama: 'Babak 1 · ULaMM', sub: 'MMQ di ULaMM sudah berjalan sekitar dua tahun. Kantor Pusat menulis aturannya, Cabang menjalankannya untuk nasabah yang asetnya ditaksir lalu sebagian dibeli PNM.',
      kebijakan: [
        { k: 'U1', judul: 'Jenis MMQ yang dipakai', pilihan: [
          { t: 'Satu jenis MMQ untuk semua nasabah, apa pun kebutuhannya', b: 0, pen: { aud: 5 }, tem: 'Jenis MMQ tidak sesuai kebutuhan: modal kemitraan dipakai di luar usaha (Fatwa 89/DSN-MUI/XII/2013)' },
          { t: 'Jenis MMQ dipilih sesuai kebutuhan nasabah; untuk kebutuhan campuran dipakai MMQ Refinancing', b: 10 } ] },
        { k: 'U2', judul: 'Kenaikan sewa (ujrah) di tengah jalan', pilihan: [
          { t: 'Sewa boleh dinaikkan kapan saja bila biaya dana PNM naik', b: 0, pen: { aud: 6 }, tem: 'Sewa dinaikkan sepihak di tengah akad (Fatwa 56/DSN-MUI/V/2007)' },
          { t: 'Sewa hanya ditinjau pada jadwal yang tertulis di akad, disepakati nasabah, dan berlaku ke depan', b: 15 } ] },
        { k: 'U3', judul: 'Cara menaksir aset', pilihan: [
          { t: 'AO menaksir sendiri', b: 0, pen: { npf: 2 } },
          { t: 'Memakai harga acuan dari pusat; aset di atas Rp100 juta dinilai penilai independen', b: 15 } ] },
        { k: 'U4', judul: 'Dokumen akad', pilihan: [
          { t: 'Cukup satu formulir gabungan', b: 0, pen: { aud: 5, npf: 2 }, tem: 'Janji jual beli porsi tidak tertulis terpisah dan salinan akad tidak diserahkan (Fatwa 73/DSN-MUI/XI/2008 Ketentuan Ketiga angka 3)' },
          { t: 'Akad MMQ, janji jual beli porsi, dan akad sewa dibuat terpisah; nasabah menerima salinannya', b: 10 } ] },
        { k: 'U5', judul: 'Bila nasabah macet', pilihan: [
          { t: 'Agunan langsung dijual setelah 90 hari menunggak', b: 0 },
          { t: 'Musyawarah dulu; agunan dijual setelah ada putusan pengadilan atau diserahkan sukarela', b: 10 } ] },
        { k: 'U6', judul: 'Sistem pencatatan', pilihan: [
          { t: 'Memakai sistem Murabahah lama yang disesuaikan manual', b: 0, pen: { sys: 6 } },
          { t: 'Sistem khusus MMQ: mencatat porsi, jadwal sewa dan pembelian porsi, dan berhenti mencatat pendapatan saat nasabah macet', b: 30 } ] },
        { k: 'U7', judul: 'Penjadwalan ulang (3R) dan pelunasan lebih cepat', pilihan: [
          { t: 'Belum ada pedoman', b: 0 },
          { t: 'Ada pedoman tertulis; saat pelunasan lebih cepat hanya biaya riil yang ditagih', b: 10 } ] },
        { k: 'U8', judul: 'Insentif AO', pilihan: [
          { t: 'Dihitung dari jumlah penyaluran saja', b: 0, pen: { aud: 3 }, tem: 'Insentif hanya dari jumlah penyaluran mendorong taksiran mengikuti plafon' },
          { t: 'Dihitung dari jumlah penyaluran serta kerapian taksiran dan dokumen', b: 10 } ] },
      ],
      kejadian: [
        { judul: 'Biaya dana PNM naik', ikon: '📈',
          cerita: 'Bunga pinjaman bank PNM naik. Kepala cabang diminta menaikkan sewa (ujrah) Bu Ratna mulai bulan ini, padahal akadnya sudah berjalan setahun.',
          pilihan: ['Naikkan sewanya mulai bulan ini', 'Tunggu jadwal peninjauan sewa di akad dan musyawarahkan dengan Bu Ratna', 'Sewa tetap, tetapi tambahkan biaya administrasi agar setara'],
          hasil: (p, i) => i === 0 ? (p.U2 === 1 ? { aud: 6, npf: 3, m: 'Pusat sudah mengatur peninjauan sesuai jadwal akad, tetapi cabang menaikkan sewa sepihak.', tem: 'Sewa dinaikkan sepihak walau pedoman melarang' }
                                                 : { aud: 10, npf: 4, m: 'Sewa dinaikkan sepihak di tengah akad tanpa kesepakatan nasabah.', tem: 'Sewa dinaikkan sepihak di tengah akad (Fatwa 56/DSN-MUI/V/2007)' })
            : i === 1 ? (p.U2 === 1 ? { pny: 1, m: 'Tepat. Sewa ditinjau sesuai jadwal di akad, disepakati, dan berlaku ke depan.' }
                                     : { npf: 2, sys: 2, m: 'Tepat arahnya, tetapi tanpa pedoman pusat setiap cabang menafsirkan sendiri.' })
            : { aud: 8, npf: 3, m: 'Biaya tambahan tanpa dasar sama saja menaikkan sewa secara terselubung.', tem: 'Biaya administrasi dipakai menggantikan kenaikan sewa (Fatwa 134/DSN-MUI/II/2020: hanya biaya riil)' } },
        { judul: 'Bu Ratna minta tambahan dana', ikon: '🔧',
          cerita: 'Bu Ratna, nasabah MMQ Refinancing atas ruko, meminta tambahan dana Rp50 juta pada bulan ke-13.',
          pilihan: ['Tambahkan saja ke akad lama tanpa menaksir ulang', 'Taksir ulang ruko, lalu buat akad baru untuk tambahan porsi PNM', 'Tolak permintaannya'],
          hasil: (p, i) => i === 0 ? { aud: 8, sys: 2, m: 'Porsi PNM bertambah tanpa dasar nilai aset yang baru.', tem: 'Tambahan porsi tanpa taksiran ulang (Fatwa 89/DSN-MUI/XII/2013: taksiran wajar dan disepakati)' }
            : i === 1 ? (p.U3 === 1 ? { m: 'Tepat. Taksiran ulang dengan harga acuan menjadi dasar tambahan porsi.' } : { aud: 2, m: 'Langkahnya tepat, tetapi taksiran ulang tanpa harga acuan mudah dipersoalkan auditor.' })
            : { pny: 5, m: 'Aman, tetapi nasabah lancar kehilangan layanan dan penyaluran turun.' } },
        { judul: 'Taksiran ruko terlalu tinggi', ikon: '🏢',
          cerita: 'AO menaksir ruko Rp500 juta, sedangkan harga pasar di sekitarnya sekitar Rp380 juta. Nasabah dikenal lancar.',
          pilihan: ['Tetap pakai Rp500 juta karena nasabahnya lancar', 'Turunkan sesuai harga acuan atau hasil penilai independen', 'Tetap Rp500 juta, tetapi minta agunan tambahan'],
          hasil: (p, i) => i === 0 ? { aud: 10, npf: 4, m: 'Porsi PNM dihitung dari nilai yang tidak wajar.', tem: 'Porsi fiktif: nilai pembiayaan melebihi nilai aset dan kebutuhan (Fatwa 89/DSN-MUI/XII/2013: taksiran wajar dan disepakati)' }
            : i === 1 ? (p.U3 === 1 ? { pny: 2, m: 'Tepat. Plafon menyesuaikan nilai yang wajar.' } : { pny: 2, sys: 2, aud: 2, m: 'Tepat arahnya, tetapi tanpa harga acuan pusat angka penurunannya mudah diperdebatkan.' })
            : { aud: 6, npf: 2, m: 'Agunan tambahan tidak menyembuhkan porsi yang dinilai terlalu tinggi.', tem: 'Taksiran tidak wajar ditutup dengan agunan' } },
        { judul: 'Nasabah macet 120 hari', ikon: '⚠️',
          cerita: 'Seorang nasabah MMQ menunggak 120 hari karena usahanya terdampak banjir. Agunannya sertifikat rumah.',
          pilihan: ['Langsung lelang agunannya', 'Ajak musyawarah: perpanjang waktu, ubah jadwal pembelian porsi, hanya biaya riil yang ditagih', 'Kenakan denda dan catat sebagai pendapatan PNM'],
          hasil: (p, i) => i === 0 ? (p.U5 === 1 ? { aud: 8, npf: 6, m: 'Pusat meminta musyawarah dan putusan pengadilan lebih dulu, tetapi cabang langsung melelang.', tem: 'Agunan dijual sebelum ada putusan pengadilan dan tanpa penyerahan sukarela (Fatwa 08/DSN-MUI/IV/2000; Keputusan DSN-MUI 01/DSN-MUI/X/2013 angka 7c)' }
                                                 : { aud: 6, npf: 6, m: 'Agunan dijual tanpa musyawarah dan sebelum ada putusan pengadilan.', tem: 'Agunan dijual sebelum ada putusan pengadilan (Fatwa 08/DSN-MUI/IV/2000; Keputusan DSN-MUI 01/DSN-MUI/X/2013 angka 7c)' })
            : i === 1 ? (p.U7 === 1 ? { npf: 2, m: 'Tepat. Pedoman 3R memberi cabang pegangan yang seragam.' } : { npf: 2, sys: 2, aud: 2, m: 'Tepat arahnya, tetapi tanpa pedoman pusat setiap cabang memakai cara sendiri.' })
            : { aud: 10, npf: 3, m: 'Denda tidak boleh menjadi pendapatan PNM.', tem: 'Ta\'zir diakui sebagai pendapatan (Fatwa 17/DSN-MUI/IX/2000: denda masuk dana sosial)' } },
        { judul: 'Pelunasan dipercepat', ikon: '💰',
          cerita: 'Seorang nasabah ingin melunasi seluruh porsi PNM pada bulan ke-18, padahal jangka waktunya 36 bulan.',
          pilihan: ['Tagih semua sisa sewa sampai bulan ke-36', 'Nasabah membayar sisa porsi PNM ditambah biaya riil', 'Beri potongan besar tanpa hitungan yang jelas'],
          hasil: (p, i) => i === 0 ? { aud: 8, npf: 3, m: 'Sewa ditagih untuk bulan-bulan ketika nasabah sudah tidak memakai aset PNM.', tem: 'Sisa sewa ditagih pada pelunasan lebih cepat (Fatwa 134/DSN-MUI/II/2020)' }
            : i === 1 ? (p.U7 === 1 ? { m: 'Tepat. Nilai porsi disepakati dan biaya riil mengikuti pedoman.' } : { aud: 2, m: 'Tepat arahnya, tetapi tanpa pedoman perhitungan biaya riil berbeda antarcabang.' })
            : { pny: 2, aud: 2, m: 'Nasabah senang, tetapi potongan tanpa dasar menimbulkan perlakuan yang tidak seragam.' } },
        { judul: 'Tutup buku akhir bulan', ikon: '📊',
          cerita: 'Bagian akuntansi meminta laporan pendapatan MMQ akhir bulan. Ada 40 nasabah yang sudah macet.',
          pilihan: ['Catat pendapatan sewa seperti biasa, walau belum dibayar', 'Untuk nasabah macet, pendapatan baru dicatat saat uangnya benar-benar diterima', 'Catat mengikuti jadwal Murabahah lama'],
          hasil: (p, i) => i === 0 ? (p.U6 === 1 ? { m: 'Sistem MMQ menolak mencatat pendapatan dari nasabah macet, sehingga kesalahan tercegah.' } : { aud: 6, sys: 4, m: 'Pendapatan dicatat dari nasabah yang sudah macet.', tem: 'Pendapatan tetap dicatat dari nasabah macet (PSAK 406: pendapatan diakui saat diterima bila nasabah macet)' })
            : i === 1 ? (p.U6 === 1 ? { m: 'Tepat, dan sistem MMQ melakukannya otomatis.' } : { sys: 3, m: 'Tepat, tetapi harus dikerjakan manual untuk 40 nasabah.' })
            : { aud: 8, sys: 6, m: 'Pendapatan MMQ dicatat seolah margin Murabahah.', tem: 'Pencatatan MMQ memakai pola Murabahah' } },
      ],
    },
    {
      id: 'mekaar', nama: 'Babak 2 · Mekaar', sub: 'Uji coba MMQ Refinancing di Cabang Cempaka: barang milik ibu ditaksir, PNM membeli sebagian, lalu ibu menyewa dan membeli kembali bagian PNM setiap minggu.',
      kebijakan: [
        { k: 'P1', judul: 'Ibu yang tidak memiliki aset layak', pilihan: [
          { t: 'Tidak ada jalur lain', b: 0 },
          { t: 'Jalur Murabahah Wakalah Muallaqah tetap dibuka untuk ibu yang tidak punya aset', b: 15 } ] },
        { k: 'P2', judul: 'Taksiran aset', pilihan: [
          { t: 'Petugas menaksir sendiri di pertemuan kelompok', b: 0 },
          { t: 'Petugas menaksir, lalu KUM atau Kacab mengesahkan', b: 10 },
          { t: 'Katalog harga dari pusat, foto barang saat uji kelayakan, sistem menaksir, KUM mengesahkan, uji petik 5%', b: 25 } ] },
        { k: 'P3', judul: 'Cara menghitung porsi dan sewa', pilihan: [
          { t: 'Ditentukan unit bisnis tanpa persetujuan DPS', b: 0, pen: { aud: 6 }, tem: 'Cara menghitung porsi dan sewa tanpa persetujuan DPS (perlu opini DPS sebelum dipakai)' },
          { t: 'Disetujui DPS dan dituliskan jelas di akad', b: 10 } ] },
        { k: 'P4', judul: 'Dokumen akad', pilihan: [
          { t: 'Cukup satu formulir gabungan', b: 0, pen: { aud: 6, npf: 2 }, tem: 'Janji jual beli porsi tidak tertulis dan salinan akad tidak diserahkan (Fatwa 73/DSN-MUI/XI/2008 Ketentuan Ketiga angka 3)' },
          { t: 'Akad MMQ, janji jual beli porsi, dan akad sewa dibuat terpisah; ibu menerima salinannya', b: 10 } ] },
        { k: 'P5', judul: 'Sistem pencatatan', pilihan: [
          { t: 'Spreadsheet di cabang', b: 0, pen: { sys: 6 } },
          { t: 'Spreadsheet yang dicocokkan setiap hari dengan data pusat', b: 10 },
          { t: 'Sistem inti PNM: mencatat porsi, sewa, dan foto aset setiap ibu', b: 30 } ] },
        { k: 'P6', judul: 'Insentif petugas', pilihan: [
          { t: 'Dihitung dari jumlah penyaluran saja', b: 0, pen: { aud: 4 }, tem: 'Insentif hanya dari jumlah penyaluran mendorong taksiran mengikuti plafon' },
          { t: 'Dihitung dari jumlah penyaluran serta kerapian taksiran dan dokumen', b: 10 } ] },
        { k: 'P7', judul: 'Pedoman penjadwalan ulang (3R)', pilihan: [
          { t: 'Belum ada pedoman', b: 0 },
          { t: 'Musyawarah ulang jadwal dan jangka waktu; hanya biaya riil yang ditagih', b: 10 } ] },
        { k: 'P8', judul: 'Penjelasan kepada nasabah dan tanggung renteng', pilihan: [
          { t: 'Tidak ada', b: 0, pen: { npf: 4 } },
          { t: 'Penjelasan baku yang sama di setiap PKM; tanggung renteng hanya untuk angsuran (sewa dan pembelian porsi) yang tertunggak', b: 10 } ] },
      ],
      kejadian: [
        { judul: 'Ibu tanpa aset', ikon: '🙋‍♀️',
          cerita: 'Seorang ibu memerlukan Rp5 juta, tetapi asetnya hanya gerobak senilai Rp1,5 juta. Target cabang bulan ini naik 20%.',
          pilihan: ['Tolak pengajuannya', 'Naikkan taksirannya supaya plafon cukup', 'Arahkan ke jalur pembiayaan lain atau tanyakan ke pusat'],
          hasil: (p, i) => i === 0 ? { pny: p.P1 === 1 ? 3 : 6, m: p.P1 === 1 ? 'Ada jalur lain yang tidak dipakai, sehingga penyaluran hilang percuma.' : 'Tanpa jalur lain, ibu ini tidak terlayani.' }
            : i === 1 ? (p.P2 === 2 ? { aud: 2, pny: 2, m: 'Sistem menolak taksiran di luar rentang harga acuan.' } : { aud: 10, npf: 4, m: 'Porsi PNM dihitung dari nilai yang dipaksakan.', tem: 'Taksiran dipaksakan agar plafon masuk (Fatwa 89/DSN-MUI/XII/2013: taksiran wajar dan disepakati)' })
            : (p.P1 === 1 ? { m: 'Tepat. Ibu dilayani dengan akad yang sesuai.' } : { pny: 5, m: 'Tepat arahnya, tetapi pusat belum menyediakan jalur lain.' }) },
        { judul: 'Empat puluh taksiran kembar', ikon: '🔍',
          cerita: 'Dalam dua minggu, satu petugas menyerahkan 40 taksiran yang nilainya sama persis Rp10 juta, tepat dua kali plafon.',
          pilihan: ['Sahkan saja karena mengejar target', 'Periksa langsung 10 aset di lapangan sebagai sampel', 'Bekukan petugas itu dan taksir ulang semuanya'],
          hasil: (p, i) => i === 0 ? { aud: p.P2 === 0 ? 12 : p.P2 === 1 ? 8 : 3, npf: 3, m: p.P2 === 2 ? 'Sistem menandai sebaran yang janggal, tetapi cabang tetap mengesahkan.' : 'Taksiran mengikuti plafon, bukan nilai aset.', tem: 'Taksiran seragam mengikuti plafon' }
            : i === 1 ? (p.P2 === 0 ? { aud: 4, pny: 1, m: 'Pemeriksaan sampel tanpa harga acuan tidak punya patokan.' } : { pny: 1, m: 'Tepat. Pemeriksaan sampel memakai patokan harga yang jelas.' })
            : { pny: 6, m: 'Aman, tetapi penyaluran tertahan dan petugas lain ikut berhati-hati berlebihan.' } },
        { judul: 'Motor Bu Ani dijual', ikon: '🏍️',
          cerita: 'Bu Ani menjual motor yang menjadi objek MMQ untuk membayar biaya rumah sakit. Angsurannya masih lancar.',
          pilihan: ['Biarkan saja, angsurannya tetap lancar', 'Musyawarah: ganti dengan aset lain atau ubah akadnya', 'Minta dilunasi seketika'],
          hasil: (p, i) => i === 0 ? { aud: 8, m: 'Sewa ditagih untuk aset yang sudah tidak ada.', tem: 'Objek sewa MMQ dijual tanpa pengganti (Fatwa 112/DSN-MUI/IX/2017: objek sewa harus ada)' }
            : i === 1 ? (p.P7 === 1 ? { m: 'Tepat. Pedoman memberi jalan aset pengganti atau perubahan akad.' } : { aud: 2, sys: 2, m: 'Tepat arahnya, tetapi tanpa pedoman setiap petugas memutuskan sendiri.' })
            : { npf: 8, m: 'Ibu yang sedang kesulitan ditekan, dan pengaduan muncul.' } },
        { judul: 'Aset hanyut terbawa banjir', ikon: '🌊',
          cerita: 'Gerobak dan etalase Bu Siti hanyut terbawa banjir. Kelompok bertanya apa yang harus mereka tanggung.',
          pilihan: ['Kelompok menanggung seluruh sisa porsi PNM', 'Kerugian dibagi sesuai porsi; kelompok hanya menanggung angsuran yang tertunggak', 'PNM menghapus semuanya'],
          hasil: (p, i) => i === 0 ? { aud: 10, npf: 6, m: 'Kerugian aset dibebankan seluruhnya kepada nasabah dan kelompok.', tem: 'Kerugian aset tidak dibagi sesuai porsi (Fatwa 73/2008 Keempat angka 3)' }
            : i === 1 ? (p.P8 === 1 ? { m: 'Tepat. Definisi tanggung renteng sudah jelas sejak akad.' } : { npf: 4, sys: 2, m: 'Tepat, tetapi kelompok baru mendengar aturannya hari ini dan merasa dirugikan.' })
            : { aud: 3, npf: 4, m: 'PNM melepas haknya tanpa dasar, dan kelompok lain menunggu perlakuan yang sama.' } },
        { judul: 'Pelunasan dipercepat', ikon: '💵',
          cerita: 'Seorang ibu mendapat kiriman uang dari anaknya dan ingin melunasi porsi PNM pada minggu ke-30. Ia tidak mau membayar biaya apa pun.',
          pilihan: ['Tagih semua sisa sewa sampai minggu ke-50', 'Ibu membayar sisa porsi PNM ditambah biaya riil', 'Gratiskan tanpa dicatat'],
          hasil: (p, i) => i === 0 ? { aud: 8, npf: 4, m: 'Sewa ditagih untuk minggu-minggu ketika ibu sudah tidak memakai aset PNM.', tem: 'Sisa sewa ditagih pada pelunasan lebih cepat (Fatwa 134/2020)' }
            : i === 1 ? (p.P7 === 1 ? { m: 'Tepat. Biaya riil mengikuti pedoman.' } : { aud: 2, sys: 2, m: 'Tepat arahnya, tetapi perhitungan biaya riil berbeda antarunit.' })
            : { pny: 1, m: 'Ringan bagi nasabah; pastikan tidak ada biaya riil yang terlewat.' } },
        { judul: 'Sistem belum siap', ikon: '💻',
          cerita: 'Uji coba dimulai bulan depan. Porsi, sewa, dan jadwal pembelian porsi setiap ibu harus tercatat sejak minggu pertama.',
          pilihan: ['Tunda uji coba tiga bulan', 'Tetap jalan dengan spreadsheet yang dicocokkan setiap hari', 'Tetap jalan, dicatat seperti Murabahah di sistem lama'],
          hasil: (p, i) => i === 0 ? { pny: 8, m: p.P5 === 2 ? 'Sistem pusat sebenarnya sudah siap, sehingga penundaan tidak perlu.' : 'Aman, tetapi target uji coba meleset.' }
            : i === 1 ? (p.P5 === 2 ? { m: 'Sistem pusat siap; spreadsheet hanya menjadi cadangan.' } : p.P5 === 1 ? { sys: 2, m: 'Tepat. Pencocokan harian menjaga data tetap utuh.' } : { sys: 6, aud: 3, m: 'Tanpa pencocokan data, bagian PNM salah hitung di banyak rekening.', tem: 'Data porsi dan sewa tidak dicocokkan' })
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
    { judul: 'Pak Darto · sewa truk dinaikkan', seg: 'ULaMM', ikon: '🚚',
      isi: ['Akad MMQ Refinancing atas truk, 36 bulan. Sewa (ujrah) Rp4,5 juta per bulan tertulis di akad.', 'Akad tidak memuat jadwal maupun cara peninjauan sewa.', 'Mulai bulan ke-13 sewa dinaikkan menjadi Rp5,2 juta karena biaya dana PNM naik.', 'Tidak ada addendum dan tidak ada tanda tangan persetujuan Pak Darto.'],
      temuan: true, risiko: [0],
      tindakan: [['Kembalikan kelebihan sewa, buat addendum yang disepakati bersama, dan masukkan cara peninjauan sewa ke format akad.', true], ['Tidak perlu tindakan karena kenaikan biaya dana memang nyata.', false], ['Ubah akadnya menjadi Murabahah agar marginnya tetap.', false]],
      bahas: 'Sewa dalam MMQ disepakati di muka. Sewa hanya boleh ditinjau bila hal itu diperjanjikan, disepakati kedua pihak, dan berlaku untuk masa berikutnya. Kenaikan sepihak di tengah akad membuat kelebihan sewa tidak berdasar.',
      rujukan: 'Fatwa 56/DSN-MUI/V/2007 tentang Ketentuan Review Ujrah; Fatwa 73/DSN-MUI/XI/2008 Ketentuan Keempat angka 2; materi sesi terakhir: Risiko MMQ Pembiayaan Ulang di ULaMM' },
    { judul: 'Bu Ratna · MMQ Refinancing ruko', seg: 'ULaMM', ikon: '🏢',
      isi: ['Ruko ditaksir Rp500 juta oleh penilai independen; harga acuan pusat Rp480 sampai 520 juta.', 'Akad MMQ, janji (wa\'d) tertulis, dan akad ijarah ditandatangani terpisah dan berurutan.', 'Salinan akad diterima nasabah, dengan tanda tangan.', 'Sewa dan pembelian porsi dibayar lancar sesuai jadwal di akad.'],
      temuan: false, risiko: [], tindakan: [],
      bahas: 'Berkas ini bersih. Auditor yang baik juga harus berani menyatakan tidak ada temuan, sehingga waktu pemeriksaan dipakai untuk berkas yang benar-benar bermasalah.',
      rujukan: 'Fatwa 89/DSN-MUI/XII/2013; Fatwa 73/DSN-MUI/XI/2008 Ketentuan Ketiga; materi sesi terakhir: Program Audit Tahap Pra-Akad dan Akad' },
    { judul: 'Pak Hasan · al-bai\' dalam rangka MMQ', seg: 'ULaMM', ikon: '🚚',
      isi: ['Akad MMQ ditandatangani pada 3 Mei.', 'Akta jual beli kendaraan dari Pak Hasan kepada PNM bertanggal 10 Mei.', 'Kendaraan disertakan sebagai modal PNM dalam akad MMQ.', 'Angsuran berjalan lancar sejak Juni.'],
      temuan: true, risiko: [0],
      tindakan: [['Hentikan pola ini, perbaiki urutan pada akad berikutnya, dan mintakan pendapat DPS atas akad yang sudah berjalan.', true], ['Cukup tanggal akad MMQ diubah menjadi 10 Mei.', false], ['Tidak perlu tindakan karena selisihnya hanya seminggu.', false]],
      bahas: 'PNM menyertakan kendaraan sebagai modal sebelum memilikinya. Urutan yang terbalik membuat modal PNM belum ada pada saat akad. Mengubah tanggal di dokumen justru menambah persoalan baru.',
      rujukan: 'Fatwa 89/DSN-MUI/XII/2013 Skema 3; materi sesi terakhir: Risiko MMQ Pembiayaan Ulang di ULaMM' },
    { judul: 'Bu Wati · nasabah macet 120 hari', seg: 'ULaMM', ikon: '⚠️',
      isi: ['Usaha terdampak banjir; tunggakan 120 hari.', 'Agunan sertifikat rumah dilelang 15 hari setelah status macet.', 'Tidak ada putusan pengadilan dan tidak ada surat penyerahan sukarela.', 'Denda keterlambatan Rp3 juta dicatat sebagai pendapatan lain-lain.'],
      temuan: true, risiko: [3, 0],
      tindakan: [['Tunda lelang, buka musyawarah 3R, dan pindahkan denda ke rekening dana sosial.', true], ['Lanjutkan lelang karena agunan sudah diikat.', false], ['Hapus seluruh kewajiban Bu Wati.', false]],
      bahas: 'Agunan baru boleh dijual setelah ada putusan pengadilan yang berkekuatan hukum tetap atau diserahkan sukarela oleh nasabah. Denda tidak boleh menjadi pendapatan dan harus masuk dana sosial.',
      rujukan: 'Fatwa 17/DSN-MUI/IX/2000 (denda masuk dana sosial); Keputusan DSN-MUI 01/DSN-MUI/X/2013 angka 7c; materi sesi terakhir: Jaminan, Ganti Rugi, dan Denda' },
    { judul: 'Cabang Cempaka · taksiran petugas A', seg: 'Mekaar', ikon: '🔍',
      isi: ['Petugas A menyerahkan 40 taksiran dalam dua minggu.', 'Semua taksiran bernilai persis Rp10 juta, tepat dua kali plafon Rp5 juta.', 'Foto aset ada, tetapi tidak ada nama pengesah kedua.', 'Harga acuan pusat belum diterbitkan.'],
      temuan: true, risiko: [1, 0],
      tindakan: [['Periksa sampel aset di lapangan, tetapkan katalog harga dan pengesah kedua, lalu nilai kembali insentif petugas.', true], ['Sahkan saja karena semua foto lengkap.', false], ['Batalkan seluruh 40 akad tanpa pemeriksaan.', false]],
      bahas: 'Taksiran yang seragam dan selalu pas dengan plafon menandakan nilai mengikuti target, bukan nilai aset. Porsi PNM menjadi tidak wajar, dan kerugian membesar bila aset kelak dijual.',
      rujukan: 'Fatwa 89/DSN-MUI/XII/2013 Ketentuan Pertama (taksiran wajar dan disepakati); materi sesi terakhir: Usulan Kriteria Penerimaan Risiko untuk Pilot Mekaar' },
    { judul: 'Bu Siti · aset hanyut terbawa banjir', seg: 'Mekaar', ikon: '🌊',
      isi: ['Gerobak dan etalase objek MMQ hanyut pada minggu ke-20.', 'Sisa porsi PNM saat itu Rp3,1 juta.', 'Kelompok ditagih seluruh sisa porsi PNM melalui tanggung renteng.', 'Akad tidak memuat definisi tanggung renteng untuk MMQ.'],
      temuan: true, risiko: [0, 3],
      tindakan: [['Hitung ulang kerugian sesuai porsi, kelompok hanya menanggung angsuran yang tertunggak, dan mintakan opini DPS atas definisi tanggung renteng.', true], ['Tagihan kepada kelompok dilanjutkan karena sudah disepakati.', false], ['Tagih seluruhnya kepada Bu Siti secara pribadi.', false]],
      bahas: 'Pada MMQ, kerugian atas aset ditanggung para pihak sesuai porsi kepemilikannya. Membebankan seluruh porsi PNM kepada kelompok membuat PNM tidak ikut menanggung risiko kepemilikannya.',
      rujukan: 'Fatwa 73/DSN-MUI/XI/2008 Ketentuan Keempat angka 3; materi sesi terakhir: Risiko Baru, Siapa Menanggung Apa saat Aset Dijual' },
    { judul: 'Pembukuan pilot MMQ', seg: 'Mekaar', ikon: '💻',
      isi: ['Sebanyak 1.200 akad MMQ dicatat di pos piutang Murabahah.', 'Pendapatan dicatat sebagai margin Murabahah.', 'Pengakuan pendapatan tetap berjalan untuk 85 rekening yang sudah macet.', 'Data porsi tidak dicocokkan setiap minggu.'],
      temuan: true, risiko: [2],
      tindakan: [['Pindahkan ke pos Pembiayaan MMQ, hentikan pencatatan pendapatan dari rekening macet, dan cocokkan data porsi setiap minggu.', true], ['Biarkan sampai tutup buku akhir tahun.', false], ['Cukup ubah nama pos tanpa memperbaiki angkanya.', false]],
      bahas: 'Akad yang benar tetapi pembukuannya mengikuti Murabahah akan menghasilkan laporan yang keliru. Pendapatan rekening macet juga tidak boleh terus diakui.',
      rujukan: 'PSAK 406 Akuntansi Musyarakah; materi sesi terakhir: Program Audit Tahap Masa Berjalan, 3R, dan Penyelesaian' },
    { judul: 'Bu Ani · pelunasan dipercepat', seg: 'Mekaar', ikon: '💵',
      isi: ['Bu Ani melunasi pada minggu ke-30 dari 50.', 'Yang dibayar: nilai sisa porsi PNM yang disepakati, ditambah biaya riil Rp25.000.', 'Rincian biaya riil tercatat dan disetujui sesuai pedoman.', 'Addendum pelunasan ditandatangani kedua pihak.'],
      temuan: false, risiko: [], tindakan: [],
      bahas: 'Berkas ini bersih. PNM tidak menagih sisa sewa untuk minggu-minggu ketika Bu Ani sudah tidak memakai aset PNM, dan biaya yang dikenakan hanya biaya riil.',
      rujukan: 'Fatwa 134/DSN-MUI/II/2020; materi sesi terakhir: Program Audit Tahap Masa Berjalan, 3R, dan Penyelesaian' },
  ];

  const PESAN = {
    akad: 'Akadnya sendiri mudah. Yang menentukan kepatuhan syariah adalah proses bisnis yang menyertainya, sehingga diskusi cabang dan pusat menjadi kuncinya.',
    cp: 'Kebijakan pusat yang tidak memahami pekerjaan cabang akan muncul kembali sebagai temuan audit, pengaduan nasabah, atau penyaluran yang tertahan.',
    audit: 'Audit yang baik tidak dimulai saat pemeriksaan, tetapi sejak kebijakan ditulis dan akad ditandatangani. Bukti yang tidak dibuat hari ini tidak dapat diminta setahun kemudian.',
    maqasid: 'Memilih akad yang tepat adalah bagian dari menjaga harta (hifzh al-mal): harta nasabah terlindungi, harta PNM terjaga, dan transaksi tetap jelas serta adil.',
  };

  return { AKAD, KRITERIA, KARTU, KATEGORI, ANGGARAN, BABAK, nilaiBabak, RISIKO, BERKAS, PESAN };
})();
