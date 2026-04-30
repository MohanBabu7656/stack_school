'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
import MouseTracker from './MouseTracker';
import FloatingParticles from './FloatingParticles';

export default function Landing() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const cardWidth = window.innerWidth * 0.7; // 70vw
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index >= 0 && index <= 3 ? index : activeIndex);
    }
  };

  // Setup 3D Tilt Physics for the Hero Card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { damping: 30, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 300 });
  
  // Transform mouse position to a rotation angle (max 8 degrees)
  const rotateX = useTransform(springY, [-300, 300], [8, -8]);
  const rotateY = useTransform(springX, [-300, 300], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <>
      <MouseTracker />
      <FloatingParticles />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 perspective-1000 relative">
        {/* Animated Tech Grid & Glowing Orbs Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[linear-gradient(to_right,#1725540f_1px,transparent_1px),linear-gradient(to_bottom,#1725540f_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#f97316]/20 rounded-full blur-[100px] md:blur-[120px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#10b981]/20 rounded-full blur-[80px] md:blur-[100px]"
          />
          <motion.div 
            animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            className="absolute top-1/3 right-1/4 translate-x-1/4 w-[350px] md:w-[550px] h-[350px] md:h-[550px] bg-[#3b82f6]/30 rounded-full blur-[90px] md:blur-[110px]"
          />
        </div>
        <motion.div 
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="max-w-4xl w-full bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-sm text-blue-950">
            Launch Your Tech Career <br/> with <span className="text-orange-500">Stack</span> <span className="text-blue-950">School</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5, type: 'spring', bounce: 0.5 }}
            className="text-xl md:text-2xl text-emerald-600 font-bold mb-8 tracking-widest uppercase drop-shadow-sm">Learn. Code. Succeed.</motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9, type: 'spring' }}
            className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Master modern web development and build real-world projects. No prior coding experience required. Choose us, and we will mold your raw potential into a polished, highly sought-after engineering profile perfectly suited for top tech companies.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center relative z-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/courses" className="inline-flex items-center justify-center w-full px-8 py-3.5 bg-blue-950 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:bg-blue-900 transition-all duration-300">View Courses</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/about" className="inline-flex items-center justify-center w-full px-8 py-3.5 bg-white/70 backdrop-blur-md text-orange-600 border border-orange-200 font-semibold rounded-xl hover:bg-white transition-all duration-300">About Us</Link>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-12 pt-8 border-t border-white/40 relative z-10">
            <div className="md:hidden flex items-center justify-end mb-4 pr-2 opacity-80 animate-bounce-x">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center">Swipe <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span>
            </div>
            
            <div className="relative group/carousel">
              {/* Edge Fades - Adjusted for better contrast on cards */}
              <div className="md:hidden absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white/60 via-white/20 to-transparent z-20 pointer-events-none"></div>
              <div className="md:hidden absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white/60 via-white/20 to-transparent z-20 pointer-events-none"></div>

              <div 
                ref={containerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 pb-6 -mx-4 px-8 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar scroll-smooth relative z-10"
              >
                <div className="w-[70vw] md:w-auto shrink-0 snap-center bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_30px_-10px_rgba(23,37,84,0.2)] rounded-2xl p-6 flex flex-col items-center justify-center group-hover:shadow-[0_20px_40px_-15px_rgba(23,37,84,0.3)] transition-all duration-500">
                  <h4 className="text-4xl md:text-4xl font-black text-blue-950">0</h4>
                  <p className="text-xs md:text-sm text-slate-700 font-bold uppercase tracking-wide mt-1">Alumni Placed Yet</p>
                </div>
                <div className="w-[70vw] md:w-auto shrink-0 snap-center bg-white/80 backdrop-blur-xl border border-emerald-200 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.2)] rounded-2xl p-6 flex flex-col items-center justify-center group-hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)] transition-all duration-500">
                  <h4 className="text-4xl md:text-4xl font-black text-emerald-600">Lifetime</h4>
                  <p className="text-xs md:text-sm text-slate-700 font-bold uppercase tracking-wide mt-1">Career Support</p>
                </div>
                <div className="w-[70vw] md:w-auto shrink-0 snap-center bg-white/80 backdrop-blur-xl border border-orange-200 shadow-[0_10px_30px_-10px_rgba(249,115,22,0.2)] rounded-2xl p-6 flex flex-col items-center justify-center group-hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.3)] transition-all duration-500">
                  <h4 className="text-4xl md:text-4xl font-black text-orange-500">100%</h4>
                  <p className="text-xs md:text-sm text-slate-700 font-bold uppercase tracking-wide mt-1">Transparency</p>
                </div>
                <div className="w-[70vw] md:w-auto shrink-0 snap-center bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_30px_-10px_rgba(23,37,84,0.2)] rounded-2xl p-6 flex flex-col items-center justify-center group-hover:shadow-[0_20px_40px_-15px_rgba(23,37,84,0.3)] transition-all duration-500">
                  <h4 className="text-4xl md:text-4xl font-black text-blue-950">1-on-1</h4>
                  <p className="text-xs md:text-sm text-slate-700 font-bold uppercase tracking-wide mt-1">Elite Mentorship</p>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="md:hidden flex justify-center space-x-2 mt-4">
                {[0, 1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className={`h-2 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-8 bg-orange-500 shadow-md' : 'w-2 bg-slate-300'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <section className="py-8 bg-white/20 backdrop-blur-sm border-y border-white/40 overflow-hidden flex relative z-10">
        <motion.div 
          className="flex w-[200%] items-center justify-around text-xl md:text-2xl font-bold text-blue-950/60 uppercase tracking-widest whitespace-nowrap space-x-12"
          animate={{ x: [0, "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 15 }}>
          <span>React</span><span className="text-orange-400">•</span>
          <span>Angular</span><span className="text-orange-400">•</span>
          <span>Spring Boot</span><span className="text-orange-400">•</span>
          <span>Django</span><span className="text-orange-400">•</span>
          <span>FastAPI</span><span className="text-orange-400">•</span>
          <span>AWS</span><span className="text-orange-400">•</span>
          <span>React</span><span className="text-orange-400">•</span>
          <span>Angular</span><span className="text-orange-400">•</span>
          <span>Spring Boot</span><span className="text-orange-400">•</span>
          <span>Django</span><span className="text-orange-400">•</span>
          <span>FastAPI</span><span className="text-orange-400">•</span>
          <span>AWS</span>
        </motion.div>
      </section>
    </>
  );
}