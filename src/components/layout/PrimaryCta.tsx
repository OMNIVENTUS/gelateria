import type { ReactNode } from "react";
import { WHATSAPP } from "@/lib/site";
import { WaGlyph } from "../ui/WaGlyph";
import { Icon } from "../ui/Icon";
import styles from "./PrimaryCta.module.css";

/**
 * PrimaryCta — CTA « button-in-button » (pill Caramello + cercle flèche).
 * Le seul CTA de commande : « Commander sur WhatsApp » → wa.me (target/rel).
 * `wa=false` + href pour réemploi (ex. « Demander un devis » page Pro).
 * Porté depuis parts.jsx (PrimaryCta).
 */
export type PrimaryCtaProps = {
  size?: "md" | "lg";
  children?: ReactNode;
  wa?: boolean;
  href?: string;
};

export function PrimaryCta({
  size = "md",
  children = "Commander sur WhatsApp",
  wa = true,
  href,
}: PrimaryCtaProps) {
  const target = wa ? WHATSAPP : (href ?? "#");
  const external = wa || target.startsWith("http");
  return (
    <a
      className={`${styles.cta} ${styles[size]}`}
      href={target}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {wa && <WaGlyph size={17} />}
      {children}
      <span className={styles.circle}>
        <Icon name="arrow-right" size={16} />
      </span>
    </a>
  );
}
