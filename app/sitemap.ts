import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "carte", "histoire", "professionnels"];
  return routes.map((r) => ({
    url: absoluteUrl(r),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
