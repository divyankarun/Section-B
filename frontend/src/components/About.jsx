import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Chapter, Reveal, MaskedLines } from "./anim";
import { IMAGES } from "../data/content";

const STATS = [
  { value: "40+", label: "Items on the board" },
  { value: "12hr", label: "Open every day" },
  { value: "1", label: "Beloved bear mascot" },
];

const About = () => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="story" data-testid="story-section" className="relative bg-cream text-forest px-5 md:px-10 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Chapter num="01" label="Our Story" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-7">
            <MaskedLines
              inView
              lines={["Freshly brewed.", "Freshly baked."]}
              lineClassName="font-display uppercase leading-[0.9] text-5xl sm:text-6xl md:text-7xl"
              className="mb-3"
            />
            <MaskedLines
              inView
              baseDelay={0.25}
              lines={[<span key="e" className="text-berry">Every single day.</span>]}
              lineClassName="font-display uppercase leading-[0.9] text-5xl sm:text-6xl md:text-7xl"
              className="mb-8"
            />
            <Reveal delay={0.15}>
              <p className="text-base md:text-lg leading-relaxed text-forest/80 max-w-xl mb-6" data-testid="story-paragraph-1">
                Section-B started with a simple obsession — coffee that looks as good as it tastes. From our layered
                Strawberry Matcha to cold coffees blended with caramelised Biscoff, every cup leaves the counter as a
                small piece of craft, sealed with our bear's stamp of approval.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-base md:text-lg leading-relaxed text-forest/80 max-w-xl mb-10" data-testid="story-paragraph-2">
                Then we got hungry. So we built a kitchen to match the bar — Korean cheese buns, tandoori paneer
                pizzas, cheesecakes baked in-house every morning. One counter, eleven menu boards, zero shortcuts.
              </p>
            </Reveal>
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl border-t border-forest/20 pt-8">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={0.15 + i * 0.12}>
                  <div data-testid={`story-stat-${i}`}>
                    <div className="font-display text-4xl md:text-5xl text-berry">{s.value}</div>
                    <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-forest/60 mt-2">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 relative" ref={imgRef}>
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-t-full border border-forest/25 shadow-[0_30px_60px_-30px_rgba(14,59,44,0.5)]">
                <motion.img
                  style={{ y, scale: 1.18 }}
                  src={IMAGES.interior1}
                  alt="Inside Section-B — warm lighting and the brew bar"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                  data-testid="story-image"
                />
                <div className="absolute inset-0 bg-forest/10" />
              </div>
              <div className="absolute -left-6 top-8 -rotate-12 rounded-sm bg-tang px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold text-cream shadow-lg" data-testid="story-stamp">
                Est. Ghaziabad
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
