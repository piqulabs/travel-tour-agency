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

export function formatPriceShort(amount: number): string {
  return `Rp${amount.toLocaleString("id-ID")}`;
}
