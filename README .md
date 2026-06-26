# QuantumLeaf

> **You build houses. Let us build whatever you can think of.**

Web development studio based in Ann Arbor, Michigan — built for home builders and 3D concrete construction companies.

---

## Tech Stack

- **[Next.js 14](https://nextjs.org/)** — App Router, React Server Components
- **TypeScript** — full type safety
- **CSS** — custom properties, keyframe animations, no framework
- **next/font** — zero-layout-shift Google Fonts (Space Grotesk, Inter, JetBrains Mono)
- **Vercel** — deployment

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

---

## Project Structure

```
quantumleaf/
├── app/
│   ├── layout.tsx        # Root layout — fonts, metadata
│   ├── page.tsx          # Main page composition
│   └── globals.css       # All styles + CSS variables
├── components/
│   ├── Logo.tsx          # Animated SVG circuit-leaf logo
│   ├── StarfieldCanvas.tsx  # Canvas starfield + shooting stars
│   ├── Cursor.tsx        # Custom cursor with trailing ring
│   ├── ProgressBar.tsx   # Scroll progress bar
│   ├── RevealObserver.tsx   # IntersectionObserver for scroll reveals
│   ├── Nav.tsx           # Fixed navigation
│   ├── Hero.tsx          # Hero — typewriter, glitch effect, parallax
│   ├── Ticker.tsx        # Scrolling marquee strip
│   ├── Services.tsx      # 6 service cards with 3D tilt
│   ├── About.tsx         # About + animated stat counters
│   ├── Process.tsx       # 4-step process section
│   ├── Pricing.tsx       # Honest pricing section
│   ├── Contact.tsx       # Contact form → mailto
│   └── Footer.tsx        # Footer
├── .gitignore
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## Features

- Animated SVG logo — self-drawing circuit-leaf with traveling electron particle
- Canvas starfield — 220 particles, mouse parallax, random shooting stars
- Custom cursor — green dot + lerp-trailing ring, expands on hover
- Typewriter hero — cycles through 7 phrases
- Scroll reveal — IntersectionObserver on every section
- 3D card tilt — mouse-tracking perspective on service cards
- Stat counters — ease-out cubic count-up on scroll into view
- Periodic glitch — clip-path slice effect on hero heading every 8.5s
- Fully responsive — mobile breakpoints at 920px and 600px

---

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic redeploy.

```bash
git add .
git commit -m "your message"
git push
```

---

## Contact

📧 [quantumleafteam@gmail.com](mailto:quantumleafteam@gmail.com)  
📍 Ann Arbor, Michigan
