"use client";

import SafeImage from "@/components/shared/SafeImage";
import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { googleReviews } from "@/data/testimonials";
import { BRAND } from "@/lib/constants";
import {
  fadeInUp,
  staggerContainer,
  cardHover,
  defaultViewport,
} from "@/lib/motion";

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function GoogleReviews() {
  return (
    <section className="border-y border-border/60 bg-gradient-to-b from-muted/20 via-white to-muted/20 py-16 sm:py-20">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          <div className="inline-flex flex-col items-center rounded-2xl border border-border/60 bg-white px-8 py-6 shadow-lg shadow-black/5">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-6 fill-accent text-accent sm:size-7"
                />
              ))}
            </div>
            <p className="mt-3 font-heading text-4xl leading-none tracking-[-0.025em] text-brand-text sm:text-5xl">
              {BRAND.googleRating}
              <span className="text-2xl font-medium text-muted-foreground">
                /5
              </span>
            </p>
            <p className="mt-2 text-base font-medium text-muted-foreground">
              {BRAND.googleReviews} ulasan asli di Google Maps
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <GoogleLogo />
              <span>Rating dari tamu yang sudah berangkat</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {googleReviews.map((review) => (
            <motion.div key={review.id} variants={fadeInUp}>
              <motion.div {...cardHover} className="h-full">
                <Card className="h-full overflow-hidden rounded-2xl border border-border/50 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
                  <CardContent className="space-y-4 p-5">
                    <div className="flex items-start gap-3">
                      <div className="relative size-11 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/15">
                        <SafeImage
                          src={review.avatar}
                          alt={review.name}
                          category="avatar"
                          context={`GoogleReview: ${review.name}`}
                          fill
                          className="object-cover"
                          sizes="44px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <p className="truncate font-sans text-sm font-semibold text-brand-text">
                            {review.name}
                          </p>
                          {review.verified && (
                            <BadgeCheck className="size-4 shrink-0 text-primary" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {review.city}
                        </p>
                        <p className="text-[11px] text-muted-foreground/80">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`size-3.5 ${
                            i < review.rating
                              ? "fill-accent text-accent"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="line-clamp-4 text-sm leading-[1.65] text-muted-foreground">
                      &ldquo;{review.review}&rdquo;
                    </p>
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/8 px-2.5 py-1 text-[11px] font-semibold text-primary">
                        <BadgeCheck className="size-3" />
                        Tamu Resmi
                      </span>
                    )}
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
