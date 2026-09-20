import React from 'react';
import { Award, Flame, BrainCircuit, Terminal, FileCheck, Speech, Briefcase, Bell, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Dashboard({ user, setCurrentPage }) {
  const [tasks, setTasks] = React.useState([
    { id: 'aptitude-1', text: 'Solve Quantitative Quiz: Percentages & Ratios', done: false, type: 'aptitude' },
    { id: 'coding-1', text: 'Solve "Two Sum" challenge in Coding Arena', done: false, type: 'coding' },
    { id: 'resume-1', text: 'Analyze ATS score of your Resume', done: false, type: 'resume' },
    { id: 'interview-1', text: 'Attempt HR Interview: "Tell me about yourself"', done: false, type: 'interview' }
  ]);

  const [alerts] = React.useState([
    { id: 1, text: 'TCS National Qualifier Test (NQT) deadline is in 3 days!', type: 'critical' },
    { id: 2, text: 'Your AI Resume improvement suggestion has been calculated.', type: 'info' }
  ]);

  const handleToggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const doneCount = tasks.filter(t => t.done).length;
  const progressPercent = Math.round((doneCount / tasks.length) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      
      {/* Greetings Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Welcome back, <span className="text-blue-600 dark:text-blue-400">{user.name}</span>!
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Let's make progress today. Target Companies: {user.targetCompanies.join(', ')}
          </p>
        </div>
        
        {/* Streak & Points Widgets */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/50 dark:border-amber-900/50 text-amber-700 dark:text-amber-400">
            <Flame className="h-5 w-5 fill-amber-500" />
            <div>
              <p className="text-xs text-amber-600 dark:text-amber-500 font-bold uppercase">Daily Streak</p>
              <p className="text-sm font-extrabold">{user.streak} Days</p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/50 dark:border-blue-900/50 text-blue-700 dark:text-blue-400">
            <Award className="h-5 w-5" />
            <div>
              <p className="text-xs text-blue-600 dark:text-blue-500 font-bold uppercase">Total Points</p>
              <p className="text-sm font-extrabold">{user.points} XP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Checklist & Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Recommended Tasks Checklist */}
        <div className="lg:col-span-8 bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recommended Tasks</h2>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 px-3 py-1 bg-blue-50 dark:bg-blue-950/40 rounded-full">
              {progressPercent}% Complete
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full transition-all duration-300" style={{ width: `${progressPercent}%` }} />
          </div>

          {/* Tasks List */}
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {tasks.map(task => (
              <div key={task.id} className="flex items-center justify-between py-4 group">
                <div className="flex items-center gap-3">
                  <button onClick={() => handleToggleTask(task.id)} className="focus:outline-none">
                    <CheckCircle2 className={`h-6 w-6 transition-colors ${task.done ? 'text-emerald-500 fill-emerald-500/10' : 'text-slate-300 dark:text-slate-700 hover:text-blue-500'}`} />
                  </button>
                  <span className={`text-sm font-medium transition-all ${task.done ? 'line-through text-slate-400 dark:text-slate-600' : 'text-slate-700 dark:text-slate-200'}`}>
                    {task.text}
                  </span>
                </div>
                <button
                  onClick={() => setCurrentPage(task.type)}
                  className="flex items-center gap-0.5 text-xs text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold"
                >
                  Start <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications & Alerts */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white mb-2">
              <Bell className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-base font-bold">Important Alerts</h2>
            </div>
            <div className="space-y-3">
              {alerts.map(alert => (
                <div
                  key={alert.id}
                  className={`p-3.5 rounded-2xl text-xs leading-relaxed border ${
                    alert.type === 'critical'
                      ? 'bg-rose-50 dark:bg-rose-950/20 border-rose-200/50 dark:border-rose-900/40 text-rose-800 dark:text-rose-400'
                      : 'bg-blue-50 dark:bg-blue-950/20 border-blue-200/50 dark:border-blue-900/40 text-blue-800 dark:text-blue-400'
                  }`}
                >
                  {alert.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Dashboard Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Coding metrics */}
        <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-cyan-500" />
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">Coding Arena Progress</h3>
            </div>
            <span className="text-xs text-slate-400 dark:text-slate-500">Global Rank #240</span>
          </div>
          <div className="flex items-end gap-4 py-3">
            <div className="text-left space-y-1">
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{user.solvedCount}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Problems Solved</p>
            </div>
            {/* Simple Inline SVG Chart for mini visual representation */}
            <div className="flex-1 h-14 flex items-end gap-1.5 justify-end">
              <div className="w-3 bg-cyan-500/20 rounded-t-sm h-[30%]" />
              <div className="w-3 bg-cyan-500/30 rounded-t-sm h-[45%]" />
              <div className="w-3 bg-cyan-500/50 rounded-t-sm h-[60%]" />
              <div className="w-3 bg-cyan-500/70 rounded-t-sm h-[40%]" />
              <div className="w-3 bg-cyan-500 rounded-t-sm h-[85%]" />
            </div>
          </div>
          <button onClick={() => setCurrentPage('coding')} className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/40 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 rounded-xl transition-all">
            Enter Coding Arena
          </button>
        </div>

        {/* Aptitude metrics */}
        <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-blue-500" />
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">Aptitude Score Accuracy</h3>
            </div>
            <span className="text-xs text-slate-400 dark:text-slate-500">Module Mock tests</span>
          </div>
          <div className="flex items-end gap-4 py-3">
            <div className="text-left space-y-1">
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white">{user.testScore}%</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Average Accuracy</p>
            </div>
            {/* Custom SVG gauge meter */}
            <div className="flex-1 flex justify-end">
              <svg className="w-14 h-14" viewBox="0 0 36 36">
                <path
                  className="text-slate-100 dark:text-slate-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-500"
                  strokeWidth="3.5"
                  strokeDasharray={`${user.testScore}, 100`}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
          </div>
          <button onClick={() => setCurrentPage('aptitude')} className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/40 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 rounded-xl transition-all">
            Open Aptitude Practice
          </button>
        </div>

        {/* AI Readiness metrics */}
        <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Speech className="h-5 w-5 text-emerald-500" />
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">AI Placement Readiness</h3>
            </div>
            <span className="text-xs text-slate-400 dark:text-slate-500">Corporate Assessment</span>
          </div>
          <div className="flex items-end gap-4 py-3">
            <div className="text-left space-y-1">
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white">82%</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Total Profile Readiness</p>
            </div>
            {/* Interactive SVG Radar/Skills graph representation */}
            <div className="flex-1 flex justify-end">
              <div className="w-24 bg-emerald-500/10 border border-emerald-500/30 rounded-xl py-1 text-center">
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-extrabold block">EXCELLENT</span>
                <span className="text-[9px] text-slate-400 block leading-tight">Ready to Apply</span>
              </div>
            </div>
          </div>
          <button onClick={() => setCurrentPage('resume')} className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/40 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 rounded-xl transition-all">
            Scan Resume with AI
          </button>
        </div>
      </div>
    </div>
  );
}
