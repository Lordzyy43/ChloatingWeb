"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type NavbarProps = {
  brandName: string;
  tagline?: string;
};

const leftLinks = [
  ["Index", "/#home"],
  ["Archive", "/#work"],
] as const;

const rightLinks = [
  ["Studio", "/#about"],
  ["Inquiries", "/#contact"],
] as const;

export function Navbar({
  brandName,
  tagline = "Digital Lookbook",
}: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Deteksi posisi scroll untuk memunculkan logo masthead di navbar secara dramatis
  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 100px ke bawah, aktifkan state scrolled
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDetailPage = pathname.includes("/collections/");
  if (isDetailPage) return null;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      // PERUBAHAN UTAMA DI SINI: Ganti "sticky" menjadi "fixed"
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-[#060606]/85 backdrop-blur-2xl py-3 shadow-2xl"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-5 md:grid md:h-16 md:grid-cols-3 md:flex-row md:gap-0 sm:px-8 lg:px-10">
        {/* KIRI: Navigasi Kiri */}
        <nav className="hidden items-center justify-start gap-8 md:flex">
          {leftLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="group relative text-[9px] uppercase tracking-[0.4em] text-white/60 transition-colors hover:text-white"
            >
              {label}
              <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* TENGAH: Brand / Masthead (Hanya muncul saat user scroll ke bawah agar tidak kembar dengan Hero) */}
        <div className="flex flex-col items-center justify-center text-center">
          <Link
            href="/"
            className={`transition-all duration-700 transform flex flex-col items-center ${
              isScrolled
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-3 pointer-events-none"
            }`}
          >
            <span className="font-serif text-xl italic leading-none tracking-wide text-white transition-colors hover:text-[var(--accent)]">
              {brandName}
            </span>
            <span className="mt-1 text-[7px] uppercase tracking-[0.4em] text-white/40">
              {tagline}
            </span>
          </Link>
        </div>

        {/* KANAN: Navigasi Kanan */}
        <nav className="hidden items-center justify-end gap-8 md:flex">
          {rightLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="group relative text-[9px] uppercase tracking-[0.4em] text-white/60 transition-colors hover:text-white"
            >
              {label}
              <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* MOBILE NAV */}
        <nav className="hide-scrollbar flex w-full items-center justify-center gap-6 overflow-x-auto pt-2 md:hidden">
          {[...leftLinks, ...rightLinks].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="whitespace-nowrap text-[9px] uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-[var(--accent)]"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
