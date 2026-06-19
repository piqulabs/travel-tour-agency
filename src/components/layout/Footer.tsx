import { Compass, Camera, Mail, Phone, MapPin } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { BRAND } from "@/lib/constants";
import { WHATSAPP_URL } from "@/lib/utils";

const popularDestinations = [
  { label: "Bali", href: "#destinasi" },
  { label: "Labuan Bajo", href: "#destinasi" },
  { label: "Raja Ampat", href: "#destinasi" },
  { label: "Lombok", href: "#destinasi" },
  { label: "Bromo", href: "#destinasi" },
  { label: "Yogyakarta", href: "#destinasi" },
];

const popularPackages = [
  { label: "Open Trip", href: "#open-trip" },
  { label: "Private Trip", href: "#custom-trip" },
  { label: "Family Trip", href: "#paket" },
  { label: "Corporate Gathering", href: "#custom-trip" },
];

const companyLinks = [
  { label: "Kenapa Kami", href: "#kenapa-kami" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white">
      <div className="container-wide section-padding !pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="space-y-4 sm:col-span-2 lg:col-span-2">
            <a href="#beranda" className="flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
                <Compass className="size-5 text-white" />
              </span>
              <div>
                <p className="type-nav-brand text-xl text-white">{BRAND.name}</p>
                <p className="text-xs text-white/55">{BRAND.tagline}</p>
              </div>
            </a>
            <p className="max-w-sm text-sm leading-[1.65] text-white/65">
              Agen wisata berizin Kemenparekraf sejak 2012. Open trip, private
              tour, dan paket keluarga ke seluruh Indonesia — dihandle tim
              operasional di Jakarta.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-secondary hover:bg-secondary hover:text-white"
                aria-label="Instagram"
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
            <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white/85">
              Destinasi Populer
            </h3>
            <ul className="space-y-2.5">
              {popularDestinations.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-secondary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white/85">
              Paket Populer
            </h3>
            <ul className="space-y-2.5">
              {popularPackages.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-secondary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white/85">
              Perusahaan
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white/85">
              Kontak
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
                <span className="leading-relaxed">{BRAND.address}</span>
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

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} {BRAND.name}. Hak cipta
              dilindungi.
            </p>
            <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white/40">
              Demo Website Untuk Tour & Travel
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-5 text-sm text-white/50">
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
