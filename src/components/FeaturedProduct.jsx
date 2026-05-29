import { useEffect, useRef } from 'react'
import { monthlyContent } from '../monthlyContent'

export default function FeaturedProduct() {
  const { featuredProduct: fp } = monthlyContent
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="featured-product" id="product" ref={ref}>
      <div className="container">
        <div className="featured-product-grid">
          <div className="fp-image-wrap fade-in">
            <img src={fp.image} alt={fp.name} />
            <span className="fp-badge">{fp.tagline}</span>
          </div>

          <div className="fp-content fade-in">
            <span className="section-label">{fp.tagline}</span>
            <p className="fp-brand">{fp.brand}</p>
            <h2 className="section-title">{fp.name}</h2>
            <p className="section-subtitle">{fp.description}</p>
            <p className="fp-price">{fp.price}</p>

            <ul className="fp-benefits">
              {fp.benefits.map((b) => (
                <li key={b}>
                  <div className="fp-benefit-icon">✓</div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={fp.purchaseLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Product
              </a>
              <a href="https://www.royaltreatmentskincare.net/book-online" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Book a Facial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
