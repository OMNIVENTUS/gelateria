/**
 * Helper srcset pour les photos pré-optimisées (static export → pas de next/image).
 * Lit le manifeste généré (lib/photos.generated.ts) et construit src / srcSet /
 * dimensions intrinsèques. Utilisé par <Photo> et par les primitives DS
 * (Card, FlavorCard) dont l'API publique est verrouillée (§3) : elles obtiennent
 * le srcset SANS nouvelle prop.
 */
import { asset } from "@/lib/site";
import { PHOTOS } from "@/lib/photos.generated";

export type PhotoSources = {
  src: string;
  srcSet?: string;
  width?: number;
  height?: number;
};

/**
 * `file` = nom canonique ("4L0A7979.webp") ou chemin ("/photos/4L0A7979.webp").
 * Photo inconnue du manifeste → `src` seul (repli défensif, aucun crash).
 */
export function photoSources(file: string): PhotoSources {
  const base = file.replace(/^.*\//, "");
  const meta = PHOTOS[base];
  const full = asset(`/photos/${base}`);
  if (!meta) return { src: full };

  const name = base.replace(/\.webp$/, "");
  const srcSet = meta.variants
    .map((w) =>
      w === meta.w ? `${full} ${w}w` : `${asset(`/photos/${name}-${w}.webp`)} ${w}w`,
    )
    .join(", ");

  return { src: full, srcSet, width: meta.w, height: meta.h };
}
