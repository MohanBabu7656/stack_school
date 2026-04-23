import React from 'react';
import CourseList from './CourseList';

export const metadata = {
  title: 'Our Courses | Stack School',
  description: 'Explore our comprehensive coding bootcamps.',
};

export default function CoursesPage() {
  return (
    <main className="flex-grow px-4 md:px-8 py-20 md:py-32 flex justify-center relative z-10">
      <div className="max-w-6xl w-full relative z-10 flex flex-col items-center">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">Elite Training</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-blue-950 mb-6 tracking-tight drop-shadow-sm">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">Programs</span>
          </h1>
          <p className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Master modern web development, build production-grade projects, and get hired.
          </p>
        </div>

        <div className="md:hidden flex items-center justify-end w-full mb-4 pr-2 opacity-80 animate-bounce-x">
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center">Swipe <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span>
        </div>
        <CourseList />
      </div>
    </main>
  );
}