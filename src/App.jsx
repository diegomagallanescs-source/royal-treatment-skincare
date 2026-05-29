import { useEffect, useState } from 'react'
import './App.css'

import MonthlyBanner from './components/MonthlyBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import FeaturedProduct from './components/FeaturedProduct'
import SkincareSpotlight from './components/SkincareSpotlight'
import Testimonials from './components/Testimonials'
import HoursPayment from './components/HoursPayment'
import Footer from './components/Footer'
import Products from './components/Products'

function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-bar-inner">
        <div className="stat-item">
          <span className="stat-value">30+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">2013</span>
          <span className="stat-label">Established</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">11</span>
          <span className="stat-label">Signature Treatments</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">100%</span>
          <span className="stat-label">Royal Experience</span>
        </div>
      </div>
    </div>
  )
}

function ScrollTopButton() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      className={`scroll-top-btn${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}

function getPageFromHash() {
  return window.location.hash === '#/products' ? 'products' : 'home'
}

export default function App() {
  const [page, setPage] = useState(getPageFromHash)

  const navigate = (to) => {
    window.location.hash = to === 'home' ? '' : `#/${to}`
    setPage(to)
  }

  useEffect(() => {
    const handleHash = () => setPage(getPageFromHash())
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return (
    <>
      <MonthlyBanner />
      <Navbar navigate={navigate} currentPage={page} />

      {page === 'products' ? (
        <Products navigate={navigate} />
      ) : (
        <main>
          <Hero />
          <StatsBar />
          <About />
          <Services />
          <FeaturedProduct />
          <SkincareSpotlight />
          <Testimonials />
          <HoursPayment />
        </main>
      )}

      <Footer navigate={navigate} />
      <ScrollTopButton />
    </>
  )
}
