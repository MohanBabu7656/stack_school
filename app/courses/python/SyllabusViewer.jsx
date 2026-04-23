'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SyllabusViewer() {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const phases = [
    {
      id: 1,
      title: 'Fundamentals, Variables, & I/O',
      duration: 'Week 1',
      desc: 'The Ecosystem, print(), Math & Operators, Variables & Comments, User Interaction.',
      points: [
        'Computer Architecture & IDE Setup',
        'print() Function & Literals',
        'Math Operators & Variables',
        'User input() & Type Casting'
      ]
    },
    {
      id: 2,
      title: 'Control Flow & Logic',
      duration: 'Week 2',
      desc: 'Master conditional statements, loops, and basic algorithm practice.',
      points: [
        'Equality & Comparison Operators',
        'Logical Expressions & Bits',
        'While Loops & For Loops',
        'Algorithm Practice (Collatz)'
      ]
    },
    {
      id: 3,
      title: 'Data Structures',
      duration: 'Week 3',
      desc: 'Work with complex data structures like lists, tuples, and dictionaries.',
      points: [
        'Lists Basics & Advanced Slicing',
        'Bubble Sort Algorithm',
        'Tuples & Mutability',
        'Dictionaries & Key-Value Pairs'
      ]
    },
    {
      id: 4,
      title: 'Functions & Error Handling',
      duration: 'Week 4',
      desc: 'Learn decomposition, function definitions, and graceful error handling.',
      points: [
        'Function Basics & Scopes',
        'Return Instructions & None',
        'Advanced Functions & Recursion',
        'Exceptions & Print Debugging'
      ]
    },
    {
      id: 5,
      title: 'MySQL Integration',
      duration: 'Week 5',
      desc: 'Transition to persistent data using relational databases and Python\'s MySQL connector.',
      points: [
        'Database Fundamentals & Setup',
        'Core SQL Queries (CRUD)',
        'Advanced SQL (Primary Keys, JOINs)',
        'Python to MySQL Connection'
      ]
    },
    {
      id: 6,
      title: 'Streamlit Mastery',
      duration: 'Week 6',
      desc: 'Turn Python logic into interactive web applications without HTML/CSS.',
      points: [
        'Streamlit Basics & Text Elements',
        'Input Widgets & Gathering Data',
        'Displaying Data & Simple Charts',
        'Layouts & Session State'
      ]
    },
    {
      id: 7,
      title: 'Connecting Streamlit & MySQL',
      duration: 'Week 7',
      desc: 'Wire the UI and the database together into a cohesive web product.',
      points: [
        'Secure Connections to MySQL',
        'Creating Data with st.form',
        'Updating & Deleting Records',
        'Error Handling & Real-time Dashboards'
      ]
    },
    {
      id: 8,
      title: 'The Capstone Project',
      duration: 'Week 8',
      desc: 'Build a fully functional, single-page Dashboard reading/writing to MySQL in real-time.',
      points: [
        'Architecture & DB Schema Design',
        'Database & Backend Build',
        'Frontend UI Build & Testing',
        'Polish, Visualization & Final Presentation'
      ]
    }
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="space-y-3 w-full">
        {phases.map((phase) => {
          const isOpen = activeAccordion === phase.id;
          return (
            <div 
              key={phase.id} 
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'bg-white shadow-md border-emerald-200' 
                  : 'bg-white/60 hover:bg-white/80 border-slate-200'
              }`}
            >
              <button
                onClick={() => toggleAccordion(phase.id)}
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pr-4">
                  <h3 className={`font-bold text-sm md:text-base transition-colors ${isOpen ? 'text-emerald-700' : 'text-blue-950'}`}>
                    {phase.title}
                  </h3>
                  <span className={`inline-flex shrink-0 text-xs font-bold px-3 py-1 rounded-full transition-colors ${isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                    {phase.duration}
                  </span>
                </div>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                  <motion.svg 
                    animate={{ rotate: isOpen ? 180 : 0 }} 
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </motion.svg>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="p-4 pt-0 border-t border-slate-100">
                      <p className="text-slate-600 mb-4 mt-3 text-xs md:text-sm leading-relaxed">
                        {phase.desc}
                      </p>
                      
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700 font-medium text-xs md:text-sm">
                        {phase.points.map((point, idx) => (
                          <li key={idx} className="flex items-start bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                            <span className="text-emerald-500 mr-2 text-base leading-none shrink-0 mt-[1px]">✓</span>
                            <span className="leading-snug">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}