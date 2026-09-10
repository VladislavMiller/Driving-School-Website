import Image from "next/image";
import { Faq } from "@/components/Faq";
import { Header } from "@/components/Header";
import { Arrow, Check, Phone } from "@/components/icons";
import { SignupForm } from "@/components/SignupForm";
import { Footer } from "@/components/Footer";
import { siteData } from "@/data/active-site";

export default function Home() {
  return <>
    <Header />
    <main id="main">
      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span />{siteData.hero.eyebrow}</p>
            <h1>{siteData.hero.title.split("\n").map((line, i) => <span key={line}>{line}{i === 0 && <br />}</span>)}</h1>
            <p className="hero-text">{siteData.hero.text}</p>
            <div className="hero-actions"><a className="button" href="/kontakt#formular">{siteData.hero.primaryCta} <Arrow /></a><a className="button-link" href="/priser">{siteData.hero.secondaryCta}</a></div>
            <div className="hero-trust"><span><strong>{siteData.hero.ratingLabel}</strong> · {siteData.hero.ratingText}</span></div>
          </div>
          <div className={`hero-visual ${siteData.images.hero.src ? "has-photo" : ""}`} role={siteData.images.hero.src ? undefined : "img"} aria-label={siteData.images.hero.src ? undefined : siteData.images.hero.alt}>
            {siteData.images.hero.src ? (
              <Image src={siteData.images.hero.src} alt={siteData.images.hero.alt} fill priority sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: siteData.images.hero.position }} />
            ) : (
              <div className="demo-art" aria-hidden="true"><div className="sun-disc" /><div className="road-line road-line-one" /><div className="road-line road-line-two" /><div className="car-shape"><div className="car-window" /><div className="wheel wheel-a" /><div className="wheel wheel-b" /><span>{siteData.business.shortName}</span></div></div>
            )}
            <div className="price-ticket"><small>{siteData.hero.priceLabel}</small><strong>{siteData.hero.price}</strong><span>{siteData.hero.note}</span></div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Fordele"><div className="shell proof-grid">{siteData.proof.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></section>

      <section className="section courses" id="holdstart"><div className="shell">
        <div className="section-heading split-heading"><div><p className="eyebrow">{siteData.sections.courses.eyebrow}</p><h2>{siteData.sections.courses.title}</h2></div><p>{siteData.sections.courses.text}</p></div>
        <div className="course-list">{siteData.courses.map(course => <article className="course-row" key={course.id}>
          <div className="course-date"><strong>{course.day}</strong><span>{course.month}</span></div>
          <div className="course-place"><small>Holdstart</small><h3>{course.location}</h3></div>
          <div className="course-meta"><span>{course.time}</span><span className="availability"><i />{course.spots} {!siteData.preview.verified.courses && <em>· preview</em>}</span></div>
          <a href="/holdstart" className="round-link" aria-label="Læs om næste holdstart"><Arrow /></a>
        </article>)}</div>
        {!siteData.preview.verified.courses && <p className="demo-note">Ingen historiske datoer vises som aktuelle. <a href="/holdstart">Læs om holdstart</a>.</p>}
      </div></section>

      <section className="section pricing" id="priser"><div className="shell pricing-grid">
        <div className="pricing-intro"><p className="eyebrow light">{siteData.sections.pricing.eyebrow}</p><h2>{siteData.sections.pricing.title}<br /><em>{siteData.sections.pricing.emphasis}</em></h2><p>{siteData.package.intro}</p><a href="/priser" className="text-link light-link">Sammenlign priser <Arrow /></a></div>
        <article className="price-card"><div className="price-card-top"><div><span>{siteData.sections.pricing.badge}</span><h3>{siteData.package.name}</h3></div><div className="price"><small>Fra</small><strong>{siteData.package.price}</strong></div></div>
          <ul>{siteData.package.items.map(item => <li key={item}><span><Check /></span>{item}</li>)}</ul>
          <a href="/priser" className="button button-sun">Se hele prisoverblikket <Arrow /></a><p>{siteData.package.disclaimer}</p>
        </article>
      </div></section>

      <section className="section process" id="forloeb"><div className="shell">
        <div className="section-heading centered"><p className="eyebrow">{siteData.sections.process.eyebrow}</p><h2>{siteData.sections.process.title}<br /><em>{siteData.sections.process.emphasis}</em></h2></div>
        <div className="process-grid">{siteData.process.map((step, i) => <article key={step.number}><div className="step-number">{step.number}</div>{i < 3 && <div className="step-line" />}<h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </div></section>

      <section className="section about" id="om-os"><div className="shell about-grid">
        <div className={`portrait-placeholder ${siteData.images.instructor.src ? "has-photo" : ""}`} role={siteData.images.instructor.src ? undefined : "img"} aria-label={siteData.images.instructor.src ? undefined : siteData.images.instructor.alt}>{siteData.images.instructor.src ? <Image src={siteData.images.instructor.src} alt={siteData.images.instructor.alt} fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover", objectPosition: siteData.images.instructor.position }} /> : <div className="portrait-silhouette" aria-hidden="true"><span /></div>}</div>
        <div className="about-copy"><p className="eyebrow">{siteData.sections.instructor.eyebrow}</p><blockquote>“{siteData.instructor.quote}”</blockquote><p>{siteData.instructor.bio}</p><div className="signature"><strong>{siteData.instructor.name}</strong><span>{siteData.instructor.role}{!siteData.preview.verified.instructor && " · Uverificeret preview-profil"}</span></div><a href={`tel:${siteData.business.phoneHref}`} className="text-link"><Phone /> Ring til {siteData.instructor.name.split(" ")[0]}</a></div>
      </div></section>

      <section className="section testimonials"><div className="shell"><div className="section-heading split-heading"><div><p className="eyebrow">{siteData.sections.testimonials.eyebrow}</p><h2>{siteData.sections.testimonials.title}</h2></div><p>{siteData.sections.testimonials.text}</p></div>
        <div className="testimonial-grid">{siteData.testimonials.map((item, i) => <figure key={item.name} className={i === 1 ? "featured" : ""}><div className="quote-mark">“</div><blockquote>{item.quote}</blockquote><figcaption><span className="avatar">{item.name.charAt(0)}</span><div><strong>{item.name}</strong><small>{item.detail}</small></div></figcaption></figure>)}</div>
      </div></section>

      <section className="section faq" id="faq"><div className="shell faq-grid"><div><p className="eyebrow">{siteData.sections.faq.eyebrow}</p><h2>{siteData.sections.faq.title}<br /><em>{siteData.sections.faq.emphasis}</em></h2><p>Kan du ikke finde svaret? Ring til os på <a href={`tel:${siteData.business.phoneHref}`}>{siteData.business.phone}</a>.</p></div><Faq /></div></section>

      <section className="section contact" id="kontakt"><div className="shell contact-grid"><div className="contact-copy"><p className="eyebrow light">{siteData.sections.contact.eyebrow}</p><h2>{siteData.sections.contact.title}<br /><em>{siteData.sections.contact.emphasis}</em></h2><p>{siteData.sections.contact.text}</p><div className="contact-details"><a href={`tel:${siteData.business.phoneHref}`}><Phone /> <span><small>Ring direkte</small><strong>{siteData.business.phone}</strong></span></a><a href={`mailto:${siteData.business.email}`}><span className="at">@</span><span><small>Skriv til os</small><strong>{siteData.business.email}</strong></span></a></div></div><div className="form-wrap"><SignupForm /></div></div></section>
    </main>
    <Footer />
    <a href="/kontakt#formular" className="mobile-sticky">{siteData.hero.primaryCta} <Arrow /></a>
  </>;
}
