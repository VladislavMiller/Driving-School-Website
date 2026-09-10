"use client";

import { FormEvent, useState } from "react";
import { siteData } from "@/data/active-site";
import { Arrow, Check } from "./icons";

type Errors = Partial<Record<"name" | "phone" | "email" | "course" | "consent", string>>;

export function SignupForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").replace(/\s/g, "");
    const email = String(data.get("email") || "").trim();
    if (name.length < 2) next.name = "Skriv dit navn.";
    if (!/^\+?[0-9]{8,12}$/.test(phone)) next.phone = "Skriv et gyldigt telefonnummer.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Skriv en gyldig e-mailadresse.";
    if (!data.get("course")) next.course = "Vælg et ønsket hold.";
    if (!data.get("consent")) next.consent = "Du skal acceptere, før du kan sende.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSuccess(true);
  }

  if (success) return (
    <div className="success-state" role="status">
      <span className="success-icon"><Check /></span>
      <p className="eyebrow">Forespørgsel modtaget</p>
      <h3>{siteData.form.successTitle}</h3>
      <p>{siteData.form.successText}</p>
      <button className="text-link" onClick={() => setSuccess(false)}>Send en ny forespørgsel <Arrow /></button>
    </div>
  );

  return (
    <form className="signup-form" onSubmit={submit} noValidate>
      <div className="field-grid">
        <Field label="Navn" name="name" placeholder="Dit fulde navn" error={errors.name} autoComplete="name" />
        <Field label="Telefon" name="phone" type="tel" placeholder="12 34 56 78" error={errors.phone} autoComplete="tel" />
      </div>
      <Field label="E-mail" name="email" type="email" placeholder="dig@email.dk" error={errors.email} autoComplete="email" />
      <label className="field">
        <span>Ønsket holdstart</span>
        <select name="course" defaultValue="" aria-invalid={!!errors.course} aria-describedby={errors.course ? "course-error" : undefined}>
          <option value="" disabled>Vælg hold</option>
          {siteData.courses.map(course => <option key={course.id} value={course.id}>{course.day}. {course.month.toLowerCase()} · {course.location} · {course.time}</option>)}
        </select>
        {errors.course && <small className="field-error" id="course-error">{errors.course}</small>}
      </label>
      <label className="field"><span>Besked <em>(valgfrit)</em></span><textarea name="message" rows={3} placeholder="Er der noget, vi skal vide?" /></label>
      <label className="consent"><input type="checkbox" name="consent" /><span>{siteData.form.consentText.replace("{shortName}", siteData.business.shortName)} Se <a href={siteData.footer.privacyHref}>demo-privatlivsside</a>.</span></label>
      {errors.consent && <small className="field-error">{errors.consent}</small>}
      <button className="button form-submit" type="submit">Send forespørgsel <Arrow /></button>
      <p className="form-note">Uforpligtende forespørgsel · Demoformular</p>
    </form>
  );
}

function Field({ label, name, error, type = "text", ...props }: { label: string; name: string; error?: string; type?: string; placeholder?: string; autoComplete?: string }) {
  const errorId = `${name}-error`;
  return <label className="field"><span>{label}</span><input name={name} type={type} aria-invalid={!!error} aria-describedby={error ? errorId : undefined} {...props} />{error && <small className="field-error" id={errorId}>{error}</small>}</label>;
}
