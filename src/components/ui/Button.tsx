import type { ReactNode } from "react";
import { WHATSAPP } from "@/lib/site";
import { WaGlyph } from "./WaGlyph";
import { Icon, type IconName } from "./Icon";
import styles from "./Button.module.css";

/**
 * Button — pill CTA du DS. API verrouillée (adherence lint) :
 * variant | size | whatsapp | href | icon | disabled | children.
 * `whatsapp` : préfixe le glyphe WhatsApp, cible wa.me par défaut
 * (target/rel), libellé « Commander sur WhatsApp » si non fourni.
 */
export type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  whatsapp?: boolean;
  href?: string;
  icon?: IconName;
  disabled?: boolean;
  children?: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  whatsapp = false,
  href,
  icon,
  disabled = false,
  children,
}: ButtonProps) {
  const className = [
    styles.base,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  const label = children ?? (whatsapp ? "Commander sur WhatsApp" : null);
  const glyphSize = size === "lg" ? 18 : 16;
  const iconSize = size === "lg" ? 17 : 15;

  const content = (
    <>
      {whatsapp && <WaGlyph size={glyphSize} />}
      {label}
      {icon && <Icon name={icon} size={iconSize} />}
    </>
  );

  const target = whatsapp ? WHATSAPP : href;

  if (target && !disabled) {
    const external = whatsapp || target.startsWith("http");
    return (
      <a
        className={className}
        href={target}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={className} disabled={disabled} aria-disabled={disabled || undefined}>
      {content}
    </button>
  );
}
