"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type NavbarProps = {
  brandName: string;
  tagline?: string;
};

const links = [
  ["Home", "#home"],
  ["Work", "#work"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

export function Navbar({
  brandName,
  tagline = "Digital Lookbook",
}: NavbarProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      // Ditambahkan max-w-7xl dan mx-auto agar posisinya sejajar presisi dengan grid konten utama
      className="sticky top-4 z-50 mb-8 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10"
    >
      <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-[#060606]/70 px-5 py-3 shadow-xl shadow-black/30 backdrop-blur-2xl">
        {/* BRAND AREA */}
        <Link href="/" className="group flex flex-col">
          <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--muted)] transition-colors duration-300 group-hover:text-white">
            {brandName}
          </p>
          <p className="font-serif text-base tracking-[0.1em] text-[var(--accent-strong)] transition-colors duration-300 group-hover:text-white sm:text-lg">
            {tagline}
          </p>
        </Link>

        {/* NAV LINKS */}
        <nav className="hide-scrollbar flex items-center gap-1 overflow-x-auto text-[9px] uppercase tracking-[0.3em] text-[var(--muted)] sm:text-[10px]">
          {links.map(([label, href]) => (
            <Link
              key={label}
              // Hover disesuaikan agar memunculkan aksen tipis ala editorial
              className="whitespace-nowrap rounded-full border border-transparent px-3.5 py-2 transition-all duration-300 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 hover:text-white"
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
