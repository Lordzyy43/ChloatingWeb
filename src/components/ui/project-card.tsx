import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CollectionItem } from "@/types";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  collection: CollectionItem;
  active?: boolean;
  onSelect?: () => void;
};

export function ProjectCard({ collection, active, onSelect }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "rounded-[1.7rem] border p-5 transition duration-300",
        active
          ? "border-[color:var(--accent)] bg-white/8 shadow-[0_0_0_1px_rgba(215,180,138,0.25)]"
          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
      )}
    >
      <button type="button" onClick={onSelect} className="w-full text-left">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-[var(--muted)]">
              {collection.tag}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
              {collection.name}
            </h3>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            {collection.year}
          </p>
        </div>
        <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)]">{collection.intro}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {collection.palette.map((tone: string) => (
            <span
              key={tone}
              className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/80"
            >
              {tone}
            </span>
          ))}
        </div>
      </button>

      <Link
        href={`/collections/${collection.slug}`}
        className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--accent-strong)] transition hover:text-white"
      >
        Open case study <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}
