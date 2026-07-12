import { asset } from "@/lib/site";
import { ProCta } from "./ProCta";
import styles from "./ProHero.module.css";

/**
 * ProHero — Hero split de la page Professionnels (data-hero pour le FAB).
 * Server Component. Porté depuis standalone_export/planche/pro-board.jsx (ProHero).
 * Le conteneur de nav (.nav) est rendu par la page dans un <header> hors <main>.
 */
export function ProHero() {
  return (
    <section data-hero className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h1 className={styles.title}>Amore Mio pour les professionnels</h1>
          <p className={styles.lead}>
            Desserts glacés artisanaux pour vos événements, votre carte ou votre
            établissement.
          </p>
          <div className={styles.ctaRow}>
            <ProCta />
          </div>
        </div>
        <img
          className={styles.media}
          src={asset("/photos/4L0A8422.webp")}
          alt="Préparation d'un bac dans la vitrine"
          width={1120}
          height={1120}
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}
