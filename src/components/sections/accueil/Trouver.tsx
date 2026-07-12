import { HoursTable, SectionHeading, Icon } from "@/components";
import { asset } from "@/lib/site";
import styles from "./Trouver.module.css";

/**
 * Nous trouver (section 11) — porté de V2Trouver / V2MapStylisee.
 * Carte SVG stylisée + encart d'infos (marqué « exemple », données à
 * confirmer client), horaires et bouton itinéraire. Marqué data-fab-hide :
 * dernier bloc de contenu, le FAB disparaît quand il entre à l'écran.
 */
function MapStylisee() {
  return (
    <div className={styles.map}>
      <svg
        viewBox="0 0 600 340"
        preserveAspectRatio="xMidYMid slice"
        className={styles.svg}
        aria-hidden="true"
      >
        <path
          className={styles.roadBase}
          d="M-20 250 C 120 235, 240 260, 380 230 S 580 200, 640 215"
          fill="none"
          strokeWidth="26"
        />
        <path
          className={styles.roadDash}
          d="M-20 250 C 120 235, 240 260, 380 230 S 580 200, 640 215"
          fill="none"
          strokeWidth="3"
          strokeDasharray="14 12"
        />
        <path
          className={styles.roadBase}
          d="M120 -20 C 140 90, 110 200, 150 360"
          fill="none"
          strokeWidth="16"
        />
        <path
          className={styles.roadBase}
          d="M330 -20 C 320 80, 350 180, 320 360"
          fill="none"
          strokeWidth="16"
        />
        <path
          className={styles.roadThin}
          d="M470 -20 C 480 100, 450 220, 490 360"
          fill="none"
          strokeWidth="10"
        />
        <path
          className={styles.roadThin}
          d="M-20 120 C 150 130, 400 105, 640 125"
          fill="none"
          strokeWidth="10"
        />
        <circle cx="330" cy="232" r="34" fill="rgba(185,124,63,0.14)" />
      </svg>
      <div className={styles.pin}>
        <Icon name="map-pin" size={40} color="var(--caramello)" />
        <span className={styles.pinLabel}>La Marsa</span>
      </div>
    </div>
  );
}

export function Trouver() {
  return (
    <section className={styles.section} data-fab-hide>
      <div className={styles.grid}>
        <div className={styles.infos}>
          <SectionHeading title="Nous trouver" />

          <div className={styles.exemple}>
            <span className={styles.exempleTag}>exemple</span>
            <div className={styles.infoRow}>
              <Icon name="map-pin" size={18} color="var(--taupe)" />
              <span className={styles.infoText}>
                12, rue de la Plage, La Marsa, Tunis
              </span>
            </div>
            <div className={styles.infoRow}>
              <Icon name="phone" size={18} color="var(--taupe)" />
              <span className={styles.infoText}>+216 29 481 736</span>
            </div>
            <div className={styles.infoRow}>
              <Icon name="instagram-logo" size={18} color="var(--taupe)" />
              <span className={styles.infoText}>@amoremio.tn</span>
            </div>
          </div>

          <HoursTable
            rows={[
              ["Lundi à jeudi", "11h00, 23h00"],
              ["Vendredi et samedi", "11h00, minuit"],
              ["Dimanche", "10h00, 23h00"],
            ]}
          />

          <div>
            <a
              className={styles.itineraire}
              href="https://www.google.com/maps/dir/?api=1&destination=Amore+Mio+La+Marsa+Tunis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="arrow-bend-up-right" size={16} />
              Itinéraire
            </a>
          </div>
        </div>

        <div className={styles.carte}>
          <MapStylisee />
          <img
            className={styles.repere}
            src={asset("/photos/4L0A7979.webp")}
            alt="Repère visuel, la façade Amore Mio"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
