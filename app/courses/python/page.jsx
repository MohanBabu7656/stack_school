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
        
        <h2 className="text-3xl font-bold text-blue-950 mb-6 border-b border-slate-200 pb-2">Detailed Syllabus</h2>
        <div className="space-y-6 mb-12">
          <div className="bg-white/80 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Phase 1: Core Python Mastery (Weeks 1-4)</h3>
            <p className="text-slate-600 mb-4">Master the syntax, logic, and data structures of Python from the ground up.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 font-medium">
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>Fundamentals, Variables & I/O</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>Control Flow & Logic (If/Else, Loops)</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>Data Structures (Lists, Dictionaries, Tuples)</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>Functions, Recursion & Error Handling</li>
            </ul>
          </div>

          <div className="bg-white/80 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Phase 2: The Data Layer (Week 5)</h3>
            <p className="text-slate-600 mb-4">Transition from basic scripts to managing persistent data using relational databases.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 font-medium">
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>MySQL Database Fundamentals</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>Core & Advanced SQL Queries</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>Connecting Python to MySQL</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>Building a Python CLI CRUD App</li>
            </ul>
          </div>

          <div className="bg-white/80 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Phase 3: The Interactive Frontend (Week 6)</h3>
            <p className="text-slate-600 mb-4">Turn your Python logic into beautiful, interactive web applications without HTML/CSS.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 font-medium">
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>Streamlit Basics & Layouts</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>Gathering User Data with Input Widgets</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>Displaying Data & Simple Charts</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>Mastering Session State</li>
            </ul>
          </div>

          <div className="bg-white/80 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Phase 4: Fullstack Integration & Capstone (Weeks 7-8)</h3>
            <p className="text-slate-600 mb-4">Wire the UI, backend logic, and database together into a cohesive, production-ready product.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700 font-medium">
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>Secure Streamlit & MySQL Connections</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>Full CRUD Operations via Web UI</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>Error Handling & Professional UX</li>
              <li className="flex items-start"><span className="text-emerald-500 mr-2 text-lg leading-none">✓</span>Capstone: Final Dashboard Project</li>
            </ul>
          </div>
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