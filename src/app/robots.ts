import type { MetadataRoute } from "next";
import { siteData } from "@/data/active-site";

export default function robots(): MetadataRoute.Robots {
  return siteData.demo
    ? { rules: { userAgent: "*", disallow: "/" } }
    : { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteData.seo.url}/sitemap.xml` };
}
