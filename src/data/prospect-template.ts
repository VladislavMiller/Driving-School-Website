import { siteData as master } from "./site";

/**
 * PROSPECT DATA TEMPLATE
 *
 * Copy this file to `src/data/prospects/<slug>.ts`. Values prefixed with
 * `REPLACE:` and inherited NORD content are placeholders until verified.
 * The setup script creates the copy and activates it automatically.
 */
export const siteData = {
  ...master,
  demo: true,
  preview: {
    kind: "prospect" as const,
    slug: "REPLACE: prospect-slug",
    label: "Preview for REPLACE: business name",
    verified: {
      identity: false,
      contact: false,
      pricing: false,
      courses: false,
      instructor: false,
      testimonials: false,
      claims: false,
      legal: false,
    },
  },
  brand: {
    ...master.brand,
    logoMark: "?",
    logoDescriptor: "KØRESKOLE",
    logoSrc: null as string | null, // e.g. "/prospects/slug/logo.svg"
    logoAlt: "REPLACE: business name logo",
    colors: {
      ...master.brand.colors,
      primary: "#17473a", // REPLACE
      primaryDark: "#10352c", // REPLACE
      accent: "#e8c96b", // REPLACE secondary/accent brand color
    },
  },
  business: {
    ...master.business,
    name: "REPLACE: business name",
    shortName: "REPLACE",
    tagline: "REPLACE: tagline",
    phone: "REPLACE: phone",
    phoneHref: "REPLACE: phone without spaces",
    email: "REPLACE: email",
    address: "REPLACE: address",
    serviceAreas: "REPLACE: service area",
    cvr: "REPLACE or mark unverified",
    openingHours: ["REPLACE: opening hours"],
    mapUrl: null as string | null,
  },
  seo: {
    title: "REPLACE: SEO title",
    description: "REPLACE: SEO description",
    url: "https://REPLACE.example-domain.dk",
  },
  hero: {
    ...master.hero,
    eyebrow: "REPLACE: service and area",
    title: "REPLACE: hero title",
    text: "REPLACE: hero supporting copy",
    price: "REPLACE: verified package price",
    note: "Preview-oplysning · pris skal verificeres",
    ratingLabel: "Preview",
    ratingText: "Ingen verificeret bedømmelse indsat",
  },
  images: {
    hero: { src: null as string | null, alt: "REPLACE: hero image alt text", position: "center" },
    instructor: { src: null as string | null, alt: "REPLACE: instructor image alt text", position: "center" },
  },
  proof: [
    { value: "REPLACE", label: "Verificeret fordel" },
  ],
  courses: [
    { id: "replace-date", day: "00", month: "MÅN", location: "REPLACE: location", time: "REPLACE: time", spots: "Pladsstatus ikke verificeret" },
  ],
  package: {
    ...master.package,
    name: "REPLACE: main package",
    price: "REPLACE: package price",
    intro: "REPLACE: package introduction",
    items: ["REPLACE: included service"],
    disclaimer: "Preview-pakke. Pris, indhold og ekstra udgifter er ikke verificeret.",
  },
  instructor: {
    name: "REPLACE: instructor/owner",
    role: "REPLACE: role",
    quote: "REPLACE: approved quote",
    bio: "REPLACE: approved biography",
  },
  testimonials: [
    { quote: "REPLACE only with a documented customer quote", name: "Ikke verificeret", detail: "Preview-pladsholder" },
  ],
  faqs: [
    { question: "REPLACE: frequently asked question", answer: "REPLACE: verified answer" },
  ],
  socialLinks: [
    { label: "Instagram", href: null as string | null },
    { label: "Facebook", href: null as string | null },
  ],
} as const;

