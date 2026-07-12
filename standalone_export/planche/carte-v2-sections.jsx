/* La carte v2 — sections. bp = 'd' | 't' | 'm' */

/* ---------- Header court ---------- */
function CarteV2Header({ bp }) {
  const gut = v2Gut(bp);
  return (
    <div style={{ background: 'var(--crema)', padding: `${bp === 'm' ? 116 : 150}px ${gut}px ${bp === 'm' ? 40 : 56}px`, textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <span style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: bp === 'm' ? '11px' : '12.5px', color: 'var(--taupe)' }}>Fait maison avec passion</span>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.01em', fontSize: { d: 68, t: 56, m: 42 }[bp] + 'px', lineHeight: 1.05, color: 'var(--espresso)' }}>La carte</h1>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: bp === 'm' ? '15px' : '16.5px', lineHeight: 1.6, color: 'var(--espresso-70)' }}>Nos parfums changent au fil des saisons.</p>
      </div>
    </div>
  );
}

/* ---------- Bandeau photo 21:9 ---------- */
function CarteV2Band({ src, alt, pos = '50% 50%' }) {
  return (
    <div style={{ borderRadius: 'var(--radius-image)', overflow: 'hidden', aspectRatio: '21 / 9', marginBottom: '22px' }}>
      <img src={amSrc(src)} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos, display: 'block' }} />
    </div>
  );
}

/* ---------- Groupe de lignes ---------- */
function CarteV2Group({ bp, title, note, bands, children }) {
  return (
    <section style={{ breakInside: 'avoid', WebkitColumnBreakInside: 'avoid', pageBreakInside: 'avoid', marginBottom: bp === 'm' ? '44px' : '56px' }}>
      {bands && bands.length === 1 && <CarteV2Band {...bands[0]} />}
      {bands && bands.length === 2 && (
        <div style={{ display: 'grid', gridTemplateColumns: bp === 'm' ? '1fr' : '1fr 1fr', gap: bp === 'm' ? '12px' : '16px', marginBottom: '22px' }}>
          {bands.map((b) => (
            <div key={b.src} style={{ borderRadius: 'var(--radius-image)', overflow: 'hidden', aspectRatio: '21 / 9' }}>
              <img src={amSrc(b.src)} alt={b.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: b.pos || '50% 50%', display: 'block' }} />
            </div>
          ))}
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px', borderBottom: '1px solid var(--caramello-line)', paddingBottom: '12px', marginBottom: '4px' }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: bp === 'm' ? '26px' : '29px', lineHeight: 1.1, color: 'var(--espresso)' }}>{title}</h2>
        {note && <span style={{ fontFamily: 'var(--font-body)', fontSize: '13.5px', color: 'var(--taupe)', textAlign: 'right' }}>{note}</span>}
      </div>
      <div>{children}</div>
    </section>
  );
}

/* ---------- Ligne prix (variante v2 : prix Satoshi 500 tabular) ---------- */
function CarteV2Line({ name, sub, desc, price }) {
  return (
    <div style={{ padding: '16px 0 4px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem', lineHeight: 1.15, color: 'var(--espresso)', whiteSpace: 'nowrap' }}>
          {name}{sub && <em style={{ fontWeight: 500, fontSize: '1rem', color: 'var(--taupe)', marginLeft: '9px' }}>{sub}</em>}
        </span>
        <span aria-hidden="true" style={{ flex: 1, borderBottom: '2px dotted var(--taupe-40)', transform: 'translateY(-5px)', minWidth: '28px' }}></span>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1.0625rem', color: 'var(--espresso)', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums', textAlign: 'right' }}>{price}</span>
      </div>
      {desc && <p style={{ margin: '3px 0 0', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.5, color: 'var(--espresso-45)', maxWidth: '46ch' }}>{desc}</p>}
    </div>
  );
}

/* ---------- Les groupes (contenu réel, prix en DT) ---------- */
function CarteV2Groups({ bp }) {
  const gut = v2Gut(bp);
  const twoCol = bp !== 'm';
  const colStyle = twoCol
    ? { columnCount: 2, columnGap: bp === 'd' ? '72px' : '40px' }
    : {};
  return (
    <div style={{ background: 'var(--crema)', padding: `${bp === 'm' ? 8 : 16}px ${gut}px 0` }}>
      <div style={colStyle}>
        <CarteV2Group bp={bp} title="Crèmes glacées & sorbets" note="parfums du jour" bands={[
          { src: 'assets/photos/4L0A8201.jpg', alt: 'Crème glacée servie au pot', pos: '50% 42%' },
          { src: 'assets/photos/4L0A8006-Edit.jpg', alt: 'Sorbet plein fruit', pos: '50% 45%' },
        ]}>
          <CarteV2Line name="Classique" price="5,2 DT" />
          <CarteV2Line name="Moyen" price="7,8 DT" />
          <CarteV2Line name="Grand" price="9,5 DT" />
        </CarteV2Group>

        <CarteV2Group bp={bp} title="À emporter">
          <CarteV2Line name="Demi-litre" price="25 DT" />
          <CarteV2Line name="1 litre" price="39,5 DT" />
          <CarteV2Line name="Pot Signature" price="29 DT" />
        </CarteV2Group>

        <CarteV2Group bp={bp} title="Sundae">
          <CarteV2Line name="Moyen" price="5 DT" />
          <CarteV2Line name="XL" price="8 DT" />
        </CarteV2Group>

        <CarteV2Group bp={bp} title="Eskimos">
          <CarteV2Line name="Nature ou fruit" price="5 DT" />
          <CarteV2Line name="Gourmand" price="7 DT" />
        </CarteV2Group>

        <CarteV2Group bp={bp} title="Douceurs maison" bands={[
          { src: 'assets/photos/IMG_9461.jpg', alt: 'Tiramisù maison', pos: '50% 55%' },
        ]}>
          <CarteV2Line name="Cookie" price="7,9 DT" />
          <CarteV2Line name="Brownie" price="7,8 DT" />
          <CarteV2Line name="Brookie" price="8 DT" />
          <CarteV2Line name="Tiramisù" price="10 – 13 DT" />
          <CarteV2Line name="Gaufre" price="7 DT" />
        </CarteV2Group>

        <CarteV2Group bp={bp} title="Duo Amore">
          <CarteV2Line name="Sundae + cookie ou brownie" price="11 DT" />
        </CarteV2Group>

        <CarteV2Group bp={bp} title="Toppings" note="coulis, croquants, fruits secs, chantilly">
          <CarteV2Line name="1 topping" price="2,9 DT" />
          <CarteV2Line name="2 toppings" price="4,9 DT" />
          <CarteV2Line name="3 toppings" price="5,9 DT" />
        </CarteV2Group>

        <CarteV2Group bp={bp} title="Desserts signature" note="sur commande">
          <CarteV2Line name="Vacherin" price="65 – 89 DT" />
          <CarteV2Line name="Omelette norvégienne" price="65 – 89 DT" />
          <CarteV2Line name="Bombe glacée" price="65 DT" />
        </CarteV2Group>

        <CarteV2Group bp={bp} title="Boissons" bands={[
          { src: 'assets/photos/4L0A8296.jpg', alt: 'Affogato', pos: '50% 55%' },
        ]}>
          <CarteV2Line name="Milkshake" sub="parfum au choix" price="11 DT" />
          <CarteV2Line name="Frappuccino" price="11 DT" />
          <CarteV2Line name="Ice Spanish Latte" price="12 DT" />
          <CarteV2Line name="Affogato" price="9,5 DT" />
        </CarteV2Group>
      </div>
    </div>
  );
}

/* ---------- Encart Instagram ---------- */
function CarteV2Encart({ bp }) {
  const gut = v2Gut(bp);
  return (
    <div style={{ background: 'var(--crema)', padding: `${bp === 'm' ? 12 : 24}px ${gut}px` }}>
      <div style={{ background: 'var(--sabbia)', borderRadius: '24px', padding: bp === 'm' ? '28px 22px' : '36px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', textAlign: 'center' }}>
        <i className="ph-light ph-instagram-logo" style={{ fontSize: '26px', color: 'var(--espresso)' }} aria-hidden="true"></i>
        <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: bp === 'm' ? '21px' : '25px', color: 'var(--espresso)' }}>
          Les parfums du jour sont sur notre Instagram.
        </p>
      </div>
    </div>
  );
}

/* ---------- CTA final + rappel condensé ---------- */
function CarteV2Final({ bp }) {
  const gut = v2Gut(bp);
  return (
    <div style={{ background: 'var(--crema)', padding: `${bp === 'm' ? 56 : 88}px ${gut}px ${bp === 'm' ? 72 : 110}px`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '26px', textAlign: 'center' }}>
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: { d: 40, t: 34, m: 28 }[bp] + 'px', lineHeight: 1.15, color: 'var(--espresso)', maxWidth: '24ch' }}>
        Une envie <em style={{ fontWeight: 500 }}>subito</em> ?
      </h2>
      <PrimaryCta size="lg" />
      <div style={{ position: 'relative', border: '1px dashed var(--taupe)', borderRadius: '14px', padding: '16px 22px 13px', display: 'flex', flexDirection: bp === 'm' ? 'column' : 'row', gap: bp === 'm' ? '8px' : '26px', alignItems: 'center' }}>
        <span style={{ position: 'absolute', top: '-9px', left: '16px', background: 'var(--crema)', padding: '0 8px', fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--taupe)' }}>exemple</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--espresso-70)' }}>12, rue de la Plage, La Marsa</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--espresso-70)' }}>Ouvert tous les jours, 11h00 à 23h00</span>
      </div>
    </div>
  );
}

/* ---------- Nav posée sur fond clair ---------- */
function CarteV2Nav({ bp }) {
  const gut = v2Gut(bp);
  return (
    <div style={{ position: 'absolute', top: bp === 'm' ? '16px' : '28px', left: gut, right: gut, zIndex: 5 }}>
      <V2Nav bp={bp} active="menu" />
    </div>
  );
}

Object.assign(window, { CarteV2Header, CarteV2Band, CarteV2Group, CarteV2Line, CarteV2Groups, CarteV2Encart, CarteV2Final, CarteV2Nav });
