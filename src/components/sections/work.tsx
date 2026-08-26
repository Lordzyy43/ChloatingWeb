"use client";

import Link from "next/link";
import { ArrowUpRight, MoveRight, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { collections } from "@/data/portfolio";

export function WorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCollection = collections[activeIndex];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="py-20 sm:py-32">
      {/* HEADER: Editorial Style */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-white/10 pb-10">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[var(--accent)]" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent-strong)]">
              Selected Archive
            </p>
          </div>
          <h2 className="font-serif text-5xl italic tracking-[-0.02em] text-white sm:text-7xl">
            Curated Works.
          </h2>
        </div>
        <p className="max-w-sm text-[10px] leading-loose tracking-[0.2em] text-[var(--muted)] uppercase">
          Explore the process, deliverables, and visual directions of our latest
          campaigns.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        {/* LEFT COLUMN: Index / List */}
        <div className="flex flex-col gap-3">
          {collections.map((collection, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.button
                key={collection.slug}
                onClick={() => setActiveIndex(index)}
                whileHover={
                  shouldReduceMotion ? undefined : { x: isActive ? 0 : 4 }
                }
                className={`group relative w-full overflow-hidden rounded-[1.2rem] border p-5 text-left transition-all duration-500 ${
                  isActive
                    ? "border-[var(--accent)] bg-white/5 shadow-[0_0_30px_rgba(0,180,182,0.15)]"
                    : "border-transparent bg-transparent hover:bg-white/[0.02]"
                }`}
              >
                {/* Garis pemisah tipis di bawah setiap item non-aktif */}
                {!isActive && (
                  <div className="absolute bottom-0 left-5 right-5 h-[1px] bg-white/10 transition-colors group-hover:bg-white/20" />
                )}

                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p
                      className={`text-[9px] uppercase tracking-[0.4em] transition-colors ${isActive ? "text-[var(--accent-strong)]" : "text-white/40"}`}
                    >
                      {collection.tag}
                    </p>
                    <h3
                      className={`mt-2 font-serif text-2xl italic tracking-wide transition-colors ${isActive ? "text-white" : "text-white/70 group-hover:text-white"}`}
                    >
                      {collection.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                      {collection.year}
                    </p>
                    {/* Indikator aktif berupa Chevron */}
                    {isActive && (
                      <ChevronRight className="h-4 w-4 text-[var(--accent)]" />
                    )}
                  </div>
                </div>

                {/* Info tambahan hanya muncul saat aktif (Accordion Effect) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 max-w-sm text-xs leading-relaxed tracking-wide text-white/60">
                        {collection.intro}
                      </p>
                      <Link
                        href={`/collections/${collection.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--accent-strong)] transition hover:text-white"
                      >
                        Open case study <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Active Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.article
            key={activeCollection.slug}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
            className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#080a0c] p-6 shadow-2xl sm:p-10"
          >
            <div>
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <h3 className="font-serif text-5xl italic text-white">
                    {activeCollection.name}
                  </h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/70">
                  Vol // {activeCollection.year}
                </div>
              </div>
              <p className="mt-8 text-sm leading-8 tracking-wide text-white/75">
                {activeCollection.detailSummary}
              </p>

              {/* Grid Process (Minimalis) */}
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {activeCollection.process.map((step, index) => (
                  <div
                    key={step.title}
                    className="group border-l border-white/10 pl-4 transition-colors hover:border-[var(--accent)]"
                  >
                    <p className="text-[9px] uppercase tracking-[0.4em] text-white/40">
                      0{index + 1} Step
                    </p>
                    <h4 className="mt-2 text-sm font-medium tracking-wide text-white">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-white/50">
                      {step.summary}
                    </p>
                  </div>
                ))}
              </div>

              {/* Grid Deliverables & Signature */}
              <div className="mt-12 grid gap-4 md:grid-cols-[1fr_0.8fr]">
                <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--muted)]">
                    Deliverables
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeCollection.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                  <div className="rounded-[1.2rem] border border-[var(--accent)]/30 bg-[linear-gradient(135deg,rgba(0,180,182,0.1),transparent)] p-5">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--accent-strong)]">
                      Signature Note
                    </p>
                    <p className="mt-3 text-sm italic leading-relaxed text-white/90">
                    &ldquo;{activeCollection.heroLine}&rdquo;
                    </p>
                  </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                {activeCollection.heroStat}
              </p>
              <Link
                href={`/collections/${activeCollection.slug}`}
                className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white transition-colors hover:text-[var(--accent-strong)]"
              >
                View full case study
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black">
                  <MoveRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
