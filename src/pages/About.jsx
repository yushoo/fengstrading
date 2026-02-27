import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <div className="divider" style={{ margin: '0.75rem auto 1rem' }} />
          <p>Over 20 years of quality, trust, and community.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container about-layout">
          <div className="about-text">
            <h2>Our Story</h2>
            <div className="divider" style={{ margin: '0.75rem 0 1.25rem' }} />
            <p>
              Feng's Trading was founded with a single mission: to bring beautiful,
              high-quality beads and gemstones to Houston at prices everyone can
              appreciate. What started as a small family operation has grown into one
              of Houston's most trusted bead shops.
            </p>
            <p>
              Over more than two decades, we have built lasting relationships with
              suppliers around the world, allowing us to offer an extraordinary range
              of gemstones, freshwater pearls, seed beads, and more — all carefully
              inspected before they reach your hands.
            </p>
            <p>
              We serve hobbyists crafting personal jewelry, artisans running their own
              shops, and wholesale buyers alike. No matter your needs, we're here to
              help you find exactly what you're looking for.
            </p>
          </div>
          <div className="about-photo-wrap">
            <img
              src="/dad-sitting.jpg"
              alt="Founder with gemstones"
              className="about-photo"
            />
          </div>
        </div>

        {/* Stats strip */}
        <div className="container about-stats">
          <div className="stat-card">
            <h3>20+</h3>
            <p>Years in Business</p>
          </div>
          <div className="stat-card">
            <h3>100s</h3>
            <p>Bead Varieties</p>
          </div>
          <div className="stat-card">
            <h3>1000s</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-card">
            <h3>HOU</h3>
            <p>Houston, Texas</p>
          </div>
        </div>
      </section>

      {/* Gemshow Booths */}
      <section className="section gemshow-section">
        <div className="container">
          <div className="section-header">
            <h2>We're Not Just a Store</h2>
            <div className="divider" />
            <p>You can also find us at gem and mineral shows around the region.</p>
          </div>
          <div className="gemshow-gallery">
            <div className="gemshow-item">
              <img src="/gemshow.jpg" alt="Feng's Trading gem show booth" className="gemshow-photo" />
              <p className="gemshow-caption">Our Gem Show Booth</p>
            </div>
            <div className="gemshow-item">
              <img src="/gemshow2.jpg" alt="Feng's Trading gem show display" className="gemshow-photo" />
              <p className="gemshow-caption">Quality Gemstones on Display</p>
            </div>
            <div className="gemshow-item">
              <img src="/parents-at-gemshow.jpg" alt="Owners at gem show" className="gemshow-photo" />
              <p className="gemshow-caption">Meet Us at the Shows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values-section">
        <div className="container">
          <div className="section-header">
            <h2>What We Stand For</h2>
            <div className="divider" />
            <p>The values that have guided us for over 20 years.</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality First</h3>
              <p>Every product we carry is selected for beauty, authenticity, and durability. We never compromise on quality.</p>
            </div>
            <div className="value-card">
              <h3>Community Roots</h3>
              <p>We are a Houston family business, deeply connected to the local crafting and jewelry-making community.</p>
            </div>
            <div className="value-card">
              <h3>Fair Pricing</h3>
              <p>Beautiful beads shouldn't break the bank. We keep our prices fair for both hobbyists and wholesale buyers.</p>
            </div>
            <div className="value-card">
              <h3>Friendly Service</h3>
              <p>We treat every customer like family. Our knowledgeable staff is always ready to help you find what you need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Come visit us in Houston</h2>
          <p>We'd love to welcome you to the store.</p>
          <Link to="/contact" className="btn btn-primary">Find Us</Link>
        </div>
      </section>
    </>
  )
}
