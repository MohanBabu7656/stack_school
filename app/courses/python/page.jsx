import React from 'react';
import Link from 'next/link';
import TrackedEnrollButton from '../../TrackedEnrollButton';

export const metadata = {
  title: 'Python Fast-Track: Data & Web | Stack School',
};

export default function PythonCoursePage() {
  return (
    <main className="flex-grow px-4 py-20 md:py-32 flex justify-center relative z-10">
      <div className="max-w-4xl w-full bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="flex items-center mb-6">
          <span className="text-emerald-600 font-mono font-bold bg-emerald-100/80 px-3 py-1 rounded-lg mr-4">{'< py >'}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 drop-shadow-sm">Python Fast-Track</h1>
        </div>
        
        <p className="text-xl text-slate-700 font-medium mb-10 leading-relaxed">
          Go from zero to deploying interactive data web apps in 8 weeks—using purely Python. Master core programming logic, integrate persistent MySQL databases, and build beautiful frontend UIs using Streamlit without needing HTML or CSS.
        </p>
        
        <h2 className="text-2xl font-bold text-blue-950 mb-4">Curriculum Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-emerald-500 font-bold mr-2">Phase 1:</span> Core Python Mastery (4 Weeks)</div>
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-emerald-500 font-bold mr-2">Phase 2:</span> The Data Layer & MySQL</div>
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-emerald-500 font-bold mr-2">Phase 3:</span> Interactive Frontend (Streamlit)</div>
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-emerald-500 font-bold mr-2">Phase 4:</span> Fullstack Integration & CRUD</div>
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-emerald-500 font-bold mr-2">Focus:</span> Session State & Form Validation</div>
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-emerald-500 font-bold mr-2">Final:</span> Real-World Capstone Dashboard</div>
        </div>

        <div className="flex space-x-4">
          <TrackedEnrollButton 
            courseName="Python Fast-Track" 
            href={process.env.NEXT_PUBLIC_ENROLLMENT_FORM_URL || "#"} 
            className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 hover:-translate-y-1 transition-all duration-300"
          >
            Enroll in Fast-Track
          </TrackedEnrollButton>
          <Link href="/courses" className="px-8 py-4 bg-white text-blue-950 border border-blue-200 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-colors">Back to Courses</Link>
        </div>
      </div>
    </main>
  );
}