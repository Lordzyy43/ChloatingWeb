import Image from "next/image";
import Link from "next/link";
import type { CollectionItem } from "@/types";
import { cn } from "@/lib/utils";
import { pexelsVisuals } from "@/data/pexels-visuals";

type ProjectCardProps = {
  collection: CollectionItem;
  active?: boolean;
};

export function ProjectCard({ collection, active }: ProjectCardProps) {
  const visual = pexelsVisuals[collection.slug as keyof typeof pexelsVisuals];

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[1.5rem] border transition duration-300",
        active
          ? "border-[color:var(--accent)] bg-white/8 shadow-[0_0_0_1px_rgba(215,180,138,0.22)]"
          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
      )}
    >
      <Link href={`/collections/${collection.slug}`} className="block p-3 sm:p-4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03),rgba(0,0,0,0.3))]">
          <Image
            src={visual.cover}
            alt={`${collection.name} cover`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
            priority={collection.slug === "concrete-ritual"}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.18)_45%,rgba(0,0,0,0.72)_100%)]" />
          <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/70">
              {collection.tag}
            </p>
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/70">
              {collection.year}
            </p>
          </div>
          <div className="absolute inset-x-4 bottom-4">
            <h3 className="max-w-[11rem] rounded-[1rem] border border-white/10 bg-black/50 px-4 py-3 font-serif text-3xl italic leading-[0.95] text-white backdrop-blur-md">
              {collection.name}
            </h3>
          </div>
        </div>
      </Link>
    </article>
  );
}
