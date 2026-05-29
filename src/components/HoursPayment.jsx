import { useEffect, useRef } from 'react'

const CASH_APP_LOGO = 'https://static.wixstatic.com/media/2908e0_45fbb77c8fba424d998536c470e93829~mv2.png'
const ZELLE_LOGO = 'https://static.wixstatic.com/media/2908e0_125d7908904649bda3444d8ea54284de~mv2.png'

const hours = [
  { day: 'Monday', time: '11:00 AM – 7:00 PM' },
  { day: 'Tuesday', time: 'Closed', closed: true },
  { day: 'Wednesday', time: '11:00 AM – 7:00 PM' },
  { day: 'Thursday', time: '10:00 AM – 6:00 PM' },
  { day: 'Friday', time: '10:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 2:00 PM' },
  { day: 'Sunday', time: 'Closed', closed: true },
]

const cards = ['Visa', 'Mastercard', 'Amex', 'Discover']

export default function HoursPayment() {
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
    <section className="hours-payment" id="hours" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="fade-in">
          <span className="section-label">Visit Us</span>
          <h2 className="section-title">Hours & Payment</h2>
        </div>

        <div className="hp-grid">
          <div className="hp-card fade-in">
            <h3 className="hp-card-title">Studio Hours</h3>
            <div className="hours-list">
              {hours.map((h, i) => (
                <div key={h.day}>
                  <div className="hours-row">
                    <span className="hours-day">{h.day}</span>
                    <span className={h.closed ? 'hours-closed' : 'hours-time'}>{h.time}</span>
                  </div>
                  {i < hours.length - 1 && <div className="hours-divider" />}
                </div>
              ))}
            </div>
          </div>

          <div className="hp-card fade-in">
            <h3 className="hp-card-title">Contact & Payment</h3>

            <p style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-light)', marginBottom: '0.4rem' }}>
              Phone
            </p>
            <a href="tel:9096355124" className="phone-link">
              📞 (909) 635-5124
            </a>

            <p style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gray-light)', marginBottom: '0.75rem', marginTop: '0.5rem' }}>
              Accepted Payment Methods
            </p>

            <div className="payment-methods">
              <div className="payment-method">
                <img src={CASH_APP_LOGO} alt="Cash App" />
                <span className="payment-method-name">Cash App</span>
              </div>
              <div className="payment-method">
                <img src={ZELLE_LOGO} alt="Zelle" />
                <span className="payment-method-name">Zelle</span>
              </div>
              <div className="payment-method" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span className="payment-method-name">Major Credit Cards</span>
                <div className="payment-card-icons">
                  {cards.map((c) => (
                    <span key={c} className="payment-card-badge">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.8rem', color: 'var(--gray-light)', marginTop: '1.5rem', fontStyle: 'italic' }}>
              Payments are issued in person at time of service.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
