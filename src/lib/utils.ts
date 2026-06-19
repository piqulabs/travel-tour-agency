import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { BRAND } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export const WHATSAPP_URL = `https://wa.me/${BRAND.whatsapp}`;

/** Fixed navbar height — keep in sync with Navbar h-[4.75rem] */
export const NAVBAR_OFFSET_PX = 76;

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export function formatPriceShort(amount: number): string {
  return `Rp${amount.toLocaleString("id-ID")}`;
}
