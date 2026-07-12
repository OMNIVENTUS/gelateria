import type { Metadata } from "next";
import { Footer, FabController, Reveal } from "@/components";
import { Hero } from "@/components/sections/accueil/Hero";
import { Marquee } from "@/components/sections/accueil/Marquee";
import { Philosophie } from "@/components/sections/accueil/Philosophie";
import { Atelier } from "@/components/sections/accueil/Atelier";
import { Ingredients } from "@/components/sections/accueil/Ingredients";
import { Creations } from "@/components/sections/accueil/Creations";
import { Pourquoi } from "@/components/sections/accueil/Pourquoi";
import { Boutique } from "@/components/sections/accueil/Boutique";
import { Emporter } from "@/components/sections/accueil/Emporter";
import { Temoignages } from "@/components/sections/accueil/Temoignages";
import { Trouver } from "@/components/sections/accueil/Trouver";

/**
 * Page Accueil (Amore Mio v2) — portée de planche/v2-*.jsx.
 * 12 sections dans l'ordre de V2Page + footer DS + FAB piloté.
 * Server Component : les feuilles interactives (Nav, Reveal, FabController)
 * sont des client components importés depuis le DS.
 */
export const metadata: Metadata = {
  description:
    "Amore Mio, gelateria artisanale à La Marsa. Glaces et sorbets faits maison chaque jour, à partir d'ingrédients rigoureusement sélectionnés. Fatto a mano, ogni giorno.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Marquee />
        <Reveal>
          <Philosophie />
        </Reveal>
        <Reveal>
          <Atelier />
        </Reveal>
        <Reveal>
          <Ingredients />
        </Reveal>
        <Reveal>
          <Creations />
        </Reveal>
        <Reveal>
          <Pourquoi />
        </Reveal>
        <Reveal>
          <Boutique />
        </Reveal>
        <Reveal>
          <Emporter />
        </Reveal>
        <Reveal>
          <Temoignages />
        </Reveal>
        <Reveal>
          <Trouver />
        </Reveal>
      </main>
      <div data-fab-hide>
        <Footer />
      </div>
      <FabController />
    </>
  );
}
