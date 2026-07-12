/* La carte v2 — trois artboards : 390 / 834 / 1440 */
function CarteV2Frame({ x, y, w, label, note, children }) {
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

function CarteV2Page({ bp }) {
  return (
    <div style={{ position: 'relative' }}>
      <CarteV2Nav bp={bp} />
      <CarteV2Header bp={bp} />
      <CarteV2Groups bp={bp} />
      <CarteV2Encart bp={bp} />
      <CarteV2Final bp={bp} />
      <V2Footer bp={bp} />
    </div>
  );
}

function CarteV2Board() {
  return (
    <div>
      <CarteV2Frame x={80} y={80} w={390} label="La carte v2 · Mobile 390" note="FAB WhatsApp visible">
        <CarteV2Page bp="m" />
        <div style={{ position: 'absolute', right: '16px', bottom: '20px', zIndex: 6 }}>
          <FabWhatsApp />
        </div>
      </CarteV2Frame>
      <CarteV2Frame x={550} y={80} w={834} label="La carte v2 · Tablette 834">
        <CarteV2Page bp="t" />
      </CarteV2Frame>
      <CarteV2Frame x={1464} y={80} w={1440} label="La carte v2 · Laptop 1440">
        <CarteV2Page bp="d" />
      </CarteV2Frame>
    </div>
  );
}

Object.assign(window, { CarteV2Page, CarteV2Board });
if (!window.__AM_SITE_APP) ReactDOM.createRoot(document.getElementById('root')).render(<CarteV2Board />);
