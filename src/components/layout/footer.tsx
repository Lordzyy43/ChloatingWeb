import { portfolioProfile } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--background)] px-5 py-6 sm:px-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Copyright */}
        <p className="text-[9px] uppercase tracking-[0.4em] text-white/40">
          &copy; {currentYear} {portfolioProfile.name}. All Rights Reserved.
        </p>

        {/* System / Location Identifiers */}
        <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.4em] text-white/40 sm:gap-6">
          <span>ID // GLOBAL</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
          <span>V.1 DIGITAL ARCHIVE</span>
        </div>
      </div>
    </footer>
  );
}
