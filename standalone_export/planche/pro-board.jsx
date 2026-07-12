/* Professionnels — sections + board. bp = 'd' | 't' | 'm' */

/* ---------- CTA unique de la page : Demander un devis ---------- */
function ProCta({ size = 'md' }) {
  return (
    <a href="#contact-pro" style={{
      display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none',
      fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: size === 'lg' ? '16px' : '15.5px', lineHeight: 1,
      color: 'var(--crema)', background: 'var(--caramello)', borderRadius: 'var(--radius-pill)',
      padding: size === 'lg' ? '18px 32px' : '16px 28px', boxShadow: 'var(--shadow-md)',
    }}>
      Demander un devis
      <i className="ph-light ph-arrow-right" style={{ fontSize: '16px' }} aria-hidden="true"></i>
    </a>
  );
}

/* ---------- 1. Hero split sobre ---------- */
function ProHero({ bp }) {
  const gut = v2Gut(bp);
  const stacked = bp === 'm';
  const txt = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', justifyContent: 'center', alignItems: 'flex-start' }}>
      <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.01em', fontSize: { d: 56, t: 44, m: 36 }[bp] + 'px', lineHeight: 1.08, color: 'var(--espresso)', textWrap: 'pretty', maxWidth: '18ch' }}>
        Amore Mio pour les professionnels
      </h1>
      <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: bp === 'm' ? '15.5px' : '17px', lineHeight: 1.65, color: 'var(--espresso-70)', maxWidth: '44ch', textWrap: 'pretty' }}>
        Desserts glacés artisanaux pour vos événements, votre carte ou votre établissement.
      </p>
      <div style={{ marginTop: '6px' }}><ProCta /></div>
    </div>
  );
  const img = (
    <img src={amSrc('assets/photos/4L0A8422.jpg')} alt="Préparation d'un bac dans la vitrine" style={{ width: '100%', height: stacked ? '340px' : { d: 560, t: 460 }[bp] + 'px', objectFit: 'cover', objectPosition: '50% 45%', borderRadius: 'var(--radius-image)', display: 'block' }} />
  );
  return (
    <div style={{ position: 'relative', background: 'var(--crema)', padding: `${bp === 'm' ? 108 : 150}px ${gut}px ${bp === 'm' ? 64 : 96}px` }}>
      <div style={{ position: 'absolute', top: bp === 'm' ? '16px' : '28px', left: gut, right: gut, zIndex: 5 }}>
        <V2Nav bp={bp} cta="devis" active="pro" />
      </div>
      {stacked
        ? <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>{txt}{img}</div>
        : <div style={{ display: 'grid', gridTemplateColumns: bp === 'd' ? '1.05fr 1fr' : '1fr 1fr', gap: bp === 'd' ? '72px' : '40px', alignItems: 'center' }}>{txt}{img}</div>}
    </div>
  );
}

/* ---------- 2. Nos prestations ---------- */
function ProPrestations({ bp }) {
  const gut = v2Gut(bp);
  const items = [
    ['heart', 'Mariages & réceptions', 'Des desserts glacés à la hauteur d\'un jour important.'],
    ['fork-knife', 'Hôtels & restaurants', 'Une carte glacée fiable, livrée selon vos besoins.'],
    ['buildings', 'Événements corporate', 'Une touche gourmande et soignée pour vos événements d\'entreprise.'],
    ['ice-cream', 'Desserts signature sur mesure', 'Une création pensée avec vous, pour votre carte ou votre événement.'],
  ];
  const cols = bp === 'm' ? 1 : 2;
  return (
    <div style={{ background: 'var(--sabbia)', padding: `${V2.padY[bp]}px ${gut}px` }}>
      <V2Title bp={bp} style={{ marginBottom: bp === 'm' ? '28px' : '44px' }}>Nos prestations</V2Title>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {items.map(([icon, title, line], i) => {
          const sep = {};
          if (bp !== 'm') { if (i % 2 === 1) sep.borderLeft = '1px solid var(--taupe-40)'; if (i > 1) sep.borderTop = '1px solid var(--taupe-40)'; }
          else if (i > 0) sep.borderTop = '1px solid var(--taupe-40)';
          return (
            <div key={title} style={{ padding: bp === 'm' ? '24px 4px' : '30px 34px', display: 'flex', flexDirection: 'column', gap: '12px', ...sep }}>
              <i className={`ph-light ph-${icon}`} style={{ fontSize: '30px', color: 'var(--espresso)' }} aria-hidden="true"></i>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: bp === 'm' ? '22px' : '24px', lineHeight: 1.2, color: 'var(--espresso)', textWrap: 'pretty' }}>{title}</h3>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.6, color: 'var(--espresso-70)', maxWidth: '40ch' }}>{line}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- 3. Les desserts signature — cellules typographiques ---------- */
function ProSignatureCell({ bp, name, desc }) {
  return (
    <article style={{
      background: 'var(--latte)', borderRadius: 'var(--radius-card)', border: '1px solid var(--border-faint)',
      padding: '8px', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ background: 'var(--crema)', borderRadius: 'var(--radius-image)', padding: bp === 'm' ? '34px 24px' : '44px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '14px', flex: 1, justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: bp === 'm' ? '30px' : '33px', lineHeight: 1.1, color: 'var(--espresso)' }}>{name}</span>
        <span aria-hidden="true" style={{ width: '44px', borderTop: '1px solid var(--taupe-40)' }}></span>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.6, color: 'var(--espresso-70)', maxWidth: '30ch' }}>{desc}</p>
      </div>
      <div style={{ padding: '14px 14px 10px', display: 'flex', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '14.5px', color: 'var(--taupe)' }}>Sur devis</span>
      </div>
    </article>
  );
}
function ProSignature({ bp }) {
  const gut = v2Gut(bp);
  const cards = [
    ['Vacherin', 'Meringue croustillante, glace et crème fouettée, en pièce entière.'],
    ['Omelette norvégienne', 'Génoise, glace et meringue flambée à la minute.'],
    ['Bombe glacée', 'Plusieurs parfums superposés, démoulés en pièce unique.'],
  ];
  return (
    <div style={{ background: 'var(--crema)', padding: `${V2.padY[bp]}px 0` }}>
      <div style={{ padding: `0 ${gut}px` }}>
        <V2Title bp={bp} style={{ marginBottom: bp === 'm' ? '28px' : '44px' }}>Les desserts signature</V2Title>
        <div style={{ display: 'grid', gridTemplateColumns: bp === 'm' ? '1fr' : 'repeat(3, 1fr)', gap: bp === 'm' ? '16px' : '22px', alignItems: 'stretch' }}>
          {cards.map(([n, d]) => <ProSignatureCell key={n} bp={bp} name={n} desc={d} />)}
        </div>
      </div>
      <img src={amSrc('assets/photos/IMG_9425.jpg')} alt="Pots préparés à l'atelier" style={{ width: '100%', height: { d: 320, t: 260, m: 200 }[bp] + 'px', objectFit: 'cover', objectPosition: '50% 55%', display: 'block', marginTop: bp === 'm' ? '48px' : '72px' }} />
    </div>
  );
}

/* ---------- 4. Comment ça marche ---------- */
function ProEtapes({ bp }) {
  const gut = v2Gut(bp);
  const steps = [
    ['Brief', 'Vous nous présentez votre projet et vos besoins.'],
    ['Dégustation à l\'atelier', 'Vous goûtez et validez les parfums avec nous.'],
    ['Proposition & livraison', 'Nous confirmons les détails et livrons le jour J.'],
  ];
  return (
    <div style={{ background: 'var(--crema)', padding: `${V2.padY[bp]}px ${gut}px` }}>
      <V2Title bp={bp} center style={{ marginBottom: bp === 'm' ? '32px' : '52px' }}>Comment ça marche</V2Title>
      <div style={{ display: 'grid', gridTemplateColumns: bp === 'm' ? '1fr' : 'repeat(3, 1fr)', gap: bp === 'm' ? '0' : '40px' }}>
        {steps.map(([t, l], i) => (
          <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: bp === 'm' ? 'flex-start' : 'center', textAlign: bp === 'm' ? 'left' : 'center', padding: bp === 'm' ? '22px 4px' : '0', borderTop: bp === 'm' && i > 0 ? '1px solid var(--taupe-40)' : 'none' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: bp === 'm' ? '44px' : '56px', lineHeight: 1, color: 'var(--taupe)' }}>{i + 1}</span>
            <h3 style={{ margin: '4px 0 0', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: bp === 'm' ? '22px' : '24px', lineHeight: 1.2, color: 'var(--espresso)' }}>{t}</h3>
            <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.6, color: 'var(--espresso-70)', maxWidth: '32ch' }}>{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- 5. CTA final ---------- */
function ProFinal({ bp }) {
  const gut = v2Gut(bp);
  return (
    <div id="contact-pro" style={{ background: 'var(--sabbia)', padding: `${bp === 'm' ? 72 : 110}px ${gut}px`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '26px', textAlign: 'center' }}>
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: { d: 44, t: 38, m: 29 }[bp] + 'px', lineHeight: 1.12, color: 'var(--espresso)', maxWidth: '24ch' }}>
        Parlons de votre projet.
      </h2>
      <ProCta size="lg" />
      <div style={{ position: 'relative', border: '1px dashed var(--taupe)', borderRadius: '14px', padding: '16px 22px 13px', display: 'flex', flexDirection: bp === 'm' ? 'column' : 'row', gap: bp === 'm' ? '8px' : '26px', alignItems: 'center' }}>
        <span style={{ position: 'absolute', top: '-9px', left: '16px', background: 'var(--sabbia)', padding: '0 8px', fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--taupe)' }}>exemple</span>
        <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '10px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--espresso-70)' }}>
          <i className="ph-light ph-phone" style={{ fontSize: '15px', color: 'var(--taupe)' }} aria-hidden="true"></i>
          +216 29 481 736
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '10px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--espresso-70)' }}>
          <i className="ph-light ph-envelope-simple" style={{ fontSize: '15px', color: 'var(--taupe)' }} aria-hidden="true"></i>
          pro@amoremio.tn
        </span>
      </div>
    </div>
  );
}

/* ---------- Board ---------- */
function ProFrame({ x, y, w, label, children }) {
  return (
    <section data-screen-label={label} style={{ position: 'absolute', left: x, top: y, width: w }}>
      <div style={{ marginBottom: '12px', paddingInline: '2px' }}>
        <span style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '12px', color: 'var(--espresso-45)' }}>{label}</span>
      </div>
      <div style={{ width: w, background: 'var(--crema)', border: '1px solid var(--taupe-40)', boxShadow: 'var(--shadow-sm)', borderRadius: '2px', overflow: 'hidden', position: 'relative' }}>
        {children}
      </div>
    </section>
  );
}

function ProPage({ bp }) {
  return (
    <div style={{ position: 'relative' }}>
      <ProHero bp={bp} />
      <ProPrestations bp={bp} />
      <ProSignature bp={bp} />
      <ProEtapes bp={bp} />
      <ProFinal bp={bp} />
      <V2Footer bp={bp} />
    </div>
  );
}

function ProBoard() {
  return (
    <div>
      <ProFrame x={80} y={80} w={390} label="Professionnels · Mobile 390">
        <ProPage bp="m" />
      </ProFrame>
      <ProFrame x={550} y={80} w={834} label="Professionnels · Tablette 834">
        <ProPage bp="t" />
      </ProFrame>
      <ProFrame x={1464} y={80} w={1440} label="Professionnels · Laptop 1440">
        <ProPage bp="d" />
      </ProFrame>
    </div>
  );
}

Object.assign(window, { ProPage, ProBoard });
if (!window.__AM_SITE_APP) ReactDOM.createRoot(document.getElementById('root')).render(<ProBoard />);
