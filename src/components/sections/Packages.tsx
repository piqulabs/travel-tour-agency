"use client";

import SafeImage from "@/components/shared/SafeImage";
import { motion } from "framer-motion";
import { Check, Clock, MapPin, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { packages } from "@/data/packages";
import {
  fadeInUp,
  staggerContainer,
  premiumCardHover,
  buttonHover,
  defaultViewport,
} from "@/lib/motion";
import { formatPrice, WHATSAPP_URL } from "@/lib/utils";
import { cn } from "@/lib/utils";

const BADGE_CONFIG = {
  "best-seller": {
    label: "Paling Laris",
    emoji: "🔥",
    className: "bg-gradient-to-r from-orange-500 to-red-500 text-white",
  },
  favorit: {
    label: "Pilihan Tamu",
    emoji: "⭐",
    className: "bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-950",
  },
  promo: {
    label: "Harga Spesial",
    emoji: "⚡",
    className: "bg-gradient-to-r from-primary to-secondary text-white",
  },
} as const;

export default function Packages() {
  return (
    <section id="paket" className="section-padding bg-gradient-to-b from-white to-muted/30">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="section-header mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <span className="section-eyebrow">Paket Wisata</span>
          <h2 className="section-title mt-4">
            Paket Wisata Siap Berangkat
          </h2>
          <p className="section-desc mt-5">
            Harga sudah termasuk akomodasi, transport, dan aktivitas utama.
            Nggak ada biaya tersembunyi — semua kami jelasin di itinerary
            sebelum Anda transfer DP.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-7 md:grid-cols-2 xl:grid-cols-3"
        >
          {packages.map((pkg) => {
            const badge = pkg.badge ? BADGE_CONFIG[pkg.badge] : null;

            return (
              <motion.div key={pkg.id} variants={fadeInUp}>
                <motion.div {...premiumCardHover} className="group h-full">
                  <Card className="package-card relative flex h-full flex-col overflow-hidden">
                    {badge && (
                      <div
                        className={cn(
                          "absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold shadow-lg",
                          badge.className
                        )}
                      >
                        <span>{badge.emoji}</span>
                        {badge.label}
                      </div>
                    )}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <SafeImage
                        src={pkg.image}
                        alt={pkg.title}
                        category="package"
                        context={`Packages: ${pkg.title}`}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <CardHeader className="px-6 pb-2 pt-5">
                      <CardTitle className="font-heading text-xl leading-snug tracking-tight">
                        {pkg.title}
                      </CardTitle>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {pkg.summary}
                      </p>
                      <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="size-4 text-secondary" />
                        {pkg.duration}
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-5 px-6 pb-6">
                      <div>
                        <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-primary/80">
                          Fasilitas
                        </p>
                        <ul className="space-y-2">
                          {pkg.facilities.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm"
                            >
                              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-2.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary/80">
                          <MapPin className="size-3.5" />
                          Destinasi
                        </p>
                        <ul className="space-y-2">
                          {pkg.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground"
                            >
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-auto flex flex-col gap-4 border-t border-border/60 pt-5">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">
                            Mulai dari
                          </p>
                          <p className="font-heading text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                            {formatPrice(pkg.price)}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            per orang
                          </p>
                        </div>
                        <motion.div {...buttonHover}>
                          <Button
                            asChild
                            size="lg"
                            className="h-12 w-full rounded-xl bg-primary text-base font-semibold shadow-md shadow-primary/20 hover:bg-primary/90"
                          >
                            <a
                              href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Halo Nusantara Trip, saya tertarik paket ${pkg.title}. Bisa kirim itinerary lengkap & info DP?`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Amankan Kursi Saya
                              <ArrowRight className="size-4" />
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
