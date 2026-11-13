// Menampilkan daftar susunan atau pilihan sebagai ubin huruf.
export default function DaftarUbin({ item, nada }) {
  return (
    <div className="ubin-daftar" role="list">
      {item.map((teks, i) => (
        <span role="listitem" className={`ubin ubin--${nada}`} key={`${teks}-${i}`}>
          {teks}
        </span>
      ))}
    </div>
  );
}
