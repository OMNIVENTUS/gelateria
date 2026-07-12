import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/**
 * Story « smoke » temporaire — valide la chaîne Storybook du scaffold (T0).
 * Remplacée par les stories du Design System en T1.
 */
function TokenCheck() {
  return (
    <div
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: "var(--text-h2)",
        color: "var(--accent)",
        background: "var(--surface-card)",
        border: "1px solid var(--border-faint)",
        borderRadius: "var(--radius-card)",
        boxShadow: "var(--shadow-md)",
        padding: "var(--space-6)",
      }}
    >
      Amore Mio — tokens OK
    </div>
  );
}

const meta = {
  title: "Scaffold/TokenCheck",
  component: TokenCheck,
} satisfies Meta<typeof TokenCheck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
