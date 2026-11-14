import { NavLink, Link } from "react-router-dom";
import { useState } from 'react';
import logo from '../assets/logo.png';

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
        <Link to="/" className="logo" aria-label="perkom, ke beranda">
          <img src={logo} alt="perkom-logo" className="logo" width={40} />
          <span className="logo__teks">PerKom</span>
        </Link>
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
