"use client";

import { useRef } from "react";
import SafeImage from "@/components/shared/SafeImage";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Star,
  Users,
  Package,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { images, imageAlt } from "@/data/images";
import { BRAND } from "@/lib/constants";
import { heroVariants, heroTransition, buttonHover } from "@/lib/motion";
import { WHATSAPP_URL } from "@/lib/utils";

const heroStats = [
  { icon: Users, value: "10.000+", label: "Trip Selesai" },
  { icon: Star, value: "4.9/5", label: "Ulasan Google" },
  { icon: Package, value: "500+", label: "Itinerary Aktif" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={ref}
      id="beranda"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 scale-110" style={{ y: imageY }}>
        <SafeImage
          src={images.hero}
          alt={imageAlt.hero}
          category="hero"
          context="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

      <motion.div
        style={{ y: contentY, opacity }}
        className="container-wide relative z-10 flex w-full flex-col items-center px-4 pt-28 pb-32 sm:px-6 sm:pt-32 lg:min-h-[100svh] lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:px-8 lg:pb-24"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: {
              transition: { staggerChildren: 0.14, delayChildren: 0.15 },
            },
          }}
          className="max-w-3xl text-center lg:text-left"
        >
          <motion.div
            variants={heroVariants}
            transition={heroTransition}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-medium text-white/95 backdrop-blur-md"
          >
            <MapPin className="size-4 text-accent" />
            {BRAND.tagline}
          </motion.div>

          <motion.h1
            variants={heroVariants}
            transition={heroTransition}
            className="font-heading text-[2rem] font-bold leading-[1.1] tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl"
          >
            Jelajahi Indonesia,
            <span className="mt-1 block bg-gradient-to-r from-white via-white to-secondary bg-clip-text text-transparent">
              Tanpa Ribet dari Awal sampai Pulang
            </span>
          </motion.h1>

          <motion.p
            variants={heroVariants}
            transition={heroTransition}
            className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/88 sm:text-lg lg:mx-0 lg:text-xl lg:leading-relaxed"
          >
            Open trip, paket keluarga, atau private tour — kami urus tiket,
            hotel, transport, dan guide. Anda tinggal siapkan koper.
          </motion.p>

          <motion.div
            variants={heroVariants}
            transition={heroTransition}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.div {...buttonHover} className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-xl bg-primary px-8 text-base font-semibold shadow-lg shadow-primary/30 hover:bg-primary/90 sm:min-w-[220px]"
              >
                <Link href="#paket">
                  Lihat Paket & Harga
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div {...buttonHover} className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 w-full rounded-xl border-white/35 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md hover:bg-white/20 hover:text-white sm:min-w-[220px]"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tanya Jadwal via WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card mt-12 w-full max-w-md lg:mt-0 lg:shrink-0"
        >
          <div className="mb-4 flex items-center gap-2 border-b border-white/15 pb-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-4 fill-accent text-accent"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-white">
              Dipercaya 10.000+ Wisatawan Sejak 2012
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto mb-2 flex size-9 items-center justify-center rounded-lg bg-white/15">
                  <stat.icon className="size-4 text-secondary" />
                </div>
                <p className="text-lg font-bold text-white sm:text-xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-white/65 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
            Jelajah
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-8 w-px bg-white/50"
          />
        </div>
      </motion.div>
    </section>
  );
}
