import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Só a home por enquanto. /artigos NÃO entra: retorna notFound() até haver 3
// artigos publicados e não deve ser anunciada.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
