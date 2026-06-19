"use client";

import SafeImage from "@/components/shared/SafeImage";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default function GoogleReviews() {
  return (
    <section className="border-y border-border bg-muted/30 py-12 sm:py-16">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div className="flex items-center gap-4">
            <GoogleLogo />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Ulasan di Google
              </p>
              <div className="flex items-center gap-2">
                <span className="font-heading text-3xl font-bold text-brand-text">
                  {BRAND.googleRating}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({BRAND.googleReviews} ulasan)
                </span>
              </div>
            </div>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Dipercaya ribuan wisatawan di seluruh Indonesia untuk perjalanan
            domestik dan open trip.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {googleReviews.map((review) => (
            <motion.div key={review.id} variants={fadeInUp}>
              <motion.div {...cardHover} className="h-full">
                <Card className="h-full border border-border/80 bg-white shadow-sm">
                  <CardContent className="space-y-3 p-5">
                    <div className="flex items-center gap-3">
                      <div className="relative size-10 overflow-hidden rounded-full">
                        <SafeImage
                          src={review.avatar}
                          alt={review.name}
                          category="avatar"
                          context={`GoogleReview: ${review.name}`}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-brand-text">
                          {review.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {review.date}
                        </p>
                      </div>
                      <GoogleLogo />
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
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {review.review}
                    </p>
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
