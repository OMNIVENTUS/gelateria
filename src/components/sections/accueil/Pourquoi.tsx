import { SectionHeading, Icon, type IconName } from "@/components";
import styles from "./Pourquoi.module.css";

/**
 * Pourquoi Amore Mio (section 7) — porté de V2Pourquoi.
 * 4 blocs séparés par des filets taupe : 4 colonnes (d), 2 (t), 1 (m).
 */
const ITEMS: ReadonlyArray<readonly [IconName, string, string]> = [
  [
    "heart",
    "100 % artisanal",
    "Tout est fait dans notre atelier, sans base ni préparation industrielle.",
  ],
  [
    "leaf",
    "Ingrédients rigoureusement sélectionnés",
    "Chaque matière première est choisie pour son origine et sa justesse.",
  ],
  [
    "clock",
    "Fabrication quotidienne",
    "Les bacs sont turbinés le matin même, rien n'attend au congélateur.",
  ],
  [
    "ice-cream",
    "Recettes maison",
    "Des recettes élaborées sur place, ajustées saison après saison.",
  ],
];

export function Pourquoi() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <SectionHeading title="Pourquoi Amore Mio" align="center" />
      </div>
      <div className={styles.grid}>
        {ITEMS.map(([icon, title, line]) => (
          <div key={title} className={styles.item}>
            <Icon name={icon} size={30} color="var(--espresso)" />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.line}>{line}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
