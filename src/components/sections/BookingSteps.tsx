"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileCheck, CreditCard, Plane } from "lucide-react";

import type { BookingStep } from "@/types";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/motion";

const steps: BookingStep[] = [
  {
    id: "1",
    step: 1,
    title: "Chat & Pilih Trip",
    description:
      "Kirim destinasi, tanggal, dan jumlah orang lewat WhatsApp. Admin bantu pilih open trip atau private — sesuai budget Anda.",
  },
  {
    id: "2",
    step: 2,
    title: "Cek Itinerary PDF",
    description:
      "Kami kirim rincian hari per hari, fasilitas, dan total biaya. Revisi sampai pas — baru lanjut bayar.",
  },
  {
    id: "3",
    step: 3,
    title: "Transfer DP",
    description:
      "DP 30% via transfer atau e-wallet. Langsung dapat voucher, info titik kumpul, dan nomor guide.",
  },
  {
    id: "4",
    step: 4,
    title: "Berangkat",
    description:
      "Datang ke titik kumpul dengan koper siap. Sisanya — transport, makan, tiket — kami yang handle.",
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
          <span className="section-eyebrow">Cara Booking</span>
          <h2 className="section-title mt-4">
            Dari Chat sampai Berangkat — 4 Langkah
          </h2>
          <p className="section-desc mt-5">
            Nggak perlu ke kantor. Kebanyakan tamu kami fix booking cuma lewat
            WhatsApp dalam satu hari.
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
                <h3 className="font-sans text-lg font-semibold text-brand-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.6] text-muted-foreground">
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
