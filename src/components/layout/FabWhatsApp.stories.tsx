import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FabWhatsApp } from "./FabWhatsApp";

const meta = {
  title: "Layout/FabWhatsApp",
  component: FabWhatsApp,
  parameters: { layout: "fullscreen" },
  decorators: [(S) => <div style={{ minHeight: 160, position: "relative" }}><S /></div>],
} satisfies Meta<typeof FabWhatsApp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Visible: Story = { args: { visible: true } };
export const Hidden: Story = { args: { visible: false } };
