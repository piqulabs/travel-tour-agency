"use client";

import SafeImage from "@/components/shared/SafeImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { destinations } from "@/data/destinations";
import { imageAlt } from "@/data/images";
import {
  fadeInUp,
  staggerContainer,
  cardHover,
  defaultViewport,
} from "@/lib/motion";
import { formatPrice } from "@/lib/utils";

export default function Destinations() {
  return (
    <section id="destinasi" className="section-padding bg-muted/40">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          <span className="section-eyebrow">Destinasi</span>
          <h2 className="section-title mt-4">
            Ke Mana Anda Mau Berlibur Tahun Ini?
          </h2>
          <p className="section-desc mt-5">
            Enam destinasi paling sering dibooking pelanggan kami — dari
            weekend trip Bromo sampai sailing Komodo. Pilih, kami yang atur
            sisanya.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {destinations.map((destination) => (
            <motion.div key={destination.id} variants={fadeInUp}>
              <motion.div {...cardHover}>
                <Card className="premium-card group overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <SafeImage
                      src={destination.image}
                      alt={
                        imageAlt.destinations[
                          destination.slug as keyof typeof imageAlt.destinations
                        ]
                      }
                      category="destination"
                      context={`Destinations: ${destination.title}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="image-overlay-gradient absolute inset-0" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-1.5 text-white">
                        <MapPin className="size-4 text-secondary" />
                        <span className="text-lg font-semibold">
                          {destination.title}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="space-y-4 p-5">
                    <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {destination.description}
                    </p>
                    {destination.highlights && (
                      <div className="flex flex-wrap gap-1.5">
                        {destination.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center justify-between border-t pt-4">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Mulai dari
                        </p>
                        <p className="text-lg font-bold text-primary">
                          {formatPrice(destination.startingPrice)}
                        </p>
                      </div>
                      <Button asChild size="sm" variant="outline" className="gap-1 font-semibold">
                        <Link href="#open-trip">
                          Lihat Open Trip
                          <ArrowRight className="size-3.5" />
                        </Link>
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
