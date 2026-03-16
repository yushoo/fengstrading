import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-brand">
          <h3>Feng&apos;s Trading</h3>
          <p>Better Service • Better Quality</p>
          <p className="footer-tagline">Houston&apos;s trusted importer &amp; wholesaler of beads, gemstones, and pearls for over 20 years.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <p>📍 Houston, TX</p>
          <p>📞 <a href="tel:7133399632">(713) 339-9632</a></p>
          <p>✉️ <a href="mailto:info@b2bead.com">info@b2bead.com</a></p>
          <p>🌐 <a href="https://www.b2bead.com" target="_blank" rel="noreferrer">www.b2bead.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Feng&apos;s Trading. All rights reserved.</p>
      </div>
    </footer>
  )
}
