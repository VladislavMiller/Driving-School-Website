import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Arrow } from "./icons";
import { siteData } from "@/data/active-site";

export function PageShell({ children }: { children: ReactNode }) {
  return <><Header /><main id="main">{children}</main><Footer /><a href="/kontakt#formular" className="mobile-sticky">{siteData.hero.primaryCta} <Arrow /></a></>;
}

export function PageHero({ eyebrow, title, text, aside }: { eyebrow: string; title: string; text: string; aside?: ReactNode }) {
  return <section className="page-hero"><div className="shell page-hero-grid"><div><p className="eyebrow"><span />{eyebrow}</p><h1>{title}</h1><p>{text}</p></div>{aside && <div className="page-hero-aside">{aside}</div>}</div></section>;
}

export function ContactBand({ title = "Klar til næste skridt?" }: { title?: string }) {
  return <section className="contact-band"><div className="shell"><div><p className="eyebrow light">Uforpligtende forespørgsel</p><h2>{title}</h2></div><div className="band-actions"><a className="button button-sun" href="/kontakt#formular">Reserver din plads <Arrow /></a><a href={`tel:${siteData.business.phoneHref}`}>Ring {siteData.business.phone}</a></div></div></section>;
}
