# CIK Lab — Co-Creation for Inclusive Knowledges Lab

Website for the **Co-Creation for Inclusive Knowledges Lab** at Vrije Universiteit Amsterdam.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Sanity CMS**.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [CMS Setup (Sanity)](#cms-setup-sanity)
- [Development](#development)
- [Deployment](#deployment)
- [Architecture Decisions](#architecture-decisions)
- [Content Management Guide](#content-management-guide)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, RSC) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| CMS | Sanity v3 (embedded Studio) |
| Fonts | `next/font` — DM Serif Display + DM Sans |
| Animation | CSS keyframes + IntersectionObserver |
| Email | Resend |
| Deployment | Vercel |

---

## Project Structure

```
cik-lab/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout: fonts, metadata, nav, footer
│   ├── page.tsx            # Homepage (Server Component)
│   └── api/
│       └── contact/        # Contact form API route
│           └── route.ts
│
├── components/
│   ├── layout/             # Nav, Footer
│   ├── sections/           # One file per page section (server components)
│   │   ├── HeroSection.tsx
│   │   ├── WhatWeDoSection.tsx
│   │   ├── WhyItMattersSection.tsx
│   │   ├── ThemesSection.tsx
│   │   ├── LearningSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── TeamSection.tsx
│   ├── projects/           # Project card, filter, modal, grid (client)
│   ├── team/               # Team accordion (client)
│   ├── illustrations/      # SVG illustrations as React components
│   └── ui/                 # Shared primitives: Badge, Button, Divider, etc.
│
├── lib/
│   ├── constants.ts        # Theme colors, filter options, group labels
│   ├── utils.ts            # cn(), getThemeColor(), STATUS_CONFIG, etc.
│   └── sanity/
│       ├── client.ts       # Sanity client + sanityFetch helper
│       └── queries.ts      # All GROQ queries
│
├── hooks/
│   ├── useIntersectionObserver.ts
│   └── useProjectFilter.ts
│
├── data/                   # Static fallback data (used until CMS is live)
│   ├── projects.ts         # 17 research projects
│   └── team.ts             # 16 team members
│
├── types/
│   └── index.ts            # Shared TypeScript types
│
├── styles/
│   └── globals.css         # Tailwind directives + custom keyframes
│
├── cms/                    # Sanity Studio configuration
│   ├── sanity.config.ts
│   ├── schemas/
│   │   ├── project.ts
│   │   ├── teamMember.ts
│   │   └── siteSettings.ts
│   └── scripts/
│       └── seed.ts         # One-time data import script
│
└── public/                 # Static assets
    ├── og-image.png        # Open Graph image (1200×630)
    └── favicon.ico
```

---

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm 9+
- A [Sanity](https://sanity.io) account (free tier is sufficient)

### 1. Clone and install

```bash
git clone https://github.com/your-org/cik-lab.git
cd cik-lab
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and fill in the values (see [Environment Variables](#environment-variables)).

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** The site works immediately with static fallback data in `data/`. Sanity CMS integration is optional until you need live editing.

---

## Environment Variables

Create `.env.local` from the example file. These variables are **never** committed to git.

```env
# Sanity CMS — get from https://sanity.io/manage
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_with_read_write_permissions
SANITY_WEBHOOK_SECRET=random_secret_string

# Email via Resend — get from https://resend.com
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=lab@vu.nl

# Public site URL
NEXT_PUBLIC_SITE_URL=https://ciklab.vu.nl
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | For CMS | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | For CMS | Usually `production` |
| `SANITY_API_TOKEN` | For CMS writes | Token with Editor permissions |
| `RESEND_API_KEY` | For contact form | Resend API key |
| `CONTACT_EMAIL` | For contact form | Where form submissions go |
| `NEXT_PUBLIC_SITE_URL` | For SEO | Full URL without trailing slash |

---

## CMS Setup (Sanity)

### Create a Sanity project

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Create a new project (follow prompts)
sanity init --project cik-lab
```

Note the **Project ID** shown at the end — add it to `.env.local`.

### Start the Studio

The Studio is embedded in the Next.js app at `/studio`:

```bash
npm run sanity
```

Or access it at `http://localhost:3000/studio` when the dev server is running.

### Seed initial data

Import all 17 projects and 16 team members from the static data files:

```bash
# Install tsx if needed
npm install -g tsx

# Run the seed script (replace token with an Editor token from sanity.io/manage)
SANITY_PROJECT_ID=xxx \
SANITY_DATASET=production \
SANITY_TOKEN=your_editor_token \
npx tsx cms/scripts/seed.ts
```

### Switch to live CMS data

In `app/page.tsx`, uncomment the `sanityFetch` calls and remove the static imports:

```typescript
// Replace this:
const projects = PROJECTS;
const teamMembers = TEAM_MEMBERS;

// With this:
import { sanityFetch } from "@/lib/sanity/client";
import { projectsQuery, teamMembersQuery } from "@/lib/sanity/queries";

const projects = await sanityFetch<Project[]>(projectsQuery);
const teamMembers = await sanityFetch<TeamMember[]>(teamMembersQuery);
```

---

## Development

```bash
npm run dev          # Development server with hot reload
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
npm run type-check   # TypeScript check without building
```

### Adding a new project

**Without CMS:** Edit `data/projects.ts` and add an entry to the `PROJECTS` array.

**With CMS:** Go to `http://localhost:3000/studio` → Projects → New Project.

### Adding a new team member

**Without CMS:** Edit `data/team.ts`.

**With CMS:** Studio → Team Members → New Team Member.

### Adding a new research theme

Research themes are currently static (4 themes in `ThemesSection.tsx` + 5 filter options in `constants.ts`). To add one:

1. Add the colour tokens to `tailwind.config.ts` under `colors`
2. Add the theme to `THEME_COLORS` in `lib/constants.ts`
3. Add the filter option to `THEME_FILTER_OPTIONS`
4. Add the CMS schema option in `cms/schemas/project.ts`

---

## Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
vercel env add SANITY_API_TOKEN
# ... etc
```

Or connect via the [Vercel dashboard](https://vercel.com) for automatic deployments on push.

### Sanity deploy (Studio hosting)

```bash
npm run sanity:deploy
```

This deploys the Studio to `your-project.sanity.studio`.

### Sanity webhook (Incremental Static Regeneration)

Set up a webhook in Sanity to trigger ISR on content changes:

1. Go to [sanity.io/manage](https://sanity.io/manage) → API → Webhooks
2. Add webhook URL: `https://your-site.vercel.app/api/revalidate`
3. Set secret to match `SANITY_WEBHOOK_SECRET` in your env

Create `app/api/revalidate/route.ts` to handle revalidation (see Next.js ISR docs).

---

## Architecture Decisions

### Server Components by default

All sections (`HeroSection`, `WhatWeDoSection`, etc.) are React Server Components. They fetch data at build time and send zero JavaScript to the client. Only interactive islands (`ProjectsGrid`, `TeamAccordion`, `Nav`) are `"use client"`.

### Static fallback data

All content in `data/` mirrors the Sanity schema exactly. This means:
- The site runs perfectly without a CMS connection
- Switching to Sanity requires only changing two lines in `app/page.tsx`
- The seed script uses the same data, so CMS content matches the static data on day one

### No CSS-in-JS

All styling uses Tailwind utility classes + CSS custom properties in `globals.css`. This avoids runtime style injection, keeps the bundle small, and makes the HTML readable.

### Animations without JS libraries

SVG line-draw animations use `stroke-dashoffset` driven by CSS keyframes, triggered by `IntersectionObserver`. No Framer Motion dependency needed for these effects. Framer Motion is listed as a dependency for future interactive animations.

### Theme colour system

Theme colours are defined once in `lib/constants.ts` as the `THEME_COLORS` map and mirrored in `tailwind.config.ts`. The `getThemeColor()` utility ensures components always receive correct colour values regardless of where they're used.

---

## Content Management Guide

### For researchers and lab staff

The Sanity Studio at `/studio` provides a simple editing interface. No coding required.

**To update a project:**
1. Navigate to Studio → Projects
2. Click the project to edit
3. Update any fields and click Publish

**To add a team member:**
1. Studio → Team Members → New Team Member
2. Fill in Name, Role, Group, and Bio
3. Click Publish

**Changes appear on the live site** within 1 hour (ISR cache) or immediately if you've set up the revalidation webhook.

### Content that requires a developer

- Navigation structure
- Adding/removing research themes
- SVG illustrations
- Section layouts
- Colour palette changes

---

## Accessibility

- Skip-to-content link in `layout.tsx`
- All interactive elements have `aria-label`, `role`, and keyboard support
- SVG illustrations have `aria-label` and `role="img"`
- Focus rings use the brand orange colour
- `prefers-reduced-motion` respected for all animations
- Colour contrast meets WCAG AA for all text/background combinations

---

## License

© Vrije Universiteit Amsterdam. All rights reserved.
