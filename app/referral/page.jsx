'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';
import Link from 'next/link';

export default function ReferralPage() {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    referredCount: '1',
    referredEmails: '',
    isEnrolled: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.isEnrolled) {
      alert("Please confirm that you and your referred friends are enrolled in the course.");
      return;
    }

    const { referrerName, referrerEmail, referredCount, referredEmails } = formData;

    // Track the event before redirecting
    track('Referral Claim Submitted', {
      referredCount: referredCount,
    });
    
    // Construct the formatted WhatsApp message
    const text = `*Referral Bonus Claim*\n\n*Referrer Name:* ${referrerName}\n*Referrer Email:* ${referrerEmail}\n*Number of People Referred:* ${referredCount}\n*Referred Candidate Emails:* ${referredEmails}\n\n*Status:* Confirmed Enrolled ✅`;
    
    // Open WhatsApp in a new tab
    const whatsappUrl = `https://wa.me/916281865015?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="flex-grow px-4 md:px-8 py-16 md:py-24 flex justify-center relative z-10">
      <div className="max-w-3xl w-full bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl p-6 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

        <div className="text-center mb-10 relative z-10">
          <div className="inline-flex items-center px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-orange-100 text-orange-600 border border-orange-200 mb-6 shadow-sm">
            🤝 Referral Program
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-blue-950 mb-4">Claim Your Bonus</h1>
          <p className="text-slate-600 font-medium mb-8">Earn ₹500 for every friend who joins. Tell us who you referred!</p>

          <div className="bg-orange-50 border border-orange-200 p-4 rounded-2xl flex items-start gap-4 text-left shadow-sm">
            <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">!</div>
            <div>
              <p className="text-orange-900 font-bold text-sm">Not Enrolled Yet?</p>
              <p className="text-orange-700 text-xs font-medium leading-relaxed">
                If you haven't joined a course yet, please <Link href="/apply" className="underline font-black hover:text-orange-950 transition-colors">Enroll First</Link>. You can only claim referral bonuses once you are an active student.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-blue-950 font-bold mb-2 text-sm uppercase tracking-wide">Your Full Name</label>
              <input 
                type="text" name="referrerName" value={formData.referrerName} onChange={handleChange} required 
                placeholder="Enter your name" 
                className="w-full text-base px-5 py-4 rounded-xl bg-white/50 border border-slate-300 focus:ring-2 focus:ring-orange-500 transition-all font-medium" 
              />
            </div>
            <div className="flex flex-col">
              <label className="text-blue-950 font-bold mb-2 text-sm uppercase tracking-wide">Your Email ID</label>
              <input 
                type="email" name="referrerEmail" value={formData.referrerEmail} onChange={handleChange} required 
                placeholder="your@email.com" 
                className="w-full text-base px-5 py-4 rounded-xl bg-white/50 border border-slate-300 focus:ring-2 focus:ring-orange-500 transition-all font-medium" 
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-blue-950 font-bold mb-2 text-sm uppercase tracking-wide">How many people did you refer?</label>
            <select 
              name="referredCount" value={formData.referredCount} onChange={handleChange}
              className="w-full text-base px-5 py-4 rounded-xl bg-white/50 border border-slate-300 focus:ring-2 focus:ring-orange-500 transition-all font-medium cursor-pointer"
            >
              {[1, 2, 3, 4, '5+'].map(num => (
                <option key={num} value={num}>{num} Person{num !== 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-blue-950 font-bold mb-2 text-sm uppercase tracking-wide">Referred Candidates' Email IDs</label>
            <textarea 
              name="referredEmails" value={formData.referredEmails} onChange={handleChange} required rows="3" 
              placeholder="Enter emails of your referred friends (one per line or separated by commas)" 
              className="w-full text-base px-5 py-4 rounded-xl bg-white/50 border border-slate-300 focus:ring-2 focus:ring-orange-500 transition-all font-medium resize-none" 
            />
          </div>

          <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input 
                type="checkbox" name="isEnrolled" checked={formData.isEnrolled} onChange={handleChange} required
                className="mt-1 w-5 h-5 rounded border-slate-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
              />
              <span className="text-sm font-bold text-blue-950 leading-tight">
                I confirm that both I and my referred friends are officially enrolled in a Stack School course.
              </span>
            </label>
            <p className="text-[10px] text-slate-500 mt-2 ml-8 italic">Note: Bonus is only valid for enrolled candidates. Our team will verify enrollment before processing your referral credit.</p>
          </div>

          <button 
            type="submit" 
            className="w-full py-5 bg-blue-950 text-white font-black rounded-xl shadow-xl shadow-blue-950/20 hover:bg-blue-900 hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center gap-2"
          >
            <span>Submit Referral Claim</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </button>
        </form>
      </div>
    </main>
  );
}
