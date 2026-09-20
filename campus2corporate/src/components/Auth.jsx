import React from 'react';
import { Lock, Mail, User, GraduationCap, ArrowRight, ShieldCheck, ChevronRight, Tag } from 'lucide-react';

export default function Auth({ setUser, setCurrentPage }) {
  const [isLogin, setIsLogin] = React.useState(true);
  const [step, setStep] = React.useState(1); // 1: Basic details, 2: Academic Profile, 3: Goals & Interests

  // Auth fields
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullName, setFullName] = React.useState('');

  // Onboarding Profile fields
  const [branch, setBranch] = React.useState('Computer Science');
  const [year, setYear] = React.useState('4');
  const [skills, setSkills] = React.useState('');
  const [interests, setInterests] = React.useState('');
  const [targetCompanies, setTargetCompanies] = React.useState('');

  const branches = [
    'Computer Science & Engineering',
    'Information Technology',
    'Electronics & Communication',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering'
  ];

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Mock Login
      setUser({
        name: fullName || 'Aadyasha Panda',
        email: email || 'aadyasha@example.com',
        branch: 'Computer Science & Engineering',
        year: '4',
        skills: ['React', 'JavaScript', 'Python', 'Data Structures', 'SQL'],
        interests: ['Full Stack Development', 'AI Research'],
        targetCompanies: ['Google', 'Microsoft', 'Amazon', 'TCS'],
        points: 450,
        streak: 5,
        solvedCount: 18,
        testScore: 84
      });
      setCurrentPage('dashboard');
    } else {
      if (step < 3) {
        setStep(step + 1);
      } else {
        // Complete Signup
        const parsedSkills = skills.split(',').map(s => s.trim()).filter(Boolean);
        const parsedInterests = interests.split(',').map(i => i.trim()).filter(Boolean);
        const parsedCompanies = targetCompanies.split(',').map(c => c.trim()).filter(Boolean);

        setUser({
          name: fullName || 'New Student',
          email: email,
          branch: branch,
          year: year,
          skills: parsedSkills.length ? parsedSkills : ['C++', 'DBMS', 'HTML'],
          interests: parsedInterests.length ? parsedInterests : ['Software Engineering'],
          targetCompanies: parsedCompanies.length ? parsedCompanies : ['Infosys', 'TCS'],
          points: 100,
          streak: 1,
          solvedCount: 0,
          testScore: 0
        });
        setCurrentPage('dashboard');
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-16rem)] bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      <div className="w-full max-w-xl p-8 rounded-3xl glass-panel shadow-2xl border border-slate-200/50 dark:border-slate-800/40 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-2xl" />

        <div className="text-center space-y-2 mb-8">
          <GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400 mx-auto" />
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            {isLogin ? 'Welcome Back' : 'Create Student Account'}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {isLogin ? 'Sign in to access your placement prep dashboard' : `Step ${step} of 3: Onboarding`}
          </p>
        </div>

        <form onSubmit={handleAuthSubmit} className="space-y-5">
          {isLogin ? (
            /* LOGIN VIEW */
            <>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="student@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-darkBg/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-darkBg/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-base font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md active:scale-[0.98] transition-all"
              >
                Sign In
                <ArrowRight className="h-5 w-5" />
              </button>
            </>
          ) : (
            /* SIGNUP WIZARD VIEW */
            <>
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-darkBg/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="john@university.edu"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-darkBg/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                      <input
                        type="password"
                        required
                        placeholder="Choose a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-darkBg/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Branch of Study</label>
                    <select
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-darkBg/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    >
                      {branches.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Current Year</label>
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-darkBg/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    >
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year (Placement Ready)</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Skills (Comma Separated)</label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="React, C++, Python, SQL"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-darkBg/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Interests</label>
                    <input
                      type="text"
                      placeholder="Web Development, Cyber Security, Data Analytics"
                      value={interests}
                      onChange={(e) => setInterests(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-darkBg/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Target Companies</label>
                    <input
                      type="text"
                      placeholder="TCS, Google, Amazon, Infosys"
                      value={targetCompanies}
                      onChange={(e) => setTargetCompanies(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-darkBg/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-2">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 py-3 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-xl text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-md active:scale-95 transition-all"
                >
                  {step === 3 ? 'Complete Setup' : 'Continue'}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </>
          )}
        </form>

        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setStep(1);
            }}
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}
