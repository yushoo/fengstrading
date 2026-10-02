import './Shop.css'
import { Link } from 'react-router-dom'
import BuyButton from '../components/BuyButton'

// Flip to true once Shopify checkout is enabled.
const SHOP_LIVE = false

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
        {!SHOP_LIVE && <span className="shop-soon-badge">Online ordering coming soon</span>}
        <h1>Shop Bracelets</h1>
        <p className="shop-intro">
          {SHOP_LIVE
            ? 'Genuine gemstone bracelets from our Houston shop. Add to cart and check out securely online.'
            : "Here's a preview of the gemstone bracelets coming to our online shop. Want one now? Get in touch and we'll help you order."}
        </p>
        <div className="shop-grid">
          {PRODUCTS.map((id) => (
            <div key={id} className="shop-grid-item">
              {!SHOP_LIVE && <span className="shop-ribbon">Coming soon</span>}
              <BuyButton productId={id} preview={!SHOP_LIVE} />
              {!SHOP_LIVE && (
                <button type="button" className="shop-soon-button" disabled>
                  Coming soon
                </button>
              )}
            </div>
          ))}
        </div>
        {!SHOP_LIVE && (
          <div className="shop-cta">
            <Link to="/contact" className="btn btn-primary">Contact us to order</Link>
          </div>
        )}
      </div>
    </div>
  )
}
