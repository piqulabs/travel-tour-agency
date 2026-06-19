import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { BRAND } from "@/lib/constants";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.name} — Paket Wisata & Open Trip Indonesia`,
  description:
    "Open trip Labuan Bajo, paket keluarga Bali, sunrise Bromo, Raja Ampat. Berizin sejak 2012, harga final di awal. Booking via WhatsApp.",
  openGraph: {
    title: `${BRAND.name} — Paket Wisata & Open Trip Indonesia`,
    description:
      "Agen wisata Jakarta — open trip, private tour, dan paket keluarga ke destinasi terbaik Indonesia. Booking via WhatsApp.",
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
      className={`${dmSerif.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
