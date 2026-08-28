import Marquee from "react-fast-marquee";
import { Chapter, Reveal, MaskedLines } from "./anim";
import { IMAGES } from "../data/content";

const TILES = [
  { img: IMAGES.interior2, alt: "The Section-B counter at golden hour", span: "row-span-2" },
  { img: IMAGES.burger, alt: "Loaded burger and fries off the Section-B food board", span: "" },
  { img: IMAGES.heroCup, alt: "Strawberry Matcha layers settling in the SBC cup", span: "" },
  { img: IMAGES.people, alt: "Regulars filling the cafe on a busy evening", span: "row-span-2" },
  { img: IMAGES.menuFood1, alt: "Hand-drawn food menu boards", span: "" },
  { img: IMAGES.interior1, alt: "Warm corners and quiet tables", span: "" },
];

const Gallery = () => (
  <section id="gallery" data-testid="gallery-section" className="relative bg-cream text-forest pb-24 md:pb-32 overflow-hidden">
    <Marquee speed={30} gradient={false} className="border-y border-forest/20 py-4 mb-16 md:mb-20" data-testid="gallery-marquee">
      {["Freshly Baked", "Every Single Day", "Section-B", "Coffee & Eatery", "Ghaziabad"].map((t) => (
        <span key={t} className="mx-8 font-display uppercase text-2xl md:text-4xl text-forest/90 flex items-center gap-8">
          {t} <span className="text-tang text-xl">✳</span>
        </span>
      ))}
    </Marquee>

    <div className="px-5 md:px-10 max-w-7xl mx-auto">
      <Chapter num="04" label="The Vibe" />
      <MaskedLines
        inView
        lines={["Inside the", "green room"]}
        lineClassName="font-display uppercase leading-[0.88] text-5xl sm:text-6xl md:text-7xl mb-12 md:mb-16"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-4" data-testid="gallery-grid">
        {TILES.map((t, i) => (
          <Reveal key={t.alt} delay={i * 0.07} className={t.span}>
            <div className="group relative h-full w-full overflow-hidden rounded-sm border border-forest/20" data-testid={`gallery-tile-${i}`}>
              <img
                src={t.img}
                alt={t.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/25 transition-colors duration-500" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
