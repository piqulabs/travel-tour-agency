"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItem } from "@/types";
import { fadeInUp, defaultViewport } from "@/lib/motion";

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Gimana cara booking di Nusantara Trip?",
    answer:
      "Paling cepat lewat WhatsApp — kirim destinasi, tanggal, dan jumlah orang. Kami balas dengan PDF itinerary + rincian harga. Transfer DP 30%, langsung dapat voucher dan grup trip (kalau open trip). Bisa juga isi form kontak atau datang ke kantor di Gatot Subroto.",
  },
  {
    id: "2",
    question: "Bisa cicil pembayaran nggak?",
    answer:
      "Bisa. Standarnya DP 30% saat fix booking, pelunasan H-7 sebelum berangkat. Paket di atas Rp5 juta bisa cicil 2–3x tanpa bunga. Semua pembayaran dapat kwitansi resmi via email & WhatsApp.",
  },
  {
    id: "3",
    question: "Paketnya bisa diubah nggak?",
    answer:
      "Bisa banget. Ganti hotel, tambah hari, skip destinasi — semua bisa. Pakai form Custom Trip di bawah atau langsung chat admin. Kami revisi itinerary sampai Anda oke, baru bayar DP.",
  },
  {
    id: "4",
    question: "Kalau mau pindah tanggal gimana?",
    answer:
      "Reschedule gratis kalau dilapor H-14 sebelum berangkat dan masih ada kursi. Setelah itu, biaya admin Rp150.000/orang. Untuk force majeure (sakit, kecelakaan), hubungi kami — kami carikan solusi terbaik.",
  },
  {
    id: "5",
    question: "Ada private trip untuk grup kecil?",
    answer:
      "Ada, minimal 2 orang. Cocok buat honeymoon, anniversary, atau trip kantor. Harga per orang turun kalau pesertanya lebih banyak. Semua destinasi kami layani private — dari Bromo weekend sampai Raja Ampat 7 hari.",
  },
  {
    id: "6",
    question: "Bayarnya lewat apa aja?",
    answer:
      "Transfer BCA, Mandiri, BRI — atau e-wallet (GoPay, OVO, Dana, ShopeePay) dan QRIS. Nggak perlu datang ke kantor cuma buat bayar. Konfirmasi otomatis masuk ke WhatsApp Anda setelah transfer kami terima.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title mt-4">
            Yang Sering Ditanya Sebelum Booking
          </h2>
          <p className="section-desc mt-5">
            Jawaban singkat dari pengalaman ribuan trip kami. Masih bingung?
            Langsung chat — nggak perlu basa-basi.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="py-4 text-left text-base font-medium text-brand-text hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
