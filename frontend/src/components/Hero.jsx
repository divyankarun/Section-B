import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Coffee, Instagram } from "lucide-react";
import Marquee from "react-fast-marquee";
import { MaskedLines, Magnetic, RotatingStamp, EASE } from "./anim";
import { IMAGES, INSTAGRAM_URL, MARQUEE_ITEMS } from "../data/content";
import { scrollToSection } from "./Navbar";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const cupY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const cupRotate = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="relative min-h-screen bg-forest text-cream overflow-hidden flex flex-col">
      <div className="absolute inset-0 vignette-forest pointer-events-none z-[5]" />
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-matcha/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-24 h-[380px] w-[380px] rounded-full bg-berry/10 blur-3xl pointer-events-none" />

      <div className="relative flex-1 flex flex-col items-center justify-center pt-28 pb-6 px-5">
        <motion.p
          data-testid="hero-eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: EASE }}
          className="relative z-20 text-[10px] md:text-xs uppercase tracking-[0.35em] font-bold text-matcha mb-5 text-center"
        >
          Coffee & Eatery — Rajendra Nagar, Ghaziabad
        </motion.p>

        <motion.div style={{ y: textY }} className="relative z-20 w-full text-center pointer-events-none select-none">
          <MaskedLines
            baseDelay={0.5}
            lines={[
              <span key="a" className="font-display uppercase leading-[0.82] tracking-tight text-[19vw] md:text-[15vw] block">
                Section<span className="text-berry">-B</span>
              </span>,
            ]}
          />
          <div className="overflow-hidden">
            <motion.p
              data-testid="hero-tagline"
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.85, duration: 1, ease: EASE }}
              className="font-display uppercase text-[6.5vw] md:text-[3.4vw] leading-[1.05] text-outline-cream mt-2 drop-shadow-[0_2px_12px_rgba(8,42,31,0.9)]"
            >
              Brewed bold. Served with a bear hug.
            </motion.p>
          </div>
        </motion.div>

        <motion.div style={{ y: cupY, rotate: cupRotate }} className="relative z-10 -mt-[6vw] md:-mt-[3.5vw]">
          <motion.div
            initial={{ opacity: 0, y: 90, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.0, duration: 1.2, ease: EASE }}
            className="relative"
          >
            <div className="absolute -inset-3 md:-inset-4 rounded-t-full border border-matcha/30 translate-x-3 translate-y-3 pointer-events-none" />
            <div className="relative h-[44vh] md:h-[52vh] aspect-[3/4] overflow-hidden rounded-t-full border border-cream/25 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55)]">
              <img
                src={IMAGES.heroCup}
                alt="Section-B signature Strawberry Matcha — layered strawberry and matcha in the SBC bear cup"
                className="h-full w-full object-cover scale-105"
                data-testid="hero-product-image"
                fetchPriority="high"
              />
              <div className="absolute inset-0 vignette-forest opacity-60" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.9, ease: EASE }}
          className="relative z-20 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic>
            <button
              data-testid="hero-view-menu-button"
              onClick={() => scrollToSection("#menu")}
              className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-xs uppercase tracking-[0.18em] font-bold text-forest transition-colors duration-300 hover:bg-berry hover:text-cream"
            >
              View The Menu <ArrowDown size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </Magnetic>
          <Magnetic>
            <a
              data-testid="hero-order-button"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/50 px-7 py-3.5 text-xs uppercase tracking-[0.18em] font-bold transition-colors duration-300 hover:bg-cream hover:text-forest"
            >
              <Instagram size={15} /> Order Now
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.8, ease: EASE }}
          className="absolute right-6 md:right-14 bottom-24 md:bottom-28 z-20 hidden sm:block"
        >
          <RotatingStamp text="OPEN DAILY • 11 AM – 11 PM • GHAZIABAD • SECTION-B • " className="h-28 w-28 md:h-32 md:w-32 text-matcha">
            <Coffee size={26} className="text-cream" />
          </RotatingStamp>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="relative z-20 border-t border-cream/15 bg-forest-deep/60"
      >
        <Marquee speed={42} gradient={false} className="py-3" data-testid="hero-marquee">
          {MARQUEE_ITEMS.map((item) => (
            <span key={item} className="mx-6 flex items-center gap-6 text-xs uppercase tracking-[0.25em] font-bold text-cream/70">
              {item} <span className="text-berry">✳</span>
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default Hero;
