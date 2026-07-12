import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon, type IconName } from "./Icon";

const NAMES: IconName[] = [
  "arrow-right",
  "arrow-down",
  "arrow-bend-up-right",
  "x",
  "map-pin",
  "phone",
  "clock",
  "heart",
  "leaf",
  "snowflake",
  "ice-cream",
  "star",
  "fork-knife",
  "buildings",
  "envelope-simple",
  "instagram-logo",
  "facebook-logo",
  "tiktok-logo",
];

const meta = {
  title: "UI/Icon",
  component: Icon,
  args: { name: "ice-cream", size: 28 },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Gallery: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "1.5rem",
        color: "var(--espresso)",
        maxWidth: 520,
      }}
    >
      {NAMES.map((n) => (
        <div key={n} style={{ display: "flex", justifyContent: "center" }}>
          <Icon name={n} size={26} />
        </div>
      ))}
    </div>
  ),
};

export const Accent: Story = { args: { name: "map-pin", size: 40, color: "var(--accent)" } };
