# Juntoz Digital Marketing Agency — Project Context & Architectural Baseline

> **Persistent Reference Document**  
> Generated: October 25, 2026 | Antigravity One-Pass Project Audit  
> Location: `c:/Users/SHIVAM/Desktop/Juntoz/PROJECT_CONTEXT.md`  
> Git Status: Branch `main` (Clean working tree)

---

## 1. Project Overview & Commercial Purpose

- **Project Name:** Juntoz (`juntoz`)
- **Official Domain:** [https://juntoz.in](https://juntoz.in)
- **Primary Value Proposition:** Premium digital marketing, full-funnel acquisition, and branding agency designed specifically for high-ticket beauty professionals, elite bridal makeup artists (MUAs), cosmetic academies, salons, and aesthetic clinics across India, with expanding vertical playbooks across 36 industry sectors.
- **Corporate Headquarters:** Office No. 5, 1st Floor, Dev Shristi Tower, 60 Feet Rd, Bhayandar West, Mira Bhayandar, Maharashtra 401101, India.
- **Operating Production Hubs:** On-location 4K iPhone and DSLR production crews physically based in **Mumbai** and **Delhi NCR**, providing pan-India and destination wedding coverage.
- **Leadership Team:**
  - **Sujal Mehta:** Founder & CEO (`Sujal.Mehta@juntoz.in`, WhatsApp: `+91 90040 01800`). EXTC Engineering graduate from SPIT Andheri; 9 years corporate experience (5 years at Tata Consultancy Services, 4 years at Nokia); founded Juntoz in 2021.
  - **Saloni Mehta:** Co-Founder & Head of Operations & Client Success (WhatsApp: `+91 87679 57561`). B.Com graduate with 7 years corporate operations experience (4 years at Showell Home Appliances, 3 years at Allied Safety India Pvt. Ltd.).

---

## 2. Verified Technology Stack

| Layer | Technology | Version | Purpose / Evidence |
| :--- | :--- | :--- | :--- |
| **Runtime & Core** | React | `^19.2.5` | StrictMode enabled, React 19 concurrent features |
| **DOM Renderer** | React DOM | `^19.2.5` | Entry hydration via `createRoot` |
| **Bundler & Tooling** | Vite | `^8.0.10` | ESM build, `@vitejs/plugin-react: ^6.0.1` |
| **Client Routing** | React Router DOM | `^7.14.2` | BrowserRouter, lazy loading, route aliases |
| **Styling Engine** | Tailwind CSS v4 | `^4.2.4` | `@tailwindcss/vite: ^4.2.4`, `@theme` in `index.css` |
| **PostCSS Plugin** | Autoprefixer | `^10.5.0` | Cross-browser CSS prefixing |
| **Motion & Animation** | Framer Motion | `^12.40.0` | Declarative layout & component transitions |
| **3D Rendering** | Three.js / R3F | `^0.184.0` / `^9.6.1` | `@react-three/drei: ^10.7.7` for 3D card/visuals |
| **SEO Head Manager** | React Helmet Async | `^3.0.0` | Per-page meta tags, canonicals, OpenGraph |
| **Telemetry / RUM** | Vercel Speed Insights| `^2.0.0` | Real-user performance tracking (`<SpeedInsights />`) |
| **Linter / Quality** | ESLint | `^10.2.1` | Flat config `eslint.config.js`, React hooks plugins |
| **Hosting Platform** | Vercel | N/A | SPA rewrites via `vercel.json` |

---

## 3. Architecture & Directory Blueprint

```
c:/Users/SHIVAM/Desktop/Juntoz/
├── .env                       # Environment variables (VITE_MAPTILER_KEY)
├── .env.example               # Template environment configuration
├── .gitignore                 # Git ignore rules (node_modules, dist, .env)
├── app/                       # Legacy Next.js route metadata
│   └── sitemap.ts             # Orphaned/reference Next.js sitemap declaration
├── dist/                      # Compiled production distribution bundle
├── eslint.config.js           # Flat ESLint configuration
├── index.html                 # HTML5 template, CDN fonts preconnect & preload
├── package.json               # Project manifest, dependencies, npm scripts
├── public/                    # Static assets served at root
│   ├── favicon.svg            # Agency favicon SVG
│   ├── google9722c89122f79e8e.html # Google Search Console site verification
│   ├── llms.txt               # LLM scraper documentation & agency context
│   ├── logo.png               # High-res agency logo PNG
│   ├── robots.txt             # Search engine crawling directives
│   ├── sitemap.xml            # Production XML sitemap (static fallback)
│   └── reels/                 # Sample video reel stills
├── src/
│   ├── App.jsx                # Global router, lazy route declarations, shell
│   ├── main.jsx               # React DOM bootstrap, global scroll observer, animation triggers
│   ├── index.css              # Design tokens, @theme, typography, responsive rules
│   ├── animations.js          # Custom 4-wave GPU animation controller
│   ├── assets/                # Internal images and sample media files
│   ├── components/            # Reusable and page-specific UI blocks (30 components)
│   ├── data/                  # Structured data models (Services, Clients, Case Studies, Industries)
│   ├── hooks/                 # Custom React hooks (useCountUp.js)
│   └── pages/                 # Route page components (17 pages)
├── vercel.json                # Vercel deployment build & rewrite settings
└── vite.config.js             # Vite configuration with Rollup chunk splitting
```

---

## 4. Key Files & Architectural Responsibilities

| File Path | Role & Key Responsibilities |
| :--- | :--- |
| `index.html` | Preconnects to Fontshare & Google Fonts (`Satoshi`, `Playfair Display`, `Bricolage Grotesque`, `Plus Jakarta Sans`, `Inter`, `Caveat`). Preloads LCP image `/Restaurants.webp`. Sets OpenGraph and Twitter cards. |
| `src/main.jsx` | Mounts React root in `StrictMode`. Configures `history.scrollRestoration = 'manual'` to prevent mid-page jumps. Sets up the centralized, single-instance `window.observeForReveal` IntersectionObserver (`threshold: 0.05, rootMargin: '0px 0px -20px 0px'`). Initializes `initAnimations()` after a 200ms delay. |
| `src/App.jsx` | Encapsulates `<BrowserRouter>`, `<ScrollToTop>` (with re-scan for new `[data-reveal]` elements), `<Navbar>`, `<main>` wrapped in `<ErrorBoundary>` and `<Suspense>`, `<Footer>`, and `<WhatsAppButton>`. Attaches `vite:preloadError` auto-reload handler. |
| `src/index.css` | Implements Tailwind v4 `@theme` tokens, base typography, minimum legibility overrides (minimum 12px for tiny px utilities), fluid editorial type scales (`.type-hero-h1`, `.type-section-h2`), button classes (`.btn-primary-dark`, `.btn-primary-accent`, `.btn-secondary`), 3D tilt utility, and mobile performance kills (stripping expensive `filter: blur` and `box-shadow` on mobile). |
| `src/animations.js` | 4-wave progressive animation controller respecting `prefers-reduced-motion`: Wave 1 (immediate: marquee, navbar transitions); Wave 2 (400ms: hero mouse parallax, 3D card tilt, magnetic buttons); Wave 3 (900ms: scroll reveal candidate tagging, image parallax); Wave 4 (2000ms: catch-all for slow devices). Uses MutationObservers to handle lazy-loaded elements. |
| `vite.config.js` | Configures React and Tailwind plugins, plus manual Rollup chunk splitting (`vendor-framer-motion`, `vendor-router`, `vendor-react`). |
| `vercel.json` | Configures `outputDirectory: "dist"` and rewrites `/(.*)` to `/index.html` for client-side SPA routing. |

---

## 5. Complete Page & Route Inventory

| Route Path | Component | Loading | Purpose / Core Content |
| :--- | :--- | :--- | :--- |
| `/` | `Home.jsx` | Eager | Homepage with Hero, ServicesGrid, AboutIntro, WhatWeDo, TrustExecution, HomeGMBTeaser, TrustExecutionSection, CaseStudiesShowcase, CTASection |
| `/services` | `ServicesPage.jsx` | Lazy | Comprehensive breakdown of all 7 agency services with deliverables, ideal client profiles, and retainers |
| `/services/:serviceSlug` | `ServiceDetailPage.jsx` | Lazy | Detailed deep-dive for any specific service with stats, 4-step pillars, interactive checklist, and FAQs |
| `/services/instagram-management` | `ServiceDetailPage.jsx` | Lazy | Direct route alias for Instagram management service |
| `/services/meta-google-ads` | `ServiceDetailPage.jsx` | Lazy | Direct route alias for Meta & Google Ads service |
| `/services/seo` | `ServiceDetailPage.jsx` | Lazy | Direct route alias for Search Engine Optimization service |
| `/services/gmb` | `ServiceDetailPage.jsx` | Lazy | Direct route alias for Google My Business service |
| `/services/mobile-content-shoot` | `ServiceDetailPage.jsx` | Lazy | Direct route alias for Delhi/Mumbai on-location shoots |
| `/services/ai-videos` | `ServiceDetailPage.jsx` | Lazy | Direct route alias for AI generative video service |
| `/services/websites` | `ServiceDetailPage.jsx` | Lazy | Direct route alias for conversion websites service |
| `/instagram-management` | `ServiceDetailPage.jsx` | Lazy | Root-level vanity alias |
| `/meta-google-ads` | `ServiceDetailPage.jsx` | Lazy | Root-level vanity alias |
| `/seo` | `ServiceDetailPage.jsx` | Lazy | Root-level vanity alias |
| `/mobile-content-shoot` | `ServiceDetailPage.jsx` | Lazy | Root-level vanity alias |
| `/ai-videos` | `ServiceDetailPage.jsx` | Lazy | Root-level vanity alias |
| `/websites` | `ServiceDetailPage.jsx` | Lazy | Root-level vanity alias |
| `/case-studies`, `/case-study` | `CaseStudiesPage.jsx` | Lazy | Showcase of client growth metrics, before/after stories, and proof |
| `/case-study/:slug` | `CaseStudyPage.jsx` | Lazy | Dedicated single case study breakdown with deep statistics |
| `/work` | `WorkPage.jsx` | Lazy | Category-filtered showcase (`Paid Acquisition`, `Local Search & GMB`, `Brand & Creative`, `Beauty Verticals`) |
| `/work/:slug` | `CaseStudyPage.jsx` | Lazy | Slug route alias pointing to `CaseStudyPage` |
| `/results` | `ResultsPage.jsx` | Lazy | Metrics, client reviews, and verified Google business card |
| `/about` | `AboutPage.jsx` | Lazy | Story of Juntoz, team teasers, simple about, and Google card |
| `/founder` | `FounderPage.jsx` | Lazy | Full profile, corporate background (TCS/Nokia), and vision of Sujal Mehta |
| `/co-founder` | `CoFounderPage.jsx` | Lazy | Profile, background (Showell/Allied Safety), and operations role of Saloni Mehta |
| `/for-makeup-artists` | `ForMakeupArtistsPage.jsx` | Lazy | Specialized MUA funnel page (Bridal season ads, off-season cashflow, reels, WhatsApp qualification) |
| `/for-salons` | `ForSalonsPage.jsx` | Lazy | Specialized salon page (Local 3-Pack, weekday dead zone campaigns, retention loyalty) |
| `/specialties` | `SpecialtiesPage.jsx` | Lazy | Dual-tab directory for beauty specialties and general industries |
| `/industries` | `Industries.jsx` | Lazy | 36 industry sector playbooks with search and category filters (`consumer`, `local`, `trust-led`, `b2b`) |
| `/google-business-profile`, `/gmb` | `GoogleBusinessProfilePage.jsx` | Lazy | GMB Local 3-Pack strategy guide with interactive 6-point Health Score calculator |
| `/careers` | `CareersPage.jsx` | Lazy | We're Hiring page with 10 role categories, vibe culture, and 8-step application questionnaire |
| `/contact` | `ContactPage.jsx` | Lazy | Direct WhatsApp lead intake form, office details, business hours IST checker, and Google Maps iframe |
| `/blog`, `/blog/:slug` | `Navigate` (Redirect) | N/A | Redirects permanently to `/case-studies` |
| `*` | `NotFoundPage.jsx` | Lazy | 404 fallback with return to homepage action |

---

## 6. Component Hierarchy & Dependencies

### Global Shell Components
- **`Navbar.jsx`**:
  - Sticky glass header with scroll-aware hide/shrink transition.
  - Multi-column desktop mega menu populated dynamically from `src/data/services.js` (`SERVICES_MEGA_MENU`).
  - Dropdown for Specialties (`/specialties`, `/industries`, `/for-makeup-artists`, `/for-salons`).
  - Mobile full-screen slide-in navigation drawer with accordion expanders.
  - Direct telephone (`tel:+919004001800`) and WhatsApp booking CTA triggers.
- **`Footer.jsx`**:
  - Dark obsidian background (`#111111`) with top border `white/12`.
  - Direct communication cards (Email: `Sujal.Mehta@juntoz.in`, Phone: `+91 90040 01800`).
  - Curated navigation links organized by Services, Specialties, and Company.
  - Social handles linked to Instagram (`@_juntoz`) and LinkedIn.
- **`WhatsAppButton.jsx`**:
  - Fixed floating action button (FAB) at bottom-right corner (`z-index: 9999`).
  - Custom CSS pulsing ring animation (`wa-pulse`), zero external JS dependencies.
  - Pre-filled WhatsApp consultation message trigger.
- **`ScrollReveal.jsx`**:
  - Thin polymorphic wrapper component (`div`, `section`, etc.) that hooks elements into `window.observeForReveal`.
  - Supports `data-reveal` types: `up`, `left`, `right`, `fade`, `zoom`, `flip-3d`, `zoom-cinematic`, `slide-spin`.
- **`PageMeta.jsx`**:
  - Uses `react-helmet-async` to emit canonical links, OpenGraph, Twitter tags, and site title prefixes.
- **`ErrorBoundary.jsx`**:
  - Class-based React error boundary catching lazy chunk load failures and rendering a clean reload fallback.

### Domain & Content Components
- **`Hero.jsx`**:
  - Dual-column split layout.
  - Custom SVG full-funnel visual (Awareness → Consideration → Conversion → Advocacy) with animated orbital rings and glassmorphic HUD metric overlay.
  - 4-column client telemetry proof bar (`₹3Cr+ Revenue Generated`, `Top 3 Google Maps Dominance`, `200+ Projects Scaled`, `5.0+ ★ Client Satisfaction`).
- **`MapSection.jsx`**:
  - Real-time Indian Standard Time (IST) operational status checker (calculates UTC + 5:30; shows `OPEN NOW` Mon–Sat 10:00 AM – 7:00 PM IST; `CLOSED` on Sundays and evenings).
  - Responsive Google Maps embed iframe and corporate address display.
- **`BusinessCard.jsx`**:
  - Interactive agency card with rotating 5-star Google reviews (auto-advances every 4.5s) and verified Google Maps profile link.
- **`IndustryFinder.jsx`**:
  - Search input with real-time text query and category filtering across all 36 sectors.

---

## 7. Complete Design System & Visual Identity

### A. Color Palette & Exact Design Tokens
All core color variables are declared in `src/index.css` under both `@theme` (Tailwind v4 engine) and `:root`.

| Token Name | Hex Value | Usage Scope | Semantic Meaning |
| :--- | :--- | :--- | :--- |
| `--color-background` | `#F7F6F2` | Global canvas / body | Warm alabaster / ivory background |
| `--color-surface` | `#FFFFFF` | Cards, modals, containers | Clean white surface |
| `--color-foreground` | `#111111` | Headings, primary text | Obsidian black, maximum contrast |
| `--color-dark` | `#111111` | Buttons, dark sections | Deep neutral black |
| `--color-dark-secondary` | `#1A1A1A` | Footer cards, dark cards | Secondary dark surface |
| `--color-muted` | `#5F5F5A` (Theme) / `#3A3A35` (Root) | Subtitles, helper text | Balanced readable neutral gray |
| `--color-border` | `#DEDED7` | Dividers, card strokes | Warm neutral boundary |
| `--color-accent` | `#5D2E85` | Brand primary accent | Deep imperial royal purple |
| `--color-accent-hover` | `#4C266D` | Hover states on accent | Darkened interactive purple |
| `--color-accent-soft` | `#F1E7F9` | Badges, tags, highlights | Soft lilac tint |
| `--color-success` | `#287A55` | Verified badges, open badge| Deep forest emerald |
| `--color-warning` | `#B7791F` | Alert badges | Warm ochre amber |
| WhatsApp Brand | `#25D366` | Floating WhatsApp widget | Official WhatsApp brand green |

### B. Typography Hierarchy
- **Heading Font Family:** `"Playfair Display", Georgia, serif`
- **Body Font Family:** `"Plus Jakarta Sans", "Inter", sans-serif`
- **Display Accent:** `"Playfair Display"`
- **Handwritten / Script Accent:** `"Caveat", cursive`
- **Modern Display Alternative:** `"Bricolage Grotesque", sans-serif`
- **Fluid Type Scale Utilities:**
  - `.type-hero-h1`: `font-size: clamp(2.5rem, 6vw + 1rem, 5.5rem)`, weight `800`, line-height `1.02`, letter-spacing `-0.03em`.
  - `.type-section-h2`: `font-size: clamp(2rem, 3.5vw + 1rem, 3.25rem)`, weight `800`, line-height `1.1`, letter-spacing `-0.025em`.
  - `.type-card-h3`: `font-size: clamp(1.25rem, 2vw, 1.625rem)`, weight `700`, line-height `1.25`.
  - `.type-body`: `font-size: clamp(1rem, 0.5vw + 0.875rem, 1.125rem)`, weight `500`, line-height `1.65`.
  - `.type-label-eyebrow`: `font-size: 0.8125rem`, weight `800`, uppercase, letter-spacing `0.15em`, color `#5D2E85`.
  - `.type-stat-number`: `font-size: clamp(2.75rem, 5vw, 4.5rem)`, weight `800`, line-height `1`.

### C. Layout, Surfaces, Elevation & Shadows
- **Max Container Widths:** Default `max-w-7xl` (`1280px`), Hero spans up to `max-w-[1680px]` on 2XL viewports.
- **Card Styling:**
  - `.agency-card`: Background `#FFFFFF`, border `1px solid #DEDED7`, border-radius `16px`, subtle box shadow. On hover: translates `-2px` Y with border `#111111`.
  - `.agency-card-dark`: Background `#1A1A1A`, border `1px solid rgba(255,255,255,0.12)`, border-radius `16px`.
- **Shadow Tokens:**
  - `.shadow-subtle`: `0 4px 20px -2px rgba(17, 17, 17, 0.05)`
  - `.shadow-card`: `0 10px 30px -4px rgba(17, 17, 17, 0.06)`
  - `.shadow-float`: `0 20px 40px -6px rgba(17, 17, 17, 0.08)`
- **Button Tokens:**
  - `.btn-primary-dark`: Pill shape (`rounded-full`), `#111111` background, `#FFFFFF` text. Hover: `#5D2E85`.
  - `.btn-primary-accent`: Pill shape (`rounded-full`), `#5D2E85` background, `#FFFFFF` text. Hover: `#4C266D`.
  - `.btn-secondary`: Pill shape, transparent background with `1px solid #111111`. Hover: `#111111` background with white text.

### D. Critical Typography & Mobile Overrides
- **Sub-12px Font Enforcement:** To guarantee WCAG legibility, `index.css` overrides sub-12px Tailwind utilities:
  - `.text-[9px]`, `.text-[9.5px]`, `.text-[10px]` are forced to `font-size: 12px !important`.
  - `.text-[11px]` is forced to `font-size: 13px !important`.
- **Lighthouse LCP Protection:** `#hero h1` and direct hero children have `opacity: 1 !important; transform: none !important;` to ensure Google Lighthouse measures an immediate First Contentful Paint without waiting on scroll reveals.
- **Mobile Hardware Acceleration Rules (`max-width: 767px`):**
  - Decorative background blurs (`filter: blur()`) are disabled.
  - Large card box shadows are stripped in favor of clean 1px border lines.
  - Spinning and floating keyframe animations are suppressed to conserve CPU/battery.

---

## 8. Data Layer & Business Logic

### Core Services (`src/data/services.js` & `serviceDetails.js`)
1. **Instagram Management (`/services/instagram-management`):** Grid curation, hook copywriting, reel pacing, story sequences, inbound DM triage.
2. **Meta Ads & Google Ads (`/services/meta-google-ads`):** Commercial intent search bidding, dynamic creative testing, retargeting funnels, ROAS optimization.
3. **SEO (`/services/seo`):** Keyword mapping, technical Core Web Vitals audits, topic clusters, schema markup, authority backlinks.
4. **GMB Management (`/services/gmb`):** Local 3-Pack Maps optimization, geo-tagged photography cadence, review generation funnels, citation consistency.
5. **Photo & Content Shoot (`/services/mobile-content-shoot`):** Dual-capture setup (DSLR camera stills for website/portfolios + 4K iPhone transformation reels for Instagram) conducted on-location in Delhi NCR and Mumbai.
6. **AI Videos (`/services/ai-videos`):** Generative visual storytelling, AI avatars, multilingual voiceovers (Hindi/English), rapid video ad hook variations.
7. **Websites (`/services/websites`):** Mobile-first lightweight portfolios, 95+ PageSpeed scores, zero lead leakage, 1-tap WhatsApp consultation triggers.

### Client Case Studies (`src/data/caseStudies.js`)
- `luxury-bridal-season-scaling` (`Amara Luxe Bridal Studio`): 3.1X bridal inquiries in 60 days.
- `pro-makeup-academy-launch` (`Artistry Academy of Makeup & Hair`): 100% seats sold out in 14 days.
- `salon-chain-local-maps-scale` (`Aura Luxury Salon & Aesthetic Clinics`): +420% direct calls & #1 Google Maps 3-Pack rank.
- `d2c-beauty-performance-ads` (`GlowRitual D2C Skincare`): 4.4X blended ROAS at ₹12L monthly scale.
- `destination-wedding-luxury-funnel` (`Royal Heritage Bridal Artistry`): ₹24L+ destination contracts closed.
- `editorial-celebrity-brand-repositioning` (`Verve Editorial & Celebrity MUA`): +75% average day rate increase.

### Data Integrity & Verification Flags (`src/data/clients.js`)
- `COMPANY_STATS = { yearsActive: 5, clientsScaled: '200+', googleRating: '5.0 ★', retentionRate: '94%', verifiedHQ: 'Mumbai, MH, India' }`
- Client testimonial profiles in `clients.js` that await signed client publicity releases are flagged with:
  - `isPlaceholder: true`
  - Explicit strings such as `[NEEDS REAL CONTENT]` and `[PENDING REAL TESTIMONIALS]`.

---

## 9. Backend Communication, Forms & External Integrations

- **Serverless Direct WhatsApp Lead Routing:**
  - The agency operates with **zero server-side database dependencies**.
  - All contact and strategy inquiry forms (`ContactPage.jsx`) validate required fields (10-digit phone, business name) on the client side, serialize the data into formatted text, and redirect the user directly to the official agency WhatsApp line (`+91 90040 01800` via `https://wa.me/919004001800?text=...`).
- **Google Maps Integration:**
  - Embedded via standard HTTPS responsive `iframe` pointing to the verified Google Maps Business Profile location in Bhayandar West.
  - No paid Google Maps JavaScript API consumption required.
- **Unused Environment Variables:**
  - `VITE_MAPTILER_KEY` is present in `.env` and `.env.example`, but is **not imported or referenced** anywhere in the active source tree.
- **SEO & Search Console:**
  - Verified via `/public/google9722c89122f79e8e.html`.
  - Static XML sitemap available at `/public/sitemap.xml`.
  - Standalone LLM scraper manifest provided at `/public/llms.txt`.
- **Blog System Status:**
  - Routes `/blog` and `/blog/:slug` redirect directly to `/case-studies` via React Router `<Navigate />`. No active blog engine is implemented.

---

## 10. Baseline Validation & Code Quality Status

### Build Verification (`npm run build`)
- **Status:** **PASS** (Exit Code 0).
- **Tooling:** Vite v8.0.10.
- **Performance:** 487 modules transformed in 1.30s. Clean production bundle output in `dist/`.

### Lint Verification (`npm run lint`)
- **Status:** **PRE-EXISTING FAIL** (Exit Code 1).
- **Linter:** ESLint v10.2.1.
- **Detailed Findings:**
  1. `src/components/CTASection.jsx`: Line 16:10 — `'visible' is assigned a value but never used` (`no-unused-vars`).
  2. `src/components/TeamMemberProfile.jsx`:
     - Line 1:10 — `'useRef' is defined but never used` (`no-unused-vars`).
     - Line 1:18 — `'useEffect' is defined but never used` (`no-unused-vars`).
     - Line 45:36 — `'delay' is defined but never used` (`no-unused-vars`).
     - Line 78:3 — `'sectionLabel' is assigned a value but never used` (`no-unused-vars`).
  3. `src/pages/SpecialtiesPage.jsx`: Line 100:7 — `Calling setState synchronously within an effect can trigger cascading renders` (`react-hooks/set-state-in-effect`).
- **Policy Directive:** These 6 warnings/errors existed prior to this audit. Per non-negotiable codebase protection rules, they have been documented and will only be resolved when explicitly requested.

### Git Status
- **Branch:** `main` (Synchronized with `origin/main`).
- **Working Tree:** Clean (zero uncommitted edits before creating this context document).

---

## 11. High-Risk Files & Regression Hazards

1. **`src/index.css`**:
   - Contains high-specificity CSS rules, LCP bypass directives (`#hero h1`), and min-font overrides. Adding ad-hoc utility classes or changing typography definitions will trigger unintended cascading shifts across all 17 pages.
2. **`src/main.jsx`**:
   - Hosts the site-wide `IntersectionObserver` instance on `window.observeForReveal`. Modifying this observer or unobserve handlers can break scroll-triggered fade/zoom reveals across all subpages.
3. **`src/animations.js`**:
   - Manages active event listeners and DOM `MutationObservers` for tilt and magnetic hover. Any memory leak or unthrottled mouse listener here will degrade mobile scroll frame rates.
4. **`src/App.jsx`**:
   - Houses the route routing table and chunk error boundary. Modifying chunk lazy loading without error boundaries can lead to blank white screens when client browsers encounter stale cached chunks after a deployment.
5. **`src/data/services.js` & `serviceDetails.js`**:
   - Tightly coupled with the Navbar mega menu, the footer service directory, and the dynamic `ServiceDetailPage.jsx` route. Any missing key in `SERVICE_DETAILS` will cause `/services/:serviceSlug` to fail or render incomplete data.

---

## 12. Safe Implementation Guidelines for Future Work

When building new features, modifying pages, or creating components for Juntoz:

1. **Strictly Preserve the Visual Identity:**
   - Always use the established palette: `#F7F6F2` canvas, `#FFFFFF` surface, `#111111` obsidian foreground, and `#5D2E85` imperial royal purple accent.
   - Never replace the editorial typography (`Playfair Display` + `Plus Jakarta Sans`) with default sans-serif or generic UI styles.
2. **Honor the Mobile-First Performance Guardrails:**
   - Maintain the sub-12px font overrides and do not introduce unoptimized `filter: blur()` or heavy drop shadows on mobile views.
   - For all new animated components, register them with `[data-reveal]` and use `will-change: transform` conservatively.
3. **Follow the Established Component Architecture:**
   - Every new page must include `<PageMeta />` with canonical URLs, descriptive titles, and OpenGraph metadata.
   - Use `ScrollReveal` for scroll animations rather than creating ad-hoc intersection observers.
   - Route inquiries to the established WhatsApp funnel format (`https://wa.me/919004001800?text=...`) rather than introducing complex backend database setups unless explicitly asked.
4. **Inspect Before Changing:**
   - Check this document (`PROJECT_CONTEXT.md`) first. Only inspect the specific target component and its immediate data file.
   - Do not perform redundant full-repository scans.

---

## 13. Recent Feature Updates

- **Careers Page Implementation (`/careers`):**
  - Added dedicated hiring portal with multi-step application form, position filtering across 10 open roles, and secure applicant submission API (`/api/apply`).
  - **Culture / Philosophy Section Redesign (`src/pages/CareersPage.jsx` & `src/data/careers.js`):**
    - Redesigned the 4 culture cards ("GOOD PEOPLE. BIG IDEAS. ZERO BORING ENERGY.") with custom squircle icon containers, pulsing high-contrast obsidian highlight badges, scannable micro-tag clouds, ambient radial illumination, and purposeful outcome footers with animated hover indicators.
  - **Professional Hiring & Engagement Overhaul (`src/pages/CareersPage.jsx`):**
    - Added live hiring pulse badge dock (`WE ARE ACTIVELY HIRING · 10 OPEN ROLES`) and authoritative `WE'RE HIRING.` hero typography with hand-drawn SVG underline.
    - Integrated a 4-metric **Recruitment Snapshot Dashboard Bar** (Active Positions, 48h Review Guarantee, 100% Ownership Culture, Mumbai Studio Hub).
    - Upgraded Open Positions into a structured job board with dynamic category count badges (`All (10)`, `Creative (5)`, `Paid (2)`, `SEO (1)`, `Internships (2)`), active screening tags, and interactive 1-click role selection with auto-fill notification banner.
    - Added a dedicated **Agency Advantages & Perks Showcase** (Direct Founder Mentorship, 4K Live Production Sets, Real Ad Budgets, Fast-Track Appraisals).
    - Converted the Application Journey into a connected timeline stepper with explicit turnaround guarantees.
- **Homepage Transparent Benchmark & Comparison Matrix (`src/components/ComparisonMatrix.jsx`):**
  - Integrated a dedicated side-by-side comparison section ("Why High-Performing Brands Choose Juntoz Over The Alternatives") directly into the homepage (`src/pages/Home.jsx`).
  - Evaluates 6 core dimensions (Team & Leadership, Execution Scope, Industry Specialism, Commercial Terms, Data & Asset Control, Speed to Lead & Telemetry) across Juntoz, Traditional Agencies, In-House Hires, and Solo Freelancers.
  - Implements Juntoz's signature luxury editorial palette (`#F7F6F2`, `#5D2E85`, `#111111`), highlighted Juntoz column with badge accents, desktop table with hover highlights, an interactive mobile alternative switcher (`Traditional Agency | In-House Hire | Freelancer`), and a high-converting bottom strategy consultation banner.

---

## 11. Client Onboarding Concierge (`/onboarding`)

- **Route:** `/onboarding` (Lazy-loaded via `src/pages/OnboardingPage.jsx`)
- **Backend Handler:** `POST /api/onboarding` via [api/onboarding.js](file:///c:/Users/SHIVAM/Desktop/Juntoz/api/onboarding.js) (Vercel Serverless Function & Node.js handler).
- **Core Architecture:**
  - **Schema-Driven Engine:** Managed through typed configs in `src/features/onboarding/config/flows.ts` and validated via `zod` schemas in `src/features/onboarding/schemas/onboardingSchema.ts`.
  - **3 Supported Dedicated Engines:**
    1. **Google Ads Acquisition Engine:** Target KPIs, budgets, high-intent search keywords (with bulk paste, split & deduplication), service pricing tiers, and Google Ads CID invitation guide.
    2. **Meta & Instagram Performance Funnel:** Booking funnel targets (1-tap WhatsApp, DMs, booking page), demographic tiers, raw 4K video/reels Google Drive asset link, and Meta Business Manager partner ID invite guide.
    3. **Google Merchant Center:** Store registration compliance, policy page links audit (Refund, Shipping, Terms, Privacy), cart platform & SKU sync, and GMC user access guide.
  - **Visual System:** 2-column desktop split (Left sticky concierge HUD with step roadmap & reassurance copy; Right column clean `#FFFFFF` card with hairline borders, 52px inputs, pill chips, and tag lists). Mobile 1-column with 2px purple top progress line and sticky bottom action bar.
  - **Autosave & Persistence:** Debounced `localStorage` persistence per flow via `useOnboardingDraft.ts` with draft resumption and post-submission cleanup.
  - **Security & Privacy:** Strictly zero password fields. Step-by-step partner invitation guides for Google Ads, Meta Business Manager, and Merchant Center. India DPDP Act compliance consent checkbox. Honeypot bot protection and in-memory rate limiting.
  - **Submission & Delivery:** Generates structured HTML and plain-text dossiers with instant Resend dispatch to `Sujal.Mehta@juntoz.in` (configured via `RECIPIENT_EMAIL`). Confirmation screen with 3-step next-steps timeline and 1-tap WhatsApp trigger to `+91 90040 01800`.


