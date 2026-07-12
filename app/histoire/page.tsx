import type { Metadata } from "next";
import { Footer, FabController, Reveal } from "@/components";
import { HistHero } from "@/components/sections/histoire/HistHero";
import { HistRecit } from "@/components/sections/histoire/HistRecit";
import { HistConvictions } from "@/components/sections/histoire/HistConvictions";
import { HistMaison } from "@/components/sections/histoire/HistMaison";
import { HistCloture } from "@/components/sections/histoire/HistCloture";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "L'histoire d'Amore Mio, atelier de glace artisanale à La Marsa : né d'une conviction, la glace mérite le même soin qu'une grande pâtisserie.",
  alternates: { canonical: "/histoire" },
};

export default function HistoirePage() {
  return (
    <main id="main">
      <HistHero />
      <Reveal>
        <HistRecit />
      </Reveal>
      <Reveal>
        <HistConvictions />
      </Reveal>
      <Reveal>
        <HistMaison />
      </Reveal>
      <Reveal>
        <HistCloture />
      </Reveal>
      <Footer />
      <FabController />
    </main>
  );
}
