"use client";

import { useCallback, useEffect, useState } from "react";
import Image, { type ImageProps } from "next/image";

import {
  type ImageCategory,
  getFallbackForCategory,
  isLocalImage,
  logImageError,
  logImageFallback,
} from "@/lib/image-utils";
import { cn } from "@/lib/utils";

export type SafeImageProps = Omit<ImageProps, "src" | "onError"> & {
  src: string;
  /** Kategori untuk memilih fallback yang relevan */
  category?: ImageCategory;
  /** Override fallback manual */
  fallbackSrc?: string;
  /** Label konteks untuk logging dev */
  context?: string;
  onError?: React.ReactEventHandler<HTMLImageElement>;
};

export default function SafeImage({
  src,
  category = "destination",
  fallbackSrc,
  context,
  className,
  alt,
  onError,
  unoptimized,
  ...props
}: SafeImageProps) {
  const resolvedFallback = fallbackSrc ?? getFallbackForCategory(category);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasFallenBack, setHasFallenBack] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasFallenBack(false);
    setShowPlaceholder(false);
  }, [src]);

  const handleError = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      logImageError(currentSrc, context ?? category, {
        fallback: resolvedFallback,
        hasFallenBack,
      });

      if (!hasFallenBack && currentSrc !== resolvedFallback) {
        logImageFallback(currentSrc, resolvedFallback, context ?? category);
        setCurrentSrc(resolvedFallback);
        setHasFallenBack(true);
      } else {
        setShowPlaceholder(true);
      }

      onError?.(event);
    },
    [
      category,
      context,
      currentSrc,
      hasFallenBack,
      onError,
      resolvedFallback,
    ]
  );

  const useUnoptimized =
    unoptimized ?? (isLocalImage(currentSrc) || isLocalImage(String(src)));

  if (showPlaceholder) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 text-primary/40",
          className
        )}
        style={
          props.fill
            ? { position: "absolute", inset: 0 }
            : {
                width: props.width ?? "100%",
                height: props.height ?? "100%",
              }
        }
      >
        <svg
          viewBox="0 0 24 24"
          className="size-12 opacity-50"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
          <circle cx="8.5" cy="10.5" r="1.5" fill="currentColor" stroke="none" />
          <path d="m3 16 5-5 4 4 5-6 4 5" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      className={className}
      unoptimized={useUnoptimized}
      onError={handleError}
    />
  );
}
