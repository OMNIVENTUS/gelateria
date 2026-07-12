# Amore Mio — Guidelines d'implémentation (handoff développeur)

Référence unique pour reproduire fidèlement le site **Amore Mio — L'Atelier De La Glace** (4 pages : Accueil, La carte, Notre histoire, Professionnels). La maquette de référence est `Site Amore Mio v2.html` (SPA responsive) ; les planches par artboard (`Accueil v2.html`, `Carte v2.html`, `Notre histoire.html`, `Professionnels.html`) montrent chaque breakpoint figé. Le code source des sections vit dans `planche/*.jsx`.

---

## 1. Fondations (contraintes client, NON négociables)

### Palette — 6 couleurs, rien d'autre
| Token | Hex | Usage |
|---|---|---|
| `--crema` | `#F6F1E8` | Fond de page par défaut |
| `--sabbia` | `#EAE0D0` | Bandes alternées (marquee, prestations, encarts, CTA pro) |
| `--taupe` | `#A6988A` | Hairlines, texte secondaire, pointillés de la carte |
| `--espresso` | `#37281D` | Texte, footer (fond plein) |
| `--latte` | `#FFFFFF` | Surfaces cartes |
| `--caramello` | `#B97C3F` | **Seul accent** : CTA, liens actifs, eyebrows, focus |

Déclinaisons utilisées : `--espresso-70`, `--espresso-45` (texte secondaire), `--taupe-40` (hairlines), `--caramello-line` `#D8C3A6` (soulignés chauds), `--caramello-ink` (hover CTA).
- **Aucun gradient.** La seule couleur vive vient des photos.
- Ombres chaudes uniquement : `rgba(55,40,29, 0.06/0.08/0.12)` (`--shadow-sm/md/lg`). Jamais de gris, jamais d'inner shadow.
- Thème clair verrouillé.

### Typographie
- **Cormorant Garamond 600** (`--font-display`) : tous les titres, tracking `-0.01em`. L'italique 500 de la même famille sert aux mots italiens (*fatto a mano*, *subito*, *del giorno*) et aux intitulés éditoriaux (convictions, ingrédients).
- **Marcellus** caps (`--font-label`) : rationné — wordmark, eyebrows, marquee, labels d'artboard. Tracking 0.14–0.18em.
- **Satoshi** (`--font-body`, Fontshare) : corps 15–17px, line-height 1.6 ; prix en 500 avec `font-variant-numeric: tabular-nums`.
- Interdits : Inter, Roboto, Fraunces, Instrument Serif.

### Rayons (verrouillés)
Boutons/chips = pill (`--radius-pill`) · cartes = 24px · images = 16px · petits champs/tags = 10px.

### Icônes
Phosphor **Light** uniquement (`ph-light ph-*`, stroke 1.5). Jamais filled/bold/duotone, jamais d'emoji, pas de SVG ad hoc. Exception unique : le glyphe WhatsApp du CTA.

### Copy
Français, phrases courtes déclaratives, voix « nous ». Mots italiens en Cormorant italique. **Pas de tiret cadratin** (virgules ou points). Prix « 7,8 DT » (virgule décimale). Fourchettes « 65 – 89 DT ». Un seul verbe de CTA par contexte : « Commander sur WhatsApp » partout, « Demander un devis » sur la page Professionnels uniquement.

---

## 2. Breakpoints & espaces

| | Mobile `m` | Tablette `t` | Laptop `d` |
|---|---|---|---|
| Seuil | < 640px | ≥ 640px | ≥ 1024px |
| Gouttière latérale | 20px | 48px | 64px |
| Padding vertical de section | 72px | 96px | 120px |
| H2 de section | 30px | 38px | 46px |

- H1 de pages internes : 42 / 56 / 68px. Hero accueil : wordmark Marcellus 40 / 60 / 76px.
- Texte : jamais < 13px ; corps ≥ 15px mobile. Cibles tactiles ≥ 44px.
- Mesure éditoriale : 65ch max (récit Notre histoire : colonne 620–680px centrée).
- Beaucoup de blanc sur Notre histoire (page la plus sobre) ; densité normale ailleurs.

---

## 3. Navigation (composant de référence : `planche/nav-v2.jsx`)

- Pill flottante : `rgba(255,255,255,0.70)` + `backdrop-filter: blur(12px)`, bordure `rgba(166,152,138,0.35)`, `--shadow-md`, hauteur 72px (desktop) / 64 / 60px. **Seul usage du verre dans tout le site.**
- Posée en absolu sur le hero, offset haut 28px (16px mobile), largeur = page moins gouttières.
- 5 liens : Nos créations · L'atelier · Notre histoire · Professionnels · Menu. Lien actif en Caramello (Menu sur la carte, etc. ; accueil = ancres, pas d'actif).
- CTA pill Caramello à droite : « Commander sur WhatsApp » (« Demander un devis » sur Professionnels).
- **Une seule ligne, toujours.** Sous ~1100px de conteneur (container query) le CTA texte devient une pastille icône 46px. Jamais 2 lignes.
- Tablette + mobile : hamburger 44px (pastille Espresso, 2 traits Crema de 16×1.5px) → **overlay plein écran** `rgba(246,241,232,0.94)` + blur 24 : wordmark + bouton fermer 44px cerclé Taupe, 5 liens en Cormorant 600 (2.2rem mobile / 2.8rem tablette) séparés par hairlines `--caramello-line`, flèche `arrow-right` Taupe à droite de chaque lien, puis en bas : mention lieu + CTA.
- Reveal des liens : translateY(110%) → 0 + fade, 420ms `cubic-bezier(0.22,0.61,0.36,1)`, **délai en cascade 90ms par lien** (départ 120ms), CTA en dernier. Overlay lui-même : fade 220ms. Le tout sous `@media (prefers-reduced-motion: no-preference)`.
- La nav n'est pas sticky dans la maquette ; le DS prévoit sticky avec marge haute 24px — à implémenter en prod (position sticky/fixed + même verre).

---

## 4. Motion — règles globales

- Easing unique : `cubic-bezier(0.22, 0.61, 0.36, 1)`. Durées : 140ms (micro), 220ms (standard), 420ms (reveal). **Aucun bounce, aucun spring.**
- Fades et petites translations uniquement. Pas de zoom d'image au scroll, pas de parallaxe.
- **Marquee parfums** (accueil) : bande Sabbia, texte Marcellus caps 25/34/40px « Pistache · Cioccolato · Mangue · Fragola · Tiramisù · Caffè · » répété 3×, `translateX(0 → -33.333%)` linéaire **36s** en boucle. Gelé si `prefers-reduced-motion`.
- États interactifs : hover CTA primaire → `--caramello-ink` ; cartes hover (opt-in) → lift 3px + `--shadow-lg` ; press → scale 0.97 ; focus → ring 2px Caramello ; disabled → opacité 50%.
- Reveals d'entrée au scroll (optionnels en prod) : fade + translateY 12–16px, 420ms, jamais d'infini sur du contenu.

---

## 5. Composants récurrents

- **CTA primaire** : pill Caramello, texte Crema Satoshi 500 15.5–16px, padding 16–18px × 28–32px, glyphe WhatsApp (ou `arrow-right` pour le devis), `--shadow-md`.
- **FAB WhatsApp** : mobile uniquement, fixe bas-droite (16 / 20px), pastille Caramello. Absent des artboards tablette/laptop. Sur la page Professionnels des planches : pas de FAB (intention devis unique).
- **Carte double-bezel** : surface Latte 24px + padding 8px + bordure `--border-faint` + `--shadow-md` ; l'image (ou la cellule intérieure Crema) en 16px à l'intérieur. Utilisée : bento créations, cellules desserts signature.
- **Ligne de carte (menu)** : nom Cormorant 600 1.3rem (+ sous-libellé italique Taupe 1rem) · fil `2px dotted var(--taupe-40)` remonté de 5px · prix Satoshi 500 1.0625rem tabular aligné droite. Groupe : H2 Cormorant 26–29px souligné d'une hairline `--caramello-line`, note éventuelle en Satoshi 13.5px Taupe à droite.
- **Liste éditoriale hairlines** (convictions, prestations, pourquoi) : pas de cartes — séparateurs `1px solid var(--taupe-40)`, icône Phosphor 30px, titre Cormorant 22–24px, texte `--espresso-70`.
- **Placeholders client** : tout contenu non fourni (adresse, téléphone, email, récit) est présenté dans un cadre `1px dashed var(--taupe)` avec étiquette caps 11px « exemple » ou « [Texte à fournir par le client] » posée sur le trait. Ne jamais inventer ce contenu en prod : le remplacer par les vraies données.
- **Wordmark** : Marcellus caps « AMORE MIO » + tagline Cormorant italique « L'Atelier De La Glace ». Pas de logo vectoriel — ne pas redessiner le sign doré (`assets/logo-sign-gold.jpg`).

---

## 6. Pages — structure et spécificités

### Accueil (`planche/v2-sections-a/b.jsx`, ordre dans `V2Page`)
1. **Hero full-bleed** `4L0A7834`, hauteur 900/1080/760px, scrim `linear-gradient(to top, rgba(30,20,12,0.66) → 0)` sur le tiers bas (seul « gradient » autorisé : c'est un voile de lisibilité, pas un décor). Wordmark + tagline + phrase + CTA « Découvrir nos créations » (ancre). Centré desktop/tablette, aligné gauche mobile.
2. **Marquee** (voir Motion).
3. **Philosophie** : une seule phrase en Cormorant 26/34/42px, centrée, max 65ch.
4. **L'atelier** : galerie horizontale scroll-snap (`scroll-snap-type: x mandatory`, scrollbar masquée), photos 420×540 / 330×430 / 270×360, la dernière volontairement coupée par le bord (affordance de scroll).
5. **Nos ingrédients** : cartouches typographiques (mot Cormorant italique 27–38px sur hairline Taupe + ligne Satoshi) en grille 2 col (1 col mobile), entrecoupés de 2 bandeaux photo full-bleed 190–300px (`4L0A8136-Edit`, `4L0A8175`).
6. **Nos créations** : bento 5 cellules double-bezel sur Sabbia — desktop : colonne gauche haute (cône) + 2×2 ; tablette : 1 pleine largeur + 2×2 ; mobile : pile. Lien « Toute la carte » avec `arrow-right`.
7. **Pourquoi Amore Mio** : 4 blocs hairlines (1×4 desktop, 2×2 tablette, pile mobile).
8. **La boutique** puis **À emporter** : splits image/texte en zigzag (image 520px, stacked mobile), le second sur Sabbia avec CTA.
9. **Témoignages** : 3 cartes Sabbia 24px, 5 étoiles `ph-star` Taupe, citations courtes guillemets français.
10. **Nous trouver** : infos (cadre « exemple ») + table horaires + bouton secondaire « Itinéraire » (pill outline Taupe) / carte SVG stylisée (routes Taupe clair sur Sabbia, pin Caramello) + photo façade. En prod : remplacer la carte SVG par une vraie carte embarquée sobre.
11. **Footer Espresso** : fond plein, texte Crema (opacités 0.55–0.85), wordmark + baseline + description, les 5 liens de nav, réseaux (Instagram/Facebook/TikTok en Phosphor), CTA, ligne légale + « *fatto a mano, ogni giorno* » en italique.

Budget accueil : 2 eyebrows max (Ingrédients, Créations), fonds Crema/Sabbia alternés, footer seul bloc sombre.

### La carte (`planche/carte-v2-sections.jsx`)
- Header court centré : eyebrow Marcellus « Fait maison avec passion », H1, phrase saisons.
- 9 groupes en **masonry CSS columns** (2 colonnes desktop/tablette, `break-inside: avoid` par groupe ; 1 colonne mobile).
- Bandeaux photo **21:9** en tête de 3 groupes seulement : diptyque `4L0A8201` + `4L0A8006-Edit` (crèmes & sorbets), `IMG_9461` (douceurs), `4L0A8296` (boissons). Pas de photo par item.
- Contenu = données réelles uniquement (voir jsx). Ne rien ajouter, ne pas reprendre les emoji du menu papier.
- Encart Sabbia 24px « Les parfums du jour sont sur notre Instagram. » + CTA final « Une envie *subito* ? ».

### Notre histoire (`planche/histoire-board.jsx`)
- Page la plus calme : Crema uni, pas de bande Sabbia, pas d'eyebrow.
- Hero court (~50vh max), H1 + phrase de conviction, centré.
- Récit : colonne 65ch, 2 intertitres H2 (« Les débuts » / « L'atelier aujourd'hui » = propositions), blocs squelette « [Texte à fournir par le client] » (barres Taupe 11px arrondies, opacité 0.55) — **ne pas inventer de récit**.
- Photo `4L0A7910` dans le flux avec légende centrée 13px Taupe.
- Convictions : 3 entrées hairlines, intitulé Cormorant italique 23–26px en colonne 250px + texte (grid desktop/tablette, pile mobile).
- Bandeau full-bleed `4L0A7778` puis clôture centrée + CTA.

### Professionnels (`planche/pro-board.jsx`)
- B2B chaleureux, même univers, **un seul label CTA : « Demander un devis »** (nav comprise).
- Hero split : texte gauche / photo `4L0A8422` 16px à droite (stacked mobile, image 340px).
- Prestations : 2×2 hairlines sur Sabbia (icônes `heart`, `fork-knife`, `buildings`, `ice-cream`).
- Desserts signature : 3 **cellules typographiques** double-bezel (pas de photo) — nom Cormorant italique 30–33px, trait 44px, description, pied « Sur devis » — puis bandeau `IMG_9425` full-bleed.
- Comment ça marche : numéros Cormorant 600 Taupe 44–56px, 3 colonnes centrées (pile mobile hairlines).
- CTA final sur Sabbia + téléphone/email en cadre « exemple ».

---

## 7. Photos (toutes dans `assets/photos/`, jamais de stock/AI)

| Fichier | Sujet | Usage | `object-position` conseillé |
|---|---|---|---|
| 4L0A7834 | Cône pistache, lumière naturelle | Hero accueil | 50% 38% (62% 42% mobile) |
| 4L0A7778 | Comptoir, cône choco-noisette | Galerie atelier + bandeau Histoire | 50% 35% |
| 4L0A7910 | Mur « Notre histoire » | Galerie atelier + récit Histoire | 50% 38% |
| 4L0A8201 | Service au pot | Galerie + bandeau carte | 50% 42% |
| 4L0A8078 | Pot pistache à emporter | Galerie atelier | — |
| 4L0A8136-Edit / 4L0A8175 | Textures macro | Bandeaux ingrédients | — |
| 4L0A7727 | Cône signature | Bento (cellule haute) | 50% 40% |
| IMG_9461 | Tiramisù | Bento + bandeau carte | 50% 55–60% |
| 4L0A8296 | Affogato | Bento + bandeau carte | 50% 55% |
| 4L0A8006-Edit | Sorbet plein fruit | Bento + bandeau carte | 50% 45% |
| 4L0A8245 | Pots à partager | Bento | — |
| 4L0A7979 | Façade boutique | Split boutique + repère carte | 50% 30–62% |
| 4L0A8414 | Bacs à emporter | Split à emporter | 50% 45% |
| 4L0A8422 | Geste au bac | Hero Professionnels | 50% 45% |
| IMG_9425 | Pots préparés | Bandeau Professionnels | 50% 55% |

Toujours `object-fit: cover`, radius 16px sauf bandeaux full-bleed (aucun radius). Fournir des `alt` descriptifs en français.

---

## 8. Routing & comportement SPA (référence : `planche/site-v2-app.jsx`)

- Routes hash : `#/` (accueil) · `#/carte` · `#/histoire` · `#/professionnels` ; ancres `#/accueil?a=creations|atelier`.
- En prod : vraies pages ou router équivalent ; scroll top à chaque navigation ; ancres avec offset ~24px (compter la nav sticky si implémentée).
- Liens `a` par défaut : Espresso, hover `--caramello-ink` (déjà stylés globalement).

## 9. Accessibilité & QA
- `prefers-reduced-motion` : gèle marquee et reveals (le contenu doit être l'état final, on anime *depuis* l'invisible).
- Focus visible 2px Caramello sur tout élément interactif ; overlay nav fermable au clavier (Esc) et piégeage de focus en prod.
- Contrastes : Espresso sur Crema/Sabbia OK ; texte sur photo uniquement via le scrim du hero. Ne jamais poser du Taupe sur Sabbia pour du texte < 15px porteur de sens.
- Vérifier la nav à 1024–1100px (bascule pastille icône), le masonry de la carte (aucun groupe coupé), et le bento à chaque breakpoint.
