'use client';

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { captureLead } from './actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit" 
      disabled={pending}
      className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/40 hover:bg-orange-400 hover:-translate-y-1 transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending...' : 'Get My Roadmap'}
    </button>
  );
}

export default function Landing() {
  const [formState, formAction] = useFormState(captureLead, { success: false, message: '' });

  return (
    <>
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
        <div className="max-w-4xl w-full bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-3xl p-10 md:p-16 relative overflow-hidden">
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
            Master modern web development and build real-world projects. Choose us, and we will mold your raw potential into a polished, highly sought-after engineering profile perfectly suited for top tech companies.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center relative z-10">
            <Link href="/courses" className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-950 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:bg-blue-900 hover:-translate-y-1 transition-all duration-300">View Courses</Link>
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-3.5 bg-white/70 backdrop-blur-md text-orange-600 border border-orange-200 font-semibold rounded-xl hover:bg-white hover:-translate-y-1 transition-all duration-300">About Us</Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-12 pt-8 border-t border-white/40 relative z-10">
            <div className="md:hidden flex items-center justify-end mb-4 pr-2 opacity-80 animate-bounce-x">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center">Swipe <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span>
            </div>
            <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 pb-4 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar scroll-smooth">
              <div className="w-[45vw] md:w-auto shrink-0 snap-center"><h4 className="text-3xl md:text-4xl font-black text-blue-950">0</h4><p className="text-xs md:text-sm text-slate-700 font-bold uppercase tracking-wide mt-1">Alumni Placed Yet</p></div>
              <div className="w-[45vw] md:w-auto shrink-0 snap-center"><h4 className="text-3xl md:text-4xl font-black text-emerald-600">Lifetime</h4><p className="text-xs md:text-sm text-slate-700 font-bold uppercase tracking-wide mt-1">Career Support</p></div>
              <div className="w-[45vw] md:w-auto shrink-0 snap-center"><h4 className="text-3xl md:text-4xl font-black text-orange-500">100%</h4><p className="text-xs md:text-sm text-slate-700 font-bold uppercase tracking-wide mt-1">Transparency</p></div>
              <div className="w-[45vw] md:w-auto shrink-0 snap-center"><h4 className="text-3xl md:text-4xl font-black text-blue-950">1-on-1</h4><p className="text-xs md:text-sm text-slate-700 font-bold uppercase tracking-wide mt-1">Elite Mentorship</p></div>
            </div>
          </motion.div>
        </div>
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

      <section id="roadmap" className="px-4 py-20 flex justify-center relative z-10">
        <div className="max-w-4xl w-full text-center bg-blue-950 rounded-3xl p-10 md:p-16 shadow-2xl shadow-blue-900/40 relative overflow-hidden border border-blue-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none"></div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10 drop-shadow-md">Kickstart Your Tech Career</h3>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10 font-medium">Download our <span className="text-orange-400 font-bold">Free Python vs. Java Career Roadmap</span> and discover the path that aligns with your goals.</p>
          
          {formState?.success ? (
            <div className="p-6 bg-emerald-500/20 border border-emerald-400 rounded-xl relative z-10 max-w-xl mx-auto"><h4 className="text-xl font-bold text-emerald-100 mb-2">Success!</h4><p className="text-emerald-50 font-medium">{formState.message}</p></div>
          ) : (
            <form action={formAction} className="flex flex-col sm:flex-row max-w-xl mx-auto relative z-10 gap-4">
              <input type="email" name="email" placeholder="Enter your email address" className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium" required />
              <SubmitButton />
            </form>
          )}
          {formState?.success === false && formState?.message && <p className="text-red-300 mt-4 relative z-10 font-medium">{formState.message}</p>}
        </div>
      </section>
    </>
  );
}