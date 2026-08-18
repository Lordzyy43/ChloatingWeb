"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Layers3,
  Mail,
  MoveRight,
  Sparkles,
} from "lucide-react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useState } from "react";
import { collections, portfolioProfile } from "@/data/portfolio";

const rise = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function PortfolioShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCollection = collections[activeIndex];
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative isolate overflow-hidden text-[var(--foreground)]">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-12 pt-5 sm:px-8 lg:px-10">
          <motion.header
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
            className="sticky top-4 z-20 mb-8 rounded-full border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.45em] text-[var(--muted)]">
                  {portfolioProfile.name}
                </p>
                <p className="font-serif text-lg tracking-[0.12em] text-[var(--accent-strong)]">
                  Digital Lookbook
                </p>
              </div>
              <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                {[
                  ["Home", "#home"],
                  ["Work", "#work"],
                  ["About", "#about"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    className="rounded-full border border-white/10 px-3 py-2 transition hover:border-white/30 hover:text-white"
                    href={href}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.header>

          <section
            id="home"
            className="grid items-center gap-8 border-y border-white/10 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-16"
          >
            <motion.div
              variants={rise}
              initial="hidden"
              animate="show"
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.4em] text-[var(--muted)]">
                <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
                Streetwear / Editorial / Brand-ready
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[5.9rem]">
                Lookbook yang terasa seperti runway,
                <span className="block font-serif italic text-[var(--accent-strong)]">
                  clean, sharp, and camera-ready.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                Portfolio ini dirancang sebagai digital showroom: hero visual yang keras,
                koleksi yang bisa dibuka satu per satu, dan detail proses yang memberi brand owner
                alasan untuk percaya.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-[var(--accent-strong)]"
                >
                  Explore Collections <MoveRight className="h-4 w-4" />
                </Link>
                <Link
                  href={`mailto:${portfolioProfile.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/35 hover:bg-white/5"
                >
                  Book a Project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={rise}
              initial="hidden"
              animate="show"
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(215,180,138,0.24),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.14),transparent_35%),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] p-4 shadow-2xl shadow-black/50">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[linear-gradient(160deg,#1b1b1b_0%,#0d0d0d_40%,#1a1a1a_100%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_20%),radial-gradient(circle_at_70%_80%,rgba(215,180,138,0.32),transparent_25%)]" />
                  <motion.div
                    animate={shouldReduceMotion ? {} : { opacity: [0.25, 0.6, 0.25] }}
                    transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.09)_50%,transparent_70%)] bg-[length:180%_100%]"
                  />
                  <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-white/60">
                    <span>Hero motion reel</span>
                    <span>00:24</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-black/35 backdrop-blur-md">
                      <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[18px] border-l-white" />
                    </div>
                  </div>
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--muted)]">
                        Featured Drop
                      </p>
                      <p className="mt-1 font-serif text-2xl italic text-white">
                        {activeCollection.name}
                      </p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-right backdrop-blur-md">
                      <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
                        Format
                      </p>
                      <p className="text-sm text-white">Video / Image / Detail</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    ["Collections", "04", Layers3],
                    ["Focus", "Design process", Camera],
                    ["Mood", "Street luxury", Sparkles],
                  ].map(([label, value, Icon]) => (
                    <div
                      key={label as string}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
                          {label as string}
                        </p>
                        <Icon className="h-4 w-4 text-[var(--accent-strong)]" />
                      </div>
                      <p className="mt-2 text-sm text-white">{value as string}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          <section id="work" className="py-14 sm:py-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.45em] text-[var(--muted)]">
                  Work / Collections
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Pilih koleksi, lalu buka cerita di baliknya.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                Setiap project bisa dibuka ke detail page yang lebih dalam, lengkap dengan proses,
                deliverables, dan slot media asli yang siap diisi saat file final sudah ada.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="grid gap-4">
                {collections.map((collection, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <motion.div
                      key={collection.slug}
                      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                      className={`rounded-[1.7rem] border p-5 transition duration-300 ${
                        isActive
                          ? "border-[color:var(--accent)] bg-white/8 shadow-[0_0_0_1px_rgba(215,180,138,0.25)]"
                          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className="w-full text-left"
                      >
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
                        <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)]">
                          {collection.intro}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {collection.palette.map((tone) => (
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
                    </motion.div>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.article
                  key={activeCollection.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
                  className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 sm:p-7"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.45em] text-[var(--muted)]">
                        Selected Collection
                      </p>
                      <h3 className="mt-3 font-serif text-4xl italic text-[var(--accent-strong)]">
                        {activeCollection.name}
                      </h3>
                    </div>
                    <div className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                      {activeCollection.year}
                    </div>
                  </div>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
                    {activeCollection.detailSummary}
                  </p>

                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {activeCollection.process.map((step, index) => (
                      <div
                        key={step.title}
                        className="rounded-[1.4rem] border border-white/10 bg-black/25 p-4"
                      >
                        <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
                          0{index + 1}
                        </p>
                        <h4 className="mt-3 text-lg font-semibold text-white">{step.title}</h4>
                        <p className="mt-2 text-sm leading-7 text-white/70">{step.summary}</p>
                        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{step.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-[1fr_0.8fr]">
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
                        Deliverables
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {activeCollection.deliverables.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-xs text-white/75"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-[1.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(215,180,138,0.16),rgba(255,255,255,0.04))] p-4">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">
                        Signature Note
                      </p>
                      <p className="mt-4 text-lg leading-8 text-white">
                        {activeCollection.heroLine}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-[1.4rem] border border-white/10 bg-black/25 p-4">
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
                      {activeCollection.heroStat}
                    </p>
                    <Link
                      href={`/collections/${activeCollection.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-white/30 hover:bg-white/5"
                    >
                      View full case study <MoveRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </section>

          <section
            id="about"
            className="grid gap-5 border-y border-white/10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.45em] text-[var(--muted)]">
                About
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Portfolio yang fokus pada taste, proses, dan eksekusi.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">Profil</h3>
                <p className="mt-4 text-sm leading-8 text-white/75">{portfolioProfile.story}</p>
              </motion.div>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5"
              >
                <h3 className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">
                  Filosofi
                </h3>
                <p className="mt-4 text-sm leading-8 text-white/75">
                  {portfolioProfile.philosophy}
                </p>
              </motion.div>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 sm:col-span-2"
              >
                <h3 className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">
                  Technical Skill
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {portfolioProfile.skills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section id="contact" className="grid gap-6 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.45em] text-[var(--muted)]">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Siap dipakai sebagai titik masuk brand deal atau rekrutmen.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <motion.a
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                href={`mailto:${portfolioProfile.email}`}
                className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(215,180,138,0.16),rgba(255,255,255,0.04))] p-5 transition hover:border-white/20"
              >
                <Mail className="h-5 w-5 text-[var(--accent-strong)]" />
                <p className="mt-5 text-[10px] uppercase tracking-[0.45em] text-[var(--muted)]">
                  Email
                </p>
                <p className="mt-4 text-xl font-medium text-white">{portfolioProfile.email}</p>
              </motion.a>
              <motion.a
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20"
              >
                <Camera className="h-5 w-5 text-[var(--accent-strong)]" />
                <p className="mt-5 text-[10px] uppercase tracking-[0.45em] text-[var(--muted)]">
                  Instagram
                </p>
                <p className="mt-4 text-xl font-medium text-white">{portfolioProfile.instagram}</p>
              </motion.a>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 sm:col-span-2"
              >
                <p className="text-[10px] uppercase tracking-[0.45em] text-[var(--muted)]">
                  Availability
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <p className="max-w-2xl text-sm leading-8 text-white/75">
                    Open for brand collaboration, collection direction, campaign styling, dan
                    portfolio presentation projects.
                  </p>
                  <Link
                    href="#home"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:border-white/30 hover:bg-white/5"
                  >
                    Back to top <MoveRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
    </MotionConfig>
  );
}
