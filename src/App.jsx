import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda.jsx";
import Kalkulator from "./pages/Kalkulator.jsx";
import Kuis from "./pages/Kuis.jsx";
import TidakDitemukan from "./pages/TidakDitemukan.jsx";

// App.jsx hanya mengatur jalur (routing) antarhalaman.
export default function App() {
  return (
    <>
      <main id="konten">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/kalkulator" element={<Kalkulator />} />
          <Route path="/kuis" element={<Kuis />} />
          <Route path="*" element={<TidakDitemukan />} />
        </Routes>
      </main>
    </>
  );
}
