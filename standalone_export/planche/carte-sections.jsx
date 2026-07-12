/* Amore Mio — page "La carte" : sections (prop m = mobile 390) */
const CPH = 'assets/photos/';

/* ---------- Données factices, remplaçables ---------- */
const carteGroups = [
  {
    id: 'cremes', title: 'Crèmes glacées', banner: CPH + 'tub-two-tone.jpg', bannerAlt: 'Bacs en vitrine',
    items: [
      { name: 'Pistache', subtitle: 'di Bronte', desc: 'Pistaches siciliennes torréfiées, broyées à l\u2019atelier', price: '8 DT' },
      { name: 'Fior di latte', desc: 'Lait frais entier, rien d\u2019autre', price: '6 DT' },
      { name: 'Cioccolato fondente', desc: 'Chocolat noir 70 %, texture dense', price: '7 DT' },
      { name: 'Nocciola', subtitle: 'del Piemonte', desc: 'Noisettes du Piémont torréfiées lentement', price: '7,5 DT' },
      { name: 'Caffè', desc: 'Espresso serré infusé dans la crème', price: '6,5 DT' },
      { name: 'Stracciatella', desc: 'Fior di latte, éclats de chocolat croquant', price: '7 DT' },
      { name: 'Caramel beurre salé', desc: 'Caramel cuit à l\u2019atelier, pointe de fleur de sel', price: '7 DT' },
      { name: 'Vanille', subtitle: 'del Madagascar', desc: 'Gousses infusées, grains visibles', price: '7 DT' },
    ],
  },
  {
    id: 'sorbets', title: 'Sorbets plein fruit', banner: CPH + '4L0A8006-Edit.jpg', bannerAlt: 'Sorbet rouge en cône',
    items: [
      { name: 'Fraise', desc: 'Fruits entiers de saison, sans colorant', price: '6,5 DT' },
      { name: 'Mangue', desc: 'Mangue mûre mixée minute', price: '7 DT' },
      { name: 'Citron', subtitle: 'di Sicilia', desc: 'Citrons pressés du jour, très frais', price: '6,5 DT' },
      { name: 'Framboise', desc: 'Plein fruit, légèrement acidulé', price: '7 DT' },
      { name: 'Fruit de la passion', desc: 'Pulpe fraîche, graines croquantes', price: '7 DT' },
      { name: 'Pêche blanche', desc: 'Selon arrivage, en saison seulement', price: '6,5 DT' },
    ],
  },
  {
    id: 'coupes', title: 'Les coupes', banner: CPH + '4L0A8296.jpg', bannerAlt: 'Affogato servi au comptoir',
    items: [
      { name: 'Coupe deux boules', desc: 'Deux parfums au choix, chantilly maison', price: '9 DT' },
      { name: 'Coupe trois boules', desc: 'Trois parfums au choix, chantilly maison', price: '12 DT' },
      { name: 'Affogato', subtitle: 'al caffè', desc: 'Fior di latte noyé sous un espresso serré', price: '9 DT' },
      { name: 'Banana split', desc: 'Banane, trois boules, chocolat chaud', price: '14 DT' },
      { name: 'Coupe dell\u2019amore', desc: 'Pour deux, quatre boules et fruits frais', price: '18 DT' },
    ],
  },
  {
    id: 'tiramisu', title: 'Tiramisù', banner: CPH + 'IMG_9461.jpg', bannerAlt: 'Tiramisù de l\u2019atelier',
    items: [
      { name: 'Tiramisù classique', desc: 'Mascarpone, café serré, cacao amer', price: '7,5 DT' },
      { name: 'Tiramisù pistache', desc: 'Crème de pistache di Bronte', price: '8,5 DT' },
      { name: 'Tiramisù fraise', desc: 'Fraises fraîches, mascarpone léger', price: '8 DT' },
      { name: 'Tiramisù à partager', desc: 'Format quatre personnes, sur commande', price: '26 DT' },
    ],
  },
  {
    id: 'emporter', title: 'À emporter', banner: CPH + '4L0A8414.jpg', bannerAlt: 'Bac à emporter deux parfums',
    items: [
      { name: 'Pot 500 ml', desc: 'Deux parfums au choix, rempli minute', price: '18 DT' },
      { name: 'Pot 1 L', desc: 'Trois parfums au choix, rempli minute', price: '32 DT' },
      { name: 'Boîte de six cônes', desc: 'Cônes croustillants roulés à l\u2019atelier', price: '4,5 DT' },
      { name: 'Tiramisù à emporter', desc: 'En pot individuel, à garder au frais', price: '8 DT' },
      { name: 'Vacherin glacé', desc: 'Sur commande, 48 h à l\u2019avance', price: '45 DT' },
    ],
  },
];

/* ---------- En-tête court ---------- */
function CarteHeader({ m }) {
  return (
    <div style={{ position: 'relative', background: 'var(--crema)' }}>
      <div style={{ position: 'absolute', top: m ? '14px' : '24px', left: m ? '14px' : '72px', right: m ? '14px' : '72px', zIndex: 4 }}>
        {m ? <NavMobileClosed /> : <NavPillDesktop />}
      </div>
      <div style={{ padding: m ? '116px 24px 8px' : '176px 72px 16px', display: 'flex', flexDirection: 'column', gap: m ? '12px' : '18px' }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: m ? '3rem' : '4.2rem', lineHeight: 1.06, letterSpacing: '-0.01em', color: 'var(--espresso)' }}>La carte</h1>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: m ? '15px' : '18px', lineHeight: 1.6, color: 'var(--taupe)', maxWidth: '46ch' }}>
          Nos parfums changent au fil des saisons et des arrivages.
        </p>
      </div>
    </div>
  );
}

/* ---------- Groupe de carte ---------- */
function MenuGroup({ group, m }) {
  return (
    <div style={{ breakInside: 'avoid' }}>
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: m ? '1.8rem' : '2.1rem', lineHeight: 1.12, color: 'var(--espresso)' }}>{group.title}</h2>
      {group.banner && (
        <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '21/9', marginTop: m ? '14px' : '18px' }}>
          <img src={amSrc(group.banner)} alt={group.bannerAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      )}
      <div style={{ marginTop: m ? '6px' : '8px' }}>
        {group.items.map((it) => <MenuLine key={it.name} {...it} />)}
      </div>
    </div>
  );
}

/* ---------- Corps : masonry léger 2 colonnes / 1 colonne ---------- */
function CarteBody({ m }) {
  if (m) {
    return (
      <div style={{ padding: '40px 24px 64px', display: 'flex', flexDirection: 'column', gap: '52px' }}>
        {carteGroups.map((g) => <MenuGroup key={g.id} group={g} m />)}
      </div>
    );
  }
  const col1 = [carteGroups[0], carteGroups[3]];
  const col2 = [carteGroups[1], carteGroups[2], carteGroups[4]];
  return (
    <div style={{ padding: '56px 72px 96px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 80px', alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '72px' }}>
        {col1.map((g) => <MenuGroup key={g.id} group={g} />)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '72px', marginTop: '96px' }}>
        {col2.map((g) => <MenuGroup key={g.id} group={g} />)}
      </div>
    </div>
  );
}

/* ---------- Encart Instagram ---------- */
function InstaCallout({ m }) {
  return (
    <div style={{ padding: m ? '0 24px 64px' : '0 72px 96px' }}>
      <div style={{
        background: 'var(--sabbia)', borderRadius: 'var(--radius-card)', border: '1px solid rgba(166,152,138,0.2)',
        padding: m ? '26px 24px' : '36px 48px', display: 'flex', alignItems: m ? 'flex-start' : 'center',
        justifyContent: 'space-between', gap: '20px', flexDirection: m ? 'column' : 'row',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <i className="ph-light ph-instagram-logo" style={{ fontSize: '28px', color: 'var(--caramello)' }} aria-hidden="true"></i>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: m ? '1.3rem' : '1.6rem', lineHeight: 1.2, color: 'var(--espresso)' }}>
            Les parfums <em>del giorno</em> sont sur notre Instagram
          </span>
        </div>
        <a href="#" style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '15px', color: 'var(--caramello)', textDecoration: 'none', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          @amoremio.gelateria
          <i className="ph-light ph-arrow-right" style={{ fontSize: '16px' }} aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

/* ---------- CTA final ---------- */
function CarteCta({ m }) {
  return (
    <div style={{ background: 'var(--crema)', padding: m ? '0 24px 72px' : '0 72px 112px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: m ? '18px' : '24px', textAlign: 'center' }}>
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: m ? '2rem' : '2.5rem', lineHeight: 1.12, color: 'var(--espresso)', maxWidth: '24ch' }}>
        Choisissez vos parfums, nous préparons <em>subito</em>
      </h2>
      <PrimaryCta size={m ? 'md' : 'lg'} />
      <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: m ? '13px' : '14px', lineHeight: 1.6, color: 'var(--espresso-45)' }}>
        Avenue Habib Bourguiba, La Marsa · ouvert tous les jours, de 11h00 à 23h00
      </p>
    </div>
  );
}

Object.assign(window, { CarteHeader, CarteBody, InstaCallout, CarteCta });
