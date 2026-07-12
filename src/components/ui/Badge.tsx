import type { ReactNode } from "react";
import styles from "./Badge.module.css";

/**
 * Badge — tag Marcellus caps. API verrouillée : tone | dot | children.
 */
export type BadgeProps = {
  tone?: "outline" | "solid" | "muted";
  dot?: boolean;
  children?: ReactNode;
};

export function Badge({ tone = "outline", dot = false, children }: BadgeProps) {
  return (
    <span className={`${styles.base} ${styles[tone]}`}>
      {dot && <span className={styles.dot} aria-hidden />}
      {children}
    </span>
  );
}
