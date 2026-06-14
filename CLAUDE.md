# Portfolio Web — Project Overview

## What is this?

A customizable, modern portfolio website built with Next.js, React, and TypeScript. Designed as a resume/CV showcase for engineers, with sections for personal branding, experience timeline, key achievements, and contact information.

**Current Owner:** Muhammed Shariq (Cloud Platform Engineering Leader | SRE Architect)

---

## Tech Stack

- **Framework:** Next.js 15.2.4
- **UI:** React 19 + TypeScript
- **Styling:** Tailwind CSS + Tailwind Scrollbar
- **Animation:** Framer Motion
- **Icons:** React Icons
- **Build:** Next.js (built-in)
- **Package Manager:** npm

---

## Project Structure

```
portfolio-web/
├── app/
│   ├── page.tsx               # Main page layout (sections orchestration)
│   ├── layout.tsx             # Root layout wrapper
│   ├── globals.css            # Global styles
│   └── fonts.ts               # Font configuration
├── components/
│   ├── common/                # Reusable components
│   │   ├── NavLinkList.tsx    # Navigation menu items
│   │   ├── SocialIconList.tsx # Social media icon row
│   │   ├── SectionTitle.tsx   # Section header (numbered)
│   │   └── TypeWriter.tsx     # Animated typewriter effect
│   ├── layout/                # Layout-only components
│   │   ├── Header.tsx         # Top nav + mobile menu toggle
│   │   ├── Footer.tsx         # Bottom footer
│   │   ├── LeftSide.tsx       # Left sidebar (social icons, desktop only)
│   │   ├── RightSide.tsx      # Right sidebar (email, desktop only)
│   │   └── MobileMenu.tsx     # Mobile drawer menu
│   └── sections/              # Page sections (scrollable)
│       ├── Banner.tsx         # Hero section with name & tagline
│       ├── About.tsx          # Bio + skills grid
│       ├── Experience.tsx     # Tabbed job history
│       ├── Achievements.tsx   # Key technical wins grid
│       ├── Contact.tsx        # CTA + email
│       └── experiences/       # Experience data
│           ├── jobEntries.ts  # Job history entries (data-only)
│           └── ExperienceEntry.tsx  # Job card component
├── constants/
│   └── personal.ts            # Centralized personal data (name, email, socials, CV)
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── LogoBig.png    # Header logo
│   │   │   ├── Devon_circle.png   # Profile photo (placeholder)
│   │   │   ├── Skills/        # Tech skill icons
│   │   │   └── ProjectPictures/   # (unused, from template)
│   │   ├── DevonGifford-...pdf    # (placeholder, replace with your CV)
│   │   └── index.ts           # Asset exports
│   └── favicon.ico
├── utils/
│   └── TypeWriter.ts          # Typewriter animation logic
├── tailwind.config.ts         # Tailwind theme & colors
├── tsconfig.json              # TypeScript config
├── next.config.js             # Next.js config
├── eslint.config.mjs          # Linting rules
└── package.json               # Dependencies & scripts

```

---

## Customization Guide

### Personal Information (Single Source of Truth)

**File:** `constants/personal.ts`

```typescript
export const personal = {
  name: "Muhammed Shariq",
  email: "msmshariq@outlook.com",
  resumePath: "/assets/M_S_M_Shariq_CV.pdf",
  socials: {
    github: "https://github.com/msmshariq",
    linkedin: "https://www.linkedin.com/in/msmshariq",
    twitter: "https://twitter.com/msmshariq",
  },
};
```

This is imported by 8+ components. Change here once, it updates everywhere.

### Hero Section (Banner)

**File:** `components/sections/Banner.tsx`

- **Lines 38–52:** Typewriter roles (rotates through these titles)
- **Lines 62–77:** Bio text + CTA button
- **Line 82:** Resume download link

### About Section

**File:** `components/sections/About.tsx`

- **Lines 112–133:** Long-form biography
- **Lines 48–85:** Skills grid (organized in groups: "Cloud & Infrastructure", "Languages & Tools", "Platforms & Expertise")
- **Lines 104–148:** Profile image + overlays (edit `profileImgCircle` import if you change the photo)

### Experience Timeline

**File:** `components/sections/experiences/jobEntries.ts`

Data-only file. Each job entry has:
- `key`: Unique identifier (must match TabKey type)
- `label`: Sidebar tab label
- `sub`: Optional subtitle (role/position)
- `componentProps`: Title, company, dates, intro, bullet points

Add/remove entries here; they auto-wire into tabs.

**Default tab:** Set in `components/sections/Experience.tsx:9` (`useState("humai")`)

### Achievements Section

**File:** `components/sections/Achievements.tsx`

Array of 6 achievements with:
- `title`: Achievement name
- `description`: Detailed explanation
- `metrics`: Metric badge (e.g., "99.99% Uptime")

Edit the `achievements` array to customize.

### Page Metadata

**File:** `app/page.tsx:13–19`

- `title`: Browser tab title (wired to `personal.name`)
- `description`: SEO meta description

### Navigation Menu

**File:** `components/common/NavLinkList.tsx:6–12`

Array of nav items with id, label, and index number. Update here to add/remove sections.

---

## How to Run Locally

### Setup

```bash
cd portfolio-web
npm install
```

### Development Server

```bash
npm run dev
```

Opens on `http://localhost:3000` (or next available port if 3000 is busy).

Live reload enabled. Edit files and see changes instantly.

### Build for Production

```bash
npm run build
npm start
```

Generates optimized static/server files in `.next/`.

### Linting & Formatting

```bash
npm run lint              # Check for errors
npm run format            # Auto-format code
```

---

## Key Design Notes

### Colors & Theming

Tailwind config in `tailwind.config.ts` defines custom colors:
- `bodyColor`: Dark background
- `textGreen`: Accent green (highlights, CTAs)
- `textDark`: Muted text
- `textLight`: Primary text
- `hoverColor`: Hover state background

### Responsive Breakpoints

Uses Tailwind's standard breakpoints (sm, md, mdl, lgl, xl). Mobile-first approach.

### Animations

Framer Motion used for fade-ins, hovers, and scroll triggers. See `components/sections/` for patterns.

### Images

Next.js `Image` component used throughout for optimization. Static imports in `public/assets/index.ts`.

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy with one click

### Self-Hosted

Build with `npm run build`, then serve `.next/` folder with any Node.js server.

---

## Important Notes

- **No Database:** This is a static site. No backend needed.
- **Social Links & Email:** Centralized in `constants/personal.ts`. Update once, syncs everywhere.
- **CV/Resume:** Replace `public/assets/M_S_M_Shariq_CV.pdf` with your own. Update path in `personal.ts`.
- **Profile Photo:** Replace `public/assets/images/Devon_circle.png` with your own photo. Re-export in `public/assets/index.ts` if you rename.
- **Skills Icons:** Tech skill icons live in `public/assets/images/Skills/`. Add/remove PNGs and update the skills array in `About.tsx`.
- **TypeScript:** Strict mode enabled. All files should be `.tsx` or `.ts`.
- **No Tests:** This is a portfolio, not a library. No test suite needed.

---

## Future Enhancements

- [ ] Add "Technical Highlights" section (infrastructure case studies)
- [ ] Dark/Light mode toggle
- [ ] Blog or articles section
- [ ] Contact form (requires backend)
- [ ] Animated scroll progress bar

---

## Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Dev server auto-increments to 3001, 3002, etc. |
| Images not loading | Check `public/` paths; Next.js Image component requires static imports |
| Styles not applying | Rebuild Tailwind with `npm run build` |
| TypeScript errors | Run `npx tsc --noEmit` to check full tree |

---

## Questions?

Refer to:
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com
- Framer Motion docs: https://www.framer.com/motion
