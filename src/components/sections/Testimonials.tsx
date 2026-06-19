"use client";

import SafeImage from "@/components/shared/SafeImage";
import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import {
  fadeInUp,
  staggerContainer,
  cardHover,
  defaultViewport,
} from "@/lib/motion";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${
            i < rating ? "fill-accent text-accent" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimoni" className="section-padding">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="section-header mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <span className="section-eyebrow">Testimoni</span>
          <h2 className="section-title mt-4">
            Apa Kata Mereka Setelah Pulang
          </h2>
          <p className="section-desc mt-5">
            Bukan testimoni fiktif — ini cerita tamu yang sudah trip bareng
            kami. Nama, kota, dan detailnya asli.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={fadeInUp}>
              <motion.div {...cardHover} className="h-full">
                <Card className="premium-card relative h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                  <CardContent className="flex h-full flex-col gap-4 p-7">
                    <Quote className="size-8 text-primary/15" />
                    <p className="flex-1 text-[15px] leading-[1.65] text-muted-foreground sm:text-sm sm:leading-[1.7]">
                      &ldquo;{testimonial.review}&rdquo;
                    </p>
                    <StarRating rating={testimonial.rating} />
                    <div className="flex items-center gap-3 border-t border-border/60 pt-5">
                      <div className="relative size-12 overflow-hidden rounded-full ring-2 ring-primary/15">
                        <SafeImage
                          src={testimonial.image}
                          alt={testimonial.name}
                          category="avatar"
                          context={`Testimonial: ${testimonial.name}`}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <p className="font-sans text-sm font-semibold text-brand-text">
                            {testimonial.name}
                          </p>
                          <BadgeCheck className="size-4 shrink-0 text-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
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
