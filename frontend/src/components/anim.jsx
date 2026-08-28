import { useRef, useState } from "react";
import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export const Reveal = ({ children, delay = 0, y = 44, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.9, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const MaskedLines = ({ lines, className = "", lineClassName = "", baseDelay = 0, inView = false }) => {
  const rows = lines.map((line, i) => (
    <div key={i} className="overflow-hidden">
      <motion.div
        className={lineClassName}
        variants={{
          hidden: { y: "115%" },
          show: { y: 0, transition: { duration: 1.05, delay: baseDelay + i * 0.12, ease: EASE } },
        }}
      >
        {line}
      </motion.div>
    </div>
  ));
  return inView ? (
    <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
      {rows}
    </motion.div>
  ) : (
    <motion.div className={className} initial="hidden" animate="show">
      {rows}
    </motion.div>
  );
};

export const Magnetic = ({ children, className = "", strength = 0.3 }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({
      x: (e.clientX - r.left - r.width / 2) * strength,
      y: (e.clientY - r.top - r.height / 2) * strength,
    });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 160, damping: 14, mass: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export const RotatingStamp = ({ text, className = "", children }) => (
  <div className={`relative ${className}`} data-testid="rotating-stamp">
    <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
      <defs>
        <path id="stamp-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
      </defs>
      <text className="fill-current" style={{ fontSize: "8.4px", letterSpacing: "2.6px", fontFamily: "Manrope, sans-serif", fontWeight: 700 }}>
        <textPath href="#stamp-circle">{text}</textPath>
      </text>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">{children}</div>
  </div>
);

export const Chapter = ({ num, label, dark = false }) => (
  <Reveal className="mb-10 md:mb-14">
    <div className={`flex items-end gap-4 md:gap-6 border-b pb-5 ${dark ? "border-cream/25" : "border-forest/25"}`}>
      <span
        className={`font-display text-6xl md:text-8xl leading-[0.8] ${
          dark ? "text-outline-cream" : "text-outline-forest"
        }`}
        data-testid={`chapter-number-${num}`}
      >
        {num}
      </span>
      <span className={`text-xs md:text-sm uppercase tracking-[0.25em] font-bold pb-1 ${dark ? "text-matcha" : "text-berry"}`}>
        Chapter {num} — {label}
      </span>
    </div>
  </Reveal>
);
