import { SectionHeading, Icon } from "@/components";
import styles from "./Temoignages.module.css";

/**
 * Témoignages (section 10) — porté de V2Temoignages.
 * 3 cartes avis (5 étoiles + citation + signature), Sabbia sur Crema.
 */
const QUOTES: ReadonlyArray<readonly [string, string]> = [
  ["« La pistache est incroyable, on sent la vraie torréfaction. »", "Sarra B."],
  [
    "« De loin la meilleure glace de La Marsa. On y retourne chaque semaine. »",
    "Mehdi K.",
  ],
  ["« Des parfums qui changent souvent et un accueil adorable. »", "Ines T."],
];

export function Temoignages() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <SectionHeading title="Ils nous font confiance" align="center" />
      </div>
      <div className={styles.grid}>
        {QUOTES.map(([quote, sig]) => (
          <figure key={sig} className={styles.card}>
            <span className={styles.stars} aria-label="Cinq étoiles">
              {[1, 2, 3, 4, 5].map((s) => (
                <Icon key={s} name="star" size={16} color="var(--taupe)" />
              ))}
            </span>
            <blockquote className={styles.quote}>{quote}</blockquote>
            <figcaption className={styles.sig}>{sig}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
