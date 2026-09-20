import React from 'react';
import { ArrowRight, BrainCircuit, Terminal, FileCheck, Speech, Briefcase, Award, TrendingUp, Sparkles } from 'lucide-react';

export default function Home({ setCurrentPage, user }) {
  const handleCTA = () => {
    if (user) {
      setCurrentPage('dashboard');
    } else {
      setCurrentPage('auth');
    }
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      {/* Background blobs for premium glowing style */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-blue-400/10 dark:bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-cyan-400/10 dark:bg-cyan-500/10 blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 border border-blue-200/50 dark:border-blue-800/50 text-blue-600 dark:text-blue-400">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered Placement Prep
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Bridge the Gap from <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Campus to Corporate
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Master coding, solve aptitude tests, optimize your resume with ATS analytics, and practice speaking in AI mock interviews. All in one premium platform.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button
                onClick={handleCTA}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 active:scale-95 transition-all duration-200"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className="px-6 py-3.5 rounded-xl text-base font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-all duration-200"
              >
                Learn More
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-white">94%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Placements Rate</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-white">10k+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">DSA Questions</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-white">24/7</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">AI Mentor Help</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-[400px] aspect-[4/5] rounded-3xl p-6 glass-panel border border-white/20 dark:border-white/5 shadow-2xl relative flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-cyan-500/5" />
              
              <div className="flex justify-between items-center z-10">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-bold uppercase">
                  Live Dashboard
                </div>
              </div>

              {/* Mock Dashboard Widget */}
              <div className="z-10 bg-slate-900/5 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
                    <BrainCircuit className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400 dark:text-slate-400">Student Profile Strength</p>
                    <p className="text-sm font-extrabold text-slate-800 dark:text-white">Corporate Ready (82%)</p>
                  </div>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[82%]" />
                </div>
              </div>

              {/* Activity Feeds */}
              <div className="z-10 space-y-2.5">
                <div className="flex items-center justify-between text-xs py-2 px-3 rounded-xl bg-white/70 dark:bg-slate-800/50 border border-white dark:border-slate-700/50">
                  <span className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200">
                    <Terminal className="h-4 w-4 text-emerald-500" /> Two Sum - Solved
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500">2m ago</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 px-3 rounded-xl bg-white/70 dark:bg-slate-800/50 border border-white dark:border-slate-700/50">
                  <span className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200">
                    <FileCheck className="h-4 w-4 text-cyan-500" /> Resume Analyzer ATS 78
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500">1h ago</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 px-3 rounded-xl bg-white/70 dark:bg-slate-800/50 border border-white dark:border-slate-700/50">
                  <span className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200">
                    <Speech className="h-4 w-4 text-amber-500" /> Mock Interview - Complete
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500">1d ago</span>
                </div>
              </div>

              {/* Bottom text */}
              <div className="z-10 flex justify-between items-center text-[10px] text-slate-400 dark:text-slate-500">
                <span>Placement prep v2.0</span>
                <span>Active 2,410 Students</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars / Features */}
      <section className="bg-white dark:bg-darkBg-card/40 py-20 border-y border-slate-200 dark:border-darkBg-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Complete Placement Ecosystem
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Everything you need to clear the coding rounds, aptitude exams, and corporate interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Aptitude */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-left hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all duration-300 group cursor-pointer" onClick={() => setCurrentPage('aptitude')}>
              <div className="p-3 bg-blue-100 dark:bg-blue-950/60 rounded-xl text-blue-600 dark:text-blue-400 w-fit mb-4">
                <BrainCircuit className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">Aptitude Preparation</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Quantitative, Logical Reasoning, and Verbal Ability practice with custom topic tests and mock exams.
              </p>
            </div>

            {/* Coding */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-left hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all duration-300 group cursor-pointer" onClick={() => setCurrentPage('coding')}>
              <div className="p-3 bg-cyan-100 dark:bg-cyan-950/60 rounded-xl text-cyan-600 dark:text-cyan-400 w-fit mb-4">
                <Terminal className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">Coding Arena</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                DSA questions categorized by Easy, Medium, and Hard. Filter by target company tags and track the leaderboard.
              </p>
            </div>

            {/* Resume Analyzer */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-left hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all duration-300 group cursor-pointer" onClick={() => setCurrentPage('resume')}>
              <div className="p-3 bg-emerald-100 dark:bg-emerald-950/60 rounded-xl text-emerald-600 dark:text-emerald-400 w-fit mb-4">
                <FileCheck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">AI Resume Analyzer</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Drag-and-drop resume ATS scanner. Review instant score, missing skills gaps, and clear action suggestions.
              </p>
            </div>

            {/* Mock Interview */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-left hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all duration-300 group cursor-pointer" onClick={() => setCurrentPage('interview')}>
              <div className="p-3 bg-amber-100 dark:bg-amber-950/60 rounded-xl text-amber-600 dark:text-amber-400 w-fit mb-4">
                <Speech className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400">AI Mock Interview</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Interactive speaking terminal with conversational AI assessing answers, voice metrics, and overall confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap & Jobs Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-8 lg:p-10 shadow-xl space-y-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute right-[-5%] bottom-[-10%] w-[15rem] h-[15rem] rounded-full bg-white/5 blur-3xl pointer-events-none" />
            <div className="space-y-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold">Prep Journey</span>
              <h3 className="text-2xl lg:text-3xl font-extrabold">Company Roadmap Portals</h3>
              <p className="text-blue-100 text-sm leading-relaxed max-w-md">
                Follow curated step-by-step preparation timelines custom tailored for Google, Microsoft, Amazon, TCS, Infosys, and more.
              </p>
            </div>
            <button
              onClick={handleCTA}
              className="flex items-center gap-2 bg-white text-blue-700 font-bold px-5 py-3 rounded-xl shadow-md w-fit hover:scale-105 active:scale-95 transition-all mt-4"
            >
              Explore Roadmaps
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-3xl p-8 lg:p-10 shadow-xl space-y-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute right-[-5%] bottom-[-10%] w-[15rem] h-[15rem] rounded-full bg-white/5 blur-3xl pointer-events-none" />
            <div className="space-y-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold">Career Board</span>
              <h3 className="text-2xl lg:text-3xl font-extrabold">Job & Internship Portal</h3>
              <p className="text-cyan-100 text-sm leading-relaxed max-w-md">
                Browse hand-picked active job postings, entry-level roles, and internships with clean branch eligibility filters.
              </p>
            </div>
            <button
              onClick={() => setCurrentPage(user ? 'jobs' : 'auth')}
              className="flex items-center gap-2 bg-white text-cyan-700 font-bold px-5 py-3 rounded-xl shadow-md w-fit hover:scale-105 active:scale-95 transition-all mt-4"
            >
              Browse Openings
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
