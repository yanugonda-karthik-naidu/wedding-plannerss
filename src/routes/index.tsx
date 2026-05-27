import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  GiDiamondRing,
  GiFlowerPot,
  GiCookingPot,
  GiPartyPopper,
} from "react-icons/gi";
import { MdCameraAlt, MdLocationOn, MdMusicNote, MdRestaurant, MdAccessTime, MdPersonalVideo, MdVerified } from "react-icons/md";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { Reveal, SectionTitle, fadeUp, stagger } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { GALLERY, IMG, SERVICES, TESTIMONIALS } from "@/lib/data";

const CANONICAL = "https://everlasting-journeys.lovable.app/";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Maison Aurelia — Luxury Wedding Planners in India" },
      { name: "description", content: "Maison Aurelia designs end-to-end luxury weddings — décor, photography, catering, venues and entertainment — across India and beyond." },
      { property: "og:title", content: "Maison Aurelia — Luxury Wedding Planners in India" },
      { property: "og:description", content: "End-to-end luxury wedding planning — from intimate ceremonies to multi-day destination celebrations." },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Maison Aurelia",
              url: CANONICAL,
              logo: "https://everlasting-journeys.lovable.app/favicon.ico",
              description: "Luxury wedding planners crafting end-to-end celebrations across India and beyond.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "22 Heritage Lane, Bandra West",
                addressLocality: "Mumbai",
                postalCode: "400050",
                addressCountry: "IN",
              },
              telephone: "+91-98765-43210",
              email: "hello@maisonaurelia.com",
            },
            {
              "@type": "WebSite",
              name: "Maison Aurelia",
              url: CANONICAL,
            },
          ],
        }),
      },
    ],
  }),
});

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  GiDiamondRing, GiFlowerPot, MdCameraAlt, MdRestaurant, MdLocationOn, MdMusicNote,
};

const whyChoose = [
  { icon: HiSparkles, title: "End-to-End Management", text: "From mood boards to morning-after brunches — we handle every detail." },
  { icon: GiDiamondRing, title: "Customized Packages", text: "Every wedding is bespoke. We design around your story, taste and budget." },
  { icon: MdPersonalVideo, title: "Experienced Team", text: "Award-winning planners, designers and cinematographers under one roof." },
  { icon: GiPartyPopper, title: "Affordable Luxury", text: "Premium quality, transparent pricing, no compromise on the magic." },
  { icon: MdAccessTime, title: "On-Time Execution", text: "Detailed timelines and battle-tested production logistics." },
  { icon: MdVerified, title: "Trusted Vendors", text: "A handpicked network of India's finest florists, chefs and venues." },
];

function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const galleryPreview = GALLERY.slice(0, 6);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full flex items-center justify-center text-white overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img src={IMG.hero} alt="Luxury wedding ceremony" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-vignette" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative z-10 container-luxury text-center max-w-4xl"
        >
          <motion.span variants={fadeUp} custom={0} className="eyebrow !text-[#e6c873]">
            Maison Aurelia · Est. 2019
          </motion.span>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-serif text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] mt-6 font-medium"
          >
            Creating <em className="italic text-gradient-gold not-italic-not">Unforgettable</em>
            <br className="hidden sm:block" /> Wedding Experiences
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-7 max-w-xl mx-auto text-[15px] md:text-lg text-white/85 leading-relaxed"
          >
            End-to-end luxury wedding planning — from intimate ceremonies to multi-day
            celebrations across the world's most extraordinary destinations.
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/services" className="btn-gold w-full sm:w-auto">
              Explore Services <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn-outline-gold w-full sm:w-auto">
              Book Consultation
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 1.5, duration: 1 }, y: { repeat: Infinity, duration: 2.2, ease: "easeInOut" } }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/80"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <FiArrowDown />
        </motion.div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 md:py-32 bg-[#fff9f5]">
        <div className="container-luxury grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
              <img src={IMG.about} alt="Bride and groom" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="hidden md:block absolute -bottom-8 -right-6 bg-white border border-[#d4af37]/30 rounded-2xl p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
              <p className="font-serif italic text-2xl text-ink leading-snug">"Every love story<br />deserves a masterpiece."</p>
              <p className="mt-3 text-xs tracking-[0.3em] uppercase text-[#b8941f]">— Aurelia Mehta</p>
            </div>
          </Reveal>

          <div>
            <Reveal><span className="eyebrow left">About Us</span></Reveal>
            <Reveal delay={1}>
              <h2 className="font-serif text-[34px] md:text-[52px] leading-[1.08] mt-5 text-ink">
                Where every detail<br /> tells your <em className="italic text-gradient-gold not-italic-not">story.</em>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                For over five years, Maison Aurelia has been quietly producing some of India's most
                talked-about weddings. We don't follow trends — we create heirloom moments, designed
                with intention and executed with calm precision.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <Counter to={250} label="Weddings" />
                <Counter to={1000} label="Happy Guests" />
                <Counter to={5} label="Years" />
              </div>
            </Reveal>
            <Reveal delay={4}>
              <Link to="/about" className="inline-flex items-center gap-2 mt-10 text-sm uppercase tracking-[0.2em] text-ink border-b border-[#d4af37] pb-1 hover:gap-4 transition-all">
                Our Story <FiArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#fff9f5] to-[#f8e7e7]/40">
        <div className="container-luxury">
          <SectionTitle
            eyebrow="What We Do"
            title={<>A complete suite for your <em className="italic text-gradient-gold not-italic-not">perfect day</em></>}
            subtitle="From the first consultation to the last dance — every service crafted in-house, every detail considered."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16"
          >
            {SERVICES.map((s, i) => {
              const Icon = iconMap[s.icon] ?? GiDiamondRing;
              return (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  custom={i}
                  className="luxury-card p-8 md:p-9 group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#fff9f5] border border-[#d4af37]/30 grid place-items-center text-[#b8941f] group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-white transition-all duration-500">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-serif text-2xl md:text-[26px] mt-6 text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-[0.22em] text-[#b8941f] hover:gap-3 transition-all">
                    Discover <FiArrowRight />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32 bg-[#fff9f5] relative overflow-hidden">
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-[#f8e7e7] rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-[#eadbc8] rounded-full blur-3xl opacity-50" />
        <div className="relative container-luxury">
          <SectionTitle
            eyebrow="Why Maison Aurelia"
            title={<>The signatures of <em className="italic text-gradient-gold not-italic-not">true craft.</em></>}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i}>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-7 border border-white text-center md:text-left h-full hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8941f] grid place-items-center text-white mx-auto md:mx-0">
                    <item.icon size={22} />
                  </div>
                  <h3 className="font-serif text-xl mt-5 text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-luxury">
          <SectionTitle
            eyebrow="Moments"
            title={<>A glimpse into our <em className="italic text-gradient-gold not-italic-not">portfolio</em></>}
          />
          <div className="columns-2 md:columns-3 gap-4 md:gap-5 mt-14 [column-fill:_balance]">
            {galleryPreview.map((img, i) => (
              <Reveal key={i} delay={i}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="block w-full mb-4 md:mb-5 relative group overflow-hidden rounded-2xl"
                  style={{ aspectRatio: i % 3 === 1 ? "3/4" : i % 3 === 2 ? "4/5" : "1/1" }}
                >
                  <img src={img.src} alt={img.category} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute bottom-4 left-4 text-white text-xs uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {img.category}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-gold">View Full Gallery <FiArrowRight /></Link>
          </div>
        </div>

        <Lightbox
          open={lightboxIndex >= 0}
          index={Math.max(0, lightboxIndex)}
          close={() => setLightboxIndex(-1)}
          slides={galleryPreview.map((g) => ({ src: g.src }))}
        />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#d4af37 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="container-luxury relative">
          <SectionTitle
            eyebrow="Kind Words"
            title={<>Loved by the couples we've <em className="italic text-gradient-gold not-italic-not">celebrated</em>.</>}
            light
          />
          <Reveal delay={2} className="mt-16">
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              slidesPerView={1}
              spaceBetween={32}
              loop
              autoplay={{ delay: 5500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              className="!pb-16"
            >
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <SwiperSlide key={i} className="!h-auto">
                  <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full flex flex-col">
                    <div className="text-[#d4af37] text-5xl font-serif leading-none">"</div>
                    <p className="mt-2 text-white/85 text-[15px] leading-relaxed flex-1">{t.quote}</p>
                    <div className="mt-6 flex items-center gap-4 pt-6 border-t border-white/10">
                      <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-[#d4af37]/40" />
                      <div>
                        <p className="font-serif text-lg">{t.name}</p>
                        <p className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-40 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.cta} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        </div>
        <div className="relative container-luxury text-center max-w-3xl">
          <Reveal><span className="eyebrow !text-[#e6c873]">Begin Your Story</span></Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-[40px] sm:text-6xl md:text-7xl leading-[1.05] mt-6">
              Let's create your <em className="italic text-gradient-gold not-italic-not">dream wedding</em> together.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-white/80 max-w-xl mx-auto">
              Schedule a complimentary consultation. We'd love to hear your story.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <Link to="/contact" className="btn-gold mt-10">Book Consultation <FiArrowRight /></Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
