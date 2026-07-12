import localFont from "next/font/local";
import { Cormorant_Garamond, Marcellus } from "next/font/google";

/**
 * Fonts self-hostées (CLAUDE.md §5) — aucune requête tierce au runtime.
 * - Satoshi : binaires .woff2 locaux (next/font/local).
 * - Cormorant Garamond + Marcellus : next/font/google télécharge et
 *   self-host les fichiers AU BUILD (pas d'appel Google au runtime).
 * Variables reliées aux tokens --font-* de globals.css.
 */
export const satoshi = localFont({
  src: [
    { path: "./Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
  preload: false,
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true, // display du hero
});

export const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
  display: "swap",
  preload: false,
});

export const fontVariables = `${cormorant.variable} ${marcellus.variable} ${satoshi.variable}`;
