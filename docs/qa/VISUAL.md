# VISUAL.md — Références visuelles & conformité design

> Source de vérité du QA visuel. Répertoire : **`standalone_export/`** (export Claude Design v2 — voir [CLAUDE.md §1](../../CLAUDE.md)).
> Contrairement au template générique, ce projet **ne crée pas** de dossier `visual_truth/` : la vérité visuelle EST `standalone_export/`, déjà utilisée par `scripts/convergence.mjs`.
> **Thème : LIGHT uniquement** (invariant marque §2). Pas de bascule dark.

## Où sont les références

### 1. `standalone_export/` (source de vérité)

- `standalone_export/Site Amore Mio v2.html` → référence de rendu comparée par le Gate 1 (`convergence.mjs`).
- `standalone_export/_ds/<ds>/` → tokens, `_ds_manifest.json`, invariants, règles d'adhérence.
- `standalone_export/planche/*.jsx` → structure/contenu réels des pages.
- `standalone_export/export/og-image.jpg` (1200×630) → image OG (copiée en `public/og-image.jpg`).

**Servir en local :**

```bash
cd standalone_export && python3 -m http.server 8770
# → http://127.0.0.1:8770/
```

| Écran / zone | Référence |
|--------------|-----------|
| Accueil (`/`) | `Site Amore Mio v2.html` (route accueil) + previews `standalone_export/*.html` |
| Carte (`/carte`) | `Site Amore Mio v2.html` (route carte) |
| Histoire (`/histoire`) | `Site Amore Mio v2.html` (route histoire) |
| Professionnels (`/professionnels`) | `Site Amore Mio v2.html` (route professionnels) |
| Composants DS | Stories Storybook (`pnpm storybook`) + `planche/parts.jsx` |

### 2. Baselines Storybook (régression pixel)

`tests/__snapshots__/{chromium,firefox,webkit}/` — snapshot de **chaque story** ×5 viewports (360/390/768/1024/1440), **commitées**. Diff > 0.01% = échec. Régénérer : `pnpm test:visual:update`.

### 3. Captures QA runtime

`docs/audits/shots/` — screenshots pris pendant les cycles `qa-harness` (`qa-<ecran>-<viewport>.jpeg`).
Diffs de convergence : `tests/convergence/*-diff.png` + `report.json` (gitignoré).

## Méthode de comparaison

1. `pnpm build` → `out/` (le Gate 1/2 travaillent sur le static export, pas sur `next dev`).
2. `node scripts/convergence.mjs` → ratio de concordance par page/viewport (seuil ≥ 90, score = MIN).
3. `node scripts/qa.mjs` → checks structurels/overflow/SEO sur `out/`.
4. Pour un écran modifié : comparer composition, hiérarchie, espacements, photos (inset 16px), tokens couleur à la référence.
5. Sauvegarder les captures dans `docs/audits/shots/`.

## Points de vigilance

- Pas de `NaN` / `undefined` à l'écran → fallback explicite.
- **Un seul accent Caramello** ; couleur vive uniquement dans les photos ; aucun dégradé ; ombres chaudes `rgba(55,40,29,·)`.
- Radius lock : pill / cartes 24 / images 16 / champs 10.
- Responsive : **0 débordement horizontal jusqu'à 360px**.
- Photos WebP pré-optimisées (pas de 2000px brut) ; hero `priority`.
