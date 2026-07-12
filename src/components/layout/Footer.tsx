import Link from "next/link";
import { Icon } from "../ui/Icon";
import { PrimaryCta } from "./PrimaryCta";
import { NAV_LINKS } from "./nav-links";
import styles from "./Footer.module.css";

/**
 * Footer Espresso — seule surface sombre autorisée (canon DS).
 * Porté depuis v2-sections-b (V2Footer).
 */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <span className={styles.brandName}>Amore Mio</span>
          <span className={styles.brandTag}>L&apos;Atelier De La Glace</span>
          <p className={styles.brandDesc}>
            Glaces et sorbets faits maison chaque jour, à La Marsa.
          </p>
        </div>
        <nav className={styles.nav} aria-label="Pied de page">
          {NAV_LINKS.map(([key, label, href]) => (
            <Link key={key} href={href} className={styles.link}>
              {label}
            </Link>
          ))}
        </nav>
        <div className={styles.social}>
          <div className={styles.socialRow}>
            <Icon name="instagram-logo" size={22} />
            <Icon name="facebook-logo" size={22} />
            <Icon name="tiktok-logo" size={22} />
          </div>
          <PrimaryCta size="md" />
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.copy}>
          Amore Mio, La Marsa. Tous droits réservés.
        </span>
        <span className={styles.motto}>fatto a mano, ogni giorno</span>
      </div>
    </footer>
  );
}
