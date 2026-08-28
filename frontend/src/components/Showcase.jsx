import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Chapter, Reveal, MaskedLines } from "./anim";
import { IMAGES } from "../data/content";

const CARDS = [
  { img: IMAGES.heroCup, title: "Strawberry Matcha", note: "The signature pour" },
  { img: IMAGES.menuMain, title: "The Coffee Board", note: "Cold & hot, side by side" },
  { img: IMAGES.menuDessert, title: "Dessert Ledger", note: "Baked fresh daily" },
  { img: IMAGES.menuFood1, title: "Loaded Eats", note: "Burgers, fries & platters" },
  { img: IMAGES.menuFood2, title: "Food Menu", note: "Pizza to Korean specials" },
];

const Card = ({ card, index }) => (
  <div
    className="group relative shrink-0 w-[78vw] sm:w-[52vw] md:w-[30vw] overflow-hidden rounded-sm border border-forest/25 bg-forest"
    data-testid={`showcase-card-${index}`}
  >
    <div className="overflow-hidden">
      <img
        src={card.img}
        alt={`${card.title} — Section-B packaging and menu artwork`}
        className="w-full aspect-[3/4] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/40 to-transparent p-5 pt-16 text-cream">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-2xl text-matcha">{String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3 className="font-display uppercase text-xl leading-tight">{card.title}</h3>
          <p className="text-xs uppercase tracking-[0.18em] font-bold text-cream/60 mt-1">{card.note}</p>
        </div>
      </div>
    </div>
  </div>
);

const Showcase = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);

  return (
    <section id="showcase" data-testid="showcase-section" className="relative bg-cream text-forest">
      <div className="px-5 md:px-10 pt-24 md:pt-32 max-w-7xl mx-auto">
        <Chapter num="03" label="The Packaging" />
        <div className="flex flex-wrap items-end justify-between gap-6 pb-10 md:pb-14">
          <MaskedLines
            inView
            lines={["Wearing its", "colours proudly"]}
            lineClassName="font-display uppercase leading-[0.88] text-5xl sm:text-6xl md:text-7xl"
          />
          <Reveal delay={0.2}>
            <p className="text-sm md:text-base text-forest/70 max-w-xs leading-relaxed">
              Every board, cup and label drawn from the same forest-green soul. Scroll through the artwork that built
              this site.
            </p>
          </Reveal>
        </div>
      </div>

      <div ref={targetRef} className="relative hidden md:block h-[280vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 pl-10">
            {CARDS.map((c, i) => (
              <Card key={c.title} card={c} index={i} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="md:hidden px-5 pb-24 grid grid-cols-1 gap-5">
        {CARDS.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <Card card={c} index={i} />
          </Reveal>
        ))}
      </div>
      <div className="hidden md:block pb-24" />
    </section>
  );
};

export default Showcase;
