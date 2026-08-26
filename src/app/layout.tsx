import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Import komponen layout kita
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer"; // <-- Tambahkan ini
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
  title: "Cloating Studio | Streetwear Lookbook",
  description:
    "Digital lookbook portfolio untuk menampilkan koleksi streetwear, proses desain, dan hasil kampanye secara profesional.",
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
      lang="id"
      className={`${spaceGrotesk.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-black">
        <SmoothScroll>
          <Navbar brandName={portfolioProfile.name} />

          <main className="flex-1">{children}</main>

          {/* Footer dipasang di sini */}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
