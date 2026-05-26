import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-[#fff9f5]/90 backdrop-blur-xl shadow-[0_4px_30px_-15px_rgba(0,0,0,0.15)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span
              className={`font-serif text-2xl md:text-[26px] font-semibold tracking-tight transition-colors ${
                scrolled || open ? "text-ink" : "text-white"
              }`}
              style={{ color: scrolled || open ? "#1f1f1f" : "#fff" }}
            >
              Maison <span className="italic text-gradient-gold">Aurelia</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="nav-link"
                style={{ color: scrolled ? "#1f1f1f" : "#fff" }}
                activeProps={{ className: "nav-link active" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-gold !py-3 !px-6 !text-xs">
              Book Consultation
            </Link>
          </div>

          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 -mr-2"
            style={{ color: scrolled || open ? "#1f1f1f" : "#fff" }}
          >
            {open ? <HiX size={26} /> : <HiMenuAlt4 size={26} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-[#fff9f5] pt-24 pb-10 px-8 flex flex-col"
          >
            <div className="gold-line mb-10" />
            <nav className="flex flex-col gap-7">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                >
                  <Link
                    to={l.to}
                    className="font-serif text-4xl text-ink hover:text-[#b8941f] transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="mt-auto"
            >
              <Link to="/contact" className="btn-gold w-full">Book Consultation</Link>
              <p className="mt-6 text-sm text-muted-foreground tracking-widest uppercase">
                +91 98765 43210
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
