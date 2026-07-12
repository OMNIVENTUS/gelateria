import { WHATSAPP } from "@/lib/site";
import { WaGlyph } from "../ui/WaGlyph";
import styles from "./FabWhatsApp.module.css";

/**
 * FAB WhatsApp — 56px Espresso, bas-droite. Porté depuis parts.jsx.
 * `visible` piloté par la page (apparaît hors hero, disparaît sur le CTA final).
 */
export type FabWhatsAppProps = { visible?: boolean };

export function FabWhatsApp({ visible = true }: FabWhatsAppProps) {
  return (
    <a
      className={styles.fab}
      data-visible={visible}
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Commander sur WhatsApp"
    >
      <WaGlyph size={24} />
    </a>
  );
}
