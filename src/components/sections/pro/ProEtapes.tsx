import { Reveal } from "@/components";
import { ProTitle } from "./ProTitle";
import styles from "./ProEtapes.module.css";

/**
 * ProEtapes — « Comment ça marche » : 3 étapes numérotées. Server Component.
 * Porté depuis standalone_export/planche/pro-board.jsx (ProEtapes).
 */
const STEPS: ReadonlyArray<readonly [string, string]> = [
  ["Brief", "Vous nous présentez votre projet et vos besoins."],
  [
    "Dégustation à l'atelier",
    "Vous goûtez et validez les parfums avec nous.",
  ],
  [
    "Proposition & livraison",
    "Nous confirmons les détails et livrons le jour J.",
  ],
];

export function ProEtapes() {
  return (
    <section className={styles.section}>
      <Reveal>
        <ProTitle center className={styles.title}>
          Comment ça marche
        </ProTitle>
        <div className={styles.grid}>
          {STEPS.map(([title, line], i) => (
            <div key={title} className={styles.step}>
              <span className={styles.num}>{i + 1}</span>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepText}>{line}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
