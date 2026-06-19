import { MessageCircle } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/utils";

export default function WhatsappButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Nusantara Trip"
      className="fixed bottom-6 right-6 z-50 hidden size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 active:scale-95 md:flex md:size-16"
      style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
    >
      <MessageCircle className="size-7 md:size-8" />
      <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
        1
      </span>
    </a>
  );
}
