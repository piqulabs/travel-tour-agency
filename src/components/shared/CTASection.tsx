"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fadeInUp, defaultViewport } from "@/lib/motion";
import { cn, WHATSAPP_URL } from "@/lib/utils";

interface CTASectionProps {
  variant?: "primary" | "dark";
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
}

export default function CTASection({
  variant = "primary",
  title,
  description,
  primaryLabel,
  primaryHref = WHATSAPP_URL,
  secondaryLabel,
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 sm:py-20",
        isDark ? "bg-brand-text" : "bg-primary"
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.15),transparent_60%)]" />
      <div className="container-wide relative px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2
            className={cn(
              "font-heading text-2xl font-bold text-balance sm:text-3xl lg:text-4xl",
              "text-white"
            )}
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 min-w-[200px] bg-white text-primary hover:bg-white/90"
            >
              <a
                href={primaryHref}
                target={primaryHref.startsWith("http") ? "_blank" : undefined}
                rel={
                  primaryHref.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <MessageCircle className="size-4" />
                {primaryLabel}
              </a>
            </Button>
            {secondaryLabel && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 min-w-[200px] border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="#paket">
                  {secondaryLabel}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
