/**
 * Resolves member image URLs for Vite.
 * - https?:// → unchanged (remote images)
 * - /path → served from `public/` (respects import.meta.env.BASE_URL)
 * Do not use ./relative paths — on routes like /members they resolve to the wrong URL.
 */
export function resolveImgSrc(img) {
  if (!img || typeof img !== "string") return "";
  const trimmed = img.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  const path = trimmed.startsWith("/") ? trimmed.slice(1) : trimmed;
  const base = import.meta.env.BASE_URL || "/";
  const baseNorm = base.endsWith("/") ? base : `${base}/`;
  return `${baseNorm}${path}`;
}
