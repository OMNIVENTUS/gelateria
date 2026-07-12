# REGRESSIONS.md — Bugs corrigés à NE PAS réintroduire

> **Source de vérité du QA.** Chaque bug corrigé y est figé avec son test de garde + zones **Vigilance**.
> Le skill `qa-harness` croise les `git diff` avec les Vigilance pour cibler les tests.
>
> **RÈGLE :** une session ne peut PAS être marquée « OK » si un test listé ici échoue.

---

## Comment ajouter une régression

```markdown
### R-001 · [Titre court]

**Corrigé :** YYYY-MM-DD
**Symptôme :** ce que l'utilisateur voyait
**Fix :** résumé technique
**Test :** chemin vers le test de garde (story visuelle, scripts/qa.mjs check, convergence…)
**Vigilance :** fichiers à surveiller si modifiés (chemins relatifs repo)
```

Référencer le `R-0XX` dans FLOWS.md (`**Régressions connues :** #R-001`).

---

## (vide — à remplir via qa-spec-author ou après correction de bugs)

_Aucune régression figée pour l'instant._

> Candidats naturels vu l'historique v1 (à figer dès qu'un bug est corrigé, **ne pas inventer avant**) :
> aperçus OG cassés (JS-only), `og:image` root-relative sous basePath (404), `focus-visible` écrasé par `outline:none` inline, débordement horizontal < 375px, contraste CTA Caramello pur < 4.5:1, fonts CDN tierces réintroduites.
