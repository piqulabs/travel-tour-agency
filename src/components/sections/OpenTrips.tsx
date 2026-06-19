"use client";

import SafeImage from "@/components/shared/SafeImage";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Calendar,
  Clock,
  MapPin,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openTrips } from "@/data/openTrips";
import {
  fadeInUp,
  staggerContainer,
  premiumCardHover,
  buttonHover,
  defaultViewport,
} from "@/lib/motion";
import { formatPrice, WHATSAPP_URL } from "@/lib/utils";
import { cn } from "@/lib/utils";

const metaIconClass =
  "size-3.5 shrink-0 text-muted-foreground/70";

export default function OpenTrips() {
  return (
    <section
      id="open-trip"
      className="relative overflow-hidden border-y border-border/60 bg-muted/30 py-20 sm:py-28"
    >
      <div className="container-wide relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <span className="section-eyebrow">Open Trip</span>
          <h2 className="section-title mt-4">Jadwal Keberangkatan</h2>
          <p className="section-desc mt-5">
            Tanggal, durasi, kuota, dan harga per trip — pilih jadwal yang
            sesuai lalu booking langsung.
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
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="image-overlay-gradient absolute inset-0" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
                          <MapPin
                            className="size-3.5 text-white/70"
                            strokeWidth={1.5}
                          />
                          {trip.location}
                        </span>
                        <span className="rounded-md bg-white/15 px-2 py-0.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
                          {trip.durationCode}
                        </span>
                      </div>
                      {isLowSeats && (
                        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                          <AlertCircle
                            className="size-3.5 text-white/80"
                            strokeWidth={1.5}
                          />
                          Sisa {trip.seatsLeft} kursi
                        </div>
                      )}
                    </div>

                    <CardContent className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                      <h3 className="type-card-title text-brand-text">
                        {trip.destination}
                      </h3>

                      <div className="space-y-2.5 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar
                            className={metaIconClass}
                            strokeWidth={1.5}
                          />
                          <span className="font-medium text-brand-text/80">
                            {trip.departureDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock
                            className={metaIconClass}
                            strokeWidth={1.5}
                          />
                          <span>{trip.durationCode}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users
                            className={metaIconClass}
                            strokeWidth={1.5}
                          />
                          <span>
                            Sisa {trip.seatsLeft} dari {trip.totalSeats} orang
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-medium text-muted-foreground">
                          <span>Kuota terisi</span>
                          <span
                            className={cn(
                              isLowSeats ? "text-destructive" : "text-primary"
                            )}
                          >
                            {Math.round(seatPercent)}%
                          </span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all duration-500",
                              isLowSeats ? "bg-destructive" : "bg-primary"
                            )}
                            style={{ width: `${seatPercent}%` }}
                          />
                        </div>
                      </div>

                      <div className="mt-auto flex flex-col gap-4 border-t border-border/50 pt-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Mulai dari
                          </p>
                          <p className="type-price">
                            {formatPrice(trip.price)}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            per orang
                          </p>
                        </div>
                        <motion.div {...buttonHover} className="sm:shrink-0">
                          <Button
                            asChild
                            size="lg"
                            className="type-btn h-11 w-full rounded-xl bg-primary px-6 hover:bg-primary/90 sm:w-auto"
                          >
                            <a
                              href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Halo Nusantara Trip, saya mau pesan open trip ${trip.destination} (${trip.departureDate}). Bisa info sisa kursi & cara DP?`)}`}
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
