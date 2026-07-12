import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

/**
 * SectionHeading — eyebrow + titre Cormorant display + lead. API verrouillée :
 * eyebrow | title | lead | align | as | children.
 */
export type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  as = "h2",
  children,
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <div className={`${styles.root} ${styles[align]}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <Tag className={`${styles.title} ${styles[as]}`}>{title}</Tag>
      {lead && <p className={styles.lead}>{lead}</p>}
      {children}
    </div>
  );
}
