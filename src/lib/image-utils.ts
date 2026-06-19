/**
 * Utilitas gambar — fallback, logging dev, dan kategori konteks.
 */
import { images } from "@/data/images";

export type ImageCategory =
  | "hero"
  | "destination"
  | "package"
  | "gallery"
  | "avatar"
  | "open-trip";

export const IMAGE_FALLBACKS: Record<ImageCategory, string> = {
  hero: images.fallback.travel,
  destination: images.fallback.destination,
  package: images.fallback.destination,
  gallery: images.fallback.gallery,
  avatar: images.fallback.avatar,
  "open-trip": images.fallback.destination,
};

export function isLocalImage(src: string): boolean {
  return src.startsWith("/") && !src.startsWith("//");
}

export function getFallbackForCategory(category: ImageCategory): string {
  return IMAGE_FALLBACKS[category];
}

export function logImageError(
  src: string,
  context: string,
  details?: Record<string, unknown>
): void {
  if (process.env.NODE_ENV === "development") {
    console.error(
      `[Image Error] Gagal memuat gambar`,
      { src, context, ...details }
    );
  }
}

export function logImageFallback(
  originalSrc: string,
  fallbackSrc: string,
  context: string
): void {
  if (process.env.NODE_ENV === "development") {
    console.warn(
      `[Image Fallback] Menggunakan gambar cadangan`,
      { originalSrc, fallbackSrc, context }
    );
  }
}

/** Semua URL gambar yang dirender di website — untuk audit dev. */
export function getAllImageUrls(): { src: string; context: string }[] {
  const entries: { src: string; context: string }[] = [
    { src: images.hero, context: "Hero / Stats background" },
    { src: images.fallback.travel, context: "Fallback travel" },
    { src: images.fallback.destination, context: "Fallback destination" },
    { src: images.fallback.gallery, context: "Fallback gallery" },
    { src: images.fallback.avatar, context: "Fallback avatar" },
  ];

  Object.entries(images.destinations).forEach(([key, src]) => {
    entries.push({ src, context: `Destination: ${key}` });
  });

  images.gallery.forEach((src, i) => {
    entries.push({ src, context: `Gallery: ${i + 1}` });
  });

  images.avatars.forEach((src, i) => {
    entries.push({ src, context: `Avatar: ${i + 1}` });
  });

  return entries;
}
