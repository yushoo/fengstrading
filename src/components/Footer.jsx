import { Link } from 'react-router-dom'
import './Footer.css'

function TikTokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-brand">
          <h3>Feng&apos;s Trading</h3>
          <p>Better Service • Better Quality</p>
          <p className="footer-tagline">Houston&apos;s trusted importer &amp; wholesaler of beads, gemstones, and pearls for over 20 years.</p>
          <div className="footer-social">
            <a href="https://www.tiktok.com/@fengs.trading" target="_blank" rel="noreferrer" aria-label="TikTok">
              <TikTokIcon />
            </a>
            <a href="https://www.facebook.com/fengs.trading" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
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
