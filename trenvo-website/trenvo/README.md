# TRENVO — TikTok Commerce, Built to Scale

A production-ready marketing site for TRENVO, a TikTok Shop growth agency, built with
React + Vite + Tailwind CSS.

## Tech stack

- React 18 + Vite
- Tailwind CSS (custom design tokens for the TRENVO brand palette)
- React Router (for the legal pages)
- lucide-react icons
- FormSubmit (static form backend — no server required)

No paid dependencies are used anywhere in this project.

## Folder structure

```
trenvo/
├─ index.html                 # SEO tags, fonts, structured data
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ public/
│  └─ favicon.svg             # Custom "V + growth arrow" mark
├─ src/
│  ├─ main.jsx                # App entry, router
│  ├─ App.jsx                 # Layout shell + routes
│  ├─ index.css               # Tailwind + global styles/animations
│  ├─ hooks/
│  │  └─ useReveal.js         # Scroll-reveal IntersectionObserver hook
│  ├─ data/
│  │  └─ config.js            # Editable contact info, links, stats, testimonials
│  ├─ components/
│  │  ├─ Header.jsx           # Sticky nav, active-link highlight, mobile menu
│  │  ├─ Hero.jsx
│  │  ├─ ValueStrip.jsx
│  │  ├─ About.jsx
│  │  ├─ Services.jsx
│  │  ├─ Solutions.jsx
│  │  ├─ WhyChoose.jsx
│  │  ├─ Process.jsx
│  │  ├─ Results.jsx
│  │  ├─ CTA.jsx
│  │  ├─ FAQ.jsx
│  │  ├─ Contact.jsx          # Full consultation form (FormSubmit-powered)
│  │  ├─ Footer.jsx
│  │  ├─ WhatsAppButton.jsx   # Floating WhatsApp button
│  │  ├─ BackToTop.jsx
│  │  └─ LegalLayout.jsx
│  └─ pages/
│     ├─ Home.jsx             # Assembles all homepage sections
│     ├─ PrivacyPolicy.jsx
│     ├─ TermsOfService.jsx
│     └─ EarningsDisclaimer.jsx
└─ README.md
```

## 1. Install

```bash
cd trenvo
npm install
```

## 2. Run locally

```bash
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`).

## 3. Production build

```bash
npm run build
```

Output is generated in `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## 4. Deploying

### Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. In Vercel, "Add New Project" → import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. Add your custom domain under Project → Settings → Domains.

### Netlify

1. Push the project to a Git repository (or drag-and-drop the `dist/` folder after
   building, under Netlify's "Deploys" tab).
2. If connecting a repo: Build command `npm run build`, publish directory `dist`.
3. Because this app uses client-side routing (`react-router-dom`) for the legal pages, add a
   `public/_redirects` file containing:

   ```
   /*    /index.html   200
   ```

   (Vercel handles this automatically for Vite SPAs; Netlify needs the file above.)

## 5. The consultation form (FormSubmit)

The Contact section submits to:

```
https://formsubmit.co/rashidmansoor258@gmail.com
```

with hidden fields `_subject` ("New TRENVO Consultation Request") and `_template` ("table").

**Important:** FormSubmit sends a one-time confirmation/activation email to
`rashidmansoor258@gmail.com` the first time the form is submitted from your live domain. Open
that email and click the activation link, or future submissions won't be delivered. After
activation, every subsequent submission is emailed automatically — no backend server needed.

If you outgrow FormSubmit's free tier or want more control (spam filtering, CRM integration,
autoresponders), swap the `fetch` call in `src/components/Contact.jsx` for your preferred form
API and update `formEndpoint` in `src/data/config.js`.

## 6. What to replace before launch

| Item | Location | Notes |
|---|---|---|
| Domain | `src/data/config.js` → `domain`, and `index.html` canonical/OG tags | Replace `https://www.trenvo.co` with your live domain |
| Social share image | `index.html` `og:image` / `twitter:image` | Add a real 1200×630 image at `/public/og-image.jpg` |
| Stock images | `Hero.jsx`, `About.jsx`, `Solutions.jsx` | Unsplash URLs used are licensed for free commercial use; swap for your own brand photography if preferred |
| Verified statistics | `src/data/config.js` → `verifiedStats` | Only add real, sourced figures here — `WhyChoose.jsx` will automatically use them once populated |
| Testimonials | `src/data/config.js` → `testimonials`, `SHOW_TESTIMONIALS` | Only enable with genuine, permissioned client quotes |
| Legal page dates/details | `src/pages/PrivacyPolicy.jsx`, `TermsOfService.jsx`, `EarningsDisclaimer.jsx` | Starter text only — have a professional review before publishing |
| Contact details | `src/data/config.js` | Update email, phone, and WhatsApp link if they ever change |

## 7. Responsiveness self-check

Verified across breakpoints during build:

- **Mobile (< 640px):** single-column stacking throughout, hamburger nav with animated
  slide-down menu, form fields full-width, floating WhatsApp/back-to-top buttons sized for
  touch targets.
- **Tablet (640–1024px):** two-column grids for value cards, services, and solutions; header
  switches to the desktop nav at the `lg` breakpoint (1024px).
- **Desktop (1024px+):** full multi-column layouts, five-step process timeline shown
  horizontally, hero two-column split with floating dashboard chips.

## 8. Accessibility & performance notes

- Semantic landmarks (`header`, `nav`, `main`, `footer`), heading hierarchy, and
  `aria-expanded`/`aria-controls` on the FAQ accordion and mobile menu.
- Visible focus rings on all interactive elements (see `index.css`).
- All images include descriptive `alt` text; below-the-fold images are `loading="lazy"`.
- Animations respect `prefers-reduced-motion`.
- No invented statistics, fabricated testimonials, or unverifiable claims are included
  anywhere in the copy — see the "What to replace before launch" table above.
