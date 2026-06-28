# Portfolio Build Spec — Lateefat B. Yusuf ("Teepha")

---

## 0. CONTEXT (do not print on page verbatim)

Full-stack product designer who designs **and** ships products end to end, solo, with AI leverage. Three real projects:
- **SiteLog** — B2B site-reporting app for small construction firms; multi-tenant, role-based (Project Managers + Site Supervisors), mobile + desktop. Built full-stack solo.
- **Paylio** — link-based payment tool for social-commerce sellers (WhatsApp/Instagram) in Nigeria. Built full-stack solo.
- **MailMint** — AI-powered email-sequence platform. Team project; show product thinking + AI work.

Tone: confident, plain, human. Not corporate, not buzzwordy.

---

## 1. DESIGN SYSTEM (tokens) — in tokens.css

Color is **white / black / gray ONLY**. No brown, no colored accents.
```
--bg:#FFFFFF;  --bg-subtle:#F6F6F6;  --ink:#121212;
--ink-soft:#5B5B5B;  --accent:#6B6B6B;  --line:#E6E6E6;
```
Spacing scale (px): 4 8 12 16 24 32 48 64 96 128.
Section vertical padding: desktop 96–128, mobile 56–72.
Max content width 1200px, centered, 40px side padding (24px mobile).
Radius: images/cards 14px; pills & buttons 100px.
Shadow: soft only `0 30px 60px -24px rgba(18,18,18,.18)`; most elements sit flat on white.

---

## 2. TYPOGRAPHY — Satoshi (Fontshare), see tokens.css

| Role | Size clamp | Weight | Tracking | LH |
|---|---|---|---|---|
| Display (hero tagline) | clamp(34px,6vw,92px) | 900 | -0.035em | 1.0 |
| H2 section heading | clamp(28px,3.6vw,46px) | 900 | -0.03em | 1.06 |
| H3 project title | clamp(22px,2.4vw,32px) | 700 | -0.02em | 1.1 |
| Big stat number | clamp(40px,5vw,58px) | 900 | -0.03em | 1.0 |
| Body | clamp(16px,1.2vw,18px) | 400 | 0 | 1.62 |
| Label/eyebrow | 13px | 700 | 0.12em UPPER | 1 |
| Pill/meta | 13–14px | 600–700 | 0.02em | 1 |

Highlighted words in a heading use `color:var(--accent)` (gray).

---

## 3. LANDING PAGE — sections top to bottom

### 3.1 NAV
- Left: wordmark **"Teepha."** — bold, 24px, weight 900, the dot in `--accent` gray.
- Right (desktop): text links **Work · About · Contact**, anchor-linked to the sections.
- Mobile (≤680px): links collapse into a **hamburger** opening a clean white rounded dropdown with hairline border; icon morphs to X when open.
- Padding 24px vertical, 40px sides.

### 3.2 HERO — full-bleed product showcase, NO container/box/frame
The products ARE the hero, large, filling the area. No border, no card, no box around visuals.
An auto-cycling loop of **4 scenes**, each held ~3.6s, crossfading (0.7s):

1. **Single image** — one large landscape product shot filling the hero width edge-to-edge.
2. **Sliding phones** — four clean phone mockups (device is part of the PNG on transparent/white bg, NOT a drawn frame). They **cascade in one after another**: each starts shifted ~90px toward the previous phone and slightly scaled down (.96), then settles into place. Delays ~0.10s / 0.42s / 0.74s / 1.06s. Phones ~58vh tall, ~26px gap. On mobile show only 2 of the 4.
3. **Single image** — another large landscape product shot, full-bleed.
4. **Single image** — a laptop/desktop product shot, full-bleed.

No progress dots, no captions/labels. Just the visuals cycling.

**Image rules (critical):**
- Single-image scenes: `width:100%; height:74vh; object-fit:cover;` — fills hero fully. **No rounded box, no shadow, no inset.** The image itself is the hero, edge to edge, same on mobile.
- Use **landscape 16:10 images** (e.g. 1600×1000) for single scenes so they fill width cleanly.
- Sliding phones: `height:58vh; width:auto; object-fit:contain;` + soft drop-shadow only.

### 3.3 TAGLINE (below hero)
One large left-aligned line in the 1200px container:
> **Designed, built, and shipped — end to end.**
"end to end." in `--accent` gray. Display size, weight 900, max-width ~14ch (wraps to 2–3 lines).

### 3.4 ABOUT SECTION  (anchor #about)
Side by side: **image left / text right**, vertically centered, 1200px container, ~64px gap. Stacks on mobile (≤820px).

- **Left:** headshot `public/about/headshot.png`, max-width ~390px, radius 14px, sitting on white — no heavy frame, minimal/no shadow.
  - *Later enhancement (build plain first):* an **encrypt-to-photo reveal** — the image first renders as scrambled monospace code characters, then resolves into the real photo when the section scrolls into view (auto, once). Must be **light-mode**: dark characters on light background resolving to the photo.
- **Right, in order:**
  1. Eyebrow label "ABOUT".
  2. Heading: **Lateefat B. Yusuf** (name only, no tagline).
  3. Two short, human paragraphs (copy below).
  4. **Experience stat:** a **big number** on its own line, a **bold label** under it, and a **small description** under that, sitting above a hairline divider. Content:
     - Number: **1+**
     - Label: **Years designing**
     - Description: "and building products end to end — design, code, and ship."
  5. **Project pills:** SiteLog · Paylio · MailMint (rounded, hairline border, white bg).

**About copy (draft — adjust freely):**
> I design products and build them too. From the first idea to a live, working app, I like seeing the whole thing through rather than handing it off halfway.
>
> Lately that's meant SiteLog for construction teams, Paylio for sellers who close deals in their DMs, and MailMint, an AI tool for writing email that doesn't sound like a robot. Different problems, same approach: keep it simple, make it real, ship it.

### 3.5 WORK SECTION  (anchor #work)  — THE CORE OF THE PAGE

**Layout reference:** https://mchubina.ru/  (the "ОПЫТ И ПРОЕКТЫ" / projects part). Replicate that project-block style, described concretely below.

Section heading: small eyebrow "SELECTED WORK" + a short line, e.g. "A few products I've built, and the thinking behind them."

Then the three projects stacked vertically — **SiteLog → Paylio → MailMint** — each as a large block. **Per-project block (this is the chosen style):**

```
+-----------------------------------------------------------------------+
|  [ product visuals: one or more screenshots/frames of the product ]   |
|                                                                       |
+-----------------------------------------------------------------------+
|  PROJECT NAME (large title)                                           |
|  One-line description of what it is.                                  |
|                                                                       |
|  YEAR        ROLE              PLATFORM        VIEW         KEY METRIC |
|  2026        Product Design    Web             Visit ↗      (e.g.)     |
|              + Full-stack                                   live       |
|  ── each label is SMALL, UPPERCASE, sitting ABOVE its value ──        |
|                                                                       |
|  Key decision / contribution:                                        |
|  • short bullet — the main judgment call or what was built            |
|  • short bullet                                                       |
|                                                                       |
|  Outcome:                                                            |
|  • short bullet — result / status / what it demonstrates             |
|                                                                       |
|                                          [ View case study → ]        |
+-----------------------------------------------------------------------+
```

**Signature of this layout (match it):**
- Product **visuals shown prominently** at the top of each block.
- A **row/grid of labeled meta** — each label is small + uppercase (YEAR, ROLE, PLATFORM, VIEW, and optionally a KEY METRIC), with its value directly beneath it. Clean columns, lots of breathing room.
- A short **"Key decision / contribution"** bullet list and a short **"Outcome"** bullet list — lead with the decision and the result, not a feature dump.
- A **"View case study →"** link to that project's page.
- Generous white space between the three project blocks.

**Per-project content:**

**SiteLog** · YEAR 2026 · ROLE Product Design + Full-stack build · PLATFORM Mobile + Desktop · VIEW (live link if available)
> One place for construction teams to track daily reports, issues, and material requests.
> Key decision: spotted mid-build that the app had no concept of separate companies — designed an invite-code multi-tenancy system that turned a single-org demo into a real multi-company B2B product.
> Outcome: live in production; shared with construction pros for feedback.

**Paylio** · YEAR 2026 · ROLE Product Design + Full-stack build · PLATFORM Web · VIEW (live link if available)
> Turns a product into a shareable payment link, so social-commerce sellers get paid without a storefront.
> Key decision: went link-first instead of building a storefront — sellers already sell in DMs, so one product = one link. That reshaped the whole product (dashboard became a sales inbox; onboarding aimed for first-link under a minute).
> Outcome: complete end-to-end build — real auth, full payment integration with webhook verification, working seller dashboard.

**MailMint** · YEAR 2026 · ROLE Product Design + Product thinking (team) · PLATFORM Web · VIEW (link if available)
> AI-powered platform that generates structured, conversion-focused cold email sequences in minutes.
> Key decision: the hard part wasn't generating email — it was collecting enough context for useful output without overwhelming the user; shaped a streamlined input so the product centers on generation first.
> Outcome: delivered and demoed a working MVP during a product builder bootcamp.

### 3.6 CONTACT SECTION  (anchor #contact)
- A warm, **chat-style** block: a small avatar + a friendly prompt ("Hey! What can I help you with?") + a text input and send button. **Built simple — on submit it composes/sends an email to the owner (mailto: or a form that emails).** No AI backend.
- Plus a **direct click-to-email** link nearby, so there are multiple easy ways to reach out.
- One line: "Open to product roles, contract, and partnerships — remote-first."

### 3.7 FOOTER
Wordmark, email, social links (LinkedIn, X; Behance/Dribbble optional), © year.

---

## 4. CASE-STUDY PAGES (one per project: /work/sitelog, /work/paylio, /work/mailmint)

Clicking "View case study" on a project opens its own page. **Each case-study page uses the same template**, filled with that project's content. Same design system, same nav/footer.

### Case-study page layout (top to bottom):

1. **Back link** — "← Back to work" (to landing #work).
2. **Header block:**
   - Eyebrow: project name.
   - H2 one-liner (what it is + who it's for).
   - Meta row: year · role · platform · (live link button if live, e.g. "Visit SiteLog ↗").
3. **Hero image** — large cover of the product (16:10 or full-bleed).
4. **Problem** — short section: heading "The problem" + 1–2 short paragraphs.
5. **My role** — heading "My role" + one short paragraph stating exactly what was owned (design, full-stack build, deploy — or for MailMint, the team-project framing).
6. **Key decision** — the centerpiece. Heading "The key decision" + 1–2 paragraphs telling the real moment of judgment (problem → the call → why it mattered). Give this section the most visual weight (maybe a pulled-out quote or larger text).
7. **What I built** — heading + 3–5 features that matter, each a short line, optionally each with a supporting image/screenshot. NOT a long feature dump.
8. **Stack** — one clean line of the tech used.
9. **Outcome / status** — heading + live link + what's next / what it demonstrates.
10. **Next project** — link to the next case study at the bottom (e.g. SiteLog → "Next: Paylio →").

Keep each section short, lots of white space, images between text blocks. Lead with thinking and decisions, not feature lists.

**The seven content blocks (problem / role / key decision / what I built / stack / outcome) already exist as written copy for all three projects — they will be pasted in per page. Build the template to receive them.**

---

## 5. MOTION
- Hero: 0.7s crossfade; sliding phones cascade as specified.
- Sections: subtle fade-up on scroll-into-view.
- Hover: links darken; pills/buttons slight lift.
- Restrained — too much motion reads as AI-generated. Respect `prefers-reduced-motion`.

## 6. RESPONSIVE
- ≤900px tablet (stack About, shrink hero), ≤680px nav→hamburger, ≤560px phone (sliding scene shows 2 phones, type scales via clamp).
- Single hero images fill full width on mobile too (no box).
- Test at 390px.

## 7. ACCESSIBILITY / QUALITY FLOOR
- Visible keyboard focus; alt text on images; AA contrast; reduced-motion disables auto-cycle/cascade (show static).

## 8. ASSETS / FOLDERS
```
public/hero/   -> hero images (landscape 16:10 for single scenes; clean phone PNGs for slide scene)
public/about/  -> headshot.png
public/work/   -> per-project cover + case-study images
```
Keep filenames stable (swappable).

---