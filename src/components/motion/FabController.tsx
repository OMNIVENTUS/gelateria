"use client";

import { useEffect, useState } from "react";
import { FabWhatsApp } from "../layout/FabWhatsApp";

/**
 * FabController — pilote la visibilité du FAB WhatsApp (Guide QA §2.6).
 * Masqué tant que le hero ([data-hero]) est visible, et masqué dès qu'un
 * bloc final ([data-fab-hide], ex. CTA final / footer) entre dans le viewport.
 * Visible entre les deux. Fail-open : si rien à observer, reste visible.
 */
export function FabController() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [endVisible, setEndVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const hero = document.querySelector("[data-hero]");
    const ends = Array.from(document.querySelectorAll("[data-fab-hide]"));

    const heroIo = new IntersectionObserver(
      (entries) => entries.forEach((e) => setHeroVisible(e.isIntersecting)),
      { threshold: 0.01 },
    );
    if (hero) heroIo.observe(hero);
    else setHeroVisible(false);

    const endIo = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((e) => e.isIntersecting);
        setEndVisible(anyVisible);
      },
      { threshold: 0.01 },
    );
    ends.forEach((el) => endIo.observe(el));

    return () => {
      heroIo.disconnect();
      endIo.disconnect();
    };
  }, []);

  return <FabWhatsApp visible={!heroVisible && !endVisible} />;
}
