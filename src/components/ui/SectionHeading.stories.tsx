import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SectionHeading } from "./SectionHeading";

const meta = {
  title: "UI/SectionHeading",
  component: SectionHeading,
  parameters: { layout: "padded" },
  args: {
    eyebrow: "La matière première",
    title: "Nos ingrédients",
    align: "left",
    as: "h2",
  },
  decorators: [(S) => <div style={{ maxWidth: 720 }}><S /></div>],
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {};
export const Center: Story = { args: { align: "center" } };
export const WithLead: Story = {
  args: {
    lead: "Chaque bac est turbiné le matin même. Rien n'attend au congélateur.",
  },
};
export const AsH1: Story = {
  args: { as: "h1", eyebrow: undefined, title: "La carte" },
};
