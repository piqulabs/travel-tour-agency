"use client";

import ScrollLink from "@/components/shared/ScrollLink";
import { motion } from "framer-motion";
import { MessageCircle, Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/utils";

export default function MobileStickyCTA() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="mobile-sticky-cta fixed inset-x-0 bottom-0 z-50 md:hidden"
    >
      <div className="mobile-sticky-cta-inner flex gap-2 px-3 pt-2">
        <Button
          asChild
          className="h-10 flex-1 rounded-xl bg-[#25D366] text-xs font-semibold text-white shadow-md shadow-[#25D366]/20 transition-transform active:scale-[0.97] hover:bg-[#20bd5a]"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-3.5" />
            WhatsApp
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-10 flex-1 rounded-xl border-border/60 bg-white/80 text-xs font-semibold text-primary shadow-sm backdrop-blur-sm transition-transform active:scale-[0.97] hover:bg-white"
        >
          <ScrollLink sectionId="paket">
            <Package className="size-3.5" />
            Paket
          </ScrollLink>
        </Button>
      </div>
    </motion.div>
  );
}
