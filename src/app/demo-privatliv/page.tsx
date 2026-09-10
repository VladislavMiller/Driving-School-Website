import Link from "next/link";
import { siteData } from "@/data/active-site";

export const metadata = { title: `Demo-privatliv | ${siteData.business.name}`, robots: { index: false, follow: false } };

export default function DemoPrivacyPage() {
  return <main className="legal-demo"><article className="shell legal-card"><p className="eyebrow">Kun til demonstration</p><h1>Privatlivspolitik kommer her.</h1><p>Denne side er bevidst ikke juridisk tekst. Før en rigtig klientversion lanceres, skal køreskolens verificerede privatlivspolitik, dataansvarlige oplysninger og faktiske formularbehandling indsættes.</p><Link className="button-link" href="/#kontakt">Tilbage til demoen</Link></article></main>;
}
