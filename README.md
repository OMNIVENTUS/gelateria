# gelateria — Amore Mio

Site vitrine **Amore Mio — L'Atelier de la Glace** (gelateria artisanale, La Marsa / Tunis), reconstruit **proprement** à partir de l'export Claude Design.

**Stack :** Next.js 15 (App Router, TypeScript) · Tailwind CSS v4 · Storybook + tests visuels · pnpm · Node 20.
**Build :** static export (`output: 'export'`) → **GitHub Pages** (`https://omniventus.github.io/gelateria/` aujourd'hui, domaine custom plus tard).

> 📖 **Le mode d'emploi complet est dans [`CLAUDE.md`](./CLAUDE.md)** : ingestion de l'export, design system, SEO/OG, performance, déploiement, et le protocole de sessions **à double gate** (designer + testeur fourbe). À lire avant toute contribution.

## Démarrage
Le repo ne contient pour l'instant que la documentation et la convention de dossiers ; l'app Next.js est à échafauder **en suivant `CLAUDE.md`**, dans cet ordre : (1) design system (tokens → `@theme`, composants, Storybook, tests visuels **verts**), puis (2) les pages (accueil, carte, histoire, professionnels), une par session orchestrée.

```bash
pnpm install
pnpm dev            # développement
pnpm build          # static export → out/
pnpm storybook      # design system + référence du Gate visuel
```

## Structure
- `CLAUDE.md` — playbook du projet (règles, qualité, orchestration).
- `standalone_export/` — **source de vérité** : les exports Claude Design déposés par le client (voir son README).
- `app/`, `src/`, `lib/`, `public/`, `.storybook/`, `tests/` — à créer selon `CLAUDE.md`.

## ⚠️ À fournir (bloquants / à confirmer avant prod)
Ces éléments ne sont **pas** dans l'export et ne doivent **pas** être inventés :

| Élément | Détail | Impact |
|---|---|---|
| **Police Satoshi (`.woff2`)** | Corps de texte/UI de la marque. Absente de l'export (chargée en `@import` CDN Fontshare). Poids `400/500/700` (+ italique si utilisé). Gratuite sur [Fontshare](https://www.fontshare.com/fonts/satoshi). | **Bloquant** : sans les binaires, impossible de self-host le body (perf + self-contained). |
| **Export(s) Claude Design** | Le zip (ou décompressé) à déposer dans `standalone_export/`. | **Bloquant** : c'est la source de vérité du DS et des pages. |
| **Horaires d'ouverture** | Valeur réelle pour `openingHours` (JSON-LD). Placeholder dans le code. | SEO local incorrect si non confirmé. |
| **Fourchette de prix** | `priceRange` (JSON-LD). | SEO local. |
| **Handle Instagram exact** | `amoremio.tn` (vu dans la v2) vs `amoremio.gelateria` (ancienne section) — à trancher. | `sameAs` JSON-LD + lien footer. |
| **Domaine custom final** | Pour `public/CNAME` + bascule `NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_BASE_PATH`. | URLs OG/canonical + assets. |
| **Logo vectoriel original** | L'export n'a qu'une **marque photographique** (`assets/logo-sign-gold.jpg`). Ne pas redessiner/vectoriser. | Rendu net / print / favicon SVG. |

Les autres polices (Cormorant Garamond, Marcellus) sont sur Google Fonts → récupérables et self-hostables sans dépendance client.
