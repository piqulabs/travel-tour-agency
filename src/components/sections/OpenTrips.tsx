"use client";

import SafeImage from "@/components/shared/SafeImage";
import { motion } from "framer-motion";
import { Calendar, Users, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { openTrips } from "@/data/openTrips";
import {
  fadeInUp,
  staggerContainer,
  cardHover,
  defaultViewport,
} from "@/lib/motion";
import { formatPrice, WHATSAPP_URL } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function OpenTrips() {
  return (
    <section id="open-trip" className="section-padding bg-muted/40">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="section-eyebrow">Open Trip</span>
          <h2 className="section-title mt-4">
            Jadwal Keberangkatan Terdekat
          </h2>
          <p className="section-desc mt-5">
            Mau liburan hemat tapi tetap rame? Gabung open trip kami — sudah
            ada teman seperjalanan, guide, dan itinerary fix. Tinggal pilih
            tanggal.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {openTrips.map((trip) => {
            const isLowSeats = trip.seatsLeft <= 3;
            const seatPercent =
              ((trip.totalSeats - trip.seatsLeft) / trip.totalSeats) * 100;

            return (
              <motion.div key={trip.id} variants={fadeInUp}>
                <motion.div {...cardHover} className="h-full">
                  <Card className="premium-card flex h-full flex-col overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <SafeImage
                        src={trip.image}
                        alt={trip.destination}
                        category="open-trip"
                        context={`OpenTrip: ${trip.destination}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {isLowSeats && (
                        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-destructive/90 px-2.5 py-1 text-xs font-semibold text-white">
                          <AlertCircle className="size-3" />
                          Sisa {trip.seatsLeft} kursi!
                        </div>
                      )}
                    </div>
                    <CardContent className="flex flex-1 flex-col gap-4 p-5">
                      <h3 className="font-heading text-lg font-semibold leading-snug text-brand-text">
                        {trip.destination}
                      </h3>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="size-4 shrink-0 text-primary" />
                          <span>Keberangkatan: {trip.departureDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="size-4 shrink-0 text-primary" />
                          <span>
                            Sisa {trip.seatsLeft} dari {trip.totalSeats} kursi
                          </span>
                        </div>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all",
                            isLowSeats ? "bg-destructive" : "bg-secondary"
                          )}
                          style={{ width: `${seatPercent}%` }}
                        />
                      </div>

                      <div className="mt-auto flex items-center justify-between border-t pt-4">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Mulai dari
                          </p>
                          <p className="text-xl font-bold text-primary">
                            {formatPrice(trip.price)}
                          </p>
                        </div>
                        <Button asChild size="sm">
                          <a
                            href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Halo Nusantara Trip, saya mau amankan kursi open trip ${trip.destination} tanggal ${trip.departureDate}. Bisa info sisa seat & cara DP?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Amankan Kursi
                          </a>
                        </Button>
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
