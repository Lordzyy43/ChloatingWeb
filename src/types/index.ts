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

export type CollectionGalleryItem = {
  kind: "image" | "video";
  title: string;
  caption: string;
  note: string;
  suggestedPath: string;
  tone: string;
  layout: "hero" | "wide" | "tall" | "square" | "strip";
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
  gallery: CollectionGalleryItem[];
  detailSummary: string;
};

export type PortfolioProfile = {
  name: string;
  role: string;
  location: string;
  email: string;
  instagram: string;
  story: string;
  philosophy: string;
  skills: string[];
};
