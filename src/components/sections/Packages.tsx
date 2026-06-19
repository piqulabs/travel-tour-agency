"use client";

import SafeImage from "@/components/shared/SafeImage";
import { motion } from "framer-motion";
import { Check, Clock, MapPin, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { packages } from "@/data/packages";
import {
  fadeInUp,
  staggerContainer,
  cardHover,
  defaultViewport,
} from "@/lib/motion";
import { formatPrice, WHATSAPP_URL } from "@/lib/utils";

export default function Packages() {
  return (
    <section id="paket" className="section-padding">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Paket Wisata
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-text sm:text-4xl">
            Paket Perjalanan Pilihan Terbaik
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Paket lengkap dengan harga transparan — sudah termasuk akomodasi,
            transport, dan aktivitas utama. Tinggal berangkat dan menikmati.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {packages.map((pkg) => (
            <motion.div key={pkg.id} variants={fadeInUp}>
              <motion.div {...cardHover} className="h-full">
                <Card className="premium-card relative flex h-full flex-col overflow-hidden">
                  {pkg.popular && (
                    <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow-sm">
                      <Sparkles className="size-3" />
                      Terfavorit
                    </div>
                  )}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <SafeImage
                      src={pkg.image}
                      alt={pkg.title}
                      category="package"
                      context={`Packages: ${pkg.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader className="pb-1">
                    <CardTitle className="font-heading text-lg leading-snug sm:text-xl">
                      {pkg.title}
                    </CardTitle>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="size-4 text-secondary" />
                      {pkg.duration}
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col gap-4">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Fasilitas
                      </p>
                      <ul className="space-y-1.5">
                        {pkg.facilities.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm"
                          >
                            <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        <MapPin className="size-3" />
                        Destinasi yang Dikunjungi
                      </p>
                      <ul className="space-y-1.5">
                        {pkg.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-secondary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">Harga</p>
                        <p className="text-xl font-bold text-primary sm:text-2xl">
                          {formatPrice(pkg.price)}
                        </p>
                        <p className="text-xs text-muted-foreground">/ orang</p>
                      </div>
                      <Button asChild className="w-full sm:w-auto">
                        <a
                          href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Halo, saya tertarik paket ${pkg.title}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Pesan Sekarang
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
