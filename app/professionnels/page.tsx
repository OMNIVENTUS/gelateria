import type { Metadata } from "next";
import { Nav, Footer, FabController } from "@/components";
import { ProHero } from "@/components/sections/pro/ProHero";
import { ProPrestations } from "@/components/sections/pro/ProPrestations";
import { ProSignature } from "@/components/sections/pro/ProSignature";
import { ProEtapes } from "@/components/sections/pro/ProEtapes";
import { ProFinal } from "@/components/sections/pro/ProFinal";
import heroStyles from "@/components/sections/pro/ProHero.module.css";

export const metadata: Metadata = {
  title: "Professionnels",
  description:
    "Desserts glacés artisanaux Amore Mio pour les professionnels : mariages, hôtels, restaurants et événements. Vacherin, omelette norvégienne, bombe glacée — sur devis.",
  alternates: { canonical: "/professionnels" },
};

/**
 * Page Professionnels (Amore Mio v2). Portée depuis pro-board.jsx :
 * Hero split → Prestations → Desserts signature → Comment ça marche →
 * CTA final → Footer. CTA d'intention = « Demander un devis » (#contact-pro).
 */
export default function ProfessionnelsPage() {
  return (
    <>
      <header className={heroStyles.nav}>
        <Nav active="pro" cta="devis" />
      </header>
      <main id="main">
        <ProHero />
        <ProPrestations />
        <ProSignature />
        <ProEtapes />
        <ProFinal />
      </main>
      <Footer />
      <FabController />
    </>
  );
}
