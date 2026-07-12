# Monitoring — Performance Guardian

Skill/plugin `performance-guardian` : boucle automatisée **analyse prod → diagnostic →
fix atomique → PR → notification** pour la vitrine Amore Mio.

## Fichiers

| Fichier                                     | Rôle                                               |
| -------------------------------------------- | --------------------------------------------------- |
| `.claude/perf-guardian.config.json`         | Config projet (URL, seuils, chemins autorisés, OG) |
| `.claude/settings.json`                     | Active le plugin `performance-guardian@omniventus-workshop` |

## Démarrage rapide

Le plugin est déjà activé (`.claude/settings.json`) et la config projet posée
(`.claude/perf-guardian.config.json`) — analyse `https://omniventus.github.io/gelateria/`.

1. Vérifier/configurer le MCP PageSpeed (local ou `PAGESPEED_API_KEY` en fallback)
2. Déclencher : `run performance guardian` ou `/loop 7d` + même prompt

## Notifications

Désactivées par défaut (`notifications.enabled: false`) — aucun webhook Discord/Notion
n'est configuré pour ce projet. Pour les activer :

1. Créer un webhook Discord et l'exporter en `PERF_GUARDIAN_DISCORD_WEBHOOK`
2. Passer `notifications.enabled: true` et `notifications.channel: "discord"` dans
   `.claude/perf-guardian.config.json`

## Branche de base

`repo.base_branch = "feat/v2-site"` — branche de développement active. À basculer sur
`main` une fois `feat/v2-site` mergée (site v2 en prod).

## Variables d'environnement

| Variable                       | Scope  | Usage                                                       |
| ------------------------------- | ------ | ------------------------------------------------------------ |
| `PERF_GUARDIAN_DISCORD_WEBHOOK` | secret | Webhook Discord si `notifications.channel = "discord"`      |
| `NOTION_TOKEN`                  | secret | Intégration Notion si `channel = "notion"`                  |
| `PERF_GUARDIAN_NOTION_PAGE_ID`  | secret | Page parente Notion                                          |
| `PAGESPEED_API_KEY`             | secret | **Fallback** si MCP PageSpeed indisponible (routine remote)  |

Ne jamais commiter ces valeurs. Les ajouter en local (`export …`) ou dans les secrets CI.

## Worktrees

Les fixes sont appliqués dans `.claude/worktrees/` (gitignored). Nettoyage manuel :

```bash
git worktree list
git worktree remove .claude/worktrees/fix/perf-…
```

## Voir aussi

Skill `references/open-graph-best-practices.md` (dans le plugin) — critères OG détaillés.
