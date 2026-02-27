import './Gallery.css'

const items = [
  { id: 1, label: '7 Chakra Bracelet', category: 'Healing', image: '/bracelets/7chakra_bracelet.jpg' },
  { id: 2, label: 'Amazonite Bracelet', category: 'Calming', image: '/bracelets/amazonite_bracelet.jpg' },
  { id: 3, label: 'Black Tourmaline Bracelet', category: 'Protection', image: '/bracelets/black_tourmaline_bracelet.jpg' },
  { id: 4, label: 'Blue Tourmaline Bracelet', category: 'Communication', image: '/bracelets/blue_tourmaline_bracelet.jpg' },
  { id: 5, label: 'Jade Bracelet', category: 'Balance', image: '/bracelets/jade_bracelet.jpg' },
  { id: 6, label: 'Pink Quartz Bracelet', category: 'Love', image: '/bracelets/pink_quartz_bracelet.jpg' },
  { id: 7, label: 'Agate Bracelet', category: 'Grounding', image: '/bracelets/agate_bracelet.jpg' },
  { id: 8, label: 'Aventurine Bracelet', category: 'Prosperity', image: '/bracelets/aventurine_bracelet.jpg' },
  { id: 9, label: 'Bracelet Collection', category: 'Mixed', image: '/bracelets/collection_bracelets.jpg' },
]

export default function Gallery() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Our Bracelet Collection</h1>
          <div className="divider" style={{ margin: '0.75rem auto 1rem' }} />
          <p>Handcrafted healing crystal bracelets with natural stones.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-note">
            <p>
              Each bracelet is crafted with authentic natural crystals and stones. 
              All stones are carefully selected for their healing properties and beauty. 
              Contact us for custom orders or to inquire about your perfect bracelet match.
            </p>
          </div>

          <div className="gallery-grid">
            {items.map(item => (
              <div key={item.id} className="gallery-card">
                <img 
                  src={item.image} 
                  alt={item.label}
                  className="gallery-img"
                />
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
