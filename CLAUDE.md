# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# `gelateria` (Amore Mio)

## 0. État actuel du repo (pre-scaffold — lire en premier)
Le repo ne contient pour l'instant que la **documentation** : `CLAUDE.md`, `README.md`, `.gitignore`, `standalone_export/README.md`. **Rien n'est encore échafaudé** — pas de `package.json`, `app/`, `src/`, `lib/`, `.storybook/`, `tests/`, ni `next.config.ts`. Les commandes `pnpm dev/build/storybook` (README) ne tournent donc pas encore : l'app est à créer en suivant ce document (§3 puis §4+).

⚠️ **`standalone_export/` est VIDE** (seulement son README). La « source de vérité » (§1) — `_ds/`, `planche/*.jsx`, photos, previews, `og-image.jpg` — **n'a pas encore été déposée par le client**. Aucune session (DS ou page) ne peut démarrer tant que l'export n'est pas là : c'est un **bloquant**, ne rien inventer (cf. §8 et README « À fournir »).

## Rôle du projet
Recréer **proprement en Next.js** le site vitrine **Amore Mio — L'Atelier de la Glace** (gelateria artisanale, La Marsa / Tunis), qui existait comme export HTML « bundler » Claude Design (React/Babel rendu dans le navigateur — lent, non indexable, aperçus sociaux cassés).

**Stack imposée :** Next.js 15 (App Router, TypeScript strict) · **Tailwind CSS v4** (CSS-first) · **Storybook** + **tests visuels** · **pnpm** (jamais npm/yarn ; committer `pnpm-lock.yaml`) · Node 20 LTS.
**Cible de build :** **static export** (`output: 'export'`) → **GitHub Pages**.

**Ordre de travail :** (1) insérer et livrer le **design system** (composants + tokens + Storybook + tests visuels **verts**) ; (2) SEULEMENT ENSUITE développer les pages une à une (accueil, carte, histoire, professionnels), chacune en **session orchestrée à double gate** (§7).

---

## 1. Source de vérité : `standalone_export/`
Le client dépose dans `standalone_export/` (à la racine) l'export Claude Design (zip, parfois décompressé). **C'est la source de vérité. On ne réinvente rien : on lit, on mappe, on porte.**

| Où regarder | Quoi en faire |
|---|---|
| `_ds/<nom-ds>/tokens/*.css` | Tokens (CSS custom properties) → **mapper en `@theme` Tailwind v4** (§3), valeurs **exactes**. |
| `_ds/<nom-ds>/readme.md` | **Invariants de marque VERROUILLÉS** (§2). Non négociables. |
| `_ds/<nom-ds>/_ds_manifest.json` | Inventaire composants + toutes les valeurs de tokens + statut fonts (`Satoshi: maybe-remote`). Référence machine. |
| `_ds/<nom-ds>/_adherence.oxlintrc.json` | Règles d'adhérence DS → **intégrer au lint** du repo (§3). |
| `planche/*.jsx` | **Structure, contenu et comportement réels** des pages/sections. À **porter proprement en TSX**, jamais copier-coller. `site-v2-app.jsx` = routage + breakpoints (≥1024 `d`, ≥640 `t`, sinon `m`) ; `parts.jsx` = patterns réels (`PrimaryCta`, `NavPillDesktop`, `NavMobileOverlay`, `SignatureCard`, `MenuLine`, `FabWhatsApp`, `Wordmark`). |
| `assets/photos/*` + `uploads/*` | Vraies photos (~2000px, surdimensionnées) → **optimiser avant commit** (§5). |
| `assets/logo-sign-gold.jpg` | Marque **canonique** (photo). Pas de logo vectoriel : **ne pas redessiner/vectoriser**. Wordmark = Marcellus caps + tagline Cormorant italique. |
| `Guide animations & QA.md` + `guidelines.md` | Specs motion (tokens ease/durées), reveals, overlay mobile, FAB, `prefers-reduced-motion`, checklists QA. À respecter tel quel. |
| previews `*.html` + `export/` (`og-image.jpg` 1200×630) | **Références visuelles du Gate 1** + image OG. |

---

## 2. Invariants de marque VERROUILLÉS (un manquement = FAIL de session)
Extraits du `readme.md` du DS. Verrouillés client, ne pas « corriger » :
- [ ] **Palette figée** : Crema `#F6F1E8` / Sabbia `#EAE0D0` / Taupe `#A6988A` / Espresso `#37281D` / Latte `#FFFFFF` + **un seul accent Caramello `#B97C3F`**. Aucun autre hex saturé dans l'UI ; la couleur vive vient **uniquement des photos**.
- [ ] **Thème clair only** (footer Espresso = seule surface sombre). **Aucun dégradé** (aplats seuls).
- [ ] **Ombres chaudes uniquement** : `rgba(55,40,29, a)`. Jamais gris/noir/coloré, jamais d'inner-shadow.
- [ ] **Type stack** : Cormorant Garamond 600 (display ; italique même famille pour les mots italiens), Marcellus caps (labels, rares, trackés), Satoshi (body/UI). **Interdits : Inter, Roboto, Fraunces, Instrument Serif.**
- [ ] **Radius lock** : boutons pill / cartes 24px / images 16px / petits champs 10px.
- [ ] **Icônes** : Phosphor **Light** (stroke 1.5) only. Pas de filled/bold/duotone, pas de SVG ad hoc, **pas d'emoji**. Seule exception : le glyphe WhatsApp du CTA.
- [ ] **Un seul CTA** partout : **« Commander sur WhatsApp »** → `https://wa.me/21629481736` (`target="_blank" rel="noopener"`). Jamais de second verbe d'intention.
- [ ] **Contenu** : FR base, mots italiens en italique Cormorant, anglais jamais public. Prix `« 4,5 DT »` (virgule décimale). Pas d'em-dash, pas de superlatifs empilés.

---

## 3. Design system (Tailwind v4 + Storybook + tests visuels)
**Le DS est la 1re session. Il doit être livré, documenté en Storybook et VERT (lint + tests visuels 3 moteurs) AVANT toute page.**

### Tokens → `@theme` (CSS-first)
Reprendre les valeurs **exactes** des `tokens/*.css` dans un unique `@theme` (`src/styles/globals.css`) — pas de `tailwind.config`, pas de valeur littérale ailleurs. Extrait fidèle (reprendre AUSSI `--space-*`, `--taupe-40/60`, `--espresso-70/45`, `--tracking-*`, `--lh-*`, `--container*`, `--gutter`, alias sémantiques `--accent`/`--border`/`--text-primary`) :

```css
@import "tailwindcss";
@theme {
  --color-crema:#F6F1E8; --color-sabbia:#EAE0D0; --color-taupe:#A6988A;
  --color-espresso:#37281D; --color-latte:#FFFFFF;
  --color-caramello:#B97C3F;        /* accent unique */
  --color-caramello-ink:#9A6531;    /* CTA/press — AA sur blanc (§6) */
  --radius-pill:999px; --radius-card:24px; --radius-image:16px; --radius-sm:10px;
  --shadow-md:0 8px 24px rgba(55,40,29,.08); --shadow-lg:0 18px 48px rgba(55,40,29,.12);
  --text-display:clamp(3rem,6vw,5.25rem); --text-h1:clamp(2.4rem,4.2vw,3.5rem);
  --font-display:'Cormorant Garamond',Georgia,serif;
  --font-body:'Satoshi',ui-sans-serif,system-ui,sans-serif;
  --ease:cubic-bezier(.22,.61,.36,1); --dur-fast:140ms; --dur-base:220ms; --dur-slow:420ms;
}
```

### Composants à porter (`_ds_manifest.json` + `planche/parts.jsx`)
`Button` (`primary|secondary|ghost` × `sm|md|lg`, `whatsapp`, `href`, `icon`, `disabled`) · `Badge` (`outline|solid|muted`, `dot`) · `Icon` (wrapper Phosphor Light) · `Card` (`image`, `aspect`, `hover`) · `SectionHeading` (`eyebrow`, `title`, `lead`, `align`, `as`) · `FlavorCard` (`row|tile`, prix `tabular-nums` + pointillés taupe). **L'API de chaque composant est exactement celle-ci** — toute prop hors liste est un bug (le lint le fait respecter).

### Lint d'adhérence
Reprendre/adapter `_adherence.oxlintrc.json` : bloquer **hex/px bruts** (forcer `var(--token)`/classes), interdire les **fonts hors DS**, contraindre les **props/variants** à leur API, interdire l'import d'internals hors barrel. Tourne en CI local **et** au Gate 1.

### Storybook — une story par composant ET par état
`default` / `hover` / `focus-visible` / `active` / `disabled` (états forcés). Couvrir chaque variant×size, `whatsapp` (libellé exact + glyphe), `Card` hover (lift −3px + `--shadow-lg`), `FlavorCard` `row`+`tile`, et des **stories de sections/pages** (Hero, marquee parfums, grille signatures, overlay mobile ouvert, FAB, footer) rejouant la référence Claude Design (`planche/*.jsx` + previews).

### Tests visuels (régression)
**Storybook test-runner + Playwright** : snapshot de **chaque story**, **multi-viewport** (360/375/390/430 · 768/1024 · 1440) sur **Chromium + Firefox + WebKit**. Baselines committées ; diff pixel = échec ; attendre fonts/images avant capture. **Livraison DS = lint vert + 100% stories snapshotées vertes sur les 3 moteurs.** Sinon aucune page ne démarre.

---

## 4. Structure & découpage rendu
```
gelateria/
├─ app/                 # routes (page.tsx = Server Components), layout.tsx, sitemap.ts, robots.ts
├─ src/
│  ├─ styles/globals.css   # @theme (§3) + reset + focus-visible global
│  ├─ components/{ui,layout,sections}/  # portés depuis planche/*.jsx
│  └─ fonts/               # 3 fonts self-hostées (next/font/local)
├─ lib/                 # site.ts (env + absoluteUrl), jsonLd
├─ public/              # images WebP pré-optimisées + og-image.jpg + CNAME (custom)
├─ standalone_export/   # export Claude Design brut (source de vérité, non déployé)
├─ .storybook/  tests/  # stories + Playwright multi-viewport/moteur
├─ next.config.ts  .github/workflows/deploy.yml
```
**Server Components par défaut.** `"use client"` UNIQUEMENT sur les feuilles interactives (nav overlay, reveals IntersectionObserver, FAB, marquee) — jamais remonter la moitié de l'arbre.

---

## 5. Performance & self-contained (barre imposée — leçon v1 : 11,6 Mo, Babel runtime, photos 2000px, Satoshi CDN)
Le static export **n'optimise RIEN au runtime** (`images.unoptimized:true`) → fonts et images optimisées **à l'ingest, une fois, avant commit**.

- **Self-host des 3 fonts via `next/font/local`** (le DS les charge en `@import` Fontshare/Google — **supprimer toute requête tierce**). Récupérer les `.woff2` Satoshi depuis Fontshare → `src/fonts/`. `display:'swap'`, variables reliées aux tokens `--font-*`, **`preload` uniquement la display du hero** (Cormorant), `preload:false` sur les poids secondaires.
- **Pipeline images obligatoire** : photos `standalone_export/{assets,uploads}/*.jpg` (~2000px, affichées ≤ ~700px) → redimensionner à **la taille réelle ×2 (retina), max ~1400px** puis **WebP q80**, dans `public/` :
  ```bash
  sips -Z 1400 in.jpg --out tmp.jpg && cwebp -q 80 tmp.jpg -o public/photo.webp
  ```
  Gain à respecter : **~80% images, ~−51% fichier**. WebP = ~99% du parc (Safari 14+).
- **Par image** : hero `priority` (→ `fetchpriority=high` + preload) + `sizes` réel + dimensions intrinsèques (0 CLS) ; sous le pli `loading="lazy"` ; `sizes` toujours cohérent avec la largeur d'affichage.
- **Budget** : zéro runtime React/Babel embarqué (le mal de la v1), pas de lib d'animation lourde (reveals = IntersectionObserver + CSS), Server Components. Cible **LCP mobile bas**. Vérifier poids/JS de chaque page avant de clore une session.

---

## 6. SEO / Open Graph / données structurées
**Leçon v1 non négociable :** l'export bundlé rendait tout en JS → scrapers **WhatsApp/Facebook/Twitter/iMessage** (aucun JS) ne lisaient **aucune** balise OG → aperçus cassés. En **Next.js static export, la Metadata API écrit les `<meta>` dans le HTML au build** (`out/**/*.html`) → **résolu par construction**. **Toujours passer par la Metadata API ; jamais de `<meta>` OG côté client / dans un `"use client"`.**

- **URLs pilotées par env** (bascule GH Pages `/gelateria` → domaine custom **sans refactor**). Tout dérive de `NEXT_PUBLIC_SITE_URL` via `metadataBase`. Centraliser :
  ```ts
  // lib/site.ts
  export const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  export const SITE_NAME = "Amore Mio";
  export const WHATSAPP  = "https://wa.me/21629481736";
  // URL absolue robuste au subpath — jamais de "/path" root-relative pour l'OG :
  export const absoluteUrl = (p = "") => new URL(p.replace(/^\//, ""), SITE_URL + "/").toString();
  ```
- **`app/layout.tsx`** : `<html lang="fr">`, `metadata.metadataBase = new URL(SITE_URL)`, `title.template`, `openGraph` (type website, siteName, `locale:'fr_FR'`, `url:'/'`, `images:[{url:'og-image.jpg',width:1200,height:630,alt}]`), `twitter:'summary_large_image'`. **Chaque `page.tsx`** exporte son `metadata`/`generateMetadata` qui **surcharge** `title`/`description`/`alternates.canonical` — jamais deux pages avec le même title/canonical.
- **Image OG (piège basePath, bug réel) :** copier `standalone_export/export/og-image.jpg` (1200×630) → `public/og-image.jpg`. Sous basePath `/gelateria`, un `/og-image.jpg` root-relative **404** → passer l'OG en **relatif sans slash** (`"og-image.jpg"`) ou via `absoluteUrl(...)`, jamais `"/og-image.jpg"`. Vérifier dans le HTML : `og:image` = `…/gelateria/og-image.jpg`.
- **`app/sitemap.ts` + `app/robots.ts`** (`dynamic='force-static'`) avec URLs **absolues** via `absoluteUrl`. `alternates.canonical` sur chaque page.
- **JSON-LD `IceCreamShop`** dans le layout via **Server Component** (`<script type="application/ld+json" dangerouslySetInnerHTML>` — pas `next/script`) : name, description, `image`/`url` **absolus**, `telephone:'+21629481736'`, address (Avenue Habib Bourguiba, La Marsa, Tunis, TN), `priceRange`, `servesCuisine:'Gelato'`, `openingHours`, `sameAs:[Instagram]`. (`priceRange` + `openingHours` = **à confirmer client**, cf. §8.)

---

## 7. Déploiement GitHub Pages
`basePath`/`assetPrefix` **pilotés par env** :
```ts
// next.config.ts
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';   // "/gelateria" (Pages) | "" (custom)
export default {
  output: 'export', images: { unoptimized: true },
  basePath, assetPrefix: basePath || undefined,
  trailingSlash: true,   // /carte/ → /carte/index.html (pas de 404 au refresh)
};
```
```yaml
# .github/workflows/deploy.yml (push main → build pnpm → out/ → deploy Pages)
permissions: { pages: write, id-token: write, contents: read }
# checkout → pnpm/action-setup → setup-node(20,cache:pnpm) → pnpm i --frozen-lockfile
# → pnpm build (env: NEXT_PUBLIC_BASE_PATH=/gelateria, NEXT_PUBLIC_SITE_URL=https://omniventus.github.io/gelateria)
# → touch out/.nojekyll  (sinon Jekyll ignore _next/ → CSS/JS 404)
# → upload-pages-artifact(path:out) → deploy-pages
```
- **Piège basePath (cause n°1 d'assets/liens cassés) :** jamais de chemin absolu codé en dur (`/logo.jpg`, `href="/carte"`). Toujours `<Link href="/carte">` + **imports statiques d'images** (Next préfixe le basePath). Après build, vérifier que `out/**` référence `/gelateria/_next/...`.
- **Bascule domaine custom :** écrire le domaine dans `public/CNAME`, puis `NEXT_PUBLIC_BASE_PATH=""` + `NEXT_PUBLIC_SITE_URL=https://<domaine>`. **Aucun changement de code.**

---

## 8. Qualité — barre non négociable (échecs réels corrigés en v1)
Chaque page doit avoir ces propriétés **par construction** (ce sont les critères du Gate 2) :
- **Accessibilité AA :** contraste **calculé** — CTA texte/fond ≥ 4.5:1 (⇒ **fond `--caramello-ink #9A6531` + texte blanc = 4.9:1** ; le Caramello pur sur clair = 3.1:1 **échoue**) ; **taupe réservé aux bordures**, texte lisible en Espresso (le taupe sur clair = 2.5:1 **échoue**). **`focus-visible` jamais écrasé** par un `outline:none` inline (bug v1) — ring Caramello 2px offset 3px. Cibles **≥44px**, texte **≥14px**, un seul `<h1>`, tous les `alt`, **landmarks** `header/main/nav/footer` + **skip-link**.
- **Responsive :** **0 débordement horizontal jusqu'à 360px** (pire cas). Bascule hamburger, overlay (scroll-lock `body`, Escape, fermeture par lien + ancre), FAB (apparaît hors hero, disparaît sur CTA final).
- **Cross-browser :** rendu vérifié sur **Chromium + Firefox + WebKit (Safari/iOS — critique)**.
- **Motion :** reveals IntersectionObserver **fail-open** (contenu jamais bloqué à `opacity:0`) ; `prefers-reduced-motion: reduce` → aucune animation, tout visible.

**À confirmer avec le client avant prod (ne pas inventer) :** horaires (`openingHours`), fourchette de prix (`priceRange`), handle Instagram exact (`amoremio.tn` vu dans la v2), domaine custom final, et fourniture des binaires **Satoshi** `.woff2` (aucun n'était livré).

---

## 9. Orchestration des sessions & DOUBLE GATE (protocole réutilisable)
Toute session (insertion DS, puis **chaque page**) suit ce protocole. **DONE si et seulement si Gate 1 = PASS ET Gate 2 = PASS**, preuves à l'appui. Tout FAIL rouvre la boucle. Aucun merge ni page suivante sans double PASS.

**Rôles :**
- **IMPLEMENTER** — développe la tâche, livre code + build `out/` + stories/rendus. Lint d'adhérence vert. **Ne s'auto-valide jamais.**
- **Gate 1 — DESIGNER (tests visuels)** — compare le **rendu réel** (screenshots Playwright 360/390/430/768/1024/1440) à la **référence Claude Design** (previews `*.html`, `export/`, stories). Vérifie fidélité (layout, espacements, hiérarchie, photos 16px inset), **adhérence DS** (tokens only, radius lock, un seul accent, type stack, Phosphor Light, ombres chaudes, 0 dégradé) et les **invariants §2**. Artefacts : captures référence vs rendu par viewport + verdict + liste d'écarts. **PASS = 0 écart visuel bloquant + 0 violation d'invariant.**
- **Gate 2 — TESTEUR FOURBE (QA adversarial)** — **cherche activement à casser**, ne valide **jamais** sur build vert seul : exige des **preuves exécutées** (assertions, screenshots lus, ratios calculés, HTML fetché). Couvre toute la barre §8 + **régression SEO/OG par fetch brut du HTML** (vue scraper) + perf/poids. Artefacts : **findings priorisés** (bloquant/majeur/mineur) avec preuve par item. **PASS = 0 finding bloquant, 0 régression AA/SEO/overflow.**

**Ordre :** IMPLEMENTER → (lint vert + build) → **Gate 1** ; si PASS → **Gate 2** ; tout FAIL → retour IMPLEMENTER avec artefacts → re-run des gates. **DONE = double PASS.**

---

## Prérequis
- `pnpm`, Node 20. `gh` authentifié (org **OMNIVENTUS**). Pour les tests visuels : navigateurs Playwright (`pnpm exec playwright install chromium firefox webkit`).
- GitHub Pages : source = **GitHub Actions** (pas « branch »). Ne pas supprimer `out/.nojekyll`.

Réflexe skills d'abord. Toute création ou modification de feature commence par un brainstorming concerté (superpowers:brainstorming) puis s'appuie sur les skills adaptés de la marketplace. On ne code jamais une nouveauté avant d'avoir cadré l'intention.

Repo public. Aucun secret, clé, token ni PII committé. Les valeurs sensibles vivent en variables d'environnement (jamais NEXT_PUBLIC_* pour un secret), et .gitignore interdit les dumps/artefacts de données.

Standards non négociables. TypeScript strict (strict: true, zéro any non justifié). Internationalisable, français par défaut (jamais de FR-only en dur, jamais d'écran non traduit). A11y RGAA / WCAG AA minimum : focus visible, cursor: pointer sur tout cliquable, cibles tactiles ≥ 44×44px, navigation clavier complète, prefers-reduced-motion respecté. Thème clair unique (invariant marque §2 — pas de notion light/dark). Vitrine oblige : performance (Core Web Vitals / Lighthouse ≥ 90) et SEO sont des critères de done, pas des bonus. Aucun NaN, undefined ou état vide brut à l'écran (fallbacks explicites : empty state, error boundary).

Gate qualité obligatoire (HARD) avant de déclarer une tâche finie. Nécessaire mais pas suffisant : lint, typecheck, test verts. On lance ensuite /codebase-quality-auditor (puis on corrige tout finding lié au diff et on reboucle jusqu'à zéro), et un cycle qa-harness (unit + visuel light/dark + a11y). La preuve de "fait" est le rendu runtime observé, pas le gate vert. Toute vérification de complétion passe par superpowers:verification-before-completion (evidence before assertions).

Déploiement. Site déployé sur GitHub Pages (build statique). Conventional Commits atomiques par tâche, en français. Push uniquement sur demande. Le travail multi-fichiers / multi-couches se traite en mode orchestrateur (décompose → sous-agents → boucle dev/test/QA/fix), jamais en solo.

## QA — ne pas conclure « tests OK » sans le harness

Un gate vert (`pnpm lint && pnpm typecheck`, build, CI) **ne suffit pas** pour affirmer qu'une feature est correctement testée sur ce projet.

Le harness QA piloté par la donnée est initialisé : `.claude/qa.harness.json` + `docs/qa/` (FLOWS, REGRESSIONS, VISUAL, RGAA). **Avant** de dire que les tests sont fonctionnels ou qu'une feature est prête au merge :

1. **`qa-spec-author`** — si la feature touche des parcours non encore documentés : générer/mettre à jour les snippets `docs/qa/` (FLOW, REGRESSIONS, VISUAL, RGAA).
2. **`qa-harness`** — cycle QA ciblé sur le périmètre modifié : tests visuels stories (`pnpm test:visual`, 3 moteurs), **Gate 1** convergence (`node scripts/convergence.mjs`, seuil ≥ 90), **Gate 2** adversarial (`node scripts/qa.mjs` sur `out/`, 0 bloquant), a11y. Verdict **PASS** dans `docs/qa/QA_REPORT_*.md`.

Rappels projet : thème **light-only** (§2, pas de snapshot dark) ; la vérité visuelle est `standalone_export/` (pas de `visual_truth/`) ; la CI ne lance aucun test, les gates sont locaux.