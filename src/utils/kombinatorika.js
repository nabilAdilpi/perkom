// Semua perhitungan memakai BigInt agar hasil besar tetap tepat.

export function faktorial(n) {
  let hasil = 1n;
  for (let i = 2n; i <= BigInt(n); i++) hasil *= i;
  return hasil;
}

// P(n, r) = n! / (n - r)!
export function permutasi(n, r) {
  if (r > n) return 0n;
  let hasil = 1n;
  for (let i = 0; i < r; i++) hasil *= BigInt(n - i);
  return hasil;
}

// C(n, r) = n! / (r! (n - r)!)
export function kombinasi(n, r) {
  if (r > n) return 0n;
  const k = Math.min(r, n - r);
  let hasil = 1n;
  for (let i = 1; i <= k; i++) {
    hasil = (hasil * BigInt(n - k + i)) / BigInt(i);
  }
  return hasil;
}

// n! / (k1! × k2! × ...) untuk unsur yang sama
export function permutasiUnsurSama(n, banyakTiapUnsur) {
  let pembagi = 1n;
  for (const k of banyakTiapUnsur) pembagi *= faktorial(k);
  return faktorial(n) / pembagi;
}

// (n - 1)!
export function permutasiSiklis(n) {
  return faktorial(n - 1);
}

export function formatAngka(nilai) {
  return nilai.toLocaleString("id-ID");
}

// Menulis n × (n-1) × ... sebanyak r suku, dipersingkat bila panjang.
export function tulisDeret(n, r) {
  if (r === 0) return "1";
  const suku = [];
  for (let i = 0; i < r; i++) suku.push(n - i);
  if (suku.length > 6) {
    return `${suku.slice(0, 3).join(" × ")} × … × ${suku[suku.length - 1]}`;
  }
  return suku.join(" × ");
}

// Daftar semua susunan r unsur (urutan diperhatikan)
export function daftarPermutasi(unsur, r) {
  const hasil = [];
  const dipakai = Array(unsur.length).fill(false);
  const saatIni = [];
  function telusuri() {
    if (saatIni.length === r) {
      hasil.push(saatIni.join(""));
      return;
    }
    for (let i = 0; i < unsur.length; i++) {
      if (dipakai[i]) continue;
      dipakai[i] = true;
      saatIni.push(unsur[i]);
      telusuri();
      saatIni.pop();
      dipakai[i] = false;
    }
  }
  telusuri();
  return hasil;
}

// Daftar semua pilihan r unsur (urutan tidak diperhatikan)
export function daftarKombinasi(unsur, r) {
  const hasil = [];
  const saatIni = [];
  function telusuri(mulai) {
    if (saatIni.length === r) {
      hasil.push(saatIni.join(""));
      return;
    }
    for (let i = mulai; i < unsur.length; i++) {
      saatIni.push(unsur[i]);
      telusuri(i + 1);
      saatIni.pop();
    }
  }
  telusuri(0);
  return hasil;
}

export function urutkanHuruf(teks) {
  return teks.split("").sort().join("");
}
