import type { CSSProperties } from "react";
import styles from "./Wordmark.module.css";

/**
 * Wordmark — pas de logo vectoriel (readme invariants). Rendu typographique :
 * Marcellus caps + tagline Cormorant italique. Porté depuis parts.jsx.
 * La tagline porte data-part="tagline" pour un masquage responsive côté consommateur.
 */
export type WordmarkProps = {
  scale?: number;
  tagline?: boolean;
  color?: string;
  className?: string;
};

export function Wordmark({ scale = 1, tagline = true, color, className }: WordmarkProps) {
  const style = {
    ...(scale !== 1 ? { "--wm-scale": scale } : {}),
    ...(color ? { "--wm-color": color } : {}),
  } as CSSProperties;
  return (
    <span className={`${styles.root} ${className ?? ""}`.trim()} style={style}>
      <span className={styles.name}>Amore Mio</span>
      {tagline && (
        <span className={styles.tagline} data-part="tagline">
          L&apos;Atelier De La Glace
        </span>
      )}
    </span>
  );
}
