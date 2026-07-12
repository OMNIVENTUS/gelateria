import type { ReactNode } from "react";
import styles from "./DashedNote.module.css";

/**
 * DashedNote — encart à bordure pointillée (taupe) avec libellé flottant.
 * Base partagée du placeholder de contenu (récit) et de l'encart « exemple »
 * de la clôture. Porté depuis histoire-board.jsx (HistPlaceholder / HistCloture).
 */
export type DashedNoteProps = {
  label: string;
  variant?: "placeholder" | "note";
  children: ReactNode;
};

export function DashedNote({ label, variant = "placeholder", children }: DashedNoteProps) {
  return (
    <div className={`${styles.box} ${styles[variant]}`}>
      <span className={styles.label}>{label}</span>
      {children}
    </div>
  );
}
