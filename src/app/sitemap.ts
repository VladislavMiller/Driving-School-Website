import type { MetadataRoute } from "next";
import { siteData } from "@/data/active-site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteData.seo.url, changeFrequency: "monthly", priority: 1 }];
}
