// jawaban = indeks pilihan yang benar (dimulai dari 0)
const soalKuis = [
  {
    topik: "permutasi",
    teks: "Dari huruf A, B, C, D, dan E, berapa banyak susunan 3 huruf berbeda yang dapat dibuat?",
    pilihan: ["10", "20", "60", "120"],
    jawaban: 2,
    pembahasan:
      "Urutan huruf berpengaruh (ABC berbeda dari CBA), jadi ini permutasi. P(5, 3) = 5 × 4 × 3 = 60.",
  },
  {
    topik: "kombinasi",
    teks: "Sebuah kelas mengirim 3 perwakilan lomba dari 8 siswa. Berapa banyak cara memilih perwakilan itu?",
    pilihan: ["24", "56", "112", "336"],
    jawaban: 1,
    pembahasan:
      "Ketiganya sama-sama perwakilan, tidak ada jabatan, jadi urutan tidak penting. C(8, 3) = (8 × 7 × 6) / (3 × 2 × 1) = 56.",
  },
  {
    topik: "unsur sama",
    teks: "Berapa banyak susunan huruf yang berbeda dari kata MATEMATIKA?",
    pilihan: ["151.200", "75.600", "302.400", "3.628.800"],
    jawaban: 0,
    pembahasan:
      "Ada 10 huruf dengan M dua kali, A tiga kali, dan T dua kali. Banyak susunan = 10! / (2! × 3! × 2!) = 3.628.800 / 24 = 151.200.",
  },
  {
    topik: "siklis",
    teks: "Lima orang duduk mengelilingi meja bundar. Berapa banyak susunan duduk yang berbeda?",
    pilihan: ["120", "60", "12", "24"],
    jawaban: 3,
    pembahasan:
      "Pada susunan melingkar, satu orang dijadikan patokan. Banyak susunan = (5 − 1)! = 4! = 24.",
  },
  {
    topik: "permutasi",
    teks: "Dari 6 calon, dipilih ketua, sekretaris, dan bendahara. Berapa banyak susunan pengurus yang mungkin?",
    pilihan: ["20", "120", "216", "720"],
    jawaban: 1,
    pembahasan:
      "Tiap jabatan berbeda, jadi urutan penting. P(6, 3) = 6 × 5 × 4 = 120.",
  },
  {
    topik: "kombinasi",
    teks: "Dari 5 siswa putra dan 4 siswa putri akan dipilih 2 putra dan 2 putri. Berapa banyak cara pemilihannya?",
    pilihan: ["36", "90", "126", "60"],
    jawaban: 3,
    pembahasan:
      "Pilih putra dan putri secara terpisah, lalu kalikan. C(5, 2) × C(4, 2) = 10 × 6 = 60.",
  },
  {
    topik: "kombinasi",
    teks: "Berapakah nilai C(9, 7)?",
    pilihan: ["9", "36", "63", "72"],
    jawaban: 1,
    pembahasan:
      "C(9, 7) = C(9, 2) karena memilih 7 sama dengan memilih 2 yang ditinggalkan. C(9, 2) = (9 × 8) / 2 = 36.",
  },
  {
    topik: "unsur sama",
    teks: "Berapa banyak susunan huruf yang berbeda dari kata KATAK?",
    pilihan: ["30", "120", "60", "20"],
    jawaban: 0,
    pembahasan:
      "Ada 5 huruf dengan K dua kali dan A dua kali. Banyak susunan = 5! / (2! × 2!) = 120 / 4 = 30.",
  },
  {
    topik: "permutasi",
    teks: "Dari angka 1, 2, 3, 4, 5 dibuat bilangan genap 3 angka dengan angka yang berbeda. Berapa banyak bilangan yang mungkin?",
    pilihan: ["30", "36", "24", "60"],
    jawaban: 2,
    pembahasan:
      "Angka satuan harus 2 atau 4, jadi ada 2 pilihan. Dua angka sisanya disusun dari 4 angka tersisa: P(4, 2) = 12. Totalnya 2 × 12 = 24.",
  },
  {
    topik: "kombinasi",
    teks: "Ada 10 orang di sebuah pertemuan dan setiap pasangan berjabat tangan tepat satu kali. Berapa banyak jabat tangan yang terjadi?",
    pilihan: ["90", "45", "10", "100"],
    jawaban: 1,
    pembahasan:
      "Jabat tangan A dengan B sama dengan B dengan A, jadi urutan tidak penting. C(10, 2) = (10 × 9) / 2 = 45.",
  },
];

export default soalKuis;
