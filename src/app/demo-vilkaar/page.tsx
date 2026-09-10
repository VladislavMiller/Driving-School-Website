import Link from "next/link";
import { siteData } from "@/data/active-site";

export const metadata = { title: `Demo-vilkår | ${siteData.business.name}`, robots: { index: false, follow: false } };

export default function DemoTermsPage() {
  return <main className="legal-demo"><article className="shell legal-card"><p className="eyebrow">Kun til demonstration</p><h1>Vilkår kommer her.</h1><p>Denne side er en tydeligt markeret pladsholder og indeholder ingen juridiske løfter. Den rigtige køreskoles egne, verificerede handels- og tilmeldingsvilkår skal indsættes før lancering.</p><Link className="button-link" href="/">Tilbage til demoen</Link></article></main>;
}
