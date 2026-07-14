# Analytics GA4 + netteté des images — design

Date : 2026-07-14 · Statut : validé (implémentation locale demandée avant merge)

Deux tracks indépendants, tous deux petits. Aucun impact sur les invariants de
marque (§2). Cible de build inchangée : static export → GitHub Pages.

## Track A — Google Analytics 4 (recommandation Next.js)

**But** : instrumenter le site vitrine avec GA4, de la manière officiellement
recommandée pour Next.js, compatible `output: 'export'`.

- Dépendance : `@next/third-parties` (composant `GoogleAnalytics`, injecte
  `gtag` côté client via `next/script` — fonctionne en static export).
- ID : `GA_ID = process.env.NEXT_PUBLIC_GA_ID` dans `lib/site.ts`. Un
  Measurement ID GA4 est **public** → `NEXT_PUBLIC_*` est correct (pas un secret).
- Layout : `{GA_ID && <GoogleAnalytics gaId={GA_ID} />}` dans `app/layout.tsx`.
  **Dormant tant que l'env n'est pas défini** → zéro cookie visiteur, zéro
  requête tierce tant que l'ID n'est pas fourni.
- `.env.example` documente `NEXT_PUBLIC_GA_ID`.
- `.github/workflows/deploy.yml` : `NEXT_PUBLIC_GA_ID` ajouté au step build
  (vide pour l'instant, prêt à recevoir l'ID).

**Consentement** : hors périmètre v1 (décision client). GA4 chargé directement.
À régulariser (Consent Mode v2 + bannière) avant un usage grand public strict RGPD.

**Décision en attente client** : création de la propriété GA4 + fourniture du
`G-XXXXXXXXXX`.

## Track B — Netteté des images

**Diagnostic** : `scripts/optimize-images.sh` fait `sips -Z 1400` = plafond sur
le **plus grand côté**. Les photos sont **portrait** → la contrainte tombe sur la
*hauteur*, la **largeur** ressort trop petite (ex. `4L0A7979` : source 1238×2000
→ 866×1400). Or dans un slot « cover » paysage (~650 px CSS de large en desktop),
c'est la **largeur** qui remplit. Sur écran Retina (2×) le slot réclame ~1300 px
physiques ; on ne fournit que 866 → **upscale navigateur ~1.5× → flou**. La q80
n'est qu'un facteur secondaire.

**Correction livrée (srcset responsive + manifeste)** — cible la **largeur** et
règle aussi la nervosité mobile validée en second temps :
- Pipeline réécrit en Node/`sharp` (`scripts/optimize-images.mjs`, sharp déjà
  dépendance) : pour chaque photo, décline une échelle de largeurs
  `[640, 1024, native≤1400]` (jamais d'upscale), WebP q82 `smartSubsample`.
  Le plus grand variant garde le nom canonique `name.webp`, les autres
  `name-<w>.webp`.
- Manifeste généré `lib/photos.generated.ts` : `{ w, h, variants }` par photo →
  dimensions intrinsèques **exactes** (corrige au passage les `width/height`
  transposés du hero) + descripteurs `srcset` fiables.
- `lib/photos.ts` (`photoSources`) + `src/components/ui/Photo.tsx` : `<img>`
  responsive (src/srcSet/sizes/width/height/loading/fetchPriority). 11 sections
  portées sur `<Photo>` avec un `sizes` par layout ; hero + ProHero en `priority`.
  Les primitives DS `Card`/`FlavorCard` (API verrouillée §3, alimentées par un
  placeholder SVG en stories, jamais par une vraie photo) **ne sont pas touchées**.
- Effet : mobile télécharge le variant 640/1024, le desktop Retina reçoit le
  plein. Boutique : 82 KB (640) · 165 KB (1024) · 244 KB (1238) au lieu d'un
  unique 104 KB flou.

Pas de `next/image` : cohérent avec l'approche static-export / `images.unoptimized`.

## Vérification
- `pnpm lint` + `pnpm typecheck` verts.
- `pnpm dev` local : confirmation visuelle de la netteté (section « La boutique »)
  par le client avant tout merge/déploiement.
