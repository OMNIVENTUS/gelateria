import { SITE_NAME, SITE_URL, absoluteUrl, WHATSAPP } from "./site";

/**
 * JSON-LD IceCreamShop (CLAUDE.md §6). URLs/image absolues.
 * priceRange + openingHours + adresse exacte = À CONFIRMER CLIENT (§8) :
 * valeurs provisoires reprises de la référence, à valider avant prod.
 */
export function iceCreamShopJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "IceCreamShop",
    name: SITE_NAME,
    description:
      "Gelateria artisanale à La Marsa, Tunis. Glaces et sorbets faits maison chaque jour.",
    image: absoluteUrl("og-image.jpg"),
    url: SITE_URL,
    telephone: "+21629481736",
    priceRange: "5–89 DT",
    servesCuisine: "Gelato",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenue Habib Bourguiba",
      addressLocality: "La Marsa",
      addressRegion: "Tunis",
      addressCountry: "TN",
    },
    openingHours: ["Mo-Th 11:00-23:00", "Fr-Sa 11:00-00:00", "Su 10:00-23:00"],
    sameAs: ["https://www.instagram.com/amoremio.tn"],
    potentialAction: {
      "@type": "OrderAction",
      target: WHATSAPP,
    },
  };
}
