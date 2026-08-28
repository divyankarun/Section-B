import { useState } from "react";
import axios from "axios";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Chapter, Reveal, MaskedLines, Magnetic } from "./anim";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TOPICS = ["Table Reservation", "General Enquiry", "Bulk / Party Order", "Feedback"];

const inputCls =
  "w-full bg-transparent border border-forest/30 px-4 py-3.5 text-sm text-forest placeholder:text-forest/40 focus:outline-none focus:border-berry transition-colors duration-300 rounded-sm";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", topic: TOPICS[0], message: "" });
  const [sending, setSending] = useState(false);
  const [newsEmail, setNewsEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, { ...form, phone: form.phone || null });
      toast.success("Message received — the bear will get back to you shortly.");
      setForm({ name: "", email: "", phone: "", topic: TOPICS[0], message: "" });
    } catch {
      toast.error("Something went wrong. Try again or DM us on Instagram.");
    } finally {
      setSending(false);
    }
  };

  const subscribe = async (e) => {
    e.preventDefault();
    setSubscribing(true);
    try {
      await axios.post(`${API}/newsletter`, { email: newsEmail });
      toast.success("You're on the list. Fresh drops, first sips.");
      setNewsEmail("");
    } catch {
      toast.error("Couldn't subscribe right now — try again.");
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative bg-cream text-forest px-5 md:px-10 py-24 md:py-32 border-t border-forest/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Chapter num="07" label="Say Hello" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-5">
            <MaskedLines
              inView
              lines={["Book a table.", "Or just say hi."]}
              lineClassName="font-display uppercase leading-[0.9] text-5xl sm:text-6xl md:text-7xl mb-8"
            />
            <Reveal delay={0.15}>
              <p className="text-base md:text-lg text-forest/75 leading-relaxed max-w-md mb-10">
                Reservations, party orders, or love letters for the bear — drop it here and we'll take it from there.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <form onSubmit={subscribe} className="border border-forest/25 p-6 md:p-8" data-testid="newsletter-form">
                <h3 className="font-display uppercase text-2xl mb-2">The Fresh Sheet</h3>
                <p className="text-sm text-forest/60 mb-5">New brews, secret specials, bear sightings. Monthly, no spam.</p>
                <div className="flex gap-2">
                  <input
                    data-testid="newsletter-email-input"
                    type="email"
                    required
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    placeholder="your@email.com"
                    className={inputCls}
                    aria-label="Newsletter email"
                  />
                  <button
                    data-testid="newsletter-submit-button"
                    type="submit"
                    disabled={subscribing}
                    className="shrink-0 rounded-sm bg-forest px-5 text-xs uppercase tracking-[0.15em] font-bold text-cream transition-colors duration-300 hover:bg-berry disabled:opacity-50"
                  >
                    {subscribing ? "…" : "Join"}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="md:col-span-7">
            <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-testid="contact-form">
              <input data-testid="contact-name-input" required value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} aria-label="Your name" />
              <input data-testid="contact-email-input" required type="email" value={form.email} onChange={set("email")} placeholder="Email" className={inputCls} aria-label="Email" />
              <input data-testid="contact-phone-input" value={form.phone} onChange={set("phone")} placeholder="Phone (optional)" className={inputCls} aria-label="Phone" />
              <select data-testid="contact-topic-select" value={form.topic} onChange={set("topic")} className={inputCls} aria-label="Topic">
                {TOPICS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <textarea
                data-testid="contact-message-input"
                required
                value={form.message}
                onChange={set("message")}
                placeholder="Tell us everything…"
                rows={5}
                className={`${inputCls} sm:col-span-2 resize-none`}
                aria-label="Message"
              />
              <div className="sm:col-span-2">
                <Magnetic className="w-fit">
                  <button
                    data-testid="contact-submit-button"
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center gap-2 rounded-full bg-berry px-8 py-4 text-xs uppercase tracking-[0.18em] font-bold text-cream transition-colors duration-300 hover:bg-forest disabled:opacity-50"
                  >
                    {sending ? "Sending…" : "Send It Over"} <Send size={14} />
                  </button>
                </Magnetic>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
