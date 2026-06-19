"use client";

import SafeImage from "@/components/shared/SafeImage";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
            i < rating
              ? "fill-accent text-accent"
              : "fill-muted text-muted"
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
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimoni
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-text sm:text-4xl">
            Cerita dari Para Wisatawan Kami
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Pengalaman nyata dari pelanggan yang sudah mempercayakan
            perjalanan mereka kepada Nusantara Trip.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={fadeInUp}>
              <motion.div {...cardHover} className="h-full">
                <Card className="premium-card relative h-full">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <Quote className="size-7 text-primary/20" />
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      &ldquo;{testimonial.review}&rdquo;
                    </p>
                    <StarRating rating={testimonial.rating} />
                    <div className="flex items-center gap-3 border-t pt-4">
                      <div className="relative size-12 overflow-hidden rounded-full ring-2 ring-primary/10">
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
                      <div>
                        <p className="font-semibold text-brand-text">
                          {testimonial.name}
                        </p>
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
