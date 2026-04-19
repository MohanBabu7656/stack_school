'use client';

import React, { useState } from 'react';

export default function SyllabusViewer() {
  const [activeTab, setActiveTab] = useState(0);

  const phases = [
    {
      id: 'phase-1',
      title: 'Phase 1: Core Python Mastery',
      duration: 'Weeks 1-4',
      desc: 'Master the syntax, logic, and data structures of Python from the ground up.',
      points: [
        'Fundamentals, Variables & I/O',
        'Control Flow & Logic (If/Else, Loops)',
        'Data Structures (Lists, Dictionaries, Tuples)',
        'Functions, Recursion & Error Handling'
      ]
    },
    {
      id: 'phase-2',
      title: 'Phase 2: The Data Layer',
      duration: 'Week 5',
      desc: 'Transition from basic scripts to managing persistent data using relational databases.',
      points: [
        'MySQL Database Fundamentals',
        'Core & Advanced SQL Queries',
        'Connecting Python to MySQL',
        'Building a Python CLI CRUD App'
      ]
    },
    {
      id: 'phase-3',
      title: 'Phase 3: The Interactive Frontend',
      duration: 'Week 6',
      desc: 'Turn your Python logic into beautiful, interactive web applications without HTML/CSS.',
      points: [
        'Streamlit Basics & Layouts',
        'Gathering User Data with Input Widgets',
        'Displaying Data & Simple Charts',
        'Mastering Session State'
      ]
    },
    {
      id: 'phase-4',
      title: 'Phase 4: Fullstack Integration & Capstone',
      duration: 'Weeks 7-8',
      desc: 'Wire the UI, backend logic, and database together into a cohesive, production-ready product.',
      points: [
        'Secure Streamlit & MySQL Connections',
        'Full CRUD Operations via Web UI',
        'Error Handling & Professional UX',
        'Capstone: Final Dashboard Project'
      ]
    }
  ];

  return (
    <div className="mb-12">
      <div className="md:hidden flex items-center justify-end mb-3 pr-2 opacity-80 animate-bounce-x">
        <span className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center">Swipe <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        {/* Interactive Tabs */}
        <div className="flex overflow-x-auto pb-2 gap-3 snap-x hide-scrollbar w-full min-w-0">
          {phases.map((phase, index) => (
            <button
              key={phase.id}
              onClick={() => setActiveTab(index)}
              className={`min-h-[44px] min-w-[44px] shrink-0 whitespace-nowrap px-6 py-3.5 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 snap-start ${
                activeTab === index 
                  ? 'bg-blue-950 text-white shadow-lg shadow-blue-900/20 scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:text-blue-900'
              }`}
            >
              {phase.title.split(':')[0]}
            </button>
          ))}
        </div>
        
        <a 
          href="/pdfs/Python%20Fast-Track.pdf" 
          download
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center justify-center gap-2 px-5 py-3 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 border border-emerald-200 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Download PDF
        </a>
      </div>

      {/* Changing Content Area */}
      <div 
        key={activeTab} 
        className="w-full min-w-0 overflow-hidden bg-white/80 p-4 md:p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm min-h-[280px] animate-[fadeIn_0.4s_ease-in-out]"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3 min-w-0">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-blue-900 break-words whitespace-normal min-w-0">{phases[activeTab].title}</h3>
          <span className="inline-flex justify-center shrink-0 max-w-full truncate bg-emerald-100 text-emerald-700 font-bold px-4 py-1.5 rounded-full text-sm">
            {phases[activeTab].duration}
          </span>
        </div>
        
        <p className="text-slate-600 mb-8 text-sm md:text-base lg:text-lg leading-relaxed break-words min-w-0">
          {phases[activeTab].desc}
        </p>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 font-medium text-sm md:text-base min-w-0">
          {phases[activeTab].points.map((point, idx) => (
            <li key={idx} className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100 hover:shadow-sm transition-shadow min-w-0">
              <span className="text-emerald-500 mr-3 text-xl leading-none shrink-0">✓</span>
              <span className="break-words min-w-0">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}