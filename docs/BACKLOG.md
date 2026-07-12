# BACKLOG V2 — Amore Mio

> Ordre **imposé** par CLAUDE.md : Scaffold → Design System (bloquant) → 4 pages v2 → Transverses.
> Chaque tâche est DONE seulement en **double PASS** (Gate 1 convergence ≥ 97 % sur tous les viewports + 0 violation d'invariant ; Gate 2 QA adversarial 0 bloquant), preuves à l'appui (CLAUDE.md §9).
> Seuil de convergence : score page = **MIN sur les viewports 1440/1024/768/390**.

## Journal de statut
| Tâche | Titre | Statut | Gate 1 | Gate 2 | Notes |
|---|---|---|---|---|---|
| T0 | Scaffold | 🟡 En cours | — | — | backlog validé, décisions verrouillées |
| T1 | Design System | ⬜ Bloquant | — | — | aucune page avant DS vert |
| T2 | Page Accueil | ⬜ Bloqué par T1 | — | — | dépend décision hero-scrim |
| T3 | Page La Carte | ⬜ Bloqué par T1 | — | — | prix DT fournis |
| T4 | Page Notre histoire | ⬜ Bloqué par T1 | — | — | texte placeholder client |
| T5 | Page Professionnels | ⬜ Bloqué par T1 | — | — | CTA « devis » |
| T6 | Transverses (SEO/OG, deploy, perf) | ⬜ Bloqué par T2-5 | — | — | |

Légende : ⬜ à faire · 🟡 en cours · 🔵 en QA · ✅ double PASS · 🔴 FAIL (rebouclé)

---

## T0 — Scaffold
**Objectif** : socle Next.js 15 statique conforme à la stack imposée, prêt pour DS + pages.
**Sources** : CLAUDE.md §3-§7 ; `tokens/*.css` ; `public/fonts/` (Satoshi déjà présent).
**Livrables** :
- Next 15 App Router, TypeScript **strict**, pnpm (`pnpm-lock.yaml` committé), Node 20.
- `next.config.ts` : `output:'export'`, `images.unoptimized:true`, `basePath`/`assetPrefix` pilotés par `NEXT_PUBLIC_BASE_PATH`, `trailingSlash:true`.
- `src/styles/globals.css` : `@import "tailwindcss"` + `@theme` reprenant **toutes** les valeurs des tokens (§ANALYSE-V2 §1), reset, `focus-visible` global (ring Caramello 2px offset 3px). Aucun `tailwind.config`.
- Fonts self-host `next/font/local` (Cormorant, Marcellus, Satoshi) reliées aux `--font-*` ; `preload` display hero uniquement.
- Phosphor Light self-host/bundle (pas de CDN).
- `lib/site.ts` (SITE_URL, SITE_NAME, WHATSAPP, `absoluteUrl`), Storybook + Playwright test-runner installés, lint d'adhérence (oxlint depuis `_adherence.oxlintrc.json`) branché en CI locale.
**Critères d'acceptation** :
- [ ] `pnpm install`, `pnpm build` (→ `out/`), `pnpm storybook`, `pnpm lint`, `pnpm typecheck` verts.
- [ ] `@theme` = valeurs tokens exactes (diff automatisable vs `_ds_manifest.json`).
- [ ] Zéro requête réseau tierce (fonts/icônes) au runtime (vérif build `out/`).
- [ ] `NEXT_PUBLIC_BASE_PATH=/gelateria` → assets référencent `/gelateria/_next/…`.
**Artefacts de preuve** : sortie build, capture Storybook vide vert, grep `out/` (0 CDN), rapport lint.

## T1 — Design System (BLOQUANT)
**Objectif** : livrer les primitives DS + les patterns/layout v2, documentés Storybook, tests visuels 3 moteurs **verts**. Aucune page ne démarre avant.
**Sources** : `_ds_manifest.json`, `_adherence.oxlintrc.json`, `parts.jsx`, `nav-v2.jsx`, guidelines DS, `readme.md` invariants.
**Livrables** :
- Primitives à API verrouillée : `Button`, `Badge`, `Icon`, `Card`, `SectionHeading`, `FlavorCard` (props = ANALYSE-V2 §2).
- Patterns/layout : `Wordmark`, `WaGlyph`, `PrimaryCta` (button-in-button), `AmNav` (bar desktop + container-query mini-CTA + burger + overlay), `Footer`, `FabWhatsApp`, `SignatureCard`, `MenuLine`, `HoursTable`, `V2Title`.
- Barrel `index` (lint interdit l'import d'internals).
- 1 story **par composant ET par état** (default/hover/focus-visible/active/disabled), chaque variant×size, `whatsapp` (libellé + glyphe exacts), Card hover (−3px + `--shadow-lg`), FlavorCard row+tile, + stories de sections (Hero, marquee, bento, overlay mobile ouvert, FAB, footer).
- Baselines tests visuels committées.
**Critères d'acceptation** :
- [ ] Lint d'adhérence **vert** (hex/px bruts bloqués, fonts DS only, props/variants conformes).
- [ ] 100 % des stories snapshotées **vertes** sur **Chromium + Firefox + WebKit**, multi-viewport (360/375/390/430 · 768/1024 · 1440), fonts+images attendues avant capture.
- [ ] Invariants §2 respectés (palette figée, 1 accent, radius lock, type stack, Phosphor Light, ombres chaudes, 0 dégradé — sauf décision hero).
- [ ] CTA AA : `--caramello-ink` + blanc ≥ 4.5:1 (calculé) ; taupe réservé bordures.
**Artefacts de preuve** : rapport lint, rapport test-runner 3 moteurs, captures stories clés.

## T2 — Page Accueil
**Objectif** : porter `V2Page` (12 sections) en TSX Server Components.
**Sources** : `v2-board.jsx`, `v2-sections-a.jsx`, `v2-sections-b.jsx`, `nav-v2.jsx`, `parts.jsx`. Baseline : `Accueil v2.html` / standalone.
**Livrables** : route `app/page.tsx` (Server Components) ; feuilles `"use client"` uniquement pour nav overlay, reveals IO, marquee, galerie scroll-snap, FAB ; images WebP optimisées ; metadata page.
**Critères d'acceptation** :
- [ ] Ordre + contenu des 12 sections fidèles (ANALYSE-V2 §4).
- [ ] Convergence ≥ 97 % sur 1440/1024/768/390 (Gate 1) + 0 violation invariant.
- [ ] QA §8 (Gate 2) : 0 débordement à 360px, WebKit OK, AA calculé, focus-visible, ≥44px/≥14px, landmarks + skip-link, overlay scroll-lock/Escape, FAB apparition/masquage, reduced-motion, liens WhatsApp exacts (`wa.me/21629481736`, target/rel).
**Artefacts** : screenshots référence vs rendu par viewport + scores, findings Gate 2 avec preuves, poids page/JS.

## T3 — Page La Carte
**Sources** : `carte-v2-board.jsx`, `carte-v2-sections.jsx`. Baseline : `Carte v2.html`.
**Livrables** : route `app/carte/page.tsx` ; groupes en colonnes (`column-count`) avec `break-inside:avoid` ; bandeaux 21:9 ; lignes prix `tabular-nums` + pointillés ; encart IG ; CTA final.
**Critères d'acceptation** :
- [ ] Tous les groupes + prix DT réels fidèles (ANALYSE-V2 §4).
- [ ] Prix Satoshi 500 alignés droite, pointillés `--taupe-40`.
- [ ] Convergence ≥ 97 % (Gate 1) + Gate 2 (dont pas de casse des colonnes < 360px).
**Artefacts** : idem T2.

## T4 — Page Notre histoire
**Sources** : `histoire-board.jsx`. Baseline : `Notre histoire.html`.
**Livrables** : route `app/histoire/page.tsx` ; hero, récit avec **placeholders client conservés** (décision), convictions hairline, bandeau photo, clôture + PrimaryCta.
**Critères d'acceptation** :
- [ ] Structure fidèle ; placeholders `[Texte à fournir]` rendus comme dans la référence (ou contenu réel si fourni).
- [ ] Convergence ≥ 97 % (Gate 1) + Gate 2.
- [ ] Point client « texte histoire » signalé, non inventé.
**Artefacts** : idem T2.

## T5 — Page Professionnels
**Sources** : `pro-board.jsx`. Baseline : `Professionnels.html`.
**Livrables** : route `app/professionnels/page.tsx` ; hero split, prestations, desserts signature, étapes, CTA final `#contact-pro` ; nav `cta='devis'`.
**Critères d'acceptation** :
- [ ] Structure fidèle ; CTA « Demander un devis » (décision confirmée).
- [ ] Convergence ≥ 97 % (Gate 1) + Gate 2 (ancre `#contact-pro`, tel/email exemple signalés).
**Artefacts** : idem T2.

## T6 — Transverses (SEO/OG · Déploiement · Perf)
**Objectif** : rendre le site indexable, partageable et déployable, perf validée.
**Sources** : CLAUDE.md §5-§7, `export/og-image.jpg`.
**Livrables** :
- Metadata API par page (title/description/canonical), `metadataBase`, openGraph + twitter, OG image relative (jamais `/og-image.jpg` root sous basePath).
- JSON-LD `IceCreamShop` (Server Component) ; `sitemap.ts` + `robots.ts` (`force-static`, URLs absolues).
- `.github/workflows/deploy.yml` (build pnpm → `out/` → Pages, `.nojekyll`).
- Pipeline images finalisée, budget perf (0 runtime Babel, Server Components, LCP mobile bas).
**Critères d'acceptation** :
- [ ] **Régression OG vérifiée par fetch brut du HTML statique** (vue scraper sans JS) : balises `og:*`/`twitter:*` présentes, `og:image` = `…/gelateria/og-image.jpg`.
- [ ] JSON-LD valide ; sitemap/robots URLs absolues ; 1 seul `<h1>` par page ; canonicals uniques.
- [ ] Lighthouse/CWV ≥ 90 (perf + SEO) ; build `out/` déployable.
**Artefacts** : HTML fetché commenté, rapport Lighthouse, run workflow (dry ou réel).

---

## Décisions verrouillées (validées client, 2026-07-12)
1. **Hero scrim** : on **garde le `linear-gradient`** du hero (fidélité ≥97 %). Exception assumée et **circonscrite au seul voile de lisibilité du hero** ; partout ailleurs l'invariant « aucun dégradé » reste strict (le lint/Gate 1 ne tolère le gradient que sur le hero).
2. **Contenu placeholder** : on **garde les encarts « exemple » et le placeholder `[Texte à fournir]`** exactement comme la référence, en attendant le contenu client. Le site public affiche donc ces marqueurs jusqu'à livraison.
3. **Backlog validé** : démarrage T0.

## Points à confirmer client (voir ANALYSE-V2 §6-§7) — à ne pas inventer
Adresse, horaires (harmoniser), téléphone/WhatsApp, email pro, Instagram, **texte « Notre histoire »**, domaine custom. (Décisions design tranchées ci-dessus.)
