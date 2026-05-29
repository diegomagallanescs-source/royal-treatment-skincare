import { useEffect, useRef } from 'react'

/**
 * Full-width parallax photo section.
 *
 * How it works:
 * - The .photo-break-bg div has a fixed 130 px overhang above and below the
 *   visible container (inset: -130px 0).  overflow:hidden clips those edges.
 * - A direct (no-rAF) scroll listener moves the bg div up/down with
 *   translate3d as the section travels through the viewport, panning
 *   through ±80 px of the image without ever exposing an edge.
 * - Document-relative position is pre-computed at mount and refreshed on
 *   resize, so every scroll tick is a cheap arithmetic-only update.
 * - translate3d forces GPU compositing on every browser / device.
 * - No background-attachment: fixed (broken on iOS Safari).
 * - No requestAnimationFrame throttle — direct call is reliable and the
 *   passive listener ensures no jank on the main thread.
 */
export default function PhotoBreak({ src, alt = 'Royal Treatment Skincare' }) {
  const wrapRef = useRef(null)
  const bgRef   = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const bg   = bgRef.current
    if (!wrap || !bg) return

    // Pre-computed document-relative measurements (cheap on scroll)
    let docTop = 0
    let wrapH  = 0

    const measure = () => {
      const rect = wrap.getBoundingClientRect()
      docTop = rect.top + window.scrollY
      wrapH  = wrap.offsetHeight
    }

    const update = () => {
      const scrollY = window.scrollY
      const vh      = window.innerHeight

      // 0 when section bottom reaches viewport bottom,
      // 1 when section top reaches viewport top
      const progress = (scrollY + vh - docTop) / (vh + wrapH)
      const clamped  = Math.max(0, Math.min(1, progress))

      // ±80 px travel — within the 130 px CSS inset buffer on each side
      const offset = (clamped - 0.5) * 160

      bg.style.transform = `translate3d(0, ${offset}px, 0)`
    }

    const onResize = () => { measure(); update() }

    measure()
    update()

    window.addEventListener('scroll', update,   { passive: true })
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="photo-break" ref={wrapRef}>
      <div
        className="photo-break-bg"
        ref={bgRef}
        style={{ backgroundImage: `url('${src}')` }}
        role="img"
        aria-label={alt}
      />
    </div>
  )
}
