import { SectionHeading, Photo } from "@/components";
import styles from "./Ingredients.module.css";

/**
 * Nos ingrédients (section 5) — porté de V2Ingredients.
 * Éditorial typographique : cartouches (mot italique + ligne) en grille,
 * entrecoupés de bandes photo pleine largeur.
 */
type Cartouche = readonly [string, string];

function Grid({ items }: { items: ReadonlyArray<Cartouche> }) {
  return (
    <div className={styles.grid}>
      {items.map(([word, line]) => (
        <div key={word} className={styles.cartouche}>
          <span className={styles.word}>{word}</span>
          <p className={styles.line}>{line}</p>
        </div>
      ))}
    </div>
  );
}

export function Ingredients() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <SectionHeading eyebrow="La matière première" title="Nos ingrédients" />
      </div>

      <Grid
        items={[
          [
            "Vanille de Madagascar",
            "Gousses entières, infusées lentement dans le lait frais.",
          ],
          [
            "Pistaches",
            "Torréfiées puis broyées à l'atelier, jamais de pâte industrielle.",
          ],
          ["Mangues fraîches", "Mûres à point, coupées à la main, plein fruit."],
        ]}
      />

      <Photo
        className={styles.band}
        file="4L0A8136-Edit.webp"
        alt="Texture macro, glace en bac"
        sizes="100vw"
      />

      <Grid
        items={[
          [
            "Noisettes torréfiées",
            "Torréfaction douce pour un praliné profond.",
          ],
          ["Chocolat", "Un grand cacao, travaillé en chocolat de couverture."],
        ]}
      />

      <Photo
        className={styles.band}
        file="4L0A8175.webp"
        alt="Texture macro, sorbet mangue passion"
        sizes="100vw"
      />

      <Grid
        items={[
          ["Fraises", "De saison, choisies au marché chaque matin."],
          ["Oranges", "Pressées le jour même pour nos sorbets."],
        ]}
      />
    </section>
  );
}
