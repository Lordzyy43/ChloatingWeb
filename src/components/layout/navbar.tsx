"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type NavbarProps = {
  brandName: string;
  tagline?: string;
};

// Navigasi dibagi dua (Kiri dan Kanan) dengan nama yang lebih "Editorial"
const leftLinks = [
  ["Index", "#home"],
  ["Archive", "#work"],
] as const;

const rightLinks = [
  ["Studio", "#about"],
  ["Inquiries", "#contact"],
] as const;

export function Navbar({
  brandName,
  tagline = "Digital Lookbook",
}: NavbarProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      // Tidak lagi mengambang (pill). Kini menempel penuh di atas (flush) dengan garis bawah tipis
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#060606]/80 backdrop-blur-2xl"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-5 py-4 md:grid md:h-20 md:grid-cols-3 md:flex-row md:gap-0 md:py-0 sm:px-8 lg:px-10">
        {/* KIRI: Navigasi Kiri (Hanya muncul di Desktop) */}
        <nav className="hidden items-center justify-start gap-8 md:flex">
          {leftLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="group relative text-[9px] uppercase tracking-[0.4em] text-[var(--muted)] transition-colors hover:text-white"
            >
              {label}
              {/* Garis bawah animasi (Micro-interaction) */}
              <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[var(--accent-strong)] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* TENGAH: Brand / Masthead */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center text-center"
        >
          <p className="font-serif text-2xl italic leading-none tracking-wide text-white transition-colors duration-500 hover:text-[var(--accent-strong)] sm:text-3xl">
            {brandName}
          </p>
          <p className="mt-2 text-[8px] uppercase tracking-[0.5em] text-white/40">
            {tagline}
          </p>
        </Link>

        {/* KANAN: Navigasi Kanan (Hanya muncul di Desktop) */}
        <nav className="hidden items-center justify-end gap-8 md:flex">
          {rightLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="group relative text-[9px] uppercase tracking-[0.4em] text-[var(--muted)] transition-colors hover:text-white"
            >
              {label}
              <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[var(--accent-strong)] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* MOBILE NAV: Menggabungkan semua menu, bisa di-scroll mendatar */}
        <nav className="hide-scrollbar flex w-full items-center justify-center gap-6 overflow-x-auto pt-2 md:hidden">
          {[...leftLinks, ...rightLinks].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="whitespace-nowrap text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] transition-colors hover:text-[var(--accent-strong)]"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
