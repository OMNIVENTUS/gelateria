import type { ReactNode } from "react";
import { Photo } from "@/components";
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
      <Photo
        className={styles.img}
        file={src}
        alt={alt}
        sizes="(min-width: 640px) 50vw, 100vw"
        objectPosition={pos}
      />
      <div className={styles.text}>{children}</div>
    </div>
  );
}
