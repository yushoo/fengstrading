import './Gallery.css'

const items = [
  { id: 1, label: 'Amethyst Rounds', category: 'Gemstones', bg: '#9b59b6' },
  { id: 2, label: 'Freshwater Pearls', category: 'Pearls', bg: '#f0e8d8' },
  { id: 3, label: 'Turquoise Chips', category: 'Gemstones', bg: '#1abc9c' },
  { id: 4, label: 'Rose Quartz', category: 'Gemstones', bg: '#f4a7b9' },
  { id: 5, label: 'Tiger Eye', category: 'Gemstones', bg: '#c0874f' },
  { id: 6, label: 'Lapis Lazuli', category: 'Gemstones', bg: '#2e4593' },
  { id: 7, label: 'Pearl Strands', category: 'Pearls', bg: '#e8dcc8' },
  { id: 8, label: 'Mixed Seed Beads', category: 'Beads', bg: '#e8a87c' },
  { id: 9, label: 'Jade Rounds', category: 'Gemstones', bg: '#5dab6e' },
  { id: 10, label: 'Carnelian', category: 'Gemstones', bg: '#cf4f1e' },
  { id: 11, label: 'Labradorite', category: 'Gemstones', bg: '#7f8fa6' },
  { id: 12, label: 'Crystal Beads', category: 'Beads', bg: '#b8c6db' },
]

export default function Gallery() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Our Gallery</h1>
          <div className="divider" style={{ margin: '0.75rem auto 1rem' }} />
          <p>Gemstones, pearls, and beads from around the world.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-note">
            <p>
              Our inventory is always changing. Visit us in store or contact us directly
              to ask about specific stones and availability.
            </p>
          </div>

          <div className="gallery-grid">
            {items.map(item => (
              <div key={item.id} className="gallery-card">
                {/* Replace the div below with an <img> tag when you have real photos */}
                <div
                  className="gallery-img-placeholder"
                  style={{ backgroundColor: item.bg }}
                >
                  <span className="placeholder-gem">✦</span>
                </div>
                <div className="gallery-card-info">
                  <h4>{item.label}</h4>
                  <span className="gallery-tag">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
