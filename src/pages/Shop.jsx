import './Shop.css'
import BuyButton from '../components/BuyButton'

// Bracelet products published to the Buy Button channel (Oct 2026).
// Each button renders its product's image, title, price and add-to-cart
// from Shopify - this list only controls which products appear and in
// what order.
const PRODUCTS = [
  '14781101605227', // 7 Chakra 8mm Bracelet
  '14827648778603', // Agate 8mm Bracelet
  '14781101932907', // Amazonite 8mm Bracelet
  '14827649106283', // Amethyst 8mm Bracelet
  '14827648581995', // Aventurine 8mm Bracelet
  '14781102063979', // Black Tourmalated Quartz 8mm Bracelet
  '14781101867371', // Blue Tiger Eye 8mm
  '14781101539691', // Dark Green Jade 8mm Bracelet
  '14781101769067', // Pink Quartz 8mm Bracelet
  '14827649007979', // Red Tiger Eye 8mm Bracelet
]

export default function Shop() {
  return (
    <div className="shop-page">
      <div className="container">
        <h1>Shop Bracelets</h1>
        <p className="shop-intro">
          Genuine gemstone bracelets from our Houston shop. Add to cart and
          check out securely online.
        </p>
        <div className="shop-grid">
          {PRODUCTS.map((id) => (
            <div key={id} className="shop-grid-item">
              <BuyButton productId={id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
