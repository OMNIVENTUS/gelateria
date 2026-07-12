import { asset } from "@/lib/site";
import { HistPlaceholder } from "./HistPlaceholder";
import styles from "./HistRecit.module.css";

/**
 * HistRecit — le récit : colonnes de mesure centrées, titres réels et corps
 * en placeholder (aucun texte inventé), avec la photo du mur de la boutique.
 * Porté depuis histoire-board.jsx (HistRecit).
 */
export function HistRecit() {
  return (
    <section className={styles.recit}>
      <div className={styles.col}>
        <h2 className={styles.title}>Les débuts</h2>
        <HistPlaceholder lines={6} />
      </div>

      <figure className={styles.figure}>
        <img
          className={styles.photo}
          src={asset("/photos/4L0A7910.webp")}
          alt="Le mur Notre histoire, dans la boutique"
          width={860}
          height={520}
          loading="lazy"
        />
        <figcaption className={styles.caption}>
          Le mur de la boutique, à La Marsa.
        </figcaption>
      </figure>

      <div className={styles.col}>
        <h2 className={styles.title}>L&apos;atelier aujourd&apos;hui</h2>
        <HistPlaceholder lines={5} />
      </div>
    </section>
  );
}
