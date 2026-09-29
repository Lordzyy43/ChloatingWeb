"use client";

import { useMemo } from "react";
import { collections } from "@/data/portfolio";
import { pexelsVisuals } from "@/data/pexels-visuals";
// IMPORT ACCORDION GALLERY YANG SUDAH KITA BUAT SEBELUMNYA
import { AccordionGallery } from "@/components/ui/accordion-gallery";

export function WorkSection() {
  // Label kategori manual jika kamu ingin menampilkannya
  const categoryLabels = ["T-Shirts", "Pants", "Jackets", "Logo"];

  // Mapping data portfolio.ts dan pexels-visuals.ts agar sesuai dengan struktur props AccordionGallery
  const accordionItems = useMemo(() => {
    return collections.map((col, idx) => ({
      // Mengambil gambar cover dari pexels-visuals berdasarkan slug (T-Shirts, Pants, dll)
      image: pexelsVisuals[col.slug as keyof typeof pexelsVisuals]?.cover || "",

      // Label yang akan muncul besar di atas panel
      label: col.name,

      // URL tujuan saat panel yang sedang terbuka diklik
      link: `/collections/${col.slug}`,

      // Alt text untuk aksesibilitas
      alt: `${col.name} Category`,
    }));
  }, []);

  return (
    <section
      id="work"
      className="border-t border-white/10 pt-20 pb-20 sm:pt-32 sm:pb-32"
    >
      {/* HEADER: Gallery Index Style */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mb-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.4em] text-[var(--accent-strong)]">
            <span className="h-[1px] w-8 bg-[var(--accent)]" />
            <span>The Archive</span>
          </div>
          <h2 className="font-serif text-4xl italic leading-none tracking-[-0.02em] text-white sm:text-6xl">
            Selected Works.
          </h2>
        </div>
        <div className="flex flex-col gap-2 md:text-right">
          <p className="max-w-xs text-[9px] uppercase leading-[1.8] tracking-[0.3em] text-[var(--muted)]">
            Visual-first archive. <br className="hidden md:block" />
            Curated pieces from {new Date().getFullYear()}.
          </p>
        </div>
      </div>

      {/* 
        TAMPILKAN GSAP ACCORDION
        Ini menggantikan Grid Card biasa. 
      */}
      <div className="w-full">
        {/* Pesan bantuan untuk User UI (karena interaksi Accordion kadang tidak disadari) */}
        <p className="mb-4 text-[9px] uppercase tracking-[0.3em] text-white/30 hidden sm:block">
          *Hover to expand. Click an active panel to view collection.
        </p>

        {/* Memanggil Komponen GSAP */}
        <AccordionGallery
          items={accordionItems}
          defaultIndex={0} // Default ke T-Shirts
          height={550} // Tinggi responsif yang cukup besar
          gap={12} // Jarak antar panel
          radius={20} // Lengkungan sudut
          expandRatio={0.55} // Seberapa lebar panel yang aktif
          trigger="hover" // Melebar otomatis saat di hover (sangat memuaskan!)
        />
      </div>
    </section>
  );
}
