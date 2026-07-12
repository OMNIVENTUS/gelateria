/**
 * Constantes de site + helper d'URL absolue (CLAUDE.md §6).
 * Tout dérive de NEXT_PUBLIC_SITE_URL via metadataBase → bascule
 * GH Pages (/gelateria) ↔ domaine custom sans refactor.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME = "Amore Mio";
export const SITE_TAGLINE = "L'Atelier de la Glace";
export const WHATSAPP_NUMBER = "21629481736";
export const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * URL absolue robuste au subpath — jamais de "/path" root-relative pour l'OG.
 * absoluteUrl("og-image.jpg") → `${SITE_URL}/og-image.jpg`
 */
export const absoluteUrl = (p = ""): string =>
  new URL(p.replace(/^\//, ""), `${SITE_URL}/`).toString();

/**
 * Chemin d'asset préfixé du basePath (GH Pages /gelateria) pour les <img> bruts.
 * En static export, basePath n'est PAS auto-ajouté aux src d'<img> (contrairement
 * aux imports statiques). asset("/photos/x.webp") → "/gelateria/photos/x.webp".
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string): string =>
  `${BASE_PATH}${p.startsWith("/") ? p : `/${p}`}`;

export const WHATSAPP_LABEL = "Commander sur WhatsApp";
