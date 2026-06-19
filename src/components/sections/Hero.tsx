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
  { icon: Users, value: "10.000+", label: "Wisatawan Puas" },
  { icon: Star, value: "4.9/5", label: "Rating Wisatawan" },
  { icon: Package, value: "500+", label: "Paket Perjalanan" },
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
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

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

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(20,184,166,0.12),transparent_55%)]" />

      <motion.div
        style={{ y: contentY, opacity }}
        className="container-wide relative z-10 flex w-full flex-col items-center px-4 pt-28 pb-32 sm:px-6 sm:pt-32 lg:min-h-[100svh] lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8 lg:pb-24"
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
          className="max-w-2xl text-center lg:text-left"
        >
          <motion.div
            variants={heroVariants}
            transition={heroTransition}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-md"
          >
            <MapPin className="size-4 text-accent" />
            {BRAND.tagline}
          </motion.div>

          <motion.p
            variants={heroVariants}
            transition={heroTransition}
            className="mb-3 font-heading text-sm font-medium uppercase tracking-[0.25em] text-secondary sm:text-base"
          >
            Liburan Indonesia, Level Premium
          </motion.p>

          <motion.h1
            variants={heroVariants}
            transition={heroTransition}
            className="font-heading text-[2.25rem] font-bold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-7xl"
          >
            Rasakan Keindahan
            <span className="mt-2 block bg-gradient-to-r from-white via-secondary/90 to-white bg-clip-text text-transparent">
              Nusantara Tanpa Ribet
            </span>
          </motion.h1>

          <motion.p
            variants={heroVariants}
            transition={heroTransition}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg lg:mx-0 lg:mt-7 lg:text-xl lg:leading-relaxed"
          >
            Open trip, private tour, atau paket keluarga — tiket, hotel,
            transport, dan guide kami yang urus. Anda tinggal berangkat.
          </motion.p>

          <motion.div
            variants={heroVariants}
            transition={heroTransition}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start lg:mt-10"
          >
            <motion.div {...buttonHover} className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-xl bg-primary px-8 text-base font-bold shadow-xl shadow-primary/35 hover:bg-primary/90 sm:min-w-[240px]"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi Gratis via WhatsApp
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </motion.div>
            <motion.div {...buttonHover} className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 w-full rounded-xl border-white/30 bg-white/8 px-8 text-base font-semibold text-white backdrop-blur-md hover:bg-white/15 hover:text-white sm:min-w-[240px]"
              >
                <Link href="#open-trip">
                  Tanyakan Jadwal Keberangkatan
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: cardY }}
          className="hero-glass-card mt-14 w-full max-w-md lg:mt-0 lg:shrink-0"
        >
          <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-3.5 fill-white/80 text-white/80"
                />
              ))}
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              Dipercaya Wisatawan Indonesia
            </p>
          </div>

          <div className="grid grid-cols-3 divide-x divide-white/10">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-2 py-1 text-center first:pl-0 last:pr-0 sm:px-3"
              >
                <p className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[10px] font-medium uppercase leading-snug tracking-wider text-white/45 sm:text-[11px]">
                  {stat.label}
                </p>
                <stat.icon
                  className="mt-3 size-3.5 text-white/25"
                  strokeWidth={1.5}
                  aria-hidden
                />
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
        <div className="flex flex-col items-center gap-2 text-white/35">
          <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-8 w-px bg-white/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
