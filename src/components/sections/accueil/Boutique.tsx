import { SectionHeading } from "@/components";
import { Split } from "./Split";
import styles from "./Boutique.module.css";

/**
 * La boutique (section 8) — porté de V2Boutique.
 * Split image (façade) à gauche, texte à droite.
 */
export function Boutique() {
  return (
    <section className={styles.section}>
      <Split
        src="/photos/4L0A7979.webp"
        alt="La façade de la boutique, La Marsa"
        pos="50% 62%"
      >
        <SectionHeading title="La boutique" />
        <p className={styles.para}>
          Une adresse de quartier à La Marsa. Un comptoir clair, du bois blond,
          et l&apos;atelier juste derrière la vitrine des bacs. On y vient pour
          un cône <em>subito</em>, on y revient par habitude.
        </p>
      </Split>
    </section>
  );
}
