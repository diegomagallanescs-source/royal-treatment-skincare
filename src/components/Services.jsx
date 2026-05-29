import { useEffect, useRef } from 'react'

const BOOK_URL = 'https://www.royaltreatmentskincare.net/book-online'

const services = [
  {
    name: 'Skin Consultation',
    price: 'Free',
    duration: '30 min',
    description: 'A personalized skin analysis to understand your unique concerns and create a custom treatment plan.',
  },
  {
    name: 'Acne Facial',
    price: '$85',
    duration: '1 hr',
    description: 'A targeted deep-cleansing treatment designed to calm inflammation, clear congestion, and balance acne-prone skin.',
  },
  {
    name: 'Cleansing Facial',
    price: '$95',
    duration: '1 hr',
    description: 'A thorough purifying cleanse that removes impurities and leaves your complexion refreshed and revitalized.',
  },
  {
    name: 'Vitamin C Facial',
    price: '$100',
    duration: '1 hr',
    description: 'A brightening treatment packed with antioxidants to even skin tone, reduce dark spots, and restore luminosity.',
  },
  {
    name: 'Microdermabrasion',
    price: '$105',
    duration: '1 hr',
    description: 'A professional exfoliation treatment that resurfaces the skin, minimizes pores, and reveals a smoother texture.',
  },
  {
    name: 'Oxygen Facial',
    price: '$115',
    duration: '1 hr',
    description: 'Infuses the skin with pure oxygen and nourishing serums for an instant, luminous glow.',
  },
  {
    name: 'Microcurrent Facial',
    price: '$160',
    duration: '1.5 hr',
    description: 'A non-invasive lifting treatment that uses low-level electrical currents to tone, firm, and sculpt facial contours.',
  },
  {
    name: 'Micro-Needling',
    price: '$258',
    duration: '1.5 hr',
    description: 'Stimulates natural collagen production to reduce fine lines, acne scars, and uneven texture for visibly younger skin.',
  },
  {
    name: 'Micro-Needling + Stem Cells',
    price: '$350',
    duration: '1.5 hr',
    description: 'Advanced collagen induction therapy combined with regenerative stem cell growth factors for accelerated skin renewal.',
  },
  {
    name: 'VI Peel Advanced',
    price: '$252',
    duration: '1 hr',
    description: 'A medical-grade chemical peel that corrects signs of aging, hyperpigmentation, and sun damage at a cellular level.',
  },
  {
    name: 'HIFU',
    price: 'From $250',
    duration: '2.5 hr',
    description: 'High Intensity Focused Ultrasound delivers non-surgical skin tightening and lifting with zero downtime.',
  },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className="services-header fade-in">
          <span className="section-label">Our Menu</span>
          <h2 className="section-title">Treatments & Services</h2>
          <p className="section-subtitle">
            Every service includes our signature hand moisturizing treatment — because your hands deserve the royal treatment too.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.name} className="service-card fade-in" style={{ transitionDelay: `${(i % 3) * 0.08}s` }}>
              <div className="service-card-top">
                <h3 className="service-name">{s.name}</h3>
                <span className="service-price">{s.price}</span>
              </div>
              <span className="service-duration">{s.duration}</span>
              <p className="service-desc">{s.description}</p>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="service-book-link">
                Book this service →
              </a>
            </div>
          ))}
        </div>

        <div className="services-cta fade-in">
          <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            Not sure which treatment is right for you?
          </p>
          <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
