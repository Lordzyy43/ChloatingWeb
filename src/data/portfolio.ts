export type CollectionProcess = {
  title: string;
  summary: string;
  detail: string;
};

export type CollectionMediaSlot = {
  kind: "image" | "video";
  label: string;
  caption: string;
  note: string;
  suggestedPath: string;
};

export type CollectionItem = {
  slug: string;
  name: string;
  tag: string;
  year: string;
  intro: string;
  impact: string;
  palette: string[];
  process: CollectionProcess[];
  deliverables: string[];
  heroLine: string;
  heroStat: string;
  mediaSlots: CollectionMediaSlot[];
  detailSummary: string;
};

export const collections: CollectionItem[] = [
  {
    slug: "concrete-ritual",
    name: "Concrete Ritual",
    tag: "Capsule Drop",
    year: "01 / 2026",
    intro:
      "Daily wear dengan siluet boxy, layering tajam, dan visual yang terasa seperti campaign zine.",
    impact: "Built for heavy street styling and editorial close-ups.",
    palette: ["Graphite", "Bone", "Washed Olive"],
    process: [
      {
        title: "Moodboard",
        summary: "Referensi brutalist, skate archive, dan signage kota malam.",
        detail:
          "Arah visual dibangun dari foto jalanan berkontras tinggi, fabric aged, dan komposisi grid yang memberi rasa urban premium.",
      },
      {
        title: "Tech Pack",
        summary: "Cutline boxy, panel mapping, dan detail construction.",
        detail:
          "Teknik produksi disiapkan untuk drop shoulder, neck rib yang kuat, dan placement artwork yang konsisten di semua ukuran.",
      },
      {
        title: "Photoshoot",
        summary: "Lighting keras, shadow tajam, dan framing ekspresif.",
        detail:
          "Final image diarahkan seperti kampanye lookbook: close crop, detail texture, dan frame yang menonjolkan attitude koleksi.",
      },
    ],
    deliverables: ["Lookbook direction", "Pattern notes", "Campaign frames", "Social crop set"],
    heroLine: "Heavy street silhouette with a refined editorial finish.",
    heroStat: "Urban-ready / 4 looks / 1 campaign system",
    mediaSlots: [
      {
        kind: "video",
        label: "Hero reel",
        caption: "Open slot for your strongest runway or campaign footage.",
        note: "Drop the reel into /public/media/concrete-ritual-hero.mp4",
        suggestedPath: "/media/concrete-ritual-hero.mp4",
      },
      {
        kind: "image",
        label: "Moodboard still",
        caption: "Reference frame for palette, texture, and direction.",
        note: "Drop a still into /public/media/concrete-ritual-moodboard.jpg",
        suggestedPath: "/media/concrete-ritual-moodboard.jpg",
      },
      {
        kind: "image",
        label: "Tech pack spread",
        caption: "Use a clean flatlay or spec-sheet shot.",
        note: "Drop a still into /public/media/concrete-ritual-tech-pack.jpg",
        suggestedPath: "/media/concrete-ritual-tech-pack.jpg",
      },
      {
        kind: "image",
        label: "Campaign frame",
        caption: "Best editorial image from the final shoot.",
        note: "Drop a still into /public/media/concrete-ritual-campaign.jpg",
        suggestedPath: "/media/concrete-ritual-campaign.jpg",
      },
    ],
    detailSummary:
      "This collection is built like a launch package: the structure, fit, and campaign direction all work together to sell the concept immediately.",
  },
  {
    slug: "night-signal",
    name: "Night Signal",
    tag: "Outerwear Study",
    year: "02 / 2026",
    intro:
      "Outerwear berlapis dengan bahasa visual stealth, clean, dan langsung terasa premium di kamera.",
    impact: "Designed for high contrast photos and layered silhouettes.",
    palette: ["Ink", "Smoke", "Signal Amber"],
    process: [
      {
        title: "Moodboard",
        summary: "Malam kota, refleksi kaca, dan utilitarian code.",
        detail:
          "Moodboard mengarah ke warna gelap, aksen reflektif, serta material yang menangkap cahaya secara terkontrol.",
      },
      {
        title: "Tech Pack",
        summary: "Pocket system, zipper map, dan panel engineering.",
        detail:
          "Setiap detail fungsional dibuat jelas agar visual tetap bersih sekaligus siap diproduksi dengan standar manufacturing.",
      },
      {
        title: "Photoshoot",
        summary: "Pose tegas dengan location scouting industrial.",
        detail:
          "Campaign menonjolkan struktur baju dan movement, cocok untuk brand owner yang butuh look premium dan wearable.",
      },
    ],
    deliverables: ["Outerwear spec", "Fabric callout", "Campaign board", "E-commerce shots"],
    heroLine: "Layered protection with a cold, modern silhouette.",
    heroStat: "Technical outerwear / modular pockets / reflective accents",
    mediaSlots: [
      {
        kind: "video",
        label: "Hero reel",
        caption: "Place a moody motion clip with industrial lighting.",
        note: "Drop the reel into /public/media/night-signal-hero.mp4",
        suggestedPath: "/media/night-signal-hero.mp4",
      },
      {
        kind: "image",
        label: "Moodboard still",
        caption: "Show the dark references and reflective details.",
        note: "Drop a still into /public/media/night-signal-moodboard.jpg",
        suggestedPath: "/media/night-signal-moodboard.jpg",
      },
      {
        kind: "image",
        label: "Construction close-up",
        caption: "Use pocket, zip, or fabric detail images.",
        note: "Drop a still into /public/media/night-signal-construction.jpg",
        suggestedPath: "/media/night-signal-construction.jpg",
      },
      {
        kind: "image",
        label: "Campaign frame",
        caption: "Select the strongest outdoor or studio shot.",
        note: "Drop a still into /public/media/night-signal-campaign.jpg",
        suggestedPath: "/media/night-signal-campaign.jpg",
      },
    ],
    detailSummary:
      "A cooler, more technical story that still reads luxury thanks to the refined layer system and sharp production notes.",
  },
  {
    slug: "after-hours",
    name: "After Hours",
    tag: "Visual Story",
    year: "03 / 2026",
    intro:
      "Koleksi yang bermain di antara lounge, street, dan dressing untuk event malam.",
    impact: "A softer take on streetwear with a refined finish.",
    palette: ["Sand", "Charcoal", "Faded Clay"],
    process: [
      {
        title: "Moodboard",
        summary: "Texture lembut, ambient light, dan tone yang intim.",
        detail:
          "Cerita diarahkan pada visual yang lebih hangat untuk memperluas market tanpa kehilangan edge streetwear.",
      },
      {
        title: "Tech Pack",
        summary: "Relaxed fit, drape control, dan finishing bersih.",
        detail:
          "File produksi berfokus pada kesesuaian fit dan sentuhan detail agar hasil akhir terlihat mahal di real life maupun foto.",
      },
      {
        title: "Photoshoot",
        summary: "Editorial framing dengan warna kulit dan tekstur kain.",
        detail:
          "Pemotretan diarahkan untuk memberi kesan polished, calm, elevated, and collectible.",
      },
    ],
    deliverables: ["Fit notes", "Look sequencing", "Editorial edit", "Launch deck"],
    heroLine: "Soft luxury streetwear with a warmer, more intimate mood.",
    heroStat: "Event-ready / soft tailoring / editorial calm",
    mediaSlots: [
      {
        kind: "video",
        label: "Hero reel",
        caption: "Use soft movement with warm lighting.",
        note: "Drop the reel into /public/media/after-hours-hero.mp4",
        suggestedPath: "/media/after-hours-hero.mp4",
      },
      {
        kind: "image",
        label: "Moodboard still",
        caption: "Bring the warm, ambient references forward.",
        note: "Drop a still into /public/media/after-hours-moodboard.jpg",
        suggestedPath: "/media/after-hours-moodboard.jpg",
      },
      {
        kind: "image",
        label: "Fit study",
        caption: "Show drape, proportion, and movement.",
        note: "Drop a still into /public/media/after-hours-fit.jpg",
        suggestedPath: "/media/after-hours-fit.jpg",
      },
      {
        kind: "image",
        label: "Campaign frame",
        caption: "Select the cleanest final editorial image.",
        note: "Drop a still into /public/media/after-hours-campaign.jpg",
        suggestedPath: "/media/after-hours-campaign.jpg",
      },
    ],
    detailSummary:
      "The most versatile story in the set, with a softer palette that still feels expensive and editorial.",
  },
  {
    slug: "assembly-line",
    name: "Assembly Line",
    tag: "Core Basics",
    year: "04 / 2026",
    intro:
      "Basic essentials yang dirancang seperti uniform modern: sederhana, tajam, dan mudah dijual.",
    impact: "Commercial-ready basics with a premium hand feel.",
    palette: ["Black", "Milk", "Steel Grey"],
    process: [
      {
        title: "Moodboard",
        summary: "Fokus pada silhouette, texture, dan retail clarity.",
        detail:
          "Arah visual dibuat lebih bersih untuk membantu brand owner melihat potensi mass market tanpa mengorbankan karakter.",
      },
      {
        title: "Tech Pack",
        summary: "Construction detail untuk repeatable production.",
        detail:
          "Tech pack menekankan stabilitas ukuran, stitching visibility, dan finishing yang mudah dikontrol saat produksi batch.",
      },
      {
        title: "Photoshoot",
        summary: "Catalog shot yang tetap terasa editorial.",
        detail:
          "Set foto dibuat sederhana namun strong, ideal untuk website, line sheet, dan komunikasi ke buyer atau recruiter.",
      },
    ],
    deliverables: ["Size spec", "Costing notes", "Catalog set", "Buyer deck"],
    heroLine: "Clean essentials designed to move across retail and campaign use.",
    heroStat: "Commercial basics / premium hand feel / scalable production",
    mediaSlots: [
      {
        kind: "video",
        label: "Hero reel",
        caption: "Use a simple, well-lit motion clip for clarity.",
        note: "Drop the reel into /public/media/assembly-line-hero.mp4",
        suggestedPath: "/media/assembly-line-hero.mp4",
      },
      {
        kind: "image",
        label: "Moodboard still",
        caption: "Clean visual references and product logic.",
        note: "Drop a still into /public/media/assembly-line-moodboard.jpg",
        suggestedPath: "/media/assembly-line-moodboard.jpg",
      },
      {
        kind: "image",
        label: "Catalog frame",
        caption: "Use a crisp front-facing image.",
        note: "Drop a still into /public/media/assembly-line-catalog.jpg",
        suggestedPath: "/media/assembly-line-catalog.jpg",
      },
      {
        kind: "image",
        label: "Launch frame",
        caption: "Best image for retail and buyer decks.",
        note: "Drop a still into /public/media/assembly-line-launch.jpg",
        suggestedPath: "/media/assembly-line-launch.jpg",
      },
    ],
    detailSummary:
      "The commercial anchor of the portfolio, built to read clearly for brands that care about repeatable production.",
  },
];

export const portfolioProfile = {
  name: "Cloating Studio",
  role: "Streetwear designer / visual direction / lookbook systems",
  location: "Indonesia",
  email: "hello@cloating.studio",
  instagram: "@cloatingstudio",
  story:
    "Membangun portfolio yang menggabungkan taste streetwear, struktur produksi, dan presentasi visual yang kuat untuk brand owner maupun recruiter.",
  philosophy:
    "Setiap karya harus menjual rasa dulu, lalu menjelaskan proses di belakangnya. Itulah yang membuat lookbook terasa serius dan mudah dipercaya.",
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
