# Helene Clinic India — React Landing Page

Advanced stem cell therapy landing page built with React + Vite.

---

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

## Build for Production

```bash
npm run build
npm run preview   # preview the production build
```

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 | UI framework |
| Vite | 8 | Build tool + dev server |
| CSS Modules | — | Scoped component styles |
| react-hook-form | — | Form validation |
| Intersection Observer API | — | Scroll reveal animations |

---

## Project Structure

```
src/
├── components/          # Reusable UI components (each has .jsx + .module.css)
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Treatment.jsx / TreatmentCard.jsx
│   ├── Benefits.jsx / BenefitCard.jsx
│   ├── WhyHelene.jsx
│   ├── ProcessTimeline.jsx
│   ├── Eligibility.jsx
│   ├── Doctors.jsx / DoctorCard.jsx
│   ├── Testimonials.jsx / ReviewCard.jsx
│   ├── FAQ.jsx
│   ├── ContactForm.jsx
│   ├── Footer.jsx
│   ├── CTAButton.jsx
│   ├── SectionTitle.jsx
│   └── Container.jsx
├── pages/
│   └── LandingPage.jsx  # Main page — lazy-loads all sections
├── data/
│   └── content.js       # All site copy, structured data, nav links
├── hooks/
│   └── useScrollReveal.js
├── styles/
│   ├── global.css
│   └── variables.css
└── main.jsx
```

---

## Page Sections (in order)

1. **Navbar** — Fixed, transparent → white on scroll; mobile hamburger menu
2. **Hero** — Full-viewport gradient hero, headline, dual CTAs, trust badges, stats bar
3. **About** — Clinic story, trust points, ISO badge
4. **Treatment** — Accordion cards: Orthopaedic, Neurological, Autoimmune, Anti-ageing
5. **Benefits** — 6-card grid: Minimally Invasive, Rapid Recovery, Natural Healing, etc.
6. **Why Helene** — Dark band with 4 key stats/differentiators
7. **Process Timeline** — 6-step numbered vertical timeline
8. **Eligibility** — Suitable / Not suitable candidate criteria
9. **Doctors** — 2 specialist profiles with credentials and bio
10. **Testimonials** — 4 patient reviews with outcomes and star ratings
11. **FAQ** — Accessible accordion with 8 questions
12. **Contact Form** — Full consultation request form with validation + success state
13. **Footer** — Brand, quick links, conditions, WhatsApp CTA, legal disclaimer

---

## DOCX Content Mapping

| DOCX Content | Section Used |
|---|---|
| Clinic overview & mission | About section |
| Treatment categories & descriptions | Treatment accordion cards |
| Key differentiators / USPs | Benefits cards + Why Helene stats |
| Step-by-step treatment journey | Process Timeline |
| Candidate criteria | Eligibility section |
| Doctor profiles | Doctors section |
| Patient testimonials | Testimonials section |
| FAQs | FAQ accordion |
| Contact details | Contact section + Footer |
| Headline / hero copy | Hero section |

---

## Improvements Made

- **Architecture**: Monolithic HTML → fully componentised React with CSS Modules
- **Performance**: Lazy-loaded sections (10 components) + manual chunk splitting → 69KB gzipped React vendor bundle
- **Accessibility**: Skip-link, ARIA labels, roles, heading hierarchy (h1→h2→h3), keyboard-navigable accordion & FAQ
- **Forms**: React Hook Form with proper validation, accessible error messages, aria-required/aria-invalid
- **SEO**: Full meta title/description, Open Graph, Twitter Card, JSON-LD MedicalClinic schema, canonical URL
- **Responsive**: Mobile-first, hamburger nav, all grids collapse gracefully to single column
- **Scroll reveals**: IntersectionObserver-based fade-in for each section
- **TypeScript-free** as specified; no unnecessary dependencies

---

## Customisation

### Replace placeholder images
Add image files to `src/assets/images/` and import them in the relevant component, replacing the `imagePlaceholder` div with `<img>` tags.

### Update contact details
Edit `src/data/content.js` → `SITE_META` object.

### Update all copy
All page content lives in `src/data/content.js`. No content is hardcoded in components.

---

## Final QA Checklist

- [x] All sections present and ordered correctly
- [x] React architecture clean — all data in `content.js`
- [x] All components reusable and individually styled with CSS Modules
- [x] Responsive at 320px, 768px, 1024px, 1440px
- [x] No horizontal scroll on any viewport
- [x] Form validation with accessible error messages
- [x] Accordion (Treatment, FAQ) keyboard-navigable
- [x] Proper heading hierarchy throughout
- [x] Alt text / aria-hidden on all decorative SVGs
- [x] Skip-to-content link present
- [x] ARIA roles and labels on navigation, lists, forms
- [x] SEO meta tags complete
- [x] Open Graph + Twitter Card
- [x] JSON-LD MedicalClinic schema
- [x] Clean production build (zero errors)
- [x] Code split: React vendor (~69KB gzip), lazy sections (~1-3KB each)
- [x] No console errors
- [x] Production-ready code
