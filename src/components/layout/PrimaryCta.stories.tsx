import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PrimaryCta } from "./PrimaryCta";

const meta = {
  title: "Layout/PrimaryCta",
  component: PrimaryCta,
} satisfies Meta<typeof PrimaryCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Md: Story = { args: { size: "md" } };
export const Lg: Story = { args: { size: "lg" } };
export const Hover: Story = { args: { size: "lg" }, parameters: { pseudo: { hover: true } } };
export const Active: Story = { args: { size: "lg" }, parameters: { pseudo: { active: true } } };
export const Focus: Story = { args: { size: "lg" }, parameters: { pseudo: { focusVisible: true } } };
export const Devis: Story = {
  args: { size: "md", wa: false, href: "#contact-pro", children: "Demander un devis" },
};
