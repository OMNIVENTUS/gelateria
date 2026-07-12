/* Amore Mio — planche design system : mise en page des artboards */
const { Button: AmButton, Badge: AmBadge, SectionHeading: AmSectionHeading, FlavorCard: AmFlavorCard } = window.AmoreMioDesignSystem_ca732e;

const LX = 80, MX = 1600, M2X = 2040, DW = 1440, MW = 390;

/* ---------- Données ---------- */
const paletteCore = [
  ['Crema', '#F6F1E8', 'Fond de page'],
  ['Sabbia', '#EAE0D0', 'Bandes alternées, coques de cartes'],
  ['Latte', '#FFFFFF', 'Cartes, nav'],
  ['Taupe', '#A6988A', 'Bordures, texte secondaire'],
  ['Espresso', '#37281D', 'Texte, FAB'],
  ['Caramello', '#B97C3F', 'Accent unique : CTA, liens, focus'],
];
const paletteDerived = [
  ['caramello-ink', '#9A6531', 'Hover et press de l’accent'],
  ['caramello-soft', '#E7D6C2', 'Lavis accent, chips'],
  ['caramello-line', '#D8C3A6', 'Hairline chaude'],
  ['taupe-40', '#C9BEAF', 'Filets discrets, désactivé'],
  ['espresso-70', 'rgba(55,40,29,0.70)', 'Corps atténué'],
  ['espresso-45', 'rgba(55,40,29,0.45)', 'Légendes'],
];
const typeScale = [
  ['Display', 'Cormorant Garamond 600', 'clamp(3rem, 6vw, 5.25rem)', <span>Gelato <em>artigianale</em></span>, { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-display)', lineHeight: 1.1, letterSpacing: '-0.01em' }],
  ['H1', 'Cormorant Garamond 600', 'clamp(2.4rem, 4.2vw, 3.5rem)', <span>Turbiné chaque matin</span>, { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h1)', lineHeight: 'var(--lh-heading)' }],
  ['H2', 'Cormorant Garamond 600', 'clamp(1.9rem, 3vw, 2.5rem)', <span>Les parfums <em>del giorno</em></span>, { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h2)', lineHeight: 1.15 }],
  ['H3', 'Cormorant Garamond 600', '1.5rem', <span>Pistache di Bronte</span>, { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-h3)', lineHeight: 1.2 }],
  ['Label', 'Marcellus, caps 0.15em', '13px', <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em' }}>Fait maison</span>, { fontFamily: 'var(--font-label)', fontSize: 'var(--text-label)', color: 'var(--taupe)' }],
  ['Lead', 'Satoshi 400', '20px', <span>Rien n’attend au congélateur. Chaque bac est turbiné le matin même.</span>, { fontFamily: 'var(--font-body)', fontSize: 'var(--text-lead)', lineHeight: 1.5, color: 'var(--taupe)' }],
  ['Body', 'Satoshi 400', '16px', <span>Nos glaces sont fabriquées dans un seul petit atelier, sans colorant ni arôme ajouté, à partir de lait frais et de fruits entiers.</span>, { fontFamily: 'var(--font-body)', fontSize: 'var(--text-body)', lineHeight: 1.6 }],
  ['Small', 'Satoshi 400', '14px', <span>La Marsa, Tunis. Ouvert tous les jours.</span>, { fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 1.5, color: 'var(--espresso-45)' }],
];
const spaces = [['--space-1', 4], ['--space-2', 8], ['--space-3', 12], ['--space-4', 16], ['--space-5', 24], ['--space-6', 32], ['--space-7', 48], ['--space-8', 64], ['--space-9', 96], ['--space-10', 128]];
const shadows = [['xs', 'var(--shadow-xs)'], ['sm', 'var(--shadow-sm)'], ['md', 'var(--shadow-md)'], ['lg', 'var(--shadow-lg)']];
const menuItems = [
  { name: 'Pistache', subtitle: 'di Bronte', desc: 'Pistaches siciliennes torréfiées, broyées à l’atelier', price: '8 DT' },
  { name: 'Fior di latte', desc: 'Lait frais entier, rien d’autre', price: '6 DT' },
  { name: 'Tiramisù', desc: 'Mascarpone, café serré, cacao amer', price: '7,5 DT' },
  { name: 'Sorbet fraise', desc: 'Fruits entiers de saison, sans colorant', price: '6,5 DT' },
  { name: 'Noisette', subtitle: 'del Piemonte', desc: 'Noisettes du Piémont torréfiées lentement', price: '7,5 DT' },
];
const hoursRows = [
  ['Lundi à jeudi', '11h00 à 22h00'],
  ['Vendredi', '14h00 à 23h00'],
  ['Samedi', '11h00 à 23h00'],
  ['Dimanche', '11h00 à 22h00'],
];

/* ---------- Blocs fondations ---------- */
function SwatchCard({ name, hex, use, big }) {
  const dark = name === 'Espresso' || name === 'Caramello' || name === 'caramello-ink';
  return (
    <div style={{ flex: 1, background: 'var(--latte)', border: '1px solid var(--taupe-40)', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-xs)' }}>
      <div style={{ height: big ? '150px' : '86px', background: hex, borderBottom: '1px solid rgba(166,152,138,0.25)', display: 'flex', alignItems: 'flex-end', padding: '12px' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500, color: dark ? 'rgba(246,241,232,0.9)' : 'var(--espresso-45)' }}>{hex}</span>
      </div>
      <div style={{ padding: '14px 14px 16px' }}>
        <div style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '12px', color: 'var(--espresso)' }}>{name}</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--taupe)', marginTop: '5px', lineHeight: 1.45 }}>{use}</div>
      </div>
    </div>
  );
}

/* ---------- Board ---------- */
function Board() {
  return (
    <div>
      {/* 01 — Couverture */}
      <Frame x={LX} y={80} w={DW} h={430} label="01 · Amore Mio, design system" note="Référence tokens + composants, v1" pad={56}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '760px' }}>
            <Wordmark scale={1.6} />
            <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '3.4rem', lineHeight: 1.08, letterSpacing: '-0.01em', color: 'var(--espresso)' }}>
              Un système calme et chaleureux.<br />La couleur vive vient <em>des photos.</em>
            </h1>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.6, color: 'var(--espresso-70)', maxWidth: '58ch' }}>
              Éditorial luxe, food et craft italien contemporain. Thème clair verrouillé, aucun dégradé, ombres chaudes uniquement, un seul accent Caramello. Le CTA est toujours "Commander sur WhatsApp".
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <AmBadge tone="outline">Variance 7</AmBadge>
              <AmBadge tone="outline">Motion 5</AmBadge>
              <AmBadge tone="outline">Densité 3</AmBadge>
              <AmBadge tone="solid">Thème clair verrouillé</AmBadge>
            </div>
          </div>
          <img src="assets/logo-sign-gold.jpg" alt="Enseigne dorée Amore Mio" style={{ width: '300px', aspectRatio: '4/3.2', objectFit: 'cover', borderRadius: '16px', boxShadow: 'var(--shadow-md)' }} />
        </div>
      </Frame>

      {/* 02 — Palette */}
      <Frame x={LX} y={580} w={DW} h={700} label="02 · Palette, verrouillée client" note="Un seul accent. Dégradés interdits. Ombres rgba(55,40,29)." pad={56}>
        <SpecTitle>Couleurs de marque</SpecTitle>
        <div style={{ display: 'flex', gap: '20px' }}>
          {paletteCore.map((c) => <SwatchCard key={c[0]} name={c[0]} hex={c[1]} use={c[2]} big />)}
        </div>
        <SpecTitle style={{ marginTop: '36px' }}>Teintes dérivées</SpecTitle>
        <div style={{ display: 'flex', gap: '20px' }}>
          {paletteDerived.map((c) => <SwatchCard key={c[0]} name={c[0]} hex={c[1]} use={c[2]} />)}
        </div>
      </Frame>

      {/* 03 — Typographie */}
      <Frame x={LX} y={1340} w={DW} h={950} label="03 · Typographie" note="Cormorant Garamond 600, Marcellus, Satoshi. Italique pour les mots italiens." pad={56}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {typeScale.map((row, i) => (
            <div key={row[0]} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '32px', alignItems: 'baseline', padding: '17px 0', borderTop: i === 0 ? 'none' : '1px solid var(--taupe-40)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '13px', color: 'var(--espresso)' }}>{row[0]}</span>
                <Spec>{row[1]}</Spec>
                <Spec style={{ color: 'var(--espresso-45)' }}>{row[2]}</Spec>
              </div>
              <div style={{ color: 'var(--espresso)', paddingBottom: '4px', ...row[4] }}>{row[3]}</div>
            </div>
          ))}
        </div>
      </Frame>

      {/* 04 — Espacements, radius, ombres */}
      <Frame x={LX} y={2340} w={DW} h={660} label="04 · Espacements, radius, ombres, motion" note="Radius verrouillés : boutons pill, cartes 24, images 16. Sections py-24 à py-36." pad={56}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
          <div>
            <SpecTitle>Échelle d’espacement, base 4 px</SpecTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {spaces.map(([t, px]) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Spec style={{ width: '92px', flex: '0 0 auto' }}>{t}</Spec>
                  <span style={{ height: '10px', width: `${px * 3}px`, maxWidth: '440px', background: 'var(--caramello-soft)', border: '1px solid var(--caramello-line)', borderRadius: '3px' }}></span>
                  <Spec style={{ color: 'var(--espresso-45)' }}>{px} px</Spec>
                </div>
              ))}
            </div>
            <SpecTitle style={{ marginTop: '32px' }}>Rythme vertical des sections</SpecTitle>
            <Spec>py-24 à py-36, soit 96 à 144 px entre les sections. Alternance de fonds Crema et Sabbia.</Spec>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <SpecTitle>Radius, verrouillés</SpecTitle>
              <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-end' }}>
                {[['pill', '999px', '999px'], ['carte', '24px', '24px'], ['image', '16px', '16px'], ['champ', '10px', '10px']].map(([n, l, r]) => (
                  <div key={n} style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                    <span style={{ width: '108px', height: '68px', background: 'var(--latte)', border: '1px solid var(--taupe)', borderRadius: r }}></span>
                    <Spec>{n} · {l}</Spec>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SpecTitle>Ombres chaudes, rgba(55,40,29)</SpecTitle>
              <div style={{ display: 'flex', gap: '18px' }}>
                {shadows.map(([n, s]) => (
                  <div key={n} style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                    <span style={{ width: '108px', height: '68px', background: 'var(--latte)', borderRadius: '16px', boxShadow: s }}></span>
                    <Spec>{n}</Spec>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SpecTitle>Motion, retenu, sans rebond</SpecTitle>
              <Spec>cubic-bezier(0.22, 0.61, 0.36, 1) · 140 ms micro, 220 ms standard, 420 ms reveal. Fondu et petite translation uniquement.</Spec>
            </div>
          </div>
        </div>
      </Frame>

      {/* 05 — Navigation (composant de référence : AmNav, planche/nav-v2.jsx) */}
      <Frame x={LX} y={3120} w={DW} h={380} label="05 · Nav v2 desktop, une seule ligne" note="Latte 70 % + blur 12, hauteur 72 px. Sous 1100 px de conteneur, le CTA texte devient pastille icône, jamais 2 lignes." pad={0} bg="var(--sabbia)">
        <div style={{ padding: '28px 48px 0' }}>
          <AmNavBar bp="d" active="menu" />
        </div>
        <div style={{ padding: '40px 48px 0', maxWidth: '820px' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '2.3rem', lineHeight: 1.12, color: 'var(--espresso)' }}>
            Cinq liens, un CTA. Le lien de la page courante passe en Caramello.
          </h2>
          <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.6, color: 'var(--espresso-70)', maxWidth: '62ch' }}>
            Nos créations · L'atelier · Notre histoire · Professionnels · Menu. CTA « Commander sur WhatsApp » partout, « Demander un devis » sur la page Professionnels. Dès 834 px et en dessous : hamburger et overlay plein écran.
          </p>
        </div>
      </Frame>
      <Frame x={MX} y={3120} w={MW} h={380} label="05a · Nav v2 mobile 390, fermée" pad={0} bg="var(--sabbia)">
        <div style={{ padding: '16px 14px 0' }}>
          <AmNavBar bp="m" />
        </div>
        <p style={{ margin: '28px 22px 0', fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.6, color: 'var(--espresso-70)' }}>
          Hamburger 44 px, deux traits fins. Au tap, l’overlay plein écran s’ouvre avec les cinq liens et le CTA.
        </p>
      </Frame>
      <Frame x={M2X} y={3120} w={MW} h={844} label="05b · Overlay v2, ouvert" note="5 liens + CTA, reveal décalé 90 ms" pad={0}>
        <AmNavOverlay bp="m" active="menu" style={{ position: 'absolute', inset: 0 }} />
      </Frame>

      {/* 06 — Boutons */}
      <Frame x={LX} y={4080} w={DW} h={900} label="06 · Boutons, desktop 1440" note="Pill uniquement. Focus ring Caramello 2 px. Un seul libellé de CTA." pad={56}>
        <SpecTitle>Primaire Caramello, flèche nichée "button-in-button"</SpecTitle>
        <div style={{ display: 'flex', gap: '36px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <StateRow label="Défaut"><PrimaryCta /></StateRow>
          <StateRow label="Hover, fond caramello-ink, flèche décalée"><PrimaryCta state="hover" /></StateRow>
          <StateRow label="Actif, scale 0.97"><PrimaryCta state="active" /></StateRow>
          <StateRow label="Focus, ring 2 px"><PrimaryCta state="focus" /></StateRow>
          <StateRow label="Désactivé, 50 %"><PrimaryCta state="disabled" /></StateRow>
        </div>
        <SpecTitle style={{ marginTop: '46px' }}>Secondaire ghost, bordure taupe</SpecTitle>
        <div style={{ display: 'flex', gap: '36px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <StateRow label="Défaut"><SecondaryPill /></StateRow>
          <StateRow label="Hover, lavis accent"><SecondaryPill state="hover" /></StateRow>
          <StateRow label="Focus"><SecondaryPill state="focus" /></StateRow>
          <StateRow label="Désactivé"><SecondaryPill state="disabled" /></StateRow>
        </div>
        <SpecTitle style={{ marginTop: '46px' }}>Pill WhatsApp Espresso, glyphe trait fin</SpecTitle>
        <div style={{ display: 'flex', gap: '36px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <StateRow label="Défaut"><WaPill /></StateRow>
          <StateRow label="Hover, espresso plus profond"><WaPill state="hover" /></StateRow>
          <StateRow label="Focus"><WaPill state="focus" /></StateRow>
        </div>
        <SpecTitle style={{ marginTop: '46px' }}>Tailles, composant Button du bundle</SpecTitle>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <AmButton size="sm" whatsapp>Commander sur WhatsApp</AmButton>
          <AmButton size="md" whatsapp>Commander sur WhatsApp</AmButton>
          <AmButton size="lg" whatsapp>Commander sur WhatsApp</AmButton>
          <AmButton variant="ghost" icon="arrow-right">Voir la carte</AmButton>
        </div>
      </Frame>
      <Frame x={MX} y={4080} w={MW} h={900} label="06a · Boutons, mobile 390" note="Pleine largeur, cible 44 px min" pad={28}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
          <StateRow label="Primaire, pleine largeur">
            <span style={{ display: 'flex', width: '100%' }}><PrimaryCta size="lg" /></span>
          </StateRow>
          <StateRow label="Secondaire ghost"><SecondaryPill /></StateRow>
          <StateRow label="WhatsApp Espresso"><WaPill /></StateRow>
          <StateRow label="Ghost, lien accent">
            <AmButton variant="ghost" icon="arrow-right">Voir la carte</AmButton>
          </StateRow>
          <div style={{ borderTop: '1px solid var(--taupe-40)', paddingTop: '20px' }}>
            <Spec>Le libellé ne se coupe jamais sur deux lignes. Une seule intention de CTA par écran, toujours "Commander sur WhatsApp".</Spec>
          </div>
        </div>
      </Frame>

      {/* 07 — Carte produit signature */}
      <Frame x={LX} y={5100} w={DW} h={800} label="07 · Carte produit signature, double-bezel" note="Coque Sabbia + hairline taupe 20 % + padding 8 px + radius 24, image 16 concentrique" pad={56}>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
          <SignatureCard w={412} image="assets/photos/choco-pistache-cone.jpg" name="Pistache" subtitle="di Bronte" desc="Pistaches siciliennes torréfiées, broyées à l’atelier le matin même." price="8 DT" />
          <SignatureCard w={412} image="assets/photos/sorbet-cone-red.jpg" name="Sorbet fraise" desc="Fruits entiers de saison, sans colorant ni arôme ajouté." price="6,5 DT" />
          <SignatureCard w={412} image="assets/photos/affogato.jpg" name="Affogato" subtitle="al caffè" desc="Fior di latte noyé sous un espresso serré, servi subito." price="9 DT" />
        </div>
        <p style={{ margin: '30px 0 0', fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.6, color: 'var(--taupe)', maxWidth: '78ch' }}>
          Nom en Cormorant 600, mot italien en italique de la même famille, ligne descriptive en Satoshi, prix en Satoshi 700 au format "6,5 DT". Au hover la carte se soulève de 3 px, ombre lg.
        </p>
      </Frame>
      <Frame x={MX} y={5100} w={MW} h={800} label="07a · Carte signature, mobile 390" pad={28}>
        <SignatureCard w={334} image="assets/photos/tub-two-tone.jpg" name="Tiramisù" desc="Mascarpone, café serré, cacao amer. Le classique de l’atelier." price="7,5 DT" />
        <p style={{ margin: '22px 0 0', fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.6, color: 'var(--taupe)' }}>
          Une colonne, la carte prend toute la largeur moins les gouttières de 28 px.
        </p>
      </Frame>

      {/* 08 — Ligne de menu */}
      <Frame x={LX} y={6020} w={DW} h={620} label="08 · Ligne de menu, page carte" note="Pointillés taupe, prix aligné à droite, description sur une ligne" pad={56}>
        <div style={{ maxWidth: '760px' }}>
          <div style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px', color: 'var(--caramello)', marginBottom: '10px' }}>Les classiques</div>
          {menuItems.map((m) => <MenuLine key={m.name} {...m} />)}
        </div>
      </Frame>
      <Frame x={MX} y={6020} w={MW} h={680} label="08a · Ligne de menu, mobile 390" pad={28}>
        <div style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--caramello)', marginBottom: '6px' }}>Les classiques</div>
        {menuItems.slice(0, 4).map((m) => <MenuLine key={m.name} {...m} />)}
        <p style={{ margin: '18px 0 0', fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.6, color: 'var(--taupe)' }}>
          La description passe sous le nom et se tronque sur une ligne.
        </p>
      </Frame>

      {/* 09 — Horaires */}
      <Frame x={LX} y={6820} w={DW} h={480} label="09 · Tableau horaires" note="Hairlines taupe-40 entre les rangées, chiffres tabulaires" pad={56}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
          <div>
            <h2 style={{ margin: '0 0 18px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '2rem', lineHeight: 1.12, color: 'var(--espresso)' }}>Horaires d’ouverture</h2>
            <HoursTable w="100%" rows={hoursRows} />
          </div>
          <div style={{ paddingTop: '10px' }}>
            <Spec>Deux colonnes en baseline : jour en Satoshi 500 Espresso, plage horaire en Satoshi 400 espresso-70. Format "11h00 à 22h00", jamais de tiret. Un jour fermé s’écrit "Fermé" en Taupe.</Spec>
          </div>
        </div>
      </Frame>
      <Frame x={MX} y={6820} w={MW} h={480} label="09a · Horaires, mobile 390" pad={28}>
        <h2 style={{ margin: '0 0 12px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.6rem', lineHeight: 1.12, color: 'var(--espresso)' }}>Horaires d’ouverture</h2>
        <HoursTable w="100%" rows={hoursRows} />
      </Frame>

      {/* 10 — FAB */}
      <Frame x={LX} y={7420} w={DW} h={360} label="10 · FAB WhatsApp, 56 px" note="Espresso, glyphe trait fin, ombre lg, décalé de 24 px des bords" pad={56}>
        <div style={{ display: 'flex', gap: '56px', alignItems: 'center' }}>
          <FabWhatsApp />
          <div style={{ maxWidth: '620px' }}>
            <Spec>Fixe en bas à droite sur mobile et desktop, 24 px des bords. Masqué quand le CTA du footer est visible pour ne jamais doubler l’intention. Hover : légère élévation, fond espresso plus profond. Focus ring Caramello.</Spec>
          </div>
        </div>
      </Frame>
      <Frame x={MX} y={7420} w={MW} h={520} label="10a · FAB en contexte, mobile 390" pad={0} bg="var(--crema)">
        <div style={{ padding: '28px 24px 0', opacity: 0.55 }}>
          <div style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--caramello)', marginBottom: '4px' }}>Les classiques</div>
          {menuItems.slice(0, 3).map((m) => <MenuLine key={m.name} {...m} />)}
        </div>
        <div style={{ position: 'absolute', right: '24px', bottom: '24px' }}>
          <FabWhatsApp />
        </div>
      </Frame>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Board />);
