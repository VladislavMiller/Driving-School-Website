"use client";

import { useState } from "react";
import Image from "next/image";
import { siteData } from "@/data/active-site";
import { Arrow } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">Gå til indhold</a>
      <div className="shell header-inner">
        <a className="wordmark" href="#top" aria-label={`${siteData.business.name}, forsiden`}>
          {siteData.brand.logoSrc ? <Image className="brand-logo" src={siteData.brand.logoSrc} alt={siteData.brand.logoAlt} width={180} height={52} priority /> : <><span className="wordmark-mark">{siteData.brand.logoMark}</span><span>{siteData.business.shortName}</span><small>{siteData.brand.logoDescriptor}</small></>}
        </a>
        <nav className="desktop-nav" aria-label="Primær navigation">
          {siteData.navigation.map(({ label, href }) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="button button-small header-cta" href="#kontakt">{siteData.hero.primaryCta} <Arrow /></a>
        <button className="menu-button" aria-label={open ? "Luk menu" : "Åbn menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobilnavigation">
        {siteData.navigation.map(({ label, href }) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="button" href="#kontakt" onClick={() => setOpen(false)}>{siteData.hero.primaryCta}</a>
      </nav>}
    </header>
  );
}
