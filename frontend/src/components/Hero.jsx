import { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Coffee, Instagram, UtensilsCrossed } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Magnetic, RotatingStamp, EASE } from "./anim";
import { IMAGES, INSTAGRAM_URL, MARQUEE_ITEMS, ZOMATO_URL } from "../data/content";
import { scrollToSection } from "./Navbar";

const WordLine = ({ words, baseDelay = 0, className = "" }) => (
  <span className={`flex flex-wrap gap-x-[0.28em] ${className}`}>
    {words.map((w, i) => (
      <span key={i} className="overflow-hidden inline-block pb-[0.08em] -mb-[0.08em]">
        <motion.span
          className={`inline-block ${w.cls || ""}`}
          initial={{ y: "115%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.95, delay: baseDelay + i * 0.1, ease: EASE }}
        >
          {w.t}
        </motion.span>
      </span>
    ))}
  </span>
);

const Steam = () => (
  <svg
    viewBox="0 0 100 150"
    className="absolute -top-[5.5rem] md:-top-28 left-1/2 -translate-x-1/2 w-20 md:w-24 h-28 md:h-36 pointer-events-none z-20"
    aria-hidden="true"
  >
    {[0, 1, 2].map((i) => (
      <motion.path
        key={i}
        d={`M${28 + i * 22} 145 C ${18 + i * 22} 118, ${38 + i * 22} 100, ${28 + i * 22} 74 C ${18 + i * 22} 50, ${38 + i * 22} 34, ${28 + i * 22} 8`}
        fill="none"
        stroke="rgba(244,239,230,0.55)"
        strokeWidth="3.5"
        strokeLinecap="round"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: [0, 0.5, 0], y: [14, -4, -24] }}
        transition={{ duration: 3.4, delay: 1.6 + i * 1.1, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
      />
    ))}
  </svg>
);

const Bean = ({ className, delay }) => (
  <motion.svg
    viewBox="0 0 24 32"
    className={`absolute w-4 h-6 pointer-events-none ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.14, 0.14, 0], y: [0, -34, 0], rotate: [0, 40, 0] }}
    transition={{ duration: 11, delay, repeat: Infinity, ease: "easeInOut" }}
    aria-hidden="true"
  >
    <ellipse cx="12" cy="16" rx="10" ry="14" fill="rgba(244,239,230,0.9)" />
    <path d="M12 3 C 8 10, 16 22, 12 29" stroke="#0E3B2C" strokeWidth="2.4" fill="none" />
  </motion.svg>
);

const Flecks = () => {
  const flecks = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        left: `${(i * 61) % 100}%`,
        top: `${(i * 37 + 9) % 95}%`,
        size: 3 + ((i * 7) % 4),
        color: i % 3 === 0 ? "rgba(217,58,58,0.5)" : i % 3 === 1 ? "rgba(168,198,134,0.55)" : "rgba(244,239,230,0.4)",
        dur: 7 + (i % 5) * 2,
        delay: (i % 6) * 0.9,
        drift: 14 + (i % 4) * 8,
      })),
    []
  );
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]" aria-hidden="true">
      {flecks.map((f, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{ left: f.left, top: f.top, width: f.size, height: f.size, backgroundColor: f.color }}
          animate={{ y: [0, -f.drift, 0], x: [0, f.drift / 2, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <Bean className="left-[12%] top-[22%]" delay={0.5} />
      <Bean className="left-[82%] top-[62%]" delay={3.2} />
      <Bean className="left-[55%] top-[12%]" delay={6} />
    </div>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const cupY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="relative min-h-screen bg-forest text-cream overflow-hidden flex flex-col">
      {/* Layer 1 — blurred color-wash duplicate of the cup photo */}
      <motion.img
        src={IMAGES.heroCup}
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 2.4, delay: 0.2 }}
        className="absolute -right-[18%] top-[4%] w-[75%] md:w-[55%] scale-150 blur-3xl pointer-events-none select-none z-[1]"
      />
      <motion.img
        src={IMAGES.heroCup}
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2.8, delay: 0.4 }}
        className="absolute -left-[25%] bottom-[-10%] w-[60%] scale-[1.7] blur-3xl rotate-12 pointer-events-none select-none z-[1]"
      />

      {/* Layer 2 — morphing palette blobs */}
      <motion.div
        className="hero-blob absolute z-[2] left-[-8%] top-[-12%] h-[55vh] w-[55vh] bg-berry/50"
        animate={{ rotate: [0, 90, 0], scale: [1, 1.18, 1], x: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-blob absolute z-[2] right-[-6%] bottom-[-14%] h-[60vh] w-[60vh] bg-matcha/40"
        style={{ animationDelay: "-6s" }}
        animate={{ rotate: [0, -70, 0], scale: [1.1, 0.95, 1.1], y: [0, -36, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-blob absolute z-[2] left-[30%] top-[45%] h-[38vh] w-[38vh] bg-tang/25"
        style={{ animationDelay: "-11s" }}
        animate={{ scale: [1, 1.25, 1], x: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Layer 3 — geometry: dot grid + diagonal hairlines + vignette */}
      <div className="hero-dots absolute inset-0 z-[3] pointer-events-none" aria-hidden="true" />
      <div className="hero-lines absolute inset-0 z-[3] pointer-events-none opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 vignette-forest z-[4] pointer-events-none" aria-hidden="true" />

      {/* Layer 4 — drifting flecks & beans */}
      <Flecks />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center px-5 md:px-10 pt-32 pb-10 max-w-[1600px] mx-auto w-full"
      >
        <div className="lg:col-span-7 xl:col-span-6">
          <motion.p
            data-testid="hero-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: EASE }}
            className="text-[10px] md:text-xs uppercase tracking-[0.35em] font-bold text-matcha mb-6 flex items-center gap-3"
          >
            <span className="inline-block h-[2px] w-10 bg-berry" />
            Section-B — Coffee & Eatery, Ghaziabad
          </motion.p>

          <h1 className="font-display uppercase leading-[0.88] tracking-tight text-[15vw] sm:text-[12vw] lg:text-[7.6vw]">
            <WordLine baseDelay={0.5} words={[{ t: "Brewed" }, { t: "Bold,", cls: "text-berry" }]} />
            <WordLine baseDelay={0.75} words={[{ t: "Served", cls: "text-outline-cream" }, { t: "With", cls: "text-outline-cream" }]} />
            <WordLine baseDelay={1.0} words={[{ t: "A" }, { t: "Bear", cls: "text-matcha" }, { t: "Hug." }]} />
          </h1>

          <motion.p
            data-testid="hero-tagline"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.9, ease: EASE }}
            className="mt-7 max-w-md text-base md:text-lg leading-relaxed text-cream/75"
          >
            Layered matcha, loud cold coffees, and cheesecakes baked in-house — poured daily from 11 to 11 in
            Rajendra Nagar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.65, duration: 0.9, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <motion.button
                data-testid="hero-view-menu-button"
                onClick={() => scrollToSection("#menu")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-xs uppercase tracking-[0.18em] font-bold text-forest transition-colors duration-300 hover:bg-berry hover:text-cream"
              >
                View The Menu <ArrowDown size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </motion.button>
            </Magnetic>
            <Magnetic>
              <motion.a
                data-testid="hero-zomato-button"
                href={ZOMATO_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full bg-berry px-7 py-3.5 text-xs uppercase tracking-[0.18em] font-bold text-cream transition-colors duration-300 hover:bg-cream hover:text-forest"
              >
                <UtensilsCrossed size={15} /> Zomato
              </motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a
                data-testid="hero-order-button"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full border border-cream/50 px-7 py-3.5 text-xs uppercase tracking-[0.18em] font-bold transition-colors duration-300 hover:bg-cream hover:text-forest"
              >
                <Instagram size={15} /> Instagram
              </motion.a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Focal cup — asymmetric, tilted, cropped toward the frame edge */}
        <div className="lg:col-span-5 xl:col-span-6 relative flex justify-center lg:justify-end">
          <motion.div style={{ y: cupY }} className="relative lg:translate-x-14 xl:translate-x-24">
            <motion.div
              initial={{ opacity: 0, scale: 1.15, rotate: -7 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              transition={{ delay: 0.6, duration: 1.4, ease: EASE }}
              className="relative"
            >
              <Steam />
              {/* liquid-settle glow under the cup */}
              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-24 w-[130%] rounded-full bg-berry/45 blur-2xl pointer-events-none"
                initial={{ scale: 1.5, opacity: 0.85 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{ delay: 1.1, duration: 2.2, ease: "easeOut" }}
                aria-hidden="true"
              />
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 bottom-4 -translate-x-1/2 h-28 w-28 rounded-full border-2 border-berry/50 pointer-events-none"
                  initial={{ scale: 0.25, opacity: 0.7 }}
                  animate={{ scale: 2.6, opacity: 0 }}
                  transition={{ duration: 1.9, delay: 1.35 + i * 0.55, ease: "easeOut" }}
                  aria-hidden="true"
                />
              ))}
              {/* floating loop */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="absolute -inset-3 md:-inset-4 rounded-t-full border border-matcha/30 translate-x-3 translate-y-3 pointer-events-none" />
                <div className="relative h-[46vh] md:h-[58vh] lg:h-[64vh] aspect-[3/4] overflow-hidden rounded-t-full border border-cream/25 shadow-[0_50px_90px_-25px_rgba(0,0,0,0.6)]">
                  <motion.img
                    src={IMAGES.heroCup}
                    alt="Section-B signature Strawberry Matcha — layered strawberry and matcha in the SBC bear cup"
                    className="h-full w-full object-cover"
                    data-testid="hero-product-image"
                    fetchPriority="high"
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, duration: 1.6, ease: EASE }}
                  />
                  <div className="absolute inset-0 vignette-forest opacity-50" />
                </div>
              </motion.div>
              {/* stamp hugging the frame edge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.7, duration: 0.8, ease: EASE }}
                className="absolute -left-8 md:-left-12 top-16 z-20"
              >
                <RotatingStamp text="OPEN DAILY • 11 AM – 11 PM • GHAZIABAD • SECTION-B • " className="h-24 w-24 md:h-28 md:w-28 text-matcha">
                  <Coffee size={22} className="text-cream" />
                </RotatingStamp>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-20 border-t border-cream/15 bg-forest-deep/60 backdrop-blur-sm"
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
