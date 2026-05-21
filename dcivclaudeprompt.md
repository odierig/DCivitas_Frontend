We're building the DCivitas website — the official site for an undergraduate pro bono consulting club at Georgetown that serves DMV-area nonprofits. The full project brief lives in CLAUDE.md at the root of this project folder. **Read it in full before doing anything else.**

Before writing any code or planning, also read and internalize the **frontend-design skill** — it governs how to execute this site with real design craft (motion, spatial composition, typography rhythm, restraint). The CLAUDE.md design system is the source of truth for what (colors, type, tokens, copy); the frontend-design skill is the source of truth for how (execution quality, taste, polish).

We are in **Phase 1: the landing page only**. The other pages listed in CLAUDE.md should exist as route stubs so the navbar functions end-to-end, but only the landing page is being built out for now.

**For this plan, please produce:**

1. The full Next.js 15 (App Router) + TypeScript + Tailwind setup steps, including:
   - `next/font/local` configuration for Public Sans loaded from `/public/fonts/`
   - `globals.css` with the design tokens from CLAUDE.md as CSS custom properties
   - `tailwind.config.ts` extending the theme with those tokens
   - Any other foundational config

2. The component architecture for Phase 1 — which components you'll build, in what order, and what each is responsible for. Include the `AnimatedNumber` and `FadeIn` components specified in CLAUDE.md.

3. The landing page section-by-section build plan, in the order specified in CLAUDE.md (Navbar → Hero → Who We Are → What We Do → Who We Serve + Stats → Partners Strip → Impact Teaser → Dual CTA → Footer). For each section, briefly describe how you'll execute it given the design system and the frontend-design skill's guidance.

4. The route stubs you'll create for the other pages so the navbar works.

5. Any open questions or asset gaps — e.g., font weights or images you need from me before you can build a specific section.

**Important constraints:**

- I'll be running `npm run dev` locally to refine before any commit reaches Vercel — build with that in mind, no deploy assumptions.
- Don't introduce dependencies beyond what's listed in CLAUDE.md without flagging first.
- This needs to look like a real consulting firm, not a student club. Restraint, whitespace, editorial typography. Public Sans Light at large sizes is the signature look.
- No gradients, no pure black/white, no AI-startup aesthetic clichés.
- All real copy I provided in CLAUDE.md ("Who We Are," "Who We Serve") must be used verbatim. Other copy can be plausible placeholder, clearly marked with `<!-- TODO -->`.

Present the plan and wait for my approval before writing any code.
