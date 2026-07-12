"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import styles from "./Reveal.module.css";

/**
 * Reveal — fondu montant au scroll (IntersectionObserver, seuil 12%).
 * Fail-open : sans IO, ou après 1400ms, ou en reduced-motion → contenu visible.
 * Aucun contenu ne reste jamais à opacity:0 (Guide QA §2.1).
 */
export type RevealProps = {
  as?: ElementType;
  className?: string;
  delay?: number;
  children: ReactNode;
  id?: string;
};

export function Reveal({ as, className, delay = 0, children, id }: RevealProps) {
  const Tag = as ?? "div";
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const fallback = window.setTimeout(() => setShown(true), 1400);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
            window.clearTimeout(fallback);
          }
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`${styles.reveal} ${shown ? styles.in : ""} ${className ?? ""}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
