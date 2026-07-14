import { Nav, Icon, Photo } from "@/components";
import styles from "./Hero.module.css";

/**
 * Hero full-bleed (section 1) — porté de V2Hero (v2-sections-a.jsx).
 * Nav superposée à la photo, wordmark géant (h1), sous-texte et CTA
 * « Découvrir nos créations » (ancre #creations, navigation — pas d'intention
 * de commande). Scrim en dégradé sombre : seule exception dégradé du site.
 * data-hero pilote la visibilité du FAB (FabController).
 */
export function Hero() {
  return (
    <section className={styles.hero} data-hero>
      <Photo
        className={styles.photo}
        file="4L0A7834.webp"
        alt="Cône pistache, lumière naturelle"
        sizes="100vw"
        priority
      />
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.nav}>
        <div className={styles.navInner}>
          <Nav active={null} />
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.wordmark}>Amore Mio</h1>
        <span className={styles.tagline}>L&apos;Atelier De La Glace</span>
        <p className={styles.lead}>
          Chaque glace est fabriquée artisanalement dans notre atelier à partir
          d&apos;ingrédients soigneusement sélectionnés.
        </p>
        <a className={styles.cta} href="#creations">
          Découvrir nos créations
          <Icon name="arrow-down" size={16} />
        </a>
      </div>
    </section>
  );
}
