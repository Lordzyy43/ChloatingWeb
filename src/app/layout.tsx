import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Import komponen layout kita
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { portfolioProfile } from "@/data/portfolio";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-geist-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  // REVISI 1: Nama Brand & Tagline SEO
  title: "78Archive | Visual Direction & Lookbook",
  // REVISI 2: Deskripsi SEO dalam Bahasa Inggris (Global Market)
  description:
    "A digital archive bridging raw streetwear aesthetics with rigorous production logic and compelling visual presentations.",
};

export const viewport: Viewport = {
  themeColor: "#14171a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      // REVISI 3: Ubah lang menjadi "en" untuk standar internasional
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-black">
        <SmoothScroll>
          {/* Navbar otomatis membaca nama "78Archive" dari portfolioProfile.name */}
          <Navbar brandName={portfolioProfile.name} />

          <main className="flex-1">{children}</main>

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
