import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/active-site";

export function Footer() {
  return <footer>
    <div className="shell footer-main">
      <div><Link className="wordmark footer-logo" href="/">{siteData.brand.logoSrc ? <Image className="brand-logo" src={siteData.brand.logoSrc} alt={siteData.brand.logoAlt} width={180} height={52} /> : <><span className="wordmark-mark">{siteData.brand.logoMark}</span><span>{siteData.business.shortName}</span><small>{siteData.brand.logoDescriptor}</small></>}</Link><p>{siteData.business.tagline}<br />{siteData.footer.supportingLine}</p></div>
      <div><h3>Genveje</h3>{siteData.navigation.map(link => <a href={link.href} key={link.href}>{link.label}</a>)}</div>
      <div><h3>Find vej</h3><p>{siteData.business.address}</p>{siteData.business.mapUrl && <a href={siteData.business.mapUrl} target="_blank" rel="noreferrer">Åbn i Google Maps</a>}</div>
      <div><h3>Kontakt</h3><a href={`tel:${siteData.business.phoneHref}`}>{siteData.business.phone}</a><a href={`mailto:${siteData.business.email}`}>{siteData.business.email}</a>{siteData.socialLinks.filter(link => link.href).map(link => <a href={link.href!} target="_blank" rel="noreferrer" key={link.label}>{link.label}</a>)}</div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} {siteData.business.name} · {siteData.preview.label}</span><div><a href={siteData.footer.privacyHref}>Demo-privatliv</a><a href={siteData.footer.termsHref}>Demo-vilkår</a><span>Juridiske oplysninger afventer bekræftelse</span></div></div>
  </footer>;
}
