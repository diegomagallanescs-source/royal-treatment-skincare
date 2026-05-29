import { useEffect, useRef } from 'react'

const MARISOL_IMG = 'https://static.wixstatic.com/media/2908e0_c34bfe7389c345d0a9fdeda7a31c7080~mv2.png'

const reviews = [
  {
    name: 'Marisol Cervantes',
    avatar: MARISOL_IMG,
    text: 'Thank you for taking care of our faces — my siblings, mom, and I — in our time of need and restoring our confidence to feel beautiful, always.',
  },
  {
    name: 'April Orji',
    avatar: null,
    text: 'Quality service! The treatment was never rushed — I truly felt pampered from start to finish. The hand and face massages were absolutely divine!',
  },
  {
    name: 'Dr. O',
    avatar: null,
    text: 'I enjoyed every moment of my facial and hand treatment. The environment is wonderfully relaxing and I left feeling calm, refreshed, and pain-free. I look forward to my next visit.',
  },
]

export default function Testimonials() {
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
    <section className="testimonials" id="reviews" ref={ref}>
      <div className="container">
        <div className="testimonials-header fade-in">
          <span className="section-label">Client Love</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <div key={r.name} className="testimonial-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="testimonial-quote-mark">"</div>
              <p className="testimonial-text">{r.text}</p>
              <div className="testimonial-author">
                {r.avatar ? (
                  <img src={r.avatar} alt={r.name} className="testimonial-avatar" />
                ) : (
                  <div className="testimonial-avatar-placeholder">
                    {r.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="testimonial-name">{r.name}</div>
                  <div className="testimonial-stars">★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
