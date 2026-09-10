# Prospect preview workflow

This is developer-operated, not multi-tenant. NORD remains the fictional master in `src/data/site.ts`; prospect branches select one separate file through `src/data/active-site.ts`.

## Fast path: master → preview

1. From a clean passing master, create `prospect/<slug>` (or a repository copy if branches are unavailable).
2. Run `npm run create-prospect`; enter a lowercase URL-safe slug and business name. It refuses overwrites, creates `src/data/prospects/<slug>.ts`, and activates it. For non-interactive use: `npm run create-prospect -- <slug> "Business Name"`.
3. Replace every `REPLACE` value. Do not edit components. Set a `preview.verified` flag true only after checking that category against prospect-supplied or approved information.
4. Put permitted assets in `public/prospects/<slug>/` and reference them in the prospect file. Never overwrite master assets.
5. Run `npm run dev`, complete the checklist, then run `npm run qa`.
6. Commit the prospect branch and deploy it as a separate preview.

To restore NORD, make `src/data/active-site.ts` export from `./site`. Never paste prospect data into the master file.

## Files to customize

- `src/data/prospects/<slug>.ts`: company name, tagline, wordmark/logo, primary and secondary/accent colors, phone, email, address, service area, website/SEO URL, instructor/owner, main package, price, included services, course dates, testimonials, FAQ, opening hours, social links, hero/instructor images, and SEO copy.
- `public/prospects/<slug>/`: approved logo and image files.
- `src/data/active-site.ts`: generated selector; normally no manual edit.

Inherited NORD content is also placeholder content. Search the file and page for `REPLACE`, `NORD`, `demo`, and `preview`. Keep `demo: true` for sales previews: the form has no delivery backend and legal pages are placeholders.

## Internal verification states

- `identity`: name, brand, tagline, address, service area, website.
- `contact`: phone, email, hours, map and social URLs.
- `pricing`: package, price, inclusions, exclusions, payment wording.
- `courses`: every date, time, location, availability. While false, the UI marks course data as preview information.
- `instructor`: name, role, bio, quote, photo. While false, the UI marks the profile unverified.
- `testimonials`: source and permission for every quote.
- `claims`: ratings, statistics, benefits and other factual claims.
- `legal`: CVR and reviewed legal content; demo pages are not policies.

## QA checklist

### Data verification

- [ ] Business name; phone; email
- [ ] Prices; course dates; locations; services
- [ ] Opening hours; website, map and social URLs
- [ ] Package contents, exclusions and payment wording
- [ ] Instructor, FAQs, SEO and every factual claim
- [ ] No `REPLACE` or unintended NORD content

### Visual QA

- [ ] Desktop; 390 px mobile; tablet portrait/landscape
- [ ] Desktop/mobile navigation and CTA visibility
- [ ] Pricing and course dates scan cleanly
- [ ] Images crop well, logo works in header/footer, alt text is useful
- [ ] Footer wraps cleanly; no overflow or clipped content

### Functional QA

- [ ] Signup form validation and local/demo success state
- [ ] Phone links; email links; navigation; legal and external links
- [ ] `npm run qa` passes: lint, typecheck, production build

### Safety

- [ ] No copyrighted image/logo copied without permission
- [ ] No invented testimonial presented as real
- [ ] No fake rating, statistic, student count or scarcity
- [ ] No unreviewed production legal/regulatory claim
- [ ] Unverified material facts are marked in data/presentation
- [ ] No dead links; preview remains non-indexed while `demo: true`

## Deployment notes

Fastest clean Vercel option: push `prospect/<slug>`, import it into a dedicated Vercel project, select that branch as the preview project's production branch, and keep the standard Next.js build command. Set `seo.url` to the final preview URL first.

Use Vercel's generated URL initially. If a preview domain is already owned, add `prospect-name.example-domain.dk` to that project and manually create the DNS record Vercel requests. No domain purchase or DNS automation belongs here. One project per prospect gives a stable URL and prevents prospects replacing each other; archive projects after the sales process.

Preview builds remain `demo: true`, non-indexed, use placeholder legal pages, and do not deliver forms. A sold-site launch needs a separate legal/form review.
