import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TRENVO on WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" />
    </a>
  );
}
