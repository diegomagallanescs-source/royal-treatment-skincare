import { useEffect, useRef } from 'react'
import { monthlyContent } from '../monthlyContent'

export default function SkincareSpotlight() {
  const { skincareSpotlight: sp } = monthlyContent
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="skincare-spotlight" id="spotlight" ref={ref}>
      <div className="container">
        <div className="spotlight-grid">
          <div className="spotlight-content fade-in">
            <span className="section-label">{sp.tagline}</span>
            <h2 className="section-title">{sp.topic}</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gold)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
              {sp.subtitle}
            </p>

            <div className="spotlight-body">
              {sp.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <blockquote className="spotlight-tip">
              {sp.tip}
            </blockquote>

            <a href={sp.ctaLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {sp.ctaText}
            </a>
          </div>

          <div className="spotlight-image-wrap fade-in">
            <img src={sp.image} alt={sp.topic} />
            <span className="spotlight-img-label">{sp.tagline}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
