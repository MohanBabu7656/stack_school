'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TrackedEnrollButton from '../../TrackedEnrollButton';
import SyllabusViewer from './SyllabusViewer';
import PricingCard from '../../PricingCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function PythonPageContent() {
  return (
    <div className="flex-grow w-full min-h-screen relative overflow-hidden flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-8">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
      >
        {/* Left Column: Hero & CTA */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full pt-8">
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold text-2xl shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              py
            </div>
            <div>
              <span className="px-3 py-1 text-xs font-black uppercase tracking-widest text-white bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                Intensive Track
              </span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-950 mb-6 tracking-tight leading-tight">
            Python Fast-Track: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Data & Web</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-700 font-medium mb-10 leading-relaxed">
            Go from zero to deploying interactive data web apps in 8 weeks—using purely Python.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
            <TrackedEnrollButton 
              courseName="Python Fast-Track" 
              href="/apply" 
              className="flex-1 min-h-[56px] px-8 py-4 bg-emerald-600 text-white font-black rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center text-lg"
            >
              Apply Now
            </TrackedEnrollButton>
            <Link 
              href="/courses" 
              className="flex-1 min-h-[56px] px-8 py-4 bg-white text-blue-950 border border-blue-200 font-bold rounded-xl hover:bg-slate-50 shadow-sm transition-colors text-center flex items-center justify-center text-lg"
            >
              Back to Courses
            </Link>
          </motion.div>
          
          <motion.p variants={itemVariants} className="mt-8 text-sm text-slate-500 font-medium text-center sm:text-left">
            Just looking for interview practice? <Link href="/courses/mock-interviews" className="text-emerald-600 hover:text-emerald-500 hover:underline">Check out our Free Mock Interview Program.</Link>
          </motion.p>
        </div>

        {/* Right Column: SyllabusViewer & Pricing */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 relative z-10 gap-4">
              <h2 className="text-2xl font-bold text-blue-950 flex items-center gap-3">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                Interactive Syllabus
              </h2>
              <a 
                href="/pdfs/Python%20Fast-Track.pdf" 
                download
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 border border-emerald-200 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm self-start sm:self-auto"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download PDF
              </a>
            </div>
            <div className="relative z-10">
              <SyllabusViewer />
            </div>
          </motion.div>

          <PricingCard courseName="Python Fast-Track" />
        </div>
      </motion.div>
    </div>
  );
}
