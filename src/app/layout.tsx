import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { BRAND } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.name} — Agen Wisata Indonesia Terpercaya`,
  description:
    "Paket wisata, open trip, dan private tour ke Bali, Labuan Bajo, Raja Ampat, Bromo, dan seluruh Indonesia. Harga transparan, berizin resmi.",
  openGraph: {
    title: `${BRAND.name} — Agen Wisata Indonesia Terpercaya`,
    description:
      "Temani perjalanan terbaik Anda menjelajahi Indonesia bersama Nusantara Trip.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full font-[family-name:var(--font-jakarta)]">
        {children}
      </body>
    </html>
  );
}
