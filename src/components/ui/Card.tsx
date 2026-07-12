import type { CSSProperties, ReactNode } from "react";
import styles from "./Card.module.css";

/**
 * Card — surface Latte 24px du DS. API verrouillée :
 * image | imageAlt | aspect | padding | hover | children.
 */
export type CardProps = {
  image?: string;
  imageAlt?: string;
  aspect?: string;
  padding?: string;
  hover?: boolean;
  children?: ReactNode;
};

export function Card({
  image,
  imageAlt = "",
  aspect = "4 / 3",
  padding,
  hover = false,
  children,
}: CardProps) {
  const className = `${styles.base} ${hover ? styles.hover : ""}`.trim();
  const bodyStyle: CSSProperties | undefined = padding ? { padding } : undefined;

  return (
    <article className={className}>
      {image && (
        <div className={styles.imageWrap}>
          <div className={styles.aspect} style={{ aspectRatio: aspect }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.image} src={image} alt={imageAlt} />
          </div>
        </div>
      )}
      {children && (
        <div className={styles.body} style={bodyStyle}>
          {children}
        </div>
      )}
    </article>
  );
}
