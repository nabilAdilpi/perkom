// Menampilkan tahapan perhitungan sebagai daftar bertahap.
export default function LangkahHitung({ langkah }) {
  return (
    <ol className="langkah">
      {langkah.map((item, i) => (
        <li key={i} className="langkah__item">
          <span className="langkah__label">{item.label}</span>
          <span className="rumus rumus--baris">{item.isi}</span>
        </li>
      ))}
    </ol>
  );
}
