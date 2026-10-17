# Basanthi Foundation — QA & Verification Report

**Date of Execution:** October 2026  
**Target URL:** `http://localhost:5173/`  
**Build Status:** Clean production build (`npm run build` completed in 1.03s, 0 errors)  
**Testing Scope:** Functional integrity, responsive breakpoints, keyboard accessibility, modal flows, and content verification.

---

## 1. Functional Verification Summary

| Test Area | Feature / Interaction | Expected Result | Result Status | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Navigation** | Sticky glassmorphism header | Transforms into blurred backdrop after scrolling 30px | **PASS** | `glass-header` class with backdrop-filter blur. |
| **Navigation** | Mobile menu drawer | Toggles on hamburger click, displays all section links | **PASS** | Includes close button and Escape key listener. |
| **Navigation** | Section anchor navigation | Smooth scrolls to `#about`, `#initiatives`, `#campaigns`, etc. | **PASS** | HTML `scroll-smooth` enabled. |
| **Hero** | Editorial headline & CTA | Hero copy renders with staggered entrance | **PASS** | Framer Motion staggered variants applied. |
| **Modals** | Donation Pledge Modal | Opens on "Support Us" / "Pledge This Unit", displays cause selector | **PASS** | Validates name/phone/email, fires celebratory confetti. |
| **Modals** | Volunteer Registration | Opens on "Volunteer", collects area of contribution | **PASS** | Validates required fields, prevents empty submission. |
| **Modals** | Initiative Details Dialog | Opens on "Explore Details" from any work card | **PASS** | Shows full project history, specs, and escape listener. |
| **Gallery** | Category Filtering | Filters gallery cards by Education, Civic Safety, Welfare | **PASS** | Immediate state filtering without layout shift. |
| **Gallery** | Accessible Lightbox | Opens clicked photo in full modal with Prev/Next buttons | **PASS** | Supports Left/Right arrow keys and Escape key. |
| **Forms** | Contact & Proposal Form | Form validation on empty name, invalid email, or short message | **PASS** | Inline error indicators with red rings and alerts. |
| **Asset Pipeline**| Fallback Image Component | Automatically falls back to category-themed SVG if photo is unuploaded | **PASS** | No broken image icons; zero layout shift. |
| **Footer** | Back to Top button | Smoothly scrolls viewport to top (y=0) | **PASS** | Tested and verified. |

---

## 2. Responsive Breakpoint Matrix

| Viewport Width | Device Category | Layout Behavior | Overflow Status |
| :--- | :--- | :--- | :--- |
| **320px** | Ultra-compact Mobile | Single-column stack, compressed padding, mobile menu active | **Zero Overflow** |
| **360px** | Android Standard | Fluid typography clamps properly, buttons full-width | **Zero Overflow** |
| **390px** | iPhone Standard | Balanced card padding, hero text wraps elegantly | **Zero Overflow** |
| **430px** | iPhone Pro Max | Full hero card framing, clean badge positioning | **Zero Overflow** |
| **768px** | Tablet Portrait | 2-column grid for initiatives, stats grid 2x2 | **Zero Overflow** |
| **1024px** | Tablet Landscape / Laptop | Full desktop navigation revealed, 3-column campaigns | **Zero Overflow** |
| **1280px** | Desktop Standard | Signature 7-5 asymmetrical hero layout active | **Zero Overflow** |
| **1440px** | High-Res Desktop | Max container constrained to `max-w-7xl` (1280px) | **Zero Overflow** |
| **1920px** | Ultra-Wide Monitor | Clean centering with generous ivory whitespace | **Zero Overflow** |

---

## 3. Accessibility & SEO Compliance

1. **Semantic Hierarchy:** Single `<h1>` tag in the hero, logical `<h2>` and `<h3>` tags for sections and cards.
2. **Accessible Dialogs:** All modals have `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and escape-key handlers.
3. **Focus States:** Custom high-visibility `:focus-visible` ring in saffron (`#EAA23B`) with offset.
4. **Contrast Ratios:** Forest green (`#173F35`) on ivory (`#F8F6F0`) achieves contrast ratio > 10:1 (exceeds WCAG AAA standard).
5. **Reduced Motion:** Global `@media (prefers-reduced-motion: reduce)` block disables heavy transforms and smooth scrolling for sensitive users.
6. **SEO Infrastructure:** Fully formed `<title>`, meta description, canonical URL, Open Graph card, Twitter card, `robots.txt`, `sitemap.xml`, and valid JSON-LD `NGO` structured data.

---

## 4. Pending Foundation Assets Checklist

The application is structured to receive genuine media without modifying any code. The foundation team simply needs to place the following files into `public/assets/`:

1. `public/assets/hero/hero-main.webp` — Primary photograph of students/classrooms in Wanaparthy.
2. `public/assets/initiatives/school-peddagudem-01.webp` — Peddagudem school after flooring and roof renovation.
3. `public/assets/initiatives/anganwadi-renovation-01.webp` — Anganwadi educational wall murals & child care center.
4. `public/assets/initiatives/police-outpost-kphb.webp` — KPHB Metro Station police outpost.
5. `public/assets/campaigns/campaign-arrive-alive-01.webp` — Road safety helmet distribution drive.
6. `public/assets/campaigns/campaign-water-relief-01.webp` — IDL Lake drinking water relief stall.
7. Official Section 8 / 12A / 80G registration numbers (to be appended to donation terms once confirmed).
