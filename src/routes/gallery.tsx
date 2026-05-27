import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Reveal } from "@/components/site/Reveal";
import { GALLERY, IMG } from "@/lib/data";
import { Link } from "@tanstack/react-router";

const CANONICAL = "https://everlasting-journeys.lovable.app/gallery";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Wedding Gallery & Portfolio — Maison Aurelia" },
      { name: "description", content: "Browse Maison Aurelia's portfolio of luxury weddings: decoration, reception, couple shoots and catering moments from celebrations across India." },
      { property: "og:title", content: "Wedding Gallery & Portfolio — Maison Aurelia" },
      { property: "og:description", content: "A curated portfolio of luxury weddings designed by Maison Aurelia — décor, receptions, couple shoots and catering." },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=2000&q=80" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Maison Aurelia Wedding Portfolio",
          url: CANONICAL,
          description: "Curated portfolio of luxury weddings — décor, receptions, couple shoots and catering.",
        }),
      },
    ],
  }),
});

const CATEGORIES = ["All", "Decoration", "Reception", "Couple Shoots", "Catering"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [index, setIndex] = useState(-1);

  const filtered = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter],
  );

  return (
    <div className="overflow-hidden">
      {/* Banner */}
      <section className="relative h-[60svh] min-h-[420px] flex items-end text-white overflow-hidden">
        <motion.img src={IMG.galleryHero} alt="" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 6 }} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="relative container-luxury pb-16 md:pb-24">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xs tracking-[0.3em] uppercase text-[#e6c873]">
            <Link to="/" className="hover:text-white">Home</Link> <span className="mx-2 text-white/40">/</span> Gallery
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4">
            Our <em className="italic text-gradient-gold not-italic-not">Portfolio</em>
          </motion.h1>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-20 md:py-28 bg-[#fff9f5]">
        <div className="container-luxury">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-5 md:px-7 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] transition-all border ${
                    filter === c
                      ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                      : "bg-white text-ink border-[#d4af37]/30 hover:border-[#d4af37] hover:text-[#b8941f]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5 [column-fill:_balance]">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.button
                  layout
                  key={img.src + img.category + i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
                  onClick={() => setIndex(i)}
                  className="block w-full mb-4 md:mb-5 relative group overflow-hidden rounded-2xl"
                  style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "4/5" : "1/1" }}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute bottom-4 left-4 text-white text-xs uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {img.category}
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <Lightbox
          open={index >= 0}
          index={Math.max(0, index)}
          close={() => setIndex(-1)}
          slides={filtered.map((g) => ({ src: g.src }))}
        />
      </section>
    </div>
  );
}
