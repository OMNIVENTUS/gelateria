import type { ReactNode } from "react";
import styles from "./ProTitle.module.css";

/**
 * ProTitle — titre de section de la page Pro (h2 Cormorant display).
 * Server Component. Porté depuis planche V2Title (sans eyebrow ici).
 * `className` permet à chaque section de régler sa marge basse.
 */
export type ProTitleProps = {
  children: ReactNode;
  center?: boolean;
  className?: string;
};

export function ProTitle({ children, center = false, className }: ProTitleProps) {
  return (
    <div
      className={`${styles.wrap} ${center ? styles.center : ""} ${className ?? ""}`.trim()}
    >
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
}
