'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TopBanner() {
  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 py-2.5 px-4 relative z-[60] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <p className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">
            Launch Offer: Flat 50% OFF
          </p>
        </div>
        
        <p className="text-[11px] md:text-sm text-blue-100 font-bold">
          Only ₹2,000 for the first 10 students! <span className="text-orange-400">Seats filling fast ⏳</span>
        </p>
        
        <div className="hidden lg:flex items-center gap-2 border-l border-white/20 pl-6">
          <a href="/referral" className="text-xs text-emerald-400 font-black tracking-wide uppercase hover:text-emerald-300 transition-colors">
            Refer & Earn ₹500 🤝
          </a>
        </div>
      </div>
    </motion.div>
  );
}
