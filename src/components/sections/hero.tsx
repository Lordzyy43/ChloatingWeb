"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex h-screen w-full items-center justify-center bg-transparent text-white px-4 sm:px-8 overflow-hidden select-none"
    >
      {/* Import Font Anton */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

        .font-anton {
          font-family: "Anton", sans-serif;
        }
      `}</style>

      {/* CONTAINER DENGAN PADDING AMAN SUPAYA TIDAK TERPOTONG */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={shouldReduceMotion ? "hidden" : "show"}
        className="w-full max-w-[100vw] mx-auto flex items-center justify-center text-center px-4"
      >
        <h1 className="font-anton uppercase tracking-tight text-[14vw] sm:text-[15vw] lg:text-[16vw] leading-[0.75] whitespace-nowrap w-full transition-all duration-500 text-white hover:text-white/90 drop-shadow-[0_25px_60px_rgba(255,255,255,0.15)]">
          78ARCHIVE
        </h1>
      </motion.div>
    </section>
  );
}
