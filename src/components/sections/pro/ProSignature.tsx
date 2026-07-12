import { asset } from "@/lib/site";
import { Reveal } from "@/components";
import { ProTitle } from "./ProTitle";
import styles from "./ProSignature.module.css";

/**
 * ProSignature — « Les desserts signature » : 3 cellules typographiques
 * (nom en Cormorant italique + « Sur devis ») et bandeau photo pleine largeur.
 * Server Component. Porté depuis pro-board.jsx (ProSignature / ProSignatureCell).
 */
const CARDS: ReadonlyArray<readonly [string, string]> = [
  [
    "Vacherin",
    "Meringue croustillante, glace et crème fouettée, en pièce entière.",
  ],
  [
    "Omelette norvégienne",
    "Génoise, glace et meringue flambée à la minute.",
  ],
  [
    "Bombe glacée",
    "Plusieurs parfums superposés, démoulés en pièce unique.",
  ],
];

export function ProSignature() {
  return (
    <section className={styles.section}>
      <Reveal>
        <div className={styles.inner}>
          <ProTitle className={styles.title}>Les desserts signature</ProTitle>
          <div className={styles.grid}>
            {CARDS.map(([name, desc]) => (
              <article key={name} className={styles.cell}>
                <div className={styles.cellBody}>
                  <span className={styles.cellName}>{name}</span>
                  <span aria-hidden="true" className={styles.cellRule} />
                  <p className={styles.cellDesc}>{desc}</p>
                </div>
                <div className={styles.cellFoot}>
                  <span className={styles.cellPrice}>Sur devis</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <img
          className={styles.band}
          src={asset("/photos/IMG_9425.webp")}
          alt="Pots préparés à l'atelier"
          width={1400}
          height={640}
          loading="lazy"
          decoding="async"
        />
      </Reveal>
    </section>
  );
}
