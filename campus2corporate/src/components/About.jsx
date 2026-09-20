import React from 'react';
import { Target, Users, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function About() {
  const steps = [
    {
      title: "Targeted Skills Audit",
      desc: "Identify critical technical and verbal skills needed for target corporate recruiters."
    },
    {
      title: "Practice & Refine",
      desc: "Participate in timed mock aptitude quizzes and DSA coding editors to maximize coding speeds."
    },
    {
      title: "AI Analysis Check",
      desc: "Obtain dynamic score tracking and detailed ATS analysis for resume review and speech responses."
    },
    {
      title: "Apply & Transition",
      desc: "Submit applications directly to entry-level jobs and internship postings fitting eligibility criteria."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Our Vision for{' '}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Campus2Corporate
          </span>
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
          Transitioning from university lecture halls to professional corporate boardrooms is one of the most challenging steps in a student's career. Campus2Corporate is an AI-powered portal designed to make this journey smooth, structured, and successful.
        </p>
      </div>

      {/* Philosophy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border shadow-sm text-center space-y-4">
          <div className="mx-auto p-3 bg-blue-100 dark:bg-blue-950/60 rounded-xl text-blue-600 dark:text-blue-400 w-fit">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">Relentless Focus</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Directly align student practices with the actual examination patterns and topics demanded by tech and product-based companies.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border shadow-sm text-center space-y-4">
          <div className="mx-auto p-3 bg-cyan-100 dark:bg-cyan-950/60 rounded-xl text-cyan-600 dark:text-cyan-400 w-fit">
            <BookOpen className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">Comprehensive Library</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Consolidate high-quality programming challenges, quant/logical aptitude papers, and company-specific resources in one place.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border shadow-sm text-center space-y-4">
          <div className="mx-auto p-3 bg-emerald-100 dark:bg-emerald-950/60 rounded-xl text-emerald-600 dark:text-emerald-400 w-fit">
            <Users className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">AI-Powered Feedback</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Simulate actual interview settings and parse resumes using Large Language Model engines to detect gaps before recruiters do.
          </p>
        </div>
      </div>

      {/* Step by Step Timeline */}
      <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-8 lg:p-12 shadow-sm space-y-8">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white text-center">
          How Students Advance to Corporate Placement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-3 relative z-10">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-extrabold text-sm">
                  {idx + 1}
                </span>
                <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base">{step.title}</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed pl-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final-Year Project Badge */}
      <div className="max-w-md mx-auto text-center border border-slate-200 dark:border-darkBg-border p-6 rounded-2xl bg-white dark:bg-darkBg-card/50 flex flex-col items-center space-y-2">
        <ShieldCheck className="h-10 w-10 text-emerald-500" />
        <h4 className="font-extrabold text-slate-900 dark:text-white">Academic Integrity & Verification</h4>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          This system was designed as a B.Tech Final-Year Capstone Project, adhering to requirements of responsive, modern React design architectures.
        </p>
      </div>
    </div>
  );
}
