"use client";

import type { ComponentProps } from "react";

import { scrollToSection } from "@/lib/utils";

type ScrollLinkProps = Omit<ComponentProps<"a">, "href"> & {
  sectionId: string;
};

export default function ScrollLink({
  sectionId,
  onClick,
  children,
  ...props
}: ScrollLinkProps) {
  return (
    <a
      href={`#${sectionId}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(sectionId);
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
