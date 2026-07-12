import { asset } from "@/lib/site";
import styles from "./HistMaison.module.css";

/**
 * HistMaison — bandeau photo pleine largeur (le comptoir de la boutique).
 * Porté depuis histoire-board.jsx (HistMaison).
 */
export function HistMaison() {
  return (
    <section className={styles.band}>
      <img
        className={styles.photo}
        src={asset("/photos/4L0A7778.webp")}
        alt="Au comptoir de la boutique"
        width={1440}
        height={520}
        loading="lazy"
      />
    </section>
  );
}
