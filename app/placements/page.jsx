'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';

export default function PlacementsPage() {
  const statsRef = useRef(null);
  const supportRef = useRef(null);
  const [activeStatsIndex, setActiveStatsIndex] = useState(0);
  const [activeSupportIndex, setActiveSupportIndex] = useState(0);

  const handleStatsScroll = () => {
    if (statsRef.current) {
      const scrollLeft = statsRef.current.scrollLeft;
      const index = Math.round(scrollLeft / (window.innerWidth * 0.8)); // 80vw
      setActiveStatsIndex(index >= 0 && index <= 2 ? index : activeStatsIndex);
    }
  };

  const handleSupportScroll = () => {
    if (supportRef.current) {
      const scrollLeft = supportRef.current.scrollLeft;
      const index = Math.round(scrollLeft / (window.innerWidth * 0.75)); // 75vw
      setActiveSupportIndex(index >= 0 && index <= 2 ? index : activeSupportIndex);
    }
  };

  return (
    <main className="flex-grow px-4 py-20 md:py-32 flex flex-col items-center relative z-10">
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 mb-6 drop-shadow-sm">Honest Placements</h1>
        <p className="text-xl text-slate-700 font-medium max-w-2xl mx-auto">No fake metrics. We are currently training our founding cohort, and our commitment to your future success is absolute.</p>
      </div>

      <div className="max-w-5xl w-full mb-16">
        <div className="md:hidden flex items-center justify-end mb-4 pr-2 opacity-80 animate-bounce-x relative z-10">
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center">Swipe <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span>
        </div>
        
        <div className="relative group/stats">
          {/* Edge Fades */}
          <div className="md:hidden absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
          <div className="md:hidden absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

          <div 
            ref={statsRef}
            onScroll={handleStatsScroll}
            className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 md:gap-6 pb-4 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar scroll-smooth relative z-10"
          >
            <div className="w-[80vw] md:w-auto shrink-0 snap-center bg-white/60 backdrop-blur-xl border border-white/60 shadow-md rounded-3xl p-8 text-center hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-center">
              <h4 className="text-5xl font-black text-blue-950 mb-2">0</h4>
              <p className="text-sm text-slate-600 font-bold uppercase tracking-wider mb-2">Alumni Placed Yet</p>
              <p className="text-xs text-slate-500 font-medium px-4">We are a brand new bootcamp! Our very first cohort is currently in training.</p>
            </div>
            <div className="w-[80vw] md:w-auto shrink-0 snap-center bg-white/60 backdrop-blur-xl border border-white/60 shadow-md rounded-3xl p-8 text-center hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-center border-emerald-200">
              <h4 className="text-5xl font-black text-emerald-600 mb-2">Lifetime</h4>
              <p className="text-sm text-slate-600 font-bold uppercase tracking-wider mb-2">Career Support</p>
              <p className="text-xs text-slate-500 font-medium px-4">We stand by our students with unlimited interview prep until you get hired.</p>
            </div>
            <div className="w-[80vw] md:w-auto shrink-0 snap-center bg-white/60 backdrop-blur-xl border border-white/60 shadow-md rounded-3xl p-8 text-center hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-center border-orange-200">
              <h4 className="text-5xl font-black text-orange-500 mb-2">100%</h4>
              <p className="text-sm text-slate-600 font-bold uppercase tracking-wider mb-2">Transparency</p>
              <p className="text-xs text-slate-500 font-medium px-4">We grow when you grow. Your career success is our absolute highest priority.</p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="md:hidden flex justify-center space-x-1.5 mt-4">
            {[0, 1, 2].map((i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${activeStatsIndex === i ? 'w-4 bg-orange-500' : 'w-1.5 bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl w-full bg-white/40 backdrop-blur-lg border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
        
        <h3 className="text-3xl font-extrabold text-blue-950 mb-6 drop-shadow-sm text-center">Lifetime Career Support</h3>
        <p className="text-lg text-slate-700 font-medium mb-12 text-center max-w-2xl mx-auto relative z-10">
          Being a founding student means you get our undivided attention. We are fully dedicated to you and offer personalized career assistance until you land your dream job.
        </p>
        
        <div className="md:hidden flex items-center justify-end mb-4 pr-2 opacity-80 animate-bounce-x relative z-10">
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center">Swipe <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span>
        </div>

        <div className="relative group/support">
          {/* Edge Fades */}
          <div className="md:hidden absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/40 to-transparent z-20 pointer-events-none"></div>
          <div className="md:hidden absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/40 to-transparent z-20 pointer-events-none"></div>

          <div 
            ref={supportRef}
            onScroll={handleSupportScroll}
            className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 relative z-10 pb-6 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar scroll-smooth"
          >
            <div className="w-[75vw] md:w-auto shrink-0 snap-center text-center bg-white/50 p-6 rounded-2xl border border-white/60 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
              <h4 className="text-xl font-bold text-blue-950 mb-2">Resume & Portfolio</h4><p className="text-slate-600 text-sm font-medium">Access our <a href="https://resumescorerfrontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 font-bold underline">AI Resume Scorer</a> and get 1-on-1 help crafting a GitHub portfolio that catches recruiters' eyes.</p>
            </div>
            <div className="w-[75vw] md:w-auto shrink-0 snap-center text-center bg-white/50 p-6 rounded-2xl border border-white/60 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div>
              <h4 className="text-xl font-bold text-blue-950 mb-2">Mock Interviews</h4><p className="text-slate-600 text-sm font-medium">Practice technical and behavioral interviews 1-on-1 with industry veterans.</p>
            </div>
            <div className="w-[75vw] md:w-auto shrink-0 snap-center text-center bg-white/50 p-6 rounded-2xl border border-white/60 shadow-sm">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></div>
              <h4 className="text-xl font-bold text-blue-950 mb-2">Job Referrals</h4><p className="text-slate-600 text-sm font-medium">Tap into our personal network of hiring managers and internal recruiters.</p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="md:hidden flex justify-center space-x-1.5 mt-4">
            {[0, 1, 2].map((i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${activeSupportIndex === i ? 'w-4 bg-orange-500' : 'w-1.5 bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl w-full mt-20 relative z-10">
        <h3 className="text-3xl font-extrabold text-blue-950 mb-8 drop-shadow-sm text-center">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <details name="faq-accordion" className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-sm rounded-2xl group overflow-hidden cursor-pointer transition-all duration-300" open>
            <summary className="font-bold text-lg text-blue-950 p-6 list-none flex justify-between items-center hover:bg-white/40 transition-colors [&::-webkit-details-marker]:hidden">
              How does the Lifetime Career Support actually work?
              <span className="text-orange-500 group-open:rotate-45 transition-transform duration-300 text-2xl font-light">+</span>
            </summary>
            <div className="p-6 pt-0 text-slate-700 font-medium leading-relaxed border-t border-white/40 mt-2">
              Even after you graduate, we remain your dedicated career partners. We will continue to provide 1-on-1 mock interviews, portfolio reviews, and exclusive referrals until you secure your ideal role in the tech industry.
            </div>
          </details>
          <details name="faq-accordion" className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-sm rounded-2xl group overflow-hidden cursor-pointer transition-all duration-300">
            <summary className="font-bold text-lg text-blue-950 p-6 list-none flex justify-between items-center hover:bg-white/40 transition-colors [&::-webkit-details-marker]:hidden">
              What do you mean by "molding" my career?
              <span className="text-orange-500 group-open:rotate-45 transition-transform duration-300 text-2xl font-light">+</span>
            </summary>
            <div className="p-6 pt-0 text-slate-700 font-medium leading-relaxed border-t border-white/40 mt-2">
              If you choose us, you aren't just taking classes—we will mold your raw potential perfectly. From the way you write commit messages to how you communicate system design, we shape you into the exact candidate top tech companies are looking for. 
            </div>
          </details>
          <details name="faq-accordion" className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-sm rounded-2xl group overflow-hidden cursor-pointer transition-all duration-300">
            <summary className="font-bold text-lg text-blue-950 p-6 list-none flex justify-between items-center hover:bg-white/40 transition-colors [&::-webkit-details-marker]:hidden">
              Why are you showing "0" placed alumni?
              <span className="text-orange-500 group-open:rotate-45 transition-transform duration-300 text-2xl font-light">+</span>
            </summary>
            <div className="p-6 pt-0 text-slate-700 font-medium leading-relaxed border-t border-white/40 mt-2">
              Honesty is our core value. Unlike other bootcamps that inflate their numbers, we are fully transparent. Stack School is brand new, and our founding cohort is currently mastering their stacks. By joining now, you get unprecedented, individualized attention.
            </div>
          </details>
        </div>
      </div>

      <div className="max-w-4xl w-full mt-24 relative z-10">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[2rem] p-8 md:p-12 text-center text-white shadow-2xl shadow-emerald-900/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl rounded-full -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-black mb-4">Never Miss an Opportunity!</h3>
            <p className="text-emerald-50 font-medium mb-8 max-w-xl mx-auto opacity-90">
              Join our exclusive WhatsApp community for daily curated job updates, interview prep tips, and off-campus drive notifications.
            </p>
            <a 
              href="https://chat.whatsapp.com/GtHCxt09o0pELkSas7qBAO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-emerald-700 px-8 py-4 rounded-xl font-black text-lg hover:bg-emerald-50 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              <span>Join WhatsApp Group</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}