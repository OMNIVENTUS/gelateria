/* Accueil v2 — sections 1 à 5. bp = 'd' | 't' | 'm' */
const V2 = {
  gut: { d: 64, t: 48, m: 20 },
  padY: { d: 120, t: 96, m: 72 },
  title: { d: 46, t: 38, m: 30 },
};
function v2Gut(bp) { return V2.gut[bp]; }

function V2Title({ bp, eyebrow, children, center = false, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: center ? 'center' : 'flex-start', textAlign: center ? 'center' : 'left', ...style }}>
      {eyebrow && <span style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.16em', fontSize: bp === 'm' ? '11px' : '12px', color: 'var(--caramello)' }}>{eyebrow}</span>}
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.01em', fontSize: `${V2.title[bp]}px`, lineHeight: 1.08, color: 'var(--espresso)' }}>{children}</h2>
    </div>
  );
}

/* ---------- Nav (délègue au composant de référence AmNav, planche/nav-v2.jsx) ---------- */
function V2Nav({ bp, active = null, cta = 'wa' }) {
  return <AmNav bp={bp} active={active} cta={cta} />;
}

/* ---------- 1. Hero full-bleed ---------- */
function V2Hero({ bp }) {
  const h = { d: 900, t: 1080, m: 760 }[bp];
  const gut = v2Gut(bp);
  const pos = { d: '50% 38%', t: '58% 40%', m: '62% 42%' }[bp];
  return (
    <div style={{ position: 'relative', height: `${h}px`, overflow: 'hidden', background: 'var(--espresso)' }}>
      <img src={amSrc('assets/photos/4L0A7834.jpg')} alt="Cône pistache, lumière naturelle" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(30,20,12,0.66) 0%, rgba(30,20,12,0.30) 34%, rgba(30,20,12,0) 60%)' }}></div>
      <div style={{ position: 'absolute', top: bp === 'm' ? '16px' : '28px', left: gut, right: gut, zIndex: 3 }}>
        <V2Nav bp={bp} />
      </div>
      <div style={{ position: 'absolute', left: gut, right: gut, bottom: bp === 'm' ? '44px' : '64px', display: 'flex', flexDirection: 'column', alignItems: bp === 'm' ? 'flex-start' : 'center', textAlign: bp === 'm' ? 'left' : 'center', gap: '18px', zIndex: 2 }}>
        <span style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', color: 'var(--crema)', letterSpacing: '0.18em', lineHeight: 1, fontSize: { d: 76, t: 60, m: 40 }[bp] + 'px' }}>Amore Mio</span>
        <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, color: 'rgba(246,241,232,0.92)', fontSize: { d: 30, t: 26, m: 20 }[bp] + 'px', lineHeight: 1.2 }}>L'Atelier De La Glace</span>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontWeight: 400, color: 'rgba(246,241,232,0.88)', fontSize: { d: 18, t: 17, m: 15.5 }[bp] + 'px', lineHeight: 1.6, maxWidth: '46ch' }}>
          Chaque glace est fabriquée artisanalement dans notre atelier à partir d'ingrédients soigneusement sélectionnés.
        </p>
        <a href="#creations" style={{
          display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginTop: '8px',
          fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '15.5px', lineHeight: 1,
          color: 'var(--crema)', background: 'var(--caramello)', borderRadius: 'var(--radius-pill)',
          padding: '16px 28px', boxShadow: 'var(--shadow-md)',
        }}>
          Découvrir nos créations
          <i className="ph-light ph-arrow-down" style={{ fontSize: '16px' }} aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

/* ---------- 2. Marquee parfums ---------- */
function V2Marquee({ bp }) {
  const fs = { d: 40, t: 34, m: 25 }[bp];
  const run = 'Pistache · Cioccolato · Mangue · Fragola · Tiramisù · Caffè · ';
  return (
    <div style={{ background: 'var(--sabbia)', padding: bp === 'm' ? '26px 0' : '36px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <div className="am-marquee" style={{ display: 'inline-block' }}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: `${fs}px`, color: 'var(--espresso)' }}>{run}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- 3. Notre philosophie ---------- */
function V2Philosophie({ bp }) {
  const gut = v2Gut(bp);
  return (
    <div style={{ background: 'var(--crema)', padding: `${V2.padY[bp] + 16}px ${gut}px` }}>
      <p style={{
        margin: '0 auto', maxWidth: '65ch', width: bp === 'd' ? '820px' : '100%', textAlign: 'center',
        fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.01em',
        fontSize: { d: 42, t: 34, m: 26 }[bp] + 'px', lineHeight: 1.32, color: 'var(--espresso)', textWrap: 'pretty',
      }}>
        Chez Amore Mio, une grande glace commence toujours par un grand produit. Des ingrédients soigneusement sélectionnés, un vrai savoir-faire artisanal, chaque jour.
      </p>
    </div>
  );
}

/* ---------- 4. L'atelier — galerie scroll-snap ---------- */
function V2Atelier({ bp }) {
  const gut = v2Gut(bp);
  const ph = { d: [420, 540], t: [330, 430], m: [270, 360] }[bp];
  const shots = [
    ['assets/photos/4L0A7778.jpg', 'Au comptoir, un cône chocolat noisette'],
    ['assets/photos/4L0A7910.jpg', 'Le mur Notre histoire de la boutique'],
    ['assets/photos/4L0A8201.jpg', 'Service au pot, direct du bac'],
    ['assets/photos/4L0A8078.jpg', 'Pot à emporter, éclats de pistache'],
  ];
  return (
    <div id="atelier" style={{ background: 'var(--crema)', padding: `${V2.padY[bp]}px 0` }}>
      <div style={{ padding: `0 ${gut}px`, marginBottom: bp === 'm' ? '28px' : '40px' }}>
        <V2Title bp={bp}>L'atelier</V2Title>
      </div>
      <div className="v2-hscroll" style={{ display: 'flex', gap: bp === 'm' ? '14px' : '22px', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingLeft: `${gut}px`, paddingBottom: '4px' }}>
        {shots.map(([src, alt]) => (
          <figure key={src} style={{ margin: 0, flex: '0 0 auto', scrollSnapAlign: 'start' }}>
            <img src={amSrc(src)} alt={alt} style={{ width: `${ph[0]}px`, height: `${ph[1]}px`, objectFit: 'cover', borderRadius: 'var(--radius-image)', display: 'block' }} />
          </figure>
        ))}
        <span aria-hidden="true" style={{ flex: '0 0 1px' }}></span>
      </div>
    </div>
  );
}

/* ---------- 5. Nos ingrédients — éditorial typographique ---------- */
function V2Cartouche({ bp, word, line }) {
  return (
    <div style={{ borderTop: '1px solid var(--taupe-40)', paddingTop: bp === 'm' ? '16px' : '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: { d: 38, t: 32, m: 27 }[bp] + 'px', lineHeight: 1.12, color: 'var(--espresso)' }}>{word}</span>
      <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: bp === 'm' ? '14.5px' : '15px', lineHeight: 1.6, color: 'var(--espresso-70)', maxWidth: '42ch' }}>{line}</p>
    </div>
  );
}
function V2Ingredients({ bp }) {
  const gut = v2Gut(bp);
  const cols = bp === 'm' ? '1fr' : '1fr 1fr';
  const gap = bp === 'm' ? '28px' : '40px 56px';
  const bandH = { d: 300, t: 240, m: 190 }[bp];
  const grid = (items) => (
    <div style={{ display: 'grid', gridTemplateColumns: cols, gap: gap, padding: `0 ${gut}px` }}>
      {items.map(([w, l]) => <V2Cartouche key={w} bp={bp} word={w} line={l} />)}
    </div>
  );
  const band = (src, alt) => (
    <img src={amSrc(src)} alt={alt} style={{ width: '100%', height: `${bandH}px`, objectFit: 'cover', display: 'block', margin: bp === 'm' ? '44px 0' : '64px 0' }} />
  );
  return (
    <div style={{ background: 'var(--crema)', padding: `${V2.padY[bp]}px 0` }}>
      <div style={{ padding: `0 ${gut}px`, marginBottom: bp === 'm' ? '32px' : '48px' }}>
        <V2Title bp={bp} eyebrow="La matière première">Nos ingrédients</V2Title>
      </div>
      {grid([
        ['Vanille de Madagascar', 'Gousses entières, infusées lentement dans le lait frais.'],
        ['Pistaches', 'Torréfiées puis broyées à l\'atelier, jamais de pâte industrielle.'],
        ['Mangues fraîches', 'Mûres à point, coupées à la main, plein fruit.'],
      ])}
      {band('assets/photos/4L0A8136-Edit.jpg', 'Texture macro, glace en bac')}
      {grid([
        ['Noisettes torréfiées', 'Torréfaction douce pour un praliné profond.'],
        ['Chocolat', 'Un grand cacao, travaillé en chocolat de couverture.'],
      ])}
      {band('assets/photos/4L0A8175.jpg', 'Texture macro, sorbet mangue passion')}
      {grid([
        ['Fraises', 'De saison, choisies au marché chaque matin.'],
        ['Oranges', 'Pressées le jour même pour nos sorbets.'],
      ])}
    </div>
  );
}

Object.assign(window, { V2, v2Gut, V2Title, V2Nav, V2Hero, V2Marquee, V2Philosophie, V2Atelier, V2Ingredients });
