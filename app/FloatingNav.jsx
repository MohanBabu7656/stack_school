'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasHinted, setHasHinted] = useState(false);

  useEffect(() => {
    // Show a quick hint that this button is interactive
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
        setHasHinted(true);
      }, 2000); // Keep open for 2 seconds
    }, 1500); // Open after 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    { label: 'Courses', href: '/courses', icon: '📚', color: 'bg-emerald-500' },
    { label: 'Community Group', href: 'https://chat.whatsapp.com/GtHCxt09o0pELkSas7qBAO', icon: '💬', color: 'bg-[#25D366]' },
    { label: 'Job Channel', href: 'https://whatsapp.com/channel/0029Vb7VqJz2phHOL3Qvw02i', icon: '💼', color: 'bg-teal-600' },
    { label: 'Contact Us', href: '/contact', icon: '📞', color: 'bg-purple-600' },
    { label: 'Apply Now', href: '/apply', icon: '🚀', color: 'bg-blue-600' },
    { label: 'Refer & Earn', href: '/referral', icon: '🤝', color: 'bg-orange-500' },
  ];

  return (
    <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="flex flex-col items-end gap-3 mb-2"
          >
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 group"
              >
                <span className="bg-blue-950/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] md:text-xs font-black text-white shadow-xl border border-white/20 whitespace-nowrap">
                  {item.label}
                </span>
                <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-xl hover:scale-110 active:scale-95 transition-transform border-2 border-white/40`}>
                  {item.icon}
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen ? 'bg-slate-800 rotate-90' : 'bg-blue-950 hover:bg-blue-900'}`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
          <div className="flex flex-col gap-1 items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            <span className="w-5 h-1 bg-white rounded-full"></span>
            <span className="w-3 h-1 bg-white/60 rounded-full"></span>
          </div>
        )}
      </button>
    </div>
  );
}
