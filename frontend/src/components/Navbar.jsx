import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu as MenuIcon, X } from "lucide-react";
import { Magnetic, EASE } from "./anim";
import { INSTAGRAM_URL } from "../data/content";

const LINKS = [
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Showcase", href: "#showcase" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

export const scrollToSection = (href) => {
  if (window.__lenis) {
    window.__lenis.scrollTo(href, { offset: 0, duration: 1.4 });
  } else {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    setTimeout(() => scrollToSection(href), open ? 350 : 0);
  };

  return (
    <>
      <motion.header
        data-testid="main-navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.4, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-[80] transition-[background-color,color,border-color,backdrop-filter] duration-500 border-b ${
          scrolled
            ? "bg-cream/90 text-forest border-forest/15 backdrop-blur-md"
            : "bg-transparent text-cream border-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-5 md:px-10 py-4">
          <button
            data-testid="nav-logo"
            onClick={() => go("#top")}
            className="font-display text-xl md:text-2xl tracking-tight uppercase leading-none text-left"
            aria-label="Section-B home"
          >
            Section-B
            <span className={`block font-body text-[9px] md:text-[10px] tracking-[0.3em] font-bold ${scrolled ? "text-berry" : "text-matcha"}`}>
              Coffee & Eatery
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <button
                key={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                onClick={() => go(l.href)}
                className="relative text-xs uppercase tracking-[0.2em] font-bold group"
              >
                {l.label}
                <span className={`absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-[width] duration-300 ${scrolled ? "bg-berry" : "bg-matcha"}`} />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Magnetic>
              <a
                data-testid="order-online-button"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-bold transition-colors duration-300 ${
                  scrolled
                    ? "bg-forest text-cream hover:bg-berry"
                    : "bg-cream text-forest hover:bg-berry hover:text-cream"
                }`}
              >
                <Instagram size={14} /> Order Online
              </a>
            </Magnetic>
            <button
              data-testid="nav-mobile-toggle"
              onClick={() => setOpen(true)}
              className="lg:hidden p-2"
              aria-label="Open menu"
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="nav-mobile-overlay"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="fixed inset-0 z-[95] bg-forest text-cream flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-cream/15">
              <span className="font-display text-xl uppercase">Section-B</span>
              <button data-testid="nav-mobile-close" onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                <X size={26} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {LINKS.map((l, i) => (
                <div key={l.href} className="overflow-hidden">
                  <motion.button
                    data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.7, ease: EASE }}
                    onClick={() => go(l.href)}
                    className="font-display text-5xl uppercase leading-[1.05] hover:text-matcha transition-colors"
                  >
                    {l.label}
                  </motion.button>
                </div>
              ))}
            </div>
            <div className="px-8 pb-10">
              <a
                data-testid="nav-mobile-order"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-berry px-6 py-3 text-sm uppercase tracking-[0.15em] font-bold"
              >
                <Instagram size={16} /> Order via Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
