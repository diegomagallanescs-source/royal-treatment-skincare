import { useEffect, useRef } from 'react'

// Three-image mosaic: tall portrait on left, two stacked on right.
// Each photo wipes upward into frame (container clips translateY child),
// then the image simultaneously de-zooms from scale(1.12) to scale(1).
// Staggered via CSS transition-delay so they don't all land at once.

const PHOTOS = [
  {
    id: 'main',
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85&auto=format&fit=crop',
    alt: 'Relaxing skincare facial treatment',
  },
  {
    id: 'top',
    url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=85&auto=format&fit=crop',
    alt: 'Professional skincare products and tools',
  },
  {
    id: 'bottom',
    url: 'https://static.wixstatic.com/media/2908e0_8541ede232f04e9184a2e6e15358ad89~mv2.jpg',
    alt: 'Royal Treatment skincare studio detail',
  },
]

export default function PhotoMosaic() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Observe the whole mosaic; trigger all photos together (CSS delays stagger them)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.mosaic-photo').forEach((p) => p.classList.add('revealed'))
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="photo-mosaic" ref={ref}>
      {/* Left — tall portrait */}
      <div className="mosaic-photo mosaic-photo--main">
        <div className="mosaic-photo-clip">
          <img src={PHOTOS[0].url} alt={PHOTOS[0].alt} />
        </div>
      </div>

      {/* Right column — two stacked */}
      <div className="mosaic-col-right">
        <div className="mosaic-photo mosaic-photo--top">
          <div className="mosaic-photo-clip">
            <img src={PHOTOS[1].url} alt={PHOTOS[1].alt} />
          </div>
        </div>
        <div className="mosaic-photo mosaic-photo--bottom">
          <div className="mosaic-photo-clip">
            <img src={PHOTOS[2].url} alt={PHOTOS[2].alt} />
          </div>
        </div>
      </div>
    </div>
  )
}
