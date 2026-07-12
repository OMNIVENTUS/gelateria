import { PrimaryCta } from "@/components";
import { DashedNote } from "./DashedNote";
import styles from "./HistCloture.module.css";

/**
 * HistCloture — clôture centrée : titre, CTA WhatsApp unique et encart
 * « exemple » (adresse conservée, décision client). Marqué [data-fab-hide]
 * pour masquer le FAB sur le CTA final.
 * Porté depuis histoire-board.jsx (HistCloture).
 */
export function HistCloture() {
  return (
    <section className={styles.cloture} data-fab-hide>
      <h2 className={styles.title}>Venez goûter notre histoire.</h2>
      <PrimaryCta size="lg" />
      <DashedNote label="exemple" variant="note">
        <span className={styles.example}>
          12, rue de la Plage, La Marsa. Ouvert tous les jours.
        </span>
      </DashedNote>
    </section>
  );
}
