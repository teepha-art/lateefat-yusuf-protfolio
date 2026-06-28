# Case Study Copy — paste into each case-study page

Three projects. Each has the seven content blocks for its case-study page.
Order on site: SiteLog → Paylio → MailMint.

---

## SITELOG  (/work/sitelog)

**1. One-liner**
SiteLog is a B2B site-reporting app that gives small construction firms one place to track daily reports, issues, and material requests — built for teams priced out of enterprise tools like Procore.

**2. Problem**
Small construction firms can't afford or justify enterprise project tools, so they run their sites on phone calls, WhatsApp, and paper. The result: issues surface too late, material requests get lost, and when something goes wrong there's no reliable record of what happened on site — or who's accountable.

**3. My role**
Designed the UX/UI and built the entire app full-stack, solo, and deployed it to production. I owned the whole product — concept, product decisions, design, development, and launch.

**4. Key decision (centerpiece)**
Mid-build, I realized the app had no concept of separate organizations — every Project Manager could see every supervisor in the system, including people from other companies. I spotted this multi-tenancy gap and designed an invite-code system: each PM gets a unique code, supervisors join a specific PM's team using that code, and each company's data stays isolated. This turned a single-org demo into a genuine multi-company B2B product.

**5. What I built**
- Role-based dual experience — a mobile-first field interface for Site Supervisors and a desktop oversight dashboard for Project Managers
- Invite-code multi-tenancy — PMs invite and manage their own team, with per-company data isolation, plus remove and re-join flows with access control
- Core site workflows — daily reports, issue tracking, and material requests, with image uploads
- Secure authentication — hashed passwords, sessions, and email-based password reset

**6. Stack**
Next.js, TypeScript, Prisma, PostgreSQL, deployed on Vercel + Neon, with a custom CSS-Modules design system.

**7. Outcome / status**
Live at sitelog-sage.vercel.app. Currently shared with construction professionals for real-world feedback.

---

## PAYLIO  (/work/paylio)

**1. One-liner**
Paylio turns a product into a shareable payment link, so WhatsApp and Instagram sellers in Nigeria can sell and get paid without a full online store.

**2. Problem**
Social-commerce sellers in Nigeria do business in DMs — but closing the sale is clumsy. Buyers ask for account numbers, sellers chase confirmations manually, and there's no clean checkout or record of the transaction. Selling is social; getting paid isn't.

**3. My role**
Designed the UX/UI and built the full product solo, end-to-end — concept, product decisions, design, full-stack build, and live deployment.

**4. Key decision (centerpiece)**
Choosing a link-first model over a storefront. The obvious move was to build a mini-store with a catalog and a checkout. I went the other way. Nigerian social-commerce sellers don't need another place to sell — they already sell in WhatsApp chats, Instagram DMs, bios, and stories. What they don't have is a clean way to close the sale. A storefront would have forced them to migrate their entire workflow into a new app. A link meets them exactly where they already are. So I built Paylio around a single primitive: one product equals one link. A seller creates a product, gets a link, drops it in a DM, and the buyer pays. That decision rewrote everything else — the dashboard became an inbox for sales instead of a storefront admin, onboarding had to get a seller to their first link in under 60 seconds, and the checkout page had to feel instant and mobile-first.

**5. What I built**
- Link-based selling — turn any product into a shareable payment link that works in a DM or bio
- Real checkout + payments — full Flutterwave integration with webhook verification (test environment)
- Seller dashboard — manage products and track transactions, with light/dark mode
- Low-friction onboarding — two-step signup and three-step onboarding to get sellers live fast
- Transactional receipt emails — automated confirmations via Resend/Nodemailer

**6. Stack**
Next.js 15, TypeScript, Prisma, PostgreSQL (Neon), NextAuth, Flutterwave payments, Resend/Nodemailer, Vercel Blob, custom CSS-Modules design system.

**7. Outcome / status**
A complete end-to-end fintech build — real auth, full Flutterwave integration with webhook verification, and a working seller dashboard. Demonstrates a full payment flow from product to shareable link to checkout.

---

## MAILMINT  (/work/mailmint)

**1. One-liner**
MailMint is an AI-powered email sequence generation platform that helps founders, coaches, consultants, and businesses create structured, conversion-focused cold email campaigns in minutes.

**2. Problem**
Many professionals know they need outbound email marketing but struggle with what to write after the first email. Creating effective follow-up sequences is time-consuming, inconsistent, and often results in abandoned outreach efforts. The challenge was to help users quickly generate structured email sequences without staring at a blank page or spending hours writing emails manually.

**3. My role**
Product Designer & Product Builder. I contributed across product strategy, UX design, product documentation, feature planning, implementation planning, testing, iteration, and dashboard experience design. I was one of the core contributors responsible for helping move the product from concept to a functional MVP.

**4. Key decision (centerpiece)**
The biggest challenge wasn't generating emails with AI — it was collecting enough context to generate useful outputs without overwhelming users with a complicated setup process. Many AI writing tools ask for too little information and produce generic content, while others ask for so much that users abandon the process before generating anything. I helped shape a streamlined input experience that balanced both sides: collecting key campaign details while keeping the workflow simple enough for users to move from idea to generated sequence quickly. This decision influenced the product structure, which is why the experience centered on generation first rather than forcing users through multiple setup and configuration steps before seeing value.

**5. What I built**
- AI email sequence generation experience — structuring the workflow from campaign input to generated email output
- Dashboard and email workspace — where users generate, review, and manage email sequences
- Drafts and Templates/Library system — preserving unfinished work and organizing generated sequences
- Product documentation, PRDs, user flows, and implementation planning that guided the build
- Testing, usability refinement, feature iteration, and Git-based collaboration throughout development

**6. Stack**
Figma, React, TypeScript, Supabase, deployed on Vercel. Built with Antigravity (AI-assisted development) and Git/GitHub collaboration. Product work: PRDs, user flows, UX design.

**7. Outcome / status**
Delivered a functional MVP and presented it live during the Product Builder Bootcamp, taking the product from concept to a working solution ready for demonstration and validation.