import { Nav } from "@/components";
import styles from "./CarteHeader.module.css";

/**
 * En-tête court de la page « La carte » — porté depuis carte-v2-sections.jsx
 * (CarteV2Header + CarteV2Nav). Contient l'unique <h1> de la page et le repère
 * [data-hero] piloté par FabController (FAB masqué tant que le hero est visible).
 * La Nav est posée en absolu sur le fond clair (top 28px desktop / 16px mobile,
 * left/right = gutter), au-dessus du padding haut du header.
 */
export function CarteHeader() {
  return (
    <header className={styles.header} data-hero>
      <div className={styles.navWrap}>
        <Nav active="menu" />
      </div>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Fait maison avec passion</span>
        <h1 className={styles.title}>La carte</h1>
        <p className={styles.lead}>Nos parfums changent au fil des saisons.</p>
      </div>
    </header>
  );
}
