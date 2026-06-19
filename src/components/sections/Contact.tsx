"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { BRAND } from "@/lib/constants";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/motion";
import { WHATSAPP_URL } from "@/lib/utils";

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: BRAND.phone,
    href: WHATSAPP_URL,
  },
  {
    icon: Mail,
    label: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: MapPin,
    label: "Alamat Kantor",
    value: BRAND.address,
    href: null,
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: BRAND.hours,
    href: null,
  },
  {
    icon: Phone,
    label: "Telepon",
    value: BRAND.phone,
    href: `tel:${BRAND.phoneTel}`,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="section-padding bg-muted/40">
      <div className="container-wide">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >
          <span className="section-eyebrow">Hubungi Kami</span>
          <h2 className="section-title mt-4">
            Ada Pertanyaan? Langsung Chat
          </h2>
          <p className="section-desc mt-5">
            Admin kami online Senin–Sabtu, 09.00–18.00 WIB. Di luar jam itu
            tetap bisa kirim pesan — kami balas pagi harinya.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-6 lg:grid-cols-5 lg:gap-8"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <Card key={info.label} className="premium-card border-0 shadow-sm">
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <info.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={
                            info.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm font-medium text-brand-text transition-colors hover:text-primary"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium leading-relaxed text-brand-text">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Button
                asChild
                className="w-full bg-[#25D366] text-white shadow-md hover:bg-[#20bd5a]"
                size="lg"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5" />
                  Chat WhatsApp — Balas Cepat
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <Card className="premium-card overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="p-6 sm:p-8">
                    {submitted ? (
                      <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                        <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Send className="size-7" />
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-brand-text">
                          Pesan Diterima!
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Admin kami hubungi Anda via WhatsApp dalam 1×24 jam
                          kerja. Cek juga folder spam kalau pakai email.
                        </p>
                        <Button
                          variant="outline"
                          className="mt-6"
                          onClick={() => setSubmitted(false)}
                        >
                          Kirim Pesan Lain
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label
                              htmlFor="nama"
                              className="text-sm font-medium text-brand-text"
                            >
                              Nama Lengkap
                            </label>
                            <Input
                              id="nama"
                              name="nama"
                              placeholder="Masukkan nama Anda"
                              required
                              className="h-11"
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="whatsapp"
                              className="text-sm font-medium text-brand-text"
                            >
                              Nomor WhatsApp
                            </label>
                            <Input
                              id="whatsapp"
                              name="whatsapp"
                              type="tel"
                              placeholder="08xx xxxx xxxx"
                              required
                              className="h-11"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="destinasi"
                            className="text-sm font-medium text-brand-text"
                          >
                            Destinasi yang Diminati
                          </label>
                          <Input
                            id="destinasi"
                            name="destinasi"
                            placeholder="Bali, Labuan Bajo, Bromo..."
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="pesan"
                            className="text-sm font-medium text-brand-text"
                          >
                            Pesan
                          </label>
                          <Textarea
                            id="pesan"
                            name="pesan"
                            placeholder="Ceritakan rencana trip Anda — tanggal, jumlah orang, budget..."
                            required
                            className="min-h-28"
                          />
                        </div>
                        <Button type="submit" size="lg" className="w-full">
                          <Send className="size-4" />
                          Kirim & Tunggu Balasan
                        </Button>
                      </form>
                    )}
                  </div>

                  <div className="relative min-h-[280px] bg-muted lg:min-h-full">
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/15 to-secondary/15 p-6 text-center">
                      <MapPin className="size-10 text-primary" />
                      <p className="font-heading text-lg font-semibold text-brand-text">
                        Kantor Jakarta Selatan
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Konsultasi walk-in dengan appointment
                      </p>
                      <div className="mt-2 flex h-44 w-full max-w-xs items-center justify-center overflow-hidden rounded-xl border bg-white/60 backdrop-blur-sm">
                        <iframe
                          title="Lokasi kantor Nusantara Trip"
                          src="https://maps.google.com/maps?q=Gatot+Subroto+Jakarta&output=embed"
                          className="h-full w-full border-0"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
