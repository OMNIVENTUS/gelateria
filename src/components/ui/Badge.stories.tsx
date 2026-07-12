import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  args: { children: "Fatto a mano", tone: "outline" },
  argTypes: {
    tone: { control: "inline-radio", options: ["outline", "solid", "muted"] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {};
export const Solid: Story = { args: { tone: "solid" } };
export const Muted: Story = { args: { tone: "muted" } };
export const WithDot: Story = { args: { tone: "outline", dot: true, children: "Del giorno" } };
