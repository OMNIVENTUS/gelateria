# Analyse V2 — Amore Mio (Phase 0)

> Source de vérité : `standalone_export/` (export Claude Design, extrait depuis `La carte du menu.zip`, 80 fichiers).
> Périmètre : **V2 uniquement** — 4 pages (Accueil, La Carte, Notre histoire, Professionnels). Les fichiers v1 (`site-app.jsx`, `accueil-sections.jsx`, `carte-sections.jsx`, `board.jsx`, `Accueil.html`, `Carte.html`…) sont ignorés.

## 0. Bloquant levé
Le `standalone_export/` n'était pas vide : l'export complet était compressé dans `La carte du menu.zip`. Extrait. Contient le DS, les planches v2, les photos, l'og-image, les guides. **Le projet peut démarrer.**

De plus, les binaires **Satoshi `.woff2` sont déjà dans `public/fonts/`** (Regular/Medium/Bold + licence) → le point « à confirmer client : fournir Satoshi » est **résolu**.

## 1. Design System — tokens (valeurs exactes, `tokens/*.css` + `_ds_manifest.json`)

### Couleurs (verrouillées)
`--crema #F6F1E8` (page) · `--sabbia #EAE0D0` (bandes alt) · `--taupe #A6988A` (bordures/texte secondaire) · `--espresso #37281D` (texte) · `--latte #FFFFFF` (cartes) · `--caramello #B97C3F` (**accent unique**).
Dérivés accent : `--caramello-ink #9A6531` (press / CTA AA) · `--caramello-soft #E7D6C2` (wash) · `--caramello-line #D8C3A6` (hairline).
Neutres : `--taupe-40 #C9BEAF` · `--taupe-60 #B8AB9C` · `--espresso-70 rgba(55,40,29,.70)` · `--espresso-45 rgba(55,40,29,.45)`.
Alias sémantiques : `--bg-page/--bg-alt/--surface-card/--surface-sunken`, `--text-primary/-secondary/-muted/-on-accent`, `--accent/-hover/-wash`, `--link`, `--border/-soft/-faint`, `--focus-ring`.

### Espacement / radius / ombres / layout (`spacing.css`)
- `--space-1..10` : 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- Radius **verrouillé** : `--radius-pill 999px` · `--radius-card 24px` · `--radius-image 16px` · `--radius-sm 10px`.
- Ombres chaudes : `--shadow-xs/sm/md/lg` = `0 …px rgba(55,40,29,.06/.08/.08/.12)` · `--shadow-card = md`.
- Layout : `--container 1200px` · `--container-text 720px` · `--gutter clamp(1.25rem,4vw,3rem)`.
- Motion : `--ease cubic-bezier(.22,.61,.36,1)` · `--dur-fast 140ms` · `--dur-base 220ms` · `--dur-slow 420ms`.

### Typographie (`typography.css`)
- `--font-display 'Cormorant Garamond'` · `--font-label 'Marcellus'` · `--font-body 'Satoshi'`.
- Poids : body 400 / medium 500 / bold 700 / display 600.
- Échelle display : `--text-display clamp(3rem,6vw,5.25rem)` · `h1 clamp(2.4rem,4.2vw,3.5rem)` · `h2 clamp(1.9rem,3vw,2.5rem)` · `h3 1.5rem`.
- Body : lead 1.25rem · body 1rem · sm .875rem · xs .75rem. Label 13px, tracking `.16em`.
- Line-heights : display 1.04 · heading 1.12 · body 1.6 · tight 1.3.

> Fonts en `@import` CDN (Google + Fontshare) dans le DS → **à self-host** via `next/font/local` (perf, §5).

## 2. Composants DS — API verrouillée (source : `_adherence.oxlintrc.json`)
Toute prop hors liste = bug bloqué par le lint.

| Composant | Props autorisées |
|---|---|
| `Button` | `variant` (primary\|secondary\|ghost), `size` (sm\|md\|lg), `whatsapp`, `href`, `icon`, `disabled`, children |
| `Badge` | `tone` (outline\|solid\|muted), `dot`, children |
| `Icon` | `name`, `size`, `color` (wrapper Phosphor **Light**) |
| `Card` | `image`, `imageAlt`, `aspect`, `padding`, `hover`, children |
| `SectionHeading` | `eyebrow`, `title`, `lead`, `align` (left\|center), `as` (h1\|h2\|h3), children |
| `FlavorCard` | `name`, `subtitle`, `description`, `color`, `price`, `tags`, `image`, `layout` (row\|tile) |

Lint d'adhérence à porter : interdit hex/px bruts (→ `var(--token)`), fonts hors DS (Cormorant/Marcellus/Satoshi), props/variants hors API, import d'internals hors barrel `index`.

## 3. Patterns & layout réellement rendus (source : `parts.jsx`, `nav-v2.jsx`, `v2-sections-*`)
⚠️ **Les pages v2 utilisent surtout ces patterns bespoke, pas les 6 primitives ci-dessus.** À porter fidèlement (ils font foi pour la convergence) :
- **`Wordmark`** (Marcellus caps + tagline Cormorant italique, pas de logo vectoriel), **`WaGlyph`** (seul SVG autorisé, le glyphe WhatsApp).
- **`PrimaryCta`** : CTA « button-in-button » — pill Caramello, glyphe WA + label + cercle flèche `ph-arrow-right`. Hover → `--caramello-ink` + cercle `translate(2px,-1px)` ; press `scale(.97)` ; focus ring 2px offset 3px. Libellé **exact** « Commander sur WhatsApp ».
- **`AmNav`** (nav-v2) : desktop 72px une ligne, 5 liens (Nos créations / L'atelier / Notre histoire / Professionnels / Menu) ; **container query <1100px** → CTA texte remplacé par pastille icône (jamais 2 lignes) ; t/m → burger 44px → overlay plein écran (5 liens reveal décalé 90ms + CTA), scroll-lock, Escape/lien ferme. Variante `cta='devis'` pour la page Pro.
- **`SignatureCard`** (double-bezel Sabbia, image inset 16px), **`MenuLine`/`CarteV2Line`** (prix Satoshi 500 `tabular-nums`, pointillés `--taupe-40`), **`HoursTable`**, **`FabWhatsApp`** (56px Espresso, bas-droite).
- Helpers de page : `V2Title` (eyebrow Marcellus + h2 Cormorant), `V2Split`, `V2BentoCell`, `CarteV2Group/Band`.

**Décision d'intégration proposée** : porter les patterns `parts.jsx` comme briques de rendu ; implémenter les 6 primitives DS à API verrouillée par-dessus (ex. `<Button whatsapp variant="primary" size="lg">` rend le pattern `PrimaryCta`). Ainsi : fidélité visuelle **et** conformité API/lint.

## 4. Inventaire par page (ordre de sections réel)

### Accueil (`v2-board.jsx` → `V2Page`, sections `v2-sections-a/b.jsx`)
1. Hero full-bleed (photo `4L0A7834`, nav overlay, wordmark géant, sous-texte, CTA « Découvrir nos créations ») — **scrim `linear-gradient`** (cf. décision).
2. Marquee parfums (Marcellus caps, 36s, sabbia).
3. Philosophie (grand paragraphe centré Cormorant).
4. L'atelier (galerie scroll-snap horizontale, 4 photos).
5. Nos ingrédients (éditorial 2 colonnes + 2 bandeaux photo).
6. Nos créations (bento 5 cellules, responsive d/t/m).
7. Pourquoi Amore Mio (4 blocs hairline + icônes Phosphor).
8. La boutique (split photo/texte).
9. À emporter (split inversé + PrimaryCta).
10. Témoignages (3 cartes sabbia, étoiles Phosphor).
11. Nous trouver (carte SVG stylisée + infos + `HoursTable` + itinéraire).
12. Footer Espresso.

### La Carte (`carte-v2-board.jsx` → `CarteV2Page`, `carte-v2-sections.jsx`)
Nav (posée fond clair, active=menu) → Header court (« La carte ») → Groupes en 2 colonnes (`column-count`) avec bandeaux 21:9 : Crèmes glacées & sorbets, À emporter, Sundae, Eskimos, Douceurs maison, Duo Amore, Toppings, Desserts signature, Boissons (**prix réels en DT fournis**) → Encart Instagram → CTA final (« Une envie *subito* ? ») → Footer.

### Notre histoire (`histoire-board.jsx` → `HistPage`)
Hero éditorial court → Le récit (« Les débuts » / « L'atelier aujourd'hui » — **texte en placeholder `[Texte à fournir par le client]`**) + figure photo → Nos convictions (3 lignes hairline) → Bandeau photo large → Clôture (« Venez goûter notre histoire. » + PrimaryCta) → Footer.

### Professionnels (`pro-board.jsx` → `ProPage`)
Hero split (CTA **« Demander un devis »**, nav `cta='devis'`) → Nos prestations (4 blocs) → Desserts signature (3 cellules typo, « Sur devis ») → Comment ça marche (3 étapes numérotées) → CTA final `#contact-pro` (« Parlons de votre projet. » + tel/email) → Footer.
> ⚠️ La page Pro a **son propre CTA « Demander un devis »** (≠ « Commander sur WhatsApp »). Non contradictoire avec l'invariant « un seul CTA » car contexte B2B distinct, mais **à confirmer**.

## 5. Assets
- Photos réelles dans `assets/photos/*.jpg` (~250–670 Ko, ~2000px) + doublons `uploads/`. **Pipeline obligatoire** : resize ×2 retina (max ~1400px) → WebP q80 → `public/`. Mapping nom→usage à établir (ex. `4L0A7834`=hero, `4L0A7727`=cône signature, etc.).
- `assets/logo-sign-gold.jpg` : marque photographique canonique (ne pas vectoriser).
- `export/og-image.jpg` (1200×630) → `public/og-image.jpg`.
- Icônes : Phosphor **Light** (CDN dans l'export) → à self-host / bundler pour le static export.

## 6. Contenu « à confirmer client » (ne pas inventer)
| Élément | État dans l'export | Action |
|---|---|---|
| Satoshi `.woff2` | **Fourni** (`public/fonts/`) | ✅ résolu |
| Prix carte | **Fournis** (DT réels) | ✅ (confirmer justesse) |
| Adresse | « 12, rue de la Plage, La Marsa » marqué **`exemple`** | ⚠️ confirmer |
| Horaires | Lun-jeu 11h-23h / ven-sam 11h-minuit / dim 10h-23h (et « tous les jours 11h-23h » ailleurs) | ⚠️ confirmer + harmoniser |
| Téléphone / WhatsApp | `+216 29 481 736` / `wa.me/21629481736` | ⚠️ confirmer |
| Email pro | `pro@amoremio.tn` (exemple) | ⚠️ confirmer |
| Instagram | `@amoremio.tn` | ⚠️ confirmer |
| Texte « Notre histoire » | **Placeholder explicite** `[Texte à fournir]` | ⚠️ bloquant contenu |
| Domaine custom | non fourni | ⚠️ confirmer (défaut : GH Pages `/gelateria`) |

## 7. Tensions / décisions à trancher
1. **Hero — dégradé.** `V2Hero` pose le texte sur la photo via `linear-gradient(to top, rgba(30,20,12,.66) … 0)`. L'invariant §2 + Guide QA §5 interdisent tout dégradé et « texte sur photo sans panneau opaque ». La référence visuelle (baseline ≥97 %) contient pourtant ce scrim. → **Décision requise** (garder le scrim pour la fidélité, ou panneau opaque conforme invariant).
2. **Contenu placeholder public.** Le design montre volontairement des encarts pointillés « exemple » et des lignes grises pour l'histoire. → Garder tel quel (fidélité, marqueur client) **par défaut** ; à valider.
3. **CTA « Demander un devis » (Pro)** — voir §4.
4. **Baseline de convergence** : les previews `*.html` v2 sont des shells Babel (chargent le JSX au runtime) ; le rendu complet est `export/Amore Mio - Site standalone.html`. → Gate 1 diffe contre un rendu Playwright de la référence (shell servi localement ou standalone), décision technique interne.

## 8. Guide motion/QA (`Guide animations & QA.md`) — à respecter
Reveals IntersectionObserver seuil 12% **fail-open** (timeout 1400ms, jamais bloqué `opacity:0`) · marquee 36s linéaire triplé · overlay mobile scroll-lock + Escape + reveal décalé 120/210/300ms · FAB apparaît hors hero, disparaît sur CTA final · ancres `scroll-margin-top:110px` + lien actif Caramello · `prefers-reduced-motion:reduce` → tout visible, zéro animation. Seuls `transform`/`opacity` animés, aucun listener `scroll`.
