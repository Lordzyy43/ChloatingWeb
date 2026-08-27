import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CollectionCaseStudy } from "@/components/sections/collection-case-study";
import { collections, getCollection } from "@/data/portfolio";

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
      title: "Archive Not Found | Cloating Studio",
    };
  }

  // Membuat meta title dan description otomatis menyesuaikan data koleksi
  return {
    title: `${collection.name} — Archive | Cloating Studio`,
    description: collection.detailSummary,
    openGraph: {
      title: `${collection.name} — Cloating Studio`,
      description: collection.detailSummary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${collection.name} | Cloating Studio`,
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
