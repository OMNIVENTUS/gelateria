import { SectionHeading, PrimaryCta } from "@/components";
import { Split } from "./Split";
import styles from "./Emporter.module.css";

/**
 * À emporter (section 9) — porté de V2Emporter.
 * Split inversé (texte à gauche, image à droite) + CTA « Commander sur
 * WhatsApp » — seul CTA d'intention de la section.
 */
export function Emporter() {
  return (
    <section className={styles.section}>
      <Split
        src="/photos/4L0A8414.webp"
        alt="Bacs et pots à emporter"
        pos="50% 45%"
        reverse
      >
        <SectionHeading title="À emporter" />
        <p className={styles.para}>
          Pots et bacs préparés à la demande, prêts en quelques minutes.
          Choisissez vos parfums <em>del giorno</em>, nous nous occupons du
          reste.
        </p>
        <div className={styles.cta}>
          <PrimaryCta size="md" />
        </div>
      </Split>
    </section>
  );
}
