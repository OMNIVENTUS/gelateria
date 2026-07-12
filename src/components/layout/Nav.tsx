"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { WHATSAPP } from "@/lib/site";
import { Wordmark } from "./Wordmark";
import { WaGlyph } from "../ui/WaGlyph";
import { Icon } from "../ui/Icon";
import { NAV_LINKS as LINKS, DEVIS_HREF, type NavKey } from "./nav-links";
import styles from "./Nav.module.css";

export type { NavKey };
type CtaKind = "wa" | "devis";

export type NavProps = {
  active?: NavKey | null;
  cta?: CtaKind;
  /** Ouvre l'overlay au montage — utilitaire de story/preview (non utilisé en prod). */
  defaultOpen?: boolean;
};

export function Nav({ active = null, cta = "wa", defaultOpen = false }: NavProps) {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const ctaHref = cta === "devis" ? DEVIS_HREF : WHATSAPP;
  const ctaLabel = cta === "devis" ? "Demander un devis" : "Commander sur WhatsApp";
  const ctaExternal = cta === "wa";
  const ctaRel = ctaExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <div className={styles.root}>
      <div className={styles.shell}>
        <Link href="/" aria-label="Amore Mio — accueil" style={{ textDecoration: "none" }}>
          <Wordmark scale={0.95} />
        </Link>

        <nav className={styles.links} aria-label="Navigation principale">
          {LINKS.map(([key, label, href]) => (
            <Link
              key={key}
              href={href}
              className={`${styles.link} ${key === active ? styles.linkActive : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <a className={styles.ctaFull} href={ctaHref} {...ctaRel}>
          {cta === "wa" ? <WaGlyph size={16} /> : null}
          {ctaLabel}
          {cta === "devis" ? <Icon name="arrow-right" size={15} /> : null}
        </a>
        <a
          className={styles.ctaMini}
          href={ctaHref}
          aria-label={ctaLabel}
          {...ctaRel}
        >
          {cta === "wa" ? <WaGlyph size={19} /> : <Icon name="arrow-right" size={18} />}
        </a>

        <button
          type="button"
          className={styles.burger}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Menu">
          <div className={styles.overlayHead}>
            <Wordmark scale={0.9} tagline={false} />
            <button
              type="button"
              className={styles.close}
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
            >
              <Icon name="x" size={18} />
            </button>
          </div>
          <nav className={styles.overlayNav} aria-label="Navigation principale">
            {LINKS.map(([key, label, href], i) => (
              <div key={key} style={{ overflow: "hidden" }}>
                <Link
                  href={href}
                  className={`${styles.revealItem} ${styles.overlayLink} ${
                    key === active ? styles.overlayLinkActive : ""
                  }`}
                  style={{ animationDelay: `${120 + i * 90}ms` }}
                  onClick={() => setOpen(false)}
                >
                  {label}
                  <Icon name="arrow-right" size={20} color="var(--taupe)" />
                </Link>
              </div>
            ))}
          </nav>
          <div
            className={`${styles.revealItem} ${styles.overlayFoot}`}
            style={{ animationDelay: `${120 + LINKS.length * 90}ms` }}
          >
            <span className={styles.overlayNote}>
              La Marsa, Tunis. Ouvert tous les jours.
            </span>
            <a
              className={styles.ctaFull}
              style={{ display: "inline-flex" }}
              href={ctaHref}
              {...ctaRel}
              onClick={() => setOpen(false)}
            >
              {cta === "wa" ? <WaGlyph size={16} /> : null}
              {ctaLabel}
              {cta === "devis" ? <Icon name="arrow-right" size={15} /> : null}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
