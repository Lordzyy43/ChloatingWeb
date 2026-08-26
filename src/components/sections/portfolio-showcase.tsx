"use client";

import { MotionConfig } from "framer-motion";
import { HeroSection } from "./hero";
import { WorkSection } from "./work";
import { AboutSection } from "./about";
import { ContactSection } from "./contact";

export function PortfolioShowcase() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative isolate overflow-hidden text-[var(--foreground)]">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-16 px-5 pb-12 pt-5 sm:gap-24 sm:px-8 lg:px-10">
          <HeroSection />
          <WorkSection />
          <AboutSection />
          <ContactSection />
        </div>
      </main>
    </MotionConfig>
  );
}
