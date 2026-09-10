# Driving School Website Sprint — Codex Source Brief

## 1. Project Purpose

This project is a reusable, premium website template for Danish driving schools ("køreskoler").

The immediate business goal is to use the template to create highly polished, customized previews for real Danish driving schools and sell complete website rebuilds as a fixed-price service.

The product is NOT a SaaS platform in v1. It is a high-converting marketing website template that can be rapidly customized for different driving schools.

Primary commercial offer:
- Standard website sprint: 14,900 DKK
- Launch-client offer may be 9,900 DKK for the first case-study client
- Suggested payment structure: 50% upfront, 50% at launch
- Intended delivery: 3–5 working days after customer content is received

The immediate financial goal is to close a small number of high-value clients, not to maximize traffic or build a marketplace.

## 2. Target Customer

Primary target:
- Independent Danish driving schools
- Copenhagen / Zealand first
- Especially businesses with outdated websites, weak mobile experience, unclear prices, difficult signup/contact flows, no clear course-start overview, weak calls to action, or visually dated design

The customer is usually an owner/operator, not a software buyer.

They care about more student inquiries, easier enrollment, looking trustworthy and modern, fewer repetitive questions, clear pricing/course dates, simple maintenance, and fast delivery.

Do not sell "AI", "Codex", React, hosting architecture, or technical sophistication to the customer. Sell the outcome.

## 3. Demo Brand

Use a fictional brand for the master demo:

**NORD Køreskole**

Do not imitate the branding, text, logo, or layout of a specific existing driving school.

Suggested positioning:
- Tagline: "Dit kørekort. Uden bøvl."
- Primary CTA: "Reserver din plads"
- Secondary CTA: "Se priser"
- Location: København / Frederiksberg
- Sample package: Lovpakke — 12.995 kr.

All demo dates, ratings, testimonials, addresses, statistics, prices, and availability are fictional placeholders unless later replaced with verified client information.

## 4. Core User Journey

Visitor arrives → immediately understands what the driving school offers → sees price / next available course → gains trust → chooses course start → submits a signup or callback request.

The visitor should never have to hunt for price, course dates, location, phone number, or signup.

Mobile conversion is the top priority.

## 5. Required V1 Sections

### Header
- Logo / wordmark
- Navigation: Forside, Kørekort, Priser, Holdstart, Om os, Kontakt
- High-visibility CTA: "Reserver din plads"
- Mobile menu

### Hero
Must answer immediately:
1. What is this?
2. Where is it?
3. What does it cost / what is the starting offer?
4. What should the visitor do next?

Suggested content:
- Eyebrow: "Køreskole i København"
- H1: "Dit kørekort. Uden bøvl."
- Supporting copy
- Primary CTA
- Secondary CTA
- Trust cue such as rating/testimonials
- Visual area suitable for a real driving-school photo later

### Trust / Proof Strip
Examples:
- 4.9/5 rating placeholder
- "300+ elever" placeholder
- "Fleksible køretider"
- "København & Frederiksberg"

Keep fictional proof clearly marked as demo data in configuration/code.

### Upcoming Course Starts
Display 3 fictional classes with date, location, time, available places, and CTA.

Example:
- 21 SEP — Frederiksberg — 8 pladser
- 05 OKT — København — 5 pladser
- 19 OKT — Frederiksberg — 11 pladser

Must be easy to replace from one data/config file.

### Main Pricing Package
Show the main "Lovpakke" clearly.

Possible placeholder items:
- Teoriundervisning
- Manøvrebane
- Kørelektioner
- Glatbane / køreteknisk anlæg
- Digitalt undervisningsmateriale

Do not claim fictional package contents satisfy current Danish legal requirements. Keep all package content configurable.

Suggested demo price: 12.995 kr.

### Process
Simple 4-step explanation:
1. Tilmeld dig
2. Start teori
3. Kør lektioner
4. Bliv klar til prøve

### Testimonials
3 fictional demo testimonials. Store them as obvious placeholders in data.

### Instructor / About
Personal section introducing the instructor. Use fictional content in the master template.

### FAQ
Suggested questions:
- Hvad koster et kørekort?
- Hvornår starter næste hold?
- Kan jeg betale i rater?
- Hvor foregår undervisningen?
- Hvordan tilmelder jeg mig?

Answers are demo placeholders and configurable.

### Lead / Signup Form
Fields:
- Name
- Phone
- Email
- Desired course start
- Optional message
- Consent checkbox with placeholder privacy-policy link

For the initial demo:
- form may submit locally or to a simple mock endpoint
- polished validation and success state are required
- do not implement a complex backend unless requested later

### Footer
- contact data
- navigation
- opening hours placeholder
- CVR placeholder
- privacy-policy placeholder
- terms placeholder
- social links placeholders

## 6. Design Direction

Goal: the page should look like a 15,000–25,000 DKK professional website, not a generic AI-generated template.

Design principles:
- Scandinavian
- premium
- clean
- confident
- conversion-focused
- spacious
- strong typography
- excellent mobile hierarchy
- visual consistency
- restrained animation

Avoid:
- excessive gradients
- glassmorphism everywhere
- neon startup aesthetic
- generic AI blobs
- huge text walls
- excessive cards
- random decorative icons
- dark cyberpunk styling
- gimmicky scroll effects
- carousel-heavy interfaces

Prefer:
- large typography
- strong photography areas
- simple geometry
- high-quality spacing
- obvious CTAs
- subtle borders
- accessible contrast
- polished hover/focus states

The template should be easy to rebrand by changing name, logo, colors, contact details, location, prices, packages, course dates, instructor, testimonials, FAQ, and images.

## 7. Technical Direction

Default preference:
- Next.js
- TypeScript
- React
- Tailwind CSS
- modern component structure
- static-first where possible
- no unnecessary database
- no authentication
- no admin dashboard in v1

Prefer reusable components, centralized content/configuration, semantic HTML, responsive design, accessibility, good Core Web Vitals, clear folder structure, and easy deployment to Vercel or equivalent.

Do not introduce microservices, Kubernetes, complex state management, payment processing, CMS, database, user accounts, or backend frameworks unless a later requirement needs them.

## 8. Centralized Demo Data

Create one obvious data/configuration layer, e.g. `src/data/site.ts`.

It should contain:
- business name
- tagline
- phone
- email
- address
- service areas
- main package
- course dates
- instructor
- testimonials
- FAQ
- opening hours
- social links
- SEO metadata

Goal: a customized prospect preview should require mostly data/assets changes rather than component rewrites.

## 9. Conversion Requirements

Primary CTA: "Reserver din plads"

Secondary actions:
- "Se holdstart"
- "Se priser"
- phone call
- contact form

On mobile, consider a tasteful sticky bottom CTA.

Do not use manipulative dark patterns or fabricate urgency. Demo availability numbers must never become unverified claims in a real client deployment.

## 10. SEO / Technical Quality

Implement:
- sensible page title
- meta description
- Open Graph metadata
- semantic heading structure
- appropriate local-business structured data only when valid
- sitemap if appropriate
- robots configuration
- accessible image alt text
- keyboard navigation
- visible focus states
- basic performance optimization

Do not keyword-stuff.

## 11. Images

For the first build:
- use tasteful placeholder imagery or local placeholder assets
- structure the project so real client photos can be dropped in easily
- do not hotlink random copyrighted images
- do not use identifiable existing driving-school branding

Image slots:
- hero
- instructor
- vehicle/car
- optional classroom/student image

## 12. Definition of Done for Master Demo

The first version is done when:
- it runs locally without errors
- it is polished on mobile and desktop
- all required sections exist
- navigation works
- main CTAs work
- signup form validates
- form success state works
- course selection works
- content is centralized/configurable
- no lorem ipsum remains
- no console errors
- no unnecessary backend complexity
- README contains setup/run/deploy/customization instructions
- code is clean enough to clone for a client
- demo data is clearly distinguishable from verified client data

## 13. Development Workflow

Work incrementally.

Before major implementation:
1. inspect repository
2. understand existing files
3. make a short plan
4. implement
5. run build/lint/tests if available
6. fix issues
7. summarize what changed

Do not rewrite working infrastructure unnecessarily.

When uncertain, choose the simplest implementation compatible with the goal and do not invent business/legal facts.

## 14. Phase 2 — Client Customization

After the master demo is approved, the workflow should be:
1. Duplicate template
2. Replace site data
3. Replace colors/logo
4. Replace images
5. Adjust package/prices
6. Add real course dates
7. Deploy preview URL
8. Send to prospect

This may later be automated with a script, but NOT during the first build.

## 15. Out of Scope for V1

Do not build yet:
- student login
- instructor login
- payments
- lesson scheduling engine
- CRM
- SMS automation
- email marketing
- multi-tenant SaaS
- customer CMS
- advanced booking engine
- invoicing
- accounting integration
- MitID
- government integrations

The goal is to sell the website service first.

## 16. Business Principle

The website is not the final business.

The immediate objective is to use Codex to produce premium web work faster than a traditional development workflow, then sell fixed-price outcomes to real businesses.

Success metric: **first paying client**.

Everything that does not materially help us produce a convincing demo, customize it quickly, close a client, or deliver professionally is secondary.
