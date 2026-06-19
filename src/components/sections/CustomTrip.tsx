"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer, defaultViewport } from "@/lib/motion";
import { WHATSAPP_URL } from "@/lib/utils";

export default function CustomTrip() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const message = [
      "Halo Nusantara Trip, saya mau minta penawaran custom trip:",
      `Nama: ${form.get("nama")}`,
      `WhatsApp: ${form.get("whatsapp")}`,
      `Jumlah Peserta: ${form.get("peserta")}`,
      `Destinasi: ${form.get("destinasi")}`,
      `Tanggal: ${form.get("tanggal")}`,
      `Budget: ${form.get("budget")}`,
    ].join("\n");

    window.open(
      `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <section id="custom-trip" className="section-padding">
      <div className="container-wide">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-white to-secondary/5 ring-1 ring-border">
          <div className="grid lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center p-6 sm:p-10 lg:p-14"
            >
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-foreground">
                <Sparkles className="size-3.5" />
                Rancang Sendiri
              </div>
              <h2 className="font-heading text-3xl font-bold text-brand-text sm:text-4xl">
                Trip Sesuai Budget & Jadwal Anda
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Nggak cocok sama paket yang ada? Ceritain aja mau ke mana,
                berapa orang, dan budget-nya. Tim kami susun itinerary dalam
                1×24 jam — gratis, tanpa harus booking dulu.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Bisa ubah hotel, durasi, dan aktivitas
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Cocok buat honeymoon, kantor, atau keluarga besar
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Penawaran via WhatsApp, bukan form yang hilang
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={staggerContainer}
              className="bg-white p-6 sm:p-10 lg:p-14"
            >
              <motion.div variants={fadeInUp}>
                <Card className="border-0 shadow-lg ring-1 ring-border/50">
                  <CardContent className="p-6 sm:p-8">
                    {submitted ? (
                      <div className="py-8 text-center">
                        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Send className="size-6" />
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-brand-text">
                          Permintaan Sudah Masuk!
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          WhatsApp Anda akan terbuka dengan detail trip.
                          Admin kami lanjutkan negosiasi harga & jadwal.
                        </p>
                        <Button
                          variant="outline"
                          className="mt-6"
                          onClick={() => setSubmitted(false)}
                        >
                          Kirim Permintaan Lain
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <label
                            htmlFor="nama"
                            className="text-sm font-medium text-brand-text"
                          >
                            Nama
                          </label>
                          <Input
                            id="nama"
                            name="nama"
                            placeholder="Nama lengkap Anda"
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
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label
                              htmlFor="peserta"
                              className="text-sm font-medium text-brand-text"
                            >
                              Jumlah Peserta
                            </label>
                            <Input
                              id="peserta"
                              name="peserta"
                              type="number"
                              min={1}
                              placeholder="Contoh: 4"
                              required
                              className="h-11"
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="tanggal"
                              className="text-sm font-medium text-brand-text"
                            >
                              Tanggal Keberangkatan
                            </label>
                            <Input
                              id="tanggal"
                              name="tanggal"
                              type="date"
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
                            Mau Ke Mana?
                          </label>
                          <Input
                            id="destinasi"
                            name="destinasi"
                            placeholder="Contoh: Bali 4 hari, hotel dekat pantai"
                            required
                            className="h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="budget"
                            className="text-sm font-medium text-brand-text"
                          >
                            Budget per Orang
                          </label>
                          <Input
                            id="budget"
                            name="budget"
                            placeholder="Contoh: Rp 4–5 juta/orang"
                            required
                            className="h-11"
                          />
                        </div>
                        <Button type="submit" size="lg" className="w-full">
                          <Send className="size-4" />
                          Minta Itinerary via WhatsApp
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
