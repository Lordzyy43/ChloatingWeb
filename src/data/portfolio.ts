import type { CollectionItem, PortfolioProfile } from "@/types";

export const collections: CollectionItem[] = [
  {
    slug: "t-shirts",
    name: "T-Shirts & Tops",
    tag: "Core Essentials",
    year: "2026 Archive",
    intro:
      "A curated exploration of boxy silhouettes, heavyweight cotton, and sharp graphic placements designed for everyday rotation.",
    impact:
      "Built for heavy street styling and high-contrast editorial close-ups.",
    palette: ["Washed Black", "Bone White", "Vintage Grey"],
    process: [
      {
        title: "Silhouette Study",
        summary: "Focusing on the perfect drop shoulder and body length.",
        detail:
          "The foundation of a great tee lies in its shape. We engineer the cut to drape naturally, offering a relaxed yet structured aesthetic that feels premium on body.",
      },
      {
        title: "Textile Selection",
        summary: "Sourcing high-density, durable cotton fabrics.",
        detail:
          "Using tightly knitted 16s to 20s combed cotton to ensure the garment holds its shape, resists shrinkage, and ages beautifully after multiple washes.",
      },
      {
        title: "Graphic Application",
        summary: "Plastisol and high-density print techniques.",
        detail:
          "Artwork is applied using methods that guarantee longevity. From crack-resistant plastisol to tactile puff prints, every graphic adds depth to the piece.",
      },
    ],
    deliverables: [
      "Tech Pack Specs",
      "Graphic Scaling",
      "Fabric Callouts",
      "Sample Reviews",
    ],
    heroLine:
      "The foundation of every wardrobe, engineered for perfect drape and durability.",
    heroStat: "Heavyweight Cotton / Boxy Fit / High-Density Print",
    mediaSlots: [
      {
        kind: "video",
        label: "Hero reel",
        caption: "Open slot for campaign motion footage.",
        note: "Drop the reel into /public/media/t-shirts-hero.mp4",
        suggestedPath: "/media/t-shirts-hero.mp4",
      },
      {
        kind: "image",
        label: "Moodboard still",
        caption: "Reference frame for silhouette and tone.",
        note: "Drop a still into /public/media/t-shirts-moodboard.jpg",
        suggestedPath: "/media/t-shirts-moodboard.jpg",
      },
      {
        kind: "image",
        label: "Tech pack spread",
        caption: "Use a clean flatlay or spec-sheet shot.",
        note: "Drop a still into /public/media/t-shirts-tech.jpg",
        suggestedPath: "/media/t-shirts-tech.jpg",
      },
      {
        kind: "image",
        label: "Campaign frame",
        caption: "Best editorial image from the final shoot.",
        note: "Drop a still into /public/media/t-shirts-campaign.jpg",
        suggestedPath: "/media/t-shirts-campaign.jpg",
      },
    ],
    gallery: [
      {
        kind: "video",
        title: "Lookbook motion",
        caption: "Hero footage establishing the garment's fit.",
        note: "Drop the strongest campaign reel here.",
        suggestedPath: "/media/t-shirts-hero.mp4",
        tone: "hero",
        layout: "hero",
      },
      {
        kind: "image",
        title: "Vintage Wash",
        caption: "Acid washed finish for an aged look.",
        note: "Close up of the fabric texture.",
        suggestedPath: "/media/t-shirts-wash.jpg",
        tone: "texture",
        layout: "tall",
      },
      {
        kind: "image",
        title: "Graphic Placement",
        caption: "Center chest heavy print scaling.",
        note: "Showcase the artwork details.",
        suggestedPath: "/media/t-shirts-graphic.jpg",
        tone: "detail",
        layout: "wide",
      },
      {
        kind: "image",
        title: "Neck Ribbing",
        caption: "Thick collar construction for durability.",
        note: "Macro detail shots of the stitching.",
        suggestedPath: "/media/t-shirts-rib.jpg",
        tone: "construction",
        layout: "square",
      },
      {
        kind: "image",
        title: "Oversized Fit",
        caption: "Drop shoulder silhouette in action.",
        note: "Editorial full body shot.",
        suggestedPath: "/media/t-shirts-campaign.jpg",
        tone: "final",
        layout: "wide",
      },
    ],
    detailSummary:
      "An in-depth look at our approach to designing the perfect everyday t-shirt, from fabric sourcing to final fit execution.",
  },
  {
    slug: "pants",
    name: "Pants & Bottoms",
    tag: "Utility Series",
    year: "2026 Archive",
    intro:
      "Utilitarian legwear balancing complex pocket systems with relaxed, wearable cuts that define the lower silhouette.",
    impact: "Designed for tactical movement and high-contrast street styling.",
    palette: ["Olive Drab", "Faded Denim", "Asphalt"],
    process: [
      {
        title: "Pattern Making",
        summary: "Developing articulated knees and wide-leg openings.",
        detail:
          "We focus on creating movement-friendly patterns. The goal is to achieve a substantial, stacked look over sneakers without appearing excessively baggy.",
      },
      {
        title: "Hardware Integration",
        summary: "Sourcing industrial zippers, rivets, and drawstrings.",
        detail:
          "Every pocket and closure is reinforced with premium metal hardware, ensuring utility is matched with a rugged, industrial aesthetic.",
      },
      {
        title: "Washing Process",
        summary: "Enzyme and stone washing for a lived-in feel.",
        detail:
          "Denim and canvas fabrics undergo strict washing treatments to achieve the perfect faded texture and softness right out of the box.",
      },
    ],
    deliverables: [
      "Hardware Specs",
      "Washing Notes",
      "Measurement Charts",
      "Detail Shots",
    ],
    heroLine: "Tactical utility meets relaxed, everyday silhouettes.",
    heroStat: "Articulated Knees / Heavy Hardware / Wide Cut",
    mediaSlots: [
      {
        kind: "video",
        label: "Movement reel",
        caption: "Showcasing the drape and stack of the pants.",
        note: "Drop the reel into /public/media/pants-hero.mp4",
        suggestedPath: "/media/pants-hero.mp4",
      },
      {
        kind: "image",
        label: "Denim Fade",
        caption: "Close up of the stone washed texture.",
        note: "Drop a still into /public/media/pants-wash.jpg",
        suggestedPath: "/media/pants-wash.jpg",
      },
      {
        kind: "image",
        label: "Hardware Spec",
        caption: "Highlighting custom rivets and zips.",
        note: "Drop a still into /public/media/pants-hardware.jpg",
        suggestedPath: "/media/pants-hardware.jpg",
      },
      {
        kind: "image",
        label: "Street Style",
        caption: "Full length campaign shot.",
        note: "Drop a still into /public/media/pants-campaign.jpg",
        suggestedPath: "/media/pants-campaign.jpg",
      },
    ],
    gallery: [
      {
        kind: "video",
        title: "Urban motion",
        caption: "Motion showcasing the pant break over footwear.",
        note: "Use a clear motion loop.",
        suggestedPath: "/media/pants-hero.mp4",
        tone: "hero",
        layout: "hero",
      },
      {
        kind: "image",
        title: "Cargo Layout",
        caption: "Multi-pocket system engineering.",
        note: "Showcase the utility design.",
        suggestedPath: "/media/pants-cargo.jpg",
        tone: "system",
        layout: "tall",
      },
      {
        kind: "image",
        title: "Faded Denim",
        caption: "The result of our enzyme wash process.",
        note: "Macro texture shot.",
        suggestedPath: "/media/pants-wash.jpg",
        tone: "texture",
        layout: "wide",
      },
      {
        kind: "image",
        title: "Hardware Close-up",
        caption: "Industrial zippers and heavy rivets.",
        note: "Detail shot of the trims.",
        suggestedPath: "/media/pants-hardware.jpg",
        tone: "construction",
        layout: "square",
      },
      {
        kind: "image",
        title: "Parachute Fit",
        caption: "Adjustable hem drawstrings in use.",
        note: "Editorial full body shot.",
        suggestedPath: "/media/pants-campaign.jpg",
        tone: "final",
        layout: "wide",
      },
    ],
    detailSummary:
      "A comprehensive breakdown of our bottom-wear design process, highlighting complex hardware and utilitarian aesthetics.",
  },
  {
    slug: "jackets",
    name: "Jackets & Outerwear",
    tag: "Layering System",
    year: "2026 Archive",
    intro:
      "Technical outerwear pieces acting as the ultimate protective and stylistic layer for any climate.",
    impact:
      "High-impact silhouettes designed for cold weather and complex editorial layering.",
    palette: ["Midnight Blue", "Safety Orange", "Chrome"],
    process: [
      {
        title: "Material Sourcing",
        summary: "Selecting weather-resistant and breathable fabrics.",
        detail:
          "Using high-grade nylon, treated canvas, and polar fleece linings to ensure the jacket performs as flawlessly as it looks.",
      },
      {
        title: "Panel Engineering",
        summary: "Complex cut-and-sew mapping for structure.",
        detail:
          "Outerwear requires precise paneling to maintain a sharp, commanding silhouette even when layered over heavy hoodies or knits.",
      },
      {
        title: "Finishing Details",
        summary: "Hidden pockets, Velcro cuffs, and storm flaps.",
        detail:
          "Adding subtle technical features that elevate the user experience and underscore the garment's premium, tactical feel.",
      },
    ],
    deliverables: [
      "Lining Specs",
      "Panel Mapping",
      "Material Board",
      "Campaign Edits",
    ],
    heroLine:
      "Engineered layers offering maximum protection without compromising form.",
    heroStat: "Weather Resistant / Cut & Sew / Technical Trim",
    mediaSlots: [
      {
        kind: "video",
        label: "Outerwear reel",
        caption: "Dynamic movement showing fabric reflection.",
        note: "Drop the reel into /public/media/jackets-hero.mp4",
        suggestedPath: "/media/jackets-hero.mp4",
      },
      {
        kind: "image",
        label: "Nylon Texture",
        caption: "Macro shot of the water-resistant surface.",
        note: "Drop a still into /public/media/jackets-texture.jpg",
        suggestedPath: "/media/jackets-texture.jpg",
      },
      {
        kind: "image",
        label: "Zipper Detail",
        caption: "Heavy-duty front closure specs.",
        note: "Drop a still into /public/media/jackets-zip.jpg",
        suggestedPath: "/media/jackets-zip.jpg",
      },
      {
        kind: "image",
        label: "Layered Look",
        caption: "Styled over a heavy fleece or hoodie.",
        note: "Drop a still into /public/media/jackets-campaign.jpg",
        suggestedPath: "/media/jackets-campaign.jpg",
      },
    ],
    gallery: [
      {
        kind: "video",
        title: "Industrial reel",
        caption: "Reflective accents catching light in motion.",
        note: "Moody loop with hard lighting.",
        suggestedPath: "/media/jackets-hero.mp4",
        tone: "hero",
        layout: "hero",
      },
      {
        kind: "image",
        title: "Bomber Silhouette",
        caption: "Cropped fit with exaggerated sleeves.",
        note: "Studio reference shot.",
        suggestedPath: "/media/jackets-bomber.jpg",
        tone: "fit",
        layout: "tall",
      },
      {
        kind: "image",
        title: "Storm Flap",
        caption: "Hidden closures for weather protection.",
        note: "Detail construction shot.",
        suggestedPath: "/media/jackets-zip.jpg",
        tone: "construction",
        layout: "wide",
      },
      {
        kind: "image",
        title: "Lining Details",
        caption: "Contrast safety orange inner lining.",
        note: "Showcase the interior design.",
        suggestedPath: "/media/jackets-lining.jpg",
        tone: "detail",
        layout: "square",
      },
      {
        kind: "image",
        title: "Night Campaign",
        caption: "The outerwear performing in its natural habitat.",
        note: "Final polished lookbook frame.",
        suggestedPath: "/media/jackets-campaign.jpg",
        tone: "final",
        layout: "wide",
      },
    ],
    detailSummary:
      "Exploring the intricate construction and material science behind our technical outerwear developments.",
  },
  {
    slug: "logo",
    name: "Visual Identity",
    tag: "Brand System",
    year: "2026 Archive",
    intro:
      "The core DNA of the brand translated into typography, emblems, and packaging systems.",
    impact:
      "Creating a cohesive, recognizable mark across all physical and digital touchpoints.",
    palette: ["Pure Black", "Optic White", "Silver Chrome"],
    process: [
      {
        title: "Logotype Design",
        summary: "Crafting custom typography for the main wordmark.",
        detail:
          "We develop brutalist and clean typography that commands attention on garment tags, billboards, and digital screens alike.",
      },
      {
        title: "Emblem Creation",
        summary: "Designing the shorthand visual icon.",
        detail:
          "Creating a strong, scalable symbol that works perfectly whether it's embroidered on a cap, cast as a metal pin, or woven into a tiny hem label.",
      },
      {
        title: "Packaging System",
        summary: "Hangtags, polymailers, and woven labels.",
        detail:
          "Translating the logo into physical brand experiences that make the unboxing process feel luxurious and highly collectible.",
      },
    ],
    deliverables: [
      "Vector Files",
      "Brand Guidelines",
      "Label Mockups",
      "Packaging Specs",
    ],
    heroLine:
      "A stark, uncompromising visual identity that anchors the entire brand.",
    heroStat: "Custom Typography / Scalable Emblem / Packaging System",
    mediaSlots: [
      {
        kind: "video",
        label: "Identity loop",
        caption: "3D spinning emblem or typography motion.",
        note: "Drop the reel into /public/media/logo-hero.mp4",
        suggestedPath: "/media/logo-hero.mp4",
      },
      {
        kind: "image",
        label: "Woven Label",
        caption: "Neck tag implementation.",
        note: "Drop a still into /public/media/logo-label.jpg",
        suggestedPath: "/media/logo-label.jpg",
      },
      {
        kind: "image",
        label: "Hangtag Design",
        caption: "Heavy cardstock packaging specs.",
        note: "Drop a still into /public/media/logo-hangtag.jpg",
        suggestedPath: "/media/logo-hangtag.jpg",
      },
      {
        kind: "image",
        label: "Digital Mockup",
        caption: "Web and social media application.",
        note: "Drop a still into /public/media/logo-mockup.jpg",
        suggestedPath: "/media/logo-mockup.jpg",
      },
    ],
    gallery: [
      {
        kind: "video",
        title: "Chrome Reveal",
        caption: "The brand emblem rendered in 3D metallic texture.",
        note: "Use a clean motion graphics loop.",
        suggestedPath: "/media/logo-hero.mp4",
        tone: "hero",
        layout: "hero",
      },
      {
        kind: "image",
        title: "Primary Wordmark",
        caption: "Bold brutalist typography study.",
        note: "Showcase font weights and tracking.",
        suggestedPath: "/media/logo-type.jpg",
        tone: "identity",
        layout: "square",
      },
      {
        kind: "image",
        title: "Label Specs",
        caption: "Technical sizing for woven garment tags.",
        note: "Flatlay or digital blueprint.",
        suggestedPath: "/media/logo-label.jpg",
        tone: "system",
        layout: "tall",
      },
      {
        kind: "image",
        title: "Hangtag Assembly",
        caption: "String, safety pin, and matte cardstock details.",
        note: "Packaging close-up.",
        suggestedPath: "/media/logo-hangtag.jpg",
        tone: "packaging",
        layout: "wide",
      },
      {
        kind: "image",
        title: "Lookbook Integration",
        caption: "The logo applied seamlessly onto a campaign image.",
        note: "Editorial layout showcase.",
        suggestedPath: "/media/logo-mockup.jpg",
        tone: "final",
        layout: "wide",
      },
    ],
    detailSummary:
      "A showcase of the strategic branding and visual identity systems that give our clothing line its distinct, uncompromising voice.",
  },
];

export const portfolioProfile: PortfolioProfile = {
  name: "78Archive",
  role: "Streetwear designer / visual direction / lookbook systems",
  location: "Indonesia",
  email: "hello@78archive.com",
  instagram: "@78archive",
  story:
    "Building a portfolio that bridges raw streetwear aesthetics with rigorous production logic and compelling visual presentations for brand owners and recruiters alike.",
  philosophy:
    "Every piece must sell the mood first, then articulate the process behind it. That is the architecture of a credible, high-impact lookbook.",
  skills: [
    "Concept direction",
    "Moodboard curation",
    "Tech pack preparation",
    "Photo art direction",
    "Lookbook composition",
    "Campaign styling",
  ],
};

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}
