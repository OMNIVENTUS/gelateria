/* Accueil v2 — trois artboards : 390 / 834 / 1440 */
function V2Frame({ x, y, w, label, note, children }) {
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

function V2Page({ bp }) {
  return (
    <div>
      <V2Hero bp={bp} />
      <V2Marquee bp={bp} />
      <V2Philosophie bp={bp} />
      <V2Atelier bp={bp} />
      <V2Ingredients bp={bp} />
      <V2Creations bp={bp} />
      <V2Pourquoi bp={bp} />
      <V2Boutique bp={bp} />
      <V2Emporter bp={bp} />
      <V2Temoignages bp={bp} />
      <V2Trouver bp={bp} />
      <V2Footer bp={bp} />
    </div>
  );
}

function V2Board() {
  return (
    <div>
      <V2Frame x={80} y={80} w={390} label="Accueil v2 · Mobile 390" note="FAB WhatsApp visible">
        <V2Page bp="m" />
        <div style={{ position: 'absolute', right: '16px', bottom: '20px', zIndex: 6 }}>
          <FabWhatsApp />
        </div>
      </V2Frame>
      <V2Frame x={550} y={80} w={834} label="Accueil v2 · Tablette 834">
        <V2Page bp="t" />
      </V2Frame>
      <V2Frame x={1464} y={80} w={1440} label="Accueil v2 · Laptop 1440">
        <V2Page bp="d" />
      </V2Frame>
    </div>
  );
}

Object.assign(window, { V2Page, V2Board });
if (!window.__AM_SITE_APP) ReactDOM.createRoot(document.getElementById('root')).render(<V2Board />);
