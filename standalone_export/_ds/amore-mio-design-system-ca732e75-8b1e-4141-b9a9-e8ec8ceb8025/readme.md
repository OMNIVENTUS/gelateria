# Amore Mio — Design System

**Amore Mio — L'Atelier De La Glace** is a premium artisanal gelateria in Tunis (La Marsa). Everything is made in-house, every day, in a single small atelier — no chain, no powder, no shortcuts. The brand voice is *editorial luxury food*: warm and precise, never kitsch "gelato". This system powers a one-page vitrine site and a "La Carte" page.

The public face is French with Italian words woven in (set in italic, same family). The single call to action, everywhere, is **"Commander sur WhatsApp"**.

## Sources provided
- 11 brand photographs in `uploads/` (product, packaging, storefront, lifestyle) — curated copies live in `assets/photos/`.
- A client-locked palette, type stack and hard constraints (below). No codebase, Figma file, or vector logo was supplied.

There is **no vector logo**. The canonical mark is the photographic gold sign at `assets/logo-sign-gold.jpg` (a soft-serve swirl cone inside a lit ring, "Amore Mio / L'Atelier De La Glace"). Where a clean mark is needed, render the wordmark in Marcellus caps + Cormorant-italic tagline. **Do not redraw or vectorise the logo** — ask the client for the original artwork.

---

## Locked constraints (client — do not "correct")
- **Palette:** Crema `#F6F1E8` (page), Sabbia `#EAE0D0` (alt bands), Taupe `#A6988A` (borders/secondary text), Espresso `#37281D` (text), Latte `#FFFFFF` (cards), **Caramello `#B97C3F` — the single accent** (CTA, links, focus). Vivid colour comes **only from photography.**
- **Theme:** light only, locked. **No gradients.** Shadows are warm-tinted only: `rgba(55,40,29, a)`.
- **Type:** Cormorant Garamond 600 (display; italic same family for Italian words), Marcellus caps (rare labels), Satoshi (body/UI). **Forbidden: Inter, Roboto, Fraunces, Instrument Serif.**
- **Radius lock:** buttons = pill, cards = 24px, images = 16px.
- **Icons:** Phosphor **Light** (stroke 1.5) only.
- **Never:** emoji, stock/AI imagery, em-dash, a second CTA verb.

---

## CONTENT FUNDAMENTALS
**Language.** French base with Italian words for the craft ("*fatto a mano*", "*del giorno*", "*subito*", "*oggi*", "*fior di latte*") — always italic, always Cormorant. English is not used publicly.

**Voice.** Warm, confident, artisanal, understated. It states facts about the making, not hype: *"Chaque bac est turbiné le matin même."* / *"Rien n'attend au congélateur."* Sentences are short and declarative. It speaks as "nous" (the atelier), addresses the guest lightly, and never begs.

**Casing.** Display and body in sentence case. Marcellus labels in UPPERCASE, tracked (eyebrows, tags). Prices as "4,5 DT" (comma decimal, Tunisian dinar).

**What it avoids.** No emoji. No exclamation floods. No em-dashes (use commas or periods). No superlatives stacked ("the best, freshest, creamiest"). No second CTA — it is always exactly "Commander sur WhatsApp".

**Provenance cues.** "100% fait maison", "sans colorant", "turbiné chaque jour", specific origins ("pistache de Bronte", "noisettes du Piémont").

---

## VISUAL FOUNDATIONS
**Colour vibe.** A warm, sunlit, wood-and-kraft world. The interface is quiet neutrals (Crema / Sabbia / Latte) so the food is the only saturated thing on screen. Caramello is used sparingly for the one accent; text is Espresso; secondary text and hairlines are Taupe.

**Type.** Cormorant Garamond 600 sets an editorial, slightly literary tone at large sizes with tight tracking (-0.01em); Italian words switch to its italic. Satoshi carries all body and UI at 1.6 line-height. Marcellus is rationed to eyebrows and tags in tracked caps (0.14–0.16em). Base body is 16px; display uses a fluid `clamp` scale.

**Backgrounds.** Flat colour fields only — never gradients. Sections alternate Crema and Sabbia to create rhythm; the footer is a solid Espresso block. Photography appears as inset, 16px-radius blocks (never full-bleed edge-to-edge tinting), or as a photo half in split cards. No repeating patterns or textures in the UI itself (texture comes from the food photos).

**Imagery.** Warm colour temperature, shallow depth of field, natural light, real product and real storefront — pistachio greens, chocolate browns, berry reds against pale wood. Never stock, never AI.

**Cards.** Latte surface, 24px radius, 1px faint warm border (`--border-faint`), warm `--shadow-md`. Inset images sit with an 8px pad and 16px radius. On `hover` (opt-in) a card lifts 3px and deepens to `--shadow-lg`.

**Borders.** Three weights: `--border` (Taupe, full-strength dividers/outlines), `--border-soft` (Caramello hairline `#D8C3A6`, used inside warm surfaces and list rows), `--border-faint` (light taupe, card edges).

**Shadows.** One warm ink only — `rgba(55,40,29, a)` at 0.06 / 0.08 / 0.12. No grey, no coloured, no inner shadows. Elevation is gentle and diffuse.

**Radius.** Locked: pill buttons/chips, 24px cards/panels, 16px images, 10px small inputs/tags.

**Motion.** Restrained, no bounce. Standard ease `cubic-bezier(0.22,0.61,0.36,1)`, durations 140/220/420ms. Fades and small translate/lift only.

**Interaction states.** Hover — primary button darkens Caramello → `--caramello-ink`, secondary fills with `--accent-wash`, ghost text darkens, cards lift. Press — scale to 0.97 (no colour flash). Focus — 2px Caramello ring. Disabled — 50% opacity, not-allowed.

**Transparency & blur.** Used once: the sticky nav is `rgba(246,241,232,0.82)` + `backdrop-filter: blur(12px)` over a soft hairline. Otherwise surfaces are opaque.

**Layout.** 1200px max container, ~720px editorial text measure, fluid gutter `clamp(1.25rem,4vw,3rem)`. Generous vertical spacing between sections (clamp 3–6rem).

---

## ICONOGRAPHY
The brand uses **Phosphor Icons, Light weight only** (thin 1.5 stroke) — matching the delicate, editorial feel. Load once per page:

```html
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/light/style.css">
```

Then use the `Icon` component (`<Icon name="map-pin" />`) or `<i class="ph-light ph-map-pin">`. Common glyphs: `map-pin`, `clock`, `phone`, `heart`, `leaf`, `snowflake`, `ice-cream`, `instagram-logo`, `facebook-logo`, `tiktok-logo`, `arrow-right`. **Never** use filled, bold, or duotone weights, **no emoji**, and **no ad-hoc SVG icons**. The one bespoke glyph permitted is the WhatsApp mark baked into the primary CTA button.

*Substitution flag:* Phosphor is loaded from CDN (no icon assets were supplied). If the brand later ships its own icon set, replace the CDN link and the `Icon` wrapper.

---

## Index / manifest
**Root**
- `styles.css` — the entry stylesheet consumers link (import manifest only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css` (spacing + radius + shadow + motion + layout).
- `assets/` — `logo-sign-gold.jpg` (canonical mark) and `photos/` (curated brand photography).

**Components** (`window.AmoreMioDesignSystem_ca732e`)
- `Button` — pill CTA; primary/secondary/ghost, `whatsapp`, `icon`, sizes. *(components/core)*
- `Badge` — Marcellus caps tag; outline/solid/muted, optional colour dot. *(components/core)*
- `Icon` — Phosphor Light wrapper. *(components/core)*
- `Card` — Latte 24px surface with optional inset image. *(components/core)*
- `SectionHeading` — eyebrow + Cormorant display title + lead. *(components/marketing)*
- `FlavorCard` — carte entry; `row` list or photo `tile`. *(components/menu)*

**UI kits**
- `ui_kits/website/` — interactive vitrine (Accueil ↔ La Carte). See its README.

**Guidelines** — foundation specimen cards in `guidelines/` (Colors, Type, Spacing, Brand) surface on the Design System tab.

**Skill** — `SKILL.md` makes this downloadable as a Claude Agent Skill.

## Intentional additions
No source codebase defined a component inventory, so a focused set was authored for a gelateria vitrine. `Icon` is an explicit addition: a thin wrapper that enforces the Phosphor-Light-only rule across the system.

## Caveats
- **Satoshi** is served from Fontshare (not Google Fonts) via CDN `@import`; no binary was supplied. If you need self-hosted fonts, upload the Satoshi files.
- **No vector logo** — the photographic gold sign is canonical. Request original artwork for print/scalable use.
