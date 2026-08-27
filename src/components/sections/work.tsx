"use client";

import { motion, useReducedMotion } from "framer-motion";
import { collections } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/project-card";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function WorkSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.45em] text-[var(--accent-strong)]">
            Portfolio
          </p>
          <h2 className="mt-3 font-serif text-4xl italic tracking-[-0.03em] text-white sm:text-6xl">
            Selected Works.
          </h2>
        </div>
        <p className="max-w-sm text-[10px] uppercase tracking-[0.24em] text-[var(--muted)] sm:text-right">
          Visual-first archive. Open each project for the full case study.
        </p>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
        className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {collections.map((collection) => (
          <ProjectCard key={collection.slug} collection={collection} />
        ))}
      </motion.div>

    </section>
  );
}
