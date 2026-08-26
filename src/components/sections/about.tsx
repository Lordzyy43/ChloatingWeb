"use client";

import { motion, useReducedMotion } from "framer-motion";
import { portfolioProfile } from "@/data/portfolio";

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      // Jarak diperbesar (py-20) agar senapas dengan WorkSection
      className="border-y border-white/10 py-20 sm:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* LEFT COLUMN: Editorial Header */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[var(--accent)]" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent-strong)]">
              The Studio
            </p>
          </div>
          <h2 className="text-4xl font-medium tracking-[-0.04em] text-white sm:text-6xl">
            Taste, process,
            <br />
            <span className="font-serif italic text-white/70">
              & execution.
            </span>
          </h2>
        </div>

        {/* RIGHT COLUMN: Content (Tanpa Kotak, Mengandalkan Garis Tipis) */}
        <div className="flex flex-col gap-12">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
            {/* Profil Column */}
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { x: 4 }}
              className="group border-l border-white/10 pl-5 transition-colors hover:border-[var(--accent)]"
            >
              <h3 className="text-[9px] uppercase tracking-[0.4em] text-[var(--muted)] transition-colors group-hover:text-[var(--accent-strong)]">
                Profil
              </h3>
              <p className="mt-5 text-sm leading-8 text-white/75 sm:text-base sm:leading-relaxed">
                {portfolioProfile.story}
              </p>
            </motion.div>

            {/* Filosofi Column */}
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { x: 4 }}
              className="group border-l border-white/10 pl-5 transition-colors hover:border-[var(--accent)]"
            >
              <h3 className="text-[9px] uppercase tracking-[0.4em] text-[var(--muted)] transition-colors group-hover:text-[var(--accent-strong)]">
                Filosofi
              </h3>
              <p className="mt-5 text-sm leading-8 text-white/75 sm:text-base sm:leading-relaxed">
                {portfolioProfile.philosophy}
              </p>
            </motion.div>
          </div>

          {/* Technical Skill (Minimalist List) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-8"
          >
            <h3 className="text-[9px] uppercase tracking-[0.4em] text-[var(--muted)]">
              Technical Arsenal
            </h3>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
              {portfolioProfile.skills.map((skill) => (
                <div key={skill} className="group flex items-center gap-3">
                  <span className="h-1 w-1 rounded-full bg-white/20 transition-colors group-hover:bg-[var(--accent)]" />
                  <span className="text-xs tracking-widest text-white/70 uppercase transition-colors group-hover:text-white">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
