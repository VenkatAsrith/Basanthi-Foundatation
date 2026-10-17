# Basanthi Foundation — Technical Architecture & Implementation Notes

**Project:** Basanthi Foundation Official Website  
**Stack:** React 19 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + Lucide React  
**Production Build Status:** Verified (`dist/` generated, 0 lint/compile errors)  
**Dev Server:** `http://localhost:5173/`

---

## 1. Architectural Philosophy

The digital experience for Basanthi Foundation is designed around three core pillars:
1. **Radical Authenticity:** Every programme, partner agency (Cyberabad Police), and geographical cluster (Peddagudem in Wanaparthy, Ibrahimpatnam, KPHB) is grounded in verified public records.
2. **Zero Fake Metrics:** In compliance with ethical design standards, no fictional count-up tickers, simulated donation totals, or unverified tax exemption claims are present.
3. **Graceful Asset Pipeline:** All image components use the `FallbackImage` architecture. As soon as the foundation's high-resolution photography is placed into `public/assets/`, it replaces the editorial vector artwork immediately without requiring code rewrites.

---

## 2. Directory & Component Structure

```text
├── docs/
│   ├── foundation-research.md   # Ground-truth research & verified dossier
│   ├── asset-manifest.md        # Asset placement table, ratios, & intake specs
│   ├── implementation-notes.md  # Architecture, styling, & setup guide
│   └── qa-report.md             # Responsiveness, keyboard a11y, & test report
├── public/
│   ├── assets/
│   │   ├── brand/               # Vector logos (light and dark variants)
│   │   ├── hero/                # Signature hero photography
│   │   ├── initiatives/         # School renovations, Anganwadis, police outpost
│   │   ├── campaigns/           # Arrive Alive road safety, IDL lake hydration
│   │   ├── community/           # Healthcare assistance & beneficiary care
│   │   ├── gallery/             # Lightbox visual records
│   │   └── backgrounds/         # Topography & grain SVG textures
│   ├── favicon.svg              # Custom SVG crest favicon
│   ├── robots.txt               # SEO indexing directives
│   └── sitemap.xml              # XML search engine sitemap
├── src/
│   ├── components/
│   │   ├── navigation/Navbar.tsx
│   │   ├── hero/HeroSection.tsx
│   │   ├── sections/
│   │   │   ├── TrustImpactSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── AreasOfWorkSection.tsx
│   │   │   ├── VolunteerSection.tsx
│   │   │   ├── DonationSection.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── campaigns/CampaignsSection.tsx
│   │   ├── gallery/CommunityGallerySection.tsx
│   │   ├── forms/
│   │   │   ├── DonationModal.tsx
│   │   │   └── VolunteerModal.tsx
│   │   ├── layout/Footer.tsx
│   │   └── ui/
│   │       ├── FallbackImage.tsx
│   │       ├── InitiativeDetailModal.tsx
│   │       └── SocialIcons.tsx
│   ├── data/
│   │   ├── assetManifest.ts     # Metadata for image mapping
│   │   └── foundationContent.ts # Centralized verified content repository
│   ├── lib/
│   │   └── animations.ts        # Reusable Framer Motion variants
│   ├── types/index.ts           # Strict TypeScript contracts
│   ├── App.tsx                  # Root orchestration & modal states
│   ├── index.css                # Tailwind v4 theme tokens & typography
│   └── main.tsx                 # React entrypoint
```

---

## 3. Design Token System

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Warm Ivory** | `#F8F6F0` | Main editorial background canvas |
| **Deep Forest Green** | `#173F35` | Primary brand authority color |
| **Dark Forest** | `#0D2620` | Footer & high-contrast container surfaces |
| **Muted Terracotta** | `#C56F50` | Narrative accents & editorial highlights |
| **Saffron / Warm Gold**| `#EAA23B` | CTAs, trust badges, active state indicators |
| **Soft Sage** | `#DCE7DB` | Subtle card borders & tag backdrops |
| **Dark Charcoal** | `#242622` | Primary body typography (maximum legibility) |
| **Muted Body Text** | `#686B64` | Secondary metadata & captions |
| **Subtle Borders** | `#E8E5DC` | Clean hairline editorial separation |

### Typography Scale
- **Headings:** `DM Serif Display` (Editorial humanist serif with natural warmth).
- **Body & Controls:** `Plus Jakarta Sans` & `Inter` (Geometric sans-serif with high x-height for readability).
- **Accents:** Uppercase tracking (`tracking-widest`) for categories and verified status badges.

---

## 4. Interactive Workflows

1. **Donation Pledge Journey (`DonationModal.tsx`):**
   - Allows supporters to allocate contributions to tangible deliverables:
     - Classroom Dual Desk Set (₹2,500)
     - Concrete Roof Slab Waterproofing Share (₹5,000)
     - Emergency Patient Medicine Lifeline (₹3,000)
     - "Arrive Alive" Certified Helmet Pack (₹1,500)
   - Transparent disclaimer informing donors that funds go directly to project procurement.
   - Generates client-side pledge confirmation with confetti celebration.

2. **Volunteer Onboarding (`VolunteerModal.tsx`):**
   - Form for weekend teaching, helmet distribution, festival hydration support, or remote skills.
   - Comprehensive client validation on Name, Email, and Phone.

3. **Initiative Deep-Dive (`InitiativeDetailModal.tsx`):**
   - Accessible dialog opened via "Explore Details" on any programme card.
   - Displays full project history, verified municipal/police partners, and bulleted engineering specifications.

4. **Interactive Lightbox (`CommunityGallerySection.tsx`):**
   - Fullscreen modal with previous, next, and keyboard navigation (Left/Right arrows and Escape key).

5. **Contact & Recommendation System (`ContactSection.tsx`):**
   - Enables community members to propose schools needing desk overhauls or initiate CSR partnerships.

---

## 5. Local Setup & Production Build Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Production build (Vite + TypeScript)
npm run build

# 4. Preview production build locally
npm run preview
```
