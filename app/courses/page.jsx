import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Our Courses | Stack School',
  description: 'Explore our comprehensive coding bootcamps.',
};

export default function CoursesPage() {
  return (
    <main className="flex-grow px-4 md:px-8 py-20 md:py-32 flex justify-center relative z-10">
      <div className="max-w-5xl w-full bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.06)] rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-orange-300/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-emerald-300/20 blur-3xl rounded-full pointer-events-none"></div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center text-blue-950 mb-12 drop-shadow-sm">Featured Stacks</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
          
          <div className="bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-2xl p-6 md:p-8 hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 to-transparent -z-10 pointer-events-none"></div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-950">Python Fast-Track</h4>
                <span className="px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-sm animate-pulse">New!</span>
              </div>
              <span className="text-emerald-600 font-mono font-bold bg-emerald-100/80 px-3 py-1 rounded-lg">{'< py >'}</span>
            </div>
            <p className="text-emerald-600 font-bold mb-5 text-lg">8-Week Data & Web Bootcamp</p>
            <ul className="text-sm md:text-base text-slate-700 font-medium space-y-3 mb-8 flex-grow">
              <li className="flex items-center"><span className="mr-3 text-emerald-500 font-bold">✓</span> Core Python & Data Structures</li>
              <li className="flex items-center"><span className="mr-3 text-emerald-500 font-bold">✓</span> MySQL Database & CRUD</li>
              <li className="flex items-center"><span className="mr-3 text-emerald-500 font-bold">✓</span> Streamlit UI Dashboards</li>
            </ul>
            <Link href="/courses/python" className="block text-center min-h-[44px] min-w-[44px] w-full sm:w-auto py-3.5 bg-white/80 border-2 border-blue-950 text-blue-950 font-bold rounded-xl hover:bg-blue-950 hover:text-white transition-colors duration-300 shadow-sm mt-auto text-sm md:text-base">Explore Fast-Track</Link>
          </div>

          <div className="bg-white/60 backdrop-blur-md border border-white/60 shadow-lg rounded-2xl p-6 md:p-8 hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 to-transparent -z-10 pointer-events-none"></div>
            <div className="flex justify-between items-start mb-4"><h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-950">Java Fullstack</h4><span className="text-orange-600 font-mono font-bold bg-orange-100/80 px-3 py-1 rounded-lg">{'< java >'}</span></div>
            <p className="text-orange-600 font-bold mb-5 text-lg">Enterprise-Grade Architecture</p>
            <ul className="text-sm md:text-base text-slate-700 font-medium space-y-3 mb-8 flex-grow">
              <li className="flex items-center"><span className="mr-3 text-orange-500 font-bold">✓</span> Spring Boot & Microservices</li>
              <li className="flex items-center"><span className="mr-3 text-orange-500 font-bold">✓</span> Angular & Scalable UI</li>
              <li className="flex items-center"><span className="mr-3 text-orange-500 font-bold">✓</span> Advanced Database Design</li>
            </ul>
            <Link href="/courses/java" className="block text-center min-h-[44px] min-w-[44px] w-full sm:w-auto py-3.5 bg-white/80 border-2 border-blue-950 text-blue-950 font-bold rounded-xl hover:bg-blue-950 hover:text-white transition-colors duration-300 shadow-sm mt-auto text-sm md:text-base">Explore Java Stack</Link>
          </div>

        </div>
      </div>
    </main>
  );
}