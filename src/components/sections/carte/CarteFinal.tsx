import { PrimaryCta } from "@/components";
import styles from "./CarteFinal.module.css";

/**
 * CTA final + rappel condensé — porté depuis carte-v2-sections.jsx (CarteV2Final).
 * Unique CTA d'intention : « Commander sur WhatsApp » (PrimaryCta size lg).
 * L'encart pointillé garde le marqueur « exemple » (adresse/horaires non confirmés
 * par le client, cf. CLAUDE.md §8). [data-fab-hide] : masque le FAB en bas de page.
 */
export function CarteFinal() {
  return (
    <div className={styles.final} data-fab-hide>
      <h2 className={styles.title}>
        Une envie <em className={styles.em}>subito</em> ?
      </h2>
      <PrimaryCta size="lg" />
      <div className={styles.example}>
        <span className={styles.exampleTag}>exemple</span>
        <span className={styles.exampleItem}>12, rue de la Plage, La Marsa</span>
        <span className={styles.exampleItem}>
          Ouvert tous les jours, 11h00 à 23h00
        </span>
      </div>
    </div>
  );
}
