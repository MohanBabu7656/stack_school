import React from 'react';
import Link from 'next/link';
import TrackedEnrollButton from '../../TrackedEnrollButton';
import SyllabusViewer from './SyllabusViewer';

export const metadata = {
  title: 'Python Fast-Track: Data & Web | Stack School',
};

export default function PythonCoursePage() {
  return (
    <main className="flex-grow px-4 md:px-8 py-20 md:py-32 flex justify-center relative z-10">
      <div className="max-w-4xl w-full min-w-0 bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-6 md:p-10 lg:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="flex items-center mb-6 min-w-0">
          <span className="text-emerald-600 font-mono font-bold bg-emerald-100/80 px-3 py-1 rounded-lg mr-4">{'< py >'}</span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 drop-shadow-sm break-words whitespace-normal min-w-0">Python Fast-Track</h1>
        </div>
        
        <p className="text-sm md:text-base lg:text-xl text-slate-700 font-medium mb-10 leading-relaxed">
          Go from zero to deploying interactive data web apps in 8 weeks—using purely Python. Master core programming logic, integrate persistent MySQL databases, and build beautiful frontend UIs using Streamlit without needing HTML or CSS.
        </p>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-950 mb-6">Interactive Syllabus</h2>
        <SyllabusViewer />

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <TrackedEnrollButton 
            courseName="Python Fast-Track" 
            href="/apply" 
            className="min-h-[44px] min-w-[44px] w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 hover:-translate-y-1 transition-all duration-300 text-center text-sm md:text-base"
          >
            Apply Now
          </TrackedEnrollButton>
          <a 
            href="/pdfs/Python%20Fast-Track.pdf" 
            download
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] min-w-[44px] w-full sm:w-auto px-8 py-4 bg-white text-emerald-700 border-2 border-emerald-200 font-bold rounded-xl shadow-sm hover:bg-emerald-50 hover:-translate-y-1 transition-all duration-300 text-center text-sm md:text-base flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Download Syllabus
          </a>
          <Link href="/courses" className="min-h-[44px] min-w-[44px] w-full sm:w-auto px-8 py-4 bg-white text-blue-950 border border-blue-200 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-colors text-center flex items-center justify-center text-sm md:text-base">Back to Courses</Link>
        </div>
        <p className="mt-8 text-sm text-slate-500 font-medium text-center sm:text-left">
          Just looking for interview practice? <Link href="/courses/mock-interviews" className="text-emerald-600 hover:underline">Check out our Free Mock Interview Program.</Link>
        </p>
      </div>
    </main>
  );
}