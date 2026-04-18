import React from 'react';

export const metadata = {
  title: 'Career Tools | Stack School',
  description: 'Free AI-powered career preparation tools for Stack School students.',
};

export default function CareerToolsPage() {
  return (
    <main className="flex-grow px-4 py-20 md:py-32 flex flex-col items-center relative z-10">
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 mb-6 drop-shadow-sm">Career Prep <span className="text-emerald-600">Tools</span></h1>
        <p className="text-xl text-slate-700 font-medium">Exclusive tools designed to give you an unfair advantage in the tech job market.</p>
      </div>

      <div className="max-w-4xl w-full grid grid-cols-1 gap-8">
        <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center hover:-translate-y-1 transition-all duration-300">
          <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="flex-grow mb-8 md:mb-0 relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider border mb-4 shadow-sm bg-emerald-100/80 text-emerald-700 border-emerald-200">
              <span className="mr-1.5">✨</span> AI Powered
            </div>
            <h2 className="text-3xl font-bold text-blue-950 mb-4">AI Resume Scorer</h2>
            <p className="text-slate-700 font-medium leading-relaxed mb-8">
              Optimize your resume for Applicant Tracking Systems (ATS). Our AI-powered tool scans your resume against job descriptions, providing instant, actionable feedback so your profile stands out to top tech recruiters.
            </p>
            <a 
              href="https://resumescorerfrontend.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 hover:-translate-y-1 transition-all duration-300"
            >
              Launch Resume Scorer
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}