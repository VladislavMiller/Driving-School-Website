/**
 * MASTER DEMO DATA — every business claim below is fictional placeholder content.
 * Replace and verify this file before publishing a real client website.
 */
export const siteData = {
  demo: true,
  preview: {
    kind: "master" as "master" | "prospect",
    slug: "nord-master",
    label: "Fiktiv masterdemo",
    // Keep each category false until the prospect has supplied or approved it.
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
    logoMark: "N",
    logoDescriptor: "KØRESKOLE",
    logoSrc: null as string | null,
    logoAlt: "NORD Køreskole",
    colors: {
      ink: "#16231f",
      primary: "#17473a",
      primaryDark: "#10352c",
      background: "#fbfaf6",
      surface: "#f3efe6",
      accent: "#e8c96b",
      mutedAccent: "#8e9f78",
    },
  },
  business: {
    name: "NORD Køreskole",
    shortName: "NORD",
    tagline: "Dit kørekort. Uden bøvl.",
    phone: "+45 31 42 58 60",
    phoneHref: "+4531425860",
    email: "hej@nordkoereskole.dk",
    address: "Nordens Plads 8, 2000 Frederiksberg",
    serviceAreas: "København & Frederiksberg",
    cvr: "CVR 12 34 56 78",
    openingHours: ["Man–tor: 09.00–18.00", "Fre: 09.00–15.00"],
    mapUrl: null as string | null,
  },
  seo: {
    title: "NORD Køreskole | Kørekort i København & Frederiksberg",
    description:
      "En tryg og overskuelig vej til kørekortet. Se priser og kommende hold hos NORD Køreskole i København og Frederiksberg.",
    url: "https://nord-koereskole.example",
  },
  hero: {
    eyebrow: "Køreskole i København",
    title: "Dit kørekort.\nUden bøvl.",
    text: "Få et overskueligt forløb, faste rammer og en kørelærer, der tager sig tid. Fra første teoriaften til du er klar til prøven.",
    priceLabel: "Lovpakke fra",
    price: "12.995 kr.",
    note: "Demo-pris · ekstra udgifter kan forekomme",
    primaryCta: "Reserver din plads",
    secondaryCta: "Se priser",
    ratingLabel: "4,9 / 5",
    ratingText: "Baseret på demo-udtalelser",
  },
  images: {
    // Add files under /public/images and set these paths, e.g. "/images/hero.webp".
    // Null keeps the intentional local demo artwork; no remote images are loaded.
    hero: { src: null as string | null, alt: "Køreskolebil i København", position: "center" },
    instructor: { src: null as string | null, alt: "Kørelærer ved skolevognen", position: "center" },
  },
  navigation: [
    { label: "Forside", href: "#top" },
    { label: "Kørekort", href: "#forloeb" },
    { label: "Priser", href: "#priser" },
    { label: "Holdstart", href: "#holdstart" },
    { label: "Om os", href: "#om-os" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  sections: {
    courses: { eyebrow: "Kommende hold", title: "Find din startdato.", text: "Små hold, god tid til spørgsmål og en klar plan fra første aften." },
    pricing: { eyebrow: "En enkel pris", title: "Alt det vigtigste.", emphasis: "Samlet ét sted.", badge: "Mest populære" },
    process: { eyebrow: "Sådan foregår det", title: "Fra første klik til", emphasis: "friheden bag rattet." },
    instructor: { eyebrow: "Din kørelærer" },
    testimonials: { eyebrow: "Ord fra eleverne", title: "Tryghed kan mærkes.", text: "Her vises eksempler på den type elevoplevelser, en rigtig klient kan dokumentere." },
    faq: { eyebrow: "Spørgsmål & svar", title: "Godt at vide,", emphasis: "før du starter." },
    contact: { eyebrow: "Klar til at komme i gang?", title: "Reserver din plads.", emphasis: "Vi klarer resten.", text: "Send en uforpligtende forespørgsel. Vi kontakter dig og hjælper med at finde det rigtige hold." },
  },
  proof: [
    { value: "4,9 / 5", label: "Demo-bedømmelse" },
    { value: "300+", label: "Demo-elever" },
    { value: "Fleksibelt", label: "Køretider der passer" },
    { value: "Lokalt", label: "Kbh. & Frederiksberg" },
  ],
  courses: [
    { id: "sep-21", day: "21", month: "SEP", location: "Frederiksberg", time: "Mandag kl. 17.00", spots: "8 pladser" },
    { id: "oct-05", day: "05", month: "OKT", location: "København", time: "Mandag kl. 17.00", spots: "5 pladser" },
    { id: "oct-19", day: "19", month: "OKT", location: "Frederiksberg", time: "Mandag kl. 17.00", spots: "11 pladser" },
  ],
  package: {
    name: "Lovpakken",
    price: "12.995 kr.",
    intro: "Et samlet og overskueligt forløb med det vigtigste inkluderet.",
    items: [
      "Teoriundervisning",
      "Manøvrebane",
      "Kørelektioner",
      "Køreteknisk anlæg",
      "Digitalt undervisningsmateriale",
    ],
    disclaimer: "Demo-pakke. Indhold og eventuelle ekstra udgifter skal verificeres for den enkelte køreskole.",
  },
  process: [
    { number: "01", title: "Tilmeld dig", text: "Vælg dit hold og send din forespørgsel. Vi vender hurtigt tilbage." },
    { number: "02", title: "Start teori", text: "Lær stoffet i rolige rammer med plads til spørgsmål undervejs." },
    { number: "03", title: "Kør lektioner", text: "Bliv tryg bag rattet i dit eget tempo med tydelig feedback." },
    { number: "04", title: "Klar til prøve", text: "Vi samler op og hjælper dig godt frem mod teori- og køreprøven." },
  ],
  instructor: {
    name: "Mads Holm",
    role: "Kørelærer & ejer",
    quote: "Du skal ikke bare bestå. Du skal føle dig tryg, når du kører alene bagefter.",
    bio: "Mads er den fiktive kørelærer bag NORD. Undervisningen bygger på ro, ærlig feedback og en plan, du altid kan overskue.",
  },
  testimonials: [
    { quote: "Jeg vidste altid, hvad næste skridt var. Mads var rolig, tydelig og gjorde det hele meget mindre stressende.", name: "Freja, 19 år", detail: "Demo-udtalelse" },
    { quote: "Teorien var konkret, og køretimerne blev tilpasset præcis det, jeg havde svært ved. En virkelig god oplevelse.", name: "Emil, 22 år", detail: "Demo-udtalelse" },
    { quote: "Det var nemt at få tider til at passe med studie og arbejde. Jeg følte mig set hele vejen igennem.", name: "Sofia, 27 år", detail: "Demo-udtalelse" },
  ],
  faqs: [
    { question: "Hvad koster et kørekort?", answer: "I denne demo starter lovpakken ved 12.995 kr. Den endelige pris afhænger blandt andet af dit behov for ekstra lektioner og eksterne gebyrer." },
    { question: "Hvornår starter næste hold?", answer: "De kommende demo-hold står længere oppe på siden. Vælg et hold i formularen, så kontakter vi dig om pladsen." },
    { question: "Kan jeg betale i rater?", answer: "Ratebetaling vises her som en mulig, men endnu ikke bekræftet ordning. Vilkår skal aftales og indsættes for den rigtige køreskole." },
    { question: "Hvor foregår undervisningen?", answer: "Demo-adressen er Nordens Plads 8 på Frederiksberg. Kørsel aftales individuelt i København og på Frederiksberg." },
    { question: "Hvordan tilmelder jeg mig?", answer: "Udfyld formularen med dit ønskede hold. I den endelige løsning modtager køreskolen din forespørgsel og bekræfter pladsen direkte." },
  ],
  socialLinks: [
    { label: "Instagram", href: null as string | null },
    { label: "Facebook", href: null as string | null },
  ],
  footer: {
    supportingLine: "Kørekort med ro, retning og overblik.",
    privacyHref: "/demo-privatliv",
    termsHref: "/demo-vilkaar",
  },
  form: {
    consentText: "Jeg accepterer, at {shortName} må kontakte mig om min forespørgsel.",
    successTitle: "Tak — vi vender hurtigt tilbage.",
    successText: "Dette er en demo, så der bliver ikke sendt noget. I en klientversion forbindes formularen til køreskolens valgte indbakke.",
  },
} as const;

export type Course = (typeof siteData.courses)[number];
