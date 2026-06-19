"use client";

import { useRef } from "react";
import SafeImage from "@/components/shared/SafeImage";
import ScrollLink from "@/components/shared/ScrollLink";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Star,
  Users,
  Package,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { images, imageAlt } from "@/data/images";
import { BRAND } from "@/lib/constants";
import { heroVariants, heroTransition } from "@/lib/motion";
import { WHATSAPP_URL } from "@/lib/utils";

const heroStats = [
  { icon: Users, value: "10.000+", label: "Wisatawan Puas" },
  { icon: Star, value: "4.9/5", label: "Rating Google" },
  { icon: Package, value: "500+", label: "Paket Aktif" },
  { icon: MapPin, value: "50+", label: "Destinasi" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.25]);

  return (
    <section
      ref={ref}
      id="beranda"
      className="relative flex min-h-[88svh] items-center overflow-hidden lg:min-h-[100svh]"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ y: imageY }}>
        <div className="hero-bg-zoom absolute inset-0">
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
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-black/50" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(0,0,0,0.3),transparent_65%)]" />

      <motion.div
        style={{ y: contentY, opacity }}
        className="container-wide relative z-10 flex w-full flex-col justify-center px-4 pt-[5.5rem] pb-12 sm:px-6 sm:pt-32 sm:pb-20 lg:min-h-[100svh] lg:px-8 lg:pb-28"
      >
        <div className="mx-auto w-full max-w-3xl lg:mx-0">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
            }}
            className="text-center lg:text-left"
          >
            <motion.span
              variants={heroVariants}
              transition={heroTransition}
              className="mb-3 inline-block text-[10px] font-medium uppercase tracking-[0.2em] text-white/45 sm:mb-5 sm:text-[11px] lg:mb-6"
            >
              {BRAND.tagline}
            </motion.span>

            <motion.h1
              variants={heroVariants}
              transition={heroTransition}
              className="hero-headline type-hero-title text-white"
            >
              Liburan Indonesia,
              <span className="hero-headline-accent mt-1.5 block sm:mt-2">
                Dirancang &amp; Diurus untuk Anda
              </span>
            </motion.h1>

            <motion.p
              variants={heroVariants}
              transition={heroTransition}
              className="hero-subhead mx-auto mt-4 max-w-sm text-[15px] leading-[1.7] text-white/78 sm:mt-6 sm:max-w-xl sm:text-base sm:leading-[1.65] lg:mx-0 lg:mt-7 lg:max-w-lg lg:text-lg lg:leading-[1.7]"
            >
              Tiket, hotel, transport, dan itinerary kami urus. Anda tinggal
              berangkat.
            </motion.p>

            <motion.div
              variants={heroVariants}
              transition={heroTransition}
              className="relative z-20 mt-6 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:justify-center sm:gap-3 lg:mt-10 lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="hero-cta-primary type-btn h-12 w-full rounded-lg px-6 transition-all duration-200 active:scale-[0.98] sm:h-[3.25rem] sm:min-w-[260px] sm:px-8 sm:w-auto"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" />
                  Konsultasi Gratis via WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="hero-cta-secondary type-btn h-11 w-full rounded-lg border-white/15 bg-white/[0.04] px-6 font-medium text-white/85 transition-all duration-200 hover:border-white/25 hover:bg-white/8 hover:text-white active:scale-[0.98] sm:h-[3.25rem] sm:min-w-[200px] sm:px-8 sm:w-auto"
              >
                <ScrollLink sectionId="paket">
                  Jelajahi Paket Wisata
                  <ArrowRight className="size-3.5 opacity-50" />
                </ScrollLink>
              </Button>
            </motion.div>

            <motion.div
              variants={heroVariants}
              transition={{ ...heroTransition, delay: 0.05 }}
              className="mt-5 flex items-center justify-center gap-2 lg:mt-8 lg:justify-start"
            >
              <div className="flex gap-px">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-2.5 fill-white/60 text-white/60 sm:size-3"
                  />
                ))}
              </div>
              <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-white/38 sm:text-[10px]">
                Dipercaya wisatawan Indonesia
              </span>
            </motion.div>

            <motion.div
              variants={heroVariants}
              transition={{ ...heroTransition, delay: 0.1 }}
              className="hero-stats-card pointer-events-none mt-4 sm:mt-6 lg:mt-8"
            >
              <div className="grid grid-cols-2 gap-px rounded-lg bg-white/[0.05] p-px sm:rounded-xl lg:grid-cols-4">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center rounded-[7px] bg-white/[0.03] px-2 py-2.5 text-center sm:rounded-[11px] sm:px-3 sm:py-3 lg:py-3.5"
                  >
                    <p className="font-heading text-base leading-none tracking-[-0.02em] text-white/88 sm:text-lg lg:text-xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[8px] font-medium uppercase leading-snug tracking-wider text-white/38 sm:text-[9px] lg:text-[10px]">
                      {stat.label}
                    </p>
                    <stat.icon
                      className="mt-1.5 size-2.5 text-white/18 sm:mt-2 sm:size-3"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex flex-col items-center gap-2 text-white/25">
          <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="h-7 w-px bg-white/30"
          />
        </div>
      </motion.div>
    </section>
  );
}
