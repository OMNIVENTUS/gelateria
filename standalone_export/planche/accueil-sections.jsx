/* Amore Mio — page d'accueil : sections (prop m = mobile 390) */
const { Button: DsButton } = window.AmoreMioDesignSystem_ca732e;
const PH = 'assets/photos/';

/* ---------- Helpers ---------- */
function AmSection({ bg = 'var(--crema)', m, pad, style, children }) {
  return <section style={{ background: bg, padding: pad != null ? pad : (m ? '64px 24px' : '112px 72px'), boxSizing: 'border-box', ...style }}>{children}</section>;
}
function AmH2({ m, style, children }) {
  return <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: m ? '2rem' : '2.5rem', lineHeight: 1.12, letterSpacing: '-0.01em', color: 'var(--espresso)', ...style }}>{children}</h2>;
}
function AmBody({ m, style, children }) {
  return <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: m ? '15px' : '16px', lineHeight: 1.6, color: 'var(--espresso-70)', ...style }}>{children}</p>;
}

/* ---------- 1. Hero ---------- */
function HeroHome({ m }) {
  const text = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: m ? '20px' : '28px', alignItems: 'flex-start' }}>
      <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: m ? '2.7rem' : '4.4rem', lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--espresso)', paddingBottom: '4px' }}>
        Gelato <em>artigianale</em>, fait maison chaque jour
      </h1>
      <AmBody m={m} style={{ maxWidth: '44ch', fontSize: m ? '16px' : '18px', color: 'var(--taupe)' }}>
        Crèmes glacées et sorbets plein fruit, élaborés dans notre atelier à partir d'ingrédients nobles.
      </AmBody>
      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
        <PrimaryCta size={m ? 'md' : 'lg'} />
        <SecondaryPill>Voir la carte</SecondaryPill>
      </div>
    </div>
  );
  const photo = (
    <div style={{ borderRadius: '16px', overflow: 'hidden', height: m ? '400px' : '100%', minHeight: m ? 0 : '620px' }}>
      <img src={amSrc(PH + '4L0A7834.jpg')} alt="Cône pistache et chocolat de l'atelier" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  );
  if (m) {
    return (
      <div style={{ position: 'relative', background: 'var(--crema)' }}>
        <div style={{ position: 'absolute', top: '14px', left: '14px', right: '14px', zIndex: 4 }}><NavMobileClosed /></div>
        <div style={{ padding: '104px 24px 40px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {text}
          {photo}
        </div>
      </div>
    );
  }
  return (
    <div style={{ position: 'relative', background: 'var(--crema)' }}>
      <div style={{ position: 'absolute', top: '24px', left: '72px', right: '72px', zIndex: 4 }}><NavPillDesktop /></div>
      <div style={{ display: 'grid', gridTemplateColumns: '55fr 45fr', gap: '48px', padding: '160px 72px 56px', minHeight: '900px', boxSizing: 'border-box', alignItems: 'center' }}>
        {text}
        {photo}
      </div>
    </div>
  );
}

/* ---------- 2. Marquee ---------- */
function MarqueeBand({ m }) {
  const words = ['Pistache', 'Cioccolato', 'Mangue', 'Fragola', 'Tiramisù', 'Caffè'];
  const run = words.map((w, i) => (
    <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: m ? '22px' : '40px', marginRight: m ? '22px' : '40px' }}>
      <span>{w}</span>
      <span aria-hidden="true" style={{ width: '5px', height: '5px', borderRadius: '999px', background: 'var(--caramello)' }}></span>
    </span>
  ));
  return (
    <div style={{ borderTop: '1px solid var(--caramello-line)', borderBottom: '1px solid var(--caramello-line)', padding: m ? '18px 0' : '26px 0', overflow: 'hidden', whiteSpace: 'nowrap', background: 'var(--crema)' }}>
      <div className="am-marquee" style={{ display: 'inline-flex', fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: m ? '15px' : '19px', color: 'var(--espresso)' }}>
        {run}{run}{run}
      </div>
    </div>
  );
}

/* ---------- 3. L'Atelier ---------- */
function AtelierSection({ m }) {
  const proofs = [
    ['leaf', 'Ingrédients nobles', 'Pistache de Bronte, noisettes du Piémont, fruits entiers de saison.'],
    ['storefront', 'Fabriqué sur place', 'Un seul petit atelier à La Marsa. Chaque bac est turbiné le matin même.'],
    ['book-open', 'Recettes italiennes', 'Des recettes de gelateria, sans colorant et sans arôme ajouté.'],
  ];
  return (
    <AmSection m={m}>
      <div style={{ position: 'relative' }}>
        <div style={{ borderRadius: '16px', overflow: 'hidden', height: m ? '300px' : '460px' }}>
          <img src={amSrc(PH + '4L0A8136-Edit.jpg')} alt="Texture caramel au plus près" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{
          position: 'relative', background: 'var(--crema)', borderRadius: 'var(--radius-card)',
          boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-faint)',
          margin: m ? '-56px 12px 0' : '-120px 72px 0', padding: m ? '28px 24px' : '48px 56px',
        }}>
          <AmH2 m={m}>100 % fait maison, 100 % chaque jour</AmH2>
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr 1fr', gap: m ? '22px' : '40px', marginTop: m ? '24px' : '36px' }}>
            {proofs.map(([icon, t, d]) => (
              <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
                <i className={'ph-light ph-' + icon} style={{ fontSize: '26px', color: 'var(--caramello)' }} aria-hidden="true"></i>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '16px', color: 'var(--espresso)' }}>{t}</span>
                <AmBody m={m} style={{ fontSize: '14px' }}>{d}</AmBody>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AmSection>
  );
}

/* ---------- 4. Les signatures (bento 5 cellules) ---------- */
const signatures = [
  { image: PH + '4L0A7727.jpg', name: 'Pistache', subtitle: 'di Bronte', desc: 'Pistaches siciliennes torréfiées, broyées à l\u2019atelier le matin même.', price: '8 DT' },
  { image: PH + 'IMG_9461.jpg', name: 'Tiramisù', desc: 'Mascarpone, café serré, cacao amer.', price: '7,5 DT' },
  { image: PH + '4L0A8296.jpg', name: 'Affogato', subtitle: 'al caffè', desc: 'Fior di latte noyé sous un espresso serré.', price: '9 DT' },
  { image: PH + '4L0A8006-Edit.jpg', name: 'Sorbet fraise', desc: 'Fruits entiers, sans colorant.', price: '6,5 DT' },
  { image: PH + '4L0A8245.jpg', name: 'Les pots', subtitle: 'da portare via', desc: 'Deux parfums au choix, à partager à la maison.', price: '18 DT' },
];
function SignaturesSection({ m }) {
  const [big, b, c, d, wide] = signatures;
  return (
    <AmSection m={m} bg="var(--sabbia)">
      <div style={{ display: 'flex', alignItems: m ? 'flex-start' : 'flex-end', justifyContent: 'space-between', flexDirection: m ? 'column' : 'row', gap: '18px', marginBottom: m ? '28px' : '44px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <AmH2 m={m}>Les signatures de <em>l'atelier</em></AmH2>
          <AmBody m={m} style={{ maxWidth: '48ch' }}>Cinq parfums qui ne quittent jamais la vitrine. Le reste change avec les saisons.</AmBody>
        </div>
        <DsButton variant="ghost" icon="arrow-right" href="#carte">Toute la carte</DsButton>
      </div>
      {m ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {signatures.map((s) => <SignatureCard key={s.name} w="100%" {...s} aspect="4/3" />)}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: '300px 300px 320px', gap: '24px' }}>
          <SignatureCard w="100%" {...big} style={{ gridColumn: '1 / 8', gridRow: '1 / 3' }} />
          <SignatureCard w="100%" {...b} style={{ gridColumn: '8 / 13', gridRow: '1 / 2' }} />
          <SignatureCard w="100%" {...c} style={{ gridColumn: '8 / 13', gridRow: '2 / 3' }} />
          <SignatureCard w="100%" {...d} style={{ gridColumn: '1 / 6', gridRow: '3 / 4' }} />
          <SignatureCard w="100%" {...wide} horizontal style={{ gridColumn: '6 / 13', gridRow: '3 / 4' }} />
        </div>
      )}
    </AmSection>
  );
}

/* ---------- 5. Galerie ---------- */
function GalerieSection({ m }) {
  const shots = [
    ['4L0A7648.jpg', 'Cône à la main devant la vitrine'],
    ['cone-neon.jpg', 'Cône sous l\u2019enseigne'],
    ['choco-pistache-macro.jpg', 'Chocolat pistache au plus près'],
    ['4L0A7847.jpg', 'Service au comptoir'],
    ['scoop-cup-logo.jpg', 'Coupe et boule signature'],
    ['storefront-lifestyle.jpg', 'Devant la boutique'],
  ];
  return (
    <AmSection m={m} pad={m ? '64px 0' : '112px 0'}>
      <AmH2 m={m} style={{ padding: m ? '0 24px' : '0 72px' }}>L'atelier en images</AmH2>
      <div style={{ display: 'flex', gap: m ? '14px' : '24px', overflowX: 'auto', scrollSnapType: 'x mandatory', padding: m ? '28px 24px 8px' : '44px 72px 8px', scrollbarWidth: 'thin' }}>
        {shots.map(([f, alt]) => (
          <div key={f} style={{ flex: '0 0 auto', width: m ? '260px' : '380px', aspectRatio: '4/5', borderRadius: '16px', overflow: 'hidden', scrollSnapAlign: 'start' }}>
            <img src={amSrc(PH + f)} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        ))}
      </div>
    </AmSection>
  );
}

/* ---------- 6. À emporter ---------- */
function EmporterSection({ m }) {
  const photo = (
    <div style={{ borderRadius: '16px', overflow: 'hidden', height: m ? '320px' : '520px' }}>
      <img src={amSrc(PH + '4L0A8414.jpg')} alt="Bacs à emporter, deux parfums" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  );
  const text = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: m ? '18px' : '24px', alignItems: 'flex-start', justifyContent: 'center' }}>
      <AmH2 m={m}>La glace à la maison</AmH2>
      <AmBody m={m} style={{ maxWidth: '46ch' }}>
        Nos pots à emporter se remplissent minute, deux parfums au choix. Commandez, nous préparons, vous passez, <em style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>subito</em>.
      </AmBody>
      <PrimaryCta size="md" />
    </div>
  );
  return (
    <AmSection m={m} bg="var(--sabbia)">
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '45fr 55fr', gap: m ? '28px' : '72px', alignItems: 'center' }}>
        {photo}
        {text}
      </div>
    </AmSection>
  );
}

/* ---------- 7. Nous trouver ---------- */
function TrouverSection({ m }) {
  const hours = [
    ['Lundi à jeudi', '11h00 à 22h00'],
    ['Vendredi', '14h00 à 23h00'],
    ['Samedi', '11h00 à 23h00'],
    ['Dimanche', '11h00 à 22h00'],
  ];
  const infoRow = (icon, content) => (
    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
      <i className={'ph-light ph-' + icon} style={{ fontSize: '22px', color: 'var(--caramello)', marginTop: '1px' }} aria-hidden="true"></i>
      <AmBody m={m} style={{ color: 'var(--espresso)' }}>{content}</AmBody>
    </div>
  );
  return (
    <AmSection m={m}>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? '36px' : '80px', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: m ? '22px' : '28px' }}>
          <AmH2 m={m}>Nous trouver</AmH2>
          {infoRow('map-pin', 'Avenue Habib Bourguiba, La Marsa, Tunis')}
          {infoRow('phone', '+216 29 481 736')}
          {infoRow('instagram-logo', '@amoremio.gelateria')}
          <div>
            <div style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--taupe)', marginBottom: '8px' }}>Horaires</div>
            <HoursTable w="100%" rows={hours} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: m ? '220px' : '280px', background: 'var(--sabbia)', border: '1px solid var(--border-faint)' }}>
            <span style={{ position: 'absolute', left: 0, right: 0, top: '38%', height: '3px', background: 'var(--taupe-40)', transform: 'rotate(-4deg)' }}></span>
            <span style={{ position: 'absolute', left: 0, right: 0, top: '68%', height: '2px', background: 'var(--taupe-40)', transform: 'rotate(3deg)' }}></span>
            <span style={{ position: 'absolute', top: 0, bottom: 0, left: '30%', width: '2px', background: 'var(--taupe-40)', transform: 'rotate(6deg)' }}></span>
            <span style={{ position: 'absolute', top: 0, bottom: 0, left: '72%', width: '3px', background: 'var(--taupe-40)', transform: 'rotate(-5deg)' }}></span>
            <span style={{ position: 'absolute', left: '46%', top: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <i className="ph-light ph-map-pin" style={{ fontSize: '34px', color: 'var(--caramello)' }} aria-hidden="true"></i>
              <span style={{ fontFamily: 'var(--font-label)', textTransform: 'uppercase', letterSpacing: '0.13em', fontSize: '11px', color: 'var(--espresso)', background: 'var(--crema)', padding: '5px 12px', borderRadius: '999px', border: '1px solid var(--caramello-line)' }}>La Marsa</span>
            </span>
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: m ? '220px' : '280px' }}>
            <img src={amSrc(PH + '4L0A7979.jpg')} alt="Façade de la boutique Amore Mio" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>
    </AmSection>
  );
}

/* ---------- 8. Footer ---------- */
function FooterHome({ m }) {
  const link = { fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(246,241,232,0.75)', textDecoration: 'none' };
  return (
    <footer style={{ background: 'var(--espresso)', padding: m ? '48px 24px 32px' : '72px 72px 40px', boxSizing: 'border-box' }}>
      <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr auto', gap: m ? '32px' : '48px', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.15em', fontSize: '19px', color: 'var(--crema)', textTransform: 'uppercase' }}>Amore Mio</span>
          <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500, fontSize: '16px', color: 'rgba(246,241,232,0.65)' }}>L'Atelier De La Glace</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', alignItems: m ? 'flex-start' : 'flex-end' }}>
          <nav style={{ display: 'flex', gap: '26px', flexWrap: 'wrap' }}>
            <a href="#atelier" style={link}>L'atelier</a>
            <a href="#carte" style={link}>La carte</a>
            <a href="#trouver" style={link}>Nous trouver</a>
          </nav>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['instagram-logo', 'facebook-logo', 'tiktok-logo'].map((ic) => (
              <a key={ic} href="#" aria-label={ic} style={{ width: '40px', height: '40px', borderRadius: '999px', border: '1px solid rgba(246,241,232,0.3)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--crema)' }}>
                <i className={'ph-light ph-' + ic} style={{ fontSize: '19px' }} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(246,241,232,0.18)', marginTop: m ? '32px' : '44px', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '12.5px', color: 'rgba(246,241,232,0.5)' }}>2026 Amore Mio, La Marsa. Tous droits réservés.</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '12.5px', color: 'rgba(246,241,232,0.5)' }}>Mentions légales</span>
      </div>
    </footer>
  );
}

Object.assign(window, { HeroHome, MarqueeBand, AtelierSection, SignaturesSection, GalerieSection, EmporterSection, TrouverSection, FooterHome });
