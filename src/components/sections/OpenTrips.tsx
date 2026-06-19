"use client";

import SafeImage from "@/components/shared/SafeImage";
import { motion } from "framer-motion";
import { Calendar, Users, Flame } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openTrips } from "@/data/openTrips";
import type { OpenTripBadge } from "@/types";
import {
  fadeInUp,
  staggerContainer,
  premiumCardHover,
  buttonHover,
  defaultViewport,
} from "@/lib/motion";
import { formatPrice, WHATSAPP_URL } from "@/lib/utils";
import { cn } from "@/lib/utils";

const BADGE_CONFIG: Record<
  OpenTripBadge,
  { label: string; emoji: string; className: string }
> = {
  "best-seller": {
    label: "Best Seller",
    emoji: "🔥",
    className: "bg-gradient-to-r from-orange-500 to-red-500 text-white",
  },
  popular: {
    label: "Paling Diminati",
    emoji: "🎉",
    className: "bg-gradient-to-r from-violet-500 to-purple-600 text-white",
  },
  "this-week": {
    label: "Berangkat Minggu Ini",
    emoji: "📅",
    className: "bg-gradient-to-r from-primary to-teal-500 text-white",
  },
};

export default function OpenTrips() {
  return (
    <section
      id="open-trip"
      className="relative overflow-hidden border-y border-primary/10 bg-gradient-to-b from-primary/[0.04] via-white to-primary/[0.06] py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,118,110,0.08),transparent_60%)]" />
      <div className="container-wide relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <Flame className="size-3.5" />
            Open Trip
          </span>
          <h2 className="section-title mt-5 uppercase tracking-wide">
            Open Trip Paling Diminati
          </h2>
          <p className="section-desc mx-auto mt-5 max-w-2xl">
            Jadwal fix, harga hemat, sudah ada teman seperjalanan. Kuota
            terbatas — beberapa trip tinggal sisa beberapa kursi.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {openTrips.map((trip) => {
            const isLowSeats = trip.seatsLeft <= 4;
            const seatPercent =
              ((trip.totalSeats - trip.seatsLeft) / trip.totalSeats) * 100;

            return (
              <motion.div key={trip.id} variants={fadeInUp}>
                <motion.div {...premiumCardHover} className="group h-full">
                  <Card className="open-trip-card flex h-full flex-col overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <SafeImage
                        src={trip.image}
                        alt={trip.destination}
                        category="open-trip"
                        context={`OpenTrip: ${trip.destination}`}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="image-overlay-gradient absolute inset-0" />
                      <div className="absolute left-3 top-3 flex flex-col gap-1.5">
                        {trip.badges?.map((badge) => {
                          const config = BADGE_CONFIG[badge];
                          return (
                            <span
                              key={badge}
                              className={cn(
                                "inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold shadow-lg backdrop-blur-sm",
                                config.className
                              )}
                            >
                              <span>{config.emoji}</span>
                              {config.label}
                            </span>
                          );
                        })}
                        {isLowSeats && (
                          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-destructive px-2.5 py-1 text-[11px] font-bold text-white shadow-lg">
                            <span>⚡</span>
                            Sisa {trip.seatsLeft} Kursi
                          </span>
                        )}
                      </div>
                    </div>
                    <CardContent className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                      <h3 className="font-heading text-lg font-semibold leading-snug text-brand-text sm:text-xl">
                        {trip.destination}
                      </h3>

                      <div className="space-y-2.5 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="size-4 shrink-0 text-primary" />
                          <span className="font-medium text-brand-text/80">
                            {trip.departureDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="size-4 shrink-0 text-primary" />
                          <span>
                            Sisa{" "}
                            <strong className="text-brand-text">
                              {trip.seatsLeft}
                            </strong>{" "}
                            dari {trip.totalSeats} kursi
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-muted-foreground">
                            Kuota terisi
                          </span>
                          <span
                            className={cn(
                              isLowSeats
                                ? "text-destructive"
                                : "text-primary"
                            )}
                          >
                            {Math.round(seatPercent)}%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-muted">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all duration-500",
                              isLowSeats ? "bg-destructive" : "bg-primary"
                            )}
                            style={{ width: `${seatPercent}%` }}
                          />
                        </div>
                      </div>

                      <div className="mt-auto flex flex-col gap-4 border-t border-border/50 pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Mulai dari
                          </p>
                          <p className="font-heading text-2xl font-bold text-primary">
                            {formatPrice(trip.price)}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            per orang · all in
                          </p>
                        </div>
                        <motion.div {...buttonHover} className="sm:shrink-0">
                          <Button
                            asChild
                            size="lg"
                            className="h-11 w-full rounded-xl bg-primary px-6 font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 sm:w-auto"
                          >
                            <a
                              href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Halo Nusantara Trip, saya mau pesan open trip ${trip.destination} tanggal ${trip.departureDate}. Bisa info sisa kursi & cara DP?`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Pesan Sekarang
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
