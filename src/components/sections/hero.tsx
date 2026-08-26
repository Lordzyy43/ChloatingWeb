import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion"; // <-- 1. Tambahkan Variants

// Animasi Induk (Container)
const containerVariants: Variants = {
  // <-- 2. Tambahkan tipe : Variants
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const, // <-- 3. Tambahkan as const
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Animasi Anak (Item)
const itemVariants: Variants = {
  // <-- 4. Tambahkan tipe : Variants
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }, // <-- 5. Tambahkan as const
  },
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center border-y border-white/10 py-6 sm:py-10"
    >
      <div className="absolute inset-0 -z-10 bg-[var(--background)]" />

      {/* CANVAS VISUAL RAKSASA */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={shouldReduceMotion ? "hidden" : "show"}
        // Aspect ratio diamankan, tinggi dibatasi max 85vh agar tidak nabrak di layar pendek
        className="group relative flex w-full flex-col overflow-hidden rounded-[2rem] bg-[#0a0a0a] shadow-2xl shadow-black/40 aspect-[4/5] sm:aspect-video lg:max-h-[85vh]"
      >
        {/* MEDIA VIDEO */}
        <video
          src="/12137907_1920_1440_60fps.mp4"
          className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-[1.5s] ease-out group-hover:scale-[1.03] group-hover:opacity-90"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

        {/* PRINT MARGIN */}
        <div className="absolute inset-5 pointer-events-none border border-white/10 mix-blend-overlay sm:inset-8" />

        {/* ELEMEN EDITORIAL KIRI: Teks Vertikal (Direvisi menggunakan writing-mode) */}
        <motion.div
          variants={itemVariants}
          className="absolute left-6 top-1/2 -translate-y-1/2 hidden sm:block z-10 sm:left-10"
        >
          <p className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[9px] uppercase tracking-[0.4em] text-white/50">
            Cloating Studio &copy; {new Date().getFullYear()}
          </p>
        </motion.div>

        {/* TIPOGRAFI TENGAH */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10 pointer-events-none">
          <motion.h1
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <span className="mb-2 block text-[4vw] font-medium tracking-[0.4em] text-white/80 uppercase sm:text-2xl sm:tracking-[0.6em] lg:text-3xl lg:tracking-[0.8em]">
              The Perfect
            </span>
            {/* Ukuran disesuaikan dengan viewport (vw) agar aman di semua layar */}
            <span className="block font-serif text-[14vw] italic leading-[0.8] tracking-[-0.03em] text-[var(--accent-strong)] md:text-[8rem] lg:text-[10rem]">
              LOOKBOOK
            </span>
          </motion.h1>
        </div>

        {/* --- BOTTOM ALIGNMENT (Direvisi menjadi absolute terpisah untuk keakuratan tata letak) --- */}

        {/* KIRI BAWAH */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-10 hidden max-w-[14rem] sm:block z-20 pointer-events-none"
        >
          <div className="mb-4 h-[1px] w-8 bg-[var(--accent)]" />
          <p className="text-[9px] font-medium leading-loose tracking-[0.25em] text-white/60 uppercase">
            Curated visual directions,
            <br /> editorial campaigns &<br /> digital streetwear.
          </p>
        </motion.div>

        {/* TENGAH BAWAH (Perfectly Centered) */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex justify-center z-20 pointer-events-auto"
        >
          <Link
            href="#work"
            className="group/btn flex flex-col items-center gap-3 transition-opacity hover:opacity-80"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/80 transition-colors group-hover/btn:text-[var(--accent-strong)]">
              Explore Work
            </span>
            <div className="flex h-12 w-[1px] justify-center overflow-hidden bg-white/20 relative">
              <div className="absolute top-0 h-1/2 w-full bg-white transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover/btn:translate-y-full" />
            </div>
          </Link>
        </motion.div>

        {/* KANAN BAWAH */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 right-10 hidden text-right sm:block z-20 pointer-events-none"
        >
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">
            Selected Works
          </p>
          <p className="mt-1 font-serif text-2xl italic text-[var(--accent-strong)]">
            Vol. I
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
