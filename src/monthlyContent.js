/*
 * ============================================================
 *  MONTHLY CONTENT — update this file at the start of each month
 * ============================================================
 *
 *  Three things to update:
 *   1. banner       — the top announcement bar message
 *   2. featuredProduct — product spotlight card
 *   3. skincareSpotlight — educational segment
 *
 *  All Wix booking links stay the same; only change the content below.
 * ============================================================
 */

export const monthlyContent = {

  // ── 1. TOP BANNER ────────────────────────────────────────────
  // Appears as a slim gold bar at the very top of the site.
  // Change `message` and optionally the `ctaText` each month.
  banner: {
    message: "🌸 May Glow Special — Refresh your skin this spring and step into summer radiant!",
    ctaText: "Book Now",
    ctaLink: "#/services",
  },

  // ── 2. FEATURED PRODUCT OF THE MONTH ─────────────────────────
  // Displayed in its own section between Services and the Spotlight.
  // Replace `image` with a URL to the product photo each month.
  featuredProduct: {
    name: "Vitamin C Brightening Serum",
    brand: "SkinMedica",
    tagline: "May's Featured Product",
    description:
      "This powerful antioxidant serum targets dark spots, sun damage, and uneven skin tone. Rich in Vitamin C, it stimulates collagen production and delivers a radiant, lit-from-within glow that's perfect heading into summer.",
    price: "$85",
    benefits: [
      "Visibly brightens dull, tired skin",
      "Reduces hyperpigmentation & dark spots",
      "Boosts collagen for firmer skin",
      "Protects against environmental stressors",
    ],
    image:
      "https://static.wixstatic.com/media/11062b_95d34f15761e4114a57b17823228948ef000.jpg",
    purchaseLink: "https://www.royaltreatmentskincare.net/products",
  },

  // ── 3. SKINCARE SPOTLIGHT (education segment) ─────────────────
  // An informational article-style section.
  // Change `topic`, `body`, and `image` each month.
  skincareSpotlight: {
    topic: "Understanding Melasma",
    subtitle: "What causes it — and how we treat it",
    tagline: "May's Skincare Spotlight",
    body: [
      "Melasma is a very common skin condition that causes brown, gray-brown, or bluish-gray patches, most often appearing on the face — the cheeks, forehead, nose, and upper lip. While it can affect anyone, it's most common in women and those with deeper skin tones.",
      "The exact cause isn't fully understood, but hormonal changes are a major trigger. Pregnancy (which is why it's sometimes called the 'mask of pregnancy'), birth control pills, and hormone therapy can all bring on melasma. Sun exposure makes it significantly worse, as UV rays stimulate melanocyte cells to produce extra pigment.",
      "The good news? Melasma is very treatable. Consistent SPF use is the single most important step. In our studio, we address melasma with targeted treatments like VI Peel Advanced, Vitamin C facials, and microdermabrasion — each designed to gently resurface the skin and break up pigment over time.",
    ],
    tip: "Pro tip: Always wear SPF 30+ daily, even on cloudy days. Sun exposure — even indirect — is the #1 way melasma flares up.",
    image:
      "https://static.wixstatic.com/media/nsplsh_96dd59ade1744ba886aa0343a3ad88c6~mv2.jpg",
    ctaText: "Book a Consultation",
    ctaLink: "https://www.royaltreatmentskincare.net/book-online",
  },
};
