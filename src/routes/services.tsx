import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { GiDiamondRing, GiFlowerPot } from "react-icons/gi";
import { MdCameraAlt, MdLocationOn, MdMusicNote, MdRestaurant } from "react-icons/md";
import { Reveal, SectionTitle, fadeUp, stagger } from "@/components/site/Reveal";
import { IMG, SERVICES, PACKAGES } from "@/lib/data";

const CANONICAL = "https://everlasting-journeys.lovable.app/services";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Wedding Services & Packages — Maison Aurelia" },
      { name: "description", content: "Full-service luxury wedding planning: décor, photography, catering, venues, entertainment and pricing packages from Maison Aurelia." },
      { property: "og:title", content: "Wedding Services & Packages — Maison Aurelia" },
      { property: "og:description", content: "Every wedding service under one roof — planning, décor, photography, catering, venues and entertainment." },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=80" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
});

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  GiDiamondRing, GiFlowerPot, MdCameraAlt, MdRestaurant, MdLocationOn, MdMusicNote,
};

function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative h-[70svh] min-h-[480px] flex items-center text-white overflow-hidden">
        <motion.img
          src={IMG.servicesHero}
          alt=""
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 7, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-vignette" />
        <div className="relative container-luxury max-w-3xl text-center mx-auto">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="eyebrow !text-[#e6c873]">Our Services</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="font-serif text-5xl md:text-7xl mt-6 leading-[1.05]">
            Designed for the<br /><em className="italic text-gradient-gold not-italic-not">finest moments.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-6 text-white/80 max-w-xl mx-auto">
            Everything you need, under one roof. Every service produced in-house by our atelier.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 md:py-32 bg-[#fff9f5]">
        <div className="container-luxury flex flex-col gap-24 md:gap-32">
          {SERVICES.map((s, i) => {
            const Icon = iconMap[s.icon] ?? GiDiamondRing;
            const reverse = i % 2 === 1;
            return (
              <div key={s.title} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <Reveal>
                  <div className="relative aspect-[5/6] rounded-[2rem] overflow-hidden">
                    <img src={s.img} alt={s.alt ?? `${s.title} wedding service`} loading="lazy" className="w-full h-full object-cover" />
                    <div className="absolute top-5 left-5 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-xs uppercase tracking-[0.25em] text-[#b8941f]">
                      0{i + 1}
                    </div>
                  </div>
                </Reveal>
                <div>
                  <Reveal>
                    <div className="w-14 h-14 rounded-full bg-white border border-[#d4af37]/30 grid place-items-center text-[#b8941f]">
                      <Icon size={26} />
                    </div>
                  </Reveal>
                  <Reveal delay={1}>
                    <h2 className="font-serif text-[34px] md:text-[52px] leading-[1.08] mt-6 text-ink">
                      {s.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={2}>
                    <p className="mt-5 text-muted-foreground leading-relaxed">{s.short}</p>
                  </Reveal>
                  <Reveal delay={3}>
                    <ul className="mt-8 space-y-3">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-[15px] text-ink">
                          <FiCheck className="text-[#d4af37] mt-1 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={4}>
                    <Link to="/contact" className="inline-flex items-center gap-2 mt-10 text-sm uppercase tracking-[0.2em] text-ink border-b border-[#d4af37] pb-1 hover:gap-4 transition-all">
                      Enquire <FiArrowRight />
                    </Link>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#fff9f5] to-[#eadbc8]/40">
        <div className="container-luxury">
          <SectionTitle
            eyebrow="Investment"
            title={<>Curated <em className="italic text-gradient-gold not-italic-not">packages</em></>}
            subtitle="Three starting points. Every wedding is bespoke from here."
          />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-16 items-stretch">
            {PACKAGES.map((p, i) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                custom={i}
                className={`relative rounded-3xl p-8 md:p-10 flex flex-col transition-all duration-500 ${
                  p.highlight
                    ? "bg-[#1a1a1a] text-white md:scale-105 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] border border-[#d4af37]/40"
                    : "bg-white border border-[#d4af37]/20 text-ink hover:-translate-y-2 hover:shadow-2xl"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#d4af37] to-[#e6c873] text-white text-[10px] uppercase tracking-[0.3em] px-4 py-1.5 rounded-full">Most Loved</span>
                )}
                <span className={`text-xs uppercase tracking-[0.3em] ${p.highlight ? "text-[#e6c873]" : "text-[#b8941f]"}`}>{p.name}</span>
                <p className={`font-serif text-5xl mt-4 ${p.highlight ? "text-white" : "text-ink"}`}>{p.price}</p>
                <p className={`mt-3 text-sm ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>{p.tagline}</p>
                <div className={`h-px my-7 ${p.highlight ? "bg-white/15" : "bg-[#d4af37]/20"}`} />
                <ul className="space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${p.highlight ? "text-white/85" : "text-ink"}`}>
                      <FiCheck className={p.highlight ? "text-[#e6c873] mt-0.5 shrink-0" : "text-[#d4af37] mt-0.5 shrink-0"} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-10 inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all ${
                  p.highlight ? "bg-white text-ink hover:bg-[#d4af37] hover:text-white" : "bg-[#1a1a1a] text-white hover:bg-[#d4af37]"
                }`}>
                  Enquire Now <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
