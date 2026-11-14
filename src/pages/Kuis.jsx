import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollKeAtas from "../components/ScrollKeAtas.jsx";
import PertanyaanKuis from "../components/PertanyaanKuis.jsx";
import HasilKuis from "../components/HasilKuis.jsx";
import soalKuis from "../data/soalKuis.js";

export default function Kuis() {
  const [indeks, setIndeks] = useState(0);
  const [jawaban, setJawaban] = useState([]); // jawaban yang sudah dipilih per soal
  const [selesai, setSelesai] = useState(false);

  const terpilih = jawaban[indeks] ?? null;

  function pilih(i) {
    if (terpilih !== null) return;
    const salinan = [...jawaban];
    salinan[indeks] = i;
    setJawaban(salinan);
  }

  function lanjut() {
    if (indeks === soalKuis.length - 1) setSelesai(true);
    else setIndeks(indeks + 1);
  }

  function ulang() {
    setIndeks(0);
    setJawaban([]);
    setSelesai(false);
  }

  return (
    <>
      <ScrollKeAtas />
      <Navbar />
      <section className="wadah bagian bagian--sempit">
        <h1 className="bagian__judul">Kuis permutasi dan kombinasi</h1>
        {!selesai && (
          <p className="bagian__intro">
            Sepuluh soal pilihan ganda. Pembahasan muncul setelah kamu memilih.
          </p>
        )}

        {selesai ? (
          <HasilKuis soal={soalKuis} jawaban={jawaban} onUlang={ulang} />
        ) : (
          <PertanyaanKuis
            key={indeks}
            soal={soalKuis[indeks]}
            nomor={indeks + 1}
            total={soalKuis.length}
            terpilih={terpilih}
            onPilih={pilih}
            onLanjut={lanjut}
          />
        )}
      </section>
      <Footer />
    </>
  );
}
