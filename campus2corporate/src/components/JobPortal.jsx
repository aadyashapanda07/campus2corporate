import React from 'react';
import { Briefcase, MapPin, Calendar, CheckSquare, X, Send } from 'lucide-react';

const JOBS_DATA = [
  {
    id: 'j1',
    company: 'Google',
    role: 'Associate Software Engineer',
    type: 'Full-Time',
    location: 'Bangalore, India',
    deadline: 'July 15, 2026',
    eligibility: 'B.Tech CSE/IT, CGPA >= 8.0, No active backlogs',
    skills: 'Java/C++, Data Structures, Algorithms, System Design'
  },
  {
    id: 'j2',
    company: 'Amazon',
    role: 'Cloud Engineering Intern',
    type: 'Internship (6 Months)',
    location: 'Hyderabad, India (Hybrid)',
    deadline: 'July 10, 2026',
    eligibility: 'B.Tech CSE/IT/ECE, CGPA >= 7.5',
    skills: 'Linux, AWS Core Concepts, Python/Bash Scripting, Networks'
  },
  {
    id: 'j3',
    company: 'TCS',
    role: 'Systems Engineer - Digital Profile',
    type: 'Full-Time',
    location: 'Pan India',
    deadline: 'August 01, 2026',
    eligibility: 'All B.Tech Branches, CGPA >= 6.5, Max 1 backlog allowed',
    skills: 'Programming Basics (Java/Python/C), DBMS, Aptitude, Coding Test'
  },
  {
    id: 'j4',
    company: 'Microsoft',
    role: 'Support Engineer',
    type: 'Full-Time',
    location: 'Noida, India',
    deadline: 'July 25, 2026',
    eligibility: 'B.Tech CSE/IT/ECE/EE, CGPA >= 7.0',
    skills: 'Operating Systems, Networking, Database SQL, Communication'
  }
];

export default function JobPortal() {
  const [filterType, setFilterType] = React.useState('all'); // 'all', 'full-time', 'internship'
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedJob, setSelectedJob] = React.useState(null);
  const [isApplying, setIsApplying] = React.useState(false);
  const [appliedJobs, setAppliedJobs] = React.useState({});

  const filteredJobs = JOBS_DATA.filter(job => {
    const matchesType = filterType === 'all' || job.type.toLowerCase().includes(filterType);
    const matchesSearch = job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.skills.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleApply = (jobId) => {
    setIsApplying(true);
    setTimeout(() => {
      setIsApplying(false);
      setAppliedJobs(prev => ({ ...prev, [jobId]: true }));
      setSelectedJob(null);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Job & Internship Portal</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Browse active entry-level engineering roles and internships. Apply with your AI-verified student profile.
        </p>
      </div>

      {/* Filters Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border p-4 rounded-3xl shadow-sm">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search by company, role, or skill..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-80 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-darkBg/60 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Tabs */}
        <div className="flex gap-2 bg-slate-200/50 dark:bg-slate-800/40 p-1 rounded-xl w-full md:w-auto">
          {['all', 'full-time', 'internship'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilterType(tab)}
              className={`flex-1 md:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-all capitalize ${
                filterType === tab
                  ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-250'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of postings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredJobs.map((job) => {
          const isApplied = appliedJobs[job.id];
          return (
            <div
              key={job.id}
              className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm hover:scale-[1.01] hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="text-left">
                    <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {job.company}
                    </span>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg mt-2">
                      {job.role}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-350 px-2.5 py-1 rounded-lg">
                    {job.type}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-slate-450" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-455" />
                    Apply Before: <span className="font-bold text-rose-500">{job.deadline}</span>
                  </div>
                </div>

                {/* Eligibility criteria summary */}
                <div className="p-3.5 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800/60 text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-200 block mb-1">ELIGIBILITY CRITERIA</span>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{job.eligibility}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Details & Skills
                </button>

                <button
                  disabled={isApplied}
                  onClick={() => handleApply(job.id)}
                  className={`px-4 py-2.5 text-xs font-bold rounded-xl shadow-md transition-all active:scale-95 ${
                    isApplied
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-600 dark:bg-emerald-950/20 dark:border-emerald-900/40 dark:text-emerald-400 shadow-none cursor-default'
                      : 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900'
                  }`}
                >
                  {isApplied ? 'Application Sent' : 'One-Click Apply'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl space-y-6">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute right-6 top-6 p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850"
            >
              <X className="h-4.5 w-4.5 text-slate-505" />
            </button>

            <div className="space-y-4">
              <span className="text-xs font-extrabold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-full uppercase">
                {selectedJob.company}
              </span>
              <h3 className="font-extrabold text-xl text-slate-950 dark:text-white">
                {selectedJob.role}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                {selectedJob.type} &middot; {selectedJob.location}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="font-bold text-slate-700 dark:text-slate-250">Key Skills Required:</span>
                <p className="text-slate-500 dark:text-slate-450 leading-relaxed">{selectedJob.skills}</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-slate-700 dark:text-slate-250">Details & Requirements:</span>
                <p className="text-slate-500 dark:text-slate-455 leading-relaxed">
                  Candidates must qualify through online aptitude & programming screens on Campus2Corporate platform prior to corporate scheduling interviews.
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setSelectedJob(null)}
                className="flex-1 py-3 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-xl text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Close
              </button>
              
              <button
                disabled={appliedJobs[selectedJob.id] || isApplying}
                onClick={() => handleApply(selectedJob.id)}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md active:scale-95 disabled:opacity-50"
              >
                {isApplying ? 'Sending Profile...' : appliedJobs[selectedJob.id] ? 'Applied' : 'Apply Now'}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
