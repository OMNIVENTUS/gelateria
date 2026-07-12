# FLOWS.md — Parcours utilisateur critiques (Amore Mio)

> **Source de vérité du QA.** Le skill `qa-harness` lit ce fichier à chaque cycle.
> Entrées marquées `[BOOTSTRAP — à affiner via qa-spec-author]` sont des placeholders.
>
> Conventions : `Criticité ∈ {HAUTE, MOYENNE, BASSE}`. Régressions `#R-xxx` → [REGRESSIONS.md](./REGRESSIONS.md).
> Visuel → [VISUAL.md](./VISUAL.md). A11y → [RGAA.md](./RGAA.md).
>
> Site vitrine **public, sans authentification** : la conversion = le CTA unique « Commander sur WhatsApp ».
> Le seul « e2e » automatisé aujourd'hui est `scripts/qa.mjs` (Gate 2) — pas de spec de navigation dédiée.

---

## FLOW-001 · Accueil / landing (`/`) [BOOTSTRAP — à affiner via qa-spec-author]

**Criticité :** HAUTE · **Spec e2e :** `« couvert par scripts/qa.mjs accueil ; spec navigation à créer si besoin »`

**Étapes :**

1. Naviguer vers `/` → page charge sans erreur console, LCP visible rapidement (hero `priority`).
2. Hero + sections (marquee parfums, grille signatures) rendus, aucune photo cassée, aucun `undefined`.
3. CTA « Commander sur WhatsApp » présent → `https://wa.me/21629481736` (`target=_blank`, `rel=noopener`).
4. Navigation principale fonctionnelle (desktop pill / overlay mobile) ; FAB WhatsApp apparaît hors hero.
5. Aucun débordement horizontal de 360px à 1440px.

**Régressions connues :** —
**Critères visuels :** [VISUAL.md](./VISUAL.md) (réf. `standalone_export`, page accueil) · **RGAA :** `h1` unique, landmarks, contraste CTA.

---

## FLOW-002 · Carte / menu (`/carte`) [BOOTSTRAP — à affiner via qa-spec-author]

**Criticité :** HAUTE · **Spec e2e :** `« couvert par scripts/qa.mjs carte »`

**Étapes :**

1. Naviguer vers `/carte` → liste des parfums (`FlavorCard` `row`/`tile`).
2. Prix affichés en format FR `« 4,5 DT »` (virgule décimale, `tabular-nums`), pointillés taupe.
3. CTA WhatsApp unique présent et conforme.
4. Pas de débordement 360→1440 ; convergence ≥ 90 vs référence (Gate 1, page souvent la plus tendue).

**Régressions connues :** —
**Critères visuels :** [VISUAL.md](./VISUAL.md) · **RGAA :** lisibilité prix, cibles ≥ 44px.

---

## FLOW-003 · Histoire (`/histoire`) [BOOTSTRAP — à affiner via qa-spec-author]

**Criticité :** MOYENNE · **Spec e2e :** `« couvert par scripts/qa.mjs histoire »`

**Étapes :**

1. Naviguer vers `/histoire` → contenu narratif rendu, reveals fail-open (jamais bloqué à `opacity:0`).
2. Mots italiens en italique Cormorant, aucun anglais public.
3. CTA WhatsApp conforme ; pas de débordement.

**Régressions connues :** —
**Critères visuels :** [VISUAL.md](./VISUAL.md) · **RGAA :** hiérarchie titres, `prefers-reduced-motion`.

---

## FLOW-004 · Professionnels (`/professionnels`) [BOOTSTRAP — à affiner via qa-spec-author]

**Criticité :** MOYENNE · **Spec e2e :** `« couvert par scripts/qa.mjs professionnels »`

**Étapes :**

1. Naviguer vers `/professionnels` → offre B2B rendue, sections lisibles.
2. CTA unique « Commander sur WhatsApp » (pas de second verbe d'intention).
3. Pas de débordement ; convergence ≥ 90 vs référence.

**Régressions connues :** —
**Critères visuels :** [VISUAL.md](./VISUAL.md) · **RGAA :** landmarks, contraste.

---

## FLOW-005 · Transverse — nav mobile, FAB & CTA WhatsApp [BOOTSTRAP — à affiner via qa-spec-author]

**Criticité :** HAUTE (transverse) · **Spec e2e :** `« à créer si régression — e2e/nav-overlay.spec.ts »`

**Étapes :**

1. < 640px : hamburger ouvre l'overlay mobile → scroll-lock `body`, fermeture par Escape et par clic sur un lien (+ ancre).
2. FAB WhatsApp : masqué dans le hero, apparaît au scroll, disparaît sur le CTA final.
3. Tout CTA pointe vers `https://wa.me/21629481736` avec `target=_blank` + `rel=noopener`, libellé exact « Commander sur WhatsApp ».
4. `focus-visible` jamais écrasé (ring Caramello 2px offset 3px) ; navigation clavier complète.

**Régressions connues :** —
**Critères visuels :** [VISUAL.md](./VISUAL.md) (stories `Nav`, `FabWhatsApp`, `PrimaryCta`) · **RGAA :** focus, cibles, piège clavier overlay.

---

## FLOW-006 · Transverse — SEO / Open Graph (HTML statique) [BOOTSTRAP — à affiner via qa-spec-author]

**Criticité :** HAUTE (transverse) · **Vérif :** `scripts/qa.mjs` (seoCheck sur HTML brut) + inspection `out/**/*.html`

**Étapes :**

1. Chaque page a `<title>` propre, `description`, `alternates.canonical` (jamais deux pages avec le même title/canonical).
2. `og:title` / `og:image` présents dans le HStatic ; `og:image` = `…/og-image.jpg` **absolu** (piège basePath `/gelateria`).
3. `twitter:card = summary_large_image`, JSON-LD `IceCreamShop` dans le layout.
4. `sitemap.xml` + `robots.txt` générés avec URLs absolues.

**Régressions connues :** —
**RGAA :** — · **Note :** régression SEO = FAIL Gate 2 (leçon v1 : aperçus sociaux cassés).

---

<!-- Ajouter/affiner les FLOW via qa-spec-author après chaque feature -->
