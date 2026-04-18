import React from 'react';

export const metadata = {
  title: 'About Us | Stack School',
  description: 'Learn about Stack School’s mission and methodology.',
};

export default function AboutPage() {
  return (
    <main className="flex-grow px-4 py-20 md:py-32 flex flex-col items-center relative z-10">
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 mb-6 drop-shadow-sm">Why Stack School?</h1>
        <p className="text-xl text-slate-700 font-medium">We bridge the gap between traditional education and industry requirements.</p>
      </div>

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
    </main>
  );
}