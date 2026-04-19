'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';

export default function ApplyPage() {
  // Define your URLs. We fallback to your provided Mock Interview link if the environment variable isn't set yet.
  const enrollmentUrl = process.env.NEXT_PUBLIC_ENROLLMENT_FORM_URL || "#";
  const mockInterviewUrl = process.env.NEXT_PUBLIC_MOCK_INTERVIEW_FORM_URL || "https://docs.google.com/forms/d/e/1FAIpQLSdczT9ww2ICd9qjDIHTIkitQD1mVcmY7B5BuJyWuyp3b7vfGw/viewform?usp=publish-editor";

  return (
    <main className="flex-grow flex flex-col items-center justify-center px-4 py-16 md:py-24 relative z-10">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4"
          >
            Join <span className="text-orange-500">Stack</span> School
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto"
          >
            Choose the program that fits your current career stage. Whether you want to learn from scratch or perfect your interview skills, we have you covered.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Course Enrollment Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-10 shadow-lg shadow-blue-900/5 flex flex-col relative"
          >
            <h2 className="text-3xl font-black text-blue-950 mb-2">Course Enrollment</h2>
            <p className="text-emerald-600 font-bold mb-4 tracking-wide uppercase text-sm">Full-Stack Engineering</p>
            <p className="text-slate-700 mb-8 leading-relaxed">
              Join our intensive fast-track programs. We mold your raw potential into a polished, highly sought-after engineering profile perfectly suited for top tech companies.
            </p>
            
            <div className="space-y-4 mb-10 flex-grow text-sm font-medium text-slate-700">
              <p className="flex items-center"><span className="text-orange-500 text-lg mr-2">✓</span> Python Fast-Track & Java Fullstack</p>
              <p className="flex items-center"><span className="text-orange-500 text-lg mr-2">✓</span> Lifetime Career Support</p>
              <p className="flex items-center"><span className="text-orange-500 text-lg mr-2">✓</span> 1-on-1 Elite Mentorship</p>
              <p className="flex items-center"><span className="text-orange-500 text-lg mr-2">✓</span> Real-world Project Building</p>
            </div>

            <a 
              href={enrollmentUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => track('Enrollment Clicked', { type: 'Course Enrollment' })}
              className="w-full py-4 bg-blue-950 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 hover:bg-blue-900 hover:-translate-y-1 transition-all duration-300 text-center text-lg"
            >
              Enroll in Courses
            </a>
          </motion.div>

          {/* Mock Interview Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-white/80 to-orange-50/50 backdrop-blur-xl border border-orange-200/60 rounded-3xl p-8 md:p-10 shadow-xl shadow-orange-500/10 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl z-10 shadow-sm">
              Fee: ₹0 (Limited Slots)
            </div>
            
            <h2 className="text-3xl font-black text-blue-950 mb-2">Mock Interview Program</h2>
            <p className="text-orange-500 font-bold mb-4 tracking-wide uppercase text-sm">Master the Interview, Land the Job.</p>
            <p className="text-slate-700 mb-6 leading-relaxed text-sm">
              Greetings from Stack School! Struggling with technical rounds or HR screenings? Our standalone Mock Interview program is designed to transform your theoretical knowledge into interview success.
            </p>
            
            <div className="space-y-6 mb-10 flex-grow">
              <div>
                <h4 className="font-bold text-blue-950 flex items-center"><span className="mr-2">🚀</span> Program Highlights</h4>
                <ul className="text-sm font-medium text-slate-600 mt-2 space-y-1.5 ml-6 list-disc marker:text-orange-400">
                  <li><strong className="text-slate-700">Technical Mock Interviews:</strong> 1-on-1 sessions on Java, Python, DSA, and System Design.</li>
                  <li><strong className="text-slate-700">HR & Soft Skills Rounds:</strong> Polish your communication and body language.</li>
                  <li><strong className="text-slate-700">Live Coding Challenges:</strong> Timed LeetCode/HackerRank style environments.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-blue-950 flex items-center"><span className="mr-2">💡</span> What You Get</h4>
                <ul className="text-sm font-medium text-slate-600 mt-2 space-y-1.5 ml-6 list-disc marker:text-emerald-400">
                  <li><strong>Detailed Readiness Report:</strong> Personalized feedback.</li>
                  <li><strong>Resume Review:</strong> Expert CV tips to stand out.</li>
                  <li><strong>Placement-Style Practice:</strong> Recent 2026 campus papers.</li>
                </ul>
              </div>
            </div>

            <a 
              href={mockInterviewUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => track('Enrollment Clicked', { type: 'Mock Interview' })}
              className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/40 hover:bg-orange-400 hover:-translate-y-1 transition-all duration-300 text-center text-lg"
            >
              Book Your Slot Now (Online Mon-Fri)
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}