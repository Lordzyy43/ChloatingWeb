// =========================================================================
// 1. DATA GAMBAR UNTUK HALAMAN WORK & CASE STUDY
// Slug sudah disesuaikan dengan portfolio.ts terbaru (t-shirts, pants, jackets, logo)
// =========================================================================

export const pexelsVisuals = {
  "t-shirts": {
    cover:
      "https://images.pexels.com/photos/20417830/pexels-photo-20417830.jpeg?cs=srgb&dl=pexels-shermantrotz-20417830.jpg&fm=jpg",
    media: [
      "https://images.pexels.com/photos/20417830/pexels-photo-20417830.jpeg?cs=srgb&dl=pexels-shermantrotz-20417830.jpg&fm=jpg",
      "https://images.pexels.com/photos/33469138/pexels-photo-33469138.jpeg?cs=srgb&dl=pexels-elena_-sher-944248089-33469138.jpg&fm=jpg",
      "https://images.pexels.com/photos/39102957/pexels-photo-39102957.jpeg?cs=srgb&dl=pexels-misa-s-60335324-39102957.jpg&fm=jpg",
      "https://images.pexels.com/photos/20361285/pexels-photo-20361285.jpeg?cs=srgb&dl=pexels-rasul-lotfi-16110887-20361285.jpg&fm=jpg",
      "https://images.pexels.com/photos/3894517/pexels-photo-3894517.jpeg?cs=srgb&dl=pexels-cottonbro-3894517.jpg&fm=jpg",
    ],
  },
  pants: {
    cover:
      "https://images.pexels.com/photos/20361285/pexels-photo-20361285.jpeg?cs=srgb&dl=pexels-rasul-lotfi-16110887-20361285.jpg&fm=jpg",
    media: [
      "https://images.pexels.com/photos/20361285/pexels-photo-20361285.jpeg?cs=srgb&dl=pexels-rasul-lotfi-16110887-20361285.jpg&fm=jpg",
      "https://images.pexels.com/photos/3894517/pexels-photo-3894517.jpeg?cs=srgb&dl=pexels-cottonbro-3894517.jpg&fm=jpg",
      "https://images.pexels.com/photos/20417830/pexels-photo-20417830.jpeg?cs=srgb&dl=pexels-shermantrotz-20417830.jpg&fm=jpg",
      "https://images.pexels.com/photos/39102957/pexels-photo-39102957.jpeg?cs=srgb&dl=pexels-misa-s-60335324-39102957.jpg&fm=jpg",
      "https://images.pexels.com/photos/33469138/pexels-photo-33469138.jpeg?cs=srgb&dl=pexels-elena_-sher-944248089-33469138.jpg&fm=jpg",
    ],
  },
  jackets: {
    cover:
      "https://images.pexels.com/photos/3894517/pexels-photo-3894517.jpeg?cs=srgb&dl=pexels-cottonbro-3894517.jpg&fm=jpg",
    media: [
      "https://images.pexels.com/photos/3894517/pexels-photo-3894517.jpeg?cs=srgb&dl=pexels-cottonbro-3894517.jpg&fm=jpg",
      "https://images.pexels.com/photos/39102957/pexels-photo-39102957.jpeg?cs=srgb&dl=pexels-misa-s-60335324-39102957.jpg&fm=jpg",
      "https://images.pexels.com/photos/20417830/pexels-photo-20417830.jpeg?cs=srgb&dl=pexels-shermantrotz-20417830.jpg&fm=jpg",
      "https://images.pexels.com/photos/33469138/pexels-photo-33469138.jpeg?cs=srgb&dl=pexels-elena_-sher-944248089-33469138.jpg&fm=jpg",
      "https://images.pexels.com/photos/20361285/pexels-photo-20361285.jpeg?cs=srgb&dl=pexels-rasul-lotfi-16110887-20361285.jpg&fm=jpg",
    ],
  },
  logo: {
    cover:
      "https://images.pexels.com/photos/33469138/pexels-photo-33469138.jpeg?cs=srgb&dl=pexels-elena_-sher-944248089-33469138.jpg&fm=jpg",
    media: [
      "https://images.pexels.com/photos/33469138/pexels-photo-33469138.jpeg?cs=srgb&dl=pexels-elena_-sher-944248089-33469138.jpg&fm=jpg",
      "https://images.pexels.com/photos/39102957/pexels-photo-39102957.jpeg?cs=srgb&dl=pexels-misa-s-60335324-39102957.jpg&fm=jpg",
      "https://images.pexels.com/photos/3894517/pexels-photo-3894517.jpeg?cs=srgb&dl=pexels-cottonbro-3894517.jpg&fm=jpg",
      "https://images.pexels.com/photos/20361285/pexels-photo-20361285.jpeg?cs=srgb&dl=pexels-rasul-lotfi-16110887-20361285.jpg&fm=jpg",
      "https://images.pexels.com/photos/20417830/pexels-photo-20417830.jpeg?cs=srgb&dl=pexels-shermantrotz-20417830.jpg&fm=jpg",
    ],
  },
} as const;

export type CollectionSlug = keyof typeof pexelsVisuals;

// =========================================================================
// 2. DATA GAMBAR UNTUK HALAMAN KATEGORI (Tops, Bottoms, Logo, Result)
// (Bagian ini sepertinya tidak kamu pakai lagi kalau kamu pakai pendekatan "The Ultimate Fix",
//  TAPI aku biarkan saja di sini untuk jaga-jaga kalau kamu butuh komponen gallery asimetris di masa depan).
// =========================================================================

export type CategoryGalleryItem = {
  id: number;
  title: string;
  type: string;
  image: string;
  aspect: string;
};

// URL dari pilihanmu
const img1 =
  "https://images.pexels.com/photos/20417830/pexels-photo-20417830.jpeg?cs=srgb&dl=pexels-shermantrotz-20417830.jpg&fm=jpg";
const img2 =
  "https://images.pexels.com/photos/33469138/pexels-photo-33469138.jpeg?cs=srgb&dl=pexels-elena_-sher-944248089-33469138.jpg&fm=jpg";
const img3 =
  "https://images.pexels.com/photos/39102957/pexels-photo-39102957.jpeg?cs=srgb&dl=pexels-misa-s-60335324-39102957.jpg&fm=jpg";
const img4 =
  "https://images.pexels.com/photos/20361285/pexels-photo-20361285.jpeg?cs=srgb&dl=pexels-rasul-lotfi-16110887-20361285.jpg&fm=jpg";
const img5 =
  "https://images.pexels.com/photos/3894517/pexels-photo-3894517.jpeg?cs=srgb&dl=pexels-cottonbro-3894517.jpg&fm=jpg";

export const categoryGalleries: Record<string, CategoryGalleryItem[]> = {
  tops: [
    {
      id: 1,
      title: "Graphic Heavy 01",
      type: "Oversized Tee",
      image: img1,
      aspect: "aspect-[3/4]",
    },
    {
      id: 2,
      title: "Washed Vintage",
      type: "Boxy Fit",
      image: img2,
      aspect: "aspect-square",
    },
    {
      id: 3,
      title: "Minimalist Type",
      type: "Heavyweight",
      image: img3,
      aspect: "aspect-[4/5]",
    },
    {
      id: 4,
      title: "Acid Drop",
      type: "Cut & Sew",
      image: img4,
      aspect: "aspect-[3/4]",
    },
    {
      id: 5,
      title: "Distressed Look",
      type: "Oversized Tee",
      image: img5,
      aspect: "aspect-square",
    },
  ],
  bottoms: [
    {
      id: 1,
      title: "Cargo Parachute",
      type: "Wide Leg",
      image: img4,
      aspect: "aspect-[4/5]",
    },
    {
      id: 2,
      title: "Faded Denim",
      type: "Straight Cut",
      image: img2,
      aspect: "aspect-[3/4]",
    },
    {
      id: 3,
      title: "Utility Multi-pocket",
      type: "Techwear",
      image: img1,
      aspect: "aspect-[3/4]",
    },
    {
      id: 4,
      title: "Washed Canvas",
      type: "Carpenter",
      image: img5,
      aspect: "aspect-square",
    },
    {
      id: 5,
      title: "Nylon Track",
      type: "Relaxed Fit",
      image: img3,
      aspect: "aspect-[4/5]",
    },
  ],
  logo: [
    {
      id: 1,
      title: "78Archive Monogram",
      type: "Brand Identity",
      image: img3,
      aspect: "aspect-square",
    },
    {
      id: 2,
      title: "Brutalist Typeface",
      type: "Typography",
      image: img1,
      aspect: "aspect-[3/4]",
    },
    {
      id: 3,
      title: "Woven Label Set",
      type: "Garment Trim",
      image: img4,
      aspect: "aspect-[4/5]",
    },
    {
      id: 4,
      title: "Chrome Emblem",
      type: "3D Render",
      image: img5,
      aspect: "aspect-square",
    },
    {
      id: 5,
      title: "Hangtag System",
      type: "Packaging",
      image: img2,
      aspect: "aspect-[3/4]",
    },
  ],
  result: [
    {
      id: 1,
      title: "Concrete Campaign",
      type: "Editorial",
      image: img5,
      aspect: "aspect-[3/4]",
    },
    {
      id: 2,
      title: "Night Signal Fit",
      type: "Street Look",
      image: img4,
      aspect: "aspect-[4/5]",
    },
    {
      id: 3,
      title: "Studio Look 03",
      type: "E-Commerce",
      image: img1,
      aspect: "aspect-[3/4]",
    },
    {
      id: 4,
      title: "After Hours Zine",
      type: "Print Layout",
      image: img2,
      aspect: "aspect-square",
    },
    {
      id: 5,
      title: "Assembly Launch",
      type: "Social Crop",
      image: img3,
      aspect: "aspect-[4/5]",
    },
  ],
};
