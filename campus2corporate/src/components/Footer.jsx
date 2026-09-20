import React from 'react';
import { GraduationCap, Github, Linkedin, Mail, Shield, ShieldCheck } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <GraduationCap className="h-7 w-7 text-blue-500" />
              <span className="font-extrabold text-lg text-white">Campus2Corporate</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              An AI-powered placement preparation platform helping college students transition seamlessly into corporate careers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('coding')} className="hover:text-white transition-colors">
                  Coding Arena
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('aptitude')} className="hover:text-white transition-colors">
                  Aptitude Practice
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('jobs')} className="hover:text-white transition-colors">
                  Job Portal
                </button>
              </li>
            </ul>
          </div>

          {/* AI Engines */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">AI Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setCurrentPage('resume')} className="hover:text-white transition-colors">
                  AI Resume Analyzer
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('interview')} className="hover:text-white transition-colors">
                  AI Mock Interview
                </button>
              </li>
              <li>
                <span className="text-slate-500">Confidence Scoring</span>
              </li>
              <li>
                <span className="text-slate-500">ATS Optimization</span>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-white transition-colors p-2 bg-slate-800 rounded-lg">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-slate-800 rounded-lg">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:support@campus2corporate.com" className="hover:text-white transition-colors p-2 bg-slate-800 rounded-lg">
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold bg-blue-950/40 border border-blue-900/60 w-fit px-2.5 py-1 rounded-full">
              <ShieldCheck className="h-3.5 w-3.5" />
              Final-Year Project Verified
            </div>
          </div>
        </div>

        {/* Bottom Credits Navbar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} Campus2Corporate. All rights reserved.</p>
          <div className="px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 text-slate-300 font-medium">
            made by aadyasha panda since 2025
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
