import type { Metadata } from "next";
import { Footer, FabController, Reveal } from "@/components";
import { CarteHeader } from "@/components/sections/carte/CarteHeader";
import { CarteGroups } from "@/components/sections/carte/CarteGroups";
import { CarteInstagram } from "@/components/sections/carte/CarteInstagram";
import { CarteFinal } from "@/components/sections/carte/CarteFinal";

export const metadata: Metadata = {
  title: "La carte",
  description:
    "La carte d'Amore Mio à La Marsa : crèmes glacées et sorbets faits maison, sundaes, eskimos, douceurs maison, desserts signature et boissons. Prix en dinars.",
  alternates: { canonical: "/carte" },
};

/**
 * Page « La carte » (Server Component) — portée depuis carte-v2-board.jsx.
 * Ordre : Header (nav + hero, unique <h1>) → Groupes → Encart Instagram →
 * CTA final → Footer. FabController pilote le FAB via [data-hero]/[data-fab-hide].
 */
export default function CartePage() {
  return (
    <>
      <CarteHeader />
      <main id="main">
        <Reveal>
          <CarteGroups />
        </Reveal>
        <Reveal>
          <CarteInstagram />
        </Reveal>
        <Reveal>
          <CarteFinal />
        </Reveal>
      </main>
      <Footer />
      <FabController />
    </>
  );
}
