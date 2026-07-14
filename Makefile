# Amore Mio — raccourcis de dev. `make` ou `make help` pour la liste.
# Prérequis : pnpm 11, Node 20. Navigateurs tests visuels : make browsers.

.DEFAULT_GOAL := help
SHELL := /bin/bash
SB_PORT ?= 6006

.PHONY: help install browsers dev build preview lint typecheck \
        storybook build-storybook test test-update qa convergence gates \
        images verify ci clean

help: ## Affiche cette aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| sort | awk 'BEGIN{FS=":.*?## "}{printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2}'

install: ## Installe les dépendances (frozen lockfile)
	pnpm install --frozen-lockfile

browsers: ## Installe les navigateurs Playwright (tests visuels 3 moteurs)
	pnpm exec playwright install chromium firefox webkit

dev: ## Lance le serveur de dev Next
	pnpm dev

build: ## Build static export → out/
	pnpm build

preview: build ## Sert le build statique out/ en local
	pnpm dlx serve out -l 3000

lint: ## Lint d'adhérence (oxlint : tokens, contrats de props DS)
	pnpm run lint

typecheck: ## Vérifie les types (tsc strict)
	pnpm typecheck

storybook: ## Storybook en dev (port $(SB_PORT))
	pnpm storybook

build-storybook: ## Build statique de Storybook
	pnpm build-storybook

test: ## Tests visuels de régression (3 moteurs) — nécessite Storybook lancé (make storybook)
	pnpm exec test-storybook --url http://127.0.0.1:$(SB_PORT) --browsers chromium firefox webkit

test-update: ## Régénère les baselines des tests visuels
	pnpm exec test-storybook --url http://127.0.0.1:$(SB_PORT) --browsers chromium firefox webkit -u

qa: build ## Gate 2 — QA adversarial (overflow, a11y, CTA, SEO) sur out/
	node scripts/qa.mjs

convergence: build ## Gate 1 — convergence de design vs référence Claude Design v2
	node scripts/convergence.mjs

gates: qa convergence ## Lance les deux gates (QA + convergence)

images: ## (Ré)optimise les photos de l'export → public/photos (WebP retina + srcset)
	node scripts/optimize-images.mjs

verify: lint typecheck build ## Gate qualité local : lint + typecheck + build
	@echo "✓ verify OK"

ci: verify qa ## Ce que la CI exécute (verify + Gate 2)

clean: ## Nettoie les artefacts de build
	rm -rf .next out storybook-static test-results tests/convergence
