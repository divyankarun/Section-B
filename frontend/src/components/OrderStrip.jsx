import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, UtensilsCrossed } from "lucide-react";
import { EASE, Magnetic } from "./anim";
import { INSTAGRAM_URL, ZOMATO_URL } from "../data/content";

const OrderStrip = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-testid="order-strip"
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="fixed inset-x-3 bottom-3 md:inset-x-6 md:bottom-5 z-[70]"
        >
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-full border border-cream/15 bg-forest-deep/90 py-2.5 pl-5 pr-2.5 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md">
            <p className="text-cream text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold leading-snug">
              <span className="text-matcha">Open till 11 PM</span>
              <span className="hidden sm:inline text-cream/60"> — craving something?</span>
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <Magnetic strength={0.2}>
                <a
                  data-testid="order-strip-zomato"
                  href={ZOMATO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-berry px-4 md:px-5 py-2 text-[10px] md:text-xs uppercase tracking-[0.15em] font-bold text-cream transition-colors duration-300 hover:bg-cream hover:text-forest"
                >
                  <UtensilsCrossed size={13} /> Order Now
                </a>
              </Magnetic>
              <Magnetic strength={0.2} className="hidden sm:block">
                <a
                  data-testid="order-strip-instagram"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order via Instagram"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/40 p-2 text-cream transition-colors duration-300 hover:bg-cream hover:text-forest"
                >
                  <Instagram size={14} />
                </a>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderStrip;
