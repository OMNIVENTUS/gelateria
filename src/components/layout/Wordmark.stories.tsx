import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Wordmark } from "./Wordmark";

const meta = {
  title: "Layout/Wordmark",
  component: Wordmark,
} satisfies Meta<typeof Wordmark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoTagline: Story = { args: { tagline: false } };
export const Large: Story = { args: { scale: 1.6 } };
export const OnDark: Story = {
  args: { color: "var(--crema)" },
  decorators: [
    (S) => (
      <div style={{ background: "var(--espresso)", padding: "2rem" }}>
        <S />
      </div>
    ),
  ],
};
