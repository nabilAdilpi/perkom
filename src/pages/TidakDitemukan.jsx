import { Link } from "react-router-dom";

export default function TidakDitemukan() {
  return (
    <section className="wadah bagian" />
<<<<<<< HEAD
    <h1 className="bagian__judul error">404</h1>
=======
      <h1 className="bagian__judul error">404</h1>
>>>>>>> cf753a0585e7d68ac306ff76da392336221b00aa
      <p className="bagian__intro">
        Halaman Tidak Ditemukan :(
      </p>
      <Link to="/" className="tombol tombol--utama tombol-not-found">
        Kembali ke beranda
      </Link>
    </section>
  );
}
