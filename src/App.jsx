import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Builder from './pages/Builder'

const BANNER_HEIGHT = 36

function App() {
  const [bannerVisible, setBannerVisible] = useState(true)
  const headerHeight = 80 + (bannerVisible ? BANNER_HEIGHT : 0)

  return (
    <Router>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}>
        {bannerVisible && (
          <div style={{
            background: 'var(--amber-light, #fef3cd)',
            borderBottom: '1.5px solid var(--amber, #e8a840)',
            color: 'var(--sienna, #7a3a1a)',
            textAlign: 'center',
            padding: '0.55rem 1rem',
            fontSize: '0.85rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: `${BANNER_HEIGHT}px`,
            position: 'relative',
          }}>
            <span>🚧 Our website is a work in progress — more updates and images coming soon!</span>
            <button
              onClick={() => setBannerVisible(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                color: 'var(--sienna, #7a3a1a)',
                lineHeight: 1,
                padding: '0 0.25rem',
                position: 'absolute',
                right: '1rem',
              }}
              aria-label="Dismiss"
            >✕</button>
          </div>
        )}
        <Navbar />
      </div>
      <main className="page" style={{ paddingTop: `${headerHeight}px` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
