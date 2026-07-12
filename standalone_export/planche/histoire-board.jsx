/* Notre histoire — sections. bp = 'd' | 't' | 'm' */

/* ---------- 1. Hero éditorial court ---------- */
function HistHero({ bp }) {
  const gut = v2Gut(bp);
  return (
    <div style={{ position: 'relative', background: 'var(--crema)', padding: `${bp === 'm' ? 150 : 210}px ${gut}px ${bp === 'm' ? 72 : 110}px` }}>
      <div style={{ position: 'absolute', top: bp === 'm' ? '16px' : '28px', left: gut, right: gut, zIndex: 5 }}>
        <V2Nav bp={bp} active="histoire" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '22px' }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.01em', fontSize: { d: 68, t: 56, m: 42 }[bp] + 'px', lineHeight: 1.05, color: 'var(--espresso)' }}>Notre histoire</h1>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: bp === 'm' ? '15.5px' : '17px', lineHeight: 1.65, color: 'var(--espresso-70)', maxWidth: '48ch', textWrap: 'pretty' }}>
          Un atelier né d'une conviction : la glace mérite le même soin qu'une grande pâtisserie.
        </p>
      </div>
    </div>
  );
}

/* ---------- Placeholder de texte (aucun récit inventé) ---------- */
function HistPlaceholder({ lines = 5 }) {
  const widths = ['100%', '96%', '99%', '92%', '97%', '88%', '95%', '60%'];
  return (
    <div style={{ position: 'relative', border: '1px dashed var(--taupe)', borderRadius: '14px', padding: '26px 24px 22px', display: 'flex', flexDirection: 'column', gap: '13px' }}>
      <span style={{ position: 'absolute', top: '-9px', left: '16px', background: 'var(--crema)', padding: '0 8px', fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--taupe)' }}>[Texte à fournir par le client]</span>
      {Array.from({ length: lines }).map((_, i) => (
        <span key={i} aria-hidden="true" style={{ display: 'block', height: '11px', borderRadius: '6px', background: 'var(--taupe-40)', width: widths[i % widths.length], opacity: 0.55 }}></span>
      ))}
    </div>
  );
}

/* ---------- 2. Le récit ---------- */
function HistRecit({ bp }) {
  const gut = v2Gut(bp);
  const col = { maxWidth: bp === 'd' ? '680px' : '620px', margin: '0 auto', width: '100%' };
  const h2 = { margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: bp === 'm' ? '27px' : '32px', lineHeight: 1.15, color: 'var(--espresso)' };
  return (
    <div style={{ background: 'var(--crema)', padding: `${bp === 'm' ? 16 : 24}px ${gut}px ${bp === 'm' ? 72 : 110}px`, display: 'flex', flexDirection: 'column', gap: bp === 'm' ? '40px' : '56px' }}>
      <div style={{ ...col, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h2 style={h2}>Les débuts</h2>
        <HistPlaceholder lines={6} />
      </div>
      <figure style={{ margin: '0 auto', maxWidth: bp === 'd' ? '860px' : '100%', width: '100%' }}>
        <img src={amSrc('assets/photos/4L0A7910.jpg')} alt="Le mur Notre histoire, dans la boutique" style={{ width: '100%', height: { d: 520, t: 440, m: 300 }[bp] + 'px', objectFit: 'cover', objectPosition: '50% 38%', borderRadius: 'var(--radius-image)', display: 'block' }} />
        <figcaption style={{ marginTop: '12px', textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--taupe)' }}>Le mur de la boutique, à La Marsa.</figcaption>
      </figure>
      <div style={{ ...col, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h2 style={h2}>L'atelier aujourd'hui</h2>
        <HistPlaceholder lines={5} />
      </div>
    </div>
  );
}

/* ---------- 3. Nos convictions ---------- */
function HistConvictions({ bp }) {
  const gut = v2Gut(bp);
  const items = [
    ['Le produit d\'abord', 'Nous choisissons chaque ingrédient avant de penser à la recette.'],
    ['Le geste artisanal', 'Chaque bac est préparé à la main, jamais en série.'],
    ['La générosité', 'Une vraie portion, un vrai goût, sans détour.'],
  ];
  const row = bp !== 'm';
  return (
    <div style={{ background: 'var(--crema)', padding: `${bp === 'm' ? 64 : 96}px ${gut}px` }}>
      <div style={{ maxWidth: bp === 'd' ? '860px' : '680px', margin: '0 auto' }}>
        <h2 style={{ margin: `0 0 ${bp === 'm' ? 20 : 32}px`, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: { d: 40, t: 36, m: 28 }[bp] + 'px', lineHeight: 1.1, color: 'var(--espresso)' }}>Nos convictions</h2>
        <div>
          {items.map(([t, l]) => (
            <div key={t} style={{ borderTop: '1px solid var(--taupe-40)', padding: bp === 'm' ? '22px 0' : '28px 0', display: row ? 'grid' : 'flex', gridTemplateColumns: row ? '250px 1fr' : undefined, flexDirection: row ? undefined : 'column', gap: row ? '32px' : '8px', alignItems: 'baseline' }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: bp === 'm' ? '23px' : '26px', lineHeight: 1.15, color: 'var(--espresso)' }}>{t}</h3>
              <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: bp === 'm' ? '15px' : '16px', lineHeight: 1.65, color: 'var(--espresso-70)' }}>{l}</p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--taupe-40)' }}></div>
        </div>
      </div>
    </div>
  );
}

/* ---------- 4. La maison — bandeau photo large ---------- */
function HistMaison({ bp }) {
  return (
    <img src={amSrc('assets/photos/4L0A7778.jpg')} alt="Au comptoir de la boutique" style={{ width: '100%', height: { d: 520, t: 420, m: 280 }[bp] + 'px', objectFit: 'cover', objectPosition: '50% 35%', display: 'block' }} />
  );
}

/* ---------- 5. Clôture ---------- */
function HistCloture({ bp }) {
  const gut = v2Gut(bp);
  return (
    <div style={{ background: 'var(--crema)', padding: `${bp === 'm' ? 80 : 130}px ${gut}px ${bp === 'm' ? 88 : 140}px`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', textAlign: 'center' }}>
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: { d: 46, t: 40, m: 30 }[bp] + 'px', lineHeight: 1.12, color: 'var(--espresso)', maxWidth: '22ch' }}>Venez goûter notre histoire.</h2>
      <PrimaryCta size="lg" />
      <div style={{ position: 'relative', border: '1px dashed var(--taupe)', borderRadius: '14px', padding: '15px 22px 12px' }}>
        <span style={{ position: 'absolute', top: '-9px', left: '16px', background: 'var(--crema)', padding: '0 8px', fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--taupe)' }}>exemple</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--espresso-70)' }}>12, rue de la Plage, La Marsa. Ouvert tous les jours.</span>
      </div>
    </div>
  );
}

/* ---------- Board ---------- */
function HistFrame({ x, y, w, label, note, children }) {
  return (
    <section data-screen-label={label} style={{ position: 'absolute', left: x, top: y, width: w }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px', marginBottom: '12px', paddingInline: '2px' }}>
        <span style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '12px', color: 'var(--espresso-45)' }}>{label}</span>
        {note && <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--taupe)' }}>{note}</span>}
      </div>
      <div style={{ width: w, background: 'var(--crema)', border: '1px solid var(--taupe-40)', boxShadow: 'var(--shadow-sm)', borderRadius: '2px', overflow: 'hidden', position: 'relative' }}>
        {children}
      </div>
    </section>
  );
}

function HistPage({ bp }) {
  return (
    <div style={{ position: 'relative' }}>
      <HistHero bp={bp} />
      <HistRecit bp={bp} />
      <HistConvictions bp={bp} />
      <HistMaison bp={bp} />
      <HistCloture bp={bp} />
      <V2Footer bp={bp} />
    </div>
  );
}

function HistBoard() {
  return (
    <div>
      <HistFrame x={80} y={80} w={390} label="Notre histoire · Mobile 390" note="FAB WhatsApp visible">
        <HistPage bp="m" />
        <div style={{ position: 'absolute', right: '16px', bottom: '20px', zIndex: 6 }}>
          <FabWhatsApp />
        </div>
      </HistFrame>
      <HistFrame x={550} y={80} w={834} label="Notre histoire · Tablette 834">
        <HistPage bp="t" />
      </HistFrame>
      <HistFrame x={1464} y={80} w={1440} label="Notre histoire · Laptop 1440">
        <HistPage bp="d" />
      </HistFrame>
    </div>
  );
}

Object.assign(window, { HistPage, HistBoard });
if (!window.__AM_SITE_APP) ReactDOM.createRoot(document.getElementById('root')).render(<HistBoard />);
