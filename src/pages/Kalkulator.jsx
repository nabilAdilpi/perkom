import { useMemo, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollKeAtas from "../components/ScrollKeAtas.jsx";
import LangkahHitung from "../components/LangkahHitung.jsx";
import DaftarUbin from "../components/DaftarUbin.jsx";
import {
  faktorial,
  permutasi,
  kombinasi,
  permutasiUnsurSama,
  permutasiSiklis,
  formatAngka,
  tulisDeret,
  daftarPermutasi,
  daftarKombinasi,
} from "../utils/kombinatorika.js";

const MODE = [
  { id: "permutasi", label: "Permutasi", nada: "biru" },
  { id: "kombinasi", label: "Kombinasi", nada: "hijau" },
  { id: "unsur", label: "Unsur sama", nada: "biru" },
  { id: "siklis", label: "Siklis", nada: "biru" },
];

const BATAS_N = 100;
const BATAS_DAFTAR = 150;
const ABJAD = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function ke_bilangan(teks) {
  if (teks.trim() === "") return NaN;
  const angka = Number(teks);
  return Number.isInteger(angka) ? angka : NaN;
}

function hitung(mode, nTeks, rTeks, kata) {
  if (mode === "unsur") {
    const bersih = kata.trim().toUpperCase().replace(/\s+/g, "");
    if (!bersih) return { galat: "Ketik sebuah kata, misalnya KATAK." };
    if (!/^[A-Z]+$/.test(bersih)) return { galat: "Gunakan huruf A sampai Z saja." };
    if (bersih.length > 25) return { galat: "Maksimal 25 huruf." };

    const hitungan = {};
    for (const h of bersih) hitungan[h] = (hitungan[h] || 0) + 1;
    const n = bersih.length;
    const ulang = Object.values(hitungan).filter((k) => k > 1);
    const pembagi = ulang.length ? ulang.map((k) => `${k}!`).join(" × ") : "1";
    const hasil = permutasiUnsurSama(n, Object.values(hitungan));
    const penyebut = ulang.reduce((a, k) => a * faktorial(k), 1n);

    return {
      hasil,
      nada: "biru",
      satuan: "susunan berbeda",
      hitungan,
      langkah: [
        { label: "Rumus", isi: "n! / (k₁! × k₂! × …)" },
        { label: "Substitusi", isi: `${n}! / ${ulang.length > 1 ? `(${pembagi})` : pembagi}` },
        { label: "Hitung", isi: `${formatAngka(faktorial(n))} / ${formatAngka(penyebut)}` },
        { label: "Hasil", isi: formatAngka(hasil) },
      ],
    };
  }

  const n = ke_bilangan(nTeks);
  if (Number.isNaN(n)) return { galat: "Isi n dengan bilangan bulat." };
  if (n < (mode === "siklis" ? 1 : 0)) return { galat: "n tidak boleh kurang dari " + (mode === "siklis" ? "1." : "0.") };
  if (n > BATAS_N) return { galat: `n maksimal ${BATAS_N}.` };

  if (mode === "siklis") {
    const hasil = permutasiSiklis(n);
    return {
      hasil,
      nada: "biru",
      satuan: "susunan melingkar",
      langkah: [
        { label: "Rumus", isi: "P_siklis(n) = (n − 1)!" },
        { label: "Substitusi", isi: `(${n} − 1)! = ${n - 1}!` },
        { label: "Hasil", isi: formatAngka(hasil) },
      ],
    };
  }

  const r = ke_bilangan(rTeks);
  if (Number.isNaN(r)) return { galat: "Isi r dengan bilangan bulat." };
  if (r < 0) return { galat: "r tidak boleh negatif." };
  if (r > n) return { galat: "r tidak boleh lebih besar dari n." };

  if (mode === "permutasi") {
    const hasil = permutasi(n, r);
    return {
      hasil,
      n,
      r,
      nada: "biru",
      satuan: "susunan",
      langkah: [
        { label: "Rumus", isi: "P(n, r) = n! / (n − r)!" },
        { label: "Substitusi", isi: `P(${n}, ${r}) = ${n}! / ${n - r}!` },
        { label: "Sederhanakan", isi: tulisDeret(n, r) },
        { label: "Hasil", isi: formatAngka(hasil) },
      ],
    };
  }

  const hasil = kombinasi(n, r);
  return {
    hasil,
    n,
    r,
    nada: "hijau",
    satuan: "pilihan",
    langkah: [
      { label: "Rumus", isi: "C(n, r) = n! / (r! × (n − r)!)" },
      { label: "Substitusi", isi: `C(${n}, ${r}) = ${n}! / (${r}! × ${n - r}!)` },
      { label: "Sederhanakan", isi: `(${tulisDeret(n, r)}) / (${tulisDeret(r, r)})` },
      { label: "Hasil", isi: formatAngka(hasil) },
    ],
  };
}

export default function Kalkulator() {
  const [mode, setMode] = useState("permutasi");
  const [n, setN] = useState("5");
  const [r, setR] = useState("3");
  const [kata, setKata] = useState("KATAK");

  const hasil = useMemo(() => hitung(mode, n, r, kata), [mode, n, r, kata]);
  const modeAktif = MODE.find((m) => m.id === mode);

  // Daftar ubin hanya ditampilkan bila jumlahnya kecil.
  const daftar = useMemo(() => {
    if (hasil.galat || hasil.n === undefined || hasil.r < 1) return null;
    if (hasil.n > 8 || hasil.hasil > BigInt(BATAS_DAFTAR)) return null;
    const huruf = ABJAD.slice(0, hasil.n);
    return mode === "permutasi"
      ? daftarPermutasi(huruf, hasil.r)
      : daftarKombinasi(huruf, hasil.r);
  }, [hasil, mode]);

  return (
    <>
      <section className="wadah bagian">
        <ScrollKeAtas />
        <Navbar />
        <h1 className="bagian__judul">Kalkulator permutasi dan kombinasi</h1>
        <p className="bagian__intro">
          Pilih jenis hitungan, isi angkanya, dan lihat langkah penyelesaiannya.
        </p>

        <div className="segmen-baris" role="group" aria-label="Jenis hitungan">
          {MODE.map((m) => (
            <button
              key={m.id}
              type="button"
              aria-pressed={mode === m.id}
              className={
                "segmen segmen--" + m.nada + (mode === m.id ? " segmen--aktif" : "")
              }
              onClick={() => setMode(m.id)}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="kalkulator">
          <div className="kalkulator__masukan">
            {mode === "unsur" ? (
              <div className="isian">
                <label htmlFor="kata">Kata</label>
                <input
                  id="kata"
                  type="text"
                  value={kata}
                  onChange={(e) => setKata(e.target.value)}
                  autoComplete="off"
                  spellCheck="false"
                />
                <p className="isian__bantu">Contoh: KATAK, MATEMATIKA, MISSISSIPPI.</p>
              </div>
            ) : (
              <>
                <div className="isian">
                  <label htmlFor="n">
                    n (banyak unsur{mode === "siklis" ? "" : " seluruhnya"})
                  </label>
                  <input
                    id="n"
                    type="number"
                    inputMode="numeric"
                    min={mode === "siklis" ? 1 : 0}
                    max={BATAS_N}
                    value={n}
                    onChange={(e) => setN(e.target.value)}
                  />
                </div>
                {mode !== "siklis" && (
                  <div className="isian">
                    <label htmlFor="r">r (banyak unsur yang diambil)</label>
                    <input
                      id="r"
                      type="number"
                      inputMode="numeric"
                      min={0}
                      max={BATAS_N}
                      value={r}
                      onChange={(e) => setR(e.target.value)}
                    />
                  </div>
                )}
              </>
            )}
            <p className="kalkulator__petunjuk">
              {mode === "permutasi" && "Dipakai saat urutan penting."}
              {mode === "kombinasi" && "Dipakai saat urutan tidak penting."}
              {mode === "unsur" && "Dipakai saat ada huruf atau benda yang kembar."}
              {mode === "siklis" && "Dipakai saat unsur disusun melingkar."}
            </p>
          </div>

          <div className={`kalkulator__hasil kalkulator__hasil--${hasil.nada || modeAktif.nada}`} aria-live="polite">
            {hasil.galat ? (
              <p className="galat" role="alert">{hasil.galat}</p>
            ) : (
              <>
                <p className="hasil-besar">
                  <span className="hasil-besar__angka">{formatAngka(hasil.hasil)}</span>
                  <span className="hasil-besar__satuan">{hasil.satuan}</span>
                </p>

                {hasil.hitungan && (
                  <p className="hitungan">
                    Banyak tiap huruf:{" "}
                    {Object.entries(hasil.hitungan).map(([huruf, jml]) => (
                      <span className="chip" key={huruf}>
                        {huruf} × {jml}
                      </span>
                    ))}
                  </p>
                )}

                <LangkahHitung langkah={hasil.langkah} />
              </>
            )}
          </div>
        </div>

        {daftar && (
          <div className="daftar-wadah">
            <h2 className="daftar-wadah__judul">
              Semua {hasil.satuan} dari huruf {ABJAD.slice(0, hasil.n).join(", ")}
            </h2>
            <DaftarUbin item={daftar} nada={mode === "permutasi" ? "biru" : "hijau"} />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
