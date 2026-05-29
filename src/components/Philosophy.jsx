import { useEffect, useRef } from 'react'

const BOOK_URL = 'https://www.royaltreatmentskincare.net/book-online'

const PRINCIPLES = [
  {
    heading: 'Experience that reads your skin',
    body: 'Thirty years of practice builds something no product can replicate: the ability to assess a skin concern quickly, distinguish what is temporary from what is structural, and know exactly what your skin needs before reaching for anything. That judgment is what every appointment at Royal Treatment is built on.',
  },
  {
    heading: 'Professional-grade products, chosen deliberately',
    body: 'The brands carried here — GLO, SkinMedica, Topix, SkinScript, Hale Cosmeceuticals — are clinical-grade formulations trusted by dermatologists and medical spas. Every product is selected for its ingredient integrity and proven efficacy, not its packaging or price point.',
  },
  {
    heading: 'A plan built around your skin, not a menu',
    body: "Every client's skin is different. Your skin type, concerns, sensitivities, and goals shape the plan — not the other way around. Before any treatment is recommended, we listen. A free 30-minute consultation is where every client relationship at Royal Treatment begins.",
  },
  {
    heading: 'Honest guidance, without the pressure',
    body: "The most valuable thing we can offer is a straight answer. If a treatment isn't suited to your skin or your stage of care, we will say so. Your long-term confidence in your skin matters more than any single booking.",
  },
]

export default function Philosophy() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="philosophy" ref={ref}>
      <div className="container">

        {/* Intro */}
        <div className="philosophy-intro fade-in">
          <span className="section-label">Our Philosophy</span>
          <h2 className="section-title">
            Skincare that works.<br />Care you can trust.
          </h2>
          <p className="philosophy-intro-body">
            The foundation of everything here is a simple standard: your skin deserves
            treatments chosen for results, products backed by science, and guidance from
            someone who genuinely knows the difference. That is what Royal Treatment
            has been built on since 2013.
          </p>
        </div>

        {/* Principles — editorial horizontal list */}
        <div className="philosophy-list">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.heading}
              className="philosophy-item fade-in"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <h3 className="philosophy-item-heading">{p.heading}</h3>
              <p className="philosophy-item-body">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="philosophy-footer fade-in">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Free Consultation
          </a>
          <a href="#/services" className="philosophy-services-link">
            View all treatments →
          </a>
        </div>

      </div>
    </section>
  )
}
