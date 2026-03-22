import { useState } from 'react'
import './Gallery.css'

const agates = [
  { id: 1, label: 'Alexa Agate Chevron Strand', category: 'Agate', image: '/gemstones/alexa_agate.jpg', shape: 'chevron', color: 'multicolor pastel', size: 'flat tile' },
  { id: 2, label: 'Alexa Agate Round Strand', category: 'Agate', image: '/gemstones/alexa_agate_bead.jpg', shape: 'round', color: 'multicolor pastel', size: '8mm' },
  { id: 3, label: 'Sardonyx Round Strand', category: 'Sardonyx', image: '/sardonyx/IMG_4934.jpeg', shape: 'round', color: 'red-orange', size: '8mm' },
  { id: 4, label: 'Sardonyx Round Strand', category: 'Sardonyx', image: '/sardonyx/IMG_4935.jpeg', shape: 'round', color: 'dark brown-orange', size: '10mm' },
  { id: 5, label: 'Sardonyx Tube Strand', category: 'Sardonyx', image: '/sardonyx/IMG_4936.jpeg', shape: 'tube', color: 'red-orange', size: '8-10mm' },
  { id: 6, label: 'Sardonyx Rondelle Strand', category: 'Sardonyx', image: '/sardonyx/IMG_4937.jpeg', shape: 'rondelle', color: 'red-brown', size: '6-8mm' },
  { id: 7, label: 'Sardonyx Oval Strand', category: 'Sardonyx', image: '/sardonyx/IMG_4938.jpeg', shape: 'oval', color: 'black-red-orange', size: '6-8mm' },
  { id: 8, label: 'Sardonyx Oval Strand', category: 'Sardonyx', image: '/sardonyx/IMG_4939.jpeg', shape: 'oval', color: 'red-orange', size: '5-6mm' },
  { id: 9, label: 'Sardonyx Round Strand', category: 'Sardonyx', image: '/sardonyx/IMG_4941.jpeg', shape: 'round', color: 'red-orange', size: '4-6mm' },
]

const amazonite = [
  { id: 1, label: 'Amazonite Barrel Strand', category: 'Amazonite', image: '/amazonite/IMG_4943.jpeg', shape: 'barrel', color: 'light teal', size: '12-15mm' },
  { id: 2, label: 'Amazonite Chip Strand', category: 'Amazonite', image: '/amazonite/IMG_4944.jpeg', shape: 'chip', color: 'teal', size: '5-8mm' },
  { id: 3, label: 'Amazonite Nugget Strand', category: 'Amazonite', image: '/amazonite/IMG_4945.jpeg', shape: 'nugget', color: 'teal', size: '8-10mm' },
  { id: 4, label: 'Amazonite Oval Strand', category: 'Amazonite', image: '/amazonite/IMG_4946.jpeg', shape: 'oval', color: 'light teal', size: '10-12mm' },
  { id: 5, label: 'Amazonite Rondelle Strand', category: 'Amazonite', image: '/amazonite/IMG_4947.jpeg', shape: 'rondelle', color: 'multicolor', size: '5-6mm' },
  { id: 6, label: 'Amazonite Round Strand', category: 'Amazonite', image: '/amazonite/IMG_4948.jpeg', shape: 'round', color: 'teal', size: '8mm' },
]

const coral = [
  { id: 1, label: 'Coral Cube Strand', category: 'Coral', image: '/coral/IMG_4949.jpeg', shape: 'cube', color: 'red', size: '5mm' },
  { id: 2, label: 'Coral Nugget Strand', category: 'Coral', image: '/coral/IMG_4950.jpeg', shape: 'nugget', color: 'orange-red', size: '10-12mm' },
  { id: 3, label: 'Coral Tube Strand', category: 'Coral', image: '/coral/IMG_4951.jpeg', shape: 'tube', color: 'orange', size: '12-15mm' },
  { id: 4, label: 'Coral Tube Strand', category: 'Coral', image: '/coral/IMG_4952.jpeg', shape: 'tube', color: 'red', size: '8-10mm' },
  { id: 5, label: 'Coral Rondelle Strand', category: 'Coral', image: '/coral/IMG_4953.jpeg', shape: 'rondelle', color: 'white', size: '6-8mm' },
  { id: 6, label: 'Coral Tube Strand', category: 'Coral', image: '/coral/IMG_4954.jpeg', shape: 'tube', color: 'white', size: '8-10mm' },
]

const opals = [
  { id: 1, label: 'Raw Mexican Fire Opal', category: 'Mexican Fire Opal', image: '/gemstones/raw_mexican_fire_opal.jpg', shape: 'rough', color: 'orange-red', size: 'varied' },
  { id: 2, label: 'Mexican Fire Opal Cabochon', category: 'Mexican Fire Opal', image: '/gemstones/mexican_fire_opal_cabochon.jpg', shape: 'cabochon', color: 'orange-red', size: 'varied' },
  { id: 3, label: 'AA Black Opal Faceted Rondelle Strand', category: 'Black Opal', image: '/opals/IMG_4923.jpeg', shape: 'rondelle', color: 'black', size: '6-8mm' },
  { id: 4, label: 'AAT Black Opal Rondelle Strands', category: 'Black Opal', image: '/opals/IMG_4921.jpeg', shape: 'rondelle', color: 'dark multicolor', size: '4-6mm' },
  { id: 5, label: 'White Opal Rondelle Strands', category: 'White Opal', image: '/opals/IMG_4922.jpeg', shape: 'rondelle', color: 'white', size: '3-6mm' },
]

const bracelets = [
  { id: 1, label: '7 Chakra Bracelet', category: 'Healing', image: '/bracelets/7chakra_bracelet.jpg', shape: 'round', color: 'multicolor', size: '8mm' },
  { id: 2, label: 'Amazonite Bracelet', category: 'Calming', image: '/bracelets/amazonite_bracelet.jpg', shape: 'round', color: 'light blue-white', size: '8mm' },
  { id: 3, label: 'Black Tourmalinated Quartz Bracelet', category: 'Protection', image: '/bracelets/black_tourmaline_bracelet.jpg', shape: 'round', color: 'black-white-gray', size: '8mm' },
  { id: 4, label: 'Blue Tiger Eye Bracelet', category: 'Communication', image: '/bracelets/blue_tourmaline_bracelet.jpg', shape: 'round', color: 'dark golden-brown', size: '8mm' },
  { id: 5, label: 'Jade Bracelet', category: 'Balance', image: '/bracelets/jade_bracelet.jpg', shape: 'round', color: 'dark green', size: '10mm' },
  { id: 7, label: 'Pink Quartz Bracelet', category: 'Love', image: '/bracelets/pink_quartz_bracelet.jpg', shape: 'round', color: 'light pink', size: '8mm' },
  { id: 8, label: 'Agate Bracelet', category: 'Grounding', image: '/bracelets/agate_bracelet.jpg', shape: 'round', color: 'white-gray-peach', size: '8mm' },
  { id: 9, label: 'Aventurine Bracelet', category: 'Prosperity', image: '/bracelets/aventurine_bracelet.jpg', shape: 'round', color: 'light green', size: '10mm' },
]

const charms = [
  { id: 1, label: 'Jade Mouse Charm', category: 'Jade', image: '/charms/jade_animal_charms_9pcs.jpg', shape: 'carved animal', color: 'white-celadon', size: '15-20mm' },
  { id: 2, label: 'Jade Pig Charms', category: 'Jade', image: '/charms/jade_animal_charms_group.jpg', shape: 'carved animal', color: 'celadon green', size: '10-12mm' },
  { id: 3, label: 'Jade Chicken Charm', category: 'Jade', image: '/charms/jade_squirrel_pendant.jpg', shape: 'carved animal', color: 'white', size: '15mm' },
  { id: 4, label: 'Jade Rabbit Charms', category: 'Jade', image: '/charms/jade_rabbit_pendants.jpg', shape: 'carved animal', color: 'white', size: '10-12mm' },
  { id: 5, label: 'Jade Fish Charm', category: 'Jade', image: '/charms/jade_fish_charm.jpg', shape: 'carved double fish', color: 'white', size: '20mm' },
  { id: 6, label: 'Jade Assorted Charms', category: 'Jade', image: '/charms/jade_assorted_charms.jpg', shape: 'carved animal', color: 'celadon-white', size: '10-15mm' },
]

const pendants = [
  { id: 1, label: 'Jade Pendant Collection', category: 'Jade', image: '/pendants/jade_pendant_collection.jpg', shape: 'carved', color: 'celadon-white', size: 'varied' },
]

const bangles = [
  { id: 1, label: 'Jade Bangles', category: 'Jade', image: '/bangles/jade_bangles_1.jpg', shape: 'bangle', color: 'celadon-white-lavender', size: 'standard' },
  { id: 2, label: 'Jade Bangles', category: 'Jade', image: '/bangles/jade_bangles_2.jpg', shape: 'bangle', color: 'dark green-gray', size: 'standard' },
]

const pearls = [
  { id: 1, label: 'Freshwater Keshi Pearl Strand', category: 'Pearl', image: '/pearls/pearls_1.jpg', shape: 'keshi', color: 'white', size: 'irregular' },
  { id: 2, label: 'Freshwater Keshi Pearl Strand', category: 'Pearl', image: '/pearls/pearls_2.jpg', shape: 'keshi', color: 'white', size: '2-3mm' },
  { id: 3, label: 'Freshwater Round Pearl Strand', category: 'Pearl', image: '/pearls/fresh_water_pearl.jpg', shape: 'round', color: 'gold', size: '10-12mm' },
]

const gemstones = [
  { id: 1, label: 'Labradorite Round Strand', category: 'Labradorite', image: '/gemstones/labradorite.jpg', shape: 'round', color: 'gray with blue flash', size: '10mm' },
  { id: 2, label: 'Sunstone Round Strand', category: 'Sunstone', image: '/gemstones/sunstones.jpg', shape: 'round', color: 'orange-brown', size: '10mm' },
  { id: 3, label: 'Fluorite Heart Strand', category: 'Fluorite', image: '/gemstones/fluorite.jpg', shape: 'heart', color: 'purple-teal multicolor', size: '10-12mm' },
  { id: 4, label: 'Aquamarine Round Strand', category: 'Aquamarine', image: '/gemstones/aquamarine.jpg', shape: 'round', color: 'blue', size: '10mm' },
  { id: 5, label: 'Kyanite Round Strand', category: 'Kyanite', image: '/gemstones/kyanite.jpg', shape: 'round', color: 'dark blue', size: '10mm' },
]

const turquoise = [
  { id: 1, label: 'Turquoise Oval Strand', category: 'Turquoise', image: '/turquoise/turquoise_1.jpg', shape: 'oval', color: 'bright turquoise blue', size: '8-10mm' },
  { id: 2, label: 'Turquoise Nugget Strand', category: 'Turquoise', image: '/turquoise/turquoise_2.jpg', shape: 'nugget', color: 'turquoise blue with matrix', size: '10-14mm' },
]

const jadeStrands = [
  { id: 1, label: 'Jade Chips Loose', category: 'Jade', image: '/jade/jade_chips_loose.jpg', shape: 'chip', color: 'green', size: 'varied' },
  { id: 2, label: 'Jade Collection Display', category: 'Jade', image: '/jade/jade_collection_display.jpg', shape: 'varied', color: 'green', size: 'varied' },
  { id: 3, label: 'Jade Collection Tray', category: 'Jade', image: '/jade/jade_collection_tray.jpg', shape: 'varied', color: 'green', size: 'varied' },
]

const hematite = [
]

const imperialJasper = [
]

const allSections = [
  { title: 'Crystal Bracelets', subtitle: 'Each bracelet is crafted with authentic natural crystals and stones.', items: bracelets, bg: null },
  { title: 'Jade Charms', subtitle: 'Hand-carved natural jade animal charms.', items: charms, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Jade Pendants', subtitle: 'Elegant hand-carved jade pendants.', items: pendants, bg: null },
  { title: 'Jade Bangles', subtitle: 'Traditional jade bangles in a variety of styles.', items: bangles, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Pearls', subtitle: 'Beautiful natural pearl pieces.', items: pearls, bg: null },
  { title: 'Turquoise', subtitle: 'Natural turquoise pieces.', items: turquoise, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Agate & Sardonyx', subtitle: 'Natural agate and sardonyx stones and beads.', items: agates, bg: null },
  { title: 'Amazonite', subtitle: 'Natural amazonite strands in a variety of shapes and sizes.', items: amazonite, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Coral', subtitle: 'Natural coral strands in white, red, and orange.', items: coral, bg: null },
  { title: 'Opal Collection', subtitle: 'Mexican fire opals, black opals, and white opals — each with their own stunning play of color.', items: opals, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Gemstones', subtitle: 'Labradorite, sunstone, fluorite, and more.', items: gemstones, bg: null },
  { title: 'Jade Strands', subtitle: 'Natural jade strands and Canadian jade in a variety of shapes and sizes.', items: jadeStrands, bg: 'var(--mint, #f0f9f4)' },
  { title: 'Hematite', subtitle: 'Natural hematite strands.', items: hematite, bg: null },
  { title: 'Imperial Jasper', subtitle: 'Natural imperial jasper strands.', items: imperialJasper, bg: 'var(--mint, #f0f9f4)' },
]

function filter(items, query) {
  if (!query) return items
  const q = query.toLowerCase()
  return items.filter(item =>
    item.label.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q) ||
    (item.shape && item.shape.toLowerCase().includes(q)) ||
    (item.color && item.color.toLowerCase().includes(q)) ||
    (item.size && item.size.toLowerCase().includes(q))
  )
}

export default function Gallery({ headerHeight = 80 }) {
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
        </div>
      </section>

      <div className="gallery-search-bar" style={{ top: `${headerHeight}px` }}>
        <div className="container">
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
      </div>

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
                      <img src={item.image} alt={item.label} className="gallery-img" loading="lazy" />
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
