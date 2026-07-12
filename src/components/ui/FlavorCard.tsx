import { Badge } from "./Badge";
import styles from "./FlavorCard.module.css";

/**
 * FlavorCard — entrée de carte. API verrouillée :
 * name | subtitle | description | color | price | tags | image | layout.
 * layout 'row' = ligne à pointillés (prix tabular) ; 'tile' = carte photo.
 */
export type FlavorCardProps = {
  name: string;
  subtitle?: string;
  description?: string;
  color?: string;
  price?: string;
  tags?: string[];
  image?: string;
  layout?: "row" | "tile";
};

export function FlavorCard({
  name,
  subtitle,
  description,
  color,
  price,
  tags,
  image,
  layout = "row",
}: FlavorCardProps) {
  if (layout === "tile") {
    return (
      <article className={styles.tile}>
        {image && (
          <div className={styles.tileImageWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.tileImage} src={image} alt={name} />
          </div>
        )}
        <div className={styles.tileBody}>
          <div className={styles.tileHead}>
            <h3 className={styles.tileName}>
              {name}
              {subtitle && <em className={styles.subtitle}> {subtitle}</em>}
            </h3>
            {price && <span className={styles.price}>{price}</span>}
          </div>
          {description && <p className={styles.tileDesc}>{description}</p>}
          {tags && tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((t) => (
                <Badge key={t} tone="muted">
                  {t}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <div className={styles.row}>
      <div className={styles.rowHead}>
        <span className={styles.name}>
          {color && (
            <span
              className={styles.dotColor}
              style={{ background: color }}
              aria-hidden
            />
          )}
          {name}
          {subtitle && <em className={styles.subtitle}>{subtitle}</em>}
        </span>
        <span className={styles.leader} aria-hidden />
        {price && <span className={styles.price}>{price}</span>}
      </div>
      {description && <p className={styles.desc}>{description}</p>}
      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((t) => (
            <Badge key={t} tone="outline">
              {t}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
