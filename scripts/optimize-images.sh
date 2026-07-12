#!/usr/bin/env bash
# Pipeline images (CLAUDE.md §5) : photos ~2000px → WebP retina (max 1400px) q80.
# Idempotent. Source = standalone_export/assets/photos ; sortie = public/photos.
set -euo pipefail

SRC="standalone_export/assets/photos"
OUT="public/photos"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

mkdir -p "$OUT"

# Photos réellement référencées par les planches v2.
PHOTOS=(
  4L0A7727 4L0A7778 4L0A7834 4L0A7910 4L0A7979
  4L0A8006-Edit 4L0A8078 4L0A8136-Edit 4L0A8175 4L0A8201
  4L0A8245 4L0A8296 4L0A8414 4L0A8422 IMG_9425 IMG_9461
)

for name in "${PHOTOS[@]}"; do
  in="$SRC/$name.jpg"
  out="$OUT/$name.webp"
  if [[ ! -f "$in" ]]; then echo "MISSING: $in" >&2; continue; fi
  sips -Z 1400 "$in" --out "$TMP/$name.jpg" >/dev/null
  cwebp -quiet -q 80 "$TMP/$name.jpg" -o "$out"
done

# OG image (1200×630) → public/ (SEO/OG, T6).
if [[ -f "standalone_export/export/og-image.jpg" ]]; then
  cp "standalone_export/export/og-image.jpg" "public/og-image.jpg"
fi

echo "=== résultat ==="
ls -1 "$OUT" | wc -l | tr -d ' ' | xargs echo "webp générés:"
du -sh "$OUT"
du -sh "$SRC"
