# INFRA STORES — Product Requirements Document

## Original Problem Statement
Build a multi-vertical corporate catalog website for a Hyderabad-based construction & building-materials business. Catalog display with "Request Quote" / WhatsApp inquiry only. **No authentication, no admin dashboard.** Mobile-responsive.

### Rebrand (June 2026)
- Renamed **"LMN INFRA" → "INFRA STORES"** with a new SVG wordmark logo.
- New colour scheme: **Carbon Black (#0A0A0A) + Safety Orange (#FF4500)** (replaced Navy + Gold), sharp/industrial aesthetic, Cabinet Grotesk + IBM Plex Sans fonts.
- **Properties vertical removed entirely.** Site now has TWO verticals: **Materials** + **Construction**.
- Site made more dynamic: framer-motion entrance/scroll reveals, hover micro-interactions, a live brand marquee (react-fast-marquee), and a founders/team section.

## User Personas
- **Builders & Contractors**: fast material delivery, bulk pricing, mobile-first.
- **Homeowners**: planning new builds, quality construction services.

## Core Requirements (Static)
- Carbon Black + Safety Orange theme
- WhatsApp deep-links (wa.me/916301241568) for all inquiries
- Catalog display with Request Quote
- No authentication / no DB-backed admin

## What's Been Implemented ✅

### June 2026 — Rebrand to INFRA STORES
- ✅ New `Logo.jsx` (INFRA STORES wordmark + girder/block SVG icon) used in Navbar & Footer
- ✅ Global colour migration to Carbon Black + Safety Orange via CSS variables + token remap
- ✅ New fonts (Cabinet Grotesk headings, IBM Plex Sans body, JetBrains Mono accents)
- ✅ Properties removed: route, nav link, footer link, homepage vertical, about vertical, contact dropdown option, and backend `/api/properties` endpoint all deleted; `PropertiesPage.jsx` removed; `/properties` now redirects to `/`
- ✅ HomePage rebuilt: hero, brand marquee, trust indicators, 2 verticals, delivery zones, founders section (real photos), CTA — all with framer-motion reveals
- ✅ AboutPage rebuilt: story, 2 verticals, team section (3 founders), values — with animations
- ✅ Materials page: **fixed broken images** (BuildersMART CDN was hotlink-protected/403) by mapping every product to a reliable category-matched stock photo + real UltraTech/ACC cement photos; brand directory converted to clean A-Z **text tiles** (no logos)
- ✅ Fixed prior compile crash on MaterialsPage (visual-edits babel plugin infinitely recursed on a computed-member `groupedBrands[letter].map()` — restructured into an array)
- ✅ Backend rebranded (title, root, health, INFRA-QAS)

### Verified
- Frontend testing: 100% pass (iteration_2.json) — all flows, no console errors
- Deployment readiness: PASS (no blockers)

## Backend APIs
- `/api/` welcome, `/api/health`, `/api/materials`, `/api/packages`, `/api/delivery-zones`, `/api/quotes` (POST), `/api/contact` (POST)
- (Frontend is fully static — catalog data lives in `frontend/src/data/materialsData.js`)

## Prioritized Backlog
### P1
- [ ] Confirm/replace Instagram handle (currently @lmn.infra — may want @infra.stores once available)
- [ ] Source real per-product images / brand logos (current product images are category-level stock)
- [ ] Google Maps embed on Contact page

### P2
- [ ] Testimonials / reviews section
- [ ] FAQ section
- [ ] Persist quote/contact submissions to MongoDB + email/WhatsApp notifications

## Technical Stack
- Frontend: React 19, TailwindCSS, Shadcn/UI, framer-motion, react-fast-marquee
- Backend: FastAPI, MongoDB (Motor)
- Fonts: Cabinet Grotesk, IBM Plex Sans, JetBrains Mono

## Contact Information
- Naveen (MD & Founder): +91 6301241568
- Parvez (Co-Founder): +91 6305009371
- Rajesh (Co-Founder): +91 7730992040
- Hyderabad, Telangana
