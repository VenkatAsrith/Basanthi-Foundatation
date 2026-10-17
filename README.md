# Basanthi Foundation - Official Website

> **"Small Acts. Lasting Change."**  
> Grassroots Community Welfare & Social Impact across Telangana, India.

---

## Live Demonstration

- **Live URL:** [https://basanthi-foundation.netlify.app/](https://basanthi-foundation.netlify.app/) *(or insert your live deployment link here)*
- **Local Dev Server:** `http://localhost:5173/`
- **Notice:** This digital platform is built as a production-ready demonstration prototype for Basanthi Foundation review. Formal registration details, banking credentials, and statutory tax-exemption certificates (80G/12A) are subject to final publication by foundation leadership.

---

## About Basanthi Foundation

Founded and chaired by **Ajay Raidu Abbineni** (publicly known as Ajay Raidu), **Basanthi Foundation** focuses on tangible, frontline social welfare initiatives across Telangana:

- **Rural School Modernization & Kit Distribution:** Direct distribution of branded educational bags, bilingual dictionaries, and student desks, alongside concrete roof waterproofing and vitrified tile flooring in government primary schools across Wanaparthy district and Ibrahimpatnam.
- **Civic Safety Infrastructure Partnerships:** Collaborated with Cyberabad Police (Kukatpally Division) to sponsor and establish the permanent **Police Outpost beneath KPHB Metro Station**, enhancing night safety for women and commuters.
- **"Arrive Alive" Road Safety:** Partnering with Cyberabad Traffic Police inside their CCTV command center to distribute certified "STRONG" ISI safety helmets to vulnerable two-wheeler riders.
- **Mass Public Hydration & Food Relief:** Free drinking water, buttermilk, and cold sharbat distribution camps during summer and Ganesh Nimajjanam processions at IDL Lake, plus hot meal drives outside transit terminals.

---

## Tech Stack & Architecture

- **Core Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom editorial design tokens
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (scroll-triggered directional reveals, word-by-word headline animations, modal transitions)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom Standalone SVG Brand Elements
- **Celebration Feedback:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## Design & Experience Highlights

- **Radical Authenticity:** Integrated 8 genuine on-ground photographs documenting founder Ajay Raidu, Cyberabad Police leadership, school kit handovers, and summer refreshment stalls.
- **No AI Slop / Over-Decoration:** Clean editorial typography (`DM Serif Display` + `Plus Jakarta Sans`), generous whitespace, and zero artificial floating blobs or fake counters.
- **Transparent Watermark:** Authentic foundation logo watermark subtly layered in narrative section backdrops.
- **Harmonized 3:4 Aspect Ratio:** Card images across *Verified Areas of Work*, *Featured Campaigns*, and *Moments from the Ground* share matching portrait ratios without cropping.
- **Full Interactive Lightbox:** Click any photo on the site to inspect the high-resolution capture with previous/next controls and keyboard navigation (<kbd>Esc</kbd> / <kbd>Left</kbd> / <kbd>Right</kbd>).
- **Smooth Navigation:** Global smooth scroll with a 5rem header offset ensuring section titles are never hidden beneath the sticky navbar.

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VenkatAsrith/Basanthi-Foundatation.git
   cd "Basanthi Foundatation"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your browser.

4. **Production Build:**
   ```bash
   npm run build
   ```
   Build output will be generated in `dist/`.

5. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## Project Structure

```text
├── docs/
│   ├── foundation-research.md     # Verified public records & citations
│   ├── asset-manifest.md          # Complete photography & asset mapping
│   ├── implementation-notes.md    # Architecture & styling guidelines
│   └── qa-report.md               # QA, responsive breakpoint & a11y audit
├── public/
│   ├── assets/
│   │   ├── brand/                 # official-logo.png, foundation-logo.svg
│   │   ├── hero/                  # hero-main.png (Ajay Raidu school kit handover)
│   │   ├── initiatives/           # police cheque handover, food relief, school kit
│   │   ├── campaigns/             # helmet drive, summer buttermilk, water relief
│   │   ├── community/             # family & child support
│   │   └── gallery/               # All 8 genuine photos for lightbox
│   ├── favicon.png                # Official logo favicon
│   ├── robots.txt                 # SEO crawler rules
│   └── sitemap.xml                # XML sitemap
├── src/
│   ├── components/
│   │   ├── navigation/Navbar.tsx  # Sticky header with official logo & mobile drawer
│   │   ├── hero/HeroSection.tsx   # Word-by-word headline reveal & photo frame
│   │   ├── sections/
│   │   │   ├── TrustImpactSection.tsx   # Vertical scroll-triggered impact
│   │   │   ├── AboutSection.tsx         # Founder vision & horizontal photo entrance
│   │   │   ├── AreasOfWorkSection.tsx   # 3:4 portrait cards with slide-in animation
│   │   │   ├── VolunteerSection.tsx     # Participation tracks
│   │   │   ├── DonationSection.tsx      # Direct material units (desks, kits)
│   │   │   ├── FaqSection.tsx           # Operations & transparency accordion
│   │   │   └── ContactSection.tsx       # Validated proposal & inquiry form
│   │   ├── campaigns/CampaignsSection.tsx # 3:4 portrait campaign cards
│   │   ├── gallery/CommunityGallerySection.tsx # Filterable grid & lightbox
│   │   ├── forms/
│   │   │   ├── DonationModal.tsx        # Ethical sponsorship pledge modal
│   │   │   └── VolunteerModal.tsx       # Volunteer registration modal
│   │   ├── layout/Footer.tsx            # Demonstration notice & official branding
│   │   └── ui/
│   │       ├── PhotoViewerModal.tsx     # High-res photo viewer modal
│   │       └── InitiativeDetailModal.tsx # Project specifications modal
│   ├── data/
│   │   ├── assetManifest.ts       # Asset metadata contracts
│   │   └── foundationContent.ts   # Centralized verified content repository
│   ├── lib/animations.ts          # Reusable Framer Motion variants
│   ├── types/index.ts             # Strict TypeScript definitions
│   ├── App.tsx                    # Root component & modal state
│   ├── index.css                  # Tailwind v4 theme & token definitions
│   └── main.tsx                   # Application entrypoint
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## License & Intellectual Property

All images, logos, and campaign materials are property of **Basanthi Foundation** (`@basanthi_foundation`) and Founder **Ajay Raidu** (`@ajay_raidu`).  
Website developed as an editorial digital platform for demonstration and foundation review purposes.
