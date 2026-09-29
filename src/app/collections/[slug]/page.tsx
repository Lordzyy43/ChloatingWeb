import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CollectionCaseStudy } from "@/components/sections/work-detail";
// REVISI: Pastikan kita mengimpor portfolioProfile
import { collections, getCollection, portfolioProfile } from "@/data/portfolio";

type Params = Promise<{ slug: string }>;

// 1. EVOLUSI: Dynamic SEO Metadata untuk setiap koleksi
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);

  if (!collection) {
    return {
      // Menggunakan nama dinamis jika URL salah
      title: `Archive Not Found | ${portfolioProfile.name}`,
    };
  }

  // Membuat meta title dan description otomatis menyesuaikan data koleksi dan nama studio
  return {
    title: `${collection.name} — Archive | ${portfolioProfile.name}`,
    description: collection.detailSummary,
    openGraph: {
      title: `${collection.name} — ${portfolioProfile.name}`,
      description: collection.detailSummary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${collection.name} | ${portfolioProfile.name}`,
      description: collection.detailSummary,
    },
  };
}

// 2. Pre-render halaman untuk performa secepat kilat (SSG)
export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

// 3. Komponen Utama (Server Component)
export default async function CollectionPage({ params }: { params: Params }) {
  const { slug } = await params;
  const collection = getCollection(slug);

  // Jika URL ngawur, lempar ke halaman 404
  if (!collection) {
    notFound();
  }

  // Panggil Client Component untuk UI/Animasi
  return <CollectionCaseStudy collection={collection} />;
}
