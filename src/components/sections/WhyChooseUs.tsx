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
    title: "Berizin dan Terpercaya",
    description:
      "Terdaftar resmi dan telah melayani ribuan wisatawan sejak 2012. Keamanan dan kenyamanan Anda adalah prioritas utama kami.",
  },
  {
    icon: Tag,
    title: "Harga Transparan",
    description:
      "Semua biaya dijelaskan sejak awal — tidak ada biaya tersembunyi. Anda tahu persis apa yang Anda bayar sebelum berangkat.",
  },
  {
    icon: Users,
    title: "Tim Berpengalaman",
    description:
      "Guide dan tour leader bersertifikat yang menguasai destinasi lokal, siap memberikan pengalaman wisata yang berkesan.",
  },
  {
    icon: CalendarClock,
    title: "Jadwal Fleksibel",
    description:
      "Private trip, open trip, atau custom itinerary — kami sesuaikan jadwal dan kebutuhan perjalanan Anda.",
  },
  {
    icon: Zap,
    title: "Pelayanan Cepat",
    description:
      "Respon WhatsApp rata-rata di bawah 30 menit pada jam operasional. Proses booking simpel dan tidak bertele-tele.",
  },
  {
    icon: Headphones,
    title: "Dukungan Selama Perjalanan",
    description:
      "Tim kami standby sebelum, selama, dan setelah trip. Ada kendala di lapangan? Langsung hubungi kami.",
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
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Keunggulan Kami
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            Kenapa Memilih Nusantara Trip?
          </h2>
          <p className="mt-4 text-white/65">
            Bukan sekadar agen tiket — kami partner perjalanan Anda yang
            memahami kebutuhan wisatawan Indonesia.
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
                    <h3 className="font-heading text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/60">
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
