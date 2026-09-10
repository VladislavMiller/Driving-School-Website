import type { Metadata } from "next";
import { ContactBand, PageHero, PageShell } from "@/components/PageShell";
import { Check } from "@/components/icons";
import { siteData } from "@/data/active-site";

export const metadata: Metadata = { title: "Priser | Københavns Trafikskole" };

export default function PricesPage() {
  return <PageShell><PageHero eyebrow="Priser pr. 1. januar 2026" title="Se forskellen, før du vælger." text="To forskellige kategori B-tilbud står side om side, så startprisen ikke forveksles med den samlede pris for et kørekort." aside={<><small>Vigtigt</small><strong>4.495 kr. er ikke den fulde kørekortpris</strong><p>Kørsel på vej og øvrige udgifter kommer oveni Pay as U go.</p></>} />
    <section className="section"><div className="shell"><div className="section-heading split-heading"><div><p className="eyebrow">Kategori B</p><h2>To måder at<br /><em>komme i gang.</em></h2></div><p>Priserne er gengivet fra skolens side mærket “Priser pr. 1. januar 2026”. Kontakt skolen før bestilling for at få det samlede forløb bekræftet.</p></div><div className="comparison-grid">{siteData.pricing.categoryB.map((item, index) => <article className={`comparison-card ${index === 1 ? "featured-price" : ""}`} key={item.name}><span className="card-label">{item.label}</span><h3>{item.name}</h3><strong className="large-price">{item.price}</strong><p>{item.description}</p><h4>Dette er oplyst som inkluderet</h4><ul>{item.included.map(line => <li key={line}><Check />{line}</li>)}</ul><h4>Ikke inkluderet / skal afklares</h4><ul className="excluded-list">{item.excluded.map(line => <li key={line}>{line}</li>)}</ul><a className="button" href="/kontakt#formular">Spørg om denne løsning</a></article>)}</div>
      <div className="road-card"><div><p className="eyebrow">Tilkøb til Pay as U go</p><h3>{siteData.pricing.roadCard.name}</h3><p>{siteData.pricing.roadCard.note}</p></div><strong>{siteData.pricing.roadCard.price}</strong></div>
    </div></section>
    <section className="section alt-section"><div className="shell"><div className="section-heading"><p className="eyebrow">Andre offentliggjorte priser</p><h2>Kurser og kategorier.</h2></div><div className="price-table">{siteData.pricing.extras.map(item => <div key={item.name}><span><strong>{item.name}</strong><small>{item.note}</small></span><b>{item.price}</b></div>)}</div><div className="notice"><strong>Poster med pris-konflikter er udeladt</strong><p>{siteData.pricing.conflicts}</p><a href={`tel:${siteData.business.phoneHref}`}>Kontakt skolen for aktuel pris</a></div></div></section><ContactBand title="Få dit samlede prisoverblik." /></PageShell>;
}
