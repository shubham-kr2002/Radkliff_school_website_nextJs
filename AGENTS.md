<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Radkliffe International — Agent Guide

A self-evolving design + engineering reference for the Radkliffe International website.
**You are expected to update this file** as you add new tokens, magical elements, or
AI anti-patterns you've learned from.

---

## 1. Project Identity

**Radkliffe International** — a premium early-childhood playschool positioning itself
as *"A Handcrafted Sanctuary of Learning."* The site is the digital front door for
parents (decision-makers) and the *experience preview* for the children who'll attend
(emotional deciders). Every visual choice has to work for both audiences.

**Tagline in the wild:** "Where Every Little Dream Finds Its Wings."
**Brand voice:** warm, handcrafted, slightly poetic, never corporate.

---

## 2. Design Philosophy — Three Pillars

1. **Magical without being chaotic.** Every effect earns its place. If a 4-year-old
   doesn't smile at it, it's too sterile. If a 40-year-old parent finds it cheesy,
   it's too much.
2. **Playschool-safe.** No dark mode, no sharp `rounded-none` cards, no scary
   motion, no fast or jarring transitions. Rounded corners ≥ 12 px on
   interactive elements.
3. **Handcrafted warmth.** Paper-cut shadows, soft pastels, gentle motion, subtle
   noise. The site should feel like a storybook page, not a SaaS landing page.

> **Tension to manage:** magical ≠ maximalist. When in doubt, subtract.

---

## 3. Color Tokens

**Rule: never introduce a new random hex. Extend the token system instead.**

All colors live as CSS custom properties in `src/app/globals.css` (lines 1–60).
Reference them by name in Tailwind via the `bg-*` / `text-*` / `border-*` utilities
already wired to those variables, **or** with `var(--color-*)` in inline styles.

| Role | Token | Hex | Notes |
|---|---|---|---|
| Primary surface | `--color-background` | `#fff8f5` | Page background, warm white |
| Primary text on bg | `--color-on-background` | `#301400` | Deep brown, never pure black |
| Surface variants | `--color-surface`, `--color-surface-container-low` | `#fff8f5`, `#fff1e9` | Layered card surfaces |
| Brand peach | `--color-brand-peach` | `#FFD6A5` | Decorative warmth |
| Brand lavender | `--color-brand-lavender` | `#DCC6FF` | Decorative magic |
| Sky / primary CTA surface | `--color-secondary-container` | `#C7E7F7` | Enquiry section, hero accents |
| Sun / highlight yellow | (literal) | `#FFF176` | CTA buttons (`Enquire Now`, `Submit Enquiry`) |
| Sun border | (literal) | `#FBC02D` | 3D button bottom border |
| Twinkle star | (literal) | `#FFE9A8` | `TwinklingStars` component |
| Confetti palette | (literal array) | `#FFD6A5 #DCC6FF #C7E7F7 #FFE9A8 #FFF1E9` | `ConfettiBurst` component |

If you need a new shade, add a `--color-brand-*` token and reference it. Do not
hardcode hex in components.

---

## 4. Typography

Three faces loaded via `next/font/google` in `src/app/layout.tsx`:

| Font | Role | CSS var | Weights |
|---|---|---|---|
| **Comfortaa** | Body copy | `--font-comfortaa` | 300, 400, 600, 700 |
| **Quicksand** | Display + labels | `--font-quicksand` | 300, 400, 500, 600, 700 |
| **Caveat** | Handwritten accents | `--font-caveat` | default |

Predefined type tokens (Tailwind utility classes):
- `font-body-md` / `font-body-lg` — Comfortaa
- `font-display-lg` / `font-display-lg-mobile` / `font-headline-md` — Quicksand
- `font-label-sm` — Quicksand, all-caps, tracking-widest

Material Symbols Outlined is loaded via `<link>` in `<head>` for icons. **Use it.**
Don't use emojis as primary decoration.

---

## 5. Animation Principles

Three non-negotiable rules:

1. **Animate `transform` and `opacity` only.** Never `width`, `height`, `top`,
   `left`, `margin`. Use `x`/`y`/`scale`/`rotate` from animejs or `translate-*`/
   `scale-*`/`rotate-*` from CSS.
2. **`prefers-reduced-motion: reduce` is mandatory.** All animejs wrappers in
   `src/lib/motion.ts` short-circuit to a no-op when the user has reduced motion
   enabled. CSS-driven loops have an override block at the bottom of
   `globals.css` that disables them.
3. **Restrained timing.** Playschool = gentle. Base durations are 600 ms or more.
   No bounce durations < 300 ms. No infinite loops faster than 2 s.

**Duration reference table** (use as defaults, vary by ±20 %):

| Element | Duration | Easing |
|---|---|---|
| Floating clouds | 45–50 s | linear |
| Flying birds (screen-cross) | 14–32 s | linear |
| Twinkling stars | 2.4–4.4 s | ease-in-out |
| Magical CTA pulse | 2.6 s | ease-in-out |
| Paper plane arc | 18–28 s | inOutQuad |
| Origami butterfly flutter | 1.8–2.4 s loop | inOutSine |
| Confetti burst | 2.6–3.6 s | outCubic |

---

## 6. Magical Elements Inventory

The site has a vocabulary of small, named "magical" effects. **Every page section
should have at least one.** When you add a new one, add a row here.

| Element | File | CSS / motion | Where it lives |
|---|---|---|---|
| Cloud | (inline) | `.floating-cloud` keyframe `cloud-move` | `page.tsx` home sky |
| Flying bird | `src/components/FlyingBirds.tsx` | `.anime-bird` + `anime-bird-flap/fly/bob` | home sky |
| Sparkle | `src/components/Sparkles.tsx` | Material Symbols `auto_awesome` + `wiggle-element` | global, via layout |
| Twinkling star | `src/components/TwinklingStars.tsx` | `.twinkle-star` keyframe `twinkle` | home sky |
| Paper plane | `src/components/PaperPlanes.tsx` | `flyAcross()` from `motion.ts` | global, via layout |
| Origami butterfly | `src/components/PaperPlanes.tsx` | `flutterLoop()` from `motion.ts` | global, via layout |
| Confetti | `src/components/ConfettiBurst.tsx` | `confettiBurst()` from `motion.ts` | `SuccessModal` on open |
| Paper swan | `src/components/PaperSwan.tsx` | `randomDrift()` from `motion.ts` + `.paper-swan-svg` keyframe `swan-bob` | `/programs` curriculum banner, `/gallery` top |
| Origami decoration (crane/heart/flower/star/boat/butterfly) | `src/components/OrigamiDecorations.tsx` | `.origami-decor` keyframe `origami-float` | section dividers on `/programs` and `/gallery` |
| Snapshot Roll (16 impt/ photos) | (inline in `src/app/gallery/page.tsx`, `SNAPSHOT_ROLL` const) | transform-only hover (`rotate-0`, `scale-105`), `washi-tape` accents on 2 cells | `/gallery` between "A World of Imagination" and "Memories" |
| Sun glow | (inline) | `.sun-glow` keyframe `pulse-glow` | home sky |
| Magical CTA pulse | (CSS class) | `.magical-glow` keyframe `magical-pulse` | `Enquire Now`, `Submit Enquiry` |
| Atmospheric noise | `body::before` (globals.css) | static SVG turbulence overlay | global, behind all content |

---

## 7. Component Architecture

```
src/
├── app/                # Next.js App Router pages and root layout
│   ├── layout.tsx      # Global mounts: Sparkles, PaperPlanes, FloatingWhatsApp
│   ├── page.tsx        # Home — uses TwinklingStars + FlyingBirds in sky
│   ├── globals.css     # Tokens, keyframes, magical-glow, noise, reduced-motion
│   └── <route>/page.tsx
├── components/         # Reusable UI; default export; PascalCase.tsx
│   ├── Sparkles.tsx
│   ├── FlyingBirds.tsx
│   ├── TwinklingStars.tsx
│   ├── PaperPlanes.tsx
│   ├── ConfettiBurst.tsx
│   ├── EnquirySection.tsx
│   ├── SuccessModal.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── DynamicGreeting.tsx
│   ├── TeachersSection.tsx
│   └── FloatingWhatsApp.tsx
└── lib/                # Framework helpers — pure TS, no JSX
    └── motion.ts       # animejs wrappers — the ONLY file that imports animejs
```

**Conventions:**
- Every component default-exports its main React component.
- `"use client"` only when the component needs browser APIs (events, refs, effects,
  window). Server components by default.
- Inline `style={...}` is fine for one-off, deterministic values (positions,
  delays). Repeated patterns → Tailwind class or CSS rule.
- Props interfaces named `<Name>Props` and exported alongside the component.
- File names: `PascalCase.tsx`. CSS class names: `kebab-case` (Tailwind-style).

---

## 8. Motion Library — `src/lib/motion.ts`

This is the **single import surface for animejs** in the project.

```ts
// ✅ Correct
import { flyAcross, flutterLoop, confettiBurst } from "@/lib/motion";

// ❌ Forbidden — components must not import animejs directly
import { animate } from "animejs";
```

**Why:** centralizing lets us enforce reduced-motion in one place, keep the API
small, and swap libraries later without touching every component.

**Wrappers currently exposed:**

| Helper | Purpose | Returns |
|---|---|---|
| `prefersReducedMotion()` | Query the media feature (SSR-safe) | `boolean` |
| `flyAcross(el, opts)` | One-shot arc with rotation (planes, leaves) | cleanup fn |
| `flutterLoop(el, opts)` | Continuous sine bob + tilt (butterflies) | cleanup fn |
| `confettiBurst(layer, origin, opts)` | Physics burst (success feedback) | cleanup fn |
| `twinkleOnce(el, opts)` | JS twinkle (rare; CSS `.twinkle-star` is preferred) | cleanup fn |
| `stagger` | re-export of animejs `stagger()` for direct use | — |

All wrappers short-circuit to a no-op when `prefersReducedMotion()` is true, so
components stay simple.

---

## 9. Recipe — Adding a New Magical Element

When you want to add a new ambient element (e.g. *floating kites*, *dragonflies*,
*autumn leaves*):

1. **Pick a name and a keyframe.** Decide on a CSS class (`.my-element`) and
   `@keyframes` (or use one of the animejs wrappers from `motion.ts`).
2. **If CSS-driven:** add the keyframe + class to `src/app/globals.css` under the
   "MAGICAL UI" section. Honor `prefers-reduced-motion`.
3. **If animejs-driven:** add a new wrapper to `src/lib/motion.ts`. Keep the API
   surface small and consistent with the existing ones.
4. **Create the component** at `src/components/<Name>.tsx`. Use inline-styled
   elements for per-instance variance (positions, delays, colors) and the
   class/CSS for shared animation behavior.
5. **Mount it** — either in `src/app/layout.tsx` (for global, every-page elements)
   or inside a specific page (e.g. `page.tsx` for hero-only).
6. **Add a row to §6 (Magical Elements Inventory).** Future agents will thank you.
7. **Verify reduced-motion** by enabling it in DevTools and reloading.

---

## 10. Recipe — Using `magical-glow` on a CTA

```tsx
// ✅ Apply to a primary conversion button:
<button className="magical-glow bg-[#FFF176] text-[#2C3333] font-bold
  px-8 py-4 rounded-full border-b-4 border-[#FBC02D] hover:-translate-y-1
  transition-transform shadow-xl">
  Enquire Now
</button>

// ❌ Don't add it to secondary CTAs, links, or non-conversion elements.
//    Glow is precious; reserve it for primary action.
```

The glow is a `box-shadow` pulse, not an outline, so it composes correctly with
the existing tactile-button `border-b-[4px]` lift.

---

## 11. AI Anti-Patterns to Avoid

A curated list of mistakes frontier models make on this project. **When you spot a
new one, append it here.**

- **Don't `import animejs` from a component** — go through `src/lib/motion.ts`.
- **Don't add new random hex codes** — extend the `--color-*` token system in
  `globals.css` instead.
- **Don't introduce `framer-motion`, `gsap`, `lenis`, or other motion libraries**
  without a discussion. The bundle stays small with animejs + CSS.
- **Don't animate `width`, `height`, `top`, `left`, `margin`, `box-shadow` on
  the hot path.** Use `transform` / `opacity` only.
- **Don't use dark mode** — there's no dark variant of the playschool palette.
- **Don't use `rounded-none` or sharp rectangular cards** — every interactive
  surface has `rounded-xl` (12 px) or higher.
- **Don't add corporate-minimalism patterns**: gray-on-gray, all-caps body text,
  tight 8-pt grids, monochrome hero blocks. The brand is handcrafted, not
  sterile.
- **Don't add fast motion** (< 300 ms transitions, infinite loops < 2 s).
  Playschool = gentle.
- **Don't use emojis as primary decoration.** Material Symbols only.
- **Don't break the `<FloatingWhatsApp />` z-index hierarchy** — it's `z-[260]`
  (below the success modal at `z-[300]`, above all content). The PaperPlanes
  layer is `z-[6]`; TwinklingStars is `z-[20]`. Keep this stack.
- **Don't ship a new magical element without updating §6.** Future agents rely
  on the inventory to know what exists.
- **Don't add a new dep without bumping the bundle audit.** A premium playschool
  site should stay under 200 KB JS for first load.
- **Don't mock or stub the form success path** to demo the confetti — wire the
  actual `SuccessModal` open state.

---

## 12. Taste Heuristics

Qualitative cues to keep design intent consistent:

- "If a 4-year-old wouldn't smile at it, it's too sterile."
- "If a 40-year-old parent would find it cheesy, it's too much."
- "Rounded corners ≥ 12 px on interactive elements."
- "Every full-page section should have at least one moving element."
- "When in doubt, subtract."
- "If the design could ship for a SaaS B2B dashboard, it's wrong here."
- "Prefer `paper-shadow` over `shadow-lg` on decorative paper-cut elements."
- "If a sparkle / star / cloud is decorative, drop opacity to 40–60 % so it
  doesn't compete with content."

---

## 13. Self-Evolution

**This file is alive.** You are expected to update it as the project evolves.

When you add a new magical element, new token, or new recipe, update the relevant
section here. When you discover a new AI anti-pattern, add it to §11. When a
duration in §5 drifts from reality, fix it. When you make a taste call that future
agents would benefit from knowing, add it to §12.

The next agent will read this and either thank you or curse you. Prefer the first.

---

## 14. Git Workflow — **every change must be pushed to GitHub**

**Rule: every meaningful piece of work is committed and pushed to the remote when
it is done. Local-only work is unfinished work.**

This is non-negotiable. The repository on `https://github.com/shubham-kr2002/Radkliff_school_website_nextJs`
is the single source of truth. If your work isn't on `origin/main`, it didn't happen.

### Branch & remote
- Default branch: `main`. Do all work here unless explicitly told otherwise.
- Remote: `origin` → `https://github.com/shubham-kr2002/Radkliff_school_website_nextJs.git`
- Never force-push to `main`. If you must rewrite history, coordinate with the user first.

### Pre-push checklist
Run these in order before every `git push`:
1. `git status` — confirm you know exactly what you're pushing.
2. **Dev server compiles** with no errors. If you can't run it, say so in the commit message.
3. **No console errors** in the running app for the pages you touched.
4. **No broken imports / dead code** left behind from the refactor.
5. **AGENTS.md is up to date** — if you added a magical element, new token, new
   recipe, or new anti-pattern, §6 / §11 / §12 reflect it. (See §13.)

If any of these fail, fix them before committing.

### Commit style — Conventional Commits
- **Format**: `<type>(<scope>): <subject>`
- **Types**:
  - `feat:` — new user-facing feature (component, page section, magical element)
  - `fix:` — bug fix
  - `chore:` — tooling, deps, config, no user-facing change
  - `refactor:` — restructure without behavior change
  - `style:` — visual / animation tweaks (this project uses it a lot)
  - `docs:` — AGENTS.md / README only
- **Scope** (optional but encouraged): `home`, `programs`, `gallery`, `enquiry`,
  `motion`, `globals`, `agents-md`
- **Subject**: imperative, lowercase, no period. ≤ 72 chars. Tell the *why*,
  not the *what* — the diff shows the what.
- **Body** (when useful): 1–3 lines of context. Reference the AGENTS.md section
  the change relates to, e.g. `Refs §6 (twinkling stars)`.
- **Don't**: vague subjects ("update", "fix stuff", "wip"), bundled unrelated
  changes in one commit, large copy-paste commits with no explanation.

### Standard workflow
```bash
# 1. Check what changed
git status
git diff --stat

# 2. Stage precisely — never `git add .` blindly
git add path/to/file1.tsx path/to/file2.tsx

# 3. Commit with a Conventional Commits message
git commit -m "feat(programs): add origami swan to curriculum banner" \
           -m "Refs §6 magical elements inventory. White paper swan drifts via randomDrift."

# 4. Push to origin/main
git push origin main
```

If a `git push` fails because the remote has commits you don't have:
1. `git fetch origin`
2. `git pull --rebase origin main` (or `git rebase origin/main` if you've
   configured `pull.rebase = true` globally)
3. Resolve any rebase conflicts
4. `git push origin main` again

If the user said "don't push yet" or "wait", respect that — but always commit
locally so the work isn't lost. State the deferral explicitly in the response.

### When the user is offline / no network
1. Commit locally with a normal message.
2. Tell the user clearly: "Work is committed locally on `main` as `<sha>`. Not
   pushed yet — please run `git push origin main` when you have network, or
   grant me push access."

### Don't
- Don't leave uncommitted work at the end of a turn. The next agent / user
  session might not have your context.
- Don't `git add .` without reviewing — you may sweep in `.env`, `node_modules/`,
  build artifacts, or stale files. The `.gitignore` should cover the big ones,
  but always skim the staged list.
- Don't use `--no-verify` or skip hooks.
- Don't write commit messages in the past tense ("Added…", "Fixed…"). Use the
  imperative ("Add…", "Fix…").
- Don't merge or rebase `main` into a feature branch without a reason. Prefer
  small, clean, linear history on `main` for this project.

---
