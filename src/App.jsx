import { useEffect, useState } from 'react'
import './App.css'

import MonthlyBanner from './components/MonthlyBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Philosophy from './components/Philosophy'
import PhotoBreak from './components/PhotoBreak'
import Testimonials from './components/Testimonials'
import HoursPayment from './components/HoursPayment'
import Footer from './components/Footer'
import Products from './components/Products'
import CancelAppointment from './components/CancelAppointment'
import ServicesPage from './components/ServicesPage'
import SkincarePage from './components/SkincarePage'


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
  const hash = window.location.hash
  if (hash === '#/products') return 'products'
  if (hash === '#/cancel') return 'cancel'
  if (hash === '#/services') return 'services'
  if (hash === '#/skincare') return 'skincare'
  return 'home'
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

  // Scroll to top on every page change — prevents browser scroll restoration
  // from dropping the user mid-page when returning to a previously visited route
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  return (
    <>
      <MonthlyBanner />
      <Navbar navigate={navigate} currentPage={page} />

      {page === 'products' ? (
        <Products navigate={navigate} />
      ) : page === 'cancel' ? (
        <CancelAppointment />
      ) : page === 'services' ? (
        <ServicesPage />
      ) : page === 'skincare' ? (
        <SkincarePage />
      ) : (
        <main>
          <Hero navigate={navigate} />
          <About />
          <Services />
          <PhotoBreak
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=85&auto=format&fit=crop"
            alt="Esthetician applying a facial treatment"
          />
          <Philosophy />
          <PhotoBreak
            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1920&q=85&auto=format&fit=crop"
            alt="Relaxing spa skincare session"
          />
          <Testimonials />
          <HoursPayment />
        </main>
      )}

      <Footer navigate={navigate} />
      <ScrollTopButton />
    </>
  )
}
