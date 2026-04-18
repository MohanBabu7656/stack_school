import React from 'react';

export const metadata = {
  title: 'Placements & Alumni | Stack School',
  description: 'See where our alumni are working and our placement statistics.',
};

export default function PlacementsPage() {
  return (
    <main className="flex-grow px-4 py-20 md:py-32 flex flex-col items-center relative z-10">
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 mb-6 drop-shadow-sm">Honest Placements</h1>
        <p className="text-xl text-slate-700 font-medium max-w-2xl mx-auto">No fake metrics. We are currently training our founding cohort, and our commitment to your future success is absolute.</p>
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-md rounded-3xl p-8 text-center hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-center">
          <h4 className="text-5xl font-black text-blue-950 mb-2">0</h4>
          <p className="text-sm text-slate-600 font-bold uppercase tracking-wider mb-2">Alumni Placed Yet</p>
          <p className="text-xs text-slate-500 font-medium px-4">We are a brand new bootcamp! Our very first cohort is currently in training.</p>
        </div>
        <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-md rounded-3xl p-8 text-center hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-center border-emerald-200">
          <h4 className="text-5xl font-black text-emerald-600 mb-2">Lifetime</h4>
          <p className="text-sm text-slate-600 font-bold uppercase tracking-wider mb-2">Career Support</p>
          <p className="text-xs text-slate-500 font-medium px-4">We stand by our students with unlimited interview prep until you get hired.</p>
        </div>
        <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-md rounded-3xl p-8 text-center hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-center">
          <h4 className="text-5xl font-black text-orange-500 mb-2">100%</h4>
          <p className="text-sm text-slate-600 font-bold uppercase tracking-wider mb-2">Transparency</p>
          <p className="text-xs text-slate-500 font-medium px-4">We grow when you grow. Your career success is our absolute highest priority.</p>
        </div>
      </div>

      <div className="max-w-5xl w-full bg-white/40 backdrop-blur-lg border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
        
        <h3 className="text-3xl font-extrabold text-blue-950 mb-6 drop-shadow-sm text-center">Lifetime Career Support</h3>
        <p className="text-lg text-slate-700 font-medium mb-12 text-center max-w-2xl mx-auto relative z-10">
          Being a founding student means you get our undivided attention. We are fully dedicated to you and offer personalized career assistance until you land your dream job.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="text-center bg-white/50 p-6 rounded-2xl border border-white/60 shadow-sm">
            <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
            <h4 className="text-xl font-bold text-blue-950 mb-2">Resume & Portfolio</h4><p className="text-slate-600 text-sm font-medium">Access our AI Resume Scorer and get 1-on-1 help crafting a GitHub portfolio that catches recruiters' eyes.</p>
          </div>
          <div className="text-center bg-white/50 p-6 rounded-2xl border border-white/60 shadow-sm">
            <div className="w-16 h-16 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div>
            <h4 className="text-xl font-bold text-blue-950 mb-2">Mock Interviews</h4><p className="text-slate-600 text-sm font-medium">Practice technical and behavioral interviews 1-on-1 with industry veterans.</p>
          </div>
          <div className="text-center bg-white/50 p-6 rounded-2xl border border-white/60 shadow-sm">
            <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></div>
            <h4 className="text-xl font-bold text-blue-950 mb-2">Job Referrals</h4><p className="text-slate-600 text-sm font-medium">Tap into our personal network of hiring managers and internal recruiters.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl w-full mt-20 relative z-10">
        <h3 className="text-3xl font-extrabold text-blue-950 mb-8 drop-shadow-sm text-center">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <details className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-sm rounded-2xl group overflow-hidden cursor-pointer" open>
            <summary className="font-bold text-lg text-blue-950 p-6 list-none flex justify-between items-center hover:bg-white/40 transition-colors [&::-webkit-details-marker]:hidden">
              How does the Lifetime Career Support actually work?
              <span className="text-orange-500 group-open:rotate-45 transition-transform duration-300 text-2xl font-light">+</span>
            </summary>
            <div className="p-6 pt-0 text-slate-700 font-medium leading-relaxed border-t border-white/40 mt-2">
              Even after you graduate, we remain your dedicated career partners. We will continue to provide 1-on-1 mock interviews, portfolio reviews, and exclusive referrals until you secure your ideal role in the tech industry.
            </div>
          </details>
          
          <details className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-sm rounded-2xl group overflow-hidden cursor-pointer">
            <summary className="font-bold text-lg text-blue-950 p-6 list-none flex justify-between items-center hover:bg-white/40 transition-colors [&::-webkit-details-marker]:hidden">
              What do you mean by "molding" my career?
              <span className="text-orange-500 group-open:rotate-45 transition-transform duration-300 text-2xl font-light">+</span>
            </summary>
            <div className="p-6 pt-0 text-slate-700 font-medium leading-relaxed border-t border-white/40 mt-2">
              If you choose us, you aren't just taking classes—we will mold your raw potential perfectly. From the way you write commit messages to how you communicate system design, we shape you into the exact candidate top tech companies are looking for. 
            </div>
          </details>

          <details className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-sm rounded-2xl group overflow-hidden cursor-pointer">
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
    </main>
  );
}