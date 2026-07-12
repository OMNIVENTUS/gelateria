import { DashedNote } from "./DashedNote";
import styles from "./HistPlaceholder.module.css";

/**
 * HistPlaceholder — encart pointillé simulant du texte à venir (décision client :
 * la page affiche volontairement des placeholders, aucun récit inventé).
 * Les lignes grises sont décoratives (aria-hidden), largeurs variées.
 * Porté fidèlement depuis histoire-board.jsx (HistPlaceholder).
 */
const WIDTHS = ["100%", "96%", "99%", "92%", "97%", "88%", "95%", "60%"];

export type HistPlaceholderProps = {
  lines?: number;
};

export function HistPlaceholder({ lines = 5 }: HistPlaceholderProps) {
  return (
    <DashedNote label="[Texte à fournir par le client]" variant="placeholder">
      {Array.from({ length: lines }).map((_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={styles.line}
          style={{ width: WIDTHS[i % WIDTHS.length] }}
        />
      ))}
    </DashedNote>
  );
}
