# Amore Mio — Guide animations & QA

Référence pour tests et finitions sur `Site Amore Mio.html` (one-page responsive) et sa version standalone.
Design system : palette Crema `#F6F1E8` / Sabbia `#EAE0D0` / Taupe `#A6988A` / Espresso `#37281D` / accent unique Caramello `#B97C3F`. Thème clair verrouillé, aucun dégradé, ombres chaudes `rgba(55,40,29,a)` uniquement.

## 1. Tokens de motion (source de vérité)

| Token | Valeur | Usage |
|---|---|---|
| `--ease` | `cubic-bezier(0.22, 0.61, 0.36, 1)` | Toutes les transitions. Jamais `linear` ni `ease-in-out`, jamais de rebond |
| `--dur-fast` | 140 ms | Micro-interactions (press) |
| `--dur-base` | 220 ms | Hover, couleurs, FAB |
| `--dur-slow` | 420 ms | Reveals d'entrée |

Règle globale : uniquement `transform` et `opacity` sont animés. Aucun `window.addEventListener('scroll')` : tout est piloté par IntersectionObserver ou CSS.

## 2. Inventaire des animations

### 2.1 Reveal des sections au scroll
- Cible : chaque section principale enveloppée dans `.site-reveal`.
- État initial : `opacity: 0; translateY(24px)`. À l'entrée dans le viewport (seuil 12 %), la classe `.in` est ajoutée → `opacity: 1; translateY(0)` en 420 ms `--ease`.
- Une seule fois par section (unobserve après déclenchement).
- Fail-open : si IntersectionObserver est absent ou inerte, un fallback (timeout 1400 ms) rend la section visible quand même ; à l'impression, tout est forcé visible. Aucun contenu ne doit JAMAIS rester à `opacity: 0`.
- Condition QA : recharger la page, scroller lentement ; chaque section apparaît en fondu montant, jamais deux fois. Test dégradé : neutraliser IntersectionObserver → tout le contenu est visible après ~1,5 s.

### 2.2 Marquee des parfums
- Bande Marcellus caps après le hero, contenu triplé, `translateX(0 → -33.333%)` en 36 s linéaire, boucle infinie sans à-coup au raccord.
- C'est le SEUL marquee du site.
- Condition QA : la boucle est continue (pas de saut visible), le texte ne provoque aucun débordement horizontal.

### 2.3 Overlay menu mobile
- Ouverture : plein écran, fond `rgba(246,241,232,0.92)` + `backdrop-filter: blur(24px)`.
- Liens : reveal décalé, `translateY(28px) + opacity 0 → 0`, 420 ms, délais 120 / 210 / 300 ms.
- Fermeture : clic sur X, touche Escape, ou clic sur un lien (puis navigation ancre).
- Pendant l'ouverture : `body { overflow: hidden }` (scroll de page bloqué).
- Condition QA (≤ 899 px) : ouvrir → le scroll est bloqué ; Escape ferme ; cliquer "La carte" ferme l'overlay ET amène à la section `#carte`.

### 2.4 Boutons
- Primaire Caramello "button-in-button" : hover → fond `--caramello-ink` (`#9A6531`) et le cercle interne de la flèche se décale de `translate(2px, -1px)` ; press → `scale(0.97)` ; focus → ring 2 px Caramello décalé de 3 px.
- Secondaire ghost : hover → lavis `--accent-wash`.
- Aucun changement d'état instantané : tout transitionne en 140/220 ms.
- Condition QA : au clavier (Tab), le focus ring Caramello est visible sur tous les liens et boutons.

### 2.5 Cartes signatures (double-bezel)
- Hover : élévation `translateY(-3px)` + ombre `--shadow-lg` en 220 ms (comportement du composant Card du DS ; les cartes bento statiques peuvent l'adopter en finition).

### 2.6 FAB WhatsApp
- 56 px, Espresso, fixé bas-droite (24 px des bords, 16 px sur mobile).
- Apparition : fondu + montée 16 px en 220 ms quand le hero sort du viewport.
- Masquage : dès que le bloc CTA final ("Choisissez vos parfums...") est visible, pour ne jamais doubler l'intention.
- Condition QA : invisible en haut de page ; visible en milieu de page ; disparaît sur le CTA final ; réapparaît si on remonte au milieu ; clic → ouvre `https://wa.me/21629481736` dans un nouvel onglet.

### 2.7 Navigation par ancres
- `html { scroll-behavior: smooth }` + `scroll-margin-top: 110px` sur les sections cibles (compense la nav fixe).
- Lien actif : la nav surligne en Caramello la section en cours (observer avec `rootMargin -35% / -55%`).
- Condition QA : cliquer chaque lien de nav (desktop et overlay) → arrivée douce sur la bonne section, titre non masqué par la nav ; le lien correspondant passe en Caramello pendant qu'on est dans la section.

### 2.8 prefers-reduced-motion
- `reduce` → AUCUNE animation : pas de marquee, pas de reveal (contenu visible immédiatement), scroll instantané, overlay sans stagger.
- Condition QA : émuler `prefers-reduced-motion: reduce` → toutes les sections sont visibles sans scroller, le marquee est statique, aucun élément ne reste bloqué à `opacity: 0`.

## 3. Parcours de navigation à tester (agent QA)

1. **Arrivée** : hero visible en entier sans scroll (H1, sous-texte, 2 CTA, photo). Nav pill flottante détachée du bord. Pas de FAB.
2. **Nav desktop** : L'atelier → `#atelier` ; La carte → `#carte` ; Nous trouver → `#trouver` ; logo → retour haut de page.
3. **CTA** : tous les boutons "Commander sur WhatsApp" (hero, à emporter, CTA final, overlay, FAB) portent EXACTEMENT ce libellé et ouvrent `wa.me/21629481736` (nouvel onglet). "Voir la carte" (hero) et "Toute la carte" (signatures) mènent à `#carte`.
4. **Galerie** : bande horizontale scroll-snap à la molette/geste ; le scroll vertical de la page n'est pas piégé.
5. **Footer** : liens ancres fonctionnels, icônes réseaux Phosphor Light.
6. **Mobile (390)** : hamburger 44 px → overlay → navigation ; galerie garde le défilement horizontal ; bento empilé en 1 colonne.

## 4. Checklist responsive

À vérifier sur 1440, 1024 (tablette), 768 et 390 px :

- [ ] Aucun débordement horizontal (`document.documentElement.scrollWidth <= innerWidth`).
- [ ] Nav sur UNE ligne, hauteur 72 px desktop / 60 px mobile ; bascule hamburger sous 900 px.
- [ ] Hero : H1 max 2-3 lignes, CTA visibles sans scroll.
- [ ] Zones tactiles ≥ 44 px (hamburger, FAB, liens overlay, boutons).
- [ ] Texte jamais < 14 px ; prix en Satoshi 500 `tabular-nums` alignés à droite avec pointillés taupe.
- [ ] Images : radius 16 px partout, `object-fit: cover`, aucun filtre ni dégradé superposé.
- [ ] Contraste : texte Espresso sur Crema/Sabbia (AA ok) ; jamais de texte posé directement sur photo sans panneau opaque.

## 5. Invariants de marque (échec du test si violés)

- Un seul accent : Caramello. Aucun autre hex saturé dans l'UI (la couleur vive vient des photos).
- Aucun dégradé, aucune ombre noire/grise, aucun emoji, aucune icône hors Phosphor Light (stroke 1.5), aucun tiret cadratin dans les textes visibles.
- Radius lock : boutons pill / cartes 24 px / images 16 px / petits champs 10 px.
- Un seul libellé d'intention de commande : "Commander sur WhatsApp" (jamais de variante).
- Blur uniquement sur la nav et l'overlay (éléments fixes), jamais sur du contenu défilant.
- Thème clair partout ; le footer Espresso est la seule surface sombre autorisée (canon du DS).

## 6. Pistes de finition (optionnelles, à valider avant d'implémenter)

- Hover d'élévation sur les cartes bento (cf. 2.5).
- Pause du marquee au survol (`animation-play-state: paused`).
- Lazy-loading `loading="lazy"` sur les images sous le pli et `fetchpriority="high"` sur la photo du hero.
- Préchargement des polices (`font-display: swap` est déjà géré par Fontshare/Google).
