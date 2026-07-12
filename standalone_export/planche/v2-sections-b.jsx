/* Accueil v2 — sections 6 à 12. bp = 'd' | 't' | 'm' */

/* ---------- 6. Nos créations — bento 5 cellules ---------- */
function V2BentoCell({ bp, src, name, sub, tall = false, pos = '50% 50%' }) {
  return (
    <article style={{
      background: 'var(--latte)', borderRadius: 'var(--radius-card)', border: '1px solid var(--border-faint)',
      padding: '8px', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', minHeight: 0,
    }}>
      <div style={{ borderRadius: 'var(--radius-image)', overflow: 'hidden', flex: '1 1 auto', minHeight: 0 }}>
        <img src={amSrc(src)} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos, display: 'block' }} />
      </div>
      <div style={{ padding: bp === 'm' ? '14px 12px 10px' : '16px 14px 12px', display: 'flex', alignItems: 'baseline', gap: '10px', flex: '0 0 auto' }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: bp === 'm' ? '21px' : '23px', lineHeight: 1.1, color: 'var(--espresso)' }}>{name}</h3>
        {sub && <em style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: bp === 'm' ? '15px' : '16px', color: 'var(--taupe)' }}>{sub}</em>}
      </div>
    </article>
  );
}
function V2Creations({ bp }) {
  const gut = v2Gut(bp);
  const cells = {
    cone: { src: 'assets/photos/4L0A7727.jpg', name: 'Cône signature', sub: 'fatto a mano', pos: '50% 40%' },
    tiramisu: { src: 'assets/photos/IMG_9461.jpg', name: 'Tiramisù', pos: '50% 60%' },
    affogato: { src: 'assets/photos/4L0A8296.jpg', name: 'Affogato', pos: '50% 55%' },
    sorbet: { src: 'assets/photos/4L0A8006-Edit.jpg', name: 'Sorbet plein fruit', pos: '50% 45%' },
    pots: { src: 'assets/photos/4L0A8245.jpg', name: 'Pots à partager', pos: '50% 50%' },
  };
  const link = (
    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '15.5px', color: 'var(--caramello)', padding: '12px 2px' }}>
      Toute la carte
      <i className="ph-light ph-arrow-right" style={{ fontSize: '16px' }} aria-hidden="true"></i>
    </a>
  );
  let grid;
  if (bp === 'd') {
    grid = (
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr 1fr', gridTemplateRows: '330px 330px', gap: '22px' }}>
        <div style={{ gridRow: '1 / 3', display: 'grid' }}><V2BentoCell bp={bp} {...cells.cone} tall /></div>
        <V2BentoCell bp={bp} {...cells.tiramisu} />
        <V2BentoCell bp={bp} {...cells.affogato} />
        <V2BentoCell bp={bp} {...cells.sorbet} />
        <V2BentoCell bp={bp} {...cells.pots} />
      </div>
    );
  } else if (bp === 't') {
    grid = (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '420px 300px 300px', gap: '20px' }}>
        <div style={{ gridColumn: '1 / 3', display: 'grid' }}><V2BentoCell bp={bp} {...cells.cone} /></div>
        <V2BentoCell bp={bp} {...cells.tiramisu} />
        <V2BentoCell bp={bp} {...cells.affogato} />
        <V2BentoCell bp={bp} {...cells.sorbet} />
        <V2BentoCell bp={bp} {...cells.pots} />
      </div>
    );
  } else {
    grid = (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridAutoRows: 'minmax(300px, auto)', gap: '16px' }}>
        <div style={{ minHeight: '420px', display: 'grid' }}><V2BentoCell bp={bp} {...cells.cone} /></div>
        <V2BentoCell bp={bp} {...cells.tiramisu} />
        <V2BentoCell bp={bp} {...cells.affogato} />
        <V2BentoCell bp={bp} {...cells.sorbet} />
        <V2BentoCell bp={bp} {...cells.pots} />
      </div>
    );
  }
  return (
    <div id="creations" style={{ background: 'var(--sabbia)', padding: `${V2.padY[bp]}px ${gut}px` }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', marginBottom: bp === 'm' ? '28px' : '40px' }}>
        <V2Title bp={bp} eyebrow="Du jour">Nos créations</V2Title>
        {bp !== 'm' && link}
      </div>
      {grid}
      {bp === 'm' && <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>{link}</div>}
    </div>
  );
}

/* ---------- 7. Pourquoi Amore Mio — 4 blocs hairlines ---------- */
function V2Pourquoi({ bp }) {
  const gut = v2Gut(bp);
  const items = [
    ['heart', '100 % artisanal', 'Tout est fait dans notre atelier, sans base ni préparation industrielle.'],
    ['leaf', 'Ingrédients rigoureusement sélectionnés', 'Chaque matière première est choisie pour son origine et sa justesse.'],
    ['clock', 'Fabrication quotidienne', 'Les bacs sont turbinés le matin même, rien n\'attend au congélateur.'],
    ['ice-cream', 'Recettes maison', 'Des recettes élaborées sur place, ajustées saison après saison.'],
  ];
  const cols = { d: 4, t: 2, m: 1 }[bp];
  return (
    <div style={{ background: 'var(--crema)', padding: `${V2.padY[bp]}px ${gut}px` }}>
      <V2Title bp={bp} center style={{ marginBottom: bp === 'm' ? '36px' : '56px' }}>Pourquoi Amore Mio</V2Title>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {items.map(([icon, title, line], i) => {
          const sep = {};
          if (bp === 'd' && i > 0) sep.borderLeft = '1px solid var(--taupe-40)';
          if (bp === 't') { if (i % 2 === 1) sep.borderLeft = '1px solid var(--taupe-40)'; if (i > 1) sep.borderTop = '1px solid var(--taupe-40)'; }
          if (bp === 'm' && i > 0) sep.borderTop = '1px solid var(--taupe-40)';
          return (
            <div key={title} style={{ padding: bp === 'm' ? '24px 4px' : '10px 28px', display: 'flex', flexDirection: 'column', gap: '12px', ...sep }}>
              <i className={`ph-light ph-${icon}`} style={{ fontSize: '30px', color: 'var(--espresso)' }} aria-hidden="true"></i>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: bp === 'm' ? '22px' : '23px', lineHeight: 1.2, color: 'var(--espresso)', textWrap: 'pretty' }}>{title}</h3>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.6, color: 'var(--espresso-70)' }}>{line}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- 8 & 9. Splits boutique / à emporter ---------- */
function V2Split({ bp, src, alt, pos = '50% 50%', reverse = false, children }) {
  const gut = v2Gut(bp);
  const stacked = bp === 'm';
  const img = <img src={amSrc(src)} alt={alt} style={{ width: '100%', height: stacked ? '300px' : '520px', objectFit: 'cover', objectPosition: pos, borderRadius: 'var(--radius-image)', display: 'block' }} />;
  const txt = <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', justifyContent: 'center' }}>{children}</div>;
  if (stacked) {
    return <div style={{ padding: `${V2.padY.m}px ${gut}px`, display: 'flex', flexDirection: 'column', gap: '26px' }}>{img}{txt}</div>;
  }
  return (
    <div style={{ padding: `${V2.padY[bp]}px ${gut}px`, display: 'grid', gridTemplateColumns: bp === 'd' ? '1.1fr 1fr' : '1fr 1fr', gap: bp === 'd' ? '72px' : '40px', alignItems: 'center' }}>
      {reverse ? [txt, img].map((n, i) => <React.Fragment key={i}>{n}</React.Fragment>) : [img, txt].map((n, i) => <React.Fragment key={i}>{n}</React.Fragment>)}
    </div>
  );
}
function V2Boutique({ bp }) {
  return (
    <div style={{ background: 'var(--crema)' }}>
      <V2Split bp={bp} src="assets/photos/4L0A7979.jpg" alt="La façade de la boutique, La Marsa" pos="50% 62%">
        <V2Title bp={bp}>La boutique</V2Title>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: bp === 'm' ? '15.5px' : '16.5px', lineHeight: 1.65, color: 'var(--espresso-70)', maxWidth: '46ch' }}>
          Une adresse de quartier à La Marsa. Un comptoir clair, du bois blond, et l'atelier juste derrière la vitrine des bacs. On y vient pour un cône <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>subito</em>, on y revient par habitude.
        </p>
      </V2Split>
    </div>
  );
}
function V2Emporter({ bp }) {
  return (
    <div style={{ background: 'var(--sabbia)' }}>
      <V2Split bp={bp} src="assets/photos/4L0A8414.jpg" alt="Bacs et pots à emporter" pos="50% 45%" reverse>
        <V2Title bp={bp}>À emporter</V2Title>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: bp === 'm' ? '15.5px' : '16.5px', lineHeight: 1.65, color: 'var(--espresso-70)', maxWidth: '46ch' }}>
          Pots et bacs préparés à la demande, prêts en quelques minutes. Choisissez vos parfums <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>del giorno</em>, nous nous occupons du reste.
        </p>
        <div style={{ marginTop: '6px' }}><PrimaryCta size="md" /></div>
      </V2Split>
    </div>
  );
}

/* ---------- 10. Témoignages ---------- */
function V2Temoignages({ bp }) {
  const gut = v2Gut(bp);
  const quotes = [
    ['« La pistache est incroyable, on sent la vraie torréfaction. »', 'Sarra B.'],
    ['« De loin la meilleure glace de La Marsa. On y retourne chaque semaine. »', 'Mehdi K.'],
    ['« Des parfums qui changent souvent et un accueil adorable. »', 'Ines T.'],
  ];
  return (
    <div style={{ background: 'var(--crema)', padding: `${V2.padY[bp]}px ${gut}px` }}>
      <V2Title bp={bp} center style={{ marginBottom: bp === 'm' ? '32px' : '48px' }}>Ils nous font confiance</V2Title>
      <div style={{ display: 'grid', gridTemplateColumns: bp === 'm' ? '1fr' : 'repeat(3, 1fr)', gap: bp === 'm' ? '16px' : '22px' }}>
        {quotes.map(([q, sig]) => (
          <figure key={sig} style={{ margin: 0, background: 'var(--sabbia)', borderRadius: '24px', padding: bp === 't' ? '26px 22px' : '30px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '14px' }}>
            <span aria-label="Cinq étoiles" style={{ display: 'inline-flex', gap: '5px', color: 'var(--taupe)' }}>
              {[1, 2, 3, 4, 5].map((s) => <i key={s} className="ph-light ph-star" style={{ fontSize: '16px' }} aria-hidden="true"></i>)}
            </span>
            <blockquote style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '15.5px', lineHeight: 1.6, color: 'var(--espresso)', maxWidth: '32ch' }}>{q}</blockquote>
            <figcaption style={{ fontFamily: 'var(--font-body)', fontSize: '13.5px', color: 'var(--taupe)' }}>{sig}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

/* ---------- 11. Nous trouver ---------- */
function V2MapStylisee({ bp }) {
  const h = { d: 340, t: 300, m: 260 }[bp];
  return (
    <div style={{ position: 'relative', height: `${h}px`, background: 'var(--sabbia)', borderRadius: '24px', border: '1px solid var(--border-faint)', overflow: 'hidden' }}>
      <svg viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
        <path d="M-20 250 C 120 235, 240 260, 380 230 S 580 200, 640 215" fill="none" stroke="#DCD2C2" strokeWidth="26" />
        <path d="M-20 250 C 120 235, 240 260, 380 230 S 580 200, 640 215" fill="none" stroke="#F6F1E8" strokeWidth="3" strokeDasharray="14 12" />
        <path d="M120 -20 C 140 90, 110 200, 150 360" fill="none" stroke="#DCD2C2" strokeWidth="16" />
        <path d="M330 -20 C 320 80, 350 180, 320 360" fill="none" stroke="#DCD2C2" strokeWidth="16" />
        <path d="M470 -20 C 480 100, 450 220, 490 360" fill="none" stroke="#E2D8C8" strokeWidth="10" />
        <path d="M-20 120 C 150 130, 400 105, 640 125" fill="none" stroke="#E2D8C8" strokeWidth="10" />
        <circle cx="330" cy="232" r="34" fill="rgba(185,124,63,0.14)" />
      </svg>
      <div style={{ position: 'absolute', left: '50%', top: '62%', transform: 'translate(-50%, -100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <i className="ph-light ph-map-pin" style={{ fontSize: '40px', color: 'var(--caramello)' }} aria-hidden="true"></i>
        <span style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '11px', color: 'var(--espresso)' }}>La Marsa</span>
      </div>
    </div>
  );
}
function V2Trouver({ bp }) {
  const gut = v2Gut(bp);
  const stacked = bp === 'm';
  const label = { fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '15px', color: 'var(--espresso)' };
  const infos = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      <V2Title bp={bp}>Nous trouver</V2Title>
      <div style={{ position: 'relative', border: '1px dashed var(--taupe)', borderRadius: '16px', padding: '20px 20px 16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <span style={{ position: 'absolute', top: '-9px', left: '16px', background: 'var(--crema)', padding: '0 8px', fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--taupe)' }}>exemple</span>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
          <i className="ph-light ph-map-pin" style={{ fontSize: '18px', color: 'var(--taupe)' }} aria-hidden="true"></i>
          <span style={label}>12, rue de la Plage, La Marsa, Tunis</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
          <i className="ph-light ph-phone" style={{ fontSize: '18px', color: 'var(--taupe)' }} aria-hidden="true"></i>
          <span style={label}>+216 29 481 736</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
          <i className="ph-light ph-instagram-logo" style={{ fontSize: '18px', color: 'var(--taupe)' }} aria-hidden="true"></i>
          <span style={label}>@amoremio.tn</span>
        </div>
      </div>
      <HoursTable w="100%" rows={[
        ['Lundi à jeudi', '11h00, 23h00'],
        ['Vendredi et samedi', '11h00, minuit'],
        ['Dimanche', '10h00, 23h00'],
      ]} />
      <div>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '15px', lineHeight: 1,
          color: 'var(--espresso)', border: '1px solid var(--taupe)', borderRadius: 'var(--radius-pill)', padding: '14px 26px', cursor: 'pointer',
        }}>
          <i className="ph-light ph-arrow-bend-up-right" style={{ fontSize: '16px' }} aria-hidden="true"></i>
          Itinéraire
        </span>
      </div>
    </div>
  );
  const carte = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <V2MapStylisee bp={bp} />
      <img src={amSrc('assets/photos/4L0A7979.jpg')} alt="Repère visuel, la façade Amore Mio" style={{ width: '100%', height: { d: 220, t: 190, m: 170 }[bp] + 'px', objectFit: 'cover', objectPosition: '50% 30%', borderRadius: 'var(--radius-image)', display: 'block' }} />
    </div>
  );
  return (
    <div style={{ background: 'var(--crema)', padding: `${V2.padY[bp]}px ${gut}px` }}>
      <div style={{ display: 'grid', gridTemplateColumns: stacked ? '1fr' : bp === 'd' ? '1fr 1.1fr' : '1fr 1fr', gap: stacked ? '40px' : bp === 'd' ? '80px' : '44px', alignItems: 'start' }}>
        {infos}
        {carte}
      </div>
    </div>
  );
}

/* ---------- 12. Footer Espresso ---------- */
function V2Footer({ bp }) {
  const gut = v2Gut(bp);
  const stacked = bp === 'm';
  const link = { fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(246,241,232,0.85)', textDecoration: 'none', padding: '6px 0' };
  return (
    <div style={{ background: 'var(--espresso)', color: 'var(--crema)', padding: `${stacked ? 56 : 72}px ${gut}px 32px` }}>
      <div style={{ display: 'flex', flexDirection: stacked ? 'column' : 'row', justifyContent: 'space-between', gap: stacked ? '36px' : '48px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '30ch' }}>
          <span style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: '17px' }}>Amore Mio</span>
          <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: '15px', color: 'rgba(246,241,232,0.7)' }}>L'Atelier De La Glace</span>
          <p style={{ margin: '8px 0 0', fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.6, color: 'rgba(246,241,232,0.65)' }}>Glaces et sorbets faits maison chaque jour, à La Marsa.</p>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {AM_NAV_LINKS.map(([key, label]) => <a key={key} href={(window.AM_NAV_HREFS || {})[key] || '#'} style={link}>{label}</a>)}
        </nav>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '18px' }}>
            <i className="ph-light ph-instagram-logo" style={{ fontSize: '22px', color: 'rgba(246,241,232,0.85)' }} aria-hidden="true"></i>
            <i className="ph-light ph-facebook-logo" style={{ fontSize: '22px', color: 'rgba(246,241,232,0.85)' }} aria-hidden="true"></i>
            <i className="ph-light ph-tiktok-logo" style={{ fontSize: '22px', color: 'rgba(246,241,232,0.85)' }} aria-hidden="true"></i>
          </div>
          <PrimaryCta size="md" />
        </div>
      </div>
      <div style={{ marginTop: '48px', paddingTop: '20px', borderTop: '1px solid rgba(246,241,232,0.15)', display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(246,241,232,0.55)' }}>Amore Mio, La Marsa. Tous droits réservés.</span>
        <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '13.5px', color: 'rgba(246,241,232,0.55)' }}>fatto a mano, ogni giorno</span>
      </div>
    </div>
  );
}

Object.assign(window, { V2BentoCell, V2Creations, V2Pourquoi, V2Split, V2Boutique, V2Emporter, V2Temoignages, V2MapStylisee, V2Trouver, V2Footer });
