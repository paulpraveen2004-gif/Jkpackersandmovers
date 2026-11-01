import { BUSINESS } from "@/lib/config";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.siteUrl;
  const now  = new Date();

  return [
    { url: base,                         lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/about`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`,           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/service-areas`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/gallery`,            lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`,            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy-policy`,     lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,              lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];
}

