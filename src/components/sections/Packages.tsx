"use client";

import SafeImage from "@/components/shared/SafeImage";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { packages } from "@/data/packages";
import {
  fadeInUp,
  staggerContainer,
  premiumCardHover,
  buttonHover,
  defaultViewport,
} from "@/lib/motion";
import { formatPrice, WHATSAPP_URL } from "@/lib/utils";

const metaIconClass =
  "size-3.5 shrink-0 text-muted-foreground/70";
const metaTextClass = "text-sm text-muted-foreground";

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
          <h2 className="section-title mt-4">Paket Wisata Siap Berangkat</h2>
          <p className="section-desc mt-5">
            Durasi, lokasi, jadwal keberangkatan, dan harga — semua tertera
            jelas sebelum Anda booking.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {packages.map((pkg) => (
            <motion.div key={pkg.id} variants={fadeInUp}>
              <motion.div {...premiumCardHover} className="group h-full">
                <Card className="package-card flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <SafeImage
                      src={pkg.image}
                      alt={pkg.title}
                      category="package"
                      context={`Packages: ${pkg.title}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="image-overlay-gradient absolute inset-0" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
                        <MapPin
                          className="size-3.5 text-white/70"
                          strokeWidth={1.5}
                        />
                        {pkg.location}
                      </span>
                      <span className="rounded-md bg-white/15 px-2 py-0.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
                        {pkg.durationCode}
                      </span>
                    </div>
                  </div>

                  <CardContent className="flex flex-1 flex-col gap-5 p-6">
                    <div>
                      <h3 className="type-card-title text-brand-text">
                        {pkg.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-[1.6] text-muted-foreground">
                        {pkg.summary}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 border-y border-border/50 py-4">
                      <div className="flex items-center gap-2">
                        <Clock className={metaIconClass} strokeWidth={1.5} />
                        <span className={metaTextClass}>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className={metaIconClass} strokeWidth={1.5} />
                        <span className={metaTextClass}>{pkg.groupSize}</span>
                      </div>
                      <div className="col-span-2 flex items-center gap-2">
                        <Calendar className={metaIconClass} strokeWidth={1.5} />
                        <span className={metaTextClass}>{pkg.schedule}</span>
                      </div>
                    </div>

                    <ul className="space-y-1.5">
                      {pkg.highlights.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground before:mr-2 before:text-muted-foreground/40 before:content-['·']"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-col gap-4 border-t border-border/50 pt-5">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Mulai dari
                        </p>
                          <p className="type-price">
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
                          className="type-btn h-12 w-full rounded-xl bg-primary shadow-lg shadow-primary/20 hover:bg-primary/90"
                        >
                          <a
                            href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Halo Nusantara Trip, saya tertarik paket ${pkg.title} (${pkg.location}). Bisa kirim itinerary & info DP?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Pesan Sekarang
                            <ArrowRight className="size-4" />
                          </a>
                        </Button>
                      </motion.div>
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
