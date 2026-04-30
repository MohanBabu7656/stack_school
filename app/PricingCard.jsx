'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PricingCard({ courseName = "Full Course", className = "" }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-6 md:p-8 shadow-2xl ${className}`}
    >
      {/* Decorative Orbs */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-orange-100 text-orange-600 border border-orange-200 mb-6 shadow-sm">
          🚀 Launch Offer
        </div>
        
        <h3 className="text-2xl font-black text-blue-950 mb-2">Early Bird Pricing</h3>
        <p className="text-slate-600 font-medium text-sm mb-6">Start your career at an unbeatable price.</p>
        
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-4xl md:text-5xl font-black text-blue-950 tracking-tighter">₹1,999</span>
          <span className="text-xl text-slate-400 line-through font-bold">₹3,999</span>
          <span className="text-emerald-600 font-black text-sm bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-100">50% OFF</span>
        </div>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5 shrink-0">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <p className="text-sm font-bold text-slate-700">Valid for First 10 Enrolled Students</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mt-0.5 shrink-0">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <p className="text-sm font-bold text-slate-700">Limited Seats Available</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl p-5 mb-8 shadow-lg shadow-blue-950/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🤝</span>
            <p className="text-white font-black text-sm uppercase tracking-wider">Refer & Learn for FREE</p>
          </div>
          <p className="text-blue-100 text-xs font-medium leading-relaxed">
            Get <span className="text-orange-400 font-black">₹499 Referral Bonus</span> for every friend who joins. Once you and your friend enroll, claim your bonus on our <Link href="/referral" className="text-white underline font-bold hover:text-orange-400 transition-colors">Referral Page</Link>!
          </p>
        </div>
        
        <Link 
          href="/apply" 
          className="w-full flex items-center justify-center py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300"
        >
          Secure My Spot Now
        </Link>
      </div>
    </motion.div>
  );
}
