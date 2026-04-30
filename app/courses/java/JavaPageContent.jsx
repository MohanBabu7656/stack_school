'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { track } from '@vercel/analytics';

import TrackedEnrollButton from '../../TrackedEnrollButton';
import PricingCard from '../../PricingCard';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function JavaPageContent() {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const modules = [
    {
      id: 1,
      title: 'Java Fundamentals',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      duration: 'Week 1',
      desc: 'Build a strong foundation in Java basics, environment setup, variables, operators, and control statements.',
      points: ['Environment Setup & JVM', 'Variables & Type Casting', 'Operators & Input/Output', 'Control Statements (if, switch)']
    },
    {
      id: 2,
      title: 'Loops & Arrays',
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      duration: 'Week 2',
      desc: 'Master iterative logic and data storage using 1D/2D arrays and basic searching/sorting algorithms.',
      points: ['For, While, Do-While Loops', 'Pattern Programs', '1D, 2D & Jagged Arrays', 'Searching & Sorting (Bubble, Binary)']
    },
    {
      id: 3,
      title: 'Strings & Methods',
      icon: 'M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12',
      duration: 'Week 3',
      desc: 'Dive deep into string manipulation and reusable functional logic using methods and recursion.',
      points: ['String, StringBuffer, StringBuilder', 'Method Overloading', 'Recursion (Factorial, Fibonacci)', 'String Interview Programs']
    },
    {
      id: 4,
      title: 'OOP Concepts',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      duration: 'Week 4',
      desc: 'Learn the core pillars of OOP to design robust, modular, and maintainable Java applications.',
      points: ['Classes & Objects', 'Inheritance (Single, Multilevel)', 'Polymorphism (Compile/Runtime)', 'Encapsulation & Interfaces']
    },
    {
      id: 5,
      title: 'Exception Handling & Collections',
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      duration: 'Week 5',
      desc: 'Handle runtime errors gracefully and leverage the Collections Framework for dynamic data structures.',
      points: ['Try, Catch, Finally & Throws', 'Custom Exceptions', 'List & Set (ArrayList, HashSet)', 'Queue & Map (HashMap, TreeMap)']
    },
    {
      id: 6,
      title: 'Advanced Java',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      duration: 'Week 6',
      desc: 'Implement multithreading, file handling, and modern Java 8 features like Streams and Lambdas.',
      points: ['Multithreading & Synchronization', 'Java I/O Streams', 'File Handling & Serialization', 'Java 8 (Lambdas, Stream API)']
    },
    {
      id: 7,
      title: 'Database & Web Technologies',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
      duration: 'Week 7',
      desc: 'Connect Java to MySQL databases using JDBC and build dynamic web pages with Servlets and JSP.',
      points: ['RDBMS & SQL Queries', 'JDBC Architecture & CRUD', 'Transaction Management', 'Servlets & JSP Basics']
    },
    {
      id: 8,
      title: 'Hibernate, Spring & Spring Boot',
      icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
      duration: 'Week 8',
      desc: 'Build enterprise-grade REST APIs and Microservices using Spring Boot and Hibernate ORM.',
      points: ['Hibernate ORM & Mapping', 'Spring Core & IOC', 'Spring Boot REST APIs', 'Microservices & Interview Prep']
    }
  ];

  const toggleAccordion = (id) => {
    const newActiveId = activeAccordion === id ? null : id;
    setActiveAccordion(newActiveId);

    if (newActiveId !== null) {
      const module = modules.find(m => m.id === newActiveId);
      if (module) {
        track('Syllabus Module Viewed', {
          course: 'Java Fullstack',
          module: module.title
        });
      }
    }
  };

  return (
    <div className="flex-grow w-full min-h-screen relative overflow-hidden flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-8">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/10 blur-[120px] rounded-full"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
      >
        {/* Left Column: Hero & CTA */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full pt-8">
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold text-2xl shadow-[0_0_30px_rgba(249,115,22,0.15)]">
              ☕
            </div>
            <div>
              <span className="px-3 py-1 text-xs font-black uppercase tracking-widest text-white bg-orange-500 rounded-full shadow-[0_0_10px_rgba(251,146,60,0.3)]">
                Enterprise Stack
              </span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-950 mb-6 tracking-tight leading-tight">
            Java Mastery: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Data, Web & Backend</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-700 font-medium mb-10 leading-relaxed">
            Go from zero to deploying interactive data web apps in 8 weeks—using purely Java.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
            <TrackedEnrollButton 
              courseName="Java Fullstack" 
              href="/apply" 
              className="flex-1 min-h-[56px] px-8 py-4 bg-orange-500 text-white font-black rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center text-lg"
            >
              Apply Now
            </TrackedEnrollButton>
            <Link 
              href="/courses" 
              className="flex-1 min-h-[56px] px-8 py-4 bg-white text-blue-950 border border-blue-200 font-bold rounded-xl hover:bg-slate-50 shadow-sm transition-colors text-center flex items-center justify-center text-lg"
            >
              Back to Courses
            </Link>
          </motion.div>
          
          <motion.p variants={itemVariants} className="mt-8 text-sm text-slate-500 font-medium text-center sm:text-left">
            Just looking for interview practice? <Link href="/courses/mock-interviews" className="text-orange-600 hover:text-orange-500 hover:underline">Check out our Free Mock Interview Program.</Link>
          </motion.p>
        </div>

        {/* Right Column: Curriculum Accordion & Pricing */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div variants={itemVariants} className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 relative z-10 gap-4">
              <h2 className="text-2xl font-bold text-blue-950 flex items-center gap-3">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                Curriculum Highlights
              </h2>
              <a 
                href="/pdfs/Java%20Mastery-Data-Web-Backend.pdf" 
                download
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center justify-center gap-2 px-5 py-2.5 bg-orange-50 text-orange-700 hover:bg-orange-100 hover:text-orange-800 border border-orange-200 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm self-start sm:self-auto"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download PDF
              </a>
            </div>
            
            <div className="space-y-3 relative z-10">
              {modules.map((module) => {
                const isOpen = activeAccordion === module.id;
                return (
                  <div 
                    key={module.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? 'bg-white shadow-md border-orange-200' 
                        : 'bg-white/60 hover:bg-white/80 border-slate-200'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(module.id)}
                      className="w-full flex items-center justify-between p-3 md:p-4 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-3 pr-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-orange-100 border border-orange-200' : 'bg-slate-50 border border-slate-100'}`}>
                          <svg className={`w-5 h-5 transition-colors ${isOpen ? 'text-orange-600' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={module.icon}></path>
                          </svg>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                          <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${isOpen ? 'text-orange-500' : 'text-slate-400'}`}>Module {module.id}</span>
                          <h3 className={`font-bold text-sm md:text-base transition-colors ${isOpen ? 'text-orange-700' : 'text-blue-950'}`}>
                            {module.title}
                          </h3>
                        </div>
                      </div>
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'}`}>
                        <motion.svg 
                          animate={{ rotate: isOpen ? 180 : 0 }} 
                          transition={{ duration: 0.3 }}
                          className="w-4 h-4" 
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
                          <div className="p-3 md:p-4 pt-0 border-t border-slate-100 ml-12">
                            <div className="mb-3 inline-flex text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                              {module.duration}
                            </div>
                            <p className="text-slate-600 mb-4 text-xs md:text-sm leading-relaxed">
                              {module.desc}
                            </p>
                            
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-700 font-medium text-xs md:text-sm">
                              {module.points.map((point, idx) => (
                                <li key={idx} className="flex items-start bg-slate-50 p-2 rounded-lg border border-slate-100">
                                  <span className="text-orange-500 mr-2 text-base leading-none shrink-0 mt-[1px]">✓</span>
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
          </motion.div>

          <PricingCard courseName="Java Fullstack" />
        </div>
      </motion.div>
    </div>
  );
}
