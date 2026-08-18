import { notFound } from "next/navigation";
import { CollectionCaseStudy } from "@/components/collection-case-study";
import { collections, getCollection } from "@/data/portfolio";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export default async function CollectionPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);

  if (!collection) {
    notFound();
  }

  return <CollectionCaseStudy collection={collection} />;
}
