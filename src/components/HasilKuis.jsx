import { Link } from "react-router-dom";

function pesan(persen) {
  if (persen === 100) return "Sempurna. Kamu sudah paham bedanya menyusun dan memilih.";
  if (persen >= 70) return "Bagus. Tinggal rapikan beberapa bagian yang masih keliru.";
  if (persen >= 40) return "Sudah separuh jalan. Baca pembahasan di bawah, lalu coba lagi.";
  return "Tidak apa-apa. Mulai dari pertanyaan 'urutan penting atau tidak?', lalu coba lagi.";
}

export default function HasilKuis({ soal, jawaban, onUlang }) {
  const skor = jawaban.filter((j, i) => j === soal[i].jawaban).length;
  const persen = Math.round((skor / soal.length) * 100);

  return (
    <section className="kuis-kartu" aria-labelledby="judul-hasil">
      <h2 id="judul-hasil" className="hasil__judul">
        Skormu {skor} dari {soal.length}
      </h2>
      <p className="hasil__persen">{persen}%</p>
      <p className="hasil__pesan">{pesan(persen)}</p>

      <div className="hasil__aksi">
        <button type="button" className="tombol tombol--utama" onClick={onUlang}>
          Ulangi kuis
        </button>
        <Link to="/kalkulator" className="tombol tombol--garis">
          Cek di kalkulator
        </Link>
      </div>

      <h3 className="hasil__sub">Tinjau jawabanmu</h3>
      <ol className="tinjau">
        {soal.map((s, i) => {
          const benar = jawaban[i] === s.jawaban;
          return (
            <li key={i} className={"tinjau__item " + (benar ? "tinjau__item--benar" : "tinjau__item--salah")}>
              <p className="tinjau__soal">{s.teks}</p>
              <p className="tinjau__jawab">
                {benar ? "Benar" : "Salah"}. Jawabanmu: {s.pilihan[jawaban[i]]}
                {!benar && `. Seharusnya: ${s.pilihan[s.jawaban]}`}
              </p>
              <p className="tinjau__bahas">{s.pembahasan}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
