import { Icon } from "@/components";
import styles from "./CarteInstagram.module.css";

/**
 * Encart Instagram — porté depuis carte-v2-sections.jsx (CarteV2Encart).
 * Fond Sabbia, icône Phosphor Light instagram-logo + rappel « parfums du jour ».
 */
export function CarteInstagram() {
  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <Icon name="instagram-logo" size={26} color="var(--espresso)" />
        <p className={styles.text}>
          Les parfums du jour sont sur notre Instagram.
        </p>
      </div>
    </div>
  );
}
