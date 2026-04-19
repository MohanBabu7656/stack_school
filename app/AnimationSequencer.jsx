'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnimationSequencer() {
  const [animType, setAnimType] = useState('stacking');
  // Using a key forces AnimatePresence to unmount and remount the component, restarting the animation
  const [key, setKey] = useState(0); 

  const replay = (type) => {
    setAnimType(type);
    setKey((prev) => prev + 1);
  };

  // Centralized animation variants logic based on the selected type
  const getVariants = (step, side = 'left') => {
    if (animType === 'all-at-once') {
      return {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
      };
    }
    if (animType === 'flip') {
      return {
        initial: { opacity: 0, rotateY: 180 },
        animate: { opacity: 1, rotateY: 0, transition: { duration: 0.8, delay: step * 0.1, ease: "easeOut" } }
      };
    }
    
    // Default to 'stacking' sequential micro-story
    switch (step) {
      case 1: // Step 1: Shield halves slide together
        return {
          initial: { opacity: 0, x: side === 'left' ? -50 : 50 },
          animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
        };
      case 2: // Step 2: Code {} and 0101 pop
        return {
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.5, type: 'spring', bounce: 0.5 } }
        };
      case 3: // Step 3: Cap drops & arrow shoots
        return {
          initial: { opacity: 0, y: side === 'cap' ? -30 : 30 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.9, type: 'spring' } }
        };
      case 4: // Step 4: The Reveal Text fades/slides up
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.3, ease: "easeOut" } }
        };
      default: return {};
    }
  };

  return (
    <div className="p-6 md:p-10 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/60 shadow-lg max-w-3xl mx-auto my-12 text-center relative z-10">
      <h3 className="text-2xl md:text-3xl font-extrabold text-blue-950 mb-3">Animation Sequencer</h3>
      <p className="text-slate-600 mb-8 font-medium">Compare the "Learn. Code. Succeed." logo animations.</p>
      
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button onClick={() => replay('stacking')} className={`px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm ${animType === 'stacking' ? 'bg-orange-500 text-white shadow-orange-500/30 scale-105' : 'bg-white text-slate-600 border border-slate-200 hover:border-orange-500 hover:text-orange-500'}`}>Stacking Sequence</button>
        <button onClick={() => replay('all-at-once')} className={`px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm ${animType === 'all-at-once' ? 'bg-emerald-600 text-white shadow-emerald-600/30 scale-105' : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-500 hover:text-emerald-600'}`}>All at Once</button>
        <button onClick={() => replay('flip')} className={`px-5 py-2.5 rounded-xl font-bold transition-all shadow-sm ${animType === 'flip' ? 'bg-blue-950 text-white shadow-blue-950/30 scale-105' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-900 hover:text-blue-900'}`}>3D Flip</button>
      </div>

      <div className="relative h-80 flex flex-col items-center justify-center bg-slate-50/80 rounded-2xl border border-slate-200 overflow-hidden shadow-inner">
        <AnimatePresence mode="wait">
          <motion.div key={key} className="relative flex flex-col items-center justify-center">
            <div className="relative w-32 h-36 flex items-center justify-center mb-6">
              <motion.div variants={getVariants(1, 'left')} initial="initial" animate="animate" className="absolute left-0 w-16 h-32 bg-blue-950 rounded-l-full border-4 border-r-0 border-blue-900 shadow-md"></motion.div>
              <motion.div variants={getVariants(1, 'right')} initial="initial" animate="animate" className="absolute right-0 w-16 h-32 bg-blue-900 rounded-r-full border-4 border-l-0 border-blue-800 shadow-md"></motion.div>
              <motion.div variants={getVariants(2)} initial="initial" animate="animate" className="absolute z-10 flex flex-col items-center justify-center"><span className="text-orange-400 font-mono text-4xl font-black">{'{ }'}</span><span className="text-emerald-400 font-mono text-[10px] font-bold leading-none mt-1 opacity-80">0101</span></motion.div>
              <motion.div variants={getVariants(3, 'cap')} initial="initial" animate="animate" className="absolute -top-7 -left-3 z-20 text-5xl drop-shadow-md">🎓</motion.div>
              <motion.div variants={getVariants(3, 'arrow')} initial="initial" animate="animate" className="absolute -bottom-2 -right-4 z-20 text-emerald-400 text-4xl drop-shadow-md">🚀</motion.div>
            </div>
            <motion.div variants={getVariants(4)} initial="initial" animate="animate" className="flex flex-col items-center"><h2 className="text-3xl font-black text-blue-950 tracking-tight">STACK SCHOOL</h2><p className="text-xs font-bold text-orange-500 tracking-[0.2em] mt-1 drop-shadow-sm">LEARN • CODE • SUCCEED</p></motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}