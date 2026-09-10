# NORD Køreskole — masterdemo

En komplet, mobilorienteret marketing- og leadside til en **fiktiv** dansk køreskole. Projektet bruger Next.js App Router, TypeScript og Tailwind CSS. Der er ingen database, login, betaling eller produktionsbackend.

## Lokal udvikling

Kræver Node.js 20.9 eller nyere.

```bash
npm install
npm run dev
```

Åbn derefter [http://localhost:3000](http://localhost:3000).

Kvalitetstjek og produktion:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Tilpas til en anden køreskole

NORD-masterdata ligger i `src/data/site.ts` og må ikke overskrives med en rigtig virksomhed. Kør `npm run create-prospect` for at oprette og aktivere en separat prospectfil. Arbejdsgang, QA og deployment står i `PROSPECT_CUSTOMIZATION.md`.

Brandfarver og billedstier styres i den aktive datafil; typografi og layout ligger i `src/app/globals.css`. Prospect-assets placeres isoleret i `public/prospects/<slug>/`.

## Struktur

- `src/app/page.tsx` — den samlede hjemmeside
- `src/app/globals.css` — visuelt system og responsive layouts
- `src/app/layout.tsx` — metadata, fonte og globalt layout
- `src/data/site.ts` — urørt, fiktiv NORD-masterkonfiguration
- `src/data/prospect-template.ts` — prospectskabelon og verification-status
- `src/data/active-site.ts` — vælger master eller én prospect uden komponentændringer
- `src/components/` — navigation, formular, FAQ og ikoner
- `src/app/robots.ts` og `src/app/sitemap.ts` — grundlæggende SEO

## Formular

Formularen validerer navn, telefon, e-mail, holdvalg og samtykke i browseren og viser en færdig succesoplevelse. Den sender bevidst ingen data i masterdemoen. Til en klientversion skal submit-funktionen forbindes med en godkendt formular- eller mailtjeneste, og privatlivsteksten skal erstattes med juridisk verificeret indhold.

## Deploy

Projektet kan deployes direkte på fx Vercel med `npm run build`. Se den anbefalede separate-project-per-prospect-metode i `PROSPECT_CUSTOMIZATION.md`.
