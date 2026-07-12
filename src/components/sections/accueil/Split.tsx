import type { ReactNode } from "react";
import { asset } from "@/lib/site";
import styles from "./Split.module.css";

/**
 * Split — bloc image / texte 50-50 (helper des sections Boutique & Emporter).
 * Porté de V2Split : empilé en mobile (image puis texte), deux colonnes en
 * tablette/desktop. `reverse` place le texte à gauche et l'image à droite.
 */
export type SplitProps = {
  src: string;
  alt: string;
  pos?: string;
  reverse?: boolean;
  children: ReactNode;
};

export function Split({ src, alt, pos = "50% 50%", reverse = false, children }: SplitProps) {
  return (
    <div className={`${styles.split} ${reverse ? styles.reverse : ""}`}>
      <img
        className={styles.img}
        src={asset(src)}
        alt={alt}
        loading="lazy"
        style={{ objectPosition: pos }}
      />
      <div className={styles.text}>{children}</div>
    </div>
  );
}
