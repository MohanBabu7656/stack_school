'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function CourseList() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      // The cards are roughly 80vw wide. We use the container width to estimate.
      const index = Math.round(scrollLeft / window.innerWidth);
      setActiveIndex(index >= 0 && index <= 2 ? index : activeIndex);
    }
  };

  return (
    <div className="w-full relative">
      {/* Edge Fade Masks for Mobile Carousel */}
      <div className="md:hidden absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>
      <div className="md:hidden absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>

      <motion.div 
        ref={containerRef}
        onScroll={handleScroll}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory hide-scrollbar relative z-10 w-auto md:w-full scroll-smooth"
      >
        {/* Python Course Card */}
        <motion.div variants={itemVariants} className="w-[80vw] sm:w-full shrink-0 snap-center min-w-0 group relative rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 p-6 md:p-8 hover:border-emerald-200 hover:shadow-emerald-500/20 transition-all duration-500 overflow-hidden shadow-lg flex flex-col h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-all duration-500 pointer-events-none"></div>
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold text-xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                py
              </div>
              <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-sm">Fast-Track</span>
            </div>
          </div>
          
          <h3 className="text-3xl font-black text-blue-950 mb-2 relative z-10 break-words">Python Data & Web</h3>
          
          <div className="flex items-baseline gap-2 mb-4 relative z-10">
            <span className="text-2xl font-black text-emerald-600 tracking-tighter">₹2,000</span>
            <span className="text-sm text-slate-400 line-through font-bold">₹4,000</span>
          </div>

          <p className="text-slate-600 font-medium mb-8 relative z-10">Go from zero to deploying interactive data web apps in 8 weeks.</p>
          
          <div className="space-y-4 mb-10 flex-grow relative z-10">
            <div className="flex items-start text-slate-700 transition-colors duration-300">
              <svg className="w-5 h-5 mr-3 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-medium text-sm">Core Python & Data Structures</span>
            </div>
            <div className="flex items-start text-slate-700 transition-colors duration-300">
              <svg className="w-5 h-5 mr-3 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-medium text-sm">MySQL Database Integration</span>
            </div>
            <div className="flex items-start text-slate-700 transition-colors duration-300">
              <svg className="w-5 h-5 mr-3 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-medium text-sm">Streamlit UI Dashboards</span>
            </div>
          </div>
          
          <Link href="/courses/python" className="relative z-10 w-full py-4 bg-white hover:bg-emerald-50 text-blue-950 border-2 border-blue-950 hover:text-emerald-700 hover:border-emerald-600 font-black rounded-xl text-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 overflow-hidden group/btn flex items-center justify-center gap-2">
            Explore Course
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </motion.div>

        {/* Java Course Card */}
        <motion.div variants={itemVariants} className="w-[80vw] sm:w-full shrink-0 snap-center min-w-0 group relative rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 p-6 md:p-8 hover:border-orange-200 hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden shadow-lg flex flex-col h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-orange-500/10 blur-[80px] rounded-full group-hover:bg-orange-500/20 transition-all duration-500 pointer-events-none"></div>
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold text-xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                ☕
              </div>
              <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest text-orange-900 bg-orange-200 rounded-full shadow-sm">Enterprise</span>
            </div>
          </div>
          
          <h3 className="text-3xl font-black text-blue-950 mb-2 relative z-10 break-words">Java Fullstack</h3>

          <div className="flex items-baseline gap-2 mb-4 relative z-10">
            <span className="text-2xl font-black text-orange-600 tracking-tighter">₹2,000</span>
            <span className="text-sm text-slate-400 line-through font-bold">₹4,000</span>
          </div>

          <p className="text-slate-600 font-medium mb-8 relative z-10">Master Enterprise-Grade Architecture with Spring Boot & Angular.</p>
          
          <div className="space-y-4 mb-10 flex-grow relative z-10">
            <div className="flex items-start text-slate-700 transition-colors duration-300">
              <svg className="w-5 h-5 mr-3 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-medium text-sm">Spring Boot Microservices</span>
            </div>
            <div className="flex items-start text-slate-700 transition-colors duration-300">
              <svg className="w-5 h-5 mr-3 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-medium text-sm">Angular & Scalable UIs</span>
            </div>
            <div className="flex items-start text-slate-700 transition-colors duration-300">
              <svg className="w-5 h-5 mr-3 text-orange-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-medium text-sm">Advanced Database Design</span>
            </div>
          </div>
          
          <Link href="/courses/java" className="relative z-10 w-full py-4 bg-white hover:bg-orange-50 text-blue-950 border-2 border-blue-950 hover:text-orange-700 hover:border-orange-500 font-black rounded-xl text-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 overflow-hidden group/btn flex items-center justify-center gap-2">
            Explore Course
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </motion.div>

        {/* Mock Interviews Card */}
        <motion.div variants={itemVariants} className="w-[80vw] sm:w-full shrink-0 snap-center min-w-0 group relative rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 p-6 md:p-8 hover:border-blue-200 hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden shadow-lg flex flex-col h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                🎯
              </div>
              <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest text-blue-900 bg-blue-200 rounded-full shadow-sm">Placement</span>
            </div>
          </div>
          
          <h3 className="text-3xl font-black text-blue-950 mb-2 relative z-10 break-words">Mock Interviews</h3>
          <p className="text-slate-600 font-medium mb-8 relative z-10">Master the interview with technical and HR rounds.</p>
          
          <div className="space-y-4 mb-10 flex-grow relative z-10">
            <div className="flex items-start text-slate-700 transition-colors duration-300">
              <svg className="w-5 h-5 mr-3 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-medium text-sm">Technical & HR Rounds</span>
            </div>
            <div className="flex items-start text-slate-700 transition-colors duration-300">
              <svg className="w-5 h-5 mr-3 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-medium text-sm">Live Coding Challenges</span>
            </div>
            <div className="flex items-start text-slate-700 transition-colors duration-300">
              <svg className="w-5 h-5 mr-3 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-medium text-sm">Detailed Readiness Report</span>
            </div>
          </div>
          
          <Link href="/courses/mock-interviews" className="relative z-10 w-full py-4 bg-white hover:bg-blue-50 text-blue-950 border-2 border-blue-950 hover:text-blue-700 hover:border-blue-600 font-black rounded-xl text-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 overflow-hidden group/btn flex items-center justify-center gap-2">
            Book Your Slot
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </motion.div>
      </motion.div>

      {/* Mobile Pagination Dots */}
      <div className="md:hidden flex justify-center items-center space-x-2 mt-6">
        {[0, 1, 2].map((i) => (
          <div 
            key={i} 
            className={`transition-all duration-300 rounded-full ${
              activeIndex === i 
                ? 'w-6 h-2 bg-orange-500 shadow-md' 
                : 'w-2 h-2 bg-slate-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
