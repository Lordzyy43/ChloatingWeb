"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { portfolioProfile } from "@/data/portfolio";

// PERBAIKAN TIPE: Tambahkan ": Variants" dan "as const" agar TypeScript / Next.js bisa merender dengan aman
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="border-t border-white/10 py-20 sm:py-32">
      {/* SECTION HEADER */}
      <div className="mb-16 flex items-center gap-3 sm:mb-24">
        <span className="h-[1px] w-8 bg-[var(--accent)]" />
        <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent-strong)]">
          The Studio
        </p>
      </div>

      <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
        {/* KIRI: THE MANIFESTO (Philosophy as Giant Quote) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView={shouldReduceMotion ? "hidden" : "show"}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-between gap-12"
        >
          <h2 className="font-serif text-4xl italic leading-[1.1] tracking-[-0.02em] text-white drop-shadow-md sm:text-5xl lg:text-6xl">
            &ldquo;{portfolioProfile.philosophy}&rdquo;
          </h2>

          <div className="flex flex-col gap-4 border-l border-[var(--accent)]/30 pl-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent)]">
              {portfolioProfile.name}
            </p>
            <p className="max-w-xs text-xs leading-relaxed tracking-wider text-white/50 uppercase">
              {portfolioProfile.role} <br />
              Based in {portfolioProfile.location}
            </p>
          </div>
        </motion.div>

        {/* KANAN: VISION & DISCIPLINES */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView={shouldReduceMotion ? "hidden" : "show"}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-16 lg:pt-4"
        >
          {/* Vision (Story) */}
          <div className="group border-l border-white/10 pl-5 transition-colors hover:border-[var(--accent)]">
            <h3 className="text-[9px] uppercase tracking-[0.4em] text-[var(--muted)] transition-colors group-hover:text-[var(--accent-strong)]">
              Vision
            </h3>
            <p className="mt-5 text-sm leading-loose tracking-wide text-white/75 sm:text-base">
              {portfolioProfile.story}
            </p>
          </div>

          {/* Core Disciplines (Skills) */}
          <div className="border-t border-white/10 pt-8">
            <h3 className="mb-8 text-[9px] uppercase tracking-[0.4em] text-[var(--muted)]">
              Core Disciplines
            </h3>
            <div className="flex flex-col gap-0">
              {portfolioProfile.skills.map((skill, index) => (
                <div
                  key={skill}
                  className="group flex items-center justify-between border-b border-white/10 py-4 transition-colors hover:border-[var(--accent)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 transition-colors group-hover:text-[var(--accent)]">
                      0{index + 1}
                    </span>
                    <span className="text-xs tracking-widest text-white/80 uppercase transition-colors group-hover:text-white">
                      {skill}
                    </span>
                  </div>
                  {/* Micro-interaction cross */}
                  <span className="text-white/20 transition-transform duration-500 group-hover:rotate-90 group-hover:text-[var(--accent)]">
                    +
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
