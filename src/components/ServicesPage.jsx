import { useState } from 'react'
import { services, SERVICE_CATEGORIES, BOOK_URL } from '../data/servicesData'

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? services
      : services.filter((s) => s.category === activeCategory)

  return (
    <div className="svc-page">

      {/* ── Page header ── */}
      <div className="svc-page-header">
        <div className="container">
          <span className="section-label">Treatments</span>
          <h1 className="svc-page-title">Our Services</h1>
          <p className="svc-page-subtitle">
            Licensed esthetic treatments by Dawn — 30+ years of experience,
            tailored to your skin.{' '}
            <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">
              Book online
            </a>{' '}
            or call{' '}
            <a href="tel:9096355124">(909) 635-5124</a> to schedule.
          </p>
        </div>
      </div>

      {/* ── Category tabs ── */}
      <div className="svc-tabs-wrap">
        <div className="svc-tabs container">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`svc-tab${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Count ── */}
      <div className="container svc-count-row">
        <span className="svc-count">
          {filtered.length} service{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' ? ` · ${activeCategory}` : ''}
        </span>
      </div>

      {/* ── Grid ── */}
      <div className="container svc-grid-wrap">
        <div className="svc-grid">
          {filtered.map((svc) => (
            <ServiceCard key={svc.id} svc={svc} />
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="svc-bottom-cta">
        <div className="container">
          <div className="svc-cta-inner">
            <div>
              <h3>Ready to book?</h3>
              <p>
                Not sure which treatment is right for you? Start with a free
                consultation and we'll build a plan around your skin goals.
              </p>
            </div>
            <div className="svc-cta-buttons">
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Appointment
              </a>
              <a href="tel:9096355124" className="btn-outline">
                Call (909) 635-5124
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

function ServiceCard({ svc }) {
  return (
    <article className={`svc-card${svc.addOn ? ' svc-card--addon' : ''}`}>

      {/* Card top: name + duration */}
      <div className="svc-card-top">
        <h3 className="svc-name">{svc.name}</h3>
        <span className="svc-duration">{svc.duration}</span>
      </div>

      {/* Description */}
      <p className="svc-desc">{svc.description}</p>

      {/* Footer: price + book */}
      <div className="svc-card-footer">
        <span className={`svc-price${svc.priceFree ? ' svc-price--free' : ''}`}>
          {svc.price}
        </span>
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="svc-book-btn"
          aria-label={`Book ${svc.name}`}
        >
          Book Now
        </a>
      </div>

    </article>
  )
}
