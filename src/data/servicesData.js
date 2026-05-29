export const BOOK_URL = 'https://www.royaltreatmentskincare.net/book-online'

// Categories used for the filter tabs
export const SERVICE_CATEGORIES = [
  'All',
  'Consultations',
  'Facials',
  'Light Therapy',
  'Advanced Treatments',
  'Chemical Peels',
  'Add-Ons',
]

export const services = [
  // ── CONSULTATIONS ──────────────────────────────────────────────────────────
  {
    id: 1,
    name: 'Skin Consultation',
    category: 'Consultations',
    duration: '30 min',
    price: 'FREE',
    priceFree: true,
    description:
      'A complimentary 30-minute session to assess your unique skin type, discuss your concerns, and build a personalized treatment plan. The perfect starting point for new clients.',
  },

  // ── FACIALS ────────────────────────────────────────────────────────────────
  {
    id: 2,
    name: 'Acne Facial',
    category: 'Facials',
    duration: '1 hr',
    price: '$85',
    description:
      'A deep-cleansing treatment formulated for acne-prone skin. Includes thorough cleansing, gentle exfoliation, targeted extractions, and calming serums to reduce active breakouts and inflammation.',
  },
  {
    id: 3,
    name: 'Acne Facial With Blue Light Therapy',
    category: 'Facials',
    duration: '1 hr 30 min',
    price: '$120',
    description:
      'Our signature acne facial enhanced with blue light therapy, which destroys acne-causing bacteria deep within the pores. Ideal for persistent or active breakouts.',
  },
  {
    id: 4,
    name: 'Back Acne Treatment',
    category: 'Facials',
    duration: '1 hr',
    price: '$110',
    description:
      'A thorough back treatment combining deep cleansing, exfoliation, and targeted breakout control. Addresses body acne and congestion with calming masks and anti-bacterial therapy.',
  },
  {
    id: 5,
    name: 'Cleansing Facial',
    category: 'Facials',
    duration: '1 hr',
    price: '$95',
    description:
      'A classic deep-cleanse facial that removes impurities, unclogs pores, and refreshes skin. Includes exfoliation, steam, extractions, and a customized mask suited to your skin type.',
  },
  {
    id: 6,
    name: 'Cleansing Facial for Men',
    category: 'Facials',
    duration: '1 hr',
    price: '$95',
    description:
      "A men's deep-cleanse treatment addressing enlarged pores, razor irritation, and excess oil. Same thorough cleansing process as our standard facial, tailored to the unique needs of male skin.",
  },
  {
    id: 7,
    name: 'Vitamin C Facial',
    category: 'Facials',
    duration: '1 hr',
    price: '$100',
    description:
      'A brightening facial powered by Vitamin C antioxidants to fade dark spots, even skin tone, and boost collagen production. Skin leaves visibly radiant and refreshed.',
  },
  {
    id: 8,
    name: 'Vitamin C Facial with Yellow Light',
    category: 'Facials',
    duration: '1 hr 30 min',
    price: '$140',
    description:
      'Our Vitamin C facial combined with yellow light therapy to target pigmentation and uneven tone at a deeper level. Delivers a lit-from-within glow with enhanced luminosity.',
  },
  {
    id: 9,
    name: 'Firm Skin Facial',
    category: 'Facials',
    duration: '1 hr',
    price: '$100',
    description:
      'A firming and lifting treatment designed to restore elasticity, diminish fine lines, and promote collagen synthesis. Perfect for mature skin or anyone looking to maintain youthful firmness.',
  },
  {
    id: 10,
    name: 'Firm Skin Facial with Red Light Therapy',
    category: 'Facials',
    duration: '1 hr 30 min',
    price: '$140',
    description:
      'Our firmness facial paired with red light therapy, which stimulates collagen and elastin production for deeper rejuvenation. Delivers more visible, longer-lasting lifting results.',
  },
  {
    id: 11,
    name: 'Strawberry and Chocolate Facial',
    category: 'Facials',
    duration: '1 hr',
    price: '$95',
    description:
      'A luxurious antioxidant-rich facial infused with strawberry and chocolate extracts. Packed with vitamins and natural brighteners, this indulgent treatment nourishes and revives dull skin.',
  },
  {
    id: 12,
    name: 'Berry Bliss Facial',
    category: 'Facials',
    duration: '1 hr',
    price: '$100',
    description:
      'A hydrating antioxidant facial using berry-derived enzymes to gently exfoliate, plump, and illuminate the complexion. Ideal for all skin types seeking a fresh, glowing finish.',
  },
  {
    id: 13,
    name: 'Pumpkin Peel Facial',
    category: 'Facials',
    duration: '1 hr',
    price: '$100',
    description:
      'A natural enzyme peel using pumpkin to deeply exfoliate and resurface skin. Rich in Vitamins A and C, this seasonal favorite brightens, smooths texture, and promotes healthy cell renewal.',
  },
  {
    id: 14,
    name: 'Oxygen Facial',
    category: 'Facials',
    duration: '1 hr',
    price: '$115',
    description:
      'A rejuvenating facial that infuses the skin with pressurized oxygen and hyaluronic acid to plump, hydrate, and restore a dewy glow. No downtime and suitable for all skin types.',
  },
  {
    id: 15,
    name: 'Radiofrequency Facial with Red Light',
    category: 'Facials',
    duration: '1 hr',
    price: '$115',
    description:
      'A non-surgical skin tightening treatment combining radiofrequency energy with red light therapy. Stimulates deep collagen remodeling and visibly firms sagging or lax skin over time.',
  },
  {
    id: 16,
    name: 'Microcurrent Facial',
    category: 'Facials',
    duration: '1 hr 30 min',
    price: '$160',
    description:
      "Often called the 'non-surgical facelift,' this treatment uses gentle microcurrent impulses to re-educate facial muscles, lift contours, and stimulate ATP production for lasting cellular energy.",
  },
  {
    id: 17,
    name: 'Hydrofacial',
    category: 'Facials',
    duration: '1 hr',
    price: '$115',
    description:
      'A medical-grade resurfacing treatment that cleanses, exfoliates, extracts, and infuses skin with customized serums in one step. Suitable for all skin types with zero downtime.',
  },
  {
    id: 18,
    name: 'Hydrofacial with Radiofrequency',
    category: 'Facials',
    duration: '1 hr 30 min',
    price: '$140',
    description:
      'Our signature Hydrofacial combined with radiofrequency tightening for a dual-action treatment that deeply cleanses, hydrates, and simultaneously lifts and firms the skin.',
  },

  // ── LIGHT THERAPY ─────────────────────────────────────────────────────────
  {
    id: 19,
    name: 'Light Therapy (Red, Blue, Yellow, Infrared)',
    category: 'Light Therapy',
    duration: '30 min',
    price: '$55',
    description:
      'A standalone LED light therapy session using FDA-cleared wavelengths targeted to your skin concern. Red for aging, blue for acne, yellow for redness, and infrared for deep healing and recovery.',
  },
  {
    id: 20,
    name: 'Light Therapy (Add-On To Any Facial)',
    category: 'Add-Ons',
    duration: '30 min',
    price: '$50',
    description:
      'Add a targeted LED light session to any facial for amplified, longer-lasting results. Choose the wavelength best suited to your skin concern for a supercharged treatment.',
  },

  // ── ADVANCED TREATMENTS ───────────────────────────────────────────────────
  {
    id: 21,
    name: 'Microdermabrasion with Exfoliation',
    category: 'Advanced Treatments',
    duration: '1 hr',
    price: '$105',
    description:
      'A mechanical exfoliation treatment using a diamond tip to resurface skin and reduce fine lines, hyperpigmentation, enlarged pores, and rough texture. Promotes healthier, more even-toned skin.',
  },
  {
    id: 22,
    name: 'Micro-needling',
    category: 'Advanced Treatments',
    duration: '1 hr 30 min',
    price: '$258',
    description:
      'A collagen induction therapy using fine needles to create micro-channels in the skin, triggering the body\'s natural healing response. Reduces scars, wrinkles, large pores, and hyperpigmentation.',
  },
  {
    id: 23,
    name: 'Micro-Needling with Stem Cells',
    category: 'Advanced Treatments',
    duration: '1 hr 30 min',
    price: '$350',
    description:
      'Advanced micro-needling infused with plant stem cell growth factors for accelerated healing and significantly amplified collagen regeneration. Ideal for deep scarring or mature skin concerns.',
  },
  {
    id: 24,
    name: 'Advanced Radiofrequency Microneedling',
    category: 'Advanced Treatments',
    duration: '1 hr 30 min',
    price: 'Starting at $195',
    description:
      'A next-generation treatment delivering RF energy through micro-needles deep into the dermis. Produces dramatic skin tightening, pore reduction, scar improvement, and long-lasting results.',
  },
  {
    id: 25,
    name: 'Dermaplaning',
    category: 'Advanced Treatments',
    duration: '1 hr',
    price: '$110',
    description:
      "A precision manual exfoliation using a surgical scalpel to remove dead skin cells and vellus hair ('peach fuzz'). Leaves skin exceptionally smooth, glowing, and primed for product absorption.",
  },
  {
    id: 26,
    name: 'High Intensity Focused Ultrasound',
    category: 'Advanced Treatments',
    duration: '2 hr 30 min',
    price: 'Starting at $250',
    description:
      'A non-invasive skin lifting treatment using focused ultrasound energy to stimulate deep collagen production. Ideal for jowls, neck, brow, and chest. Results develop gradually over 90 days.',
  },

  // ── CHEMICAL PEELS ────────────────────────────────────────────────────────
  {
    id: 27,
    name: 'Jessner Peel',
    category: 'Chemical Peels',
    duration: '1 hr',
    price: '$130',
    description:
      'A medium-depth peel combining salicylic acid, lactic acid, and resorcinol to treat acne, hyperpigmentation, and fine lines. Expect visible peeling over 5–7 days and renewed, brighter skin.',
  },
  {
    id: 28,
    name: 'Salicylic Peel',
    category: 'Chemical Peels',
    duration: '1 hr',
    price: '$130',
    description:
      'A beta-hydroxy acid peel ideal for oily, acne-prone, and congested skin. Penetrates deep into pores to clear breakouts, reduce blackheads, and even overall skin tone.',
  },
  {
    id: 29,
    name: 'TCA Peel',
    category: 'Chemical Peels',
    duration: '1 hr',
    price: '$155',
    description:
      'A trichloroacetic acid peel delivering medium-depth resurfacing to address wrinkles, discoloration, and uneven texture. One of the most effective peels for visible, lasting rejuvenation.',
  },
  {
    id: 30,
    name: 'VI Peel',
    category: 'Chemical Peels',
    duration: '1 hr',
    price: '$232',
    description:
      'A medical-grade peel blending TCA, retinol, salicylic acid, and vitamins. Effective for all skin types and tones with minimal downtime. Addresses fine lines, pigmentation, and skin texture.',
  },
  {
    id: 31,
    name: 'VI Peel – Advanced',
    category: 'Chemical Peels',
    duration: '1 hr',
    price: '$252',
    description:
      'An enhanced VI Peel with a deeper-penetrating booster targeting moderate wrinkles, hyperpigmentation, and sun damage. Delivers more dramatic rejuvenation with the same minimal downtime.',
  },
  {
    id: 32,
    name: 'VI Peel – Precision Plus',
    category: 'Chemical Peels',
    duration: '1 hr',
    price: '$252',
    description:
      'The VI Peel formulated specifically for stubborn pigmentation including melasma, sun damage, and post-inflammatory hyperpigmentation. Includes a precision booster for targeted, lasting results.',
  },
  {
    id: 33,
    name: 'VI Peel – Purify',
    category: 'Chemical Peels',
    duration: '1 hr',
    price: '$232',
    description:
      'The VI Peel designed for acne-prone skin. Targets active breakouts, minimizes acne scars, tightens pores, and regulates oil production for a clearer, smoother complexion over time.',
  },
  {
    id: 34,
    name: 'VI Peel Precision + Peptides',
    category: 'Chemical Peels',
    duration: '1 hr',
    price: '$255',
    description:
      'VI Peel Precision Plus with added peptide support for enhanced anti-aging benefits and skin barrier repair while effectively addressing stubborn pigmentation and uneven tone.',
  },
  {
    id: 35,
    name: 'VI Peel Purify with Precision + Peptides',
    category: 'Chemical Peels',
    duration: '1 hr',
    price: '$255',
    description:
      'The most comprehensive VI Peel option for acne-prone skin with pigmentation concerns. Combines purifying, brightening, and peptide benefits in one powerful, multi-tasking treatment.',
  },

  // ── ADD-ONS ────────────────────────────────────────────────────────────────
  {
    id: 36,
    name: 'Eye Peptides/Collagen Treatment',
    category: 'Add-Ons',
    duration: '30 min',
    price: '$25',
    addOn: true,
    description:
      'A concentrated eye area treatment using peptides and collagen to reduce fine lines, puffiness, and dark circles. Add to any facial to give extra attention to the delicate eye zone.',
  },
  {
    id: 37,
    name: 'Microdermabrasion (Add-On to Any Facial)',
    category: 'Add-Ons',
    duration: '30 min',
    price: '$55',
    addOn: true,
    description:
      'Add a resurfacing microdermabrasion pass to your facial for deeper exfoliation, improved skin texture, and better absorption of active serums and treatment products.',
  },
  {
    id: 38,
    name: 'Dermaplaning (Add-On To Any Facial)',
    category: 'Add-Ons',
    duration: '30 min',
    price: '$55',
    addOn: true,
    description:
      'Add dermaplaning to any facial for an ultra-smooth finish and enhanced product absorption. Removes surface buildup and peach fuzz, leaving skin polished and glowing.',
  },
  {
    id: 39,
    name: 'Kenalog 10 or 40',
    category: 'Add-Ons',
    duration: '30 min',
    price: 'Starting at $45',
    addOn: true,
    description:
      'A targeted corticosteroid injection for stubborn cystic acne or keloid scars. Rapidly reduces inflammation and minimizes the appearance of hard-to-treat breakouts and raised scarring.',
  },
]
