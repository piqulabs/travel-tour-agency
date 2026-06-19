"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Tag,
  Users,
  CalendarClock,
  Zap,
  Headphones,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  fadeInUp,
  staggerContainer,
  cardHover,
  defaultViewport,
} from "@/lib/motion";

const features = [
  {
    icon: BadgeCheck,
    title: "Berizin, Bukan Abal-Abal",
    description:
      "Terdaftar resmi Kemenparekraf. Sejak 2012 kami handle trip dari 2 orang sampai rombongan 40+ — tanpa drama di lapangan.",
  },
  {
    icon: Tag,
    title: "Harga Final di Awal",
    description:
      "Itinerary PDF lengkap sebelum Anda bayar DP. Nggak ada biaya mendadak untuk tiket masuk, parkir, atau makan tambahan.",
  },
  {
    icon: Users,
    title: "Guide yang Ngerti Lokal",
    description:
      "Guide kami orang asli destinasi — Flores, Bali, Papua. Bukan cuma bawa jalan, tapi cerita tempat yang nggak ada di Google.",
  },
  {
    icon: CalendarClock,
    title: "Open Trip atau Private",
    description:
      "Mau gabung grup biar hemat? Atau private buat keluarga? Jadwal dan fasilitas kami sesuaikan, bukan pakai template.",
  },
  {
    icon: Zap,
    title: "Admin WA Responsif",
    description:
      "Chat di jam kerja biasanya dibalas dalam 30 menit. Mau ubah hotel, tambah hari, atau ganti tanggal — tinggal bilang.",
  },
  {
    icon: Headphones,
    title: "Dampingan Sampai Pulang",
    description:
      "Ada kendala di bandara, hotel, atau kapal? Tim operasional standby 24 jam selama trip berlangsung.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="kenapa-kami" className="section-padding bg-brand-text text-white">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
            Kenapa Kami
          </span>
              <h2 className="font-heading text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl">
            Bukan Sekadar Jual Tiket
          </h2>
          <p className="mt-4 text-[15px] leading-[1.65] text-white/60 sm:text-base">
            Kami tim operasional di Jakarta yang tiap bulan sendiri ke destinasi.
            Yang kami jual: perjalanan yang beneran jalan sesuai rencana.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeInUp}>
              <motion.div {...cardHover}>
                <Card className="h-full border-white/10 bg-white/5 text-white shadow-none ring-0 backdrop-blur-sm transition-colors hover:bg-white/10">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/25 text-secondary">
                      <feature.icon className="size-6" />
                    </div>
                    <h3 className="font-sans text-base font-semibold leading-snug sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-[1.6] text-white/55">
                      {feature.description}
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
