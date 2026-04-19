import React from 'react';
import Link from 'next/link';
import TrackedEnrollButton from '../../TrackedEnrollButton';

export const metadata = {
  title: 'Java Fullstack Course | Stack School',
};

export default function JavaCoursePage() {
  return (
    <main className="flex-grow px-4 py-20 md:py-32 flex justify-center relative z-10">
      <div className="max-w-4xl w-full bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="flex items-center mb-6">
          <span className="text-orange-600 font-mono font-bold bg-orange-100/80 px-3 py-1 rounded-lg mr-4">{'< java >'}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 drop-shadow-sm">Java Fullstack</h1>
        </div>
        
        <p className="text-xl text-slate-700 font-medium mb-10 leading-relaxed">
          Master enterprise-grade architecture. This comprehensive bootcamp takes you from core Java concepts to building highly scalable microservices using Spring Boot and dynamic frontends with Angular.
        </p>
        
        <h2 className="text-2xl font-bold text-blue-950 mb-4">Curriculum Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-orange-500 font-bold mr-2">1.</span> Core Java & Advanced Algorithms</div>
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-orange-500 font-bold mr-2">2.</span> Spring Boot REST APIs</div>
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-orange-500 font-bold mr-2">3.</span> Microservices & System Design</div>
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-orange-500 font-bold mr-2">4.</span> Angular SPAs & TypeScript</div>
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-orange-500 font-bold mr-2">5.</span> MySQL, Hibernate & JPA</div>
          <div className="bg-white/80 p-4 rounded-xl border border-slate-200 shadow-sm"><span className="text-orange-500 font-bold mr-2">6.</span> Enterprise Deployment & Docker</div>
        </div>

        <div className="flex space-x-4">
          <TrackedEnrollButton 
            courseName="Java" 
            href="/apply" 
            className="px-8 py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:bg-orange-400 hover:-translate-y-1 transition-all duration-300"
          >
            Apply Now
          </TrackedEnrollButton>
          <Link href="/courses" className="px-8 py-4 bg-white text-blue-950 border border-blue-200 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-colors">Back to Courses</Link>
        </div>
        <p className="mt-8 text-sm text-slate-500 font-medium">
          Just looking for interview practice? <Link href="/mock-interviews" className="text-orange-500 hover:underline">Check out our Free Mock Interview Program.</Link>
        </p>
      </div>
    </main>
  );
}