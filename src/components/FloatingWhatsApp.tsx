import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show inviting tooltip after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 font-sans">
      
      {/* Invite chat bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="bg-white text-slate-800 border border-slate-100 shadow-2xl p-3.5 rounded-2xl max-w-xs flex items-start gap-3 relative"
            id="wa-tooltip"
          >
            {/* Close tooltip */}
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1.5 right-1.5 p-0.5 text-slate-400 hover:text-slate-600 rounded focus:outline-none cursor-pointer"
            >
              <X className="h-3 w-3" />
            </button>
            
            <div className="bg-emerald-100 text-emerald-700 p-2 rounded-xl shrink-0 mt-1">
              <MessageSquare className="h-4.5 w-4.5" />
            </div>
            
            <div className="pr-3">
              <span className="block text-[10px] uppercase tracking-wider font-extrabold text-emerald-600 font-mono">Admission Desk</span>
              <span className="block text-xs font-bold text-slate-700 leading-snug mt-0.5">Need immediate assistance? Chat with us now!</span>
            </div>

            {/* Little Triangle tip pointing down */}
            <div className="absolute right-6 -bottom-2 w-3.5 h-3.5 bg-white border-r border-b border-slate-100 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Float Trigger */}
      <motion.a
        href="https://wa.me/919876543210?text=Hi%20Evolution%20Career%20Institute,%20I%20am%20interested%20in%20learning%20more%20about%20your%20coaching%20classes."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/30 flex items-center justify-center relative cursor-pointer group focus:outline-none"
        id="whatsapp-floating-trigger"
        aria-label="Contact Evolution Institute on WhatsApp"
      >
        {/* Pulsing Green Circle Radar */}
        <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-25" />

        {/* Lucide MessageSquare representing instant chat */}
        <MessageSquare className="h-6.5 w-6.5 relative z-10 fill-white" />

        {/* Custom Green Online Dot Badge */}
        <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 border-2 border-emerald-500 rounded-full animate-pulse" />
      </motion.a>

    </div>
  );
}
