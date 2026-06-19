import Link from "next/link";
import { Compass, Camera, Mail, Phone, MapPin } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { BRAND } from "@/lib/constants";
import { WHATSAPP_URL } from "@/lib/utils";

const footerLinks = {
  layanan: [
    { label: "Destinasi", href: "#destinasi" },
    { label: "Paket Wisata", href: "#paket" },
    { label: "Open Trip", href: "#open-trip" },
    { label: "Custom Trip", href: "#custom-trip" },
  ],
  perusahaan: [
    { label: "Kenapa Kami", href: "#kenapa-kami" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white">
      <div className="container-wide section-padding !pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="space-y-4">
            <Link href="#beranda" className="flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary">
                <Compass className="size-5 text-white" />
              </span>
              <div>
                <p className="font-heading text-xl font-bold">{BRAND.name}</p>
                <p className="text-xs text-white/55">{BRAND.tagline}</p>
              </div>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/65">
              Agen wisata berizin sejak 2012. Open trip, private tour, dan
              paket keluarga ke seluruh Indonesia — dihandle tim operasional
              di Jakarta, bukan reseller online.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-secondary hover:bg-secondary hover:text-white"
                aria-label="Media sosial"
              >
                <Camera className="size-4" />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-secondary hover:bg-secondary hover:text-white"
                aria-label="Email"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Layanan
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.layanan.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Perusahaan
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Kontak
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-secondary" />
                <a
                  href={`tel:${BRAND.phoneTel}`}
                  className="transition-colors hover:text-white"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-secondary" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="transition-colors hover:text-white"
                >
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. Hak cipta
            dilindungi.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a href="#" className="transition-colors hover:text-white">
              Kebijakan Privasi
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Syarat & Ketentuan
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
