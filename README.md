# MJ Spa – React website (multi-page)

## Run
1. Node 18+ → `npm install`
2. `npm run dev` (local) / `npm run build` (output in `dist/`)

## Structure
- `src/pages/` – one file per page (Home, About, Services, ServiceDetail, Packages, Gallery, Contact)
- `src/sections/` – page sections (Hero, About, Services, WhyUs, Benefits, Process, Packages, Gallery, Testimonials, Faq, Contact)
- `src/components/` – Layout, Navbar, Footer, Floating buttons, Img, Head, ServiceCard
- `src/data.js` – services, FAQs, reviews, image URLs (edit content here)
- `src/animations.js` – desktop-only GSAP logic with cleanup on resize
- `src/styles.css` – brand variables at top; hover effects in the desktop media query

## Hosting
Routes like `/services/thai` need a fallback to `index.html`. Included: `public/_redirects` (Netlify) and `vercel.json` (Vercel).

## Customise
Colours: `:root` in `styles.css`. Photos: replace URLs in `data.js`. Hours/phone: `sections/Contact.jsx`, `utils.js`.

## v4 notes
Home follows a calm editorial layout (preloader %, full-screen MENU, leaf art, arch image). For the music toggle add your own royalty-free file at public/ambient.mp3.
