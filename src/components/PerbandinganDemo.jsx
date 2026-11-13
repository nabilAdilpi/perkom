import { useMemo, useState } from "react";
import {
  daftarPermutasi,
  daftarKombinasi,
  urutkanHuruf,
} from "../utils/kombinatorika.js";

const HURUF = ["A", "B", "C", "D"];

// Demo interaktif: memilih r huruf dari A, B, C, D.
export default function PerbandinganDemo() {
  const [r, setR] = useState(2);

  const { susunan, pilihan, kelompok } = useMemo(() => {
    const susunan = daftarPermutasi(HURUF, r);
    const pilihan = daftarKombinasi(HURUF, r);
    // Kelompokkan susunan yang berasal dari pilihan huruf yang sama
    const kelompok = pilihan.map((p) =>
      susunan.filter((s) => urutkanHuruf(s) === p)
    );
    return { susunan, pilihan, kelompok };
  }, [r]);

  const faktorialR = susunan.length / pilihan.length;

  return (
    <section className="demo" aria-labelledby="judul-demo">
      <div className="demo__kepala">
        <h2 id="judul-demo" className="demo__judul">
          Pilih {r} dari huruf A, B, C, D
        </h2>
        <div className="demo__pengatur" role="group" aria-label="Jumlah huruf yang dipilih">
          {[1, 2, 3].map((nilai) => (
            <button
              key={nilai}
              type="button"
              className={"segmen" + (r === nilai ? " segmen--aktif" : "")}
              aria-pressed={r === nilai}
              onClick={() => setR(nilai)}
            >
              {nilai} huruf
            </button>
          ))}
        </div>
      </div>

      <div className="demo__lajur">
        <div className="lajur lajur--biru">
          <h3 className="lajur__judul">
            Permutasi: <span className="angka">{susunan.length}</span> susunan
          </h3>
          <p className="lajur__ket">Urutan penting, jadi AB dan BA dihitung dua kali.</p>
          <div className="ubin-daftar">
            {kelompok.map((grup, i) => (
              <div className="grup" key={i}>
                {grup.map((s) => (
                  <span className="ubin ubin--biru" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="lajur lajur--hijau">
          <h3 className="lajur__judul">
            Kombinasi: <span className="angka">{pilihan.length}</span> pilihan
          </h3>
          <p className="lajur__ket">Urutan tidak penting, jadi AB dan BA dianggap sama.</p>
          <div className="ubin-daftar">
            {pilihan.map((p) => (
              <span className="ubin ubin--hijau" key={p}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="demo__simpulan" aria-live="polite">
        Setiap pilihan kombinasi bisa disusun dalam {faktorialR} cara, sehingga
        {" "}{pilihan.length} × {faktorialR} = {susunan.length} susunan permutasi.
      </p>
    </section>
  );
}
