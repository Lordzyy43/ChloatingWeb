"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Camera, ChevronRight, Film, Layers3 } from "lucide-react";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import type { CollectionItem } from "@/data/portfolio";
import { collections } from "@/data/portfolio";

type Props = {
  collection: CollectionItem;
};

const pageRise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function MediaCard({
  kind,
  label,
  caption,
  note,
  suggestedPath,
  accent,
}: {
  kind: "image" | "video";
  label: string;
  caption: string;
  note: string;
  suggestedPath: string;
  accent: string;
}) {
  return (
    <div className="group rounded-[1.5rem] border border-white/10 bg-black/25 p-4">
      <div className="relative overflow-hidden rounded-[1.1rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
        <div className="aspect-[4/5] p-4">
          <div className="flex h-full flex-col justify-between rounded-[0.95rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%),linear-gradient(160deg,#171717_0%,#0c0c0c_50%,#161616_100%)] p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/45">{label}</p>
                <p className="mt-2 max-w-[13rem] text-sm leading-6 text-white/75">{caption}</p>
              </div>
              {kind === "video" ? (
                <Film className="h-5 w-5 text-[var(--accent-strong)]" />
              ) : (
                <Camera className="h-5 w-5 text-[var(--accent-strong)]" />
              )}
            </div>

            <div className="space-y-3">
              <div className="h-32 rounded-[1rem] border border-white/10 bg-[linear-gradient(135deg,rgba(215,180,138,0.22),rgba(255,255,255,0.05))]" />
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.35em] text-white/45">
                  {kind} slot
                </span>
                <span className="text-[10px] uppercase tracking-[0.35em] text-white/45">
                  {accent}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-4 bottom-4 rounded-full border border-white/10 bg-black/55 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-white/55 backdrop-blur-md">
          {suggestedPath}
        </div>
      </div>
      <p className="mt-3 text-sm leading-7 text-white/70">{note}</p>
    </div>
  );
}

export function CollectionCaseStudy({ collection }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const collectionIndex = useMemo(
    () => collections.findIndex((item) => item.slug === collection.slug),
    [collection.slug],
  );

  const prevCollection =
    collections[(collectionIndex - 1 + collections.length) % collections.length];
  const nextCollection = collections[(collectionIndex + 1) % collections.length];

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative isolate overflow-hidden text-[var(--foreground)]">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-12 pt-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-4 z-20 mb-8 rounded-full border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.3em] text-white/75 transition hover:border-white/30 hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back
              </Link>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                <Layers3 className="h-4 w-4 text-[var(--accent-strong)]" />
                Case study / {collection.year}
              </div>
            </div>
          </motion.div>

          <section className="grid gap-8 border-y border-white/10 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
            <motion.div
              variants={pageRise}
              initial="hidden"
              animate="show"
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.4em] text-[var(--muted)]">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                {collection.tag}
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[5.8rem]">
                {collection.name}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                {collection.detailSummary}
              </p>
              <p className="max-w-2xl text-sm uppercase tracking-[0.28em] text-[var(--muted)]">
                {collection.heroLine}
              </p>
              <div className="flex flex-wrap gap-3">
                {collection.palette.map((tone) => (
                  <span
                    key={tone}
                    className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80"
                  >
                    {tone}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={pageRise}
              initial="hidden"
              animate="show"
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: 0.1 }}
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-2xl shadow-black/40"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {collection.mediaSlots.map((slot) => (
                  <div
                    key={slot.label}
                    className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
                      {slot.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/75">{slot.caption}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent-strong)]">
                        {slot.kind}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">
                        /public/media
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          <section className="py-14 sm:py-20">
            <div className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="grid gap-4 md:grid-cols-2">
                {collection.mediaSlots.map((slot, index) => (
                  <MediaCard
                    key={slot.label}
                    kind={slot.kind}
                    label={slot.label}
                    caption={slot.caption}
                    note={slot.note}
                    suggestedPath={slot.suggestedPath}
                    accent={index === 0 ? "hero focus" : index === 1 ? "reference" : "final frame"}
                  />
                ))}
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 sm:p-7">
                <p className="text-[11px] uppercase tracking-[0.45em] text-[var(--muted)]">
                  Process breakdown
                </p>
                <div className="mt-5 space-y-4">
                  {collection.process.map((step, index) => (
                    <div
                      key={step.title}
                      className="rounded-[1.4rem] border border-white/10 bg-black/25 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h2 className="text-xl font-semibold text-white">{step.title}</h2>
                        <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-white/72">{step.summary}</p>
                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
                      Deliverables
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {collection.deliverables.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-xs text-white/75"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
                      Case stats
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/80">{collection.heroStat}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-4 border-y border-white/10 py-14 sm:grid-cols-3 sm:py-16">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
                Why it works
              </p>
              <p className="mt-4 text-sm leading-8 text-white/75">
                The visual structure lets the brand read the taste instantly, while the process
                section proves the work is production-aware.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
                Full media
              </p>
              <p className="mt-4 text-sm leading-8 text-white/75">
                When your real photos and video are ready, drop them into the suggested paths and
                the page will feel instantly more alive.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
                Next / Prev
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
                <Link
                  href={`/collections/${prevCollection.slug}`}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <ChevronRight className="h-4 w-4 rotate-180" />
                  {prevCollection.name}
                </Link>
                <Link
                  href={`/collections/${nextCollection.slug}`}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                  {nextCollection.name}
                </Link>
              </div>
            </div>
          </section>

          <section className="grid gap-6 py-14 lg:grid-cols-[1fr_1fr] lg:py-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.45em] text-[var(--muted)]">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Kalau koleksi ini cocok, kita bisa lanjut ke campaign package berikutnya.
              </h2>
            </div>
            <div className="flex flex-col justify-end gap-3 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(215,180,138,0.16),rgba(255,255,255,0.04))] p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm leading-8 text-white/75">
                Ready for collaborations, lookbook systems, styling direction, and production
                presentation.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-white/30 hover:bg-white/5"
              >
                Open contact <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </MotionConfig>
  );
}
