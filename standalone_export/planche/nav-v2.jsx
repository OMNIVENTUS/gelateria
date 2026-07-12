/* Amore Mio — Nav v2 : composant de référence (remplace NavPillDesktop / NavMobileClosed / NavMobileOverlay).
   AmNav({ bp: 'd'|'t'|'m', active: 'creations'|'atelier'|'histoire'|'pro'|'menu'|null, cta: 'wa'|'devis' })
   - d : une seule ligne. Sous 1100px de conteneur (≈1024 viewport), le CTA texte cède la place
     à une pastille icône (container query), jamais 2 lignes.
   - t / m : hamburger → overlay plein écran interactif, 5 liens + CTA, reveal décalé 90 ms. */

const AM_NAV_LINKS = [
  ['creations', 'Nos créations'],
  ['atelier', "L'atelier"],
  ['histoire', 'Notre histoire'],
  ['pro', 'Professionnels'],
  ['menu', 'Menu'],
];

(function amNavInjectStyles() {
  if (document.getElementById('am-nav-style')) return;
  const st = document.createElement('style');
  st.id = 'am-nav-style';
  st.textContent = `
    .am-nav-root { container-type: inline-size; }
    .am-nav-cta-mini { display: none !important; }
    @container (max-width: 1100px) {
      .am-nav-cta-full { display: none !important; }
      .am-nav-cta-mini { display: inline-flex !important; }
    }
    @media (prefers-reduced-motion: no-preference) {
      .am-nav-reveal { animation: amNavReveal 420ms cubic-bezier(0.22,0.61,0.36,1) both; }
      .am-nav-overlay { animation: amNavFade 220ms cubic-bezier(0.22,0.61,0.36,1) both; }
    }
    @keyframes amNavReveal { from { transform: translateY(110%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes amNavFade { from { opacity: 0; } to { opacity: 1; } }
  `;
  document.head.appendChild(st);
})();

/* CTA de nav : pill Caramello compacte. cta='wa' | 'devis' */
function AmNavCta({ cta = 'wa' }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: '11px', textDecoration: 'none',
    fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '15px', lineHeight: 1,
    color: 'var(--crema)', background: 'var(--caramello)', borderRadius: 'var(--radius-pill)',
    padding: '14px 24px', boxShadow: 'var(--shadow-sm)', whiteSpace: 'nowrap',
    transition: 'background var(--dur-base) var(--ease)',
  };
  if (cta === 'devis') {
    return (
      <a href="#contact-pro" className="am-nav-cta-full" style={base}>
        Demander un devis
        <i className="ph-light ph-arrow-right" style={{ fontSize: '15px' }} aria-hidden="true"></i>
      </a>
    );
  }
  return (
    <a href={AM_WA_URL} target="_blank" rel="noopener" className="am-nav-cta-full" style={base}>
      <WaGlyph size={16} />
      Commander sur WhatsApp
    </a>
  );
}
/* Repli <1100px : pastille icône seule (jamais 2 lignes) */
function AmNavCtaMini({ cta = 'wa' }) {
  return (
    <a href={cta === 'devis' ? '#contact-pro' : AM_WA_URL} className="am-nav-cta-mini" aria-label={cta === 'devis' ? 'Demander un devis' : 'Commander sur WhatsApp'} style={{
      width: '46px', height: '46px', borderRadius: '999px', background: 'var(--caramello)', color: 'var(--crema)',
      alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)', textDecoration: 'none', flex: '0 0 auto',
    }}>
      {cta === 'devis'
        ? <i className="ph-light ph-arrow-right" style={{ fontSize: '18px' }} aria-hidden="true"></i>
        : <WaGlyph size={19} />}
    </a>
  );
}

function AmNavBurger({ onClick }) {
  return (
    <span onClick={onClick} role="button" tabIndex={0} aria-label="Menu" style={{ width: '44px', height: '44px', borderRadius: '999px', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px', background: 'var(--espresso)', cursor: 'pointer', flex: '0 0 auto' }}>
      <span style={{ width: '16px', height: '1.5px', background: 'var(--crema)' }}></span>
      <span style={{ width: '16px', height: '1.5px', background: 'var(--crema)' }}></span>
    </span>
  );
}

/* Barre fermée, tous formats */
function AmNavBar({ bp = 'd', active = null, cta = 'wa', onOpen }) {
  const linkStyle = (key) => ({
    fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '15px',
    color: key === active ? 'var(--caramello)' : 'var(--espresso)',
    textDecoration: 'none', padding: '12px 2px', whiteSpace: 'nowrap',
  });
  const shell = {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    background: 'rgba(255,255,255,0.70)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(166,152,138,0.35)', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-md)',
  };
  if (bp === 'd') {
    return (
      <div className="am-nav-root">
        <div style={{ ...shell, height: '72px', gap: '24px', padding: '0 13px 0 30px' }}>
          <Wordmark />
          <nav style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
            {AM_NAV_LINKS.map(([key, label]) => <a key={key} href={(window.AM_NAV_HREFS || {})[key] || '#'} style={linkStyle(key)}>{label}</a>)}
          </nav>
          <AmNavCta cta={cta} />
          <AmNavCtaMini cta={cta} />
        </div>
      </div>
    );
  }
  const m = bp === 'm';
  return (
    <div style={{ ...shell, height: m ? '60px' : '64px', padding: m ? '0 8px 0 22px' : '0 10px 0 26px' }}>
      <Wordmark scale={m ? 0.9 : 0.95} tagline={!m} />
      <AmNavBurger onClick={onOpen} />
    </div>
  );
}

/* Overlay plein écran (t / m) : 5 liens + CTA, reveal décalé */
function AmNavOverlay({ bp = 'm', active = null, cta = 'wa', onClose, style }) {
  const m = bp === 'm';
  return (
    <div className="am-nav-overlay" style={{
      background: 'rgba(246,241,232,0.94)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
      display: 'flex', flexDirection: 'column', padding: m ? '24px 28px 40px' : '32px 48px 52px',
      boxSizing: 'border-box', ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Wordmark scale={m ? 0.9 : 1} tagline={false} />
        <span onClick={onClose} role="button" tabIndex={0} aria-label="Fermer" style={{ width: '44px', height: '44px', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--taupe)', cursor: 'pointer', background: 'var(--crema)' }}>
          <i className="ph-light ph-x" style={{ fontSize: '18px', color: 'var(--espresso)' }} aria-hidden="true"></i>
        </span>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: m ? '6px' : '10px', marginTop: m ? '64px' : '90px', maxWidth: '560px' }}>
        {AM_NAV_LINKS.map(([key, label], i) => (
          <div key={key} style={{ overflow: 'hidden' }}>
            <a href={(window.AM_NAV_HREFS || {})[key] || '#'} className="am-nav-reveal" onClick={onClose} style={{
              display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: m ? '2.2rem' : '2.8rem', lineHeight: 1.15,
              color: key === active ? 'var(--caramello)' : 'var(--espresso)', textDecoration: 'none',
              padding: m ? '9px 0' : '12px 0', borderBottom: '1px solid var(--caramello-line)',
              animationDelay: `${120 + i * 90}ms`,
            }}>
              {label}
              <i className="ph-light ph-arrow-right" style={{ fontSize: '20px', color: 'var(--taupe)' }} aria-hidden="true"></i>
            </a>
          </div>
        ))}
      </nav>
      <div className="am-nav-reveal" style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'flex-start', animationDelay: `${120 + AM_NAV_LINKS.length * 90}ms` }}>
        <Spec style={{ color: 'var(--espresso-45)' }}>La Marsa, Tunis. Ouvert tous les jours.</Spec>
        {cta === 'devis'
          ? <PrimaryCta size="md" wa={false} href="#contact-pro">Demander un devis</PrimaryCta>
          : <PrimaryCta size="md" />}
      </div>
    </div>
  );
}

/* Composant de référence */
function AmNav({ bp = 'd', active = null, cta = 'wa' }) {
  const [open, setOpen] = React.useState(false);
  if (bp === 'd') return <AmNavBar bp="d" active={active} cta={cta} />;
  const gut = v2Gut(bp);
  const topOff = bp === 'm' ? 16 : 28;
  return (
    <div>
      <AmNavBar bp={bp} onOpen={() => setOpen(true)} />
      {open && (
        <AmNavOverlay bp={bp} active={active} cta={cta} onClose={() => setOpen(false)} style={window.__AM_SITE_APP
          ? { position: 'fixed', inset: 0, zIndex: 60 }
          : {
            position: 'absolute', top: `${-topOff}px`, left: `${-gut}px`, right: `${-gut}px`,
            height: bp === 'm' ? '760px' : '1080px', zIndex: 30,
          }} />
      )}
    </div>
  );
}

Object.assign(window, { AM_NAV_LINKS, AmNav, AmNavBar, AmNavOverlay, AmNavCta, AmNavCtaMini, AmNavBurger });
