/**
 * Placeholder T0 — remplacé par la page Accueil v2 en T2.
 * Sert uniquement à valider le scaffold (build static export vert).
 */
export default function Home() {
  return (
    <main id="main" style={{ padding: "var(--space-8) var(--gutter)" }}>
      <p
        style={{
          fontFamily: "var(--font-label)",
          textTransform: "uppercase",
          letterSpacing: "var(--tracking-label)",
          fontSize: "var(--text-label)",
          color: "var(--accent)",
        }}
      >
        Amore Mio
      </p>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "var(--text-h1)",
          lineHeight: "var(--lh-heading)",
          color: "var(--text-primary)",
        }}
      >
        Scaffold prêt.
      </h1>
      <p
        style={{
          fontFamily: "var(--font-body)",
          color: "var(--text-secondary)",
          maxWidth: "var(--container-text)",
        }}
      >
        L&apos;atelier de la glace. Design system et pages v2 à venir.
      </p>
    </main>
  );
}
