/* Isi Duel Komite Kredit: sepuluh babak dari materi IHT Financial & Legal Professionals hari pertama.
   Tipe soal: mc (satu jawaban), multi (pilih semua yang benar), sort (kelompokkan ke kotak), order (urutkan).
   Semua istilah "bunga" ditulis "margin". Nama debitur dan angka kasus bersifat fiktif. */
window.KOMITE = (function () {
  'use strict';

  const SRA = `<table class="fin"><tr><th>CV Sumber Rejeki Abadi (Rp juta)</th><th>2024</th><th>2025</th></tr>
    <tr><td>Penjualan</td><td>7.200</td><td>8.100</td></tr>
    <tr><td>Laba bersih</td><td>211</td><td>190</td></tr>
    <tr><td>Piutang usaha</td><td>620</td><td>1.240</td></tr>
    <tr><td>Persediaan</td><td>900</td><td>1.650</td></tr>
    <tr><td>Utang bank jangka pendek</td><td>600</td><td>1.400</td></tr>
    <tr><td>Utang kepada pihak berelasi</td><td>–</td><td>250</td></tr>
    <tr><td>Utang dibanding modal (DER)</td><td>1,41x</td><td>2,05x</td></tr>
    <tr><td>Kemampuan bayar margin (EBIT ÷ beban margin)</td><td>3,08x</td><td>2,28x</td></tr>
    <tr><td>Arus kas operasi</td><td>positif</td><td><b class="neg">−935</b></td></tr></table>`;

  const BABAK = [
    {
      k: 'ilmu', ikon: '🧭', nama: 'Tiga Ilmu, Satu Keputusan', warna: '#2B5B8B',
      ringkas: 'Keuangan, akuntansi, dan analisis kredit menghasilkan output yang berbeda. Legal memastikan output itu bisa dipegang secara hukum.',
      qs: [
        { t: 'mc', q: 'Output utama dari <b>akuntansi</b> adalah ...',
          o: ['Laporan keuangan: neraca, laba rugi, arus kas, dan catatan', 'Keputusan layak atau tidak layak', 'Akta perjanjian kredit', 'Harga saham yang wajar', 'Jadwal lelang agunan'], a: 0,
          exp: 'Akuntansi mencatat transaksi dan menghasilkan laporan keuangan. Keuangan memakai laporan itu untuk menilai nilai dan risiko, lalu analisis kredit menghasilkan rekomendasi: layak, layak bersyarat, atau tidak layak.',
          legal: 'Laporan keuangan adalah dokumen yang dinyatakan benar oleh debitur. Minta pernyataan kebenaran data (representations and warranties, yaitu janji debitur bahwa datanya benar) di perjanjian.' },
        { t: 'sort', q: 'Kelompokkan setiap output ke ilmunya.', bins: ['Akuntansi', 'Keuangan', 'Analisis kredit'],
          items: [['Neraca dan laba rugi tahun 2025', 0], ['Catatan atas laporan keuangan', 0], ['Rasio utang dibanding modal', 1], ['Proyeksi arus kas 3 tahun', 1], ['Rekomendasi: layak bersyarat', 2], ['Struktur fasilitas dan syarat pencairan', 2]],
          exp: 'Akuntansi mencatat masa lalu, keuangan membaca dan memproyeksikan, analisis kredit memutuskan dan menyusun struktur fasilitas.',
          legal: 'Syarat pencairan dari analisis kredit harus diterjemahkan legal menjadi klausul yang bisa ditagih: conditions precedent (syarat yang harus dipenuhi sebelum dana cair).' },
        { t: 'mc', q: 'Di tahap mana legal <b>paling murah</b> mencegah kerugian kredit?',
          o: ['Sebelum komite: memeriksa dokumen, legalitas, dan agunan', 'Saat kredit sudah macet', 'Saat lelang agunan', 'Saat gugatan di pengadilan', 'Setelah debitur pailit'], a: 0,
          exp: 'Pencegahan di hulu (sebelum komite dan sebelum akad) jauh lebih murah dibanding penyelamatan di hilir seperti lelang, litigasi, atau kepailitan.',
          legal: 'Cacat pengikatan yang ditemukan setelah macet sering tidak bisa diperbaiki lagi karena debitur tidak lagi kooperatif.' },
      ]
    },
    {
      k: '5c', ikon: '🔍', nama: 'Detektif 5C', warna: '#CF202B',
      ringkas: 'Character, Capacity, Capital, Collateral, Condition: lima pertanyaan sebelum memberi kredit, dan masing-masing punya pasangan instrumen hukumnya.',
      qs: [
        { t: 'sort', q: 'Setiap temuan analis masuk ke C yang mana?', bins: ['Character', 'Capacity', 'Capital', 'Collateral', 'Condition'],
          items: [['SLIK menunjukkan pernah kolektibilitas 2 dan tidak dijelaskan', 0], ['Arus kas operasi negatif Rp 935 juta', 1], ['Utang 2,05 kali modal sendiri', 2], ['Taksiran agunan Rp 2,4 M, harga pasar Rp 1,5 M', 3], ['Harga bahan baku naik dan pesaing baru masuk', 4]],
          exp: 'Character = kemauan dan kejujuran membayar. Capacity = kemampuan membayar dari kas usaha. Capital = modal sendiri yang ikut menanggung risiko. Collateral = jalan keluar kedua. Condition = kondisi ekonomi dan industri.',
          legal: 'Setiap C punya instrumen hukum: Character → pernyataan dan jaminan pribadi; Capacity → covenant keuangan; Capital → larangan menarik modal; Collateral → pengikatan sempurna; Condition → klausul perubahan material (material adverse change).' },
        { t: 'mc', q: 'Mengapa legal perlu memahami 5C?',
          o: ['Agar klausul perjanjian menutup risiko yang ditemukan dalam 5C', 'Agar legal bisa menggantikan analis kredit', 'Agar legal ikut menentukan margin', 'Karena 5C diatur dalam KUHPerdata', 'Agar legal tidak perlu membaca MUK'], a: 0,
          exp: 'Analisis 5C menemukan risiko. Legal menerjemahkannya menjadi klausul, syarat, dan pengikatan agunan yang melindungi bank.',
          legal: 'Klausul tanpa dasar analisis menjadi klausul standar yang tidak menjawab risiko debitur tertentu.' },
        { t: 'sort', q: 'Pasangkan instrumen hukum dengan C yang dilindunginya.', bins: ['Character', 'Capacity', 'Capital', 'Collateral', 'Condition'],
          items: [['Personal guarantee (jaminan pribadi pemilik)', 0], ['Covenant DSCR minimal 1,25 kali', 1], ['Larangan membagi laba sebelum kredit lunas', 2], ['Akta Pemberian Hak Tanggungan yang didaftarkan', 3], ['Klausul material adverse change (perubahan merugikan yang material)', 4]],
          exp: 'Setiap risiko 5C dikunci dengan instrumen yang sesuai.',
          legal: 'Hak Tanggungan baru lahir setelah didaftarkan dan dicatat dalam buku tanah (UU 4/1996). Akta saja belum cukup.' },
        { t: 'mc', q: 'Debitur punya agunan sangat bagus, tetapi arus kas operasinya negatif tiga tahun berturut-turut. Sikap yang tepat?',
          o: ['Kredit tetap berisiko karena agunan adalah jalan keluar kedua, bukan sumber pembayaran', 'Langsung setujui karena agunan menutup semua risiko', 'Setujui dengan margin lebih tinggi', 'Abaikan arus kas karena laba masih positif', 'Minta debitur mengganti agunan'], a: 0,
          exp: 'Sumber pembayaran pertama adalah kas usaha (Capacity). Agunan hanya jalan keluar bila jalan pertama gagal, dan eksekusinya mahal serta lama.',
          legal: 'Bank bukan pembeli properti. Lelang Hak Tanggungan memakan waktu, biaya, dan bisa digugat.' },
      ]
    },
    {
      k: 'neraca', ikon: '⚖️', nama: 'Peta Neraca dan Antrian Kreditur', warna: '#B8860B',
      ringkas: 'Neraca adalah peta harta (aset) dan peta hak tagih (liabilitas dan ekuitas). Legal membaca siapa yang berhak lebih dulu bila debitur gagal.',
      qs: [
        { t: 'sort', q: 'Klasifikasikan pos neraca berikut.', bins: ['Aset lancar', 'Aset tetap', 'Liabilitas jangka pendek', 'Liabilitas jangka panjang', 'Ekuitas'],
          items: [['Persediaan barang dagang', 0], ['Piutang usaha', 0], ['Gedung dan mesin produksi', 1], ['Utang usaha ke pemasok', 2], ['Kredit investasi 5 tahun', 3], ['Laba ditahan', 4]],
          exp: 'Aset lancar berputar dalam satu tahun; aset tetap dipakai bertahun-tahun. Liabilitas dipisah menurut jatuh tempo. Ekuitas adalah klaim pemilik yang dibayar paling akhir.',
          legal: 'Persediaan dan piutang diikat dengan fidusia; tanah dan bangunan dengan Hak Tanggungan; kapal di atas 20 m³ dengan hipotek.' },
        { t: 'mc', q: 'Yang dimaksud <b>kreditur separatis</b> adalah ...',
          o: ['Kreditur pemegang hak jaminan kebendaan (Hak Tanggungan, fidusia, gadai, hipotek) yang dapat mengeksekusi seolah-olah tidak terjadi kepailitan', 'Kreditur yang tagihannya didahulukan karena undang-undang, misalnya pajak', 'Kreditur tanpa jaminan yang dibayar secara proporsional', 'Pemegang saham debitur', 'Kreditur yang tinggal terpisah dari debitur'], a: 0,
          exp: 'Separatis (terpisah) karena hak eksekusinya terpisah dari harta pailit (UU 37/2004 Pasal 55). Preferen didahulukan karena undang-undang. Konkuren tanpa jaminan dan berbagi sisa harta secara proporsional (pari passu, yaitu sama rata menurut besar tagihan).',
          legal: 'Bank hanya menjadi separatis bila pengikatannya sempurna dan terdaftar. Fidusia yang tidak didaftarkan membuat bank turun menjadi kreditur konkuren.' },
        { t: 'sort', q: 'Tentukan kedudukan setiap kreditur saat debitur pailit.', bins: ['Separatis', 'Preferen', 'Konkuren'],
          items: [['Bank dengan Hak Tanggungan terdaftar atas pabrik', 0], ['Bank dengan fidusia persediaan yang terdaftar', 0], ['Kantor pajak atas utang pajak', 1], ['Pemasok bahan baku tanpa jaminan', 2], ['Bank dengan fidusia yang tidak didaftarkan', 2]],
          exp: 'Kedudukan ditentukan oleh jenis hak, bukan oleh besar tagihan. Fidusia tanpa pendaftaran tidak melahirkan hak kebendaan.',
          legal: 'Jaminan fidusia lahir pada tanggal dicatat dalam Buku Daftar Fidusia (UU 42/1999 Pasal 14 ayat 3).' },
        { t: 'mc', q: 'Kaidah <b>matching</b> dalam analisa neraca mengatakan ...',
          o: ['Liabilitas jangka pendek membiayai aset lancar; liabilitas jangka panjang dan modal membiayai aset tetap', 'Aset harus selalu sama dengan utang', 'Utang jangka panjang paling baik membiayai modal kerja', 'Modal sendiri hanya boleh membiayai persediaan', 'Semua aset dibiayai utang bank'], a: 0,
          exp: 'Sumber dana harus sesuai jangka waktu pemakaiannya. Dana jangka panjang lebih mahal; bila dipakai untuk modal kerja, harga pokok menjadi tidak kompetitif.',
          legal: 'Penyimpangan dari tujuan fasilitas melanggar klausul penggunaan dana (use of proceeds) dan dapat dijadikan peristiwa cidera janji (event of default).' },
      ]
    },
    {
      k: 'side', ikon: '🌊', nama: 'Side Streaming', warna: '#0E7C86',
      ringkas: 'Side streaming: dana dipakai tidak sesuai kaidah atau di luar tujuannya.',
      qs: [
        { t: 'mc', q: 'Neraca debitur: aset lancar 60%, aset tetap 40%; liabilitas jangka pendek 30%, jangka panjang 30%, ekuitas 40%. Berapa side streaming-nya?',
          ctx: `<div class="bsviz"><div class="col"><div style="flex:60;background:#F6D743">Aset lancar 60%</div><div style="flex:40;background:#3BA7E0">Aset tetap 40%</div></div><div class="col"><div style="flex:30;background:#F7D6CB">Liab. pendek 30%</div><div style="flex:30;background:#EFA27E">Liab. panjang 30%</div><div style="flex:40;background:#C8A13A">Ekuitas 40%</div></div></div>`,
          o: ['30% aset lancar dibiayai utang jangka panjang', 'Tidak ada side streaming', '10% aset tetap dibiayai utang jangka pendek', '60%', '40% aset tetap dibiayai ekuitas, jadi side streaming 40%'], a: 0,
          exp: 'Aset lancar 60% hanya dibiayai liabilitas jangka pendek 30%. Sisanya, 30%, dibiayai utang jangka panjang: side streaming 30%. Capacity kurang baik karena dana mahal dipakai untuk modal kerja.',
          legal: 'Solusi: konversi sebagian utang jangka panjang menjadi fasilitas modal kerja, dengan addendum perjanjian yang jelas tujuan penggunaannya.' },
        { t: 'multi', q: 'Mana saja yang termasuk <b>side streaming</b>? Pilih semua yang benar.',
          o: ['Kredit modal kerja dipakai membeli rumah pribadi pemilik', 'Utang jangka panjang dipakai untuk membeli persediaan', 'Kas usaha dialirkan ke PT milik istri pemilik sebagai piutang Rp 310 juta', 'Kredit investasi dipakai membeli mesin sesuai proposal', 'Kredit modal kerja dipakai membeli bahan baku'], a: [0, 1, 2],
          exp: 'Side streaming terjadi bila dana keluar dari tujuan atau tidak sesuai kaidah jangka waktu. Dua pilihan terakhir justru sesuai tujuan.',
          legal: 'Tuliskan tujuan penggunaan secara spesifik, beri bank hak memeriksa penggunaan dana, dan pencairan langsung ke pemasok (bukan ke rekening debitur) bila memungkinkan.' },
        { t: 'mc', q: 'CV Sumber Rejeki Abadi punya piutang Rp 310 juta kepada PT milik istri pemilik. Dari kacamata legal, ini disebut ...',
          ctx: SRA,
          o: ['Transaksi pihak berelasi yang harus diungkapkan dan bisa menjadi jalur kebocoran dana', 'Piutang biasa yang tidak perlu ditanyakan', 'Bukti bisnis berkembang', 'Aset tetap', 'Modal disetor'], a: 0,
          exp: 'Pihak berelasi (related party) adalah pihak yang punya hubungan kepemilikan atau keluarga. Piutang kepada mereka sering tidak ditagih dan menjadi saluran mengalirkan dana keluar.',
          legal: 'Masukkan larangan transaksi dengan pihak berelasi tanpa persetujuan bank, dan minta subordinasi (penundaan hak tagih) atas utang pihak berelasi Rp 250 juta.' },
      ]
    },
    {
      k: 'kas', ikon: '🔄', nama: 'Siklus Kas, Laba, CAPEX, OPEX', warna: '#6B4C9A',
      ringkas: 'Laba tidak sama dengan kas. Uang berputar dari kas ke persediaan, ke piutang, lalu kembali ke kas.',
      qs: [
        { t: 'order', q: 'Urutkan siklus konversi kas usaha dagang dari awal.',
          items: ['Kas', 'Membeli persediaan dari pemasok', 'Menjual secara kredit kepada pelanggan', 'Piutang usaha', 'Menagih piutang', 'Kas kembali, siap berputar lagi'],
          exp: 'Semakin lama uang tertahan di persediaan dan piutang, semakin besar kebutuhan modal kerja. Di neraca, siklus ini terlihat di aset lancar dan liabilitas jangka pendek.',
          legal: 'Setiap titik siklus punya pengikatan: persediaan (fidusia), piutang (fidusia atau cessie, yaitu pengalihan hak tagih), rekening penampung (kuasa debet dan blokir).' },
        { t: 'mc', q: 'Hari piutang CV SRA 55 hari, hari persediaan 85 hari, hari utang usaha 31 hari. Berapa siklus konversi kasnya?', ctx: SRA,
          o: ['109 hari', '171 hari', '140 hari', '53 hari', '31 hari'], a: 0,
          exp: 'Siklus konversi kas = hari piutang + hari persediaan − hari utang usaha = 55 + 85 − 31 = 109 hari. Tahun 2024 hanya 53 hari, jadi uang tertahan dua kali lebih lama.',
          legal: 'Siklus yang memanjang membuat debitur meminta tambahan plafon. Minta laporan umur piutang dan stok berkala sebagai covenant pelaporan.' },
        { t: 'mc', q: 'Laba bersih CV SRA 2025 Rp 190 juta, tetapi arus kas operasi <b>−Rp 935 juta</b>. Penyebab utamanya?', ctx: SRA,
          o: ['Kas tertahan di piutang (+Rp 620 juta) dan persediaan (+Rp 750 juta)', 'Laba dicatat salah', 'Debitur membayar dividen besar', 'Penyusutan mesin terlalu besar', 'Utang bank dilunasi'], a: 0,
          exp: 'Penjualan kredit dicatat sebagai pendapatan walau uangnya belum masuk. Kenaikan piutang dan persediaan menyerap kas sebesar Rp 1.370 juta.',
          legal: 'Laba di atas kertas tidak membayar angsuran. Gunakan DSCR berbasis kas, bukan laba, dalam covenant.' },
        { t: 'sort', q: 'Kelompokkan pengeluaran berikut.', bins: ['CAPEX (investasi)', 'OPEX (biaya operasional)', 'Modal kerja'],
          items: [['Membeli mesin pengemas baru', 0], ['Membangun gudang', 0], ['Gaji karyawan dan listrik bulanan', 1], ['Sewa toko tahun berjalan', 1], ['Menambah stok bahan baku', 2], ['Memberi tempo bayar 60 hari ke pelanggan', 2]],
          exp: 'CAPEX menghasilkan aset tetap yang dipakai bertahun-tahun dan cocok dibiayai kredit investasi. OPEX habis dalam periode berjalan. Modal kerja berputar dalam siklus kas.',
          legal: 'Kasus WorldCom: biaya operasional (OPEX) dicatat sebagai investasi (CAPEX) agar laba terlihat besar. Legal dan risiko bertanya: bukti fisik asetnya mana?' },
        { t: 'mc', q: 'Rasio utang dibanding modal (DER) CV SRA naik dari 1,41 kali menjadi 2,05 kali. Artinya ...', ctx: SRA,
          o: ['Pertumbuhan dibiayai utang, sehingga risiko bank meningkat karena porsi pemilik makin kecil', 'Modal pemilik bertambah lebih cepat dari utang', 'Perusahaan makin aman', 'Laba naik dua kali lipat', 'Aset tetap berkurang'], a: 0,
          exp: 'Leverage (daya ungkit utang) memperbesar hasil saat usaha bagus, tetapi juga memperbesar kerugian saat usaha memburuk. Pemilik menanggung risiko yang makin kecil.',
          legal: 'Covenant DER maksimal dan larangan menambah utang tanpa izin bank (negative pledge, yaitu larangan menjaminkan aset ke pihak lain) menjaga struktur ini.' },
      ]
    },
    {
      k: 'audit', ikon: '🧾', nama: 'Opini Audit', warna: '#1F6F43',
      ringkas: 'Opini auditor menunjukkan seberapa bisa dipercaya angkanya, dan pos mana yang bermasalah bila tidak WTP.',
      qs: [
        { t: 'sort', q: 'Pasangkan kondisi dengan opini auditor yang paling mungkin.', bins: ['WTP', 'WDP', 'Tidak Wajar', 'Tidak Menyatakan Pendapat'],
          items: [['Semua pos disajikan wajar sesuai standar', 0], ['Auditor tidak bisa menghadiri perhitungan fisik persediaan, tetapi pos lain wajar', 1], ['Piutang macet besar tanpa cadangan kerugian dan salah sajinya meluas', 2], ['Manajemen menolak memberi akses ke buku besar dan rekening bank', 3]],
          exp: 'WTP = wajar tanpa pengecualian. WDP = wajar kecuali pos tertentu. Tidak Wajar = salah saji material dan meluas. Tidak Menyatakan Pendapat = auditor tidak memperoleh bukti yang cukup.',
          legal: 'Syaratkan laporan keuangan diaudit KAP terdaftar dengan opini minimal WTP untuk plafon tertentu, dan jadikan opini Tidak Wajar sebagai peristiwa cidera janji.' },
        { t: 'mc', q: 'Opini WDP dengan pengecualian pada <b>persediaan</b>. Di laporan mana dampaknya terasa?',
          o: ['Neraca (aset lancar) dan laba rugi (harga pokok penjualan dan laba)', 'Hanya catatan atas laporan keuangan', 'Hanya ekuitas', 'Tidak ada dampak', 'Hanya arus kas pendanaan'], a: 0,
          exp: 'Persediaan akhir yang salah mengubah harga pokok penjualan, sehingga laba juga salah. Satu pos neraca bisa menggeser laba rugi.',
          legal: 'Persediaan diikat fidusia. Bila nilainya diragukan auditor, nilai agunan fidusia itu juga diragukan: minta stock opname bersama.' },
        { t: 'mc', q: 'Opini WTP dengan paragraf <b>ketidakpastian material terkait kelangsungan usaha</b>. Apa artinya bagi bank?',
          o: ['Angkanya wajar, tetapi auditor meragukan debitur mampu bertahan; bank harus waspada', 'Debitur sangat sehat', 'Auditor menolak memberi opini', 'Laporan keuangan palsu', 'Tidak ada artinya karena tetap WTP'], a: 0,
          exp: 'Paragraf kelangsungan usaha (going concern) menunjukkan keraguan auditor atas kemampuan debitur bertahan setidaknya 12 bulan ke depan.',
          legal: 'Periksa penyebabnya di catatan: utang jatuh tempo, gugatan, atau kehilangan pelanggan utama. Pertimbangkan klausul percepatan pelunasan (acceleration).' },
      ]
    },
    {
      k: 'trik', ikon: '🎭', nama: 'Trik AO agar MUK Lolos Komite', warna: '#C0571F',
      ringkas: 'Sebagian besar trik bukan kebohongan, melainkan pemilihan informasi: yang baik ditonjolkan, yang buruk dikecilkan.',
      qs: [
        { t: 'mc', q: 'MUK memproyeksikan penjualan naik 45% per tahun, padahal tiga tahun terakhir hanya naik 8%. Trik ini disebut ...',
          ctx: `<div class="hockey"><svg viewBox="0 0 300 120" preserveAspectRatio="none"><polyline points="10,100 70,95 130,90 190,86" stroke="#2B5B8B" stroke-width="4" fill="none"/><polyline points="190,86 240,55 290,8" stroke="#CF202B" stroke-width="4" stroke-dasharray="7 5" fill="none"/><text x="20" y="117" font-size="11" fill="#5a6678">Sejarah +8%</text><text x="205" y="117" font-size="11" fill="#CF202B">Proyeksi +45%</text></svg></div>`,
          o: ['Proyeksi tongkat hoki (hockey stick)', 'Rasio pilihan', 'Plafon dipecah', 'Agunan dibesarkan', 'Waktu mepet'], a: 0,
          exp: 'Grafik datar lalu tiba-tiba melonjak seperti tongkat hoki. Pertanyaan penangkal: apa yang berubah? Kontrak baru mana, kapasitas produksi dari mana, modal kerja dari siapa?',
          legal: 'Bila proyeksi bertumpu pada kontrak baru, minta salinan kontrak dan jadikan kontrak itu objek cessie atau syarat pencairan.' },
        { t: 'mc', q: 'Agunan ditaksir AO Rp 2,4 M, harga pasar pembanding Rp 1,5 M, NJOP Rp 1,1 M. Coverage terhadap plafon Rp 2 M terlihat 120%. Sikap yang tepat?',
          ctx: `<div class="bars3"><div><span style="height:96%;background:#CF202B"></span><b>2,4 M</b><small>Taksiran AO</small></div><div><span style="height:60%;background:#B8860B"></span><b>1,5 M</b><small>Harga pasar</small></div><div><span style="height:44%;background:#2B5B8B"></span><b>1,1 M</b><small>NJOP</small></div></div>`,
          o: ['Coverage riil hanya sekitar 75% dari harga pasar, dan nilai likuidasinya lebih rendah lagi; minta penilai independen', 'Coverage 120% sudah aman', 'Pakai NJOP saja tanpa penilaian', 'Naikkan plafon karena agunan besar', 'Abaikan selisih karena AO paling tahu lapangan'], a: 0,
          exp: 'Rp 1,5 M ÷ Rp 2 M = 75%. Saat lelang, nilai likuidasi biasanya di bawah harga pasar. Coverage 120% adalah coverage semu.',
          legal: 'Gunakan KJPP (penilai publik) independen untuk plafon besar, dan cek sertifikat asli di BPN: pemilik, beban, sengketa, dan sita.' },
        { t: 'sort', q: 'Kenali trik di setiap kalimat MUK.', bins: ['Rasio pilihan', 'Plafon dipecah', 'Dokumen menyusul', 'Tujuan dikemas'],
          items: [['"DSCR berbasis laba 1,8 kali" padahal arus kas operasi negatif', 0], ['Rp 1,5 M diajukan sebagai tiga fasilitas Rp 500 juta atas nama tiga saudara', 1], ['"IMB dan izin usaha akan diserahkan setelah pencairan"', 2], ['"Modal kerja" yang sebenarnya untuk melunasi utang di bank lain', 3]],
          exp: 'Plafon dipecah agar setiap fasilitas berada di bawah batas wewenang pemutus. Dokumen menyusul membuat syarat penting tidak pernah dipenuhi.',
          legal: 'Gabungkan eksposur satu kelompok usaha (one obligor). Syarat penting ditulis sebagai conditions precedent, bukan "menyusul".' },
        { t: 'mc', q: 'MUK masuk dua jam sebelum rapat komite dengan catatan "nasabah lama, kenal dekat direksi". Pertanyaan penangkal terbaik?',
          o: ['"Data apa yang belum diverifikasi, dan apa risikonya bila keputusan ditunda satu minggu?"', '"Siapa yang mengenalkan nasabah ini?"', '"Berapa bonus AO?"', '"Mengapa tidak dinaikkan plafonnya sekalian?"', 'Tidak perlu bertanya karena nasabah lama'], a: 0,
          exp: 'Trik nama besar dan waktu mepet bekerja karena tidak ada waktu menguji. Menunda untuk verifikasi biasanya jauh lebih murah dibanding kredit bermasalah.',
          legal: 'Catat keberatan dalam notulen komite. Notulen adalah bukti bahwa prinsip kehati-hatian dijalankan.' },
      ]
    },
    {
      k: 'fraud', ikon: '🚨', nama: 'Pemalsuan Data dan Fraud di MUK', warna: '#7A1020',
      ringkas: 'Dari salah, menyesatkan, sampai palsu. Garis antara trik dan fraud itu tipis.',
      qs: [
        { t: 'multi', q: 'Hasil verifikasi berkas CV SRA. Mana yang merupakan <b>red flag</b> pemalsuan atau informasi menyesatkan? Pilih semua yang benar.',
          o: ['Mutasi rekening koran tidak sama dengan data di bank penerbit', 'Faktur penjualan berurutan sempurna, semua dari pelanggan yang sama, dan tanpa stempel', 'NPWP aktif dan sesuai nama debitur', 'Alamat pabrik di NIB ternyata rumah tinggal kosong', 'Laporan keuangan ditandatangani pemilik'], a: [0, 1, 3],
          exp: 'Verifikasi silang ke sumber asli (bank penerbit, pelanggan, kunjungan lokasi) adalah cara paling ampuh menemukan dokumen palsu.',
          legal: 'Dokumen palsu dapat dijerat pemalsuan surat (KUHP Nasional, UU 1/2023, Pasal 391). Simpan bukti asli dan berita acara verifikasi.' },
        { t: 'sort', q: 'Segitiga fraud: kelompokkan setiap kondisi.', bins: ['Tekanan', 'Kesempatan', 'Rasionalisasi'],
          items: [['AO dikejar target penyaluran akhir tahun', 0], ['Debitur terlilit utang di bank lain', 0], ['Satu orang memeriksa sekaligus menyetujui dokumen', 1], ['Tidak ada kunjungan lokasi sebelum pencairan', 1], ['"Toh nanti juga dibayar, semua AO begini"', 2]],
          exp: 'Fraud muncul bila tiga unsur bertemu: tekanan, kesempatan, dan rasionalisasi (pembenaran diri). Bank paling bisa mengendalikan unsur kesempatan.',
          legal: 'Pemisahan tugas (four eyes principle) dan sistem pelaporan pelanggaran (whistleblowing) menutup unsur kesempatan.' },
        { t: 'sort', q: 'Pasangkan kasus dengan modusnya.', bins: ['Enron', 'WorldCom', 'Wirecard', 'Garuda Indonesia 2018'],
          items: [['Utang disembunyikan di perusahaan khusus di luar neraca', 0], ['Biaya operasional dicatat sebagai investasi agar laba naik', 1], ['Kas sekitar EUR 1,9 miliar di rekening penampung ternyata tidak ada', 2], ['Pendapatan kontrak yang belum diterima diakui sebagai pendapatan tahun berjalan', 3]],
          exp: 'Polanya sama di skala kecil maupun raksasa: utang disembunyikan, biaya disulap, kas fiktif, pendapatan dipercepat.',
          legal: 'Konfirmasi saldo bank langsung ke bank penerbit dan konfirmasi piutang ke pelanggan adalah prosedur sederhana yang menangkap modus seperti Wirecard.' },
        { t: 'mc', q: 'Pegawai bank sengaja mencatat data palsu dalam berkas kredit agar MUK lolos. Risiko hukumnya?',
          o: ['Pidana perbankan bagi pegawai bank karena pencatatan palsu (UU Perbankan Pasal 49)', 'Hanya teguran lisan', 'Tidak ada, karena yang untung debitur', 'Hanya sanksi administratif untuk debitur', 'Cukup diganti AO lain'], a: 0,
          exp: 'UU Perbankan mengancam pidana bagi anggota direksi, komisaris, atau pegawai bank yang sengaja membuat pencatatan palsu dalam pembukuan atau dokumen bank.',
          legal: 'Dalam fraud internal, legal berperan menjaga bukti, menyusun kronologi, dan memastikan pelaporan sesuai ketentuan OJK.' },
      ]
    },
    {
      k: 'syariah', ikon: '🌙', nama: 'Perspektif Syariah', warna: '#0B6E4F',
      ringkas: 'Prinsip yang sama berlaku di pembiayaan syariah: jujur informasi, margin disepakati di awal, dan tidak ada tambahan karena keterlambatan.',
      qs: [
        { t: 'mc', q: 'Dalam murabahah, margin keuntungan bank ...',
          o: ['Disepakati di awal akad dan tidak boleh berubah selama akad berjalan', 'Mengikuti suku bunga acuan setiap bulan', 'Bertambah bila nasabah terlambat membayar', 'Ditentukan setelah barang terjual', 'Tidak perlu diberitahukan kepada nasabah'], a: 0,
          exp: 'Harga jual (harga pokok + margin) disepakati dan diketahui kedua pihak sejak awal (Fatwa DSN-MUI 04/DSN-MUI/IV/2000).',
          legal: 'Perjanjian murabahah harus memuat harga pokok, margin, dan harga jual secara jelas. Perubahan sepihak membatalkan sifat murabahah.' },
        { t: 'sort', q: 'Kenali istilahnya.', bins: ['Tadlis', 'Ghisy', 'Gharar'],
          items: [['Menyembunyikan cacat usaha atau utang di bank lain dari bank', 0], ['Mencampur barang jelek di antara barang bagus agar laporan stok terlihat baik', 1], ['Objek dan harga akad tidak jelas', 2]],
          exp: 'Tadlis = menyembunyikan informasi yang seharusnya diketahui pihak lain. Ghisy = menipu atau memalsukan kualitas. Gharar = ketidakjelasan dalam akad.',
          legal: 'Hadis "Barang siapa menipu, maka ia bukan golongan kami" (HR Muslim). Dalam hukum positif, informasi menyesatkan dapat menjadi dasar pembatalan karena penipuan (KUHPerdata Pasal 1328).' },
        { t: 'mc', q: 'Nasabah murabahah yang mampu tetapi sengaja menunda pembayaran dapat dikenai ...',
          o: ['Denda (ta\'zir) yang disalurkan ke dana sosial, bukan menjadi pendapatan bank', 'Tambahan margin yang menjadi pendapatan bank', 'Bunga keterlambatan', 'Perpanjangan otomatis dengan margin baru', 'Tidak boleh dikenai apa pun'], a: 0,
          exp: 'Fatwa DSN-MUI 17/DSN-MUI/IX/2000: denda untuk nasabah mampu yang menunda dibolehkan sebagai sanksi, dan dananya untuk dana sosial. Ganti rugi riil (ta\'widh) diatur terpisah dalam Fatwa 43/2004.',
          legal: 'Klausul denda harus menyebut peruntukan dana sosial dan hanya berlaku bagi nasabah yang mampu tetapi menunda.' },
      ]
    },
    {
      k: 'komite', ikon: '🏛️', nama: 'Sidang Komite: Putuskan!', warna: '#0D2746',
      ringkas: 'Gabungkan semuanya: baca strategi bisnis, uji lima pertanyaan cepat, lalu putuskan layak, layak bersyarat, atau tidak layak.',
      qs: [
        { t: 'mc', q: 'CV SRA mengajukan tambahan plafon modal kerja Rp 1 M. Lima pertanyaan cepat: kas operasi negatif (merah), DER 2,05 (merah), DSCR kas di bawah 1 (merah), porsi ekuitas sekitar 33% (kuning), agunan milik sendiri tapi taksiran semu (kuning). Keputusan?', ctx: SRA,
          o: ['Tidak layak sebagaimana diajukan; bisa dipertimbangkan ulang bila strukturnya diperbaiki', 'Layak, proses normal', 'Layak karena penjualan naik 12,5%', 'Setujui dengan margin lebih tinggi', 'Setujui dua kali lipat agar kas positif'], a: 0,
          exp: 'Tiga merah berarti tidak layak sebagaimana diajukan. Tetapi "tidak layak" bisa diubah menjadi "layak bersyarat" dengan memperbaiki strukturnya.',
          legal: 'Keputusan tolak tetap perlu alasan tertulis yang objektif agar tidak menjadi sengketa dan konsisten dengan prinsip kehati-hatian.' },
        { t: 'multi', q: 'Agar CV SRA menjadi <b>layak bersyarat</b>, syarat mana yang tepat? Pilih semua yang benar.',
          o: ['Penagihan piutang Rp 310 juta dari PT milik istri sebelum pencairan', 'Subordinasi utang pihak berelasi Rp 250 juta', 'Penilaian ulang agunan oleh penilai independen', 'Pencairan bertahap berdasarkan bukti pembelian (purchase order)', 'Menaikkan plafon menjadi Rp 2 M agar kas positif', 'Membebaskan debitur dari laporan keuangan berkala'], a: [0, 1, 2, 3],
          exp: 'Syarat yang baik menutup risiko yang ditemukan: kebocoran ke pihak berelasi, struktur utang, coverage semu, dan penggunaan dana.',
          legal: 'Syarat ini ditulis sebagai conditions precedent (sebelum cair) dan covenant (selama kredit berjalan), dengan pelanggaran sebagai peristiwa cidera janji.' },
        { t: 'mc', q: 'Penjualan naik cepat, tetapi kas selalu negatif dan utang terus bertambah. Dalam peta strategi bisnis, debitur ini sedang ...',
          o: ['Tumbuh dengan dibiayai utang: berisiko kehabisan kas', 'Tumbuh sehat dibiayai kas sendiri', 'Usaha matang yang menghasilkan kas', 'Usaha yang menyusut tetapi kaya kas', 'Tidak bisa disimpulkan dari laporan keuangan'], a: 0,
          exp: 'Pertumbuhan yang dibiayai utang (bukan kas operasi) membuat usaha rapuh. Kasus Sritex dan Evergrande menunjukkan bagaimana ekspansi berbasis utang berakhir gagal bayar.',
          legal: 'Untuk debitur seperti ini, legal mengutamakan pengikatan agunan yang sempurna dan covenant leverage, karena jalan keluar kedua lebih mungkin dipakai.' },
      ]
    },
  ];

  /* Lawan komputer: tiga tingkat analis. akurasi = peluang jawaban benar; detik = rentang waktu berpikir. */
  const LAWAN = [
    { k: 'magang', nama: 'Bot Magang', ikon: '🤖', akurasi: 0.55, detik: [14, 32], ket: 'Baru masuk bulan ini. Sering terburu-buru.' },
    { k: 'analis', nama: 'Bot Analis Senior', ikon: '🦾', akurasi: 0.72, detik: [10, 24], ket: 'Sudah membaca ribuan MUK. Teliti, tetapi bisa terkecoh trik.' },
    { k: 'komite', nama: 'Bot Ketua Komite', ikon: '👑', akurasi: 0.86, detik: [7, 18], ket: 'Hampir tidak pernah salah. Kalahkan dia kalau bisa.' },
  ];

  return { BABAK, LAWAN, SRA, DETIK: 60, POIN: 100, BONUS: 50 };
})();
