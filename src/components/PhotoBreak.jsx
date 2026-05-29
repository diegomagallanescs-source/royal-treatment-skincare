/**
 * Full-width static photo section between home-page sections.
 * No parallax — straightforward background-size: cover image.
 */
export default function PhotoBreak({ src, alt = 'Royal Treatment Skincare' }) {
  return (
    <div
      className="photo-break"
      role="img"
      aria-label={alt}
      style={{ backgroundImage: `url('${src}')` }}
    />
  )
}
