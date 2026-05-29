const LOGO_URL = 'https://static.wixstatic.com/media/2908e0_ae0890bf293b4175918c7749d8e29c0d~mv2.png'
const BOOK_URL = 'https://www.royaltreatmentskincare.net/book-online'
const CANCEL_URL = 'https://www.royaltreatmentskincare.net/cancel-appointment'
const GIFT_URL = 'https://www.royaltreatmentskincare.net/gift-card'

export default function Footer({ navigate }) {
  const goHome = (id) => {
    navigate('home')
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={LOGO_URL} alt="Royal Treatment Skincare" />
            <div className="footer-brand-name">Royal Treatment Skincare</div>
            <div className="footer-brand-tagline">We Treat You Like Royalty</div>
            <p className="footer-brand-desc">
              A boutique skincare studio offering personalized facial treatments by a licensed
              esthetician with 30+ years of experience. Because everyone deserves to feel beautiful.
            </p>
          </div>

          <div>
            <p className="footer-col-title">Navigation</p>
            <ul className="footer-links">
              <li><button onClick={() => goHome('hero')}>Home</button></li>
              <li><button onClick={() => goHome('about')}>About</button></li>
              <li><button onClick={() => goHome('services')}>Services</button></li>
              <li><button onClick={() => goHome('spotlight')}>Skincare Tips</button></li>
              <li><button onClick={() => goHome('reviews')}>Reviews</button></li>
              <li><button onClick={() => navigate('products')}>Products</button></li>
              <li><a href={BOOK_URL} target="_blank" rel="noopener noreferrer">Book Online</a></li>
              <li><button onClick={() => navigate('cancel')}>Cancel Appointment</button></li>
              <li><a href={GIFT_URL} target="_blank" rel="noopener noreferrer">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Contact</p>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Phone</span>
              <span className="footer-contact-value"><a href="tel:9096355124">(909) 635-5124</a></span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Hours</span>
              <span className="footer-contact-value">Mon & Wed: 11AM – 7PM</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-value">Thu & Fri: 10AM – 6PM</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-value">Sat: 10AM – 2PM</span>
            </div>
            <div className="footer-contact-item" style={{ marginTop: '0.5rem' }}>
              <span className="footer-contact-label">Closed</span>
              <span className="footer-contact-value">Tuesday & Sunday</span>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.75rem', padding: '0.7rem 1.5rem' }}>
                Book Your Appointment
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Royal Treatment Skincare. All rights reserved.</p>
          <p className="footer-established">Est. 2013</p>
        </div>
      </div>
    </footer>
  )
}
