# RGAA.md — Critères d'accessibilité à vérifier

> Source de vérité du QA a11y. Niveau cible : **WCAG AA minimum** (voir [CLAUDE.md §8](../../CLAUDE.md)).
> Une partie est déjà automatisée par `scripts/qa.mjs` (Gate 2) ; le reste est manuel/à outiller.

## Règles transverses (tout écran)

1. **Contraste AA** (≥4.5:1 texte, ≥3:1 grand texte/UI) — **calculé, pas estimé**. CTA = fond `--caramello-ink #9A6531` + texte blanc (4.9:1) ; le Caramello pur `#B97C3F` sur clair = 3.1:1 **échoue**. Taupe réservé aux **bordures** (2.5:1 sur clair échoue en texte) ; texte courant en Espresso.
2. **Focus visible** sur chaque interactif — ring Caramello 2px offset 3px, **jamais** écrasé par un `outline:none` inline (bug v1). Navigation clavier complète (Tab, Enter, Escape sur l'overlay).
3. **Cibles tactiles ≥ 44×44px** — vérifié par `scripts/qa.mjs` (compte les `a`/`button` < 44px hors liens de texte inline).
4. **`prefers-reduced-motion: reduce`** → reveals fail-open (aucun bloc `.reveal` bloqué à `opacity < 1`) — vérifié par `scripts/qa.mjs`.
5. **Labels & landmarks** : `header`/`main`/`nav`/`footer` + skip-link — présence vérifiée par `scripts/qa.mjs`. Un seul `<h1>` par page (vérifié).
6. **Images** : `alt` pertinent ou `alt=""` si décoratif — absence d'`alt` détectée par `scripts/qa.mjs`.
7. **États non-couleur** : un état ne repose pas sur la seule couleur.
8. **Curseur** : interactifs en `cursor: pointer` ; `disabled` non cliquable.
9. Cliquables custom (`div onClick`) : `role="button"` + `tabIndex={0}` + `onKeyDown` (à éviter — préférer `button`/`a`).

## Outils

| Outil | Statut | Usage |
|-------|--------|-------|
| **`scripts/qa.mjs`** | ✅ en place | landmarks, `h1`, `alt`, cibles ≥44px, reveals reduced-motion, CTA rel/target |
| **axe-core** (Playwright) | ⬜ à ajouter | violations `critical`/`serious` = bloquantes |
| **Lighthouse** | ⬜ à ajouter | pages publiques — score a11y ≥ 90 (critère de done, CLAUDE.md §8) |
| **Contraste calculé** | ⬜ à ajouter | ratio programmatique CTA/texte (pas d'estimation à l'œil) |

Le champ `commands.cursor_pointer` de `.claude/qa.harness.json` est `null` (pas de scan dédié — l'adhérence passe par oxlint `.oxlintrc.json` + le DS).

## Critères par écran (référence FLOWS.md)

- **FLOW-001 Accueil** : `h1` unique, contraste CTA, focus, FAB accessible.
- **FLOW-002 Carte** : lisibilité prix, cibles ≥ 44px.
- **FLOW-003 Histoire** : hiérarchie titres, reveals reduced-motion.
- **FLOW-004 Professionnels** : landmarks, contraste.
- **FLOW-005 Nav/FAB/CTA** : focus jamais écrasé, pas de piège clavier dans l'overlay, Escape.

## Dettes a11y connues

_(vide — documenter ici les dettes acceptées pour ne pas les signaler comme nouvelles régressions)_
