"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/utils";

export default function MobileStickyCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-white/95 p-3 shadow-[0_-8px_32px_rgba(15,23,42,0.12)] backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2.5">
        <Button
          asChild
          className="h-12 flex-1 rounded-xl bg-[#25D366] text-sm font-bold text-white shadow-md hover:bg-[#20bd5a]"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-4" />
            WhatsApp — Balas Cepat
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-12 flex-1 rounded-xl border-primary/30 text-sm font-bold text-primary hover:bg-primary/5"
        >
          <Link href="#paket">
            <Package className="size-4" />
            Cek Paket
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
