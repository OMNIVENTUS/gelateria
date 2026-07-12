import { SectionHeading } from "@/components";
import { asset } from "@/lib/site";
import styles from "./Atelier.module.css";

/**
 * L'atelier (section 4) — porté de V2Atelier.
 * Galerie scroll-snap horizontale (4 photos), débordant sous la gouttière.
 * id="atelier" : cible de la navigation.
 */
const SHOTS: ReadonlyArray<readonly [string, string]> = [
  ["4L0A7778.webp", "Au comptoir, un cône chocolat noisette"],
  ["4L0A7910.webp", "Le mur « Notre histoire » de la boutique"],
  ["4L0A8201.webp", "Service au pot, direct du bac"],
  ["4L0A8078.webp", "Pot à emporter, éclats de pistache"],
];

export function Atelier() {
  return (
    <section id="atelier" className={styles.section}>
      <div className={styles.head}>
        <SectionHeading title="L'atelier" />
      </div>
      <div className={styles.scroller}>
        {SHOTS.map(([file, alt]) => (
          <figure key={file} className={styles.figure}>
            <img
              className={styles.photo}
              src={asset(`/photos/${file}`)}
              alt={alt}
              loading="lazy"
            />
          </figure>
        ))}
        <span aria-hidden="true" className={styles.tail} />
      </div>
    </section>
  );
}
