/* Amore Mio — page "La carte" : deux artboards (1440 + 390) */
function CartePageFrame({ x, y, w, label, children }) {
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

function CarteBoard() {
  return (
    <div>
      <CartePageFrame x={80} y={80} w={1440} label="La carte · Desktop 1440">
        <CarteHeader />
        <CarteBody />
        <InstaCallout />
        <CarteCta />
        <FooterHome />
        <div style={{ position: 'absolute', right: '24px', bottom: '24px', zIndex: 6 }}>
          <FabWhatsApp />
        </div>
      </CartePageFrame>

      <CartePageFrame x={1640} y={80} w={390} label="La carte · Mobile 390">
        <CarteHeader m />
        <CarteBody m />
        <InstaCallout m />
        <CarteCta m />
        <FooterHome m />
        <div style={{ position: 'absolute', right: '16px', bottom: '24px', zIndex: 6 }}>
          <FabWhatsApp />
        </div>
      </CartePageFrame>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CarteBoard />);
