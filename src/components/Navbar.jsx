import { NavLink, Link } from "react-router-dom";
import { useState } from 'react';

// const menu = [
//   { ke: "/", label: "Beranda" },
//   { ke: "/kalkulator", label: "Kalkulator" },
//   { ke: "/kuis", label: "Kuis" },
// ];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="navbar">
      <a className="lompat" href="#konten">
        Lewati ke konten
      </a>
      <div className="navbar__isi">
        <Link to="/" className="logo" aria-label="Susun dan Pilih, ke beranda">
          <span className="logo__ubin logo__ubin--biru">P</span>
          <span className="logo__ubin logo__ubin--hijau">K</span>
          <span className="logo__teks">PerKom</span>
        </Link>
        {/* <nav aria-label="Menu utama">
          <ul className="navbar__menu">
            {menu.map((item) => (
              <li key={item.ke}>
                <NavLink
                  to={item.ke}
                  end={item.ke === "/"}
                  className={({ isActive }) =>
                    "navbar__tautan" + (isActive ? " navbar__tautan--aktif" : "")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav> */}
        <button className='nav-toggle' onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>Beranda</NavLink>
          </li>
          <li>
            <NavLink to="/kalkulator" onClick={() => setIsOpen(false)}>Kalkulator</NavLink>
          </li>
          <li>
            <NavLink to="/kuis" onClick={() => setIsOpen(false)}>Kuis</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
