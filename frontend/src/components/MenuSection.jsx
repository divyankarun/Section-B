import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Chapter, Reveal, MaskedLines, EASE } from "./anim";
import { MENU, MENU_CATEGORIES } from "../data/content";

const MenuItem = ({ item, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.4), ease: EASE }}
    data-testid={`menu-item-${item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
    className="group relative border border-cream/20 p-5 transition-colors duration-300 hover:bg-cream hover:text-forest"
  >
    {item.best && (
      <span className="absolute -top-3 right-4 -rotate-6 rounded-sm bg-tang px-2.5 py-1 text-[9px] uppercase tracking-[0.15em] font-bold text-cream shadow-md">
        Best Seller
      </span>
    )}
    <div className="flex items-baseline gap-2">
      <h3 className="font-display uppercase text-lg md:text-xl leading-tight">{item.name}</h3>
      <span className="flex-1 border-b-2 border-dotted border-cream/35 group-hover:border-forest/35 -translate-y-1 transition-colors duration-300" />
      <span className="font-display text-lg md:text-xl text-matcha group-hover:text-berry transition-colors duration-300 whitespace-nowrap">
        ₹{item.price}
      </span>
    </div>
    <p className="mt-2 text-sm text-cream/60 group-hover:text-forest/70 transition-colors duration-300">{item.desc}</p>
  </motion.div>
);

const MenuSection = () => {
  const [cat, setCat] = useState("cold");
  const items = MENU[cat];

  return (
    <section id="menu" data-testid="menu-section" className="relative bg-forest text-cream px-5 md:px-10 py-24 md:py-32 overflow-hidden">
      <div className="absolute top-20 right-0 font-display uppercase text-[22vw] leading-none text-cream/[0.04] pointer-events-none select-none">
        Menu
      </div>
      <div className="relative max-w-7xl mx-auto">
        <Chapter num="02" label="The Boards" dark />
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <MaskedLines
            inView
            lines={["The Menu"]}
            lineClassName="font-display uppercase leading-[0.85] text-6xl sm:text-7xl md:text-8xl"
          />
          <Reveal delay={0.2}>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-cream/50 max-w-[220px] text-right">
              Add flavours @ ₹30 — Hazelnut / Vanilla / Irish / Salted Caramel
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mb-10">
          <div className="flex flex-wrap gap-3" data-testid="menu-filters">
            {MENU_CATEGORIES.map((c) => (
              <button
                key={c.key}
                data-testid={`menu-filter-${c.key}`}
                onClick={() => setCat(c.key)}
                className={`rounded-full px-6 py-2.5 text-xs uppercase tracking-[0.18em] font-bold border transition-all duration-300 ${
                  cat === c.key
                    ? "bg-berry border-berry text-cream"
                    : "border-cream/30 text-cream/70 hover:border-cream hover:text-cream"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5" data-testid="menu-grid">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <MenuItem key={item.name} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.15} className="mt-12">
          <div className="inline-block -rotate-1 rounded-md border-2 border-dashed border-tang px-6 py-4" data-testid="menu-flavours-stamp">
            <span className="font-display uppercase text-xl md:text-2xl text-tang">Add flavours @ ₹30</span>
            <span className="block text-xs uppercase tracking-[0.2em] font-bold text-cream/60 mt-1">
              Hazelnut / Vanilla / Irish / Salted Caramel — Add. GST applies
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MenuSection;
