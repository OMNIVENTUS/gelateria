/* Amore Mio — site v2 complet, une seule page responsive.
   Routes hash : #/ (accueil) · #/carte · #/histoire · #/professionnels
   Ancres accueil : #/accueil?a=creations · #/accueil?a=atelier
   Breakpoints réels : ≥1024 = 'd', ≥640 = 't', sinon 'm'. */

window.AM_NAV_HREFS = {
  creations: '#/accueil?a=creations',
  atelier: '#/accueil?a=atelier',
  histoire: '#/histoire',
  pro: '#/professionnels',
  menu: '#/carte',
};

function useAmBreakpoint() {
  const get = () => (window.innerWidth >= 1024 ? 'd' : window.innerWidth >= 640 ? 't' : 'm');
  const [bp, setBp] = React.useState(get);
  React.useEffect(() => {
    const onResize = () => setBp(get());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return bp;
}

function amParseRoute() {
  const h = window.location.hash.replace(/^#\/?/, '');
  const [rawPath, query] = h.split('?');
  const path = rawPath === '' || rawPath === 'accueil' ? 'accueil' : rawPath;
  let anchor = null;
  if (query) {
    const m = query.match(/(?:^|&)a=([\w-]+)/);
    if (m) anchor = m[1];
  }
  return { page: path, anchor };
}

const AM_ROUTE_ACTIVE = { carte: 'menu', histoire: 'histoire', professionnels: 'pro' };

function SiteApp() {
  const bp = useAmBreakpoint();
  const [route, setRoute] = React.useState(amParseRoute);
  React.useEffect(() => {
    const onHash = () => setRoute(amParseRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  React.useEffect(() => {
    if (route.anchor) {
      const el = document.getElementById(route.anchor);
      if (el) {
        window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 24);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [route]);

  const Page = {
    accueil: V2Page,
    carte: CarteV2Page,
    histoire: HistPage,
    professionnels: ProPage,
  }[route.page] || V2Page;

  return (
    <div data-screen-label={`Page ${route.page}`} style={{ position: 'relative', minHeight: '100vh', background: 'var(--crema)' }}>
      <Page bp={bp} />
      {bp === 'm' && (
        <div style={{ position: 'fixed', right: '16px', bottom: '20px', zIndex: 40 }}>
          <FabWhatsApp />
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SiteApp />);
