"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Shield, Star, Users } from "lucide-react";

import { BRAND } from "@/lib/constants";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/motion";

const badges = [
  {
    icon: BadgeCheck,
    label: "Berizin Resmi",
    sub: "Kemenparekraf",
  },
  {
    icon: Star,
    label: `Rating ${BRAND.googleRating}`,
    sub: `${BRAND.googleReviews}+ Ulasan Google`,
  },
  {
    icon: Users,
    label: "10.000+",
    sub: "Wisatawan Puas",
  },
  {
    icon: Shield,
    label: "Pembayaran Aman",
    sub: "Transfer & E-Wallet",
  },
];

export default function TrustBadges() {
  return (
    <section className="border-b border-border bg-white py-6 sm:py-8">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.label}
              variants={fadeInUp}
              className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 px-4 py-3 sm:px-5 sm:py-4"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <badge.icon className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-brand-text">
                  {badge.label}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {badge.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
