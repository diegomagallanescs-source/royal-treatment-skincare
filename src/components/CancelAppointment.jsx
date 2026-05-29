const BOOK_URL = 'https://www.royaltreatmentskincare.net/book-online'

export default function CancelAppointment() {
  return (
    <div className="cancel-page">
      <div className="container">
        <div className="cancel-page-inner">

          <span className="section-label">Appointments</span>
          <h1>Cancel Appointment</h1>

          <p className="cancel-page-intro">
            To cancel your appointment, please email or text our bookings manager.
            Include the date and time you had chosen for your appointment. Once completed,
            you will receive a confirmation email for your cancellation. Thank you — we
            look forward to serving you at a later date!
          </p>

          <div className="cancel-contact-cards">

            {/* Booking Team */}
            <div className="cancel-contact-card">
              <p className="cancel-contact-card-label">Booking Team</p>
              <p className="cancel-contact-card-name">Bookings Manager</p>
              <div className="cancel-contact-item">
                <span className="cancel-contact-icon">✉</span>
                <span>
                  Email:{' '}
                  <a href="mailto:dmgwebdesign@gmail.com">
                    dmgwebdesign@gmail.com
                  </a>
                </span>
              </div>
              <div className="cancel-contact-item">
                <span className="cancel-contact-icon">✆</span>
                <span>
                  Text:{' '}
                  <a href="tel:9096367478">(909) 636-7478</a>
                </span>
              </div>
            </div>

            {/* Dawn */}
            <div className="cancel-contact-card">
              <p className="cancel-contact-card-label">Or Reach Directly</p>
              <p className="cancel-contact-card-name">Dawn</p>
              <div className="cancel-contact-item">
                <span className="cancel-contact-icon">✆</span>
                <span>
                  <a href="tel:9096355124">(909) 635-5124</a>
                </span>
              </div>
            </div>

          </div>

          <p className="cancel-note">
            Please include your name, appointment date, and time in your message so we
            can locate your booking quickly.
          </p>

          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a New Appointment
          </a>

        </div>
      </div>
    </div>
  )
}
