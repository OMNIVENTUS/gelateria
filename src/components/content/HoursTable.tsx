import styles from "./HoursTable.module.css";

/**
 * HoursTable — tableau horaires. Porté depuis parts.jsx.
 * rows : [jour, horaire]. « Fermé » rendu en taupe.
 */
export type HoursTableProps = {
  rows: ReadonlyArray<readonly [string, string]>;
};

export function HoursTable({ rows }: HoursTableProps) {
  return (
    <div className={styles.table}>
      {rows.map(([day, hours]) => (
        <div key={day} className={styles.row}>
          <span className={styles.day}>{day}</span>
          <span className={`${styles.hours} ${hours === "Fermé" ? styles.closed : ""}`}>
            {hours}
          </span>
        </div>
      ))}
    </div>
  );
}
