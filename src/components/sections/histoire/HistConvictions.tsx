import styles from "./HistConvictions.module.css";

/**
 * HistConvictions — trois convictions séparées par des hairlines (taupe-40),
 * titre italique Cormorant + description. Contenu exact de la planche.
 * Porté depuis histoire-board.jsx (HistConvictions).
 */
const ITEMS: ReadonlyArray<readonly [string, string]> = [
  ["Le produit d'abord", "Nous choisissons chaque ingrédient avant de penser à la recette."],
  ["Le geste artisanal", "Chaque bac est préparé à la main, jamais en série."],
  ["La générosité", "Une vraie portion, un vrai goût, sans détour."],
];

export function HistConvictions() {
  return (
    <section className={styles.convictions}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Nos convictions</h2>
        <div>
          {ITEMS.map(([term, desc]) => (
            <div key={term} className={styles.row}>
              <h3 className={styles.term}>{term}</h3>
              <p className={styles.desc}>{desc}</p>
            </div>
          ))}
          <div className={styles.hairline} />
        </div>
      </div>
    </section>
  );
}
