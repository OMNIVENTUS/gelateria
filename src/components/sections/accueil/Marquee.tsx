import styles from "./Marquee.module.css";

/**
 * Marquee parfums (section 2) — porté de V2Marquee.
 * Bande Marcellus caps qui défile (translateX 0 → -33,333% sur 36s linéaire
 * infini). Contenu triplé pour une boucle sans couture. Animation coupée
 * sous prefers-reduced-motion (globals + module). Décoratif → aria-hidden.
 */
const RUN = "Pistache · Cioccolato · Mangue · Fragola · Tiramisù · Caffè · ";

export function Marquee() {
  return (
    <div className={styles.band} aria-hidden="true">
      <div className={styles.track}>
        {[0, 1, 2].map((i) => (
          <span key={i} className={styles.run}>
            {RUN}
          </span>
        ))}
      </div>
    </div>
  );
}
