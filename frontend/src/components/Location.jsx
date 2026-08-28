import { Clock, Instagram, MapPin } from "lucide-react";
import { Chapter, Reveal, MaskedLines } from "./anim";
import { ADDRESS, HOURS, INSTAGRAM_URL } from "../data/content";

const Location = () => (
  <section id="visit" data-testid="visit-section" className="relative bg-cream text-forest px-5 md:px-10 py-24 md:py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <Chapter num="06" label="Find Us" />
      <MaskedLines
        inView
        lines={["Pull up.", "We're open daily"]}
        lineClassName="font-display uppercase leading-[0.88] text-5xl sm:text-6xl md:text-7xl mb-12 md:mb-16"
      />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch">
        <Reveal className="md:col-span-5">
          <div className="h-full border border-forest/25 bg-forest text-cream p-8 md:p-10 flex flex-col justify-between gap-10" data-testid="visit-info-card">
            <div>
              <div className="flex items-start gap-4 mb-8">
                <MapPin size={22} className="text-matcha shrink-0 mt-1" />
                <div>
                  <h3 className="font-display uppercase text-2xl mb-2">The Address</h3>
                  <p className="text-cream/75 leading-relaxed" data-testid="visit-address">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={22} className="text-matcha shrink-0 mt-1" />
                <div>
                  <h3 className="font-display uppercase text-2xl mb-2">The Hours</h3>
                  {HOURS.map((h) => (
                    <p key={h.day} className="text-cream/75" data-testid="visit-hours">
                      {h.day}
                      <span className="block font-display text-3xl text-matcha mt-1">{h.time}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <a
              data-testid="visit-instagram-link"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-berry px-6 py-3 text-xs uppercase tracking-[0.18em] font-bold transition-colors duration-300 hover:bg-cream hover:text-forest"
            >
              <Instagram size={15} /> @sectionb.in
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-7">
          <div className="h-full min-h-[380px] overflow-hidden rounded-sm border border-forest/25" data-testid="visit-map">
            <iframe
              title="Section-B Coffee & Eatery — Rajendra Nagar, Ghaziabad"
              src="https://maps.google.com/maps?q=Rajendra%20Nagar%2C%20Ghaziabad%2C%20Uttar%20Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full map-toned"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Location;
