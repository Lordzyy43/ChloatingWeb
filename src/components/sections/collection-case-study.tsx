"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  Layers3,
} from "lucide-react";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { collections } from "@/data/portfolio";
import type { CollectionGalleryItem, CollectionItem } from "@/types";
import { pexelsVisuals } from "@/data/pexels-visuals";

type Props = {
  collection: CollectionItem;
};

const pageRise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const galleryHeightClasses: Record<
  CollectionGalleryItem["layout"],
  string
> = {
  hero: "min-h-[28rem] sm:min-h-[34rem]",
  wide: "min-h-[18rem] sm:min-h-[22rem]",
  tall: "min-h-[24rem] sm:min-h-[28rem]",
  square: "min-h-[20rem] sm:min-h-[24rem]",
  strip: "min-h-[16rem] sm:min-h-[20rem]",
};

function MediaCard({
  kind,
  label,
  accent,
  imageUrl,
}: {
  kind: "image" | "video";
  label: string;
  accent: string;
  imageUrl: string;
}) {
  return (
    <div className="group rounded-[1.5rem] border border-white/10 bg-[#080a0c] p-3 transition-colors hover:border-white/20">
      <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]">
        <div className="aspect-[4/5]">
          <Image
            src={imageUrl}
            alt={label}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.14)_40%,rgba(0,0,0,0.68)_100%)]" />
          <div className="relative flex h-full flex-col justify-between p-4">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[9px] uppercase tracking-[0.45em] text-white/40">
                {label}
              </p>
              <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
                {kind}
              </p>
            </div>

            <div className="space-y-3">
              <div className="h-40 rounded-[1rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,180,182,0.12),rgba(255,255,255,0.03),rgba(0,0,0,0.1))] transition-transform duration-500 group-hover:scale-[1.02]" />
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">
                  slot
                </span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent-strong)]">
                  {accent}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryCard({
  item,
  index,
  imageUrl,
}: {
  item: CollectionGalleryItem;
  index: number;
  imageUrl: string;
}) {
  const accentLabel =
    index === 0 ? "hero frame" : index === 1 ? "reference" : item.tone;
  const tiltClass = index % 2 === 0 ? "rotate-[-0.5deg]" : "rotate-[0.5deg]";

  return (
    <article
      className={`group relative mb-4 break-inside-avoid overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#090a0b] transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 ${tiltClass} ${galleryHeightClasses[item.layout]}`}
    >
      <Image
        src={imageUrl}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        sizes="(min-width: 1536px) 33vw, (min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%),linear-gradient(155deg,rgba(215,180,138,0.08),rgba(255,255,255,0.02),rgba(0,0,0,0.55))]" />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.08)_50%,transparent_75%)] bg-[length:180%_100%] opacity-0 transition duration-700 group-hover:opacity-100" />
      <div className="absolute inset-x-0 top-0 h-10 border-b border-white/8 bg-black/20" />
      <div className="relative flex h-full min-h-[18rem] flex-col justify-between p-4 sm:min-h-[22rem] sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[9px] uppercase tracking-[0.5em] text-white/40">
              Issue {String(index + 1).padStart(2, "0")}
            </p>
          </div>
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/35">
            {item.kind}
          </p>
        </div>

        <div className="mt-6 flex flex-1 items-end">
          <div className="w-full rounded-[1.2rem] border border-white/10 bg-black/35 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[9px] uppercase tracking-[0.35em] text-[var(--accent-strong)]">
                {item.tone}
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
                {accentLabel}
              </span>
            </div>
            <div className="mt-4 h-40 rounded-[1rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,180,182,0.15),rgba(255,255,255,0.04),rgba(0,0,0,0.1))] transition-transform duration-500 group-hover:scale-[1.015]" />
          </div>
        </div>
      </div>
    </article>
  );
}

export function CollectionCaseStudy({ collection }: Props) {
  const shouldReduceMotion = useReducedMotion();

  const collectionIndex = useMemo(
    () => collections.findIndex((item) => item.slug === collection.slug),
    [collection.slug],
  );

  const prevCollection =
    collections[
      (collectionIndex - 1 + collections.length) % collections.length
    ];
  const nextCollection =
    collections[(collectionIndex + 1) % collections.length];

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative isolate text-[var(--foreground)]">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-12 pt-5 sm:px-8 lg:px-10">
          {/* TOP BAR / BACK NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-4 z-50 mb-8 rounded-full border border-white/10 bg-[#060606]/70 px-4 py-3 backdrop-blur-2xl shadow-xl shadow-black/20"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-2 text-[10px] uppercase tracking-[0.4em] text-white/60 transition hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                Back to Archive
              </Link>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
                <Layers3 className="h-3.5 w-3.5 text-[var(--accent-strong)]" />
                Case study // {collection.year}
              </div>
            </div>
          </motion.div>

          {/* HERO SECTION (Editorial Style) */}
          <section className="grid gap-8 border-y border-white/10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
            <motion.div
              variants={pageRise}
              initial="hidden"
              animate="show"
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-[1px] w-8 bg-[var(--accent)]" />
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent-strong)]">
                    {collection.tag}
                  </p>
                </div>
                {/* REVISI: Font Serif Italic Raksasa */}
                <h1 className="font-serif text-6xl italic leading-[0.85] tracking-[-0.02em] text-white sm:text-7xl lg:text-[7.5rem]">
                  {collection.name}
                </h1>
              </div>

              <div className="mt-12 space-y-5">
                <p className="max-w-xl text-sm leading-relaxed tracking-wide text-white/75 sm:text-base">
                  {collection.detailSummary}
                </p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
                  {collection.heroLine}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {collection.palette.map((tone: string) => (
                    <span
                      key={tone}
                      className="rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-[9px] uppercase tracking-[0.3em] text-white/70"
                    >
                      {tone}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={pageRise}
              initial="hidden"
              animate="show"
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: 0.1,
              }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),rgba(0,0,0,0.5))] p-5 shadow-2xl"
            >
              <div className="relative flex h-full min-h-[18rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                <Image
                  src={pexelsVisuals[collection.slug as keyof typeof pexelsVisuals].cover}
                  alt={`${collection.name} cover`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority={collection.slug === "concrete-ritual"}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.22)_40%,rgba(0,0,0,0.78)_100%)]" />
                <div className="relative flex w-full flex-col justify-between p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.4em] text-white/45">
                        Collection cover
                      </p>
                      <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-white/75">
                        {collection.tag}
                      </p>
                    </div>
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent-strong)]">
                      {collection.year}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {collection.palette.map((tone: string) => (
                        <span
                          key={tone}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[9px] uppercase tracking-[0.3em] text-white/60"
                        >
                          {tone}
                        </span>
                      ))}
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/55">
                      {collection.heroLine}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* PROCESS & DELIVERABLES */}
          <section className="py-14 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
              {/* Media Cards List */}
              <div className="grid gap-4 sm:grid-cols-2">
                {collection.mediaSlots.map(
                  (
                    slot: CollectionItem["mediaSlots"][number],
                    index: number,
                  ) => (
                    <MediaCard
                      key={slot.label}
                      kind={slot.kind}
                      label={slot.label}
                      accent={
                        index === 0
                          ? "hero focus"
                          : index === 1
                            ? "reference"
                            : "final frame"
                      }
                      imageUrl={
                        pexelsVisuals[collection.slug as keyof typeof pexelsVisuals]
                          .media[index % pexelsVisuals[collection.slug as keyof typeof pexelsVisuals].media.length]
                      }
                    />
                  ),
                )}
              </div>

              {/* Process Breakdown */}
              <div className="flex flex-col gap-10">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-[1px] w-8 bg-white/20" />
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
                      Process
                    </p>
                  </div>
                  <div className="mt-8 space-y-6">
                    {collection.process.map(
                      (
                        step: CollectionItem["process"][number],
                        index: number,
                      ) => (
                        <div
                          key={step.title}
                          className="group border-l border-white/10 pl-5 transition-colors hover:border-[var(--accent)]"
                        >
                          <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 transition-colors group-hover:text-[var(--accent)]">
                            0{index + 1}
                          </span>
                          <h2 className="mt-2 text-lg font-medium tracking-wide text-white">
                            {step.title}
                          </h2>
                          <p className="mt-2 text-xs leading-relaxed text-white/60">
                            {step.summary}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.2rem] border border-white/10 bg-[#080a0c] p-5">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--muted)]">
                      Deliverables
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {collection.deliverables.map((item: string) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.2rem] border border-[var(--accent)]/30 bg-[linear-gradient(135deg,rgba(0,180,182,0.1),transparent)] p-5">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent-strong)]">
                      Highlight
                    </p>
                    <p className="mt-3 text-sm italic leading-relaxed text-white/90">
                      &ldquo;{collection.heroLine}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* THE LOOKBOOK (Visual Archive Spread) */}
          <section className="border-t border-white/10 py-16 sm:py-24">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent-strong)]">
                  Gallery
                </p>
                <h2 className="mt-3 font-serif text-4xl italic text-white sm:text-5xl">
                  Image-led spread.
                </h2>
              </div>
              <p className="max-w-xs text-[10px] leading-loose tracking-[0.2em] text-[var(--muted)] uppercase">
                Visual wall first, copy second.
              </p>
            </div>

            {/* Asymmetrical Grid */}
            <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 sm:gap-5">
              {collection.gallery.map((item, index) => (
                <GalleryCard
                  key={item.title}
                  item={item}
                  index={index}
                  imageUrl={
                    pexelsVisuals[collection.slug as keyof typeof pexelsVisuals]
                      .media[index % pexelsVisuals[collection.slug as keyof typeof pexelsVisuals].media.length]
                  }
                />
              ))}
            </div>
          </section>

          {/* PAGE NAV & CONTEXT (De-boxed, Editorial Style) */}
          <section className="grid gap-12 border-y border-white/10 py-16 sm:grid-cols-3 sm:gap-6 sm:py-20">
            <div className="border-l border-white/10 pl-5">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent-strong)]">
                Why it works
              </p>
              <p className="mt-4 text-xs leading-relaxed tracking-wide text-white/70">
                The visual structure lets the brand read the taste instantly,
                while the process section proves the work is production-aware.
              </p>
            </div>
            <div className="border-l border-white/10 pl-5">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--muted)]">
                Full media
              </p>
              <p className="mt-4 text-xs leading-relaxed tracking-wide text-white/70">
                When your real photos and video are ready, drop them into the
                suggested paths and the page will feel instantly more alive.
              </p>
            </div>
            <div className="border-l border-white/10 pl-5">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--muted)]">
                Next / Prev
              </p>
              <div className="mt-5 flex flex-col gap-4">
                <Link
                  href={`/collections/${prevCollection.slug}`}
                  className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/70 transition hover:text-[var(--accent-strong)]"
                >
                  <ChevronRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                  {prevCollection.name}
                </Link>
                <Link
                  href={`/collections/${nextCollection.slug}`}
                  className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/70 transition hover:text-[var(--accent-strong)]"
                >
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  {nextCollection.name}
                </Link>
              </div>
            </div>
          </section>

          {/* BOTTOM CONTACT CTA */}
          <section className="flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between lg:py-24">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
                Next Steps
              </p>
              <h2 className="mt-4 font-serif text-3xl italic tracking-wide text-white sm:text-5xl">
                Ready for the next campaign?
              </h2>
            </div>

            <Link
              href="/#contact"
              className="group flex h-16 items-center gap-4 rounded-full border border-[var(--accent)]/30 bg-[linear-gradient(135deg,rgba(0,180,182,0.1),rgba(255,255,255,0.02))] pl-6 pr-2 transition-all hover:border-[var(--accent)] hover:bg-[var(--accent)]/10"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-white transition-colors group-hover:text-[var(--accent-strong)]">
                Open Contact
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 transition-transform group-hover:scale-105">
                <ArrowUpRight className="h-4 w-4 text-[var(--accent)]" />
              </div>
            </Link>
          </section>
        </div>
      </main>
    </MotionConfig>
  );
}
