import { useEffect, useRef } from 'react'

// Public storefront credentials for the Buy Button channel.
// The storefront access token is PUBLIC by design - it ships in website HTML.
const SHOPIFY_DOMAIN = '47xt0f-k2.myshopify.com'
const STOREFRONT_ACCESS_TOKEN = 'd470c4d6dbefe24864cb4cb7fc8d0a6d'
const SDK_URL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'

// Load the Buy Button SDK once, shared by every button on the page.
let sdkPromise = null
function loadSdk() {
  if (!sdkPromise) {
    sdkPromise = new Promise((resolve, reject) => {
      if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        resolve()
        return
      }
      const script = document.createElement('script')
      script.async = true
      script.src = SDK_URL
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Shopify Buy Button SDK failed to load'))
      document.head.appendChild(script)
    })
  }
  return sdkPromise
}

// Options generated in the Shopify admin Buy Button channel (Oct 2026),
// with the product-card layout neutralized (the page CSS owns the grid)
// and the button color matched to the site theme.
const BUTTON_OPTIONS = {
  product: {
    styles: {
      product: {
        '@media (min-width: 601px)': {
          'max-width': '100%',
          'margin-left': '0',
          'margin-bottom': '0',
        },
      },
      button: {
        'background-color': '#2e8b6a',
        ':hover': { 'background-color': '#1e6048' },
        'border-radius': '50px',
        'font-family': 'Nunito, sans-serif',
        'font-weight': '700',
      },
    },
    text: { button: 'Add to cart' },
  },
  productSet: {
    styles: {
      products: {
        '@media (min-width: 601px)': { 'margin-left': '-20px' },
      },
    },
  },
  modalProduct: {
    contents: {
      img: false,
      imgWithCarousel: true,
      button: false,
      buttonWithQuantity: true,
    },
    styles: {
      product: {
        '@media (min-width: 601px)': {
          'max-width': '100%',
          'margin-left': '0px',
          'margin-bottom': '0px',
        },
      },
    },
    text: { button: 'Add to cart' },
  },
  option: {},
  cart: {
    text: { total: 'Subtotal', button: 'Checkout' },
  },
  toggle: {},
}

// Preview mode: same product card, but with the cart button removed so
// nobody can reach checkout before the store is live.
const PREVIEW_OPTIONS = {
  ...BUTTON_OPTIONS,
  product: {
    ...BUTTON_OPTIONS.product,
    contents: { button: false },
  },
}

export default function BuyButton({ productId, preview = false }) {
  const nodeRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    loadSdk()
      .then(() => {
        if (cancelled) return null
        const client = window.ShopifyBuy.buildClient({
          domain: SHOPIFY_DOMAIN,
          storefrontAccessToken: STOREFRONT_ACCESS_TOKEN,
        })
        return window.ShopifyBuy.UI.onReady(client)
      })
      .then((ui) => {
        if (cancelled || !ui || !nodeRef.current) return
        ui.createComponent('product', {
          id: productId,
          node: nodeRef.current,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: preview ? PREVIEW_OPTIONS : BUTTON_OPTIONS,
        })
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('[BuyButton] Shopify SDK error:', err)
      })
    return () => {
      cancelled = true
    }
  }, [productId, preview])

  return <div ref={nodeRef} className="buy-button-slot" />
}
