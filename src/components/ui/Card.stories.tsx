import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./Card";

const PH =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='4'%20height='3'%3E%3Crect%20width='4'%20height='3'%20fill='%23EAE0D0'/%3E%3C/svg%3E";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    image: PH,
    imageAlt: "Aperçu",
    aspect: "4 / 3",
    children: (
      <p style={{ margin: 0, fontFamily: "var(--font-body)", color: "var(--espresso-70)" }}>
        Cône signature, éclats de pistache de Bronte.
      </p>
    ),
  },
  decorators: [(S) => <div style={{ width: 320 }}><S /></div>],
};

export const Hover: Story = {
  args: { ...WithImage.args, hover: true },
  decorators: WithImage.decorators,
  parameters: { pseudo: { hover: true } },
};

export const TextOnly: Story = {
  args: {
    padding: "var(--space-6)",
    children: (
      <p style={{ margin: 0, fontFamily: "var(--font-body)", color: "var(--espresso-70)" }}>
        Une surface Latte, radius 24, ombre chaude.
      </p>
    ),
  },
  decorators: [(S) => <div style={{ width: 320 }}><S /></div>],
};
