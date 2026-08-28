# PRD — Section-B Coffee & Eatery Brand Site

## Original Problem Statement
Build a premium, visually striking, Awwwards-level boutique brand website for Section-B Coffee & Eatery (Rajendra Nagar, Ghaziabad). Visual identity derived from the actual product packaging/menu images (forest green, cream, strawberry red, matcha, orange accents — NOT generic coffee-brown). Heavy motion design: kinetic hero with masked line reveals, scroll-triggered staggers, magnetic CTAs, marquee tickers, parallax, sticky navbar, numbered manifesto chapters. Sections: Hero, Story, filterable Menu, Packaging Showcase, Gallery, Location & Hours, Testimonials, Contact/Order + newsletter, Footer. Functional contact form with backend, Instagram order link (@sectionb.in), mobile-first, SEO basics.

## User Choices
- Fonts: Anton (display) + Manrope (body) — bold/urban editorial
- Order Online → links to Instagram @sectionb.in
- Contact form → saved to backend database (no email)
- Image treatment: film grain + vignette (default)

## Architecture
- Frontend: React 19 + Tailwind, framer-motion (reveals/parallax/magnetic), lenis (momentum scroll), react-fast-marquee (tickers), sonner (toasts), lucide-react icons. Single-page chapter-based scroll (01–07).
- Backend: FastAPI + MongoDB (motor). POST/GET /api/contact, POST /api/newsletter, GET /api/health.
- Assets: 5 brand images self-hosted at /app/frontend/public/assets/.

## Implemented (2026-08-28)
- Kinetic hero: masked line reveal, arch-framed Strawberry Matcha cup with scroll parallax + rotation, rotating "Open Daily" stamp, editorial marquee
- Sticky navbar (transparent → cream on scroll), full-screen mobile menu with staggered links, magnetic Order button
- Chapter 01 Story: editorial split, parallax arch image, stat counters
- Chapter 02 Menu: 4 category filters (Cold/Hot/Desserts/Food), 42 real items with ₹ prices from actual menu, dotted leaders, hover color-inversion, best-seller stamps, "Add flavours @ ₹30" stamp
- Chapter 03 Packaging Showcase: scroll-driven horizontal gallery (desktop), stacked cards (mobile)
- Chapter 04 Gallery: marquee header + animated masonry grid
- Chapter 05 Testimonials: auto-scrolling review cards
- Chapter 06 Visit: info card (address, hours 11AM–11PM) + palette-toned Google Map embed
- Chapter 07 Contact: working form → MongoDB (verified), newsletter signup → MongoDB
- Footer: giant outline wordmark, links, socials
- SEO: title, meta description, OG tags, alt text, semantic sections
- Verified: backend endpoints via curl, contact form e2e (submission landed in DB), desktop + mobile screenshots, menu filtering
- Hero rebuilt (2026-08-28) as a fully code-composed scene around the single product photo: morphing strawberry/matcha/tang color blobs, blurred color-wash duplicates of the cup image, dot-grid + diagonal-hairline depth layers, animated SVG steam, liquid-settle glow + ripple rings, drifting matcha flecks and coffee-bean silhouettes, cup load-in scale 1.15→1 with continuous float loop, tilted asymmetric crop, word-by-word kinetic headline (slide-up + fade), magnetic scale-hover CTAs

## Backlog
- P1: Admin view for contact messages (currently GET endpoint only)
- P1: Email notifications via Resend when contact form is submitted
- P2: Real Instagram feed embed in Gallery
- P2: Full menu data for every board item (food categories beyond the 12 highlighted)
- P2: Delivery-platform deep links (Swiggy/Zomato) when available

## Test Credentials
No authentication in this app. See /app/memory/test_credentials.md.
