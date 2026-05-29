import { useEffect, useRef } from 'react'

const ABOUT_IMG = 'https://static.wixstatic.com/media/2908e0_a6713a49d9324547ae866e3e5a12d7fb~mv2.jpg'
const ACCENT_IMG = 'https://static.wixstatic.com/media/2908e0_8541ede232f04e9184a2e6e15358ad89~mv2.jpg'

const amenities = [
  'Memory foam reclinable chair',
  'Padded headrest for comfort',
  'Soothing background music',
  'Complimentary refreshments',
  'Fully vaccinated & sanitized',
  'European-trained techniques',
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrap fade-in">
            <img src={ABOUT_IMG} alt="Royal Treatment Skincare studio" className="about-image-main" />
            <img src={ACCENT_IMG} alt="Skincare treatment detail" className="about-image-accent" />
            <div className="about-badge">
              <span className="about-badge-number">30+</span>
              <span className="about-badge-text">Years of<br />Experience</span>
            </div>
          </div>

          <div className="about-content fade-in">
            <span className="section-label">About Us</span>
            <h2 className="section-title">Skincare Elevated<br />to an Art Form</h2>
            <div className="about-divider" />
            <p className="section-subtitle">
              Royal Treatment Skincare is a boutique studio founded by a licensed Esthetician and
              Medical Assistant with European training and over 30 years of hands-on experience.
              After 16 years working alongside a dermatologist and time at a prestigious medical spa,
              she opened Royal Treatment in 2013 — with one mission: to make every client feel like royalty.
            </p>
            <p className="section-subtitle" style={{ marginTop: '1rem' }}>
              Every facial includes a signature hand moisturizing treatment — because the details
              are what make the difference between good and unforgettable.
            </p>

            <div className="about-amenities">
              {amenities.map((item) => (
                <div key={item} className="amenity-item">
                  <div className="amenity-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
