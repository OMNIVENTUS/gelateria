import { Photo } from "@/components";
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
        <Photo
          className={styles.photo}
          file="4L0A7910.webp"
          alt="Le mur Notre histoire, dans la boutique"
          sizes="(min-width: 1024px) 680px, 100vw"
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
