import { MessageCircle } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/utils";

export default function WhatsappButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Nusantara Trip"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 active:scale-95 sm:bottom-6 sm:right-6 sm:size-16"
    >
      <MessageCircle className="size-7 sm:size-8" />
      <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
        1
      </span>
    </a>
  );
}
