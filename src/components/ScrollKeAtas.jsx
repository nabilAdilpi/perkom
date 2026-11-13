import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Mengembalikan posisi halaman ke atas setiap kali berpindah halaman.
export default function ScrollKeAtas() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
