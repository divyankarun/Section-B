import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";
import { Chapter, MaskedLines } from "./anim";
import { TESTIMONIALS } from "../data/content";

const Testimonials = () => (
  <section id="love" data-testid="testimonials-section" className="relative bg-forest text-cream py-24 md:py-32 overflow-hidden">
    <div className="px-5 md:px-10 max-w-7xl mx-auto">
      <Chapter num="05" label="Word Of Mouth" dark />
      <MaskedLines
        inView
        lines={["Loud love,", "soft serve"]}
        lineClassName="font-display uppercase leading-[0.88] text-5xl sm:text-6xl md:text-7xl mb-12 md:mb-16"
      />
    </div>
    <Marquee speed={35} gradient={false} pauseOnHover className="py-2" data-testid="testimonials-marquee">
      {TESTIMONIALS.map((t, i) => (
        <div
          key={t.name}
          data-testid={`testimonial-card-${i}`}
          className="mx-3 w-[320px] md:w-[400px] shrink-0 border border-cream/20 bg-forest-deep/50 p-6 md:p-8"
        >
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} size={14} className="fill-tang text-tang" />
            ))}
          </div>
          <p className="text-sm md:text-base leading-relaxed text-cream/85 mb-6">“{t.quote}”</p>
          <div className="flex items-baseline justify-between border-t border-cream/15 pt-4">
            <span className="font-display uppercase text-lg">{t.name}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-matcha">{t.tag}</span>
          </div>
        </div>
      ))}
    </Marquee>
  </section>
);

export default Testimonials;
