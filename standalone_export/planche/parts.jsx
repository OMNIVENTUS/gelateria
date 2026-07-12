/* Amore Mio — planche design system : pièces réutilisables */
function amSrc(path) {
  if (!window.__resources) return path;
  const id = 'r_' + path.replace(/[^a-zA-Z0-9]/g, '_');
  return window.__resources[id] || path;
}
const DS = window.AmoreMioDesignSystem_ca732e;
const { Button, Badge, Icon, Card, SectionHeading, FlavorCard } = DS;

/* ---------- Cadre d'artboard ---------- */
function Frame({ x, y, w, h, label, note, bg = 'var(--crema)', pad = 48, children }) {
  return (
    <section data-screen-label={label} style={{ position: 'absolute', left: x, top: y, width: w }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px', marginBottom: '12px', paddingInline: '2px' }}>
        <span style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: '12px', color: 'var(--espresso-45)' }}>{label}</span>
        {note && <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--taupe)' }}>{note}</span>}
      </div>
      <div style={{ width: w, height: h, background: bg, border: '1px solid var(--taupe-40)', boxShadow: 'var(--shadow-sm)', borderRadius: '2px', overflow: 'hidden', position: 'relative', padding: pad, boxSizing: 'border-box' }}>
        {children}
      </div>
    </section>
  );
}

/* ---------- Petites annotations ---------- */
function Spec({ children, style }) {
  return <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--taupe)', letterSpacing: '0.02em', ...style }}>{children}</span>;
}
function SpecTitle({ children, style }) {
  return <div style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--espresso-70)', marginBottom: '18px', ...style }}>{children}</div>;
}

/* ---------- Glyphe WhatsApp (trait fin) ---------- */
function WaGlyph({ size = 18, color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 256 256" width={size} height={size} fill="none" stroke={color} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M128 28a100 100 0 0 0-86 150L28 228l52-14A100 100 0 1 0 128 28Z"></path>
      <path d="M96 100c0 40 20 60 60 60l8-20-24-12-12 12a48 48 0 0 1-20-20l12-12-12-24Z"></path>
    </svg>
  );
}

/* ---------- Wordmark (pas de logo vectoriel : rendu typographique) ---------- */
function Wordmark({ scale = 1, tagline = true, color = 'var(--espresso)' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', lineHeight: 1 }}>
      <span style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.15em', fontSize: `${17 * scale}px`, color: color, textTransform: 'uppercase' }}>Amore Mio</span>
      {tagline && <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: `${12.5 * scale}px`, color: 'var(--taupe)' }}>L'Atelier De La Glace</span>}
    </div>
  );
}

/* ---------- CTA primaire "button-in-button" ---------- */
const AM_WA_URL = 'https://wa.me/21629481736';
function PrimaryCta({ state = 'default', size = 'md', children = 'Commander sur WhatsApp', wa = true, href = AM_WA_URL }) {
  const bg = state === 'hover' || state === 'active' ? 'var(--caramello-ink)' : 'var(--caramello)';
  const pads = size === 'lg' ? '10px 10px 10px 30px' : '8px 8px 8px 24px';
  const fs = size === 'lg' ? '16px' : '15px';
  const circ = size === 'lg' ? 36 : 32;
  return (
    <a href={state === 'disabled' ? undefined : href} target="_blank" rel="noopener" style={{
      display: 'inline-flex', alignItems: 'center', gap: '14px', textDecoration: 'none',
      fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: fs, lineHeight: 1,
      color: 'var(--crema)', background: bg, borderRadius: 'var(--radius-pill)',
      padding: pads, boxShadow: 'var(--shadow-sm)', whiteSpace: 'nowrap',
      transform: state === 'active' ? 'scale(0.97)' : 'none',
      outline: state === 'focus' ? '2px solid var(--caramello)' : 'none',
      outlineOffset: state === 'focus' ? '3px' : 0,
      opacity: state === 'disabled' ? 0.5 : 1,
      cursor: state === 'disabled' ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-base) var(--ease), transform var(--dur-fast) var(--ease)',
    }}>
      {wa && <WaGlyph size={17} />}
      {children}
      <span style={{
        width: circ, height: circ, borderRadius: '999px', flex: '0 0 auto',
        background: 'rgba(246,241,232,0.18)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transform: state === 'hover' ? 'translate(2px, -1px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease)',
      }}>
        <i className="ph-light ph-arrow-right" style={{ fontSize: '16px' }} aria-hidden="true"></i>
      </span>
    </a>
  );
}

/* ---------- Secondaire ghost ---------- */
function SecondaryPill({ state = 'default', children = 'Voir la carte' }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '10px',
      fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '15px', lineHeight: 1,
      color: 'var(--espresso)', background: state === 'hover' ? 'var(--accent-wash)' : 'transparent',
      border: '1px solid var(--taupe)', borderRadius: 'var(--radius-pill)', padding: '13px 26px',
      transform: state === 'active' ? 'scale(0.97)' : 'none',
      outline: state === 'focus' ? '2px solid var(--caramello)' : 'none',
      outlineOffset: state === 'focus' ? '3px' : 0,
      opacity: state === 'disabled' ? 0.5 : 1,
      whiteSpace: 'nowrap', cursor: 'pointer',
      transition: 'background var(--dur-base) var(--ease)',
    }}>{children}</span>
  );
}

/* ---------- Pill WhatsApp Espresso ---------- */
function WaPill({ state = 'default', children = 'Commander sur WhatsApp' }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '11px',
      fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '15px', lineHeight: 1,
      color: 'var(--crema)', background: state === 'hover' ? '#241a12' : 'var(--espresso)',
      borderRadius: 'var(--radius-pill)', padding: '13px 26px', boxShadow: 'var(--shadow-sm)',
      transform: state === 'active' ? 'scale(0.97)' : 'none',
      outline: state === 'focus' ? '2px solid var(--caramello)' : 'none',
      outlineOffset: state === 'focus' ? '3px' : 0,
      whiteSpace: 'nowrap', cursor: 'pointer',
      transition: 'background var(--dur-base) var(--ease)',
    }}>
      <WaGlyph size={17} />
      {children}
    </span>
  );
}

/* ---------- Nav pill flottante (desktop) ---------- */
function NavPillDesktop() {
  const link = { fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '15px', color: 'var(--espresso)', textDecoration: 'none' };
  return (
    <div style={{
      height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '32px', padding: '0 10px 0 30px',
      background: 'rgba(255,255,255,0.70)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(166,152,138,0.35)', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-md)',
      maxWidth: '1080px', margin: '0 auto',
    }}>
      <Wordmark />
      <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
        <a href="#" style={link}>L'atelier</a>
        <a href="#" style={{ ...link, color: 'var(--caramello)' }}>La carte</a>
        <a href="#" style={link}>Nous trouver</a>
      </nav>
      <PrimaryCta size="md" />
    </div>
  );
}

/* ---------- Nav mobile fermée ---------- */
function NavMobileClosed() {
  return (
    <div style={{
      height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 8px 0 22px',
      background: 'rgba(255,255,255,0.70)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(166,152,138,0.35)', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-md)',
    }}>
      <Wordmark scale={0.9} tagline={false} />
      <span style={{ width: '44px', height: '44px', borderRadius: '999px', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px', background: 'var(--espresso)', cursor: 'pointer' }} aria-label="Menu">
        <span style={{ width: '16px', height: '1.5px', background: 'var(--crema)' }}></span>
        <span style={{ width: '16px', height: '1.5px', background: 'var(--crema)' }}></span>
      </span>
    </div>
  );
}

/* ---------- Overlay mobile plein écran ---------- */
function NavMobileOverlay() {
  const links = ["L'atelier", 'La carte', 'Nous trouver'];
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(246,241,232,0.92)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', display: 'flex', flexDirection: 'column', padding: '20px 28px 36px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Wordmark scale={0.9} tagline={false} />
        <span style={{ width: '44px', height: '44px', borderRadius: '999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--taupe)', cursor: 'pointer' }} aria-label="Fermer">
          <i className="ph-light ph-x" style={{ fontSize: '18px', color: 'var(--espresso)' }} aria-hidden="true"></i>
        </span>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '84px' }}>
        {links.map((l, i) => (
          <div key={l} style={{ overflow: 'hidden' }}>
            <a href="#" className="am-reveal" style={{
              display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '2.4rem', lineHeight: 1.15,
              color: i === 1 ? 'var(--caramello)' : 'var(--espresso)', textDecoration: 'none',
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
        <Spec style={{ color: 'var(--espresso-45)' }}>La Marsa, Tunis. Ouvert tous les jours.</Spec>
        <PrimaryCta size="md">Commander sur WhatsApp</PrimaryCta>
      </div>
    </div>
  );
}

/* ---------- Carte produit signature (double-bezel) ---------- */
function SignatureCard({ image, name, subtitle, desc, price, w, aspect = '4/3.4', horizontal = false, style }) {
  if (horizontal) {
    return (
      <article style={{
        width: w, background: 'var(--sabbia)', borderRadius: 'var(--radius-card)',
        border: '1px solid rgba(166,152,138,0.2)', padding: '8px', boxSizing: 'border-box',
        boxShadow: 'var(--shadow-md)', display: 'flex', gap: '4px', alignItems: 'stretch', ...style,
      }}>
        <div style={{ borderRadius: '16px', overflow: 'hidden', flex: '0 0 46%', background: 'var(--latte)', minHeight: '200px' }}>
          <img src={amSrc(image)} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px' }}>
            <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.55rem', lineHeight: 1.1, color: 'var(--espresso)' }}>
              {name}{subtitle && <em style={{ fontWeight: 500, fontSize: '1.15rem', color: 'var(--taupe)', marginLeft: '10px' }}>{subtitle}</em>}
            </h3>
            {price && <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', color: 'var(--espresso)', whiteSpace: 'nowrap' }}>{price}</span>}
          </div>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.55, color: 'var(--espresso-70)' }}>{desc}</p>
        </div>
      </article>
    );
  }
  return (
    <article style={{
      width: w, background: 'var(--sabbia)', borderRadius: 'var(--radius-card)',
      border: '1px solid rgba(166,152,138,0.2)', padding: '8px', boxSizing: 'border-box',
      boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', ...style,
    }}>
      <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: aspect, background: 'var(--latte)', flex: '1 0 auto' }}>
        <img src={amSrc(image)} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ padding: '20px 16px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px' }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.55rem', lineHeight: 1.1, color: 'var(--espresso)' }}>
            {name}{subtitle && <em style={{ fontWeight: 500, fontSize: '1.15rem', color: 'var(--taupe)', marginLeft: '10px' }}>{subtitle}</em>}
          </h3>
          {price && <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', color: 'var(--espresso)', whiteSpace: 'nowrap' }}>{price}</span>}
        </div>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.55, color: 'var(--espresso-70)' }}>{desc}</p>
      </div>
    </article>
  );
}

/* ---------- Ligne de menu (page carte) ---------- */
function MenuLine({ name, subtitle, desc, price }) {
  return (
    <div style={{ padding: '18px 0', borderBottom: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.35rem', lineHeight: 1.15, color: 'var(--espresso)', whiteSpace: 'nowrap' }}>
          {name}{subtitle && <em style={{ fontWeight: 500, fontSize: '1rem', color: 'var(--taupe)', marginLeft: '9px' }}>{subtitle}</em>}
        </span>
        <span aria-hidden="true" style={{ flex: 1, borderBottom: '2px dotted var(--taupe-40)', transform: 'translateY(-5px)', minWidth: '32px' }}></span>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '1.0625rem', color: 'var(--espresso)', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>{price}</span>
      </div>
      {desc && <p style={{ margin: '3px 0 0', fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.5, color: 'var(--espresso-45)', maxWidth: '52ch', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{desc}</p>}
    </div>
  );
}

/* ---------- Tableau horaires ---------- */
function HoursTable({ rows, w }) {
  return (
    <div style={{ width: w }}>
      {rows.map((r, i) => (
        <div key={r[0]} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '24px', padding: '15px 2px', borderTop: i === 0 ? 'none' : '1px solid var(--taupe-40)' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '15px', color: 'var(--espresso)' }}>{r[0]}</span>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '15px', color: r[1] === 'Fermé' ? 'var(--taupe)' : 'var(--espresso-70)', fontVariantNumeric: 'tabular-nums' }}>{r[1]}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- FAB WhatsApp ---------- */
function FabWhatsApp() {
  return (
    <a href={AM_WA_URL} target="_blank" rel="noopener" className="am-fab" style={{ width: '56px', height: '56px', borderRadius: '999px', background: 'var(--espresso)', color: 'var(--crema)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)', cursor: 'pointer', flex: '0 0 auto', textDecoration: 'none' }} aria-label="Commander sur WhatsApp">
      <WaGlyph size={24} />
    </a>
  );
}

/* ---------- Rangée d'états ---------- */
function StateRow({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
      {children}
      <Spec>{label}</Spec>
    </div>
  );
}

Object.assign(window, {
  amSrc, Frame, Spec, SpecTitle, WaGlyph, Wordmark,
  PrimaryCta, SecondaryPill, WaPill,
  NavPillDesktop, NavMobileClosed, NavMobileOverlay,
  SignatureCard, MenuLine, HoursTable, FabWhatsApp, StateRow,
});
