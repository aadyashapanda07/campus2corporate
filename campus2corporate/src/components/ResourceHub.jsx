import React from 'react';
import { FileText, Download, UploadCloud, Search, Tag, CheckCircle, Trash2 } from 'lucide-react';

const DEFAULT_RESOURCES = [
  {
    id: 'res-1',
    title: 'TCS NQT Quantitative Aptitude Formula Sheet',
    category: 'Aptitude',
    fileName: 'TCS_NQT_Quant_Formulas.pdf',
    size: '1.2 MB',
    uploadedBy: 'Siddharth Sharma',
    downloads: 142
  },
  {
    id: 'res-2',
    title: 'Top 50 DSA Questions Cheat Sheet',
    category: 'Coding',
    fileName: 'DSA_Placement_Cheatsheet.pdf',
    size: '2.4 MB',
    uploadedBy: 'Priya Patel',
    downloads: 320
  },
  {
    id: 'res-3',
    title: 'Standard Product-Based Resume Template',
    category: 'Resume',
    fileName: 'ATS_Optimized_Resume_Template.pdf',
    size: '850 KB',
    uploadedBy: 'Aadyasha Panda',
    downloads: 285
  },
  {
    id: 'res-4',
    title: 'Behavioral HR Interview STAR Method Guide',
    category: 'Interview',
    fileName: 'STAR_Interview_Guide.pdf',
    size: '1.5 MB',
    uploadedBy: 'Ankit Gupta',
    downloads: 98
  }
];

export default function ResourceHub() {
  const [resources, setResources] = React.useState(DEFAULT_RESOURCES);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  // Upload states
  const [newTitle, setNewTitle] = React.useState('');
  const [newCategory, setNewCategory] = React.useState('Aptitude');
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [uploadSuccess, setUploadSuccess] = React.useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !selectedFile) return;

    const newResource = {
      id: `res-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      fileName: selectedFile.name,
      size: `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`,
      uploadedBy: 'You (Student)',
      downloads: 0
    };

    setResources([newResource, ...resources]);
    setNewTitle('');
    setSelectedFile(null);
    setUploadSuccess(true);

    setTimeout(() => {
      setUploadSuccess(false);
    }, 2500);
  };

  const handleDownload = (id) => {
    setResources(resources.map(res => {
      if (res.id === id) {
        // Trigger a mock file download in browser
        const element = document.createElement("a");
        const file = new Blob([`Mock PDF Content for ${res.title}`], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = res.fileName;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        
        return { ...res, downloads: res.downloads + 1 };
      }
      return res;
    }));
  };

  const handleDelete = (id) => {
    setResources(resources.filter(res => res.id !== id));
  };

  const filteredResources = resources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.fileName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">PDF Resource Sharing Hub</h1>
        <p className="text-sm text-slate-550 dark:text-slate-400">
          Upload, share, and download placement preparation files, aptitude formula documents, coding notes, and resume sheets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Upload Form (Left Panel) */}
        <div className="lg:col-span-5 bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm space-y-6">
          <h3 className="font-extrabold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <UploadCloud className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Upload PDF Document
          </h3>

          <form onSubmit={handleUploadSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">Document Title</label>
              <input
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Wipro Verbal Ability Grammar Guide"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-darkBg/60 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase">Prep Category</label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-darkBg/60 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Aptitude">Aptitude Prep</option>
                <option value="Coding">Coding Arena</option>
                <option value="Resume">AI Resume Analyzer</option>
                <option value="Interview">AI Mock Interview</option>
              </select>
            </div>

            {/* File Dropzone */}
            <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center bg-slate-50/50 dark:bg-darkBg/30 hover:border-blue-500/50 transition-all cursor-pointer relative min-h-[140px] flex flex-col items-center justify-center gap-2">
              <input
                type="file"
                accept=".pdf"
                required
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <FileText className="h-8 w-8 text-slate-400" />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                {selectedFile ? selectedFile.name : 'Select Prep PDF File'}
              </span>
              {!selectedFile && <span className="text-[10px] text-slate-400">PDF format, up to 10MB</span>}
            </div>

            {uploadSuccess && (
              <div className="flex items-center justify-center gap-1.5 p-3 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 rounded-xl text-xs font-bold">
                <CheckCircle className="h-4.5 w-4.5" /> PDF Shared to Board!
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all active:scale-95"
            >
              Upload & Share Document
            </button>
          </form>
        </div>

        {/* Resources Board List (Right Panel) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Filters and search */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-60">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search PDF documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-darkBg-card text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-1.5 bg-slate-200/50 dark:bg-slate-800/40 p-1 rounded-xl w-full sm:w-auto">
              {['All', 'Aptitude', 'Coding', 'Resume', 'Interview'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-1 sm:flex-none px-3.5 py-1.5 text-[10px] font-bold rounded-lg capitalize transition-all ${
                    selectedCategory === cat
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white'
                      : 'text-slate-500 hover:text-slate-850 dark:hover:text-slate-250'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Resources List Container */}
          <div className="grid grid-cols-1 gap-4">
            {filteredResources.map((res) => (
              <div
                key={res.id}
                className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-2xl p-5 shadow-sm flex items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4 text-left min-w-0">
                  <div className="p-3 bg-rose-50 dark:bg-rose-950/20 text-rose-500 rounded-xl shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 space-y-1">
                    <span className="inline-block text-[9px] font-extrabold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {res.category}
                    </span>
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm truncate">
                      {res.title}
                    </h4>
                    <p className="text-[10px] text-slate-450 dark:text-slate-500">
                      File: {res.fileName} ({res.size}) &middot; By: {res.uploadedBy}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDownload(res.id)}
                    className="p-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-655 dark:text-slate-300 rounded-xl transition-all"
                    title={`Download ${res.fileName} (${res.downloads} downloads)`}
                  >
                    <Download className="h-4.5 w-4.5" />
                  </button>
                  
                  {res.uploadedBy === 'You (Student)' && (
                    <button
                      onClick={() => handleDelete(res.id)}
                      className="p-2.5 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/20 dark:hover:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-xl transition-all"
                      title="Delete document"
                    >
                      <Trash2 className="h-4.5 w-4.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
