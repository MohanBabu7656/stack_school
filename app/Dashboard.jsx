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
            <a href="#modules" className="px-8 py-3 bg-blue-950 text-white font-bold rounded-xl shadow-lg shadow-blue-900/30 hover:bg-blue-900 hover:-translate-y-0.5 transition-all duration-300 text-center">Continue Learning</a>
            <a href="/syllabus.pdf" target="_blank" className="px-8 py-3 bg-white text-blue-950 border border-blue-200 font-bold rounded-xl shadow-sm hover:bg-slate-50 transition-all duration-300 text-center">View Syllabus</a>
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
          <a href="https://zoom.us" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl shadow-lg shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 relative z-10">Join Zoom Room</a>
        </div>
      </div>

      <h3 id="modules" className="text-2xl font-bold text-blue-950 mb-6 drop-shadow-sm">Your Modules</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {studentData.modules.map((module, i) => (
          <div key={i} className="bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.03)] rounded-2xl p-6 hover:-translate-y-1 hover:bg-white/50 transition-all duration-300 cursor-pointer">
            <div className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider border mb-4 shadow-sm ${module.color}`}><span className="mr-1.5">{module.icon}</span> {module.status}</div>
            <h4 className="text-xl font-bold text-blue-950 mb-2">{module.title}</h4>
            <p className="text-slate-600 font-medium text-sm">Module {i + 1} • 12 Assignments</p>
          </div>))}
      </div>

      {/* Career Tools Section */}
      <h3 className="text-2xl font-bold text-blue-950 mt-16 mb-6 drop-shadow-sm">Career Prep Tools</h3>
      <div className="bg-gradient-to-br from-indigo-900 to-blue-950 rounded-3xl p-8 md:p-10 shadow-xl border border-blue-800 flex flex-col md:flex-row items-center justify-between hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-[-50%] left-[-10%] w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="mb-6 md:mb-0 relative z-10 md:mr-8">
          <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-black uppercase tracking-wider mb-4">New Feature</div>
          <h4 className="text-3xl font-bold text-white mb-3">AI Resume Scorer</h4>
          <p className="text-blue-200 font-medium max-w-xl leading-relaxed">Optimize your resume for Applicant Tracking Systems (ATS). Get instant, actionable AI feedback to ensure your profile stands out to top tech recruiters.</p>
        </div>
        <a href="https://mohan-babu-asanapuram.vercel.app/" target="_blank" rel="noopener noreferrer" className="shrink-0 w-full md:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-lg font-bold rounded-xl shadow-lg shadow-emerald-600/40 hover:-translate-y-0.5 transition-all duration-300 relative z-10 text-center whitespace-nowrap">
          Scan My Resume
        </a>
      </div>

      {/* GeeksforGeeks Inspired Lesson Preview */}
      <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] border border-slate-200 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-slate-200 pb-6 gap-4">
          <h3 className="text-3xl font-extrabold text-slate-900">Lesson: Introduction to Django ORM</h3>
          <span className="px-4 py-1.5 bg-[#e8f5e9] text-[#2f8d46] font-bold rounded-full text-sm border border-[#2f8d46]/20 self-start md:self-auto whitespace-nowrap">Reading Material</span>
        </div>
        
        <div className="gfg-article">
          <p>
            The Django Object-Relational Mapper (ORM) is one of the most powerful features of Django. It enables you to interact with your database, like you would with SQL. In other words, it's a way to create, retrieve, update and delete records in your database using standard Python code.
          </p>
          <p>
            To define a model, you inherit from <code className="gfg-inline-code">django.db.models.Model</code>. Each attribute of the model represents a database field.
          </p>

          <div className="gfg-code-block">
            <div className="gfg-code-header">
              <span className="gfg-code-lang">Python</span>
              <button className="gfg-copy-btn">Copy</button>
            </div>
            <pre className="gfg-pre">
{`from django.db import models

class BootcampStudent(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    enrollment_date = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"`}
            </pre>
          </div>
          
          <p>
            Once you have defined your models, you need to tell Django to create the corresponding database tables. You do this by running the <code className="gfg-inline-code">makemigrations</code> and <code className="gfg-inline-code">migrate</code> commands in your terminal.
          </p>
        </div>
      </div>
    </main>
  );
}