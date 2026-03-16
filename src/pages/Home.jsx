import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-blob-1" />
        <div className="hero-blob-2" />
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-label-pill">
              <span>✨</span> Importer &amp; Wholesaler · Open to Public
            </div>
            <h1>
              Houston&apos;s Home for<br />
              <em>Beads, Gems</em> &amp;<br />
              <span className="hero-red">Fine Minerals</span>
            </h1>
            <p className="hero-sub">
              Feng&apos;s Trading has served Houston&apos;s bead and gem community for
              over 20 years — with thousands of gemstones, pearls, findings,
              and crystals all under one roof.
            </p>
            <div className="hero-btns">
              <Link to="/gallery" className="btn btn-primary">View Gallery</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-bg-logo-container">
              <img src="/fengs_trading_logo.jpg" alt="Feng's Trading logo" className="hero-bg-logo-full" />
            </div>
            <div className="hero-logo-card hero-large">
              <img src="/parents-at-gemshow.jpg" alt="Feng's Trading family owners" className="hero-family-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Wave: hero → features */}
      <div className="wave-divider" style={{ background: 'var(--mint)' }}>
        <svg viewBox="0 0 1200 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '50px', width: '100%', display: 'block' }}>
          <path d="M0,20 C300,50 900,0 1200,30 L1200,0 L0,0 Z" fill="var(--cream)" />
        </svg>
      </div>

      {/* ── Features ── */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Feng&apos;s Trading?</h2>
            <div className="divider" />
            <p>Over two decades of quality and trust in Houston&apos;s bead community.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">💎</span>
              <div className="feature-tag">Gemstones</div>
              <h3>Gemstones &amp; Minerals</h3>
              <p>Amethyst, turquoise, jade, lapis, crystals, rocks, and hundreds more — all handpicked.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🪡</span>
              <div className="feature-tag">Beads &amp; Pearls</div>
              <h3>Beads, Pearls &amp; Findings</h3>
              <p>Freshwater pearls, seed beads, jewelry findings, and accessories sourced worldwide.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🤝</span>
              <div className="feature-tag">Wholesale</div>
              <h3>Wholesale &amp; Retail</h3>
              <p>Importer and wholesaler open to the public. Great pricing for hobbyists and shop owners alike.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave: features → gallery */}
      <div className="wave-divider" style={{ background: 'var(--warm-white)' }}>
        <svg viewBox="0 0 1200 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '50px', width: '100%', display: 'block' }}>
          <path d="M0,30 C400,0 800,50 1200,20 L1200,0 L0,0 Z" fill="var(--mint)" />
        </svg>
      </div>

      {/* ── Gallery Preview ── */}
      <section className="gallery-preview-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Collection</h2>
            <div className="divider" />
            <p>A small glimpse into what we carry in store.</p>
          </div>
          <div className="preview-grid">
            <div className="preview-card">
              <img src="/bracelets/collection_bracelets.jpg" alt="Crystal Bracelets" className="preview-card-img" />
              <div className="preview-label">Crystal Bracelets</div>
            </div>
            <div className="preview-card">
              <img src="/charms/jade_assorted_charms.jpg" alt="Jade Charms" className="preview-card-img" />
              <div className="preview-label">Jade Charms</div>
            </div>
            <div className="preview-card">
              <img src="/pearls/pearls_1.jpg" alt="Pearls" className="preview-card-img" />
              <div className="preview-label">Pearls</div>
            </div>
            <div className="preview-card">
              <img src="/turquoise/turquoise_1.jpg" alt="Turquoise" className="preview-card-img" />
              <div className="preview-label">Turquoise</div>
            </div>
          </div>
          <div className="preview-cta">
            <Link to="/gallery" className="btn btn-outline">See Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* Wave: gallery → about */}
      <div className="wave-divider" style={{ background: 'var(--amber-light)' }}>
        <svg viewBox="0 0 1200 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '50px', width: '100%', display: 'block' }}>
          <path d="M0,15 C300,45 900,5 1200,35 L1200,0 L0,0 Z" fill="var(--warm-white)" />
        </svg>
      </div>

      {/* ── About Snippet ── */}
      <section className="about-snippet-section">
        <div className="container about-snippet-inner">
          <div className="about-snippet-text">
            <h2>A Houston Tradition</h2>
            <div className="pill-divider">
              <span className="pill-divider-line" />
              <span>🐎</span>
              <span className="pill-divider-line" />
            </div>
            <p>
              Feng&apos;s Trading has been serving bead enthusiasts, jewelry makers, and
              professional shop owners in Houston, Texas for over 20 years. We believe
              in providing only the finest quality gemstones and beads, backed by
              friendly, knowledgeable service.
            </p>
            <p style={{ marginTop: '1rem' }}>
              From casual hobbyists to wholesale buyers, we welcome everyone through our doors.
            </p>
            <div className="about-badges">
              <span className="badge badge-jade">💚 Since 2000</span>
              <span className="badge badge-red">🐎 Houston Local</span>
              <span className="badge badge-amber">⭐ Open to Public</span>
            </div>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '1.75rem' }}>
              Our Story
            </Link>
          </div>
          <div className="about-snippet-visual">
            <img
              src="/shop-overview.jpg"
              alt="Inside Feng's Trading store"
              className="snippet-photo"
            />
          </div>
        </div>
      </section>

      {/* ── Family Photo ── */}
      <section className="family-section">
        <div className="container family-inner">
          <div className="family-content">
            <h2>A Family Business Built on Passion</h2>
            <div className="pill-divider">
              <span className="pill-divider-line" />
              <span>❤️</span>
              <span className="pill-divider-line" />
            </div>
            <p>
              What started as a passion for beautiful gemstones and crystals has 
              grown into a thriving family business. At Feng&apos;s Trading, we&apos;re proud
              to share our love for quality beads and minerals with the Houston community.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Our family&apos;s dedication to excellence has made us a trusted destination 
              for bead enthusiasts and jewelry makers for over two decades.
            </p>
          </div>
          <div className="family-photo">
            <img
              src="/parents.jpg"
              alt="Feng's Trading family at the store"
              className="parents-photo"
            />
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="cta-overlay" />
        <div className="cta-inner container">
          <h2>Ready to find your perfect beads?</h2>
          <p>Visit us in Houston or get in touch today.</p>
          <Link to="/contact" className="btn btn-amber">Get in Touch</Link>
        </div>
      </section>

      {/* ── Visit Us ── */}
      <section className="visit-section">
        <div className="container visit-inner">
          <div className="visit-photo">
            <img
              src="/store-front-2.jpg"
              alt="Feng's Trading storefront"
            />
          </div>
          <div className="visit-info">
            <h2>Come Visit Us</h2>
            <div className="pill-divider">
              <span className="pill-divider-line" />
              <span>📍</span>
              <span className="pill-divider-line" />
            </div>
            <p>
              Drop by our Houston store — we&apos;d love to see you in person.
              Browse thousands of beads, gems, and minerals, and let our team
              help you find exactly what you&apos;re looking for.
            </p>
            <div className="visit-details">
              <div className="visit-detail-row">
                <div className="visit-detail-icon">📍</div>
                <span>9889 Bellaire Blvd Suite 108, Houston, TX 77036</span>
              </div>
              <div className="visit-detail-row">
                <div className="visit-detail-icon">🕐</div>
                <span>Mon–Sat: 10 AM – 6 PM · Sun: 12 PM – 5 PM</span>
              </div>
              <div className="visit-detail-row">
                <div className="visit-detail-icon">📞</div>
                <span>(713) 272-8886</span>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary">Get Directions</Link>
          </div>
        </div>
      </section>
    </>
  )
}
