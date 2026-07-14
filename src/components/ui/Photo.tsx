import type { CSSProperties } from "react";
import { photoSources } from "@/lib/photos";

/**
 * Photo — <img> responsive piloté par le manifeste (srcset + dimensions
 * intrinsèques). En static export (images.unoptimized), remplace next/image :
 * mobile télécharge un variant léger, le desktop Retina reçoit le net.
 *
 * `sizes` est obligatoire (sinon le srcset ne sert à rien). `priority` réserve
 * la photo LCP (hero) : eager + fetchPriority high ; sinon lazy.
 */
export type PhotoProps = {
  /** Nom canonique ("4L0A7979.webp") ou chemin ("/photos/4L0A7979.webp"). */
  file: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  objectPosition?: string;
};

export function Photo({
  file,
  alt,
  sizes,
  priority = false,
  className,
  objectPosition,
}: PhotoProps) {
  const { src, srcSet, width, height } = photoSources(file);
  const style: CSSProperties | undefined = objectPosition
    ? { objectPosition }
    : undefined;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      style={style}
    />
  );
}
