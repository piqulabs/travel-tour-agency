"use client";

import ScrollLink from "@/components/shared/ScrollLink";
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
  eyebrow?: string;
}

export default function CTASection({
  variant = "primary",
  title,
  description,
  primaryLabel,
  primaryHref = WHATSAPP_URL,
  secondaryLabel,
  eyebrow,
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 sm:py-20 lg:py-24",
        isDark ? "bg-[#0a0f1a]" : "bg-primary"
      )}
    >
      {isDark ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-brand-text/40" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_35%,rgba(255,255,255,0.09),transparent_65%)]" />
        </>
      ) : (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
      )}

      <div className="container-wide relative px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {isDark && eyebrow && (
            <p className="cta-dark-eyebrow">{eyebrow}</p>
          )}

          <h2
            className={cn(
              "cta-title",
              isDark && "cta-dark-title"
            )}
          >
            {title}
          </h2>

          <p
            className={cn(
              "cta-desc mt-5 sm:mt-6",
              isDark && "max-w-md text-white/65"
            )}
          >
            {description}
          </p>

          <div
            className={cn(
              "mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4",
              isDark && "mt-9 sm:mt-10"
            )}
          >
            <Button
              asChild
              size="lg"
              className={cn(
                isDark
                  ? "cta-urgent-btn"
                  : "type-btn h-12 min-w-[200px] bg-white text-primary hover:bg-white/90"
              )}
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
                className="type-btn h-12 min-w-[200px] border-white/25 bg-transparent font-medium text-white/90 hover:bg-white/10 hover:text-white"
              >
                <ScrollLink sectionId="paket">
                  {secondaryLabel}
                  <ArrowRight className="size-4" />
                </ScrollLink>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
