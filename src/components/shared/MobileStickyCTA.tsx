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
      transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-50 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="border-t border-border/50 bg-white/95 px-3 pb-3 pt-2.5 shadow-[0_-12px_40px_rgba(15,23,42,0.15)] backdrop-blur-2xl">
        <div className="flex gap-2.5">
          <Button
            asChild
            className="h-12 flex-1 rounded-2xl bg-[#25D366] text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20bd5a]"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" />
              WhatsApp Sekarang
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 flex-1 rounded-2xl border-primary/25 bg-white text-sm font-bold text-primary shadow-sm hover:bg-primary/5"
          >
            <Link href="#paket">
              <Package className="size-4" />
              Lihat Paket
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
