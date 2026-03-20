import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/918075765780"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] text-primary-foreground shadow-lg hover:scale-110 transition-transform duration-300"
    style={{ boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} fill="currentColor" />
  </a>
);

export default WhatsAppButton;
