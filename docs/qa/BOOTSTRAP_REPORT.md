# Rapport Bootstrap QA — Amore Mio (gelateria) — 2026-07-12

Harness QA piloté par la donnée initialisé sur un repo **déjà scaffoldé et outillé** (branche `feat/v2-site`).
Le projet possédait déjà un dispositif QA maison mature — le bootstrap l'a **cartographié et formalisé** dans `docs/qa/` + `.claude/qa.harness.json`, sans réinventer.

## Stack détectée

| Point | Valeur |
|-------|--------|
| Stack | **Next.js 15 App Router** · static export (`output: 'export'`) · TypeScript strict · Tailwind v4 · React 19 |
| Package manager | **pnpm** 11.5.0 (Node ≥ 20) |
| App root | `.` (racine — `app/`, `src/`, `lib/`). `pnpm-workspace.yaml` présent mais **paquet unique**, pas un vrai monorepo. |
| Base branch | `main` |
| Routes publiques | `/` · `/carte` · `/histoire` · `/professionnels` (+ `sitemap.ts`, `robots.ts`) — **aucune auth** |
| Déploiement | GitHub Pages via `.github/workflows/deploy.yml` (build + deploy uniquement) |

## Inventaire tests

| Couche | Outil | Fichiers | Statut |
|--------|-------|----------|--------|
| Unit (logique) | — | 0 | **MANQUANT** (aucun vitest/jest) — peu critique sur une vitrine statique, mais `lib/site.ts` / `lib/jsonLd.ts` mériteraient un test |
| Visuel (régression) | Storybook test-runner + Playwright | 12 stories × 5 viewports × 3 moteurs, baselines commitées | ✅ OK (`pnpm test:visual`) |
| Gate 1 — convergence | `scripts/convergence.mjs` (Playwright + pixelmatch + sharp) | 4 pages × 4 viewports | ✅ OK (rapport `tests/convergence/report.json`) |
| Gate 2 — adversarial | `scripts/qa.mjs` (Playwright) | overflow / h1 / alt / CTA / reveals / cibles / SEO HTML brut | ✅ OK |
| E2E navigation | — | 0 | Pas de spec dédiée ; `qa.mjs` couvre l'essentiel par page |
| A11y automatisée | partielle via `qa.mjs` | — | **axe-core + Lighthouse À CONFIGURER** ; contraste non calculé programmatiquement |

Convergence actuelle (report.json) : accueil 95.0 · histoire 94.3 · professionnels ~ · **carte 88.9 (< seuil 90 → à traiter)**.

## Fichiers créés

- [x] `.claude/qa.harness.json` (commandes réelles + 2 gates maison + seuils)
- [x] `docs/qa/README.md`
- [x] `docs/qa/FLOWS.md` (6 flows initiaux)
- [x] `docs/qa/REGRESSIONS.md` (vide, structure + candidats v1)
- [x] `docs/qa/VISUAL.md` (pointé sur `standalone_export/`)
- [x] `docs/qa/RGAA.md`
- [x] `docs/audits/shots/.gitkeep`
- [x] `CLAUDE.md` — section `## QA — ne pas conclure « tests OK » sans le harness` ajoutée
- [ ] `visual_truth/` — **non créé volontairement** (voir Déviations)

## Déviations assumées vs template générique

1. **`visual_truth_dir` = `standalone_export/`** au lieu de créer `visual_truth/`. La vérité visuelle du projet est déjà l'export Claude Design, utilisé par `convergence.mjs` (`standalone_export/Site Amore Mio v2.html`). Créer un dossier concurrent vide aurait contredit la règle « ne rien inventer » (CLAUDE.md §1). Pas d'entrée `.gitignore` ajoutée (l'arbre `standalone_export/` extrait est déjà tracké, archives/blobs lourds déjà exclus).
2. **`themes: ["light"]`** — le site **n'a aucune notion light/dark** (confirmé, invariant marque §2 : *thème clair unique*). La ligne « Standards non négociables » de `CLAUDE.md` qui exigeait « Light ET dark vérifiés » a été **corrigée** pendant le bootstrap pour lever l'incohérence.

## FLOW initiaux proposés

| ID | Nom | Criticité | Couverture actuelle |
|----|-----|-----------|---------------------|
| FLOW-001 | Accueil `/` | HAUTE | `qa.mjs accueil` + story visuelles |
| FLOW-002 | Carte `/carte` | HAUTE | `qa.mjs carte` (convergence < 90 à corriger) |
| FLOW-003 | Histoire `/histoire` | MOYENNE | `qa.mjs histoire` |
| FLOW-004 | Professionnels `/professionnels` | MOYENNE | `qa.mjs professionnels` |
| FLOW-005 | Transverse nav/FAB/CTA WhatsApp | HAUTE | stories `Nav`/`FabWhatsApp`/`PrimaryCta` |
| FLOW-006 | Transverse SEO / OG (HTML statique) | HAUTE | `qa.mjs` seoCheck |

## Prochaines étapes (priorisées)

1. **Corriger la convergence de `/carte`** (88.9 < 90) avant tout merge Gate 1.
2. **Réconcilier light-only vs light+dark** dans `CLAUDE.md` (§2 fait foi ici).
3. Ajouter **axe-core (Playwright) + Lighthouse** pour combler l'a11y automatisée (RGAA.md « à configurer »).
4. (Optionnel) tests unitaires sur `lib/site.ts` (`absoluteUrl`) et `lib/jsonLd.ts`.
5. (Optionnel) ajouter un job de test au workflow CI — aujourd'hui CI = build/deploy seulement.
6. Affiner les FLOW via `qa-spec-author` après chaque feature ; figer les bugs corrigés dans REGRESSIONS.md.

## Commandes de vérification

```bash
pnpm lint && pnpm typecheck        # gate rapide
pnpm build                         # static export → out/
node scripts/qa.mjs                # Gate 2 (requiert out/)
node scripts/convergence.mjs       # Gate 1 (requiert out/ + standalone_export/)
pnpm test:visual                   # stories 3 moteurs (requiert storybook + playwright install)
```

---

**Suite recommandée :** utilise `qa-spec-author` pour chaque feature, puis `qa-harness` en fin de session pour un verdict PASS.
