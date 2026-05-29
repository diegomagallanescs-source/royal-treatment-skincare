import { useState, useRef } from 'react'
import { monthlyContent } from '../monthlyContent' // skincareSpotlight moved to SkincarePage

const GIFT_URL = 'https://www.royaltreatmentskincare.net/gift-card'
const BOOK_URL = 'https://www.royaltreatmentskincare.net/book-online'

const brandColors = {
  'GLO':                  { bg: '#EEE8F5', text: '#6B4FA0' },
  'Topix':                { bg: '#E4EEF6', text: '#2F6A94' },
  'SkinScript':           { bg: '#E5F0E5', text: '#3D7A3C' },
  'Hale Cosmeceuticals':  { bg: '#F5EBE0', text: '#9A5B2A' },
}

const allProducts = [
  // ── GLO ──────────────────────────────────────
  { id: 1,  brand: 'GLO',                name: 'Daily Defense SPF 40',              category: 'Sunscreens',   price: '$52',  description: 'A lightweight mineral sunscreen providing broad-spectrum UVA/UVB protection. Sheer, non-greasy, and wears beautifully under makeup.',        benefits: ['SPF 40 Mineral', 'Non-comedogenic', 'Makeup-friendly'] },
  { id: 2,  brand: 'GLO',                name: 'Hydra-Bright Facial Mist',          category: 'Facial Mists', price: '$38',  description: 'An antioxidant-rich facial mist with hyaluronic acid and vitamin B5 that instantly hydrates and refreshes skin any time of day.',             benefits: ['Hyaluronic Acid', 'Vitamin B5', 'Sets makeup'] },
  { id: 3,  brand: 'GLO',                name: 'Brightening Vitamin C Serum',       category: 'Serums',       price: '$88',  description: 'Stabilized L-Ascorbic acid serum that visibly reduces dark spots, evens skin tone, and delivers a lit-from-within radiance.',                benefits: ['Stabilized Vit. C', 'Reduces dark spots', 'Antioxidant shield'] },
  { id: 4,  brand: 'GLO',                name: 'Gentle Hydrating Cleanser',         category: 'Cleansers',    price: '$36',  description: 'A sulfate-free gel cleanser that melts away impurities without disrupting the skin barrier. Ideal for sensitive and dry skin types.',          benefits: ['Sulfate-free', 'pH balanced', 'Barrier-safe'] },
  { id: 5,  brand: 'GLO',                name: 'Hydra-Bright Eye Gel',              category: 'Eye Care',     price: '$68',  description: 'A cooling eye gel with caffeine and peptides that targets puffiness, dark circles, and fine lines for an instantly refreshed appearance.',     benefits: ['Caffeine', 'Peptide complex', 'Depuffs & brightens'] },
  { id: 6,  brand: 'GLO',                name: 'Renewing Resurfacing Mask',         category: 'Masks',        price: '$58',  description: 'A weekly resurfacing mask with AHAs and kaolin clay that unclogs pores, refines texture, and leaves skin visibly smoother and clearer.',    benefits: ['AHA complex', 'Kaolin clay', 'Pore-refining'] },

  // ── Topix ──────────────────────────────────
  { id: 7,  brand: 'Topix',              name: 'Citrix Antioxidant Serum',          category: 'Serums',       price: '$95',  description: 'An award-winning serum with 20% Vitamin C, CoQ10, and alpha lipoic acid that defends against environmental damage and firms skin.',           benefits: ['20% Vitamin C', 'CoQ10 + ALA', 'Firms & tightens'] },
  { id: 8,  brand: 'Topix',              name: 'Replenix Retinol Smoothing Serum',  category: 'Serums',       price: '$78',  description: 'A clinically proven retinol serum that reduces fine lines, improves skin texture, and accelerates cell turnover. Gentle enough for nightly use.', benefits: ['Retinol 2x', 'Green tea polyphenols', 'Nightly anti-aging'] },
  { id: 9,  brand: 'Topix',              name: 'Benzoyl Peroxide 5% Wash',          category: 'Cleansers',    price: '$28',  description: 'A medicated acne wash that targets acne-causing bacteria at the source, reduces breakouts, and prevents future blemishes from forming.',       benefits: ['5% Benzoyl Peroxide', 'Antibacterial', 'Prevents breakouts'] },
  { id: 10, brand: 'Topix',              name: 'CF30 Antioxidant Cream',            category: 'Moisturizers', price: '$72',  description: 'A rich antioxidant moisturizer with Vitamins C & E and ferulic acid that protects, hydrates, and supports a healthy skin barrier.',             benefits: ['Vitamin C + E', 'Ferulic acid', 'Barrier repair'] },
  { id: 11, brand: 'Topix',              name: 'Replenix SPF 50+ Sunscreen',        category: 'Sunscreens',   price: '$48',  description: 'A medical-grade broad-spectrum sunscreen with green tea antioxidants. Water-resistant for 80 minutes and suitable for all skin types.',          benefits: ['SPF 50+', 'Water-resistant 80 min', 'Green tea antioxidants'] },
  { id: 12, brand: 'Topix',              name: 'Enlighten Pigment Corrector',       category: 'Serums',       price: '$82',  description: 'A targeted brightening treatment with kojic acid and niacinamide that fades stubborn dark spots, melasma, and post-acne discoloration.',        benefits: ['Kojic acid', 'Niacinamide', 'Fades melasma'] },

  // ── SkinScript ─────────────────────────────
  { id: 13, brand: 'SkinScript',         name: 'Blue Green Algae Cleanser',         category: 'Cleansers',    price: '$32',  description: 'A gentle plant-based cleanser enriched with blue green algae that deeply purifies while delivering essential amino acids and vitamins.',            benefits: ['Blue green algae', 'Amino acid complex', 'Balances oily skin'] },
  { id: 14, brand: 'SkinScript',         name: 'Raspberry Refining Cleanser',       category: 'Cleansers',    price: '$34',  description: 'An exfoliating gel cleanser with raspberry extract and glycolic acid that brightens, smooths, and gently resurfaces for a radiant complexion.',  benefits: ['Glycolic acid', 'Raspberry extract', 'Gentle resurfacing'] },
  { id: 15, brand: 'SkinScript',         name: 'Cacti & Aloe Hydrating Mist',       category: 'Facial Mists', price: '$30',  description: 'A soothing mist with prickly pear cactus and aloe vera that instantly calms and refreshes skin. Works beautifully over or under makeup.',         benefits: ['Prickly pear cactus', 'Aloe vera', 'Calming + hydrating'] },
  { id: 16, brand: 'SkinScript',         name: 'Green Tea Citrus Moisturizer',      category: 'Moisturizers', price: '$52',  description: 'A lightweight antioxidant moisturizer with green tea and citrus extracts that protects against environmental stressors and provides all-day hydration.', benefits: ['Green tea antioxidants', 'Citrus brightening', 'Lightweight'] },
  { id: 17, brand: 'SkinScript',         name: 'Pumpkin Brightening Enzyme Masque', category: 'Masks',        price: '$45',  description: 'A resurfacing enzyme mask with pumpkin enzymes and 10% glycolic acid that dissolves dead skin cells for an instantly smoother, brighter complexion.', benefits: ['Pumpkin enzymes', 'Glycolic acid 10%', 'Instant brightness'] },
  { id: 18, brand: 'SkinScript',         name: 'Daily Defense SPF 30+',             category: 'Sunscreens',   price: '$40',  description: 'A silky daily moisturizer and sunscreen in one. Provides complete UVA/UVB protection enriched with skin-loving antioxidants.',                    benefits: ['SPF 30+', 'Antioxidant blend', 'Moisturizing base'] },

  // ── Hale Cosmeceuticals ───────────────────
  { id: 19, brand: 'Hale Cosmeceuticals', name: 'Mandelic Acid Facial Cleanser',    category: 'Cleansers',    price: '$38',  description: 'A brightening cleanser with mandelic acid that gently exfoliates, evens skin tone, and addresses hyperpigmentation with every wash.',                benefits: ['Mandelic acid', 'Brightening', 'Hyperpigmentation'] },
  { id: 20, brand: 'Hale Cosmeceuticals', name: 'Hyaluronic Rose Facial Spray',     category: 'Facial Mists', price: '$35',  description: 'A luxurious multi-weight hyaluronic acid mist with rose water that delivers instant and long-lasting hydration at every layer of the skin.',         benefits: ['Multi-weight HA', 'Rose water', 'Deep + surface hydration'] },
  { id: 21, brand: 'Hale Cosmeceuticals', name: 'Stem Cell Renewal Serum',          category: 'Serums',       price: '$110', description: 'An advanced anti-aging serum with plant stem cells and a peptide complex that stimulates renewal, firms, and visibly reduces deep wrinkles.',           benefits: ['Plant stem cells', 'Peptide complex', 'Deep wrinkle reduction'] },
  { id: 22, brand: 'Hale Cosmeceuticals', name: 'Daily SPF 45 Moisturizer',         category: 'Sunscreens',   price: '$55',  description: 'A 2-in-1 antioxidant moisturizer with SPF 45 that hydrates while shielding skin from UV damage and environmental aging.',                          benefits: ['SPF 45 broad-spectrum', 'Antioxidant-enriched', 'Moisturizes & protects'] },
  { id: 23, brand: 'Hale Cosmeceuticals', name: 'Brightening Eye Complex',          category: 'Eye Care',     price: '$85',  description: 'A targeted eye treatment with vitamin K, retinol, and brightening peptides that reduces puffiness, dark circles, and fine lines.',                   benefits: ['Vitamin K + Retinol', 'Brightening peptides', 'Reduces puffiness'] },
  { id: 24, brand: 'Hale Cosmeceuticals', name: 'Niacinamide Brightening Cream',    category: 'Moisturizers', price: '$65',  description: 'A pore-minimizing brightening moisturizer with 10% niacinamide that controls oil, fades dark spots, and perfects the complexion.',                   benefits: ['10% Niacinamide', 'Pore-minimizing', 'Fades dark spots'] },
]

const categories = ['All', 'Cleansers', 'Sunscreens', 'Facial Mists', 'Serums', 'Moisturizers', 'Masks', 'Eye Care']
const brands = ['All Brands', 'GLO', 'Topix', 'SkinScript', 'Hale Cosmeceuticals']

export default function Products({ navigate }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeBrand, setActiveBrand] = useState('All Brands')
  const tabsRef = useRef(null)
  const { featuredProduct: fp } = monthlyContent

  const filtered = allProducts.filter((p) => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory
    const brandMatch = activeBrand === 'All Brands' || p.brand === activeBrand
    return catMatch && brandMatch
  })

  return (
    <div className="products-page">

      {/* ── Featured Product of the Month ── */}
      <section className="products-featured-month">
        <div className="container">
          <div className="featured-product-grid">
            <div className="fp-image-wrap">
              <img src={fp.image} alt={fp.name} />
              <span className="fp-badge">{fp.tagline}</span>
            </div>
            <div className="fp-content">
              <span className="section-label">{fp.tagline}</span>
              <p className="fp-brand">{fp.brand}</p>
              <h2 className="section-title">{fp.name}</h2>
              <p className="section-subtitle">{fp.description}</p>
              <p className="fp-price">{fp.price}</p>
              <ul className="fp-benefits">
                {fp.benefits.map((b) => (
                  <li key={b}>
                    <div className="fp-benefit-icon">✓</div>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={fp.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Product
                </a>
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Book a Facial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gift Card Banner ── */}
      <div className="products-gift-card">
        <div className="container">
          <div className="gift-card-inner">
            <div>
              <h3>Give the Gift of Glowing Skin</h3>
              <p>Royal Treatment gift cards make the perfect present for someone you care about.</p>
            </div>
            <a
              href={GIFT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Purchase a Gift Card
            </a>
          </div>
        </div>
      </div>

      {/* ── Products Collection ── */}
      <div className="container products-collection-header">
        <span className="section-label">In-Studio Retail</span>
        <div className="products-brand-logos" style={{ marginTop: '0.75rem' }}>
          {Object.keys(brandColors).map((b) => (
            <span
              key={b}
              className={`brand-pill${activeBrand === b ? ' active' : ''}`}
              style={
                activeBrand === b
                  ? { backgroundColor: brandColors[b].bg, color: brandColors[b].text, borderColor: brandColors[b].text }
                  : {}
              }
              onClick={() => setActiveBrand(activeBrand === b ? 'All Brands' : b)}
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* ── Category Tabs ── */}
      <div className="products-tabs-wrap">
        <div className="container">
          <div className="products-tabs" ref={tabsRef}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`products-tab${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Results Count ── */}
      <div className="container">
        <p className="products-count">
          Showing <strong>{filtered.length}</strong> product{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          {activeBrand !== 'All Brands' ? ` by ${activeBrand}` : ''}
        </p>
      </div>

      {/* ── Product Grid ── */}
      <div className="container">
        {filtered.length === 0 ? (
          <div className="products-empty">
            <p>No products match your current filters.</p>
            <button
              className="btn-outline"
              onClick={() => { setActiveCategory('All'); setActiveBrand('All Brands') }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>

      {/* ── Studio Note ── */}
      <div className="products-studio-note">
        <div className="container">
          <div className="studio-note-inner">
            <div>
              <h3>Not sure which product is right for you?</h3>
              <p>Visit us for a complimentary skin assessment. We'll build a personalized routine tailored to your skin's exact needs.</p>
            </div>
            <a href="tel:9096355124" className="btn-primary">Call (909) 635-5124</a>
          </div>
        </div>
      </div>

    </div>
  )
}

function ProductCard({ product: p }) {
  const brand = brandColors[p.brand] || { bg: '#F0EBE3', text: '#6B6B6B' }

  return (
    <div className="product-card">
      <div className="product-card-header" style={{ backgroundColor: brand.bg }}>
        <span className="product-brand-badge" style={{ color: brand.text }}>
          {p.brand}
        </span>
        <span className="product-category-tag">{p.category}</span>
      </div>

      <div className="product-card-body">
        <h3 className="product-name">{p.name}</h3>
        <p className="product-desc">{p.description}</p>
        <div className="product-benefits">
          {p.benefits.map((b) => (
            <span key={b} className="product-benefit-tag">{b}</span>
          ))}
        </div>
      </div>

      <div className="product-card-footer">
        <span className="product-price">{p.price}</span>
        <span className="product-in-studio">Available In Studio</span>
      </div>
    </div>
  )
}
