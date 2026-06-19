"use client";

import SafeImage from "@/components/shared/SafeImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { images, imageAlt } from "@/data/images";
import { BRAND } from "@/lib/constants";
import { heroVariants, heroTransition } from "@/lib/motion";
import { WHATSAPP_URL } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/75" />

      <div className="container-wide relative z-10 px-4 pt-24 pb-16 text-center sm:px-6 sm:pt-28 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: {
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
          className="mx-auto max-w-4xl"
        >
          <motion.div
            variants={heroVariants}
            transition={heroTransition}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm"
          >
            <MapPin className="size-4 text-accent" />
            {BRAND.tagline}
          </motion.div>

          <motion.h1
            variants={heroVariants}
            transition={heroTransition}
            className="font-heading text-[1.75rem] font-bold leading-tight tracking-tight text-white text-balance sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Jelajahi Keindahan Indonesia
            <span className="block text-secondary">
              Bersama {BRAND.name}
            </span>
          </motion.h1>

          <motion.p
            variants={heroVariants}
            transition={heroTransition}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Nikmati pengalaman liburan yang nyaman, aman, dan berkesan ke
            berbagai destinasi terbaik di Indonesia bersama tim profesional yang
            siap membantu perjalanan Anda dari awal hingga akhir.
          </motion.p>

          <motion.div
            variants={heroVariants}
            transition={heroTransition}
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Button
              asChild
              size="lg"
              className="h-12 bg-primary px-8 text-base hover:bg-primary/90 sm:min-w-[200px]"
            >
              <Link href="#paket">
                Lihat Paket Wisata
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-white/30 bg-white/10 px-8 text-base text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:min-w-[200px]"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Konsultasi Gratis
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
