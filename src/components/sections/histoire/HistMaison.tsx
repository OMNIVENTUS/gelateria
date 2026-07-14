import { Photo } from "@/components";
import styles from "./HistMaison.module.css";

/**
 * HistMaison — bandeau photo pleine largeur (le comptoir de la boutique).
 * Porté depuis histoire-board.jsx (HistMaison).
 */
export function HistMaison() {
  return (
    <section className={styles.band}>
      <Photo
        className={styles.photo}
        file="4L0A7778.webp"
        alt="Au comptoir de la boutique"
        sizes="100vw"
      />
    </section>
  );
}
