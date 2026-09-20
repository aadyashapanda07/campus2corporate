import React from 'react';
import { Speech, ShieldCheck, Play, StopCircle, Mic, AlertCircle, Award, CheckCircle2 } from 'lucide-react';

const INTERVIEW_QUESTIONS = {
  hr: [
    'Tell me about yourself and your background.',
    'Why do you want to join our company, and what makes you a good fit?',
    'Describe a challenging project you worked on and how you resolved team conflicts.'
  ],
  technical: [
    'Explain the difference between SQL and NoSQL databases, and when to use which.',
    'What is Virtual Memory, and how does paging work in Operating Systems?',
    'Describe how a HashMap works under the hood and how it resolves hash collisions.'
  ]
};

export default function MockInterview() {
  const [selectedType, setSelectedType] = React.useState(null);
  const [inSession, setInSession] = React.useState(false);
  const [currentQuestions, setCurrentQuestions] = React.useState([]);
  const [questionIdx, setQuestionIdx] = React.useState(0);
  const [transcript, setTranscript] = React.useState([]);
  const [userText, setUserText] = React.useState('');
  const [isRecording, setIsRecording] = React.useState(false);
  const [isEvaluating, setIsEvaluating] = React.useState(false);
  const [evaluationReport, setEvaluationReport] = React.useState(null);

  // Initialize session
  const startSession = (typeKey) => {
    setSelectedType(typeKey);
    const qList = INTERVIEW_QUESTIONS[typeKey];
    setCurrentQuestions(qList);
    setQuestionIdx(0);
    setTranscript([{ speaker: 'AI', text: `Hello! I will be your interviewer today. Let's start. Here is your first question: ${qList[0]}` }]);
    setUserText('');
    setEvaluationReport(null);
    setInSession(true);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userText.trim()) return;

    const nextIdx = questionIdx + 1;
    const updatedTranscript = [...transcript, { speaker: 'User', text: userText }];
    setTranscript(updatedTranscript);
    setUserText('');

    if (nextIdx < currentQuestions.length) {
      setIsRecording(false);
      // AI Interviewer asks next question after brief delay
      setTimeout(() => {
        setTranscript(prev => [...prev, { speaker: 'AI', text: `Excellent. Now, the next question: ${currentQuestions[nextIdx]}` }]);
        setQuestionIdx(nextIdx);
      }, 1000);
    } else {
      // Evaluate session
      setIsEvaluating(true);
      setTimeout(() => {
        setIsEvaluating(false);
        setEvaluationReport({
          communicationScore: 82,
          technicalScore: selectedType === 'technical' ? 75 : 85,
          confidenceScore: 80,
          positives: [
            'Spoke clearly with minimal filler words (like "um", "ah").',
            'Strong structural flow of explanations (e.g. using STAR method).',
            'Solid core conceptual understanding.'
          ],
          improvements: [
            selectedType === 'technical'
              ? 'Provide specific time complexities when explaining algorithms.'
              : 'Focus on quantifying achievements in project explanations.',
            'Maintain a slightly steadier pace during complex answers.'
          ]
        });
      }, 2500);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      setUserText('In my previous capstone project, I led a team of four to build a responsive portal using React and SQLite, integrating a mock database runner which improved testing latency by 30%.');
    } else {
      setIsRecording(true);
    }
  };

  const handleEndSession = () => {
    setInSession(false);
    setSelectedType(null);
  };

  if (inSession) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 bg-slate-50 dark:bg-darkBg transition-colors duration-300">
        <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 flex flex-col justify-between min-h-[500px]">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                AI {selectedType} Interviewer
              </h2>
              <p className="text-xs text-slate-400 dark:text-slate-500">Session in progress &middot; Recording Enabled</p>
            </div>
            
            <button
              onClick={handleEndSession}
              className="px-3 py-1.5 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs text-slate-500 dark:text-slate-400 font-bold rounded-lg"
            >
              Quit Interview
            </button>
          </div>

          {!evaluationReport ? (
            /* ACTIVE CHAT/SPEECH CONSOLE */
            <div className="flex-1 flex flex-col justify-between space-y-6">
              
              {/* Transcript list */}
              <div className="flex-1 max-h-[300px] overflow-y-auto space-y-4 pr-2">
                {transcript.map((msg, i) => {
                  const isAI = msg.speaker === 'AI';
                  return (
                    <div key={i} className={`flex ${isAI ? 'justify-start' : 'justify-end'}`}>
                      <div className={`max-w-[75%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        isAI
                          ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/50 dark:border-slate-700/50'
                          : 'bg-blue-600 text-white rounded-tr-none shadow-md shadow-blue-500/5'
                      }`}>
                        <span className="font-extrabold text-[10px] block mb-1 text-slate-450 dark:text-slate-400">
                          {isAI ? 'AI INTERVIEWER' : 'YOU (STUDENT)'}
                        </span>
                        {msg.text}
                      </div>
                    </div>
                  );
                })}
                {isEvaluating && (
                  <div className="flex justify-start">
                    <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 text-xs font-bold border border-blue-200/50">
                      AI is evaluating voice clarity, grammar correctness, and core concepts...
                    </div>
                  </div>
                )}
              </div>

              {/* Message Input & Recording Actions */}
              <form onSubmit={handleSendMessage} className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex gap-3">
                  
                  {/* Microphone simulated trigger */}
                  <button
                    type="button"
                    onClick={toggleRecording}
                    className={`p-3 rounded-xl border flex items-center justify-center transition-all ${
                      isRecording
                        ? 'bg-rose-500 border-rose-500 text-white animate-pulse'
                        : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:text-blue-500 hover:border-blue-500'
                    }`}
                    title={isRecording ? 'Stop recording and insert answer' : 'Record voice answer'}
                  >
                    <Mic className="h-5 w-5" />
                  </button>

                  <input
                    type="text"
                    required
                    disabled={isRecording}
                    value={userText}
                    onChange={(e) => setUserText(e.target.value)}
                    placeholder={isRecording ? 'Listening... click mic button again to stop recording.' : 'Type your answer here...'}
                    className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-darkBg/65 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                  <button
                    type="submit"
                    disabled={isRecording}
                    className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all active:scale-95 disabled:opacity-50"
                  >
                    Send Answer
                  </button>
                </div>
                {isRecording && (
                  <p className="text-[10px] text-rose-500 animate-pulse font-bold text-center">
                    RECORDING SYSTEM DETECTING: Speach-to-Text dynamic synthesis active...
                  </p>
                )}
              </form>
            </div>
          ) : (
            /* EVALUATION REVIEW SCREEN */
            <div className="space-y-8">
              <div className="text-center space-y-3">
                <div className="mx-auto p-4 bg-emerald-100 dark:bg-emerald-950/60 rounded-full text-emerald-600 dark:text-emerald-400 w-fit">
                  <ShieldCheck className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Interview Evaluated!</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                  Excellent work! Review your AI-powered performance dashboard details below.
                </p>
              </div>

              {/* Score breakdowns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-y border-slate-100 dark:border-slate-800">
                <div className="text-center p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40">
                  <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">{evaluationReport.communicationScore}%</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Communication</p>
                </div>
                <div className="text-center p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40">
                  <p className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400">{evaluationReport.technicalScore}%</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Technical Depth</p>
                </div>
                <div className="text-center p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40">
                  <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">{evaluationReport.confidenceScore}%</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Confidence Score</p>
                </div>
              </div>

              {/* Feedbacks bullet points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 text-sm">
                  <h4 className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="h-4.5 w-4.5" /> Strengths Detected
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {evaluationReport.positives.map((p, i) => <li key={i} className="flex gap-2"><span>&bull;</span>{p}</li>)}
                  </ul>
                </div>

                <div className="space-y-3 text-sm">
                  <h4 className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                    <AlertCircle className="h-4.5 w-4.5" /> Improvement Areas
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {evaluationReport.improvements.map((p, i) => <li key={i} className="flex gap-2"><span>&bull;</span>{p}</li>)}
                  </ul>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button
                  onClick={handleEndSession}
                  className="px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-extrabold rounded-xl shadow-md transition-all active:scale-95 text-xs sm:text-sm"
                >
                  Return to Categories
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">AI Mock Interview Console</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Practice face-to-face style questions evaluated in real time. Choose a track below to begin a mock session.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* HR Interview Card */}
        <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4 text-left">
            <div className="p-3 bg-blue-100 dark:bg-blue-950/60 rounded-xl text-blue-600 dark:text-blue-400 w-fit">
              <Speech className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">HR Placement Interview</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Tests soft skills, behavioral alignment, and STAR explanations.</p>
            </div>
            <div className="space-y-2 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <p>&bull; Questions: "Tell me about yourself", "Why this company"</p>
              <p>&bull; Scoring: Voice pacing, clarity, grammar accuracy</p>
            </div>
          </div>
          <button
            onClick={() => startSession('hr')}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-md active:scale-95 transition-all"
          >
            Start HR Interview
          </button>
        </div>

        {/* Technical Interview Card */}
        <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4 text-left">
            <div className="p-3 bg-cyan-100 dark:bg-cyan-950/60 rounded-xl text-cyan-600 dark:text-cyan-400 w-fit">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">Technical Placement Interview</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Tests data structures, DBMS, Operating Systems, and architecture.</p>
            </div>
            <div className="space-y-2 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <p>&bull; Questions: SQL vs NoSQL, HashMap, Paging & VM</p>
              <p>&bull; Scoring: Conceptual accuracy, details, technical terms</p>
            </div>
          </div>
          <button
            onClick={() => startSession('technical')}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-md active:scale-95 transition-all"
          >
            Start Technical Interview
          </button>
        </div>

      </div>
    </div>
  );
}
