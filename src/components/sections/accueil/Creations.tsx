import Link from "next/link";
import { SectionHeading, Icon } from "@/components";
import { asset } from "@/lib/site";
import styles from "./Creations.module.css";

/**
 * Nos créations (section 6) — porté de V2Creations.
 * Bento 5 cellules : cône signature en vedette (2 rangées en desktop,
 * pleine largeur en tablette), puis tiramisù / affogato / sorbet / pots.
 * id="creations" : cible du CTA hero et de la nav.
 */
type Cell = {
  file: string;
  name: string;
  sub?: string;
  pos: string;
  cellClass?: string;
};

const CELLS: readonly Cell[] = [
  {
    file: "4L0A7727.webp",
    name: "Cône signature",
    sub: "fatto a mano",
    pos: "50% 40%",
    cellClass: styles.cone,
  },
  { file: "IMG_9461.webp", name: "Tiramisù", pos: "50% 60%" },
  { file: "4L0A8296.webp", name: "Affogato", pos: "50% 55%" },
  {
    file: "4L0A8006-Edit.webp",
    name: "Sorbet plein fruit",
    pos: "50% 45%",
  },
  { file: "4L0A8245.webp", name: "Pots à partager", pos: "50% 50%" },
];

function BentoCell({ file, name, sub, pos, cellClass }: Cell) {
  return (
    <article className={`${styles.cell} ${cellClass ?? ""}`.trim()}>
      <div className={styles.imgWrap}>
        <img
          className={styles.img}
          src={asset(`/photos/${file}`)}
          alt={name}
          loading="lazy"
          style={{ objectPosition: pos }}
        />
      </div>
      <div className={styles.caption}>
        <h3 className={styles.name}>{name}</h3>
        {sub && <em className={styles.sub}>{sub}</em>}
      </div>
    </article>
  );
}

export function Creations() {
  const link = (
    <Link href="/carte" className={styles.link}>
      Toute la carte
      <Icon name="arrow-right" size={16} />
    </Link>
  );

  return (
    <section id="creations" className={styles.section}>
      <div className={styles.head}>
        <SectionHeading eyebrow="Du jour" title="Nos créations" />
        <div className={styles.linkTop}>{link}</div>
      </div>

      <div className={styles.grid}>
        {CELLS.map((c) => (
          <BentoCell key={c.file} {...c} />
        ))}
      </div>

      <div className={styles.linkBottom}>{link}</div>
    </section>
  );
}
