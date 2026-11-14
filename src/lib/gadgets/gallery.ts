export type GalleryDirection = -1 | 1;

export function normalizeImageIndex(index: number, imageCount: number): number {
  if (!Number.isInteger(imageCount) || imageCount <= 0) return -1;
  if (!Number.isFinite(index)) return 0;

  const normalized = Math.trunc(index) % imageCount;
  return normalized < 0 ? normalized + imageCount : normalized;
}

export function getAdjacentImageIndex(
  currentIndex: number,
  direction: GalleryDirection,
  imageCount: number,
): number {
  const current = normalizeImageIndex(currentIndex, imageCount);
  if (current === -1) return -1;
  return normalizeImageIndex(current + direction, imageCount);
}
