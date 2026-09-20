import React from 'react';
import { UploadCloud, CheckCircle2, AlertCircle, RefreshCw, FileText, ChevronRight } from 'lucide-react';

export default function ResumeAnalyzer() {
  const [file, setFile] = React.useState(null);
  const [isParsing, setIsParsing] = React.useState(false);
  const [report, setReport] = React.useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (fileObj) => {
    setFile(fileObj);
    setIsParsing(true);
    setReport(null);

    // Simulate AI ATS analysis
    setTimeout(() => {
      setIsParsing(false);
      setReport({
        score: 78,
        positives: [
          'Excellent layout structure with distinct project subheadings.',
          'Quantified impact present (e.g., "improved latency by 40%").',
          'Good inclusion of modern backend technologies (Node.js, SQL).'
        ],
        gaps: [
          'Missing key DevOps/Cloud platforms (Docker, AWS) required by Google/Amazon.',
          'No portfolio or live GitHub hyperlinks detected in header.',
          'Aptitude tests/certifications section is blank.'
        ],
        rewrites: [
          {
            original: 'Responsible for writing database queries.',
            improved: 'Designed and optimized SQL queries, reducing API response latency by 25%.'
          },
          {
            original: 'Worked on React frontend of the placement website.',
            improved: 'Engineered responsive React dashboards using Tailwind CSS, increasing user session time by 15%.'
          }
        ]
      });
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">AI Resume Analyzer</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Upload your resume in PDF format to receive instant ATS score analysis, identify tech stack gaps, and get professional phrasing improvements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Upload Container (Left Pane) */}
        <div className="lg:col-span-5 bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm space-y-6">
          <h2 className="text-base font-bold text-slate-950 dark:text-white">Upload Area</h2>
          
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center bg-slate-50/50 dark:bg-darkBg/30 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center justify-center space-y-4 cursor-pointer min-h-[220px] group relative"
          >
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <UploadCloud className="h-10 w-10 text-slate-400 group-hover:text-blue-500 transition-colors" />
            <div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Drag & drop your PDF resume here
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                Supports standard PDF up to 4MB
              </p>
            </div>
            <button className="px-4 py-2 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 rounded-xl">
              Browse Files
            </button>
          </div>

          {/* Uploaded File display */}
          {file && (
            <div className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/20">
              <FileText className="h-8 w-8 text-blue-500" />
              <div className="text-left flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-800 dark:text-slate-100 truncate">{file.name}</p>
                <p className="text-[10px] text-slate-400 dark:text-slate-500">{(file.size / 1024).toFixed(1)} KB</p>
              </div>
            </div>
          )}

          {/* Parsing State */}
          {isParsing && (
            <div className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 text-xs font-bold border border-blue-200/50">
              <RefreshCw className="h-4 w-4 animate-spin" />
              AI is scanning content & checking ATS metrics...
            </div>
          )}
        </div>

        {/* ATS Score & Details (Right Pane) */}
        <div className="lg:col-span-7">
          {report ? (
            /* ANALYZED RESULTS SCREEN */
            <div className="space-y-6">
              
              {/* Score header */}
              <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm flex items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">ATS Placement Score</h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Excellent baseline. Add suggested keywords to clear the automated screen.</p>
                </div>
                
                {/* SVG Gauge */}
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100 dark:text-slate-800"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-emerald-500"
                      strokeWidth="3.5"
                      strokeDasharray={`${report.score}, 100`}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-lg font-extrabold text-slate-900 dark:text-white">{report.score}</span>
                </div>
              </div>

              {/* Analysis Lists */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Strengths */}
                <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm space-y-4">
                  <h4 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4.5 w-4.5" /> Resume Strengths
                  </h4>
                  <ul className="space-y-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {report.positives.map((p, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-emerald-500 font-bold">&bull;</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skill Gaps */}
                <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm space-y-4">
                  <h4 className="font-bold text-sm text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                    <AlertCircle className="h-4.5 w-4.5" /> Critical Gaps
                  </h4>
                  <ul className="space-y-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {report.gaps.map((g, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-rose-500 font-bold">&bull;</span>
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Rewrite Phrasings Suggestions */}
              <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm space-y-4">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">AI Phrasing Enhancements</h4>
                <div className="space-y-3 divide-y divide-slate-100 dark:divide-slate-800">
                  {report.rewrites.map((r, i) => (
                    <div key={i} className="pt-3 first:pt-0 space-y-1.5 text-xs">
                      <div className="text-slate-405 dark:text-slate-500 flex gap-2">
                        <span className="font-bold text-rose-500">Original:</span>
                        <p className="line-through">{r.original}</p>
                      </div>
                      <div className="text-slate-800 dark:text-slate-100 flex gap-2 font-medium">
                        <span className="font-bold text-emerald-500">Improved:</span>
                        <p className="text-slate-800 dark:text-slate-200">{r.improved}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* EMPTY SCREEN STATE */
            <div className="h-full border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-darkBg-card/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-3 min-h-[300px]">
              <FileText className="h-12 w-12 text-slate-300 dark:text-slate-700" />
              <h3 className="font-bold text-slate-700 dark:text-slate-350 text-base">No Scan Performed</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 max-w-sm">
                Upload your engineering resume to calculate placements metrics and detect spelling/stack issues.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
