import { Icon } from "@/components";
import styles from "./ProCta.module.css";

/**
 * ProCta — CTA unique de la page Professionnels : « Demander un devis ».
 * Ancre interne #contact-pro (PAS de WhatsApp sur cette page). Server Component.
 * Porté fidèlement depuis standalone_export/planche/pro-board.jsx (ProCta).
 */
export type ProCtaProps = {
  size?: "md" | "lg";
};

export function ProCta({ size = "md" }: ProCtaProps) {
  return (
    <a href="#contact-pro" className={`${styles.cta} ${styles[size]}`}>
      Demander un devis
      <Icon name="arrow-right" size={16} />
    </a>
  );
}
