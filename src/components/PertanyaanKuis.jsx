const HURUF_PILIHAN = ["A", "B", "C", "D"];

export default function PertanyaanKuis({
  soal,
  nomor,
  total,
  terpilih,
  onPilih,
  onLanjut,
}) {
  const sudahMenjawab = terpilih !== null;
  const benar = terpilih === soal.jawaban;
  const terakhir = nomor === total;

  return (
    <section className="kuis-kartu" aria-labelledby="teks-soal">
      <div className="kuis-kartu__atas">
        <span className="label-topik">{soal.topik}</span>
        <span className="kuis-kartu__nomor">
          Soal {nomor} dari {total}
        </span>
      </div>

      <div
        className="progres"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={nomor - 1 + (sudahMenjawab ? 1 : 0)}
        aria-label="Kemajuan kuis"
      >
        <div
          className="progres__isi"
          style={{ width: `${((nomor - 1 + (sudahMenjawab ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <h2 id="teks-soal" className="kuis-kartu__soal">
        {soal.teks}
      </h2>

      <ul className="pilihan">
        {soal.pilihan.map((teks, i) => {
          let kelas = "pilihan__tombol";
          if (sudahMenjawab) {
            if (i === soal.jawaban) kelas += " pilihan__tombol--benar";
            else if (i === terpilih) kelas += " pilihan__tombol--salah";
          }
          return (
            <li key={i}>
              <button
                type="button"
                className={kelas}
                disabled={sudahMenjawab}
                onClick={() => onPilih(i)}
              >
                <span className="pilihan__huruf">{HURUF_PILIHAN[i]}</span>
                <span>{teks}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div aria-live="polite">
        {sudahMenjawab && (
          <div className={"umpan " + (benar ? "umpan--benar" : "umpan--salah")}>
            <p className="umpan__judul">
              {benar
                ? "Jawabanmu benar."
                : `Belum tepat. Jawaban yang benar: ${soal.pilihan[soal.jawaban]}.`}
            </p>
            <p>{soal.pembahasan}</p>
          </div>
        )}
      </div>

      {sudahMenjawab && (
        <button type="button" className="tombol tombol--utama" onClick={onLanjut}>
          {terakhir ? "Lihat hasil" : "Soal berikutnya"}
        </button>
      )}
    </section>
  );
}
