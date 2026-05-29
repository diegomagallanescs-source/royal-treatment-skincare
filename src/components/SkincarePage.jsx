import { useState } from 'react'
import { monthlyContent } from '../monthlyContent'

const BOOK_URL = 'https://www.royaltreatmentskincare.net/book-online'

const CONCERNS = [
  {
    id: 'acne',
    label: 'Acne & Breakouts',
    overview:
      'Acne forms when pores are blocked by oil, dead skin cells, and bacteria. Consistent layered care — both professional and at-home — is the most effective strategy, as no single product does all the work alone.',
    products: [
      'Benzoyl Peroxide 5% Wash (Topix)',
      'Blue Green Algae Cleanser (SkinScript)',
      'Replenix Retinol Smoothing Serum (Topix)',
      'Niacinamide Brightening Cream (Hale)',
    ],
    treatments: [
      'Acne Facial',
      'Acne Facial with Blue Light Therapy',
      'Salicylic Peel',
      'VI Peel — Purify',
      'Light Therapy (Blue)',
    ],
    tip: 'Picking active breakouts increases inflammation and the risk of permanent scarring. Let the products and treatments do the work.',
  },
  {
    id: 'pigmentation',
    label: 'Dark Spots & Hyperpigmentation',
    overview:
      'Hyperpigmentation — sun spots, melasma, post-acne marks — is caused by excess melanin production. A two-track approach of targeted professional treatments paired with daily SPF protection delivers the most lasting results.',
    products: [
      'Brightening Vitamin C Serum (GLO)',
      'Citrix Antioxidant Serum (Topix)',
      'Enlighten Pigment Corrector (Topix)',
      'Mandelic Acid Facial Cleanser (Hale)',
    ],
    treatments: [
      'Vitamin C Facial',
      'Vitamin C Facial with Yellow Light',
      'VI Peel Advanced',
      'VI Peel Precision Plus',
      'Microdermabrasion with Exfoliation',
    ],
    tip: 'SPF 30+ daily is the single most important step. Even brief unprotected sun exposure reverses weeks of brightening treatment.',
  },
  {
    id: 'aging',
    label: 'Fine Lines & Loss of Firmness',
    overview:
      'As collagen production declines with age, skin loses elasticity and lines deepen. A combination of collagen-stimulating professional treatments and antioxidant-rich home care offers the most effective multi-pronged approach.',
    products: [
      'Replenix Retinol Smoothing Serum (Topix)',
      'Stem Cell Renewal Serum (Hale)',
      'CF30 Antioxidant Cream (Topix)',
      'Brightening Eye Complex (Hale)',
    ],
    treatments: [
      'Firm Skin Facial with Red Light Therapy',
      'Microcurrent Facial',
      'Radiofrequency Facial with Red Light',
      'Micro-Needling',
      'Advanced Radiofrequency Microneedling',
      'High Intensity Focused Ultrasound',
    ],
    tip: 'Retinol is the most studied anti-aging ingredient available without a prescription. Introduce it slowly — two nights a week — and always follow with SPF.',
  },
  {
    id: 'dehydration',
    label: 'Dryness & Dehydration',
    overview:
      'Dry skin lacks oil; dehydrated skin lacks water — and both can exist simultaneously. Layering a hydrating serum beneath a moisturizer and sealing with SPF is the foundation of any effective hydration routine.',
    products: [
      'Gentle Hydrating Cleanser (GLO)',
      'Hydra-Bright Facial Mist (GLO)',
      'Hyaluronic Rose Facial Spray (Hale)',
      'Green Tea Citrus Moisturizer (SkinScript)',
    ],
    treatments: [
      'Hydrofacial',
      'Oxygen Facial',
      'Berry Bliss Facial',
      'Cleansing Facial',
    ],
    tip: 'Apply hyaluronic acid to slightly damp skin — it draws moisture from the air and seals it in far more effectively than on dry skin.',
  },
  {
    id: 'texture',
    label: 'Uneven Texture & Pores',
    overview:
      'Rough texture and visible pores are typically caused by dead skin buildup and excess sebum. Regular exfoliation — chemical and physical — combined with professional resurfacing keeps skin consistently smooth.',
    products: [
      'Raspberry Refining Cleanser (SkinScript)',
      'Pumpkin Brightening Enzyme Masque (SkinScript)',
      'Renewing Resurfacing Mask (GLO)',
      'Niacinamide Brightening Cream (Hale)',
    ],
    treatments: [
      'Microdermabrasion with Exfoliation',
      'Dermaplaning',
      'Jessner Peel',
      'TCA Peel',
      'Salicylic Peel',
    ],
    tip: 'Pore size is largely genetic. Keeping them clear and using niacinamide consistently makes them appear noticeably smaller over time.',
  },
  {
    id: 'sensitivity',
    label: 'Sensitivity & Redness',
    overview:
      'Sensitive skin reacts easily to products, temperature, and environmental stress. A stripped-back, barrier-first approach — fewer ingredients, no fragrance, gentle actives — keeps reactive skin calm and balanced long-term.',
    products: [
      'Gentle Hydrating Cleanser (GLO)',
      'Cacti & Aloe Hydrating Mist (SkinScript)',
      'CF30 Antioxidant Cream (Topix)',
      'Daily Defense SPF 40 (GLO)',
    ],
    treatments: [
      'Cleansing Facial',
      'Light Therapy (Yellow for Redness)',
      'Oxygen Facial',
      'Skin Consultation — Free',
    ],
    tip: 'Introduce new products one at a time, two weeks apart. That way you always know exactly what your skin is reacting to.',
  },
]

const SKIN_TYPES = [
  {
    type: 'Normal',
    cue: 'Balanced, few concerns',
    signs: [
      'Balanced moisture levels',
      'Small, barely visible pores',
      'Rarely experiences breakouts or flaking',
    ],
    approach:
      'Maintain your balanced skin with gentle daily cleansing, a light moisturizer, and daily SPF. Focus on prevention and antioxidant protection.',
  },
  {
    type: 'Dry',
    cue: 'Tight, flaky, or dull',
    signs: [
      'Feels tight after cleansing',
      'May flake or appear dull',
      'Fine lines look more pronounced',
    ],
    approach:
      'Prioritize rich moisturizers and hydrating serums. Avoid sulfate cleansers. Hyaluronic acid and ceramides should anchor your routine.',
  },
  {
    type: 'Oily',
    cue: 'Shiny, enlarged pores',
    signs: [
      'Shiny or greasy by midday',
      'Enlarged, visible pores',
      'Prone to blackheads and breakouts',
    ],
    approach:
      "Don't skip moisturizer — oil and hydration are separate. Gel-based, non-comedogenic formulas with salicylic acid or niacinamide regulate sebum without stripping.",
  },
  {
    type: 'Combination',
    cue: 'Oily center, dry edges',
    signs: [
      'Oily T-zone: forehead, nose, chin',
      'Normal to dry cheeks',
      'Variable pore size across the face',
    ],
    approach:
      'A lightweight gel moisturizer balanced with a hydrating mist can serve the whole face. Spot-treat the T-zone with targeted actives.',
  },
  {
    type: 'Sensitive',
    cue: 'Reacts easily, prone to redness',
    signs: [
      'Reacts to products, temperature, or stress',
      'Prone to redness, stinging, or flushing',
      'May have rosacea or eczema',
    ],
    approach:
      'Go minimal — fewer ingredients, fragrance-free, and clinically tested formulas. Always patch test. Ceramides and allantoin help rebuild a compromised barrier.',
  },
]

const ROUTINE = [
  {
    step: '01 — Cleanse',
    am: true,
    pm: true,
    why: 'Removes overnight buildup in the morning, and the day\'s sunscreen, makeup, and pollutants at night. Clean skin absorbs everything that follows.',
    ingredients: 'Gentle surfactants, mandelic acid (PM only)',
  },
  {
    step: '02 — Tone & Mist',
    am: true,
    pm: true,
    why: 'Rebalances skin pH, primes absorption of active ingredients, and adds a lightweight hydration base before serums.',
    ingredients: 'Rose water, aloe vera, hyaluronic acid',
  },
  {
    step: '03 — Active Serum',
    am: true,
    pm: true,
    why: 'AM: antioxidants (Vitamin C, ferulic acid) to protect against environmental damage. PM: retinol, AHAs, or brightening actives to repair while you sleep.',
    ingredients: 'Vitamin C, retinol, kojic acid, niacinamide',
  },
  {
    step: '04 — Eye Treatment',
    am: true,
    pm: true,
    why: 'The eye area is thinner and more delicate — it needs its own targeted actives. Apply before moisturizer, patting gently inward.',
    ingredients: 'Caffeine, peptides, vitamin K, retinol',
  },
  {
    step: '05 — Moisturize',
    am: true,
    pm: true,
    why: 'Seals in all active layers, supports the skin barrier, and prevents transepidermal water loss through the day and overnight.',
    ingredients: 'Ceramides, squalane, peptides, antioxidants',
  },
  {
    step: '06 — SPF',
    am: true,
    pm: false,
    why: 'The most important anti-aging step of all — no serum or treatment works as hard as consistent daily SPF 30+. Skip it and everything else is undermined.',
    ingredients: 'Zinc oxide, titanium dioxide, chemical filters (AM only)',
  },
]

export default function SkincarePage() {
  const [activeConcern, setActiveConcern] = useState(CONCERNS[0].id)
  const { skincareSpotlight: sp } = monthlyContent
  const concern = CONCERNS.find((c) => c.id === activeConcern)

  return (
    <div className="skincare-page">

      {/* ── Page header ── */}
      <div className="skincare-page-header">
        <div className="container">
          <span className="section-label">Education & Guidance</span>
          <h1 className="skincare-page-title">Skincare</h1>
          <p className="skincare-page-subtitle">
            Expert guidance from Dawn — over 30 years helping real skin thrive,
            one treatment at a time.
          </p>
        </div>
      </div>

      {/* ── Skincare Topic of the Month ── */}
      <section className="skincare-spotlight">
        <div className="container">
          <div className="skincare-spotlight-grid">
            <div className="skincare-spotlight-content">
              <span className="section-label">{sp.tagline}</span>
              <h2 className="section-title">{sp.topic}</h2>
              <p className="skincare-spotlight-subtitle">{sp.subtitle}</p>
              {sp.body.map((para, i) => (
                <p key={i} className="skincare-spotlight-para">{para}</p>
              ))}
              <blockquote className="spotlight-tip">{sp.tip}</blockquote>
              <a
                href={sp.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {sp.ctaText}
              </a>
            </div>
            <div className="skincare-spotlight-image">
              <img src={sp.image} alt={sp.topic} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Know Your Skin Type ── */}
      <section className="skincare-section skincare-section--alt">
        <div className="container">
          <div className="skincare-section-header">
            <h2 className="section-title">Know Your Skin Type</h2>
            <p className="skincare-section-intro">
              The right routine starts with the right foundation. Identifying
              your skin type shapes every product and treatment choice you make.
            </p>
          </div>
          <div className="skin-types-grid">
            {SKIN_TYPES.map((t) => (
              <div key={t.type} className="skin-type-card">
                <span className="skin-type-name">{t.type}</span>
                <span className="skin-type-cue">{t.cue}</span>
                <ul className="skin-type-signs">
                  {t.signs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="skin-type-approach">{t.approach}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tackle Your Skin Concern ── */}
      <section className="skincare-section">
        <div className="container">
          <div className="skincare-section-header">
            <h2 className="section-title">Tackle Your Skin Concern</h2>
            <p className="skincare-section-intro">
              Select your primary concern for targeted product and treatment
              recommendations from Dawn.
            </p>
          </div>
          <div className="concerns-layout">
            <div className="concerns-sidebar">
              {CONCERNS.map((c) => (
                <button
                  key={c.id}
                  className={`concern-btn${activeConcern === c.id ? ' active' : ''}`}
                  onClick={() => setActiveConcern(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="concerns-panel">
              <h3 className="concern-title">{concern.label}</h3>
              <p className="concern-overview">{concern.overview}</p>
              <div className="concern-recs-grid">
                <div className="concern-recs">
                  <p className="concern-recs-label">Recommended Products</p>
                  <ul>
                    {concern.products.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <a href="#/products" className="concern-link">
                    Browse all products →
                  </a>
                </div>
                <div className="concern-recs">
                  <p className="concern-recs-label">Recommended Treatments</p>
                  <ul>
                    {concern.treatments.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <a href="#/services" className="concern-link">
                    View all services →
                  </a>
                </div>
              </div>
              <blockquote className="spotlight-tip">{concern.tip}</blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Daily Routine Guide ── */}
      <section className="skincare-section skincare-section--alt">
        <div className="container">
          <div className="skincare-section-header">
            <h2 className="section-title">Building Your Daily Routine</h2>
            <p className="skincare-section-intro">
              Consistency matters more than perfection. These six steps, morning
              and evening, cover the full spectrum of skin health.
            </p>
          </div>
          <div className="routine-list">
            {ROUTINE.map((step) => (
              <div key={step.step} className="routine-step">
                <div className="routine-step-left">
                  <span className="routine-step-name">{step.step}</span>
                  <div className="routine-step-badges">
                    {step.am && (
                      <span className="routine-badge routine-badge--am">AM</span>
                    )}
                    {step.pm && (
                      <span className="routine-badge routine-badge--pm">PM</span>
                    )}
                  </div>
                </div>
                <div className="routine-step-right">
                  <p className="routine-step-why">{step.why}</p>
                  <p className="routine-step-ingredients">
                    <em>Key ingredients:</em> {step.ingredients}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <div className="skincare-cta">
        <div className="container">
          <div className="skincare-cta-inner">
            <div>
              <h3>Not sure where to start?</h3>
              <p>
                Book a complimentary skin consultation. Dawn will assess your skin,
                answer your questions, and build a plan around your goals.
              </p>
            </div>
            <div className="skincare-cta-buttons">
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Free Consultation
              </a>
              <a href="tel:9096355124" className="btn-outline">
                Call (909) 635-5124
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
