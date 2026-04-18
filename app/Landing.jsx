'use client';

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { motion } from 'framer-motion';
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
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-sm text-blue-950">
            Launch Your Tech Career <br/> with <span className="text-orange-500">Stack</span> <span className="text-blue-950">School</span>
          </h2>
          <p className="text-xl md:text-2xl text-emerald-600 font-bold mb-8 tracking-widest uppercase drop-shadow-sm">Learn. Code. Succeed.</p>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Master modern web development, build real-world projects, and accelerate your career with our industry-leading coding bootcamps.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center relative z-10">
            <a href="#courses" className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-950 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:bg-blue-900 hover:-translate-y-1 transition-all duration-300">View Courses</a>
            <a href="#mentors" className="inline-flex items-center justify-center px-8 py-3.5 bg-white/70 backdrop-blur-md text-orange-600 border border-orange-200 font-semibold rounded-xl hover:bg-white hover:-translate-y-1 transition-all duration-300">Meet Mentors</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/40 relative z-10">
            <div><h4 className="text-3xl md:text-4xl font-black text-blue-950">92%</h4><p className="text-xs md:text-sm text-slate-700 font-bold uppercase tracking-wide mt-1">Students Placed</p></div>
            <div><h4 className="text-3xl md:text-4xl font-black text-emerald-600">+$35k</h4><p className="text-xs md:text-sm text-slate-700 font-bold uppercase tracking-wide mt-1">Avg. Salary Increase</p></div>
            <div><h4 className="text-3xl md:text-4xl font-black text-orange-500">50+</h4><p className="text-xs md:text-sm text-slate-700 font-bold uppercase tracking-wide mt-1">Hiring Partners</p></div>
            <div><h4 className="text-3xl md:text-4xl font-black text-blue-950">1M+</h4><p className="text-xs md:text-sm text-slate-700 font-bold uppercase tracking-wide mt-1">Lines of Code</p></div>
          </div>
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

      <section id="about" className="px-4 py-16 flex justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/40 backdrop-blur-lg border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-8 hover:-translate-y-2 hover:bg-white/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-3">Structured Path</h3>
            <p className="text-slate-700 font-medium">Follow an organized, step-by-step curriculum to go from beginner to job-ready developer.</p>
          </div>
          <div className="bg-white/40 backdrop-blur-lg border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-8 hover:-translate-y-2 hover:bg-white/50 transition-all duration-300 group relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-300/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-light">{"{ }"}</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-3">Real-World Experience</h3>
            <p className="text-slate-700 font-medium">Build practical, portfolio-ready projects that solve actual industry problems.</p>
          </div>
          <div className="bg-white/40 backdrop-blur-lg border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-8 hover:-translate-y-2 hover:bg-white/50 transition-all duration-300 group relative">
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-300/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-950 mb-3">Accelerate Your Future</h3>
            <p className="text-slate-700 font-medium">Gain access to expert mentorship, interview preparation, and a vast network of hiring partners.</p>
          </div>
        </div>
      </section>

      <section id="courses" className="px-4 py-16 flex justify-center">
        <div className="max-w-5xl w-full bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-orange-300/20 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-emerald-300/20 blur-3xl rounded-full pointer-events-none"></div>
          <h3 className="text-4xl font-extrabold text-center text-blue-950 mb-12 drop-shadow-sm">Featured Stacks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-2xl p-8 hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 to-transparent -z-10 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-4"><h4 className="text-3xl font-bold text-blue-950">Python Fullstack</h4><span className="text-emerald-600 font-mono font-bold bg-emerald-100/80 px-3 py-1 rounded-lg">{'< py >'}</span></div>
              <p className="text-orange-600 font-bold mb-5 text-lg">Data-Driven Web Applications</p>
              <ul className="text-slate-700 font-medium space-y-3 mb-8">
                <li className="flex items-center"><span className="mr-3 text-emerald-500 font-bold">✓</span> Django & FastAPI</li>
                <li className="flex items-center"><span className="mr-3 text-emerald-500 font-bold">✓</span> React & Modern Frontend</li>
                <li className="flex items-center"><span className="mr-3 text-emerald-500 font-bold">✓</span> Cloud Deployment & CI/CD</li>
              </ul>
              <a href="#roadmap" className="block text-center w-full py-3.5 bg-white/80 border-2 border-blue-950 text-blue-950 font-bold rounded-xl hover:bg-blue-950 hover:text-white transition-colors duration-300 shadow-sm">Explore Python Stack</a>
            </div>
            <div className="bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-2xl p-8 hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 to-transparent -z-10 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-4"><h4 className="text-3xl font-bold text-blue-950">Java Fullstack</h4><span className="text-orange-600 font-mono font-bold bg-orange-100/80 px-3 py-1 rounded-lg">{'< java >'}</span></div>
              <p className="text-orange-600 font-bold mb-5 text-lg">Enterprise-Grade Architecture</p>
              <ul className="text-slate-700 font-medium space-y-3 mb-8">
                <li className="flex items-center"><span className="mr-3 text-orange-500 font-bold">✓</span> Spring Boot & Microservices</li>
                <li className="flex items-center"><span className="mr-3 text-orange-500 font-bold">✓</span> Angular & Scalable UI</li>
                <li className="flex items-center"><span className="mr-3 text-orange-500 font-bold">✓</span> Advanced Database Design</li>
              </ul>
              <a href="#roadmap" className="block text-center w-full py-3.5 bg-white/80 border-2 border-blue-950 text-blue-950 font-bold rounded-xl hover:bg-blue-950 hover:text-white transition-colors duration-300 shadow-sm">Explore Java Stack</a>
            </div>
          </div>
        </div>
      </section>

      <section id="mentors" className="px-4 py-16 flex justify-center relative z-10 bg-white/20 backdrop-blur-md border-y border-white/40">
        <div className="max-w-5xl w-full">
          <h3 className="text-4xl font-extrabold text-center text-blue-950 mb-12 drop-shadow-sm">Meet Your Mentors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-blue-200 shrink-0 overflow-hidden border-4 border-white shadow-sm flex items-center justify-center"><svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg></div>
              <div className="text-center sm:text-left"><h4 className="text-2xl font-bold text-blue-950">Sarah Jenkins</h4><p className="text-orange-600 font-bold text-sm mb-3">Former Senior Java Developer at Amazon</p><p className="text-slate-700 font-medium text-sm leading-relaxed">Brings 10+ years of enterprise architecture experience to help you master Spring Boot and cloud-native backend systems.</p></div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-emerald-200 shrink-0 overflow-hidden border-4 border-white shadow-sm flex items-center justify-center"><svg className="w-12 h-12 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg></div>
              <div className="text-center sm:text-left"><h4 className="text-2xl font-bold text-blue-950">David Chen</h4><p className="text-emerald-600 font-bold text-sm mb-3">Lead Python Engineer at Stripe</p><p className="text-slate-700 font-medium text-sm leading-relaxed">Expert in data-driven backends and scalable integrations using Django, FastAPI, and robust AWS infrastructure.</p></div>
            </div>
          </div>
        </div>
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