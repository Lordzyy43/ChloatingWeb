"use client";

import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center py-6 sm:py-10"
    >
      {/* CANVAS VISUAL RAKSASA */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={shouldReduceMotion ? "hidden" : "show"}
        className="group relative flex w-full flex-col overflow-hidden rounded-[2rem] shadow-2xl shadow-black/50 aspect-[3/4] sm:aspect-video lg:max-h-[85vh]"
      >
        {/* MEDIA VIDEO DENGAN EFEK HOVER */}
        <video
          src="/12137907_1920_1440_60fps.mp4"
          className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-[2s] ease-out group-hover:scale-[1.04] group-hover:opacity-100"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* EFEK VIGNETTE & BOTTOM SHADOW (Agar teks bawah selalu terbaca) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* CAMERA VIEWFINDER (Pengganti Print Margin biasa) */}
        <div className="absolute inset-5 sm:inset-8 pointer-events-none z-10">
          {/* Sudut Kiri Atas */}
          <div className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-white/30 transition-colors duration-700 group-hover:border-[var(--accent)]" />
          {/* Sudut Kanan Atas */}
          <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-white/30 transition-colors duration-700 group-hover:border-[var(--accent)]" />
          {/* Sudut Kiri Bawah */}
          <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-white/30 transition-colors duration-700 group-hover:border-[var(--accent)]" />
          {/* Sudut Kanan Bawah */}
          <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-white/30 transition-colors duration-700 group-hover:border-[var(--accent)]" />
        </div>

        {/* ELEMEN EDITORIAL KIRI: Teks Vertikal */}
        <motion.div
          variants={itemVariants}
          className="absolute left-5 top-1/2 -translate-y-1/2 hidden sm:block z-20 sm:left-10"
        >
          <div className="flex items-center gap-4 [writing-mode:vertical-rl] rotate-180">
            <span className="h-8 w-[1px] bg-[var(--accent)]" />
            <p className="whitespace-nowrap text-[9px] uppercase tracking-[0.5em] text-white/50">
              Cloating Studio &copy; {new Date().getFullYear()}
            </p>
          </div>
        </motion.div>

        {/* TIPOGRAFI TENGAH (Dengan Glowing Effect) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-20 pointer-events-none">
          <motion.h1
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <span className="mb-4 block text-[10px] font-medium tracking-[0.8em] text-white/80 uppercase sm:text-sm sm:tracking-[1.2em]">
              The Perfect
            </span>
            <span className="block font-serif text-[15vw] italic leading-[0.75] tracking-[-0.03em] text-white drop-shadow-[0_0_40px_rgba(0,180,182,0.6)] transition-all duration-700 group-hover:drop-shadow-[0_0_60px_rgba(0,180,182,0.8)] md:text-[9rem] lg:text-[11rem]">
              LOOKBOOK
            </span>
          </motion.h1>
        </div>

        {/* BOTTOM ALIGNMENT */}

        {/* Kiri Bawah (Tetap ada di HP dengan ukuran kecil) */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-6 left-6 z-20 max-w-[12rem] text-left pointer-events-none sm:bottom-10 sm:left-10 sm:max-w-[14rem]"
        >
          <div className="mb-3 h-[1px] w-8 bg-[var(--accent)]" />
          <p className="text-[8px] font-medium leading-loose tracking-[0.3em] text-white/70 uppercase sm:text-[9px]">
            Curated visual directions,
            <br className="hidden sm:block" /> editorial campaigns &<br />{" "}
            digital streetwear.
          </p>
        </motion.div>

        {/* Tengah Bawah (Tombol Explore) */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center z-30 pointer-events-auto sm:bottom-10"
        >
          <Link
            href="#work"
            className="group/btn flex flex-col items-center gap-3 transition-opacity hover:opacity-80"
          >
            <span className="text-[8px] uppercase tracking-[0.4em] text-white/80 transition-colors group-hover/btn:text-[var(--accent-strong)] sm:text-[9px]">
              Explore Work
            </span>
            <div className="flex h-10 w-[1px] justify-center overflow-hidden bg-white/20 relative sm:h-12">
              <div className="absolute top-0 h-1/2 w-full bg-[var(--accent)] transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover/btn:translate-y-full" />
            </div>
          </Link>
        </motion.div>

        {/* Kanan Bawah (Tetap ada di HP) */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-6 right-6 text-right z-20 pointer-events-none sm:bottom-10 sm:right-10"
        >
          <p className="text-[8px] uppercase tracking-[0.3em] text-white/50 sm:text-[9px]">
            Selected Works
          </p>
          <p className="mt-1 font-serif text-xl italic text-[var(--accent-strong)] sm:text-2xl">
            Vol. I
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
