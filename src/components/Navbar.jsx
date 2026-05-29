import { useState, useEffect } from 'react'

const LOGO_URL = 'https://static.wixstatic.com/media/2908e0_ae0890bf293b4175918c7749d8e29c0d~mv2.png'
const BOOK_URL = 'https://www.royaltreatmentskincare.net/book-online'

export default function Navbar({ navigate, currentPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goHome = () => {
    setMenuOpen(false)
    if (currentPage !== 'home') {
      navigate('home')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goProducts = (anchor) => {
    setMenuOpen(false)
    navigate('products')
    if (anchor) {
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
      }, 80)
    }
  }

  const goServices = () => {
    setMenuOpen(false)
    navigate('services')
  }

  const goSkincare = () => {
    setMenuOpen(false)
    navigate('skincare')
  }

  const goCancel = () => {
    setMenuOpen(false)
    navigate('cancel')
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">

        {/* Logo */}
        <button className="navbar-logo" onClick={goHome}>
          <img src={LOGO_URL} alt="Royal Treatment Skincare logo" />
          <span className="navbar-logo-name">Royal Treatment</span>
        </button>

        {/* Desktop links */}
        <ul className="navbar-links">
          <li>
            <button
              onClick={goServices}
              className={currentPage === 'services' ? 'nav-active' : ''}
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => goProducts()}
              className={currentPage === 'products' ? 'nav-active' : ''}
            >
              Products
            </button>
          </li>
          <li>
            <button
              onClick={goSkincare}
              className={currentPage === 'skincare' ? 'nav-active' : ''}
            >
              Skincare
            </button>
          </li>
          <li>
            <button
              onClick={goCancel}
              className={currentPage === 'cancel' ? 'nav-active' : ''}
            >
              Cancel Appointment
            </button>
          </li>
          <li>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-cta"
            >
              Appointments
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={goServices}>Services</button>
          <button onClick={() => goProducts()}>Products</button>
          <button onClick={goSkincare}>Skincare</button>
          <button onClick={goCancel}>Cancel Appointment</button>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta"
          >
            Appointments
          </a>
        </div>
      )}
    </nav>
  )
}
