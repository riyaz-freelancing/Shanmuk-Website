import React from 'react';
import { getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon } from './WhatsAppIcon';
import { motion } from 'framer-motion';

export const WhatsAppButton = () => {
  return (
    <motion.a
      href={getWhatsAppUrl("Hi Shanmuk, I have a question about your gym and diet coaching plans.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Shanmuk on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl shadow-emerald-500/40 border-2 border-white/80 group cursor-pointer"
    >
      {/* Pulse Ripple Effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />

      {/* Official WhatsApp Icon */}
      <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white group-hover:rotate-12 transition-transform duration-300" />

      {/* Tooltip Positioned Cleanly to the Left (100% visible, no clipping) */}
      <span className="hidden md:block absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-2xl border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
        Chat with Coach Shanmuk ⚡
      </span>
    </motion.a>
  );
};
