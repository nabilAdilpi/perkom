import { Link } from "react-router-dom";

export default function TidakDitemukan() {
  return (
    <section className="wadah bagian">
    <h1 className="bagian__judul error">404</h1>
      <p className="bagian__intro">
        Halaman Tidak Ditemukan :(
      </p>
      <Link to="/" className="tombol tombol--utama tombol-not-found">
        Kembali ke beranda
      </Link>
    </section>
  );
}
