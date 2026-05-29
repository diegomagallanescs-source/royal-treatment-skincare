import { useState } from 'react'
import { monthlyContent } from '../monthlyContent'

export default function MonthlyBanner() {
  const [dismissed, setDismissed] = useState(false)
  const { banner } = monthlyContent

  if (dismissed) return null

  return (
    <div className="monthly-banner">
      <p>
        {banner.message}&nbsp;&nbsp;
        <a href={banner.ctaLink} target="_blank" rel="noopener noreferrer">
          {banner.ctaText} →
        </a>
      </p>
      <button
        className="banner-close"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
      >
        ✕
      </button>
    </div>
  )
}
