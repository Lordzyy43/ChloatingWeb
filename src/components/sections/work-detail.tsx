"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, MousePointer2 } from "lucide-react";
// REVISI 1: Tambahkan 'Variants' untuk mengamankan animasi
import {
  MotionConfig,
  motion,
  useReducedMotion,
  Variants,
} from "framer-motion";
import { useMemo } from "react";
import { collections } from "@/data/portfolio";
import type { CollectionGalleryItem, CollectionItem } from "@/types";
import { pexelsVisuals } from "@/data/pexels-visuals";

type Props = {
  collection: CollectionItem;
};

// REVISI 2: Amankan tipe animasi agar lolos pengecekan Next.js
const pageRise: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const galleryHeightClasses: Record<CollectionGalleryItem["layout"], string> = {
  hero: "min-h-[28rem] sm:min-h-[38rem]",
  wide: "min-h-[18rem] sm:min-h-[24rem]",
  tall: "min-h-[24rem] sm:min-h-[34rem]",
  square: "min-h-[20rem] sm:min-h-[28rem]",
  strip: "min-h-[16rem] sm:min-h-[20rem]",
};

function GalleryCard({
  item,
  index,
  imageUrl,
}: {
  item: CollectionGalleryItem;
  index: number;
  imageUrl: string;
}) {
  const tiltClass = index % 2 === 0 ? "rotate-[-0.5deg]" : "rotate-[0.5deg]";

  return (
    <article
      className={`group relative mb-4 sm:mb-6 break-inside-avoid overflow-hidden rounded-[1.2rem] bg-[#090a0b] transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--accent)]/10 hover:z-10 ${tiltClass} ${galleryHeightClasses[item.layout]}`}
    >
      <Image
        src={imageUrl}
        alt={item.title}
        fill
        unoptimized
        className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.05]"
        sizes="(min-width: 1536px) 33vw, (min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
      />

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.3)_100%)] opacity-50 transition-opacity duration-700 group-hover:opacity-0" />

      {/* Label kecil muncul saat di-hover */}
      <div className="absolute bottom-4 left-4 flex translate-y-4 flex-col opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-6 sm:left-6">
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 backdrop-blur-md">
          {/* Ubah warna titik menjadi putih jika itu video, Teal jika gambar */}
          <span
            className={`h-1.5 w-1.5 rounded-full ${item.kind === "video" ? "bg-white" : "bg-[var(--accent)]"}`}
          />
          <p className="text-[9px] uppercase tracking-[0.4em] text-white">
            Frame {String(index + 1).padStart(2, "0")}{" "}
            <span className="text-white/40">// {item.tone}</span>
          </p>
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
        {/* NAVIGASI HUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="fixed left-4 top-4 z-[99] sm:left-8 sm:top-8"
        >
          <Link
            href="/#work"
            className="group flex h-12 items-center justify-center gap-0 overflow-hidden rounded-full border border-white/10 bg-[#060606]/50 px-4 shadow-xl backdrop-blur-xl transition-all duration-300 hover:gap-3 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1" />
            <span className="w-0 overflow-hidden whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-300 group-hover:w-[3.5rem]">
              Index
            </span>
          </Link>
        </motion.div>

        {/* KONTEN UTAMA */}
        <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-12 pt-20 sm:px-8 lg:px-10">
          {/* CINEMATIC HERO */}
          <motion.section
            variants={pageRise}
            initial="hidden"
            animate="show"
            className="relative w-full overflow-hidden rounded-[2rem] bg-[#0a0a0a] shadow-2xl h-[60vh] sm:h-[80vh]"
          >
            <Image
              src={
                pexelsVisuals[collection.slug as keyof typeof pexelsVisuals]
                  .cover
              }
              alt={`${collection.name} cover`}
              fill
              unoptimized
              className="object-cover transition-transform duration-[3s] ease-out hover:scale-[1.03]"
              sizes="(min-width: 1024px) 90vw, 100vw"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-black/20 to-transparent opacity-80" />

            <div className="absolute bottom-10 right-8 hidden flex-col items-center gap-2 sm:flex">
              <MousePointer2 className="h-4 w-4 animate-bounce text-white/50" />
              <span className="[writing-mode:vertical-rl] text-[8px] uppercase tracking-[0.4em] text-white/50">
                Scroll
              </span>
            </div>
          </motion.section>

          {/* FLOATING TITLE PANEL */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-20 mx-auto -mt-16 w-[95%] sm:-mt-24 sm:w-[90%]"
          >
            <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-[#060606]/70 p-6 shadow-2xl backdrop-blur-3xl sm:p-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-4 flex items-center gap-3 text-[9px] uppercase tracking-[0.4em] text-[var(--accent-strong)]">
                  <span className="h-[1px] w-8 bg-[var(--accent)]" />{" "}
                  {collection.tag}
                </p>
                <h1 className="font-serif text-5xl italic leading-[0.85] tracking-[-0.02em] text-white drop-shadow-md sm:text-7xl lg:text-[7.5rem]">
                  {collection.name}
                </h1>
              </div>
              <div className="flex flex-col gap-4 lg:max-w-sm lg:text-right">
                <p className="text-sm leading-relaxed tracking-wide text-white/70">
                  {collection.detailSummary}
                </p>
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {collection.palette.map((tone: string) => (
                    <span
                      key={tone}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[8px] uppercase tracking-[0.3em] text-white/60"
                    >
                      {tone}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* THE SPREAD (Galeri Atasan/Pakaian) */}
          <section className="mt-20 mb-20 sm:mt-32 sm:mb-32">
            <div className="mb-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              {/* REVISI 3: Istilah diubah agar lebih kental nuansa Lookbook / Pakaian */}
              <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent-strong)]">
                Lookbook Spread
              </span>
              <div className="hidden h-[1px] flex-1 bg-[linear-gradient(90deg,var(--accent),transparent)] opacity-30 sm:block" />
            </div>

            <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 sm:gap-6">
              {collection.gallery.map((item, index) => (
                <GalleryCard
                  key={item.title}
                  item={item}
                  index={index}
                  imageUrl={
                    pexelsVisuals[collection.slug as keyof typeof pexelsVisuals]
                      .media[
                      index %
                        pexelsVisuals[
                          collection.slug as keyof typeof pexelsVisuals
                        ].media.length
                    ]
                  }
                />
              ))}
            </div>
          </section>

          {/* ARCHIVE DATA (Spesifikasi Pakaian/Koleksi) */}
          <section className="border-y border-white/10 py-16 sm:py-24">
            <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
              <div className="sm:border-r sm:border-white/10 sm:pr-8">
                {/* REVISI 4: Signature Line -> Design Focus */}
                <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--muted)]">
                  Design Focus
                </p>
                <p className="mt-4 font-serif text-2xl italic leading-relaxed text-white">
                  &ldquo;{collection.heroLine}&rdquo;
                </p>
              </div>

              <div className="sm:border-r sm:border-white/10 sm:px-8">
                {/* REVISI 5: Deliverables -> Production Details */}
                <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--muted)]">
                  Production Details
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {collection.deliverables.map((item: string) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[10px] tracking-[0.3em] text-white/70 uppercase"
                    >
                      <span className="h-[1px] w-4 bg-white/20" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sm:pl-8">
                {/* REVISI 6: Project Stats -> Collection Specs */}
                <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--muted)]">
                  Collection Specs
                </p>
                <p className="mt-4 text-xs leading-relaxed tracking-wide text-white/70">
                  {collection.heroStat}
                </p>
              </div>
            </div>
          </section>

          {/* PAGE NAV */}
          <section className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:py-16">
            <Link
              href={`/collections/${prevCollection.slug}`}
              className="group flex flex-col gap-2"
            >
              <span className="text-[8px] uppercase tracking-[0.4em] text-[var(--accent-strong)] transition-colors group-hover:text-white">
                Previous Drop
              </span>
              <span className="font-serif text-2xl italic text-white/70 transition-colors group-hover:text-white sm:text-3xl">
                {prevCollection.name}
              </span>
            </Link>

            <Link
              href={`/collections/${nextCollection.slug}`}
              className="group flex flex-col gap-2 text-right"
            >
              <span className="text-[8px] uppercase tracking-[0.4em] text-[var(--accent-strong)] transition-colors group-hover:text-white">
                Next Drop
              </span>
              <span className="font-serif text-2xl italic text-white/70 transition-colors group-hover:text-white sm:text-3xl">
                {nextCollection.name}
              </span>
            </Link>
          </section>

          {/* BOTTOM CTA */}
          <section className="flex flex-col gap-6 rounded-[2rem] bg-white py-12 px-6 shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:py-16 mb-10">
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-black/50">
                Collaboration
              </p>
              <h2 className="mt-2 font-serif text-3xl italic tracking-wide text-black sm:text-5xl">
                Start your clothing line.
              </h2>
            </div>
            <Link
              href="/#contact"
              className="group flex h-16 items-center gap-4 rounded-full bg-black pl-8 pr-2 transition-transform hover:scale-105"
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white">
                Inquire Now
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-black transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </Link>
          </section>
        </div>
      </main>
    </MotionConfig>
  );
}
