"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileCheck, CreditCard, Plane } from "lucide-react";

import type { BookingStep } from "@/types";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/motion";

const steps: BookingStep[] = [
  {
    id: "1",
    step: 1,
    title: "Konsultasi & Pilih Paket",
    description:
      "Hubungi kami via WhatsApp atau form kontak. Ceritakan destinasi, tanggal, dan jumlah peserta — tim kami bantu pilih paket terbaik.",
  },
  {
    id: "2",
    step: 2,
    title: "Konfirmasi Itinerary",
    description:
      "Review detail perjalanan, fasilitas, dan harga. Semua transparan sebelum Anda memutuskan untuk booking.",
  },
  {
    id: "3",
    step: 3,
    title: "Pembayaran & Konfirmasi",
    description:
      "Bayar via transfer bank atau e-wallet. Setelah DP masuk, Anda langsung dapat voucher dan jadwal keberangkatan.",
  },
  {
    id: "4",
    step: 4,
    title: "Berangkat & Nikmati",
    description:
      "Tinggal siapkan koper dan datang ke titik kumpul. Tim kami dampingi selama perjalanan hingga kembali ke rumah.",
  },
];

const stepIcons = [MessageSquare, FileCheck, CreditCard, Plane];

export default function BookingSteps() {
  return (
    <section id="cara-booking" className="section-padding bg-muted/40">
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
            Cara Booking
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-text sm:text-4xl">
            Mudah dalam 4 Langkah
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Proses pemesanan yang simpel dan cepat — dari konsultasi pertama
            hingga Anda berangkat liburan.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />

          {steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.div
                key={step.id}
                variants={fadeInUp}
                className="relative text-center"
              >
                <div className="relative mx-auto mb-6 flex size-16 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-primary/10" />
                  <div className="relative flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                    <Icon className="size-6" />
                  </div>
                  <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-brand-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
