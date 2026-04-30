'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';
import Link from 'next/link';

export default function QuickWhatsAppForm({ courseName }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', experience: 'Fresher / Student' });

  const handleSubmit = (e) => {
    e.preventDefault();
    track('Quick WhatsApp Enroll', { course: courseName });
    const text = `*Quick Enrollment*\n\n*Course:* ${courseName}\n*Name:* ${formData.name}\n*Experience:* ${formData.experience}`;
    window.open(`https://wa.me/916281865015?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {!isOpen ? (
        <>
          <button
            onClick={() => setIsOpen(true)}
            className="w-full min-h-[56px] px-8 py-4 bg-[#25D366] text-white font-black rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center text-lg gap-2"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            Quick Enroll via WhatsApp
          </button>
          <Link 
            href="/apply" 
            className="w-full py-3.5 bg-white text-blue-950 border-2 border-blue-950 font-black rounded-xl shadow-sm hover:shadow-md hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-300 text-center flex items-center justify-center text-base"
          >
            Apply via Standard Form
          </Link>
        </>
      ) : (
        <motion.form
          initial={{ opacity: 0, height: 0, y: -10 }}
          animate={{ opacity: 1, height: 'auto', y: 0 }}
          onSubmit={handleSubmit}
          className="w-full bg-white/90 backdrop-blur-md border-2 border-[#25D366]/40 p-5 rounded-2xl shadow-xl shadow-[#25D366]/10 flex flex-col gap-4 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 blur-2xl rounded-full pointer-events-none"></div>
          <div className="flex justify-between items-center z-10">
            <span className="text-base font-black text-blue-950 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#25D366] fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              Quick Enroll
            </span>
            <button type="button" onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full p-1.5 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 z-10">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full sm:w-1/2 px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 outline-none text-sm font-medium transition-all"
            />
            <select
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full sm:w-1/2 px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 outline-none text-sm font-medium cursor-pointer transition-all"
            >
              <option value="Fresher / Student">Fresher / Student</option>
              <option value="1-2 Years">1-2 Years</option>
              <option value="3+ Years">3+ Years</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full py-3.5 bg-[#25D366] text-white font-black rounded-xl shadow-lg hover:bg-[#20bd5a] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-base z-10"
          >
            Send to WhatsApp
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </motion.form>
      )}
    </div>
  );
}