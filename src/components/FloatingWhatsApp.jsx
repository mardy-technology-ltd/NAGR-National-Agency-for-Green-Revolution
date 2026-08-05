'use client';

import { MessageCircle } from 'lucide-react';
import { contactInfo } from '@/data/mockData';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hello NAGR Bangladesh team, I would like to inquire about your programs.')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center"
      title="Chat with NAGR on WhatsApp"
    >
      {/* Tooltip on hover */}
      <span className="mr-3 px-3 py-1.5 rounded-lg bg-emerald-950/90 text-emerald-300 text-xs font-semibold border border-emerald-700/50 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with NAGR Support
      </span>

      {/* Button with pulse halo */}
      <div className="relative flex items-center justify-center">
        <span className="absolute w-full h-full rounded-full bg-emerald-500/40 animate-ping" />
        <div className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-transform group-hover:scale-110">
          <MessageCircle className="w-7 h-7 fill-emerald-950 stroke-emerald-500" />
        </div>
      </div>
    </a>
  );
}
