import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = '919256729688';
  const prefilledMessage = encodeURIComponent("Hi Deepak! I visited your portfolio and would like to discuss a website project.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col">
      {/* Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="mb-2 relative hidden sm:flex items-center gap-2 bg-slate-900/95 text-white text-xs px-3.5 py-2 rounded-xl shadow-xl border border-emerald-500/40 backdrop-blur-md animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Need a website? Chat directly on WhatsApp!</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Close tooltip"
            className="text-slate-400 hover:text-white ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Deepak on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <div className="absolute inset-0 rounded-full bg-emerald-400 opacity-20 group-hover:animate-ping" />
        <MessageCircle className="w-7 h-7 fill-white stroke-emerald-600 relative z-10 transition-transform group-hover:rotate-12" />
        
        {/* Mobile quick label */}
        <span className="sr-only">Chat with Deepak on WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
