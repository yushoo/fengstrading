import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <NavLink to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <div className="logo-badge">
            <img src="/fengs_trading_logo.jpg" alt="Feng's Trading logo" className="logo-img" />
          </div>
          <div className="logo-text">
            <span className="logo-main">Feng's Trading</span>
            <span className="logo-tagline">Beads · Gems · Minerals</span>
          </div>
        </NavLink>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink></li>
          <li><NavLink to="/builder" onClick={() => setMenuOpen(false)}>Webmaster</NavLink></li>
          <li>
            <NavLink to="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
