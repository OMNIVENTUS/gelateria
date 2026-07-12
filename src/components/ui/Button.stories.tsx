import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  args: { children: "Voir la carte", variant: "primary", size: "md" },
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary", "ghost"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };

export const SizeSm: Story = { args: { size: "sm" } };
export const SizeMd: Story = { args: { size: "md" } };
export const SizeLg: Story = { args: { size: "lg" } };

export const Whatsapp: Story = {
  args: { whatsapp: true, size: "lg", children: undefined },
};
export const WithIcon: Story = {
  args: { variant: "ghost", icon: "arrow-right", children: "Toute la carte" },
};

export const Hover: Story = { parameters: { pseudo: { hover: true } } };
export const Focus: Story = { parameters: { pseudo: { focusVisible: true } } };
export const Active: Story = { parameters: { pseudo: { active: true } } };
export const Disabled: Story = { args: { disabled: true } };

export const SecondaryHover: Story = {
  args: { variant: "secondary" },
  parameters: { pseudo: { hover: true } },
};
export const GhostHover: Story = {
  args: { variant: "ghost" },
  parameters: { pseudo: { hover: true } },
};
