export type NavKey = "creations" | "atelier" | "histoire" | "pro" | "menu";

/** Liens de navigation v2 (ordre réel) — partagés Nav + Footer. */
export const NAV_LINKS: ReadonlyArray<readonly [NavKey, string, string]> = [
  ["creations", "Nos créations", "/#creations"],
  ["atelier", "L'atelier", "/#atelier"],
  ["histoire", "Notre histoire", "/histoire"],
  ["pro", "Professionnels", "/professionnels"],
  ["menu", "Menu", "/carte"],
];

export const DEVIS_HREF = "/professionnels#contact-pro";
