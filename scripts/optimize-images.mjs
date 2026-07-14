#!/usr/bin/env node
// Pipeline images (CLAUDE.md §5) : photos portrait → WebP net, multi-largeurs
// pour srcset responsive. Génère aussi un manifeste TS (dimensions intrinsèques
// + variantes) consommé par <Photo> et photoSources().
//
// Netteté : les photos sont PORTRAIT, affichées dans des slots « cover » → c'est
// la LARGEUR qui remplit le slot. On plafonne donc la largeur (jamais d'upscale)
// et on décline une échelle de largeurs pour que mobile télécharge léger et que
// le desktop Retina reçoive le net.
//
// Usage : node scripts/optimize-images.mjs
import { readFile, writeFile, mkdir, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = "standalone_export/assets/photos";
const OUT = "public/photos";
const MANIFEST = "lib/photos.generated.ts";
const OG_SRC = "standalone_export/export/og-image.jpg";
const OG_OUT = "public/og-image.jpg";

const MAX_W = 1400; // largeur max (px) — plafond retina du plus large slot desktop
const LADDER = [640, 1024]; // largeurs intermédiaires (mobile / tablette)
const QUALITY = 82;
const EFFORT = 6;

// Photos réellement référencées par les planches v2.
const PHOTOS = [
  "4L0A7727", "4L0A7778", "4L0A7834", "4L0A7910", "4L0A7979",
  "4L0A8006-Edit", "4L0A8078", "4L0A8136-Edit", "4L0A8175", "4L0A8201",
  "4L0A8245", "4L0A8296", "4L0A8414", "4L0A8422", "IMG_9425", "IMG_9461",
];

await mkdir(OUT, { recursive: true });

/** Encode `buf` (déjà redimensionné) en WebP vers `file`. */
async function toWebp(buf, file) {
  await sharp(buf)
    .webp({ quality: QUALITY, effort: EFFORT, smartSubsample: true })
    .toFile(file);
}

const manifest = {};

for (const name of PHOTOS) {
  const input = path.join(SRC, `${name}.jpg`);
  if (!existsSync(input)) {
    console.warn(`MANQUANT : ${input}`);
    continue;
  }
  const src = await readFile(input);
  const meta = await sharp(src).metadata();

  // Largeur du variant plein = min(source, MAX_W) ; jamais d'upscale.
  const fullW = Math.min(meta.width, MAX_W);
  const fullH = Math.round((meta.height * fullW) / meta.width);

  // Échelle : intermédiaires < fullW, puis fullW. Dédupliqué, trié.
  const widths = [...new Set([...LADDER.filter((w) => w < fullW), fullW])].sort(
    (a, b) => a - b,
  );

  for (const w of widths) {
    const resized = await sharp(src)
      .resize({ width: w, withoutEnlargement: true })
      .toBuffer();
    // Le plus grand variant garde le nom canonique (name.webp) ; les autres name-<w>.webp.
    const file = w === fullW ? `${name}.webp` : `${name}-${w}.webp`;
    await toWebp(resized, path.join(OUT, file));
  }

  manifest[`${name}.webp`] = { w: fullW, h: fullH, variants: widths };
}

// Manifeste TS (généré — ne pas éditer à la main).
const body = `// Généré par scripts/optimize-images.mjs — NE PAS ÉDITER À LA MAIN.
// Dimensions intrinsèques (px) + largeurs de variants disponibles par photo.
export type PhotoMeta = {
  /** Largeur intrinsèque du variant plein (px). */
  w: number;
  /** Hauteur intrinsèque du variant plein (px). */
  h: number;
  /** Largeurs disponibles (asc). La plus grande = fichier canonique \`name.webp\`. */
  variants: number[];
};

export const PHOTOS: Record<string, PhotoMeta> = ${JSON.stringify(manifest, null, 2)};
`;
await writeFile(MANIFEST, body, "utf8");

// OG image (1200×630) → public/ (SEO/OG).
if (existsSync(OG_SRC)) await cp(OG_SRC, OG_OUT);

const count = Object.keys(manifest).length;
console.log(`=== résultat ===`);
console.log(`photos traitées : ${count}`);
console.log(`manifeste : ${MANIFEST}`);
