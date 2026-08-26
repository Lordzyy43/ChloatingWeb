"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioProfile } from "@/data/portfolio";

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="border-t border-white/10 pt-20 pb-14 sm:pt-32 sm:pb-20"
    >
      {/* HEADER: Editorial Style */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-12 sm:pb-20">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[var(--accent)]" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent-strong)]">
              Contact & Inquiries
            </p>
          </div>
          <h2 className="text-4xl font-medium tracking-[-0.04em] text-white sm:text-6xl">
            Ready to collaborate,
            <br />
            <span className="font-serif italic text-white/70">
              let&apos;s talk.
            </span>
          </h2>
        </div>
        <p className="max-w-xs text-[10px] leading-loose tracking-[0.2em] text-[var(--muted)] uppercase">
          Siap dipakai sebagai titik masuk brand deal, arahan gaya, atau presentasi portofolio.
        </p>
      </div>

      {/* CONTACT LIST: Directory / Index Style */}
      <div className="flex flex-col">
        {/* Row 01: Email */}
        <motion.a
          whileHover={shouldReduceMotion ? undefined : { x: 8 }}
          href={`mailto:${portfolioProfile.email}`}
          className="group flex flex-col items-start justify-between gap-4 border-t border-white/10 py-8 transition-colors hover:border-[var(--accent)] sm:flex-row sm:items-center sm:py-12"
        >
          <div className="flex w-full max-w-[200px] items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 transition-colors group-hover:text-[var(--accent)]">
              01
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
              Email
            </span>
          </div>
          <div className="flex flex-1 items-center justify-between w-full">
            <h3 className="font-serif text-3xl italic tracking-wide text-white transition-colors group-hover:text-[var(--accent-strong)] sm:text-5xl lg:text-6xl">
              {portfolioProfile.email}
            </h3>
            <ArrowUpRight className="h-6 w-6 text-white/30 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-[var(--accent-strong)] sm:h-10 sm:w-10" />
          </div>
        </motion.a>

        {/* Row 02: Instagram */}
        <motion.a
          whileHover={shouldReduceMotion ? undefined : { x: 8 }}
          href={`https://instagram.com/${portfolioProfile.instagram.replace("@", "")}`}
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-start justify-between gap-4 border-y border-white/10 py-8 transition-colors hover:border-[var(--accent)] sm:flex-row sm:items-center sm:py-12"
        >
          <div className="flex w-full max-w-[200px] items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 transition-colors group-hover:text-[var(--accent)]">
              02
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
              Instagram
            </span>
          </div>
          <div className="flex flex-1 items-center justify-between w-full">
            <h3 className="font-serif text-3xl italic tracking-wide text-white transition-colors group-hover:text-[var(--accent-strong)] sm:text-5xl lg:text-6xl">
              {portfolioProfile.instagram}
            </h3>
            <ArrowUpRight className="h-6 w-6 text-white/30 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-[var(--accent-strong)] sm:h-10 sm:w-10" />
          </div>
        </motion.a>
      </div>

      {/* BOTTOM AVAILABILITY & BACK TO TOP */}
      <div className="mt-12 flex flex-col gap-8 sm:mt-20 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--muted)]">
            Availability
          </p>
          <p className="mt-4 max-w-md text-sm leading-8 text-white/70">
            Open for brand collaboration, collection direction, campaign
            styling, dan portfolio presentation projects.
          </p>
        </div>
        
        <Link
          href="#home"
          className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white transition-colors hover:text-[var(--accent-strong)]"
        >
          Back to top 
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black">
            {/* Rotate -45deg untuk bikin panah nunjuk murni ke atas */}
            <ArrowUpRight className="h-3.5 w-3.5 -rotate-45" /> 
          </div>
        </Link>
      </div>
    </section>
  );
}
