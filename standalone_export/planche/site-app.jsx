/* Amore Mio — site one-page interactif et responsive */
const { Button: SiteDsButton } = window.AmoreMioDesignSystem_ca732e;
const SITE_LINKS = [['atelier', "L'atelier"], ['carte', 'La carte'], ['trouver', 'Nous trouver']];

/* ---------- Viewport ---------- */
function useMobile() {
  const [m, setM] = React.useState(() => window.matchMedia('(max-width: 899px)').matches);
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 899px)');
    const fn = (e) => setM(e.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);
  return m;
}

/* ---------- Reveal au scroll (IntersectionObserver, fail-open) ---------- */
function Reveal({ children, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add('in');
    if (!('IntersectionObserver' in window)) { show(); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    io.observe(el);
    /* Fail-open : si l'observer ne se déclenche jamais (webview inerte, print),
       le contenu devient visible quand même. */
    const t = window.setTimeout(show, 1400);
    return () => { io.disconnect(); window.clearTimeout(t); };
  }, []);
  return <div ref={ref} className="site-reveal" style={style}>{children}</div>;
}

/* ---------- Nav ---------- */
function SiteNav({ m, active, onBurger }) {
  const link = (id, label) => (
    <a key={id} href={'#' + id} style={{
      fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '15px',
      color: active === id ? 'var(--caramello)' : 'var(--espresso)', textDecoration: 'none',
      transition: 'color var(--dur-base) var(--ease)',
    }}>{label}</a>
  );
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: m ? '14px' : '24px clamp(20px, 5vw, 72px) 0', pointerEvents: 'none' }}>
      <div style={{
        pointerEvents: 'auto', height: m ? '60px' : '72px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px',
        padding: m ? '0 8px 0 22px' : '0 10px 0 30px',
        background: 'rgba(255,255,255,0.70)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(166,152,138,0.35)', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-md)',
        maxWidth: '1080px', margin: '0 auto',
      }}>
        <a href="#top" style={{ textDecoration: 'none' }}><Wordmark scale={m ? 0.9 : 1} tagline={!m} /></a>
        {!m && <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }} aria-label="Navigation principale">{SITE_LINKS.map(([id, l]) => link(id, l))}</nav>}
        {!m && <PrimaryCta size="md" />}
        {m && (
          <button onClick={onBurger} aria-label="Ouvrir le menu" style={{ width: '44px', height: '44px', borderRadius: '999px', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px', background: 'var(--espresso)', border: 'none', cursor: 'pointer' }}>
            <span style={{ width: '16px', height: '1.5px', background: 'var(--crema)' }}></span>
            <span style={{ width: '16px', height: '1.5px', background: 'var(--crema)' }}></span>
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------- Overlay mobile ---------- */
function SiteOverlay({ open, onClose }) {
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label="Menu" style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(246,241,232,0.92)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', display: 'flex', flexDirection: 'column', padding: '20px 28px 36px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Wordmark scale={0.9} tagline={false} />
        <button onClick={onClose} aria-label="Fermer le menu" style={{ width: '44px', height: '44px', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--taupe)', background: 'transparent', cursor: 'pointer' }}>
          <i className="ph-light ph-x" style={{ fontSize: '18px', color: 'var(--espresso)' }} aria-hidden="true"></i>
        </button>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '84px' }} aria-label="Navigation mobile">
        {SITE_LINKS.map(([id, l], i) => (
          <div key={id} style={{ overflow: 'hidden' }}>
            <a href={'#' + id} onClick={onClose} className="am-reveal" style={{
              display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '2.4rem', lineHeight: 1.15,
              color: 'var(--espresso)', textDecoration: 'none',
              padding: '10px 0', borderBottom: '1px solid var(--caramello-line)',
              animationDelay: `${120 + i * 90}ms`,
            }}>
              {l}
              <i className="ph-light ph-arrow-right" style={{ fontSize: '20px', color: 'var(--taupe)' }} aria-hidden="true"></i>
            </a>
          </div>
        ))}
      </nav>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--espresso-45)' }}>La Marsa, Tunis. Ouvert tous les jours.</span>
        <PrimaryCta size="md" />
      </div>
    </div>
  );
}

/* ---------- Section La carte (intégrée au one-page) ---------- */
function SiteCarteSection({ m }) {
  return (
    <section style={{ background: 'var(--crema)', padding: m ? '64px 0 0' : '112px 0 0' }}>
      <div style={{ padding: m ? '0 24px' : '0 72px', display: 'flex', flexDirection: 'column', gap: m ? '12px' : '16px' }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: m ? '2.4rem' : '3.2rem', lineHeight: 1.08, letterSpacing: '-0.01em', color: 'var(--espresso)' }}>La carte</h2>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: m ? '15px' : '18px', lineHeight: 1.6, color: 'var(--taupe)', maxWidth: '46ch' }}>
          Nos parfums changent au fil des saisons et des arrivages.
        </p>
      </div>
      <CarteBody m={m} />
      <InstaCallout m={m} />
    </section>
  );
}

/* ---------- App ---------- */
function SiteApp() {
  const m = useMobile();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [active, setActive] = React.useState(null);
  const [fabOn, setFabOn] = React.useState(false);
  const heroRef = React.useRef(null);
  const endRef = React.useRef(null);
  const heroSeen = React.useRef(true);
  const endSeen = React.useRef(false);

  /* Lien actif dans la nav */
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-35% 0px -55% 0px' });
    SITE_LINKS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  /* FAB : visible après le hero, masqué quand le CTA final est visible */
  React.useEffect(() => {
    const update = () => setFabOn(!heroSeen.current && !endSeen.current);
    const ioHero = new IntersectionObserver((es) => { es.forEach((e) => { heroSeen.current = e.isIntersecting; }); update(); }, { threshold: 0.15 });
    const ioEnd = new IntersectionObserver((es) => { es.forEach((e) => { endSeen.current = e.isIntersecting; }); update(); }, { threshold: 0.2 });
    if (heroRef.current) ioHero.observe(heroRef.current);
    if (endRef.current) ioEnd.observe(endRef.current);
    return () => { ioHero.disconnect(); ioEnd.disconnect(); };
  }, []);

  const close = React.useCallback(() => setMenuOpen(false), []);

  return (
    <div id="top">
      <SiteNav m={m} active={active} onBurger={() => setMenuOpen(true)} />
      <SiteOverlay open={m && menuOpen} onClose={close} />
      <div ref={heroRef}><SiteHero m={m} /></div>
      <MarqueeBand m={m} />
      <section id="atelier"><Reveal><AtelierSection m={m} /></Reveal></section>
      <Reveal><SignaturesSection m={m} /></Reveal>
      <Reveal><GalerieSection m={m} /></Reveal>
      <section id="carte"><Reveal><SiteCarteSection m={m} /></Reveal></section>
      <Reveal><EmporterSection m={m} /></Reveal>
      <section id="trouver"><Reveal><TrouverSection m={m} /></Reveal></section>
      <div ref={endRef}><Reveal><CarteCta m={m} /></Reveal></div>
      <FooterHome m={m} />
      <div style={{ position: 'fixed', right: m ? '16px' : '24px', bottom: '24px', zIndex: 40, opacity: fabOn ? 1 : 0, transform: fabOn ? 'translateY(0)' : 'translateY(16px)', pointerEvents: fabOn ? 'auto' : 'none', transition: 'opacity var(--dur-base) var(--ease), transform var(--dur-base) var(--ease)' }}>
        <FabWhatsApp />
      </div>
    </div>
  );
}

/* Hero sans la nav embarquée des artboards */
function SiteHero({ m }) {
  const text = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: m ? '20px' : '28px', alignItems: 'flex-start' }}>
      <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: m ? '2.7rem' : 'clamp(3rem, 4.6vw, 4.4rem)', lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--espresso)', paddingBottom: '4px' }}>
        Gelato <em>artigianale</em>, fait maison chaque jour
      </h1>
      <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: m ? '16px' : '18px', lineHeight: 1.6, color: 'var(--taupe)', maxWidth: '44ch' }}>
        Crèmes glacées et sorbets plein fruit, élaborés dans notre atelier à partir d'ingrédients nobles.
      </p>
      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
        <PrimaryCta size={m ? 'md' : 'lg'} />
        <a href="#carte" style={{ textDecoration: 'none' }}><SecondaryPill>Voir la carte</SecondaryPill></a>
      </div>
    </div>
  );
  const photo = (
    <div style={{ borderRadius: '16px', overflow: 'hidden', height: m ? '400px' : '100%', minHeight: m ? 0 : '560px' }}>
      <img src={amSrc('assets/photos/4L0A7834.jpg')} alt="Cône pistache et chocolat de l'atelier" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  );
  if (m) {
    return (
      <div style={{ background: 'var(--crema)', padding: '104px 24px 40px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {text}{photo}
      </div>
    );
  }
  return (
    <div style={{ background: 'var(--crema)', display: 'grid', gridTemplateColumns: '55fr 45fr', gap: '48px', padding: '150px clamp(20px, 5vw, 72px) 56px', minHeight: '100dvh', boxSizing: 'border-box', alignItems: 'center' }}>
      {text}{photo}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SiteApp />);
