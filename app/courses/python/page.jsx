import React from 'react';
import Link from 'next/link';
import TrackedEnrollButton from '../../components/TrackedEnrollButton';

export const metadata = {
  title: 'Python Fullstack Course | Stack School',
};

export default function PythonCoursePage() {
  return (
    <main className="flex-grow px-4 py-20 md:py-32 flex justify-center relative z-10">
      <div className="max-w-4xl w-full bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="flex items-center mb-6">
          <span className="text-emerald-600 font-mono font-bold bg-emerald-100/80 px-3 py-1 rounded-lg mr-4">{'< py >'}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 drop-shadow-sm">Python Fullstack</h1>
        </div>
        
        <p className="text-xl text-slate-700 font-medium mb-10 leading-relaxed">
          Master data-driven web applications. This intensive bootcamp covers everything from core Python programming to advanced backend architectures using Django and FastAPI, combined with modern React frontends.
        </p>
        
        <h2 className="text-2xl font-bold text-blue-950 mb-4">Curriculum Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-emerald-500 font-bold mr-2">1.</span> Python Fundamentals & OOP</div>
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-emerald-500 font-bold mr-2">2.</span> Django Web Framework & ORM</div>
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-emerald-500 font-bold mr-2">3.</span> High-Performance APIs with FastAPI</div>
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-emerald-500 font-bold mr-2">4.</span> React Integration & State Management</div>
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-emerald-500 font-bold mr-2">5.</span> PostgreSQL & Database Optimization</div>
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-emerald-500 font-bold mr-2">6.</span> Cloud Deployment (AWS & CI/CD)</div>
        </div>

        <div className="flex space-x-4">
          <TrackedEnrollButton 
            courseName="Python" 
            href="https://docs.google.com/forms/d/e/1FAIpQLScfXsTiBHpAZOvnfDsRAT1_qLQCV3jQReDL5N8xHMlEwvyQsw/viewform?usp=dialog" 
            className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 hover:-translate-y-1 transition-all duration-300"
          >
            Enroll in Python Track
          </TrackedEnrollButton>
          <Link href="/courses" className="px-8 py-4 bg-white text-blue-950 border border-blue-200 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-colors">Back to Courses</Link>
        </div>
      </div>
    </main>
  );
}