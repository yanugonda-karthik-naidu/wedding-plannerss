import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { Reveal, SectionTitle, fadeUp, stagger } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { IMG, TEAM, PROCESS } from "@/lib/data";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function PageBanner({ title, image, crumb }: { title: string; image: string; crumb: string }) {
  return (
    <section className="relative h-[60svh] min-h-[420px] flex items-end text-white overflow-hidden">
      <motion.img
        src={image}
        alt=""
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="relative container-luxury pb-16 md:pb-24">
        <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xs tracking-[0.3em] uppercase text-[#e6c873]">
          <Link to="/" className="hover:text-white">Home</Link> <span className="mx-2 text-white/40">/</span> <span className="text-white">{crumb}</span>
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4">
          {title}
        </motion.h1>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <div className="overflow-hidden">
      <PageBanner title="About Us" crumb="About" image={IMG.aboutHero} />

      {/* Story */}
      <section className="py-24 md:py-32 bg-[#fff9f5]">
        <div className="container-luxury grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
              <img src={IMG.story} alt="" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal><span className="eyebrow left">Our Story</span></Reveal>
            <Reveal delay={1}>
              <h2 className="font-serif text-[34px] md:text-[52px] leading-[1.08] mt-5 text-ink">
                A studio built on <em className="italic text-gradient-gold not-italic-not">love letters.</em>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Maison Aurelia began in 2019 with a single, intimate ceremony in a quiet vineyard
                outside Nashik. What started as a passion project for our founder Aurelia Mehta has
                grown into one of India's most discreet luxury wedding houses.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Today we plan multi-day celebrations across heritage palaces, beachfront resorts and
                European estates — but the soul remains the same: thoughtful design, calm execution,
                and weddings that feel deeply, beautifully you.
              </p>
            </Reveal>
            <Reveal delay={4}>
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[#d4af37]/20">
                <Counter to={250} label="Weddings" />
                <Counter to={42} label="Destinations" />
                <Counter to={98} suffix="%" label="Referrals" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#fff9f5] to-[#eadbc8]/30">
        <div className="container-luxury">
          <SectionTitle eyebrow="Our Compass" title={<>Mission & <em className="italic text-gradient-gold not-italic-not">Vision</em></>} />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              { title: "Our Mission", body: "To craft weddings that feel less produced and more lived-in — moments designed with intention, executed with calm." },
              { title: "Our Vision", body: "To become the most trusted name in luxury Indian weddings, where every couple is celebrated, never overwhelmed." },
            ].map((card) => (
              <motion.div key={card.title} variants={fadeUp} className="luxury-card p-10 md:p-12 group">
                <span className="text-xs uppercase tracking-[0.3em] text-[#b8941f]">{card.title}</span>
                <h3 className="font-serif text-3xl md:text-4xl mt-4 text-ink leading-tight">{card.body}</h3>
                <div className="gold-line mt-8 group-hover:w-32 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-luxury">
          <SectionTitle eyebrow="The Atelier" title={<>People behind the <em className="italic text-gradient-gold not-italic-not">magic</em></>} />
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
            {TEAM.map((m, i) => (
              <motion.div key={m.name} variants={fadeUp} custom={i} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/15 backdrop-blur grid place-items-center text-white border border-white/20 hover:bg-[#d4af37] hover:border-[#d4af37] transition-all">
                      <FaInstagram size={14} />
                    </a>
                  </div>
                </div>
                <h3 className="font-serif text-xl mt-5 text-ink">{m.name}</h3>
                <p className="text-xs uppercase tracking-[0.25em] text-[#b8941f] mt-1">{m.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 md:py-32 bg-[#1a1a1a] text-white">
        <div className="container-luxury">
          <SectionTitle light eyebrow="Our Process" title={<>From hello to <em className="italic text-gradient-gold not-italic-not">happily ever after</em></>} />

          <div className="mt-20 relative">
            {/* Desktop horizontal */}
            <div className="hidden md:block">
              <div className="absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
              <div className="grid grid-cols-5 gap-6 relative">
                {PROCESS.map((p, i) => (
                  <Reveal key={p.step} delay={i}>
                    <div className="text-center">
                      <div className="w-14 h-14 mx-auto rounded-full bg-[#1a1a1a] border-2 border-[#d4af37] grid place-items-center font-serif text-[#d4af37] text-lg">{p.step}</div>
                      <h3 className="font-serif text-2xl mt-6">{p.title}</h3>
                      <p className="mt-3 text-sm text-white/65 leading-relaxed">{p.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Mobile vertical */}
            <div className="md:hidden relative pl-12">
              <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[#d4af37] via-[#d4af37]/40 to-transparent" />
              {PROCESS.map((p, i) => (
                <Reveal key={p.step} delay={i}>
                  <div className="relative pb-10">
                    <div className="absolute -left-12 top-0 w-12 h-12 rounded-full bg-[#1a1a1a] border-2 border-[#d4af37] grid place-items-center font-serif text-[#d4af37]">{p.step}</div>
                    <h3 className="font-serif text-2xl">{p.title}</h3>
                    <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
