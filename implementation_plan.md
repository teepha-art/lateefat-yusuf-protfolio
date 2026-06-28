# Portfolio Build — Implementation Plan

## Goal

Build Teepha's portfolio as a clean, static, multi-page site. White/black/gray palette, Satoshi font, restrained motion, mobile-first responsive. One landing page with 6 sections + 3 case-study pages sharing a single template.

---

## Technology Decision

> [!IMPORTANT]
> **Vanilla HTML + CSS + JS — no framework.** This is a static portfolio with no dynamic data, no auth, no API. A framework would add unnecessary complexity. We get instant load times, zero build step during dev, and total control over every pixel.

We'll use **Live Server** (VS Code extension or `npx live-server`) for local development.

---

## File Structure

```
Teepha/
├── index.html                    ← Landing page
├── work/
│   ├── sitelog.html              ← Case study
│   ├── paylio.html               ← Case study
│   └── mailmint.html             ← Case study
├── tokens.css                    ← Design tokens (exists, untouched)
├── styles/
│   ├── global.css                ← Resets, base, shared component styles
│   ├── nav.css                   ← Nav + hamburger
│   ├── hero.css                  ← Hero carousel + sliding phones
│   ├── about.css                 ← About section
│   ├── work.css                  ← Work section project blocks
│   ├── contact.css               ← Contact chat block
│   ├── footer.css                ← Footer
│   └── case-study.css            ← Case-study page template
├── js/
│   ├── nav.js                    ← Hamburger toggle
│   ├── hero.js                   ← Auto-cycling hero carousel
│   ├── scroll-reveal.js          ← Fade-up on scroll (IntersectionObserver)
│   └── contact.js                ← Contact form → mailto
├── public/
│   ├── hero/                     ← Hero images (landscape 16:10 + phone PNGs)
│   ├── about/                    ← headshot.png
│   └── work/                     ← Per-project covers + case-study screenshots
│       ├── sitelog/
│       ├── paylio/
│       └── mailmint/
└── build-spec.md                 ← Reference (exists)
```

> [!NOTE]
> CSS is split per-component for maintainability. Every file imports `tokens.css` variables — no hardcoded colors, font sizes, or spacing values anywhere.

---

## Component Breakdown

### 1. Nav
| Detail | Value |
|---|---|
| Left | Wordmark **"Teepha."** — 24px, weight 900, dot in `var(--accent)` |
| Right (desktop) | Text links: Work · About · Contact — anchor links |
| Mobile (≤680px) | Hamburger → white dropdown, rounded, hairline `var(--line)` border, icon morphs ☰↔✕ |
| Sticky? | No (spec doesn't require it). Simple top bar. |
| JS needed | `nav.js` — toggle `.is-open` class on the mobile menu |

### 2. Hero Carousel
| Detail | Value |
|---|---|
| Scenes | 4 total, auto-cycling every ~3.6s, 0.7s crossfade |
| Scene 1 | Single landscape image — `width:100%; height:74vh; object-fit:cover` — full bleed, NO border/radius/shadow |
| Scene 2 | 4 phone mockup PNGs cascading in (stagger: 0.10s / 0.42s / 0.74s / 1.06s). `height:58vh; object-fit:contain` + soft shadow. Mobile: show 2 phones only |
| Scene 3 | Single landscape image — same rules as Scene 1 |
| Scene 4 | Laptop/desktop shot — same rules as Scene 1 |
| No progress dots | No captions. Just visuals. |
| JS needed | `hero.js` — cycle active scene index, manage crossfade classes, trigger phone cascade animation on Scene 2 entry |
| Reduced motion | Show Scene 1 static, no auto-cycle |

### 3. Tagline
- Left-aligned inside `.container`
- `.t-display` class, weight 900
- "Designed, built, and shipped — **end to end.**" with "end to end." in `.accent`
- `max-width: ~14ch` to force 2–3 line wrap

### 4. About Section (`#about`)
| Sub-element | Notes |
|---|---|
| Layout | Side-by-side (image left, text right), `gap: 64px`, vertically centered. Stacks at ≤820px |
| Image | `public/about/headshot.png`, max-width ~390px, `border-radius: var(--r-img)`, no shadow |
| Eyebrow | `.t-label` — "ABOUT" |
| Name heading | `.t-h2` — "Lateefat B. Yusuf" |
| Body copy | `.t-body` — two paragraphs from spec |
| Stat block | `.t-stat` for "1+", bold label "Years designing", small description underneath, hairline divider below |
| Project pills | `.pill` class (already in tokens.css) — SiteLog · Paylio · MailMint |
| Later enhancement | Encrypt-to-photo reveal on scroll (deferred — build plain image first) |

### 5. Work Section (`#work`)
| Sub-element | Notes |
|---|---|
| Section header | `.t-label` eyebrow "SELECTED WORK" + one short line `.t-body` |
| Project blocks | 3 stacked vertically, generous white space between |
| Per block — top | Large product visual(s), `border-radius: var(--r-img)` |
| Per block — title | `.t-h3` project name |
| Per block — description | One-line `.t-body` |
| Per block — meta row | Grid of small uppercase labels (YEAR, ROLE, PLATFORM, VIEW, KEY METRIC) with values below. Labels use `.t-label`, values use `.t-meta` |
| Per block — bullets | "Key decision / contribution" + "Outcome" — short bullet lists |
| Per block — CTA | "View case study →" link, right-aligned |

This is the most complex section. The layout mirrors the [mchubina.ru](https://mchubina.ru/) project blocks: image on top, structured meta below, breathing room everywhere.

### 6. Contact Section (`#contact`)
| Sub-element | Notes |
|---|---|
| Layout | Chat-style block — small avatar, friendly prompt text, text input + send button |
| Behavior | On submit → `mailto:` with pre-filled subject/body (no backend) |
| Fallback | Direct click-to-email link nearby |
| Tagline | "Open to product roles, contract, and partnerships — remote-first." |

### 7. Footer
- Wordmark "Teepha."
- Email link
- Social links: LinkedIn, X (icons or text)
- © 2026

### 8. Case-Study Page Template
One HTML template reused across 3 pages (`/work/sitelog.html`, etc.). Same nav + footer. Content sections in order:

1. **Back link** — "← Back to work" → `index.html#work`
2. **Header block** — eyebrow (project name), H2 one-liner, meta row (year · role · platform · live link button)
3. **Hero image** — large cover, full-bleed or 16:10
4. **Problem** — heading + 1–2 paragraphs
5. **My role** — heading + 1 paragraph
6. **Key decision** — the centerpiece, visually heavier (pulled quote / larger text)
7. **What I built** — 3–5 short feature lines, optionally with images
8. **Stack** — clean line of tech
9. **Outcome / status** — heading + live link + what's next
10. **Next project** — link to next case study (SiteLog→Paylio→MailMint→SiteLog)

---

## Motion Strategy

| What | How |
|---|---|
| Hero crossfade | CSS `opacity` transition 0.7s, JS toggles `.is-active` class |
| Phone cascade | CSS `@keyframes` for translate + scale, staggered via `animation-delay` |
| Scroll reveal | `IntersectionObserver` in `scroll-reveal.js` — adds `.is-visible` class → CSS `opacity 0→1 + translateY(24px→0)` over 0.5s |
| Hover states | Links: `color` darkens. Pills/buttons: slight `translateY(-2px)` lift |
| `prefers-reduced-motion` | Already handled in tokens.css — kills all animation/transition. Hero shows Scene 1 static. |

---

## Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| ≤900px | About section stacks vertically, hero scales down |
| ≤820px | About image goes full-width above text |
| ≤680px | Nav links → hamburger menu |
| ≤560px | Phone scene shows 2 phones (not 4). `--pad-x` → 24px (already in tokens.css). Section padding reduces to 56–72px |
| Test at 390px | Ensure nothing breaks at narrow phone width |

---

## Build Order (7 Phases)

### Phase 1 — Skeleton & Global Styles
- [ ] Create folder structure (`styles/`, `js/`, `work/`, `public/` subdirectories)
- [ ] Create `styles/global.css` — import tokens.css, set up section padding utilities, link styles, smooth scroll
- [ ] Create `index.html` with all section `<div>`s as empty shells with correct IDs
- [ ] Load Satoshi font via `<link>` in `<head>`
- [ ] Verify tokens.css is connected and working

### Phase 2 — Nav + Footer (shared across all pages)
- [ ] Build Nav HTML + `styles/nav.css` (desktop layout)
- [ ] Build mobile hamburger + `js/nav.js`
- [ ] Build Footer HTML + `styles/footer.css`
- [ ] Verify on desktop and mobile widths

### Phase 3 — Hero Carousel
- [ ] Build hero HTML structure (4 scene containers)
- [ ] `styles/hero.css` — full-bleed images, phone layout, crossfade transitions
- [ ] `js/hero.js` — auto-cycle logic, phone cascade trigger
- [ ] Use placeholder images initially (solid gray or generated)
- [ ] Test cycling, crossfade timing, reduced-motion fallback

### Phase 4 — Tagline + About Section
- [ ] Build tagline block with `.t-display` and `.accent` span
- [ ] Build About section HTML (image + text side-by-side)
- [ ] `styles/about.css` — flexbox layout, stat block, pill row, stacking breakpoint
- [ ] Use placeholder headshot until real asset exists
- [ ] Test responsive stacking at ≤820px

### Phase 5 — Work Section (the core)
- [ ] Build section header (eyebrow + intro line)
- [ ] Build first project block (SiteLog) with full structure: visual, title, meta grid, bullets, CTA
- [ ] `styles/work.css` — image area, meta grid, bullet styling, spacing
- [ ] Duplicate structure for Paylio and MailMint with their content
- [ ] Use placeholder project images
- [ ] Test layout at all breakpoints

### Phase 6 — Contact Section
- [ ] Build chat-style UI (avatar, prompt, input, send button)
- [ ] `styles/contact.css`
- [ ] `js/contact.js` — form submit → mailto
- [ ] Add direct email link + availability tagline
- [ ] Test form submission

### Phase 7 — Case-Study Pages
- [ ] Create `work/sitelog.html` with the full template (all 10 sections)
- [ ] `styles/case-study.css` — back link, header block, content sections, "key decision" emphasis, next-project link
- [ ] Duplicate for `paylio.html` and `mailmint.html` with respective content
- [ ] Wire up all "View case study →" links from landing page
- [ ] Wire up "Next project →" links between case studies
- [ ] Use placeholder images for covers and screenshots

### Post-Build Polish
- [ ] Scroll-reveal animation (`js/scroll-reveal.js`) applied to all sections
- [ ] SEO: proper `<title>`, `<meta description>`, heading hierarchy, semantic HTML
- [ ] Accessibility pass: alt text, focus states, AA contrast check
- [ ] Final responsive test at 390px, 560px, 680px, 820px, 900px, 1440px
- [ ] Replace all placeholder images with real assets

---

## Open Questions

> [!IMPORTANT]
> **Image assets** — Do you have the hero images (3 landscape shots + 4 phone mockup PNGs), your headshot, and project screenshots ready? Or should I generate placeholder images for now and you'll swap them in later?

> [!IMPORTANT]
> **Live project links** — Do SiteLog and Paylio have live URLs to link to in the meta rows and case-study pages?

> [!IMPORTANT]
> **Case-study copy** — The spec says the 7 content blocks for each project "already exist as written copy." Do you have those ready to paste in, or should I draft them from the summaries in the spec?

> [!NOTE]
> **Deployment** — Any preference on where this gets deployed? (Vercel, Netlify, GitHub Pages, etc.) This doesn't affect the build but I'll structure accordingly if you have a preference.

> [!NOTE]
> **Contact email** — What email address should the contact form `mailto:` point to?
