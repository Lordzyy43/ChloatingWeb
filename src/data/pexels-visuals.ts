export const pexelsVisuals = {
  "concrete-ritual": {
    cover:
      "https://images.pexels.com/photos/20417830/pexels-photo-20417830.jpeg?cs=srgb&dl=pexels-shermantrotz-20417830.jpg&fm=jpg",
    media: [
      "https://images.pexels.com/photos/20417830/pexels-photo-20417830.jpeg?cs=srgb&dl=pexels-shermantrotz-20417830.jpg&fm=jpg",
      "https://images.pexels.com/photos/33469138/pexels-photo-33469138.jpeg?cs=srgb&dl=pexels-elena_-sher-944248089-33469138.jpg&fm=jpg",
      "https://images.pexels.com/photos/39102957/pexels-photo-39102957.jpeg?cs=srgb&dl=pexels-misa-s-60335324-39102957.jpg&fm=jpg",
      "https://images.pexels.com/photos/20361285/pexels-photo-20361285.jpeg?cs=srgb&dl=pexels-rasul-lotfi-16110887-20361285.jpg&fm=jpg",
    ],
  },
  "night-signal": {
    cover:
      "https://images.pexels.com/photos/20361285/pexels-photo-20361285.jpeg?cs=srgb&dl=pexels-rasul-lotfi-16110887-20361285.jpg&fm=jpg",
    media: [
      "https://images.pexels.com/photos/20361285/pexels-photo-20361285.jpeg?cs=srgb&dl=pexels-rasul-lotfi-16110887-20361285.jpg&fm=jpg",
      "https://images.pexels.com/photos/3894517/pexels-photo-3894517.jpeg?cs=srgb&dl=pexels-cottonbro-3894517.jpg&fm=jpg",
      "https://images.pexels.com/photos/20417830/pexels-photo-20417830.jpeg?cs=srgb&dl=pexels-shermantrotz-20417830.jpg&fm=jpg",
      "https://images.pexels.com/photos/39102957/pexels-photo-39102957.jpeg?cs=srgb&dl=pexels-misa-s-60335324-39102957.jpg&fm=jpg",
    ],
  },
  "after-hours": {
    cover:
      "https://images.pexels.com/photos/3894517/pexels-photo-3894517.jpeg?cs=srgb&dl=pexels-cottonbro-3894517.jpg&fm=jpg",
    media: [
      "https://images.pexels.com/photos/3894517/pexels-photo-3894517.jpeg?cs=srgb&dl=pexels-cottonbro-3894517.jpg&fm=jpg",
      "https://images.pexels.com/photos/39102957/pexels-photo-39102957.jpeg?cs=srgb&dl=pexels-misa-s-60335324-39102957.jpg&fm=jpg",
      "https://images.pexels.com/photos/20417830/pexels-photo-20417830.jpeg?cs=srgb&dl=pexels-shermantrotz-20417830.jpg&fm=jpg",
      "https://images.pexels.com/photos/33469138/pexels-photo-33469138.jpeg?cs=srgb&dl=pexels-elena_-sher-944248089-33469138.jpg&fm=jpg",
    ],
  },
  "assembly-line": {
    cover:
      "https://images.pexels.com/photos/33469138/pexels-photo-33469138.jpeg?cs=srgb&dl=pexels-elena_-sher-944248089-33469138.jpg&fm=jpg",
    media: [
      "https://images.pexels.com/photos/33469138/pexels-photo-33469138.jpeg?cs=srgb&dl=pexels-elena_-sher-944248089-33469138.jpg&fm=jpg",
      "https://images.pexels.com/photos/39102957/pexels-photo-39102957.jpeg?cs=srgb&dl=pexels-misa-s-60335324-39102957.jpg&fm=jpg",
      "https://images.pexels.com/photos/3894517/pexels-photo-3894517.jpeg?cs=srgb&dl=pexels-cottonbro-3894517.jpg&fm=jpg",
      "https://images.pexels.com/photos/20361285/pexels-photo-20361285.jpeg?cs=srgb&dl=pexels-rasul-lotfi-16110887-20361285.jpg&fm=jpg",
    ],
  },
} as const;

export type CollectionSlug = keyof typeof pexelsVisuals;
