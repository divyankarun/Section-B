import { Instagram, MapPin, Clock } from "lucide-react";
import { Reveal } from "./anim";
import { ADDRESS, INSTAGRAM_URL } from "../data/content";
import { scrollToSection } from "./Navbar";

const Footer = () => (
  <footer data-testid="site-footer" className="relative bg-forest-deep text-cream overflow-hidden">
    <div className="px-5 md:px-10 pt-16 md:pt-24 pb-8 max-w-7xl mx-auto">
      <Reveal>
        <button
          data-testid="footer-logo"
          onClick={() => scrollToSection("#top")}
          className="font-display uppercase leading-[0.85] text-[16vw] md:text-[11vw] text-outline-cream hover:text-cream transition-colors duration-500 block w-full text-left"
        >
          Section-B
        </button>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-cream/15 mt-10 pt-10">
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-matcha mb-4">Visit</h4>
          <p className="text-sm text-cream/70 leading-relaxed flex gap-2">
            <MapPin size={14} className="shrink-0 mt-1" /> {ADDRESS}
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-matcha mb-4">Hours</h4>
          <p className="text-sm text-cream/70 flex gap-2">
            <Clock size={14} className="shrink-0 mt-0.5" /> Open Daily, 11 AM – 11 PM
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-matcha mb-4">Explore</h4>
          <div className="flex flex-col gap-2">
            {["Story", "Menu", "Showcase", "Gallery", "Contact"].map((l) => (
              <button
                key={l}
                data-testid={`footer-link-${l.toLowerCase()}`}
                onClick={() => scrollToSection(`#${l.toLowerCase()}`)}
                className="w-fit text-sm text-cream/70 hover:text-berry transition-colors duration-300 text-left"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-matcha mb-4">Follow</h4>
          <a
            data-testid="footer-instagram-link"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-cream/70 hover:text-berry transition-colors duration-300"
          >
            <Instagram size={16} className="transition-transform duration-300 group-hover:-rotate-12" /> @sectionb.in
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-cream/15 mt-10 pt-6 text-[11px] uppercase tracking-[0.2em] font-bold text-cream/40">
        <span data-testid="footer-copyright">© 2026 Section-B Coffee & Eatery</span>
        <span>Freshly brewed. Freshly baked. Every single day.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
