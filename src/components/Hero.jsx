import { useEffect, useState } from 'react'

const BOOK_URL = 'https://www.royaltreatmentskincare.net/book-online'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className={`hero-bg${loaded ? ' loaded' : ''}`} />
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-eyebrow">Est. 2013 · Licensed Esthetician</span>
        <h1 className="hero-title">We Treat You<br />Like Royalty</h1>
        <p className="hero-subtitle">Everyone deserves to feel beautiful</p>
        <div className="hero-buttons">
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
            Book Your Appointment
          </a>
          <button className="hero-btn-outline" onClick={scrollToServices}>
            Explore Services
          </button>
        </div>
      </div>

      <button className="hero-scroll" onClick={scrollToServices} aria-label="Scroll down">
        <span>Scroll</span>
        <div className="scroll-line" />
      </button>
    </section>
  )
}
