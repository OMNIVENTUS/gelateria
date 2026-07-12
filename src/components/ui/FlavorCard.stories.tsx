import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FlavorCard } from "./FlavorCard";

const PH =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='4'%20height='3'%3E%3Crect%20width='4'%20height='3'%20fill='%23EAE0D0'/%3E%3C/svg%3E";

const meta = {
  title: "UI/FlavorCard",
  component: FlavorCard,
  parameters: { layout: "padded" },
} satisfies Meta<typeof FlavorCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: { name: "Classique", price: "5,2 DT", layout: "row" },
  decorators: [(S) => <div style={{ width: 420 }}><S /></div>],
};

export const RowRich: Story = {
  args: {
    name: "Pistache",
    subtitle: "di Bronte",
    description: "Torréfiée puis broyée à l'atelier, jamais de pâte industrielle.",
    color: "#7C8A3F",
    price: "7,8 DT",
    tags: ["fatto a mano"],
    layout: "row",
  },
  decorators: [(S) => <div style={{ width: 460 }}><S /></div>],
};

export const Tile: Story = {
  args: {
    name: "Cône signature",
    subtitle: "fatto a mano",
    description: "Chocolat noir et noisette du Piémont.",
    price: "9,5 DT",
    image: PH,
    layout: "tile",
    tags: ["del giorno"],
  },
  decorators: [(S) => <div style={{ width: 320 }}><S /></div>],
};
