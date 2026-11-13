// nada: "permutasi" (biru) | "kombinasi" (hijau) | "netral"
export default function FormulaCard({
  nada = "netral",
  judul,
  ciri,
  rumus,
  contoh,
  hitung,
}) {
  return (
    <article className={`kartu kartu--${nada}`}>
      <h3 className="kartu__judul">{judul}</h3>
      <p className="kartu__ciri">{ciri}</p>
      <p className="rumus" aria-label={`Rumus: ${rumus}`}>
        {rumus}
      </p>
      <div className="kartu__contoh">
        <p>{contoh}</p>
        <p className="kartu__hitung">{hitung}</p>
      </div>
    </article>
  );
}
