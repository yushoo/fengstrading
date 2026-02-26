import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="hero-label">~ Importer & Wholesaler · Open to Public ~</p>
          <h1>Welcome to<br />Feng's Trading</h1>
          <p className="hero-sub">
            Houston's trusted source for beads, jewelry, gemstones, minerals,
            findings, crystals, and pearls. Better Service • Better Quality.
          </p>
          <div className="hero-btns">
            <Link to="/gallery" className="btn btn-primary">View Gallery</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Feng's Trading?</h2>
            <div className="divider" />
            <p>Over two decades of quality and trust in Houston's bead community.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Gemstones & Minerals</h3>
              <p>Amethyst, turquoise, jade, lapis, crystals, rocks, and hundreds more — all handpicked.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🪡</div>
              <h3>Beads, Pearls & Findings</h3>
              <p>Freshwater pearls, seed beads, jewelry findings, and accessories sourced worldwide.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Wholesale & Retail</h3>
              <p>Importer and wholesaler open to the public. Great pricing for hobbyists and shop owners alike.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section gallery-preview-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Collection</h2>
            <div className="divider" />
            <p>A small glimpse into what we carry in store.</p>
          </div>
          <div className="preview-grid">
            <div className="preview-card amethyst">
              <div className="preview-overlay">
                <span>Amethyst</span>
              </div>
            </div>
            <div className="preview-card turquoise">
              <div className="preview-overlay">
                <span>Turquoise</span>
              </div>
            </div>
            <div className="preview-card pearls">
              <div className="preview-overlay">
                <span>Pearls</span>
              </div>
            </div>
            <div className="preview-card mixed">
              <div className="preview-overlay">
                <span>Mixed Beads</span>
              </div>
            </div>
          </div>
          <div className="preview-cta">
            <Link to="/gallery" className="btn btn-outline">See Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section about-snippet-section">
        <div className="container about-snippet-inner">
          <div className="about-snippet-text">
            <h2>A Houston Tradition</h2>
            <div className="divider" style={{ margin: '0.75rem 0 1rem' }} />
            <p>
              Feng's Trading has been serving bead enthusiasts, jewelry makers, and
              professional shop owners in Houston, Texas for over 20 years. We believe
              in providing only the finest quality gemstones and beads, backed by
              friendly, knowledgeable service.
            </p>
            <p style={{ marginTop: '1rem' }}>
              From casual hobbyists to wholesale buyers, we welcome everyone through our doors.
            </p>
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

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to find your perfect beads?</h2>
          <p>Visit us in Houston or get in touch today.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
