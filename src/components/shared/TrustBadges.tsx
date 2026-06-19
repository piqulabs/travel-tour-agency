"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Shield,
  Tag,
  Zap,
  Users,
} from "lucide-react";

import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/motion";

const trustItems = [
  { icon: BadgeCheck, label: "Berizin dan Terpercaya" },
  { icon: Tag, label: "Harga Transparan" },
  { icon: Users, label: "Tim Berpengalaman" },
  { icon: Zap, label: "Respon Cepat" },
  { icon: Shield, label: "Pembayaran Aman" },
];

export default function TrustBadges() {
  return (
    <section className="border-b border-border/60 bg-white py-6 sm:py-8">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-8"
        >
          {trustItems.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 px-3.5 py-2 sm:px-4"
            >
              <div className="flex size-7 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="size-3.5 text-primary" />
              </div>
              <span className="text-xs font-semibold text-brand-text sm:text-sm">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
