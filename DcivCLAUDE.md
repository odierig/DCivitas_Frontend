# DCivitas Website — Claude Code Instructions

## How to Use This File

This file works in tandem with the **frontend-design skill**. Before writing any code:

1. Read the frontend-design skill in full and apply its principles for motion, spatial composition, typography rhythm, and aesthetic execution.
2. Read this file for product context, the design system, and per-page specs.
3. The design system here (colors, type, spacing, brand voice) is the source of truth — the frontend-design skill governs *how* to execute it with craft and intentionality.

The frontend-design skill's "never do" list applies here too: no generic SaaS layouts, no predictable component patterns, no cookie-cutter execution. DCivitas should feel like a real consulting firm's website, not a student club page.

---

## Project Overview

You are building the official website for **DCivitas**, an undergraduate pro bono consulting club at Georgetown University. DCivitas pairs Georgetown undergraduates across all 5 schools with local nonprofits in the D.C.-Maryland-Virginia (DMV) area to deliver consulting work for free.

**The site should feel like a professional consulting firm — not a student club.** Think clean, modern, confident, and editorial. Restrained use of purple, generous whitespace, sharp typography, and imagery that conveys seriousness of mission. The visual bar is McKinsey, Bain, Deloitte, BCG — adapted to a younger, mission-driven sensibility.

The build is phased. Always build with the full site architecture in mind even when only executing the current phase. Set up the file structure and navigation for all pages from the start so nothing needs to be restructured later.

---

## Brand Identity

### Mission & Voice

**Who We Are (verbatim, for use on site):** DCivitas is a pro bono consulting club with consultants from all 5 undergraduate schools within Georgetown University. We seek out forward-thinking, innovative, and socially-minded individuals who are dedicated to making a local impact. We endorse a "learn-by-doing" mentality and do not require our members to have any prior consulting experience.

**Who We Serve (verbatim, for use on site):** DCivitas partners with local nonprofits in the D.C.-Maryland-Virginia area who serve marginalized and underresourced communities. We recognize our clients' unique missions and potential for growth and help tackle their operational barriers by providing creative long-lasting solutions that will persist beyond our partnership.

**Brand voice:** Confident, mission-focused, professional but warm. Not corporate jargon. Not student-y. Write like a young firm that takes its work seriously.

### Color Palette

```
--purple-dark:      #2E3974   /* primary brand purple — backgrounds, dark sections, headlines */
--purple-mid:       #6660A1   /* secondary purple — accents, buttons, borders */
--purple-light:     #9E86CD   /* tertiary purple — highlights, hover states, subtle accents */
--ink:              #2C2F3D   /* near-black — body text on light, dark surfaces */
--paper:            #E9EAF4   /* near-white lavender — used where white would be used */
```

**Color usage rules:**
- Most text-heavy sections should be dark text on light background (ink on paper) or light text on dark background (paper on purple-dark) for contrast.
- Purple-on-purple is permitted and encouraged for emphasis — e.g., light purple text or accents on dark purple backgrounds. Use thoughtfully.
- Purple-mid and purple-light are accent colors. They should not dominate sections; they punctuate them — borders, dividers, button fills, icon strokes, hover states, emphasized words.
- **No gradients.** Ever. Flat color only.
- Never use pure black (#000000) or pure white (#FFFFFF). Use `--ink` and `--paper`.
- Section backgrounds alternate between `--paper` and `--purple-dark` to create visual rhythm down the page. The occasional `--ink` section is fine for dramatic contrast.
- Let imagery and typography carry the weight. Don't over-color.

### Typography

**Public Sans** is the only typeface used on the site. Available from Google Fonts and also provided as local font files in `/public/fonts/` (use the local files as the primary load, with Google Fonts as a fallback).

```css
/* Load via Google Fonts as fallback */
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');
```

**Weight usage:**
- **300 (Light)** — large display headlines and hero copy. The signature weight of the brand. Public Sans Light at large sizes feels editorial and confident.
- **400 (Regular)** — body copy, navigation, UI labels, most content
- **500 (Medium)** — subtle emphasis, secondary buttons, metadata labels
- **700 (Bold)** — used sparingly for emphasis only. Never for entire headlines.

**Type scale:**
```
--text-xs:    12px / 1.5    /* eyebrow labels, badges, metadata */
--text-sm:    14px / 1.6    /* small body, captions */
--text-base:  16px / 1.65   /* body default */
--text-md:    18px / 1.6    /* lead paragraphs, card titles */
--text-lg:    22px / 1.4    /* section subheadings */
--text-xl:    32px / 1.25   /* section headlines */
--text-2xl:   48px / 1.15   /* page titles */
--text-3xl:   72px / 1.05   /* hero display */
--text-4xl:   96px / 1.0    /* hero max — landing only */
```

**Editorial tone:** Use generous letter-spacing on small uppercase eyebrow labels (e.g., `letter-spacing: 0.12em; text-transform: uppercase;`). Use slightly tightened tracking on display headlines (`letter-spacing: -0.02em`). Headlines should breathe with ample line-height for short headlines but tight for long ones.

### Logo

The DCivitas logo lives at `/public/logos/dcivitas-logo-white.png` (white wordmark on transparent). Use this on dark purple and ink backgrounds. For light backgrounds, render the logo using a CSS filter or request a dark variant from the user — do not recreate the logo in HTML/CSS.

### Imagery

Imagery lives in `/public/images/` and is provided by the user. Use real provided imagery wherever possible — never use stock URLs or external placeholders. If a section needs an image and none has been provided, leave a clearly labeled placeholder `<div>` with a `<!-- TODO: image -->` comment and explain in the build summary which image is needed.

Imagery should feel documentary and grounded — not over-stylized. Treat photos as full-bleed where they appear, with restrained framing.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Tailwind CSS with CSS custom properties for the design tokens defined above. Tokens live in `globals.css`; Tailwind theme extension references them.
- **Animation:** Framer Motion for scroll-triggered fade-ins, the animated counter, and any micro-interactions
- **Icons:** Lucide React
- **Fonts:** Public Sans loaded via `next/font/local` from `/public/fonts/`, with Google Fonts as web fallback
- **Deployment:** Vercel via GitHub. The user will run `npm run dev` locally to refine before pushing commits.

Do not introduce additional dependencies without flagging it first. If a third-party component is needed (e.g., from 21st.dev), the user will provide it.

---

## Asset Directory

All assets live in the `DCivFrontend/` project folder (which is the root of the repo). Expected structure:

```
DCivFrontend/
  public/
    fonts/
      PublicSans-Light.ttf
      PublicSans-Regular.ttf
      PublicSans-Medium.ttf
      PublicSans-Bold.ttf
      (+ other Public Sans weights as provided)
    logos/
      dcivitas-logo-white.png         # Primary logo, white on transparent
      partners/                       # Partner nonprofit logos
    images/                           # Editorial photography for hero + sections
  CLAUDE.md                           # This file
  ...rest of Next.js project
```

Always pull assets from these folders. If something is missing, ask the user before substituting.

---

## Full Site Architecture (Build in Phases)

### Phase 1 — Landing Page (current phase)
### Phase 2 — About (Mission, Team, Where We Go), Client Services
### Phase 3 — Partners, Impact Stories
### Phase 4 — Work with Us (Apply as Student, Get in Touch as Nonprofit)

Even in Phase 1, set up navigation links and route stubs for all pages so the navbar works end-to-end. Stub pages can be a single `<h1>` with a `<!-- TODO -->` comment.

---

## File Structure to Create

```
app/
  layout.tsx                    # Root layout, font loading, metadata
  page.tsx                      # Landing page (Phase 1)
  globals.css                   # Design tokens, base styles
  about/
    page.tsx                    # About overview
    mission/page.tsx            # (Phase 2)
    team/page.tsx               # (Phase 2)
    where-we-go/page.tsx        # (Phase 2)
  services/
    page.tsx                    # Client Services (Phase 2)
  partners/
    page.tsx                    # Partners (Phase 3)
  impact/
    page.tsx                    # Impact Stories (Phase 3)
  work-with-us/
    page.tsx                    # Work with Us overview (Phase 4)
    students/page.tsx           # Apply as a student (Phase 4)
    nonprofits/page.tsx         # Get in touch as a nonprofit (Phase 4)
components/
  Navbar.tsx                    # Transparent → solid on scroll
  Footer.tsx
  AnimatedNumber.tsx            # Scroll-triggered animated counter
  FadeIn.tsx                    # Reusable scroll-triggered fade-in wrapper
  Section.tsx                   # Standard section container with consistent padding/max-width
  Button.tsx                    # Primary, secondary, ghost variants
  ...other components as needed
lib/
  ...utilities as needed
public/
  fonts/
  logos/
  images/
```

---

## Phase 1 Build Spec — Landing Page

The landing page tells a story top-to-bottom: who we are → what we do → who we serve → proof → how to engage. Each section earns its place. Whitespace between sections is generous — sections shouldn't feel cramped.

### Navbar
- **Transparent on the hero**, with the white logo on the left and nav links in `--paper` color on the right.
- **Fills to `--paper` background** with `--ink` text once the user scrolls past the hero. Use a subtle 1px bottom border in a low-opacity purple or `--paper-dark` tint when filled. Transition is smooth (200ms ease).
- Logo on the left (swaps from white version to a dark version, or applies a CSS filter, on scroll-fill — if no dark logo is available, leave the white logo and use a darker fill).
- Nav links on the right: About, Client Services, Partners, Impact Stories, Work with Us.
- "Work with Us" should be visually emphasized as a primary CTA — a pill button with `--purple-dark` fill and `--paper` text on the transparent state; inverts to `--purple-dark` outline + fill on scroll-fill. Use design judgment.
- No hamburger menu for desktop — horizontal nav. Mobile: hamburger menu slides in from the right with a `--purple-dark` overlay panel.
- Font: Public Sans 500, `--text-sm`, generous letter-spacing.

### Hero Section
- Full-bleed hero image from `/public/images/` — choose the most evocative editorial image available. Apply a subtle dark overlay (linear gradient from transparent at top to ~30% `--ink` at bottom — actually no gradient per brand rules; use a flat semi-transparent overlay panel instead, e.g., `background: rgba(44,47,61,0.35)`).
- Centered or left-aligned content (use design judgment based on the image's composition):
  - Eyebrow label in `--paper`, `--text-xs`, uppercase, letter-spaced: "Pro Bono Consulting at Georgetown"
  - Large display headline in Public Sans Light, `--text-3xl` or `--text-4xl`, `--paper`. Draft something evocative — not just a tagline. Examples: *"Consulting in service of the communities we live in."* or *"Local impact, built to last."* — pick what feels right.
  - One-line sub in Public Sans Regular, `--text-md`, `--paper` at ~85% opacity.
  - No CTA button in the hero — let the page tell its story. The "Work with Us" CTA in the navbar carries the action.
- Subtle scroll indicator at the bottom — thin vertical line in `--paper` with a slow loop animation, or a small "scroll" label with a chevron. Restrained.

### Section 1 — Who We Are
- Background: `--paper`
- Two-column editorial layout: left column has an eyebrow label ("Who We Are") and the Who We Are copy verbatim from the brand identity above. Right column has either a secondary image or pull quote, OR negative space — design judgment.
- Headline above the copy in Public Sans Light, `--text-xl`, `--ink`. Body in Regular, `--text-base`, `--ink` at slightly reduced opacity (e.g., 80%).
- This is the first content the visitor reads — make it feel like the opening line of a serious profile, not a club blurb.

### Section 2 — What We Do (Client Services preview)
- Background: `--purple-dark` (text: `--paper`)
- Eyebrow label: "What We Do"
- Short headline introducing the services in Public Sans Light, `--text-xl`.
- 3 or 4 service area cards in a row (use design judgment on count based on real service areas — if unknown, use placeholders: Operations, Strategy, Marketing & Outreach, Data & Analytics). Each card:
  - A Lucide icon stroke in `--purple-light`, small
  - Service name in Public Sans Medium, `--text-md`, `--paper`
  - One-line description in Regular, `--text-sm`, `--paper` at 75% opacity
  - Subtle hover: slight upward translate (`-2px`) + thin `--purple-light` bottom border slides in left-to-right
- Below the row: a small "Explore our services →" link in `--purple-light` Public Sans Medium that routes to `/services`.
- **Mark service area copy clearly** with a `<!-- TODO: confirm service areas with user -->` comment.

### Section 3 — Who We Serve
- Background: `--paper`
- Same editorial two-column treatment as Section 1, mirrored. Left column: secondary imagery or pull quote. Right column: eyebrow ("Who We Serve") + Who We Serve copy verbatim.
- Below the columns, full-width: a quiet stat row using the `AnimatedNumber` component (see Custom Components). Three stats with large display numbers and small labels beneath. Use placeholders clearly marked TODO:
  - `25+` Nonprofit Partners
  - `100+` Student Consultants
  - `4` Years Serving the DMV
- Numbers in Public Sans Light, `--text-3xl`, `--purple-dark`. Labels in Regular, `--text-sm`, `--ink` at 70% opacity, uppercase eyebrow style.

### Section 4 — Partners Strip
- Background: `--ink` (a dramatic dark band)
- Eyebrow label in `--purple-light`: "Our Partners"
- Single-row logo strip of partner nonprofit logos (pulled from `/public/logos/partners/`). Logos rendered in a uniform muted treatment — e.g., `--paper` color with reduced opacity (60-70%), each in a consistent height container, evenly spaced.
- Subtle horizontal scroll/marquee on mobile if logos don't fit; static grid on desktop.
- Below: small link "Meet our partners →" in `--purple-light` routing to `/partners`.

### Section 5 — Impact Teaser
- Background: `--paper`
- Eyebrow: "Impact"
- Short headline: something like *"The work doesn't end when we do."*
- 1 or 2 featured impact story cards. Each card:
  - Image (from `/public/images/`) — 4:3 or 3:2 ratio, full-bleed within the card
  - Partner name as eyebrow label
  - Story headline in Public Sans Light, `--text-md`, `--ink`
  - One-line teaser in Regular, `--text-sm`, `--ink` at 75%
  - "Read the story →" link in `--purple-mid`
- Below the cards: "See all impact stories →" link routing to `/impact`.

### Section 6 — Dual CTA
- Background: `--purple-dark`
- Split into two side-by-side panels (stack vertically on mobile):
  - **Left:** "Are you a student?" — Public Sans Light, `--text-xl`, `--paper`. Short blurb in Regular `--text-base`. CTA button: "Apply to DCivitas" — `--paper` fill, `--purple-dark` text, pill. Routes to `/work-with-us/students`.
  - **Right:** "Are you a nonprofit?" — Same treatment. CTA: "Partner with us" — outlined button, `--paper` border and text, transparent fill. Routes to `/work-with-us/nonprofits`.
- A thin vertical divider in `--purple-mid` between panels on desktop.

### Footer
- Background: `--ink`
- Top of footer: large DCivitas wordmark/logo in `--paper`, left-aligned.
- Multi-column layout:
  - Column 1: Logo + one-line mission (Regular, `--text-sm`, `--paper` 70%)
  - Column 2: About (links to Mission, Team, Where We Go)
  - Column 3: Engage (Client Services, Partners, Impact Stories, Work with Us)
  - Column 4: Connect (email placeholder, Instagram placeholder, LinkedIn placeholder — TODO comments)
- Bottom strip: `© 2026 DCivitas. Georgetown University.` in Public Sans Regular, `--text-xs`, `--paper` 60%. Small "Made with care in Washington, D.C." line in italic on the right.
- All filler/secondary nav content should be wrapped in `<!-- TODO: confirm footer content -->` comments.

---

## Interaction & Motion Principles

These complement the frontend-design skill's motion guidelines — defer to the skill on questions of timing, easing, and craft.

- **Scroll-triggered fade-ins** — every major section and key sub-element fades up on scroll into view. Use the reusable `<FadeIn>` component. Default: 16px upward translate, 600ms ease-out, triggered when 30% in view. Use `once: true` so animations don't replay on scroll-back.
- **Stagger child fades** — when a section has multiple elements (e.g., 3 service cards), stagger their fade-ins by ~80–120ms each. The eye should feel the rhythm.
- **Navbar fill transition** — 200ms ease, transparent → `--paper` background, color shifts on links from `--paper` → `--ink`.
- **Card hover states** — subtle, never aggressive. A `-2px` upward translate + a thin colored bottom border that slides in from left to right is the house style. 140ms ease. No box-shadow puffiness.
- **Button hover** — primary buttons darken slightly (e.g., `--purple-dark` button on hover shifts to a slightly deeper tint, or gains a thin `--purple-light` ring). Active state: `scale(0.98)`. 120ms.
- **Focus states** — 2px `--purple-mid` outline with 2px offset on all interactive elements. Never remove focus outlines.
- **AnimatedNumber** — see Custom Components below. Numbers count up from 0 to target when scrolled into view.

Use design judgment for everything not specified — keep micro-interactions restrained. No bouncy springs, no over-eager animations. This is a consulting firm, not a marketing landing page from 2014.

---

## Custom Components

### `<AnimatedNumber>` — Scroll-Triggered Counter

Converted from a Framer Motion component. Place at `components/AnimatedNumber.tsx`.

```tsx
"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedNumberProps {
  start?: number;
  end: number;
  decimals?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedNumber({
  start = 0,
  end,
  decimals = 0,
  className,
  suffix = "",
  prefix = "",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const value = useMotionValue(start);
  const spring = useSpring(value, { damping: 30, stiffness: 100 });
  const display = useTransform(spring, (num) => {
    const n = Number(num);
    const fixed = n.toFixed(decimals);
    return n >= 1000 ? Number(fixed).toLocaleString() : fixed;
  });

  useEffect(() => {
    value.set(isInView ? end : start);
  }, [start, end, isInView, value]);

  return (
    <span ref={ref} className={className} style={{ display: "inline-block" }}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
```

**Usage example:**
```tsx
<AnimatedNumber end={25} suffix="+" className="text-6xl font-light text-[var(--purple-dark)]" />
```

### `<FadeIn>` — Reusable Scroll Fade Wrapper

```tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
```

---

## Design Principles

1. **Whitespace is professionalism.** Don't crowd elements. Sections should breathe.
2. **Light Public Sans is the brand voice.** Display headlines in 300 weight at large sizes — that's the signature look.
3. **Restraint with purple.** Most of the page is paper and ink with purple-dark anchoring key sections. Mid and light purples are punctuation, not paragraphs.
4. **Editorial, not marketing.** Treat the site like a profile in a serious publication. Quiet confidence, no exclamation points, no salesy language.
5. **Mobile-first.** Every component must degrade gracefully. Test at 375px, 768px, 1024px, 1440px.
6. **No lorem ipsum in visible sections.** Use the verbatim Who We Are / Who We Serve copy where specified. For other filler, write plausible placeholder copy and mark it with `<!-- TODO: refine copy -->`.
7. **Always real assets.** Pull from `/public/` — never external stock or placeholder URLs.

---

## Always Do
- Light surfaces are `--paper`, never pure white. Dark surfaces are `--purple-dark` or `--ink`, never pure black.
- Build responsively from the start.
- Every interactive element has a hover state, focus state, and active state.
- Maintain WCAG AA contrast ratios. `--ink` on `--paper` passes. `--paper` on `--purple-dark` passes. Verify edge cases (especially mid-purple text on paper).
- Use semantic HTML — `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Set up route stubs for all listed pages in Phase 1 so the navbar works end-to-end.
- Use the `<FadeIn>` wrapper for every meaningful content block on the landing page.

## Never Do
- No gradients of any kind.
- No pure black or pure white.
- No additional purple shades beyond the three defined — if more variation is needed, use opacity, not new hex codes.
- No fonts other than Public Sans.
- No box-shadow puffiness on cards. Subtle borders and translates only.
- No emoji or icon overload — Lucide icons are used sparingly, as accents.
- No "AI startup" aesthetic clichés — no frosted glass, no neon glows, no purple gradient blobs, no animated mesh backgrounds.
- No generic SaaS components — every card, button, and section should feel considered.
- No external dependencies introduced without flagging first.
- No content that wasn't provided or clearly marked as TODO placeholder.

---

## How to Operate

1. **Read the frontend-design skill in full before writing any code.** Apply its principles throughout.
2. **Confirm the plan before building.** This is a Phase 1 build — produce a plan first, get approval, then execute.
3. **Build one section at a time.** Get the navbar working, then hero, then each section in order. Confirm visually before moving on.
4. **Run `npm run dev` locally** — the user will refine on localhost before any commit reaches Vercel.
5. **Label all placeholder content** with `<!-- TODO: ... -->` comments so nothing gets missed.
6. **Test responsiveness at every step** — mobile, tablet, desktop.
7. **Ask before making structural decisions** — if anything in this brief is ambiguous, ask rather than assume.
8. **Never assume an asset exists** — if a logo, image, or font weight is missing, ask the user.
