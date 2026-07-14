import { FlavorCard, Photo } from "@/components";
import styles from "./CarteGroups.module.css";

/**
 * Corps de la carte — porté depuis carte-v2-sections.jsx (CarteV2Groups,
 * CarteV2Group, CarteV2Band, CarteV2Line). Groupes et prix EXACTS de la planche.
 * Mise en page en 2 colonnes (CSS columns, break-inside:avoid par groupe),
 * 1 colonne en mobile. Bandeaux photo 21:9, radius image.
 * Les lignes de prix réutilisent <FlavorCard layout="row"> (nom Cormorant +
 * pointillés taupe-40 + prix Satoshi 500 tabular-nums, aligné à droite).
 */
type Band = { src: string; alt: string; pos?: string };
type Line = { name: string; sub?: string; desc?: string; price: string };
type Group = { title: string; note?: string; bands?: Band[]; lines: Line[] };

const GROUPS: Group[] = [
  {
    title: "Crèmes glacées & sorbets",
    note: "parfums du jour",
    bands: [
      {
        src: "/photos/4L0A8201.webp",
        alt: "Crème glacée servie au pot",
        pos: "50% 42%",
      },
      {
        src: "/photos/4L0A8006-Edit.webp",
        alt: "Sorbet plein fruit",
        pos: "50% 45%",
      },
    ],
    lines: [
      { name: "Classique", price: "5,2 DT" },
      { name: "Moyen", price: "7,8 DT" },
      { name: "Grand", price: "9,5 DT" },
    ],
  },
  {
    title: "À emporter",
    lines: [
      { name: "Demi-litre", price: "25 DT" },
      { name: "1 litre", price: "39,5 DT" },
      { name: "Pot Signature", price: "29 DT" },
    ],
  },
  {
    title: "Sundae",
    lines: [
      { name: "Moyen", price: "5 DT" },
      { name: "XL", price: "8 DT" },
    ],
  },
  {
    title: "Eskimos",
    lines: [
      { name: "Nature ou fruit", price: "5 DT" },
      { name: "Gourmand", price: "7 DT" },
    ],
  },
  {
    title: "Douceurs maison",
    bands: [
      { src: "/photos/IMG_9461.webp", alt: "Tiramisù maison", pos: "50% 55%" },
    ],
    lines: [
      { name: "Cookie", price: "7,9 DT" },
      { name: "Brownie", price: "7,8 DT" },
      { name: "Brookie", price: "8 DT" },
      { name: "Tiramisù", price: "10 – 13 DT" },
      { name: "Gaufre", price: "7 DT" },
    ],
  },
  {
    title: "Duo Amore",
    lines: [{ name: "Sundae + cookie ou brownie", price: "11 DT" }],
  },
  {
    title: "Toppings",
    note: "coulis, croquants, fruits secs, chantilly",
    lines: [
      { name: "1 topping", price: "2,9 DT" },
      { name: "2 toppings", price: "4,9 DT" },
      { name: "3 toppings", price: "5,9 DT" },
    ],
  },
  {
    title: "Desserts signature",
    note: "sur commande",
    lines: [
      { name: "Vacherin", price: "65 – 89 DT" },
      { name: "Omelette norvégienne", price: "65 – 89 DT" },
      { name: "Bombe glacée", price: "65 DT" },
    ],
  },
  {
    title: "Boissons",
    bands: [
      { src: "/photos/4L0A8296.webp", alt: "Affogato", pos: "50% 55%" },
    ],
    lines: [
      { name: "Milkshake", sub: "parfum au choix", price: "11 DT" },
      { name: "Frappuccino", price: "11 DT" },
      { name: "Ice Spanish Latte", price: "12 DT" },
      { name: "Affogato", price: "9,5 DT" },
    ],
  },
];

function Bands({ bands }: { bands: Band[] }) {
  const [b] = bands;
  if (bands.length === 1 && b) {
    return (
      <div className={styles.band}>
        <Photo
          file={b.src}
          alt={b.alt}
          sizes="(min-width: 640px) 46vw, 100vw"
          className={styles.bandImg}
          objectPosition={b.pos ?? "50% 50%"}
        />
      </div>
    );
  }
  return (
    <div className={styles.bandDuo}>
      {bands.map((b) => (
        <div key={b.src} className={styles.band}>
          <Photo
            file={b.src}
            alt={b.alt}
            sizes="(min-width: 640px) 23vw, 100vw"
            className={styles.bandImg}
            objectPosition={b.pos ?? "50% 50%"}
          />
        </div>
      ))}
    </div>
  );
}

export function CarteGroups() {
  return (
    <div className={styles.wrap}>
      <div className={styles.columns}>
        {GROUPS.map((g) => (
          <section key={g.title} className={styles.group}>
            {g.bands && <Bands bands={g.bands} />}
            <div className={styles.groupHead}>
              <h2 className={styles.groupTitle}>{g.title}</h2>
              {g.note && <span className={styles.groupNote}>{g.note}</span>}
            </div>
            <div>
              {g.lines.map((l) => (
                <FlavorCard
                  key={l.name}
                  layout="row"
                  name={l.name}
                  subtitle={l.sub}
                  description={l.desc}
                  price={l.price}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
