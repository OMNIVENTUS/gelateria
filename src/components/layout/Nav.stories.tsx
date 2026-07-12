import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Nav } from "./Nav";

const meta = {
  title: "Layout/Nav",
  component: Nav,
  parameters: { layout: "fullscreen" },
  decorators: [
    (S) => (
      <div style={{ background: "var(--sabbia)", padding: "28px var(--gutter)", minHeight: 200 }}>
        <S />
      </div>
    ),
  ],
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ActiveMenu: Story = { args: { active: "menu" } };
export const Pro: Story = { args: { cta: "devis", active: "pro" } };

export const OverlayOpen: Story = {
  args: { defaultOpen: true, active: "menu" },
  parameters: { layout: "fullscreen" },
};
