import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollKeAtas from "../components/ScrollKeAtas.jsx";
import PerbandinganDemo from "../components/PerbandinganDemo.jsx";
import FormulaCard from "../components/FormulaCard.jsx";

export default function Beranda() {
  return (
    <>
      <ScrollKeAtas />
      <Navbar />
      <section className="hero">
        <div className="wadah hero__isi">
          <div className="hero__teks">
            <h1 className="hero__judul">
              Urutan penting atau tidak? Dari situlah rumusnya berbeda.
            </h1>
            <p className="hero__paragraf">
              Pelajari permutasi dan kombinasi lewat contoh yang bisa kamu
              utak-atik, hitung sendiri di kalkulator, lalu uji pemahamanmu
              dengan kuis.
            </p>
            <div className="hero__aksi">
              <Link to="/kalkulator" className="tombol tombol--utama">
                Buka kalkulator
              </Link>
              <Link to="/kuis" className="tombol tombol--garis">
                Mulai kuis
              </Link>
            </div>
          </div>
        </div>
        <div className="wadah">
          <PerbandinganDemo />
        </div>
      </section>

      <section className="bagian wadah" aria-labelledby="judul-dua-cara">
        <h2 id="judul-dua-cara" className="bagian__judul">
          Dua cara menghitung
        </h2>
        <p className="bagian__intro">
          Keduanya menghitung banyaknya cara memilih r unsur dari n unsur.
          Bedanya hanya satu: apakah urutan berpengaruh.
        </p>
        <div className="kisi kisi--dua">
          <FormulaCard
            nada="permutasi"
            judul="Permutasi"
            ciri="Urutan diperhatikan. Cocok untuk jabatan, nomor, kode, dan susunan duduk."
            rumus="P(n, r) = n! / (n − r)!"
            contoh="Memilih ketua, sekretaris, dan bendahara dari 5 orang."
            hitung="P(5, 3) = 5 × 4 × 3 = 60 cara"
          />
          <FormulaCard
            nada="kombinasi"
            judul="Kombinasi"
            ciri="Urutan tidak diperhatikan. Cocok untuk tim, panitia, dan pilihan menu."
            rumus="C(n, r) = n! / (r! × (n − r)!)"
            contoh="Memilih 3 anggota tim dari 5 orang."
            hitung="C(5, 3) = (5 × 4 × 3) / (3 × 2 × 1) = 10 cara"
          />
        </div>
      </section>

      <section className="bagian wadah" aria-labelledby="judul-variasi">
        <h2 id="judul-variasi" className="bagian__judul">
          Dua variasi yang sering muncul
        </h2>
        <div className="kisi kisi--dua">
          <FormulaCard
            nada="permutasi"
            judul="Permutasi dengan unsur yang sama"
            ciri="Ada unsur yang berulang, seperti huruf kembar dalam sebuah kata."
            rumus="n! / (k₁! × k₂! × …)"
            contoh="Susunan huruf pada kata KATAK (K dua kali, A dua kali)."
            hitung="5! / (2! × 2!) = 30 susunan"
          />
          <FormulaCard
            nada="permutasi"
            judul="Permutasi siklis"
            ciri="Unsur disusun melingkar, misalnya duduk mengelilingi meja bundar."
            rumus="P_siklis(n) = (n − 1)!"
            contoh="Lima orang duduk melingkar."
            hitung="(5 − 1)! = 24 susunan"
          />
        </div>
      </section>

      <section className="bagian wadah" aria-labelledby="judul-pilih">
        <h2 id="judul-pilih" className="bagian__judul">
          Cara cepat memilih rumus
        </h2>
        <ul className="penentu">
          <li className="penentu__baris penentu__baris--biru">
            <p className="penentu__tanya">
              Kalau tukar posisi menghasilkan hasil yang berbeda
            </p>
            <p className="penentu__jawab">
              Pakai permutasi. Contoh: juara 1, 2, 3 atau PIN 4 angka.
            </p>
          </li>
          <li className="penentu__baris penentu__baris--hijau">
            <p className="penentu__tanya">
              Kalau tukar posisi tetap dianggap sama
            </p>
            <p className="penentu__jawab">
              Pakai kombinasi. Contoh: memilih 3 teman untuk ikut berlibur.
            </p>
          </li>
        </ul>
      </section>

      <section className="ajakan">
        <div className="wadah ajakan__isi">
          <h2 className="ajakan__judul">Siap mencoba sendiri?</h2>
          <div className="hero__aksi">
            <Link to="/kalkulator" className="tombol tombol--utama">
              Hitung di kalkulator
            </Link>
            <Link to="/kuis" className="tombol tombol--garis">
              Kerjakan 10 soal kuis
            </Link>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
