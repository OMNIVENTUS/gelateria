import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HoursTable } from "./HoursTable";

const meta = {
  title: "Content/HoursTable",
  component: HoursTable,
  parameters: { layout: "padded" },
  decorators: [(S) => <div style={{ width: 360 }}><S /></div>],
} satisfies Meta<typeof HoursTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: [
      ["Lundi à jeudi", "11h00, 23h00"],
      ["Vendredi et samedi", "11h00, minuit"],
      ["Dimanche", "10h00, 23h00"],
    ],
  },
};
