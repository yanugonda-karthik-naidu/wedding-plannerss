import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent } from "react";
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import { FiChevronDown, FiSend } from "react-icons/fi";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { IMG, FAQS } from "@/lib/data";

const CANONICAL = "https://everlasting-journeys.lovable.app/contact";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Maison Aurelia — Book a Wedding Consultation" },
      { name: "description", content: "Get in touch with Maison Aurelia to plan your luxury wedding. Book a complimentary consultation, view our Mumbai studio details and FAQs." },
      { property: "og:title", content: "Contact Maison Aurelia — Book a Wedding Consultation" },
      { property: "og:description", content: "Reach our Mumbai studio to start planning your bespoke wedding celebration with Maison Aurelia." },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How far in advance should we book?", acceptedAnswer: { "@type": "Answer", text: "We recommend booking 8–12 months in advance for full-scale weddings, especially for destinations. Intimate ceremonies can sometimes be planned in 3–4 months." } },
            { "@type": "Question", name: "Do you handle destination weddings?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We've produced weddings in Udaipur, Jaipur, Goa, Bali, Tuscany and beyond. Our team manages logistics, travel and on-ground coordination end-to-end." } },
            { "@type": "Question", name: "Can packages be customized?", acceptedAnswer: { "@type": "Answer", text: "Yes — every wedding is bespoke. Our packages are starting points, and we tailor every element to your taste, guest count and budget." } },
            { "@type": "Question", name: "What is included in the wedding planning package?", acceptedAnswer: { "@type": "Answer", text: "Full creative direction, vendor management, budgeting, design, production, on-day coordination and a dedicated planner from day one to the final farewell." } },
            { "@type": "Question", name: "Do you offer pre-wedding shoots?", acceptedAnswer: { "@type": "Answer", text: "Yes, our cinematic pre-wedding films and portraits are a signature offering, and can be shot at locations of your choice in India or abroad." } },
          ],
        }),
      },
    ],
  }),
});

const contactCards = [
  { icon: MdPhone, title: "Phone", value: "+91 98765 43210", sub: "Mon – Sat" },
  { icon: MdEmail, title: "Email", value: "hello@maisonaurelia.com", sub: "We reply within 24h" },
  { icon: MdLocationOn, title: "Studio", value: "22 Heritage Lane", sub: "Bandra West, Mumbai" },
  { icon: MdAccessTime, title: "Hours", value: "10am – 7pm", sub: "Closed Sundays" },
];

function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="overflow-hidden">
      {/* Banner */}
      <section className="relative h-[55svh] min-h-[400px] flex items-end text-white overflow-hidden">
        <motion.img src={IMG.contactHero} alt="" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 6 }} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/80" />
        <div className="relative container-luxury pb-16 md:pb-20">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-xs tracking-[0.3em] uppercase text-[#e6c873]">
            <Link to="/" className="hover:text-white">Home</Link> <span className="mx-2 text-white/40">/</span> Contact
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="font-serif text-5xl md:text-7xl lg:text-8xl mt-4">
            Let's <em className="italic text-gradient-gold not-italic-not">talk.</em>
          </motion.h1>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 md:py-28 bg-[#fff9f5]">
        <div className="container-luxury">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {contactCards.map((c, i) => (
              <Reveal key={c.title} delay={i}>
                <div className="luxury-card p-7 text-center group h-full">
                  <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8941f] grid place-items-center text-white group-hover:scale-110 transition-transform">
                    <c.icon size={24} />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8941f] mt-5">{c.title}</p>
                  <p className="font-serif text-xl text-ink mt-2 leading-tight">{c.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="pb-24 md:pb-32 bg-[#fff9f5]">
        <div className="container-luxury grid lg:grid-cols-5 gap-10 lg:gap-14">
          <Reveal className="lg:col-span-3">
            <div className="bg-white rounded-[2rem] p-7 md:p-12 border border-[#d4af37]/15 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.15)]">
              <span className="eyebrow left">Enquire</span>
              <h2 className="font-serif text-3xl md:text-5xl text-ink mt-4 leading-tight">
                Tell us about your <em className="italic text-gradient-gold not-italic-not">day.</em>
              </h2>
              <form onSubmit={onSubmit} className="mt-10 grid sm:grid-cols-2 gap-5">
                <Input id="contact-name" label="Full Name" type="text" placeholder="Your name" />
                <Input id="contact-phone" label="Phone" type="tel" placeholder="+91" />
                <Input id="contact-date" label="Wedding Date" type="date" />
                <div>
                  <label htmlFor="contact-service" className="text-[10px] uppercase tracking-[0.28em] text-[#b8941f]">Service Required</label>
                  <div className="relative mt-2">
                    <select id="contact-service" name="service" required className="w-full appearance-none bg-[#fff9f5] border border-[#d4af37]/25 rounded-full px-5 py-4 text-sm focus:outline-none focus:border-[#d4af37] focus:bg-white transition-all">
                      <option>Full Wedding Planning</option>
                      <option>Decoration & Florals</option>
                      <option>Photography & Film</option>
                      <option>Catering</option>
                      <option>Venue Booking</option>
                      <option>Other</option>
                    </select>
                    <FiChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-vision" className="text-[10px] uppercase tracking-[0.28em] text-[#b8941f]">Tell us your vision</label>
                  <textarea id="contact-vision" name="vision" rows={5} placeholder="Share your story, dates, locations…" className="w-full mt-2 bg-[#fff9f5] border border-[#d4af37]/25 rounded-3xl px-5 py-4 text-sm focus:outline-none focus:border-[#d4af37] focus:bg-white transition-all resize-none" />
                </div>
                <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
                  <button type="submit" className="btn-gold w-full sm:w-auto">
                    {sent ? "Sent ✓" : "Send Enquiry"} {!sent && <FiSend />}
                  </button>
                  <p className="text-xs text-muted-foreground">We'll reply within 24 hours.</p>
                </div>
              </form>
            </div>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-2">
            <div className="rounded-[2rem] overflow-hidden h-[420px] lg:h-full min-h-[420px] border border-[#d4af37]/15 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.2)]">
              <iframe
                title="Studio location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.8200%2C19.0400%2C72.8500%2C19.0700&layer=mapnik"
                className="w-full h-full grayscale-[0.4]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#fff9f5] to-[#f8e7e7]/40">
        <div className="container-luxury max-w-3xl">
          <SectionTitle eyebrow="FAQ" title={<>Frequently <em className="italic text-gradient-gold not-italic-not">asked</em></>} />
          <div className="mt-14 space-y-4">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <Reveal key={f.q} delay={i}>
                  <div className={`rounded-2xl border bg-white transition-all ${open ? "border-[#d4af37]/50 shadow-[0_20px_50px_-30px_rgba(212,175,55,0.5)]" : "border-[#d4af37]/15"}`}>
                    <button onClick={() => setOpenFaq(open ? null : i)} className="w-full flex items-center justify-between gap-5 text-left p-6 md:p-7">
                      <span className="font-serif text-lg md:text-xl text-ink">{f.q}</span>
                      <motion.span animate={{ rotate: open ? 45 : 0 }} className="w-9 h-9 grid place-items-center rounded-full bg-[#fff9f5] border border-[#d4af37]/30 text-[#b8941f] shrink-0">
                        <span className="text-xl leading-none">+</span>
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 md:px-7 pb-7 text-muted-foreground leading-relaxed text-[15px]">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function Input({ id, label, type, placeholder }: { id: string; label: string; type: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-[10px] uppercase tracking-[0.28em] text-[#b8941f]">{label}</label>
      <input
        id={id}
        name={id}
        required
        type={type}
        placeholder={placeholder}
        className="w-full mt-2 bg-[#fff9f5] border border-[#d4af37]/25 rounded-full px-5 py-4 text-sm focus:outline-none focus:border-[#d4af37] focus:bg-white focus:shadow-[0_0_0_4px_rgba(212,175,55,0.1)] transition-all"
      />
    </div>
  );
}
