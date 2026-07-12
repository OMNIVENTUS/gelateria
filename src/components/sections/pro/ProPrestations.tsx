import { Icon, Reveal, type IconName } from "@/components";
import { ProTitle } from "./ProTitle";
import styles from "./ProPrestations.module.css";

/**
 * ProPrestations — « Nos prestations » : 4 blocs (icône Phosphor Light + titre
 * + ligne), séparateurs hairline, fond sabbia. Server Component.
 * Porté depuis standalone_export/planche/pro-board.jsx (ProPrestations).
 */
const ITEMS: ReadonlyArray<readonly [IconName, string, string]> = [
  [
    "heart",
    "Mariages & réceptions",
    "Des desserts glacés à la hauteur d'un jour important.",
  ],
  [
    "fork-knife",
    "Hôtels & restaurants",
    "Une carte glacée fiable, livrée selon vos besoins.",
  ],
  [
    "buildings",
    "Événements corporate",
    "Une touche gourmande et soignée pour vos événements d'entreprise.",
  ],
  [
    "ice-cream",
    "Desserts signature sur mesure",
    "Une création pensée avec vous, pour votre carte ou votre événement.",
  ],
];

export function ProPrestations() {
  return (
    <section className={styles.section}>
      <Reveal>
        <ProTitle className={styles.title}>Nos prestations</ProTitle>
        <div className={styles.grid}>
          {ITEMS.map(([icon, title, line]) => (
            <div key={title} className={styles.cell}>
              <Icon name={icon} size={30} color="var(--espresso)" />
              <h3 className={styles.cellTitle}>{title}</h3>
              <p className={styles.cellText}>{line}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
