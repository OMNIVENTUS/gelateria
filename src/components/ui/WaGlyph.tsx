/**
 * Glyphe WhatsApp — seul SVG « ad hoc » autorisé par le DS (readme invariants).
 * Trait fin, cohérent avec Phosphor Light. Porté depuis parts.jsx (WaGlyph).
 */
export type WaGlyphProps = {
  size?: number;
  color?: string;
  className?: string;
};

export function WaGlyph({ size = 18, color = "currentColor", className }: WaGlyphProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="14"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M128 28a100 100 0 0 0-86 150L28 228l52-14A100 100 0 1 0 128 28Z" />
      <path d="M96 100c0 40 20 60 60 60l8-20-24-12-12 12a48 48 0 0 1-20-20l12-12-12-24Z" />
    </svg>
  );
}
