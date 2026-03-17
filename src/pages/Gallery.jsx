import { useState } from 'react'
import './Gallery.css'

const agates = [
  { id: 1, label: 'Alexa Agate', category: 'Agate', image: '/gemstones/alexa_agate.jpg' },
  { id: 2, label: 'Alexa Agate Bead', category: 'Agate', image: '/gemstones/alexa_agate_bead.jpg' },
]

const opals = [
  { id: 1, label: 'Raw Mexican Fire Opal', category: 'Mexican Fire Opal', image: '/gemstones/raw_mexican_fire_opal.jpg' },
  { id: 2, label: 'Mexican Fire Opal Cabochon', category: 'Mexican Fire Opal', image: '/gemstones/mexican_fire_opal_cabochon.jpg' },
  { id: 3, label: 'AA Black Opal Strand', category: 'Black Opal', image: '/opals/IMG_4923.jpeg' },
  { id: 4, label: 'AAT Black Opal Strands', category: 'Black Opal', image: '/opals/IMG_4921.jpeg' },
  { id: 5, label: 'White Opal Strands', category: 'White Opal', image: '/opals/IMG_4922.jpeg' },
]

const bracelets = [
  { id: 1, label: '7 Chakra Bracelet', category: 'Healing', image: '/bracelets/7chakra_bracelet.jpg' },
  { id: 2, label: 'Amazonite Bracelet', category: 'Calming', image: '/bracelets/amazonite_bracelet.jpg' },
  { id: 3, label: 'Black Tourmaline Bracelet', category: 'Protection', image: '/bracelets/black_tourmaline_bracelet.jpg' },
  { id: 4, label: 'Blue Tourmaline Bracelet', category: 'Communication', image: '/bracelets/blue_tourmaline_bracelet.jpg' },
  { id: 5, label: 'Jade Bracelet', category: 'Balance', image: '/bracelets/jade_bracelet.jpg' },
  { id: 7, label: 'Pink Quartz Bracelet', category: 'Love', image: '/bracelets/pink_quartz_bracelet.jpg' },
  { id: 8, label: 'Agate Bracelet', category: 'Grounding', image: '/bracelets/agate_bracelet.jpg' },
  { id: 9, label: 'Aventurine Bracelet', category: 'Prosperity', image: '/bracelets/aventurine_bracelet.jpg' },
]

const charms = [
  { id: 1, label: 'Jade Mouse Charm', category: 'Jade', image: '/charms/jade_animal_charms_9pcs.jpg' },
  { id: 2, label: 'Jade Pig Charms', category: 'Jade', image: '/charms/jade_animal_charms_group.jpg' },
  { id: 3, label: 'Jade Chicken Charm', category: 'Jade', image: '/charms/jade_squirrel_pendant.jpg' },
  { id: 4, label: 'Jade Rabbit Charms', category: 'Jade', image: '/charms/jade_rabbit_pendants.jpg' },
  { id: 5, label: 'Jade Fish Charm', category: 'Jade', image: '/charms/jade_fish_charm.jpg' },
  { id: 6, label: 'Jade Assorted Charms', category: 'Jade', image: '/charms/jade_assorted_charms.jpg' },
]

const pendants = [
  { id: 1, label: 'Jade Pendant Collection', category: 'Jade', image: '/pendants/jade_pendant_collection.jpg' },
]

const bangles = [
  { id: 1, label: 'Jade Bangles', category: 'Jade', image: '/bangles/jade_bangles_1.jpg' },
  { id: 2, label: 'Jade Bangles', category: 'Jade', image: '/bangles/jade_bangles_2.jpg' },
]

const pearls = [
  { id: 1, label: 'Pearl Collection', category: 'Pearl', image: '/pearls/pearls_1.jpg' },
  { id: 2, label: 'Pearl Collection', category: 'Pearl', image: '/pearls/pearls_2.jpg' },
  { id: 3, label: 'Fresh Water Pearl', category: 'Pearl', image: '/pearls/fresh_water_pearl.jpg' },
]

const gemstones = [
  { id: 1, label: 'Labradorite', category: 'Labradorite', image: '/gemstones/labradorite.jpg' },
  { id: 2, label: 'Sunstone', category: 'Sunstone', image: '/gemstones/sunstones.jpg' },
  { id: 3, label: 'Fluorite', category: 'Fluorite', image: '/gemstones/fluorite.jpg' },
  { id: 4, label: 'Aquamarine', category: 'Aquamarine', image: '/gemstones/aquamarine.jpg' },
  { id: 5, label: 'Kyanite', category: 'Kyanite', image: '/gemstones/kyanite.jpg' },
]

const turquoise = [
  { id: 1, label: 'Turquoise', category: 'Turquoise', image: '/turquoise/turquoise_1.jpg' },
  { id: 2, label: 'Turquoise', category: 'Turquoise', image: '/turquoise/turquoise_2.jpg' },
]

const allSections = [
  { title: 'Crystal Bracelets', subtitle: 'Each bracelet is crafted with authentic natural crystals and stones.', items: bracelets, bg: null },
  { title: 'Jade Charms', subtitle: 'Hand-carved natural jade animal charms.', items: charms, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Jade Pendants', subtitle: 'Elegant hand-carved jade pendants.', items: pendants, bg: null },
  { title: 'Jade Bangles', subtitle: 'Traditional jade bangles in a variety of styles.', items: bangles, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Pearls', subtitle: 'Beautiful natural pearl pieces.', items: pearls, bg: null },
  { title: 'Turquoise', subtitle: 'Natural turquoise pieces.', items: turquoise, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Agate', subtitle: 'Natural agate stones and beads.', items: agates, bg: null },
  { title: 'Opal Collection', subtitle: 'Mexican fire opals, black opals, and white opals — each with their own stunning play of color.', items: opals, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Gemstones', subtitle: 'Labradorite, sunstone, fluorite, and more.', items: gemstones, bg: null },
]

function filter(items, query) {
  if (!query) return items
  const q = query.toLowerCase()
  return items.filter(item =>
    item.label.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
  )
}

export default function Gallery() {
  const [query, setQuery] = useState('')

  const filtered = allSections
    .map(section => ({ ...section, items: filter(section.items, query) }))
    .filter(section => section.items.length > 0)

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Our Collection</h1>
          <div className="divider" style={{ margin: '0.75rem auto 1rem' }} />
          <p>Handcrafted bracelets, jade charms, bangles, pearls, and more. More images coming soon!</p>
          <div className="gallery-search">
            <input
              type="text"
              placeholder="Search items..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="gallery-search-input"
            />
            {query && (
              <button className="gallery-search-clear" onClick={() => setQuery('')}>✕</button>
            )}
          </div>
        </div>
      </section>

      {filtered.length === 0 ? (
        <section className="section">
          <div className="container" style={{ textAlign: 'center', color: 'var(--text-light)' }}>
            <p>No items found for <strong>{query}</strong></p>
          </div>
        </section>
      ) : (
        filtered.map((section) => (
          <section
            key={section.title}
            className="section"
            style={section.bg ? { background: section.bg, paddingTop: '3rem', paddingBottom: '3rem' } : {}}
          >
            <div className="container">
              <div className="gallery-section-layout">
                <div className="gallery-section-label">
                  <h2>{section.title}</h2>
                  {section.subtitle && <p>{section.subtitle}</p>}
                </div>
                <div className="gallery-grid">
                  {section.items.map(item => (
                    <div key={item.id} className="gallery-card">
                      <img src={item.image} alt={item.label} className="gallery-img" />
                      <div className="gallery-card-info">
                        <h4>{item.label}</h4>
                        <span className="gallery-tag">{item.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))
      )}
    </>
  )
}
