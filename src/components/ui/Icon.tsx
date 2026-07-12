import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import {
  ArrowRight,
  ArrowDown,
  ArrowBendUpRight,
  X,
  MapPin,
  Phone,
  Clock,
  Heart,
  Leaf,
  Snowflake,
  IceCream,
  Star,
  ForkKnife,
  Buildings,
  EnvelopeSimple,
  InstagramLogo,
  FacebookLogo,
  TiktokLogo,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Wrapper Phosphor Light (stroke 1.5) — SEUL jeu d'icônes autorisé (DS).
 * Import SSR (self-hosté, RSC-safe, aucun CDN). Ajouter au registre au besoin.
 */
const REGISTRY = {
  "arrow-right": ArrowRight,
  "arrow-down": ArrowDown,
  "arrow-bend-up-right": ArrowBendUpRight,
  x: X,
  "map-pin": MapPin,
  phone: Phone,
  clock: Clock,
  heart: Heart,
  leaf: Leaf,
  snowflake: Snowflake,
  "ice-cream": IceCream,
  star: Star,
  "fork-knife": ForkKnife,
  buildings: Buildings,
  "envelope-simple": EnvelopeSimple,
  "instagram-logo": InstagramLogo,
  "facebook-logo": FacebookLogo,
  "tiktok-logo": TiktokLogo,
} satisfies Record<string, PhosphorIcon>;

export type IconName = keyof typeof REGISTRY;

export type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
};

export function Icon({ name, size = 20, color = "currentColor" }: IconProps) {
  const Glyph = REGISTRY[name];
  return <Glyph size={size} color={color} weight="light" aria-hidden />;
}
