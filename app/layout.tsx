import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@/styles/globals.css";
import { fontVariables } from "@/fonts/fonts";
import { GA_ID, SITE_NAME, SITE_TAGLINE, SITE_URL, absoluteUrl } from "@/lib/site";
import { iceCreamShopJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Gelateria artisanale à La Marsa, Tunis. Glaces et sorbets faits maison chaque jour, à partir d'ingrédients rigoureusement sélectionnés.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "fr_FR",
    url: "/",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Glaces et sorbets faits maison chaque jour, à La Marsa. Fatto a mano, ogni giorno.",
    images: [
      {
        url: absoluteUrl("og-image.jpg"),
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={fontVariables}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(iceCreamShopJsonLd()) }}
        />
        <a href="#main" className="skip-link">
          Aller au contenu
        </a>
        {children}
      </body>
      {/* GA4 (recommandation Next.js). Dormant tant que NEXT_PUBLIC_GA_ID est absent. */}
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
