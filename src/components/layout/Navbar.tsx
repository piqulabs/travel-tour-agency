"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Compass, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

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
  { label: "Destinasi", href: "#destinasi" },
  { label: "Paket Wisata", href: "#paket" },
  { label: "Open Trip", href: "#open-trip" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-white/90 shadow-sm backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container-wide flex h-16 items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link href="#beranda" className="group flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20 transition-transform group-hover:scale-105">
            <Compass className="size-4" />
          </span>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-heading text-base font-bold leading-none tracking-tight transition-colors sm:text-lg",
                scrolled ? "text-brand-text" : "text-white"
              )}
            >
              {BRAND.name}
            </span>
            <span
              className={cn(
                "text-[10px] font-medium transition-colors",
                scrolled ? "text-muted-foreground" : "text-white/70"
              )}
            >
              Berizin · Sejak 2012
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                scrolled ? "text-brand-text/80" : "text-white/90"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden bg-[#25D366] text-white shadow-sm hover:bg-[#20bd5a] sm:inline-flex"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <MessageCircle className="size-4" />
              Tanya Jadwal
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "lg:hidden",
                  scrolled
                    ? "text-brand-text hover:bg-muted"
                    : "text-white hover:bg-white/10"
                )}
                aria-label="Buka menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <SheetHeader>
                <SheetTitle className="font-heading text-xl">
                  {BRAND.name}
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3.5 text-base font-medium text-brand-text transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Button
                  asChild
                  className="mt-4 w-full bg-[#25D366] text-white hover:bg-[#20bd5a]"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    <MessageCircle className="size-4" />
                    Chat — Tanya Jadwal
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
