# QA harness — Amore Mio

Système de QA **piloté par la donnée** : les checkpoints vivent dans `docs/qa/*.md` (éditables),
et le skill `qa-harness` les lit à chaque cycle. Généré par **qa-bootstrap** — à affiner au fil de l'eau.

Stack : **Next.js 15 App Router** (static export) · TypeScript strict · Tailwind v4 · Storybook 9 · pnpm · Node 20.
Site vitrine **light-only** (invariant marque §2 de [CLAUDE.md](../../CLAUDE.md)) — pas de thème sombre à snapshoter.

## Structure

```
docs/qa/
  README.md         ← ce fichier
  FLOWS.md          ← parcours critiques FLOW-0XX
  REGRESSIONS.md    ← bugs figés R-0XX (+ Vigilance)
  VISUAL.md         ← mapping écran ↔ référence Claude Design
  RGAA.md           ← critères accessibilité (AA)

.claude/qa.harness.json   ← config machine (commandes, URLs, seuils)
standalone_export/        ← source de vérité visuelle (export Claude Design v2 — voir CLAUDE.md §1)
tests/__snapshots__/      ← baselines visuelles Storybook (chromium/firefox/webkit) commitées
docs/audits/shots/        ← captures runtime prises pendant les cycles qa-harness
```

## Commandes

| But | Commande |
|-----|----------|
| Gate rapide (adhérence + types) | `pnpm lint && pnpm typecheck` |
| Build static export → `out/` | `pnpm build` |
| Serveur dev | `pnpm dev` → http://localhost:3000 |
| Storybook (DS + réf. gate visuel) | `pnpm storybook` → :6006 |
| **Tests visuels stories** (3 moteurs) | `pnpm test:visual` |
| Mettre à jour les baselines stories | `pnpm test:visual:update` |
| **Gate 1 — convergence** (fidélité vs réf.) | `node scripts/convergence.mjs [accueil carte histoire professionnels]` |
| **Gate 2 — QA adversarial** (a11y/SEO/overflow) | `node scripts/qa.mjs [accueil …]` (requiert `out/` → `pnpm build` d'abord) |
| Réfs visuelles (serveur local) | `cd standalone_export && python3 -m http.server 8770` |

> ⚠️ Le workflow CI (`.github/workflows/deploy.yml`) **ne lance aucun test** — il build + déploie sur GitHub Pages uniquement. Les gates ci-dessus sont à lancer localement avant tout merge critique.
> `pnpm test:visual` requiert Storybook lancé (`pnpm storybook`) + les navigateurs Playwright (`pnpm exec playwright install chromium firefox webkit`).

## Les deux gates du projet (protocole double-gate, CLAUDE.md §9)

- **Gate 1 — DESIGNER** : `scripts/convergence.mjs` rend chaque page candidate (`out/`) ET la référence Claude Design (`standalone_export/Site Amore Mio v2.html`) aux viewports 390/768/1024/1440, calcule un ratio de pixels concordants. Score page = MIN des viewports. Rapport → `tests/convergence/report.json`. Seuil : **≥ 90**.
- **Gate 2 — TESTEUR FOURBE** : `scripts/qa.mjs` sert `out/` et cherche à casser : débordement horizontal (360→1440), `h1` unique, `alt`, CTA WhatsApp (libellé exact + `target=_blank`/`rel=noopener`), reveals fail-open sous `reduced-motion`, cibles ≥ 44px, landmarks, SEO sur **HTML brut** (title, og:*, canonical). Sortie priorisée BLOQUANT/MAJEUR/MINEUR. Seuil : **0 bloquant**.

## Lancer un cycle QA

```
Utilise le skill qa-harness : lance un cycle QA sur les changements depuis main.
```

## Maintenance

- **Nouvelle feature / page** → `qa-spec-author` puis ajouter/éditer un FLOW dans FLOWS.md.
- **Bug corrigé** → ajouter R-0XX dans REGRESSIONS.md (test de garde + Vigilance).
- **Nouvel écran** → ligne dans VISUAL.md + réf. dans `standalone_export/`.

## Journal des retours

| Date | Retour | Origine | Devenu | Statut |
|------|--------|---------|--------|--------|
| | | | | |
