"use client";

import { MotionConfig } from "framer-motion";
import { HeroSection } from "./hero";
import { WorkSection } from "./work-category";
import { AboutSection } from "./about";
import { ContactSection } from "./contact";

export function PortfolioShowcase() {
  return (
    <MotionConfig reducedMotion="user">
      {/* 1. Ganti <main> jadi <div> dan HAPUS overflow-hidden agar smooth scroll lancar */}
      <div className="relative isolate text-[var(--foreground)]">
        {/* 2. HAPUS gap-16 & sm:gap-24 agar konten lebih padat menyatu */}
        <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-12 pt-5 sm:px-8 lg:px-10">
          <HeroSection />
          <WorkSection />
          <AboutSection />
          <ContactSection />
        </div>
      </div>
    </MotionConfig>
  );
}
