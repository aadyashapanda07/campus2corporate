import React from 'react';
import { Terminal, Award, Tag, CheckCircle, Play, Code2, ArrowLeft, Cpu } from 'lucide-react';

const PROBLEMS_DATA = [
  {
    id: 'p1',
    title: 'Two Sum',
    difficulty: 'Easy',
    company: ['Google', 'Amazon', 'TCS'],
    topic: 'Arrays & Hashing',
    desc: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
    constraints: ['2 <= nums.length <= 10^4', '-10^9 <= nums[i] <= 10^9', '-10^9 <= target <= 10^9'],
    templates: {
      javascript: `function twoSum(nums, target) {\n    // Write your code here\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (map.has(complement)) {\n            return [map.get(complement), i];\n        }\n        map.set(nums[i], i);\n    }\n}`,
      python: `def twoSum(nums: List[int], target: int) -> List[int]:\n    # Write your code here\n    seen = {}\n    for i, num in enumerate(nums):\n        remaining = target - num\n        if remaining in seen:\n            return [seen[remaining], i]\n        seen[num] = i`,
      cpp: `vector<int> twoSum(vector<int>& nums, int target) {\n    // Write your code here\n    unordered_map<int, int> mp;\n    for(int i=0; i<nums.size(); i++) {\n        int diff = target - nums[i];\n        if(mp.count(diff)) return {mp[diff], i};\n        mp[nums[i]] = i;\n    }\n    return {};\n}`
    }
  },
  {
    id: 'p2',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    company: ['Microsoft', 'Infosys'],
    topic: 'Stacks',
    desc: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets and open brackets are closed in the correct order.',
    constraints: ['1 <= s.length <= 10^4', 's consists of parentheses only \'()[]{}\'.'],
    templates: {
      javascript: `function isValid(s) {\n    // Write your code here\n    const stack = [];\n    const mapping = { ")": "(", "}": "{", "]": "[" };\n    for (let char of s) {\n        if (char in mapping) {\n            if (!stack.length || stack.pop() !== mapping[char]) return false;\n        } else {\n            stack.push(char);\n        }\n    }\n    return stack.length === 0;\n}`,
      python: `def isValid(s: str) -> bool:\n    # Write your code here\n    stack = []\n    mapping = {")": "(", "}": "{", "]": "["}\n    for char in s:\n        if char in mapping:\n            top = stack.pop() if stack else '#'\n            if mapping[char] != top:\n                return False\n        else:\n            stack.append(char)\n    return not stack`,
      cpp: `bool isValid(string s) {\n    // Write your code here\n    stack<char> st;\n    for(char c : s) {\n        if(c == \'(\' || c == \'{\' || c == \'[\') st.push(c);\n        else {\n            if(st.empty()) return false;\n            if(c == \')\' && st.top() != \'(\') return false;\n            if(c == \'}\' && st.top() != \'{\') return false;\n            if(c == \']\' && st.top() != \'[\') return false;\n            st.pop();\n        }\n    }\n    return st.empty();\n}`
    }
  },
  {
    id: 'p3',
    title: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    company: ['Amazon', 'Google', 'Microsoft'],
    topic: 'Dynamic Programming / Two Pointers',
    desc: 'Given a string s, return the longest palindromic substring in s. A palindrome is a string that reads the same backward as forward.',
    constraints: ['1 <= s.length <= 1000', 's consists of only digits and English letters.'],
    templates: {
      javascript: `function longestPalindrome(s) {\n    // Write your code here\n}`,
      python: `def longestPalindrome(s: str) -> str:\n    # Write your code here`,
      cpp: `string longestPalindrome(string s) {\n    // Write your code here\n}`
    }
  }
];

const LEADERBOARD_DATA = [
  { rank: 1, name: 'Siddharth Sharma', branch: 'CSE', points: 1250, solved: 84 },
  { rank: 2, name: 'Priya Patel', branch: 'ECE', points: 1100, solved: 72 },
  { rank: 3, name: 'Aadyasha Panda', branch: 'CSE', points: 950, solved: 60 },
  { rank: 4, name: 'Rohan Gupta', branch: 'IT', points: 820, solved: 55 },
  { rank: 5, name: 'Neha Reddy', branch: 'CSE', points: 790, solved: 51 }
];

export default function Coding() {
  const [selectedProblem, setSelectedProblem] = React.useState(null);
  const [lang, setLang] = React.useState('javascript');
  const [code, setCode] = React.useState('');
  
  // Console logs
  const [isRunning, setIsRunning] = React.useState(false);
  const [consoleOutput, setConsoleOutput] = React.useState(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [leaderboardTab, setLeaderboardTab] = React.useState(false);

  React.useEffect(() => {
    if (selectedProblem) {
      setCode(selectedProblem.templates[lang] || '// Start coding here...');
      setConsoleOutput(null);
      setIsSubmitted(false);
    }
  }, [selectedProblem, lang]);

  const handleRunCode = () => {
    setIsRunning(true);
    setConsoleOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      setConsoleOutput({
        status: 'Success',
        passed: '3/3 Test cases passed',
        runtime: '48 ms',
        memory: '38.4 MB'
      });
    }, 1500);
  };

  const handleSubmitCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setConsoleOutput({
        status: 'Accepted',
        passed: 'All Test Cases Passed!',
        runtime: '42 ms',
        memory: '38.1 MB',
        points: '+50 XP Awarded'
      });
      setIsSubmitted(true);
    }, 1500);
  };

  if (selectedProblem) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 bg-slate-50 dark:bg-darkBg transition-colors duration-300">
        <button
          onClick={() => setSelectedProblem(null)}
          className="flex items-center gap-1 text-slate-500 hover:text-slate-900 dark:hover:text-white font-bold text-sm mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Problems
        </button>

        {/* IDE Split Pane Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Problem Details Column (Left Pane) */}
          <div className="lg:col-span-5 bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                  selectedProblem.difficulty === 'Easy'
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400'
                    : 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400'
                }`}>
                  {selectedProblem.difficulty}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  {selectedProblem.topic}
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {selectedProblem.title}
              </h2>

              <p className="text-sm text-slate-650 dark:text-slate-300 leading-relaxed">
                {selectedProblem.desc}
              </p>

              {/* Constraints */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Constraints</span>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-400 dark:text-slate-500">
                  {selectedProblem.constraints.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            </div>

            {/* Target Companies tags */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase">Frequently Asked by:</span>
              <div className="flex gap-2">
                {selectedProblem.company.map(c => (
                  <span key={c} className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-650 dark:text-slate-300 border border-slate-200/40 dark:border-slate-700/40">
                    <Tag className="h-3 w-3 text-blue-500" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Code Editor and Console Column (Right Pane) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Editor Workspace */}
            <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden flex flex-col flex-1 min-h-[380px]">
              
              {/* Toolbar */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-slate-800 bg-slate-950">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-bold text-slate-200">Main Code Workspace</span>
                </div>
                
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  className="bg-slate-900 border border-slate-800 text-slate-300 rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="cpp">C++</option>
                </select>
              </div>

              {/* Textarea Code Space */}
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="flex-1 w-full bg-slate-900/90 text-slate-200 p-6 font-mono text-sm leading-relaxed border-none focus:ring-0 focus:outline-none resize-none min-h-[250px]"
              />

              {/* Console Action Buttons */}
              <div className="flex justify-between items-center px-6 py-4 bg-slate-950/70 border-t border-slate-800">
                <button
                  disabled={isRunning}
                  onClick={handleRunCode}
                  className="flex items-center gap-1.5 px-4 py-2 border border-slate-700 hover:border-slate-500 text-slate-350 text-xs font-bold rounded-xl transition-all"
                >
                  <Play className="h-3.5 w-3.5" />
                  Run Tests
                </button>
                <button
                  disabled={isRunning}
                  onClick={handleSubmitCode}
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95"
                >
                  <CheckCircle className="h-3.5 w-3.5" />
                  Submit Code
                </button>
              </div>
            </div>

            {/* Test Results Output Console */}
            {(isRunning || consoleOutput) && (
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-slate-200 font-mono space-y-4 shadow-xl">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Cpu className="h-4 w-4 text-cyan-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Execution Terminal</span>
                </div>

                {isRunning ? (
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="animate-pulse h-2 w-2 rounded-full bg-cyan-400" />
                    Compiling code and checking against test instances...
                  </div>
                ) : (
                  <div className="space-y-2 text-xs">
                    <p className="text-sm font-bold">
                      Status:{' '}
                      <span className={consoleOutput.status === 'Accepted' ? 'text-emerald-400' : 'text-cyan-400'}>
                        {consoleOutput.status}
                      </span>
                    </p>
                    <p className="text-slate-400">{consoleOutput.passed}</p>
                    <p className="text-slate-400">Time Complexity: {consoleOutput.runtime}</p>
                    <p className="text-slate-400">Memory Space: {consoleOutput.memory}</p>
                    {consoleOutput.points && (
                      <p className="text-emerald-400 font-bold text-sm pt-2">{consoleOutput.points}</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Coding Arena</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Build your coding skills and practice questions asked by top product-based recruiters.
          </p>
        </div>
        
        {/* Toggle between problems and leaderboard */}
        <div className="flex gap-2 bg-slate-200/50 dark:bg-slate-800/40 p-1 rounded-xl w-fit">
          <button
            onClick={() => setLeaderboardTab(false)}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${!leaderboardTab ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white' : 'text-slate-500 hover:text-slate-800'}`}
          >
            DSA Challenges
          </button>
          <button
            onClick={() => setLeaderboardTab(true)}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${leaderboardTab ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white' : 'text-slate-500 hover:text-slate-800'}`}
          >
            Leaderboard
          </button>
        </div>
      </div>

      {!leaderboardTab ? (
        /* PROBLEMS LIBRARY LIST */
        <div className="grid grid-cols-1 gap-4">
          {PROBLEMS_DATA.map(problem => {
            return (
              <div
                key={problem.id}
                className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-2xl p-5 shadow-sm hover:scale-[1.01] hover:border-slate-350 dark:hover:border-slate-700 transition-all duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-base hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer" onClick={() => setSelectedProblem(problem)}>
                      {problem.title}
                    </h3>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      problem.difficulty === 'Easy'
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400'
                        : 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400'
                    }`}>
                      {problem.difficulty}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium">
                    <span>{problem.topic}</span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1">
                      Targeted Companies:{' '}
                      <span className="text-slate-650 dark:text-slate-300">{problem.company.join(', ')}</span>
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProblem(problem)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl text-xs shadow-md transition-all active:scale-95 text-center"
                >
                  Enter Workspace
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        /* GLOBAL STUDENT LEADERBOARD */
        <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Global Rankings</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-400 uppercase">
                  <th className="px-6 py-4">Rank</th>
                  <th className="px-6 py-4">Student Name</th>
                  <th className="px-6 py-4">Branch</th>
                  <th className="px-6 py-4">Solved Problems</th>
                  <th className="px-6 py-4">Experience Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                {LEADERBOARD_DATA.map((row) => (
                  <tr key={row.rank} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                    <td className="px-6 py-4 font-bold text-slate-500 dark:text-slate-400">
                      {row.rank === 1 ? '🥇 1' : row.rank === 2 ? '🥈 2' : row.rank === 3 ? '🥉 3' : row.rank}
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-800 dark:text-slate-100">{row.name}</td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{row.branch}</td>
                    <td className="px-6 py-4 font-semibold text-slate-650 dark:text-slate-200">{row.solved} Solved</td>
                    <td className="px-6 py-4 font-extrabold text-blue-600 dark:text-blue-400">{row.points} XP</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
