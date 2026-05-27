import { Link } from "@tanstack/react-router";
import { FaInstagram, FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";
import { NAV_LINKS, SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white/80 pt-20 pb-10 mt-0">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div>
            <h3 className="font-serif text-3xl text-white">
              Maison <span className="italic text-gradient-gold">Aurelia</span>
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Crafting unforgettable luxury weddings across India and beyond. Every detail
              designed, every moment savored.
            </p>
            <div className="flex gap-3 mt-6">
              {[FaInstagram, FaFacebookF, FaPinterestP, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 grid place-items-center rounded-full border border-white/15 hover:border-[#d4af37] hover:text-[#d4af37] hover:bg-white/5 transition-all"
                  aria-label="social"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.32em] text-[#d4af37] mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/70 hover:text-[#d4af37] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.32em] text-[#d4af37] mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.title} className="text-white/70 hover:text-[#d4af37] transition-colors">
                  <Link to="/services">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.32em] text-[#d4af37] mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>22 Heritage Lane,<br />Bandra West, Mumbai 400050</li>
              <li>+91 98765 43210</li>
              <li>hello@maisonaurelia.com</li>
              <li className="text-white/70">Mon–Sat · 10am–7pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>© {new Date().getFullYear()} Maison Aurelia. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Crafted with devotion</p>
        </div>
      </div>
    </footer>
  );
}
