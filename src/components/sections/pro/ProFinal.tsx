import { Icon, Reveal } from "@/components";
import { ProCta } from "./ProCta";
import styles from "./ProFinal.module.css";

/**
 * ProFinal — CTA final de la page Pro. id="contact-pro" (cible du CTA devis) et
 * data-fab-hide (masque le FAB WhatsApp à ce niveau). Server Component.
 * Porté depuis standalone_export/planche/pro-board.jsx (ProFinal).
 * L'encart « exemple » reste étiqueté tel quel : coordonnées à confirmer client.
 */
export function ProFinal() {
  return (
    <section id="contact-pro" data-fab-hide className={styles.section}>
      <Reveal className={styles.stack}>
        <h2 className={styles.title}>Parlons de votre projet.</h2>
        <ProCta size="lg" />
        <div className={styles.card}>
          <span className={styles.cardTag}>exemple</span>
          <span className={styles.contact}>
            <Icon name="phone" size={15} color="var(--taupe)" />
            +216 29 481 736
          </span>
          <span className={styles.contact}>
            <Icon name="envelope-simple" size={15} color="var(--taupe)" />
            pro@amoremio.tn
          </span>
        </div>
      </Reveal>
    </section>
  );
}
