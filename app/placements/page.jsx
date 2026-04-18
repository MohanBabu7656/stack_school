import React from 'react';

export const metadata = {
  title: 'Placements & Alumni | Stack School',
  description: 'See where our alumni are working and our placement statistics.',
};

export default function PlacementsPage() {
  return (
    <main className="flex-grow px-4 py-20 md:py-32 flex flex-col items-center relative z-10">
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-950 mb-6 drop-shadow-sm">Student Placements</h1>
        <p className="text-xl text-slate-700 font-medium">Join the ranks of our alumni working at top tech companies worldwide.</p>
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-md rounded-3xl p-8 text-center hover:-translate-y-1 transition-transform duration-300">
          <h4 className="text-5xl font-black text-blue-950 mb-2">92%</h4>
          <p className="text-sm text-slate-600 font-bold uppercase tracking-wider">Placement Rate</p>
        </div>
        <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-md rounded-3xl p-8 text-center hover:-translate-y-1 transition-transform duration-300">
          <h4 className="text-5xl font-black text-emerald-600 mb-2">+$35k</h4>
          <p className="text-sm text-slate-600 font-bold uppercase tracking-wider">Avg. Salary Increase</p>
        </div>
        <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-md rounded-3xl p-8 text-center hover:-translate-y-1 transition-transform duration-300">
          <h4 className="text-5xl font-black text-orange-500 mb-2">50+</h4>
          <p className="text-sm text-slate-600 font-bold uppercase tracking-wider">Hiring Partners</p>
        </div>
      </div>

      <div className="max-w-5xl w-full bg-white/40 backdrop-blur-lg border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-10 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
        
        <h3 className="text-3xl font-extrabold text-blue-950 mb-12 drop-shadow-sm text-center">Where Our Alumni Work</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-black text-slate-800 tracking-tighter">Amazon</div>
          <div className="text-2xl font-black text-slate-800 tracking-tighter">Google</div>
          <div className="text-2xl font-black text-slate-800 tracking-tighter">Microsoft</div>
          <div className="text-2xl font-black text-slate-800 tracking-tighter">Stripe</div>
          <div className="text-2xl font-black text-slate-800 tracking-tighter">Meta</div>
          <div className="text-2xl font-black text-slate-800 tracking-tighter">Netflix</div>
          <div className="text-2xl font-black text-slate-800 tracking-tighter">Apple</div>
          <div className="text-2xl font-black text-slate-800 tracking-tighter">Uber</div>
        </div>
      </div>
    </main>
  );
}