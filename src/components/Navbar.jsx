import { useState, useEffect } from 'react'

const LOGO_URL = 'https://static.wixstatic.com/media/2908e0_ae0890bf293b4175918c7749d8e29c0d~mv2.png'
const BOOK_URL = 'https://www.royaltreatmentskincare.net/book-online'
const CANCEL_URL = 'https://www.royaltreatmentskincare.net/cancel-appointment'
const GIFT_URL = 'https://www.royaltreatmentskincare.net/gift-card'

export default function Navbar({ navigate, currentPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goHome = (sectionId) => {
    setMenuOpen(false)
    if (currentPage !== 'home') {
      navigate('home')
      // Wait for home to render, then scroll
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goProducts = () => {
    setMenuOpen(false)
    navigate('products')
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <button className="navbar-logo" onClick={() => goHome('hero')}>
          <img src={LOGO_URL} alt="Royal Treatment Skincare logo" />
          <div className="navbar-logo-text">
            <span>Royal Treatment</span>
            <span>Skincare Studio</span>
          </div>
        </button>

        <ul className="navbar-links">
          <li><button onClick={() => goHome('about')}>About</button></li>
          <li><button onClick={() => goHome('services')}>Services</button></li>
          <li><button onClick={() => goHome('spotlight')}>Skincare Tips</button></li>
          <li><button onClick={() => goHome('reviews')}>Reviews</button></li>
          <li><button onClick={goProducts} className={currentPage === 'products' ? 'nav-active' : ''}>Products</button></li>
          <li><a href={GIFT_URL} target="_blank" rel="noopener noreferrer">Gift Cards</a></li>
          <li>
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="navbar-cta">
              Book Now
            </a>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => goHome('about')}>About</button>
          <button onClick={() => goHome('services')}>Services</button>
          <button onClick={() => goHome('spotlight')}>Skincare Tips</button>
          <button onClick={() => goHome('reviews')}>Reviews</button>
          <button onClick={goProducts}>Products</button>
          <a href={GIFT_URL} target="_blank" rel="noopener noreferrer">Gift Cards</a>
          <a href={CANCEL_URL} target="_blank" rel="noopener noreferrer">Cancel Appointment</a>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="mobile-cta">Book Now</a>
        </div>
      )}
    </nav>
  )
}
