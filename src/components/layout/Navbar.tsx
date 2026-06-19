"use client";

import { useEffect, useState } from "react";
import { Menu, Compass, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import ScrollLink from "@/components/shared/ScrollLink";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BRAND } from "@/lib/constants";
import { cn, WHATSAPP_URL } from "@/lib/utils";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Open Trip", href: "#open-trip" },
  { label: "Destinasi", href: "#destinasi" },
  { label: "Paket Wisata", href: "#paket" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/40 bg-white/85 shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur-xl"
          : "bg-gradient-to-b from-black/50 via-black/20 to-transparent backdrop-blur-[6px]"
      )}
    >
      <nav className="container-wide flex h-[4.25rem] items-center justify-between gap-6 px-4 sm:h-[4.75rem] sm:px-6 lg:px-8">
        <ScrollLink
          sectionId="beranda"
          className="group flex shrink-0 items-center gap-3"
        >
          <span
            className={cn(
              "flex size-9 items-center justify-center rounded-lg transition-all duration-300 sm:size-10",
              scrolled
                ? "bg-primary text-white shadow-sm"
                : "border border-white/15 bg-white/10 text-white backdrop-blur-sm"
            )}
          >
            <Compass className="size-4" strokeWidth={1.75} />
          </span>
          <div className="flex flex-col gap-0.5">
            <span
              className={cn(
                "type-nav-brand transition-colors",
                scrolled ? "text-brand-text" : "text-white"
              )}
            >
              {BRAND.name}
            </span>
            <span
              className={cn(
                "font-sans text-[10px] font-medium tracking-[0.04em] transition-colors",
                scrolled ? "text-muted-foreground" : "text-white/50"
              )}
            >
              Berizin · Sejak 2012
            </span>
          </div>
        </ScrollLink>

        <div className="hidden items-center gap-8 xl:gap-9 lg:flex">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.href}
              sectionId={link.href.slice(1)}
              className={cn(
                "font-sans text-[13px] font-medium tracking-[0.01em] transition-colors duration-200",
                scrolled
                  ? "text-brand-text/70 hover:text-brand-text"
                  : "text-white/75 hover:text-white"
              )}
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            asChild
            size="sm"
            className="hidden h-9 rounded-lg bg-[#25D366] px-4 text-[13px] font-semibold text-white shadow-sm hover:bg-[#20bd5a] sm:inline-flex"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <MessageCircle className="size-3.5" />
              Konsultasi Gratis
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "size-9 rounded-lg lg:hidden",
                  scrolled
                    ? "text-brand-text hover:bg-muted"
                    : "text-white hover:bg-white/10"
                )}
                aria-label="Buka menu"
              >
                <Menu className="size-5" strokeWidth={1.5} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <SheetHeader>
                <SheetTitle className="type-nav-brand text-xl">
                  {BRAND.name}
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-0.5 px-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <ScrollLink
                      sectionId={link.href.slice(1)}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3.5 text-[15px] font-medium text-brand-text transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </ScrollLink>
                  </motion.div>
                ))}
                <Button
                  asChild
                  className="mt-5 h-11 w-full rounded-lg bg-[#25D366] text-white hover:bg-[#20bd5a]"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    <MessageCircle className="size-4" />
                    Konsultasi Gratis via WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
