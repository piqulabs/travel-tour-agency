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
    question: "Bagaimana cara melakukan pemesanan?",
    answer:
      "Anda bisa booking melalui WhatsApp, form kontak di website, atau datang langsung ke kantor kami. Tim kami akan mengirimkan detail paket, harga, dan cara pembayaran. Setelah DP masuk, booking langsung dikonfirmasi.",
  },
  {
    id: "2",
    question: "Apakah tersedia cicilan pembayaran?",
    answer:
      "Ya, kami menyediakan skema cicilan untuk paket tertentu. Umumnya DP 30% saat booking, pelunasan maksimal H-7 sebelum keberangkatan. Untuk paket premium, tersedia cicilan 2–3 kali. Hubungi tim kami untuk detail.",
  },
  {
    id: "3",
    question: "Apakah paket bisa disesuaikan?",
    answer:
      "Tentu saja. Semua paket bisa dikustomisasi — mulai dari pilihan hotel, durasi trip, hingga destinasi tambahan. Gunakan form 'Buat Perjalanan Sesuai Keinginan Anda' atau chat WhatsApp untuk konsultasi gratis.",
  },
  {
    id: "4",
    question: "Bagaimana jika ingin reschedule?",
    answer:
      "Reschedule bisa dilakukan maksimal H-14 sebelum keberangkatan, tergantung ketersediaan kursi dan akomodasi. Biaya administrasi reschedule Rp150.000 per orang. Hubungi tim kami secepatnya untuk proses reschedule.",
  },
  {
    id: "5",
    question: "Apakah tersedia private trip?",
    answer:
      "Ya, private trip tersedia untuk semua destinasi. Cocok untuk keluarga, rombongan kantor, atau honeymoon. Harga disesuaikan dengan jumlah peserta dan fasilitas yang diinginkan. Minimal 2 orang untuk private trip.",
  },
  {
    id: "6",
    question: "Metode pembayaran apa saja yang diterima?",
    answer:
      "Kami menerima transfer bank (BCA, Mandiri, BRI), e-wallet (GoPay, OVO, Dana, ShopeePay), dan QRIS. Semua pembayaran mendapat kwitansi resmi dan konfirmasi otomatis via WhatsApp.",
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
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Pertanyaan Umum
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-text sm:text-4xl">
            FAQ — Yang Sering Ditanyakan
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Jawaban untuk pertanyaan yang paling sering kami terima dari calon
            wisatawan. Masih ada pertanyaan? Langsung chat kami.
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
