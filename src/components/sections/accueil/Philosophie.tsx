import styles from "./Philosophie.module.css";

/**
 * Notre philosophie (section 3) — porté de V2Philosophie.
 * Grande phrase manifeste centrée, Cormorant display.
 */
export function Philosophie() {
  return (
    <section className={styles.section}>
      <p className={styles.statement}>
        Chez Amore Mio, une grande glace commence toujours par un grand produit.
        Des ingrédients soigneusement sélectionnés, un vrai savoir-faire
        artisanal, chaque jour.
      </p>
    </section>
  );
}
