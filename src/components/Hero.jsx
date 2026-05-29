import { useEffect, useState } from 'react'

const BOOK_URL = 'https://www.royaltreatmentskincare.net/book-online'

// Three hero images — crossfade every 5 seconds.
// Uses CSS opacity transition (not keyframe animation) so it works even
// when iOS Low Power Mode throttles CSS animations.
const SLIDES = [
  {
    url: 'https://static.wixstatic.com/media/nsplsh_96dd59ade1744ba886aa0343a3ad88c6~mv2.jpg',
    pos: 'center top',
  },
  {
    url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1920&q=85&auto=format&fit=crop',
    pos: 'center center',
  },
  {
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=85&auto=format&fit=crop',
    pos: 'center center',
  },
]

export default function Hero({ navigate }) {
  const [activeIdx, setActiveIdx] = useState(0)

  // Preload all images so the first transition is smooth
  useEffect(() => {
    SLIDES.forEach(({ url }) => {
      const img = new Image()
      img.src = url
    })
  }, [])

  // Cycle slides every 5 s — driven by JS so it isn't blocked by
  // prefers-reduced-motion CSS media queries or Low Power Mode animation throttling
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">

      {/* Slideshow layers */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.url}
          className={`hero-slide${i === activeIdx ? ' active' : ''}`}
          style={{
            backgroundImage: `url('${slide.url}')`,
            backgroundPosition: slide.pos,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Text content */}
      <div className="hero-content">
        <span className="hero-eyebrow">Est. 2013 &nbsp;·&nbsp; Licensed Esthetician</span>
        <div className="hero-rule" />

        <h1 className="hero-title">
          <span className="hero-title-line1">We Treat You</span>
          <span className="hero-title-line2">Like Royalty</span>
        </h1>

        <p className="hero-tagline">Everyone deserves to feel beautiful</p>

        <div className="hero-buttons">
          <button
            className="hero-btn-primary"
            onClick={() => navigate('services')}
          >
            Book Appointment
          </button>
          <button className="hero-btn-outline" onClick={() => navigate('products')}>
            Explore Products
          </button>
        </div>

        <button
          className="hero-topic-link"
          onClick={() => navigate('skincare')}
        >
          Skincare Tip of the Month 🌸
        </button>
      </div>

      {/* Scroll indicator */}
      <button
        className="hero-scroll"
        onClick={scrollToServices}
        aria-label="Scroll down"
      >
        <div className="scroll-line" />
      </button>

    </section>
  )
}
