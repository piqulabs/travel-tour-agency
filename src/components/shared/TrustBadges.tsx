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
  { icon: BadgeCheck, label: "Izin Kemenparekraf" },
  { icon: Tag, label: "Harga Final di Awal" },
  { icon: Shield, label: "Kwitansi & Invoice Resmi" },
  { icon: Zap, label: "Balas WA < 30 Menit" },
  { icon: Users, label: "Guide Lokal Bersertifikat" },
];

export default function TrustBadges() {
  return (
    <section className="border-b border-border/60 bg-white py-8 sm:py-10">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10"
        >
          {trustItems.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="flex items-center gap-2.5"
            >
              <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="size-4 text-primary" />
              </div>
              <span className="text-sm font-semibold text-brand-text">
                ✓ {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
