import type { MetadataRoute } from "next";
import { siteData } from "@/data/active-site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/priser", "/koerekort", "/holdstart", "/om-os", "/kontakt"].map((path, index) => ({ url: `${siteData.seo.url}${path}`, changeFrequency: "monthly" as const, priority: index === 0 ? 1 : .8 }));
}
