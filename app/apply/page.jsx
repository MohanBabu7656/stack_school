'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';

export default function ApplyPage() {
  // Define your URLs. We fallback to your provided Mock Interview link if the environment variable isn't set yet.
  const enrollmentUrl = process.env.NEXT_PUBLIC_ENROLLMENT_FORM_URL || "#";
  const mockInterviewUrl = process.env.NEXT_PUBLIC_MOCK_INTERVIEW_FORM_URL || "https://docs.google.com/forms/d/e/1FAIpQLSdczT9ww2ICd9qjDIHTIkitQD1mVcmY7B5BuJyWuyp3b7vfGw/viewform?usp=publish-editor";

  return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 py-16 md:py-24 relative z-10">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4"
          >
            Join <span className="text-orange-500">Stack</span> School
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto"
          >
            Choose the program that fits your current career stage. Whether you want to learn from scratch or perfect your interview skills, we have you covered.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Python Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/60 backdrop-blur-xl border border-white/60 hover:border-emerald-200 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-900/5 flex flex-col relative transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold text-xl mb-6 group-hover:scale-110 transition-transform">py</div>
            <h2 className="text-2xl font-black text-blue-950 mb-2">Python Fast-Track</h2>
            <p className="text-emerald-600 font-bold mb-4 tracking-wide uppercase text-xs">Data & Web Apps</p>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
              Go from zero to deploying interactive data web apps in 8 weeks using purely Python. No prior coding experience required.
            </p>
            <div className="space-y-3 mb-8 text-sm font-medium text-slate-700">
              <p className="flex items-start"><span className="text-emerald-500 text-lg mr-2 leading-none">✓</span> Core Python & OOP</p>
              <p className="flex items-start"><span className="text-emerald-500 text-lg mr-2 leading-none">✓</span> MySQL Database Integration</p>
              <p className="flex items-start"><span className="text-emerald-500 text-lg mr-2 leading-none">✓</span> Streamlit UI Dashboards</p>
            </div>
            <a 
              href={enrollmentUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => track('Enrollment Clicked', { type: 'Python Fast-Track' })}
              className="w-full py-3.5 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              Apply for Python
            </a>
          </motion.div>

          {/* Java Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/60 backdrop-blur-xl border border-white/60 hover:border-orange-200 rounded-3xl p-6 md:p-8 shadow-lg shadow-blue-900/5 flex flex-col relative transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold text-xl mb-6 group-hover:scale-110 transition-transform">☕</div>
            <h2 className="text-2xl font-black text-blue-950 mb-2">Java Fullstack</h2>
            <p className="text-orange-600 font-bold mb-4 tracking-wide uppercase text-xs">Enterprise Architecture</p>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
              Master enterprise-grade architecture with Spring Boot, Angular, and Microservices in our 12-week intensive track.
            </p>
            <div className="space-y-3 mb-8 text-sm font-medium text-slate-700">
              <p className="flex items-start"><span className="text-orange-500 text-lg mr-2 leading-none">✓</span> Spring Boot Microservices</p>
              <p className="flex items-start"><span className="text-orange-500 text-lg mr-2 leading-none">✓</span> Angular & Scalable UIs</p>
              <p className="flex items-start"><span className="text-orange-500 text-lg mr-2 leading-none">✓</span> Real-world Enterprise Projects</p>
            </div>
            <a 
              href={enrollmentUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => track('Enrollment Clicked', { type: 'Java Fullstack' })}
              className="w-full py-3.5 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:bg-orange-400 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              Apply for Java
            </a>
          </motion.div>

          {/* Mock Interview Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-xl border border-blue-200/60 rounded-3xl p-6 md:p-8 shadow-xl shadow-blue-500/10 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl z-10 shadow-sm uppercase tracking-wider">
              Free (Limited)
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl mb-6 group-hover:scale-110 transition-transform">🎯</div>
            <h2 className="text-2xl font-black text-blue-950 mb-2">Mock Interviews</h2>
            <p className="text-blue-600 font-bold mb-4 tracking-wide uppercase text-xs">Master the Interview</p>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
              Transform your theoretical knowledge into interview success with technical rounds and HR screenings.
            </p>
            <div className="space-y-3 mb-8 text-sm font-medium text-slate-700">
              <p className="flex items-start"><span className="text-blue-500 text-lg mr-2 leading-none">✓</span> 1-on-1 Technical Sessions</p>
              <p className="flex items-start"><span className="text-blue-500 text-lg mr-2 leading-none">✓</span> HR & Soft Skills Practice</p>
              <p className="flex items-start"><span className="text-blue-500 text-lg mr-2 leading-none">✓</span> Detailed Readiness Report</p>
            </div>
            <a 
              href={mockInterviewUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => track('Enrollment Clicked', { type: 'Mock Interview' })}
              className="w-full py-3.5 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              Book Your Slot
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}