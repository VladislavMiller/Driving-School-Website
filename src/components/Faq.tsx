import { siteData } from "@/data/active-site";

export function Faq() {
  return <div className="faq-list">{siteData.faqs.map((faq, index) => (
    <details key={faq.question} open={index === 0}>
      <summary><span>{faq.question}</span><span className="faq-plus" aria-hidden="true">+</span></summary>
      <p>{faq.answer}</p>
    </details>
  ))}</div>;
}
