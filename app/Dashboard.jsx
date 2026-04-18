import React from 'react';

// Simulate a database fetch (Replace with your ORM or SQL query)
async function fetchStudentData() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  return {
    firstName: 'Alex',
    bootcamp: 'Python Fullstack',
    progress: 68,
    currentModule: 'Advanced Django ORM',
    nextSession: {
      topic: 'Building REST APIs',
      date: 'Today • 6:00 PM EST',
      mentor: 'David Chen'
    },
    modules: [
      { title: 'Python Fundamentals', status: 'Completed', color: 'bg-emerald-100/80 text-emerald-700 border-emerald-200', icon: '✓' },
      { title: 'Web Frameworks', status: 'Completed', color: 'bg-emerald-100/80 text-emerald-700 border-emerald-200', icon: '✓' },
      { title: 'Advanced Django ORM', status: 'In Progress', color: 'bg-orange-100/80 text-orange-700 border-orange-200', icon: '▶' },
      { title: 'APIs & Security', status: 'Locked', color: 'bg-white/40 text-slate-500 border-white/60', icon: '🔒' }
    ]
  };
}

export default async function Dashboard() {
  const studentData = await fetchStudentData();

  return (
    <main className="flex-grow p-4 md:p-8 w-full max-w-6xl mx-auto relative z-10 py-12">
      {/* Dashboard Header */}
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-blue-950 drop-shadow-sm">Welcome back, {studentData.firstName}!</h2>
        <p className="text-slate-700 font-medium mt-2 text-lg">You're making great progress in the <span className="text-orange-500 font-bold">{studentData.bootcamp}</span> bootcamp.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Progress Card */}
        <div className="lg:col-span-2 bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-2xl font-bold text-blue-950 mb-6">Current Module: {studentData.currentModule}</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-700 font-bold">Bootcamp Progress</span>
            <span className="text-emerald-600 font-black text-xl">{studentData.progress}%</span>
          </div>
          <div className="w-full bg-slate-200/80 rounded-full h-4 mb-8 overflow-hidden shadow-inner border border-white/40">
            <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-4 rounded-full relative" style={{ width: `${studentData.progress}%` }}>
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="px-8 py-3 bg-blue-950 text-white font-bold rounded-xl shadow-lg shadow-blue-900/30 hover:bg-blue-900 hover:-translate-y-0.5 transition-all duration-300">Continue Learning</button>
            <button className="px-8 py-3 bg-white text-blue-950 border border-blue-200 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-all duration-300">View Syllabus</button>
          </div>
        </div>

        {/* Upcoming Session */}
        <div className="bg-blue-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden border border-blue-800 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
          <div className="absolute top-[-20%] right-[-20%] w-48 h-48 bg-orange-500/30 blur-3xl rounded-full pointer-events-none"></div>
          <div>
            <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-lg text-xs font-black uppercase tracking-wider mb-4">Live Session</div>
            <h3 className="text-2xl font-bold mb-2 relative z-10">{studentData.nextSession.topic}</h3>
            <p className="text-blue-200 font-medium mb-6 relative z-10">{studentData.nextSession.date}<br/>Mentored by {studentData.nextSession.mentor}</p>
          </div>
          <button className="w-full py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl shadow-lg shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 relative z-10">Join Zoom Room</button>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-blue-950 mb-6 drop-shadow-sm">Your Modules</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {studentData.modules.map((module, i) => (
          <div key={i} className="bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.03)] rounded-2xl p-6 hover:-translate-y-1 hover:bg-white/50 transition-all duration-300 cursor-pointer">
            <div className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider border mb-4 shadow-sm ${module.color}`}><span className="mr-1.5">{module.icon}</span> {module.status}</div>
            <h4 className="text-xl font-bold text-blue-950 mb-2">{module.title}</h4>
            <p className="text-slate-600 font-medium text-sm">Module {i + 1} • 12 Assignments</p>
          </div>))}
      </div>
    </main>
  );
}