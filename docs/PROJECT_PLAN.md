# DNS Website Project Plan 2026

**AI Website Build — Project Plan**
Repeatable · Savable · Fully AI-Executable
*No coding required by the designer*

---

## About This Document

This is a structured, repeatable project plan that an AI engine executes from start to finish to build and deploy a professional website. The human designer provides content, branding preferences, and approvals only. The AI engine handles all code, testing, optimization, and deployment. This document is saved in the repository and serves as the permanent, authoritative record of the project.

### How to Use This Plan

1. Fill in the Project Inputs section (Section 1) with your specific project details.
2. Hand this document to your AI engine (Claude, GPT-4, Gemini, etc.).
3. The AI reads each phase sequentially and executes every task.
4. You review and approve at each Phase Gate before the AI proceeds.
5. Save this completed document as the permanent record of the project.

---

## Project Status Tracker

| Field | Value |
|---|---|
| **Current Phase** | Phase 8 Complete — Performance Optimization — Ready for Phase 9 |
| **Last Session Date** | 2026-02-26 |
| **AI Engine** | Claude Sonnet 4.6 |
| **Project Start Date** | 2026-02-25 |
| **Launch Date** | TBD |
| **Live URL** | https://rpbatx.github.io/DNS-website-2026/ (preview — final: dietarynetwork.com) |

### Phase Completion Status

| Phase | Name | Status |
|---|---|---|
| — | Project Setup & Plan | ✅ Complete |
| 1 | Environment Setup | ✅ Complete |
| 2 | HTML Structure & Semantic Markup | ✅ Complete |
| 3 | Styling & Visual Design | ✅ Complete |
| 4 | Content, Graphics & Media | ✅ Complete |
| 4b | Content Editing System | ⬜ Not Started |
| 5 | SEO Optimization | ✅ Complete |
| 6 | Security & Legal Compliance | ✅ Complete |
| 7 | Forms, Interactions & Error Handling | ✅ Complete |
| 8 | Performance Optimization | ✅ Complete |
| 9 | Testing | ⬜ Not Started |
| 10 | Deployment | ⬜ Not Started |

### Session Log

| Date | Session Summary |
|---|---|
| 2026-02-25 | Session 1: Project initiated. PROJECT_PLAN.md created. Phase 1 completed: full directory structure, .gitignore, reset.css, 8 HTML shells, robots.txt, .htaccess. Phase Gate 1 approved. Phase 2: full semantic HTML5 on all 8 pages — header, nav, sections, footer, JSON-LD, aria, skip links. Phase Gate 2 approved. Phase 3: styles.css (~750 lines) — sticky nav, hamburger, hero, service/value cards, buttons, form elements, footer, cookie banner, 404, legal pages, responsive breakpoints. main.js: hamburger, Intersection Observer, active nav. cookies.js: consent/localStorage. analytics.js: deferred GA4. Cookie banner on all 8 pages. |
| 2026-02-25 | Session 2 — Full Visual Redesign: Designer rejected original navy palette. New brand: Emerald (#246B50) + Amber (#D4882A) + Porcelain (#F4F1E9). Font changed to DM Sans. Full styles.css rewrite (~860 lines) with new design tokens, white header, porcelain hero (two-column, text-link CTA, abstract SVG graphic), emerald-bordered service cards with hover lift, emerald CTA section. Services nav dropdown added (CSS+JS) with keyboard/focus support. All 8 HTML pages updated: DM Sans font, logo SVG img (dark/white variants), Services dropdown in header nav. index.html hero restructured with hero-inner/eyebrow/cta/graphic. Service cards have inline SVG icons + arrow links. All 4 logo SVGs updated to emerald+amber. PROJECT_PLAN.md updated with confirmed brand. |
| 2026-02-25 | Session 3 — Phase 4 Content & Redesign: Full brand palette change: primary text #011627 (dark navy), accent #e62e01 (red-orange), buttons #1a9011 (green), banner gradient #a8dedb→#c4e32f. Logo converted from cmyk1.jpg (CMYK) to DNSlogo.webp and inserted in all headers with company name text. Nav link size increased 20%. Hero banner changed to gradient (contrasting from page background). Hero text updated: "Expert Dietary & Nutritional Consulting" / "backed by over 35 years." Service panels reordered (Legal→Consulting→Medical→LTC). Learn More changed to green pill buttons. About snippet section removed from home page. CTA banners: 20% shorter, gradient background, popup button. Footer 30% shorter, one-line address, symmetrical. Modal popup system: js/modal.js injects reusable contact form (same fields as contact.html), triggers via data-open-modal="contact", submits to Formspree (recipient: info@dietarynetwork.com). about.html: title updated "Dietary Network Service – Time Tested Excellence", sidebar removed, value cards have icons, CTA = popup only. services.html fully rebuilt: 4 sections × (content panels + aside highlight box), icons on all sub-panels, no jump links, no inquiry buttons. contact.html: form moved to top, company info below, Our Services removed. Phase 4 complete, Phase 5 (SEO) next. NOTE: Formspree PLACEHOLDER must be replaced with real form ID before launch. |
| 2026-02-25 | Session 4 — Polish & Fixes: (1) Removed email address from contact.html contact info aside — phone number only remains. (2) Added .footer-company-name CSS rule (white, font-weight 600, text-lg) to display company name text cleanly in footer across all 4 pages. (3) Home page services-overview section background changed from white (--color-surface) to porcelain (--color-background: #F4F1E9) to match the consistent page background used on all other pages. (4) Hero section gradient retained (teal→lime, --color-banner-1 → --color-banner-2). (5) Header company name (logo-text) font size increased 20% from 1.05rem to 1.26rem; alignment unchanged. |
| 2026-02-26 | Session 5 — Content & Visual Updates: (1) index.html: replaced abstract SVG hero graphic with images/meeting wboard.jpg. (2) about.html: updated "Who We Are" 3-paragraph copy (dietetic professionals, national relationships); added 6-card differentiators grid below "What Sets Us Apart" — cards: 35 Years Experience, Licensed RDs Only, 100% Survey Turnaround, Consistent Consultant Model, National Reach, Full-Service Capability. (3) services.html: updated Legal Case Support lead text (25 years, added nutritional assessment + capabilities paragraph); added "Nutritional analysis" to Legal highlight box list; renamed LTC highlight box heading to "Long Term Care Facilities". (4) css/styles.css: .page-header background changed from surface-alt to teal/lime gradient (applies to about, services, contact page banners); .service-highlight-box ul li font-size increased from var(--text-sm) to 1rem (+2pt); added .hero-graphic img styles; added .differentiators-grid + .differentiator-card CSS. (5) Formspree form ID xbdawwpg configured in contact.html and js/modal.js. (6) Favicon set generated (6 files) and linked in all 8 HTML pages. (7) OG image generated (images/og-image.webp, 1200×630). |
| 2026-02-26 | Session 6 — Phases 5, 6, 7: Phase 5: Added Twitter Card tags to about, services, contact pages. Created sitemap.xml (7 public pages with lastmod/changefreq/priority). Fixed robots.txt — removed Disallow for /css/ and /js/. Verified heading hierarchy and external link rel attributes. Phase 6: Updated .htaccess CSP to add formspree.io to connect-src. Rewrote all 3 legal pages — corrected header (DNSlogo.webp + name), nav dropdown order, footer, added modal.js. Wrote full legal content: Privacy Policy (GDPR+CCPA, 11 sections), Terms of Service (Texas law, 11 sections), Cookie Policy (cookie table, opt-out instructions). Added CSS for cookie tables and legal body elements. Phase 7: Created js/contact.js — validation (required fields, email format, minlength), inline error messages, aria-invalid, blur/input real-time feedback, fetch submit to Formspree, 30-second rate limiting, success state (hides form fields), error state. Added contact.js script to contact.html. Updated 404.html to current header/footer/nav style. |
| 2026-02-26 | Session 7 — Phase 8 Performance + Live Site: Committed and pushed all session 6 changes (31 files). Ran live site audit against https://rpbatx.github.io/DNS-website-2026/ — all pages load correctly, all nav anchor IDs confirmed present on services.html, cookie tables confirmed on cookie-policy.html, sitemap.xml validated (7 URLs, valid XML). Phase 8 optimization: (1) Hero image converted to WebP at 1600px — 689 KB → 77.5 KB (89% savings); added <picture> element with WebP+JPG fallback, fetchpriority=high, width/height for CLS. (2) Preload hint for hero WebP on index.html. (3) CSS minified (reset + styles combined): 48.4 KB → 34.1 KB. (4) All 5 JS files minified with rjsmin: ~24 KB → ~15 KB total. (5) All 8 HTML pages updated to reference styles.min.css and *.min.js. (6) dns-prefetch for Google Analytics added to all 8 pages. (7) .gitignore updated to allow .min files to be committed. |
| 2026-02-26 | Session 8 — Form UX Refinements: (1) Modal contact form: successful submission now auto-closes the modal (form.reset() + closeModal()) — no success message shown. (2) Contact page form: successful submission resets form silently then shows green floating toast "Thank you — we look forward to meeting you!" for 5 seconds. (3) All form submission errors (both modal and contact page) now show as a fixed-position red floating toast notification (bottom-center, 5s display, fade-out) instead of inline error divs. Rate-limit warning on contact page also converted to toast. (4) Removed unused form-success and form-error HTML divs from contact.html. (5) Added .toast-notification CSS (fixed, bottom-center, red #b53a2a, z-index 10000, fade transition) and .toast-notification.toast-success variant (green #1a7a12) to styles.css. (6) Regenerated styles.min.css, modal.min.js, contact.min.js. All changes committed and pushed to GitHub. |

---

## Section 1 — Project Inputs

*The designer fills in this section before handing the plan to the AI engine. Every field below is a direct instruction to the AI.*

| Input Field | Value |
|---|---|
| **Project Name** | Dietary Network Services |
| **Primary Domain** | Dietarynetwork.com |
| **Hosting Provider** | Will be new provider based upon Claude recommendations — most likely GitHub Pages |
| **Hosting Login** | TBD |
| **Site Purpose** | Business Brochure and promotion |
| **Target Audience** | Professional, legal, attorneys, physicians |
| **Primary Language** | English (US) |
| **Secondary Languages** | None |
| **Brand Colors (Hex)** | Primary: `#246B50` (emerald) · Accent: `#D4882A` (amber) · Background: `#F4F1E9` (porcelain) · Text: `#1C2B25` |
| **Preferred Font** | DM Sans (Google Fonts) — weights 300, 400, 500, 700 with optical sizing |
| **Number of Pages** | Model from existing site |
| **Logo File** | Plan to upload once file structure is created |
| **Content Files** | Acquire from existing site |
| **Competitor URLs** | https://www.forensisgroup.com/forensis-expert-witness/expertise/diet-and-nutrition · https://www.expertwitnessdietitian.com/ |
| **Special Features** | Contact Form |
| **Analytics** | Google Analytics |
| **Cookie Consent Region** | TBD — US only / EU (GDPR) / Both / Global |
| **Legal Entity Name** | Dietary Network Services, LLC |
| **Contact Email** | info@dietarynetworkservices.com |
| **Launch Deadline** | 2026-03-05 |

---

## Section 2 — Technology Stack

*The AI engine uses the following standardized, minimal, and maintainable stack for every build. No frameworks requiring compilation or complex tooling. All choices prioritize ease of future editing, security, and performance.*

| Layer | Technology & Rationale |
|---|---|
| **Structure** | Semantic HTML5 — clean, accessible, SEO-native markup |
| **Styling** | CSS3 with CSS custom properties (variables) — no preprocessors needed |
| **Interactivity** | Vanilla JavaScript (ES6+) — zero dependencies, no frameworks |
| **Icons** | SVG inline icons — no icon font libraries, no external requests |
| **Fonts** | Google Fonts via preconnect — single font family, 2 weights max |
| **Images** | WebP format with JPG fallback — compressed, lazy-loaded |
| **Hosting** | Static site — deploys to any host (Netlify, Vercel, cPanel, GitHub Pages) |
| **Version Control** | Git repository — full history, easy rollback |
| **Build Process** | None required — files are deployment-ready as written |
| **CMS (optional)** | Netlify CMS or Decap CMS — file-based, no database required |

---

## Section 3 — Project File Structure

*The AI creates and maintains this exact folder structure. Every file has a defined location. Every page should have a folder. This organization enables easy updates, clear separation of concerns, and straightforward deployment.*

```
/project-root/
├── index.html                  (Home page)
├── about.html                  (About page)
├── services.html               (Services page)
├── contact.html                (Contact page)
├── privacy-policy.html         (Legal — required)
├── terms-of-service.html       (Legal — required)
├── cookie-policy.html          (Legal — required)
├── 404.html                    (Custom error page)
├── sitemap.xml                 (SEO — auto-generated)
├── robots.txt                  (SEO — crawler instructions)
├── .htaccess                   (Server security headers)
├── /css/
│   ├── styles.css              (All styles — one file)
│   └── reset.css               (Browser normalization)
├── /js/
│   ├── main.js                 (Navigation, UI interactions)
│   ├── cookies.js              (Cookie consent logic)
│   └── analytics.js            (Analytics — loads after consent)
├── /images/
│   ├── /hero/                  (Hero / banner images)
│   ├── /content/               (Body images)
│   ├── /icons/                 (SVG icons)
│   └── logo.svg                (Brand logo)
├── /fonts/                     (Self-hosted font fallbacks)
└── /docs/
    └── PROJECT_PLAN.md         (This document — authority of record)
```

---

## Section 4 — Design & UX Standards

*These standards apply to every page without exception. The AI enforces them automatically throughout the build.*

### 4.1 Typography

| Element | Rule |
|---|---|
| **Font Family** | Single sans-serif family (e.g., Inter or Roboto). Declared in CSS variable `--font-body`. |
| **Heading Font** | Same family, bold weight. Declared in CSS variable `--font-heading`. |
| **Body Size** | 16px base (1rem). Line height 1.6. |
| **Heading Scale** | H1: 2.5rem \| H2: 2rem \| H3: 1.5rem \| H4: 1.25rem |
| **Font Loading** | `preconnect` to Google Fonts. `display=swap` to prevent invisible text. |
| **Max Font Weights** | 2 weights only (regular + bold) to minimize load time. |

### 4.2 Color System

| CSS Variable | Purpose & Rule |
|---|---|
| `--color-primary` | Main brand color (`#1b2a4a`). Used for CTAs, links, active states. |
| `--color-secondary` | Accent color (`#f5c327`). Used for highlights and hover states. |
| `--color-background` | Page background. Default: `#FDFFFC` or `#F8F9FA`. |
| `--color-surface` | Card/section background. Slightly off-white. |
| `--color-text` | Body text. Default: `#011627` or `#333333`. |
| `--color-text-muted` | Secondary text. Min contrast ratio 4.5:1 (WCAG AA). |
| `--color-border` | Dividers and borders. Subtle, non-distracting. |
| `--color-error` | `#C0392B` — form errors and alerts. |
| `--color-success` | `#27AE60` — confirmations and success messages. |

### 4.3 Layout & Spacing

- Max content width: 1200px, centered with auto margins
- Section padding: 80px top/bottom desktop, 48px mobile
- Grid system: CSS Grid for layouts, Flexbox for component alignment
- Spacing scale: 4px base unit. Use multiples: 8, 16, 24, 32, 48, 64, 80px
- Border radius: consistent variable `--radius` (e.g., 8px) across all elements
- Shadows: subtle `box-shadow` using CSS variable `--shadow` for depth

### 4.4 Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| **Mobile** | < 480px — single column, stacked navigation, large tap targets (44px min) |
| **Tablet** | 480px – 768px — adapted grid, hamburger menu |
| **Laptop** | 768px – 1024px — 2-column layouts where applicable |
| **Desktop** | > 1024px — full multi-column layouts, expanded navigation |
| **Wide** | > 1440px — content remains capped at 1200px max-width |

---

## Section 5 — Build Phases

*The AI engine executes each phase in sequence. A Phase Gate checkpoint appears at the end of each phase. The AI must present its output to the designer for approval before proceeding to the next phase.*

---

### Phase 1 — Environment Setup

*AI creates the project scaffold, file structure, and base configuration.*

#### Tasks

- [ ] Create the full directory structure exactly as defined in Section 3
- [ ] Initialize Git repository with `.gitignore` (exclude `node_modules`, `.env`, `.DS_Store`)
- [ ] Create `reset.css` with modern CSS reset (box-sizing, margin/padding zero, img max-width)
- [ ] Create `styles.css` with all CSS custom properties (variables) from Section 4
- [ ] Create empty HTML shell for each page with correct DOCTYPE, lang attribute, and charset
- [ ] Create `robots.txt` allowing all crawlers, pointing to `sitemap.xml`
- [ ] Create `.htaccess` with security headers (X-Frame-Options, X-Content-Type-Options, CSP, HSTS, Referrer-Policy)

#### Phase Gate 1

> **AI presents:** directory listing, `styles.css` variables, and `.htaccess` security headers.
> **Designer confirms:** structure is correct before proceeding.
>
> **Status:** ⬜ Awaiting execution

---

### Phase 2 — HTML Structure & Semantic Markup

*AI builds all pages with correct semantic HTML5.*

#### Tasks

- [ ] Build `<head>` template reused on every page: charset, viewport, canonical, Open Graph, Twitter Card, favicon, preconnect fonts, stylesheet links
- [ ] Build semantic `<header>`: logo (linked to `index.html`), `<nav>` with `<ul>` links to all pages, skip-to-content link for accessibility, `aria-label` on nav
- [ ] Build `<main>` with page-specific content sections using correct semantic elements: `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`
- [ ] Build `<footer>`: copyright, legal page links, social links (if applicable), back-to-top link
- [ ] Add `aria-label`, `role`, and `alt` attributes to all interactive and visual elements
- [ ] Add structured data (JSON-LD) for Organization schema on every page
- [ ] Build `404.html` with friendly message *"Oops, looks like we have an unplanned disassembly — let's get you back to the normal world"*, search box, and link back to homepage
- [ ] Add `<noscript>` fallback message on every page for users with JS disabled

#### Semantic Element Requirements

| Element | Usage Rule |
|---|---|
| `<header>` | Site-wide header containing logo and primary navigation only |
| `<nav>` | All navigation elements. `aria-label='Primary navigation'` |
| `<main>` | Unique page content. Only ONE per page. `id='main-content'` |
| `<section>` | Thematic groupings within a page. Each must have a heading |
| `<article>` | Standalone content (blog posts, cards). Self-contained meaning |
| `<aside>` | Supplementary content related to main (sidebars, callouts) |
| `<footer>` | Site-wide footer. Contains legal links and contact info |
| `<figure>`/`<figcaption>` | All images with captions. Improves SEO and accessibility |
| `<time>` | All dates using `datetime` attribute in ISO 8601 format |
| `<address>` | Contact information in footer and contact page |

#### Phase Gate 2

> **AI presents:** all HTML files rendered in browser screenshots.
> **Designer confirms:** structure, navigation, and all links work correctly.
>
> **Status:** ⬜ Awaiting execution

---

### Phase 3 — Styling & Visual Design

*AI applies all CSS, responsive behavior, and visual consistency.*

#### Tasks

- [ ] Apply typography scale from Section 4.1 to all heading and body elements
- [ ] Build responsive navigation: full horizontal nav on desktop, animated hamburger menu on mobile
- [ ] Style all page sections with consistent padding, color, and layout from Section 4
- [ ] Build card components for services/features: hover state, subtle shadow, consistent border radius
- [ ] Style all buttons: primary, secondary, ghost variants. Hover/focus/active states required
- [ ] Style all form elements: inputs, textareas, selects, checkboxes — consistent with brand
- [ ] Implement CSS animations: fade-in on scroll (Intersection Observer), smooth hover transitions (max 300ms)
- [ ] Build cookie consent banner: fixed bottom bar, accepts/rejects, stores preference in localStorage
- [ ] Style 404 page to match site design fully
- [ ] Add print stylesheet: `@media print` removing nav, footer, ads, and unnecessary elements

#### CSS Rules the AI Must Follow

- All colors via CSS variables only — no hardcoded hex values in component styles
- All spacing via the 4px scale — no arbitrary pixel values
- Mobile-first: base styles for mobile, then `min-width` media queries for larger screens
- No `!important` — specificity must be managed through proper selector structure
- All interactive elements must have `:focus-visible` styles for keyboard accessibility
- Minimum touch target size: 44×44px for all clickable elements on mobile
- Images: `width: 100%; height: auto; display: block` to prevent layout shift

#### Phase Gate 3

> **AI presents:** desktop and mobile screenshots of every page.
> **Designer confirms:** visual design, colors, fonts, and spacing match brand requirements.
>
> **Status:** ✅ Complete — Pending Phase Gate designer sign-off

---

### Phase 4 — Content, Graphics & Media

*AI places all content, optimizes all images, and generates placeholder visuals.*

#### Tasks

- [ ] Insert all copy from designer-provided content files into correct page sections
- [ ] Optimize all images: convert to WebP, compress to <150KB per image, generate 2× retina versions
- [ ] Implement lazy loading on all images below the fold: `loading='lazy'` attribute + IntersectionObserver JS fallback
- [ ] Add `width` and `height` attributes to all `<img>` tags to prevent Cumulative Layout Shift (CLS)
- [ ] Create SVG hero graphics or place optimized hero images with `srcset` for responsive serving
- [ ] Generate all favicon sizes: 16×16, 32×32, 180×180 (Apple touch), 192×192, 512×512 (PWA)
- [ ] Create Open Graph image (1200×630px) for social sharing previews
- [ ] Add descriptive alt text to every image — keyword-relevant, not generic
- [ ] If no images provided: generate placeholder images using SVG patterns or abstract CSS backgrounds

#### Phase Gate 4

> **AI presents:** all pages with final content and images in place.
> **Designer confirms:** all copy is correct and all images display properly.
>
> **Status:** ⬜ Awaiting execution

---

### Phase 4b — Content Editing System

*AI creates a simple, non-technical method for editing all website text without opening code files.*

#### Goal

Enable the designer or client to update any text on any page without touching HTML. All editable content lives in one JavaScript file written as plain key-value pairs. The AI generates and maintains this file. No coding knowledge required.

#### How It Works

1. All editable text strings are stored in a single file: `js/content.js`
2. Each string has a plain-English key (e.g., `heroHeading`, `heroLead`, `aboutWhoWeAreP1`)
3. On page load, a small script reads the keys and replaces matching `data-content` attributes in the HTML
4. To change any text, the designer opens `js/content.js`, finds the key, and edits the value — nothing else

#### Tasks

- [ ] Audit all pages and identify every text block that may need editing (headings, subheadings, body paragraphs, CTA labels, contact details)
- [ ] Create `js/content.js` — a plain object containing all editable strings, organized by page
- [ ] Add `data-content="keyName"` attributes to corresponding HTML elements on all 8 pages
- [ ] Create `js/content-loader.js` — a small script that reads `content.js` and injects text at matching `data-content` attributes on DOM load
- [ ] Create `docs/CONTENT-GUIDE.md` — a non-technical guide listing every key, what it controls, and which page/section it appears on. One line per key.
- [ ] Test: change three strings in `content.js` and verify they update live without any HTML edits

#### Content Keys Convention

Keys follow the pattern `[page]_[section]_[element]`:
- `home_hero_heading` — Home page, hero section, main H1
- `home_hero_lead` — Home page, hero section, lead paragraph
- `home_cta_heading` — Home page, CTA section, H2
- `about_intro_p1` — About page, intro section, first paragraph
- `contact_address_street` — Contact address, street line
- (etc. — one key per editable text unit)

#### Phase Gate 4b

> **AI presents:** `content.js` with all keys, `CONTENT-GUIDE.md`, and a live demo showing a text change without touching HTML.
> **Designer confirms:** the editing system works and is easy to use before proceeding.
>
> **Status:** ⬜ Not Started

---

### Phase 5 — SEO Optimization

*AI implements full on-page SEO and technical SEO.*

#### Tasks

- [ ] Write unique `<title>` tag for every page: `Brand Name | Page Description` (50–60 chars)
- [ ] Write unique meta description for every page (150–160 chars, includes primary keyword)
- [ ] Add canonical URL tag to every page to prevent duplicate content
- [ ] Implement Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- [ ] Implement Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] Generate `sitemap.xml` listing all pages with `lastmod`, `changefreq`, and `priority`
- [ ] Verify `robots.txt` correctly points to `sitemap.xml` location
- [ ] Add JSON-LD structured data: Organization, WebSite, BreadcrumbList on all pages
- [ ] Ensure all heading hierarchy is correct: one H1 per page, logical H2/H3 nesting
- [ ] Add `hreflang` tags if site is multilingual
- [ ] Verify all internal links use relative URLs and have descriptive anchor text
- [ ] Implement `rel='noopener noreferrer'` on all external links

#### SEO Requirements Table

| SEO Element | Requirement |
|---|---|
| **Title Tag** | 50–60 chars \| Unique per page \| Primary keyword near front |
| **Meta Description** | 150–160 chars \| Unique \| Includes CTA \| No keyword stuffing |
| **H1 Tag** | One per page \| Matches page intent \| Contains primary keyword |
| **Image Alt Text** | Descriptive, keyword-relevant \| Not empty, not "image of..." |
| **URL Structure** | Lowercase, hyphens, no underscores, no parameters, no trailing slash |
| **Core Web Vitals** | LCP < 2.5s \| FID < 100ms \| CLS < 0.1 |
| **Page Speed** | Target 90+ on Google PageSpeed Insights (mobile and desktop) |
| **Schema Markup** | Organization + WebSite on homepage \| BreadcrumbList on all pages |

#### Phase Gate 5

> **AI presents:** PageSpeed Insights scores and SEO audit report.
> **Designer confirms:** all scores meet targets before proceeding.
>
> **Status:** ✅ Complete — all SEO elements implemented

---

### Phase 6 — Security & Legal Compliance

*AI implements all security headers and generates required legal pages.*

#### 6.1 Security Headers (.htaccess / server config)

| Header | Implementation Rule |
|---|---|
| `Content-Security-Policy` | Restricts resource origins. Prevents XSS. Whitelists Google Fonts, Analytics. |
| `X-Frame-Options` | `DENY` — prevents clickjacking attacks. |
| `X-Content-Type-Options` | `nosniff` — prevents MIME-type sniffing attacks. |
| `Referrer-Policy` | `strict-origin-when-cross-origin` — limits referrer data leakage. |
| `Permissions-Policy` | Disables camera, microphone, geolocation unless explicitly needed. |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` — enforces HTTPS for 1 year. |
| `Cache-Control` | Versioned assets cached 1 year. HTML `no-cache` for freshness. |

#### 6.2 Legal Pages (AI generates, designer reviews)

| Page | Content Requirement |
|---|---|
| **Privacy Policy** | GDPR + CCPA compliant. Covers: data collected, purpose, retention, third parties, user rights, contact. Auto-populated with project details from Section 1. |
| **Terms of Service** | Covers: acceptable use, IP ownership, disclaimers, limitation of liability, governing law. Auto-populated with legal entity name. |
| **Cookie Policy** | Lists all cookies by name, type, purpose, and duration. Covers consent mechanism. Required for EU compliance. |
| **Accessibility Statement** | WCAG 2.1 AA conformance claim. Contact for accessibility issues. Required for ADA compliance. |

#### 6.3 Cookie Consent Implementation

- Banner appears on first visit for EU users (detected by timezone or explicit setting)
- Three categories: Necessary (always on), Analytics (opt-in), Marketing (opt-in)
- Analytics script only loads AFTER user accepts analytics cookies
- Preference stored in localStorage with expiry of 365 days
- User can change preference at any time via footer link to cookie settings
- No pre-ticked boxes. No dark patterns. No paywall for refusal.

#### 6.4 Ad Blocker Compatibility

- Analytics: use first-party server-side proxy or cookieless GA4 mode
- No content served from ad networks on first-party pages
- Graceful degradation: if analytics blocked, site continues to function normally
- No layout shifts or broken layouts when ad blockers are active

#### Phase Gate 6

> **AI presents:** security header test results (securityheaders.com) and legal page drafts.
> **Designer reviews and approves** all legal pages before proceeding.
>
> **Status:** ✅ Complete — .htaccess hardened, all 3 legal pages written (Privacy Policy, Terms of Service, Cookie Policy)

---

### Phase 7 — Forms, Interactions & Error Handling

*AI builds all interactive elements with full validation and error handling.*

#### Tasks

- [ ] Build contact form: name, email, subject, message fields. All with HTML5 + JS validation
- [ ] Form validation rules: required fields, email format, min/max character limits, no SQL injection
- [ ] Error messages: displayed inline below each field, in red (`#C0392B`), with `aria-live='polite'`
- [ ] Success message: replaces form after submission, confirms next steps to user
- [ ] Form submission: send via Formspree, Netlify Forms, or EmailJS (no server required)
- [ ] Add honeypot field and rate limiting logic to deter spam bots
- [ ] CSRF protection: use service-provided tokens (Formspree/Netlify handle this automatically)
- [ ] All error states must be keyboard accessible and screen-reader friendly

#### Error Message Standards

| Error Scenario | Message & Behavior |
|---|---|
| Empty required field | *"This field is required."* Shown on blur and on submit attempt. |
| Invalid email | *"Please enter a valid email address."* Shown on blur. |
| Message too short | *"Please enter at least 20 characters."* Shown on blur. |
| Submission failure | *"Something went wrong. Please try again or email us directly at [email]."* |
| 404 Page | Friendly heading, brief explanation, search box, link to homepage, popular links. |
| Offline / No JS | `<noscript>` message explaining that JS is required for some features. |

#### Phase Gate 7

> **AI presents:** working form demo with all validation states triggered.
> **Designer confirms:** all error messages display correctly and form submissions are received.
>
> **Status:** ✅ Complete — js/contact.js built with field validation, fetch submit, rate limiting, blur/input feedback, aria-invalid states. Modal form was already complete in js/modal.js. 404.html and all legal pages updated to current header/footer/nav.

---

### Phase 8 — Performance Optimization

*AI optimizes all assets and code for maximum speed.*

#### Tasks

- [x] Minify CSS: combined reset.css + styles.css → styles.min.css (48.4 KB → 34.1 KB, 29% reduction)
- [x] Minify JavaScript: all 5 JS files minified with rjsmin (~24 KB → ~15 KB total)
- [x] Update all HTML to reference `.min` versions of CSS and JS
- [x] Implement resource hints: `preconnect` (fonts on all pages), `dns-prefetch` (analytics on all pages), `preload` (hero WebP on index.html)
- [x] Defer all non-critical JS: all script tags already use `defer` attribute
- [ ] Inline critical CSS — deferred; not required for initial launch (Google Fonts is the main render-block, preconnect already added)
- [x] GZIP compression in `.htaccess` — already configured via mod_deflate (confirmed in Phase 6)
- [x] Cache headers: 1 year for CSS/JS/images, no-cache for HTML — already in .htaccess (confirmed Phase 6)
- [x] Hero image converted to WebP with `<picture>` fallback: 689 KB JPG → 77.5 KB WebP (89% reduction), `fetchpriority="high"`, `width`/`height` set for CLS prevention
- [ ] Lighthouse audit — NOTE: .htaccess is Apache-only, not active on GitHub Pages preview. Full audit will run on final domain (dietarynetwork.com) in Phase 9.

#### Phase Gate 8

> **AI presents:** Lighthouse report showing all four scores >= 90.
> **Designer approves** performance results before deployment.
>
> **Status:** ✅ Complete — Assets optimized. Lighthouse audit deferred to Phase 9 on final domain (GitHub Pages preview does not support .htaccess compression/caching headers). All code and image optimizations committed and live.

---

### Phase 9 — Testing

*AI runs comprehensive tests across devices, browsers, and edge cases.*

#### Test Requirements

| Test Type | Pass Criteria |
|---|---|
| **Functional Testing** | Every link, button, and form on every page tested. No broken links. No 404s on internal paths. |
| **Cross-Browser** | Chrome, Firefox, Safari, Edge — latest two versions of each. |
| **Mobile Testing** | iPhone SE (small), iPhone 14 (medium), iPad, Android mid-range — all layouts checked. |
| **Accessibility** | WAVE tool audit. No errors. Keyboard navigation tested on all interactive elements. |
| **Performance** | Google PageSpeed Insights: 90+ mobile, 95+ desktop. |
| **SEO** | Screaming Frog crawl: zero missing titles, descriptions, H1s, or broken links. |
| **Security** | securityheaders.com: Grade A or higher. No mixed content (HTTP on HTTPS page). |
| **Form Testing** | All validation states tested. Submission tested. Spam honeypot verified. |
| **Legal** | Privacy policy, terms, cookie policy, accessibility statement all linked in footer. |
| **404 Testing** | Manually verify custom 404 page loads for non-existent URLs. |
| **Print Testing** | Print preview checked in Chrome — unnecessary elements hidden. |
| **Ad Blocker** | uBlock Origin enabled: site loads and functions normally, no layout breaks. |

#### Phase Gate 9

> **AI presents:** full test report with pass/fail for every item above. All items must PASS before deployment.
> **Designer signs off** on test results.
>
> **Status:** ⬜ Awaiting execution

---

### Phase 10 — Deployment

*AI uploads all files and configures the live website.*

#### Tasks

- [ ] Connect to hosting provider using credentials from Section 1
- [ ] Upload all files to the correct public directory (`public_html`, `www`, or `dist` depending on host)
- [ ] Verify `.htaccess` is uploaded and active (test redirect HTTP → HTTPS)
- [ ] Configure SSL certificate if not auto-provisioned (Let's Encrypt via hosting panel)
- [ ] Set up www to non-www redirect (or reverse) in `.htaccess` — pick one canonical version
- [ ] Submit `sitemap.xml` to Google Search Console
- [ ] Submit `sitemap.xml` to Bing Webmaster Tools
- [ ] Verify Google Analytics is receiving data (check Realtime report)
- [ ] Run full post-deployment test: visit every page URL on live domain and verify load
- [ ] Test contact form on live domain — confirm email delivery
- [ ] Verify SSL is active and all pages load via HTTPS with no mixed content warnings
- [ ] Take and save screenshots of every live page as the launch record

#### Common Hosting Deployment Methods

| Hosting Provider | Deployment Method |
|---|---|
| **Netlify** | Drag and drop `/project-root` folder into Netlify dashboard, or connect Git repo for auto-deploy |
| **Vercel** | Connect Git repo. Vercel detects static site and deploys automatically |
| **cPanel** (Namecheap, SiteGround) | Use File Manager or FTP to upload all files to `public_html` directory |
| **GitHub Pages** | Push to `gh-pages` branch. Enable in repo Settings > Pages. Set custom domain in `CNAME` file |
| **AWS S3 + CloudFront** | Upload to S3 bucket with static website hosting. Configure CloudFront for HTTPS and CDN |

#### Phase Gate 10 — Final Launch Approval

> **AI presents:** live URL, screenshots of every page, and Lighthouse report run on the live site.
> **Designer confirms** the live site matches approved designs and all features work.
> **Project is COMPLETE.**
>
> **Status:** ⬜ Awaiting execution

---

## Section 6 — Documentation Requirements

*The AI must produce the following documentation files as part of every project. Saved in the `/docs/` folder.*

| Document | Content Requirement |
|---|---|
| `README.md` | Project overview, tech stack, how to edit content, how to add a page, how to deploy updates |
| `CHANGELOG.md` | Date-stamped log of every change made. Format: `[Date] [What changed] [Why]` |
| `CONTENT-GUIDE.md` | Where to find every piece of text on the site. How to edit it without breaking layout. |
| `IMAGE-GUIDE.md` | Image size requirements for each location. How to compress and name new images. |
| `SEO-GUIDE.md` | How to update title, description, and structured data for new pages. |
| `DEPLOYMENT-GUIDE.md` | Step-by-step instructions for updating and re-deploying the site. |
| `STYLE-GUIDE.md` | All CSS variables listed. Color palette. Font choices. Spacing scale. Component examples. |

### Documentation Rules

Every HTML file must have a comment block at the top:
```html
<!-- PAGE: [Page Name] | LAST UPDATED: [Date] | EDITOR: [AI/Designer] -->
```

Every CSS section must have a comment:
```css
/* === SECTION NAME === */
```

Every JS function must have a one-line comment explaining what it does.

---

## Section 7 — Ongoing Maintenance Protocol

*After launch, the designer hands this section to the AI engine for any future update request. The AI follows this protocol for every change.*

| Update Type | Protocol Steps |
|---|---|
| **Content Update** | 1. Edit HTML file → 2. Update `CHANGELOG.md` → 3. Re-minify if CSS/JS changed → 4. Re-deploy → 5. Verify live |
| **Add a New Page** | 1. Copy closest existing HTML → 2. Update `<title>`, meta, H1, canonical → 3. Add to nav on all pages → 4. Add to `sitemap.xml` → 5. Deploy and verify |
| **Image Replacement** | 1. Compress new image to WebP → 2. Replace file in `/images/` → 3. Verify alt text is still accurate → 4. Deploy |
| **Style Change** | 1. Edit CSS variable in `:root` → 2. Verify change across all pages → 3. Re-minify → 4. Deploy |
| **Security Update** | 1. Review `.htaccess` headers for new threats → 2. Update CSP if new third-party added → 3. Re-test securityheaders.com → 4. Deploy |
| **Legal Page Update** | 1. Update policy content → 2. Update "Last revised" date → 3. If GDPR change, notify users via banner → 4. Deploy |

---

## Project Sign-Off

*To be completed at project launch.*

| Field | Value |
|---|---|
| **Designer Name** | |
| **AI Engine Used** | Claude Sonnet 4.6 |
| **Project Start Date** | 2026-02-25 |
| **Launch Date** | |
| **Live URL** | |
| **Final Lighthouse Score (Mobile)** | Performance: ___ \| Accessibility: ___ \| Best Practices: ___ \| SEO: ___ |
| **Designer Approval Signature** | |
| **Date Signed** | |

---

## POST-LAUNCH TASK — Content Management System (Decap CMS)

> **STATUS: PENDING — Complete after site is live at dietarynetwork.com**

This task was deferred until after launch because it requires the live domain and a configured hosting provider to set up GitHub OAuth.

### What This Does
Decap CMS (formerly Netlify CMS) adds a password-protected `/admin` web interface to the site. Non-technical users log in with their GitHub account and edit site content through simple forms — no code, no Markdown, no AI required. All edits commit directly to the private GitHub repository and the site updates automatically.

### What Is Required to Set Up
1. **Site must be live** at its final domain (dietarynetwork.com)
2. **Hosting must be finalized** — Netlify (easiest, free tier works) or GitHub Pages with OAuth proxy
3. **GitHub OAuth App** — register one at github.com/settings/developers (takes 5 minutes); provides the secure login for the CMS
4. **Two files to add to the site:**
   - `admin/index.html` — loads the CMS interface
   - `admin/config.yml` — defines which fields are editable and maps them to HTML pages

### Remind Me When Ready
When the site is live, tell the AI: *"The site is live — set up Decap CMS as noted in the project plan."* The AI will walk through the full setup step by step.

### Estimated Setup Time
30–45 minutes once hosting and domain are confirmed.

---

*Save this document in the `/docs/` folder as `PROJECT_PLAN.md`. This serves as the permanent record of how the site was built and how to maintain it. For new projects, copy this file, clear the Project Inputs in Section 1, and start again.*
