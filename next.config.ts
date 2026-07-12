import type { NextConfig } from "next";

/**
 * Cible : static export (GitHub Pages).
 * basePath / assetPrefix pilotés par env pour basculer GH Pages (/gelateria)
 * ↔ domaine custom ("") sans refactor. Voir CLAUDE.md §7.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
