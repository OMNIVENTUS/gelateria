import { Nav } from "@/components";
import styles from "./HistHero.module.css";

/**
 * HistHero — hero éditorial court et centré de la page « Notre histoire ».
 * Nav posé en haut sur fond clair (crema). Marqué [data-hero] pour le FAB.
 * Porté depuis histoire-board.jsx (HistHero).
 */
export function HistHero() {
  return (
    <section className={styles.hero} data-hero>
      <div className={styles.navWrap}>
        <Nav active="histoire" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Notre histoire</h1>
        <p className={styles.lead}>
          Un atelier né d&apos;une conviction : la glace mérite le même soin
          qu&apos;une grande pâtisserie.
        </p>
      </div>
    </section>
  );
}
