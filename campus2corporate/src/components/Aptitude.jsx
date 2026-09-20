import React from 'react';
import { BrainCircuit, BookOpen, Clock, Award, CheckCircle2, AlertCircle, ChevronLeft } from 'lucide-react';

const APTITUDE_DATA = {
  quantitative: {
    title: 'Quantitative Aptitude (TCS & Wipro Practice)',
    topics: ['Percentages & Price Changes', 'Averages & Weights', 'Time & Work', 'Probability & Ratios'],
    questions: [
      {
        id: 'q1',
        text: 'A person increases the price of an item by 20% and then reduces it by 20%. What is the net percentage change in the price of the item?',
        options: ['No change', '4% increase', '4% decrease', '2% decrease'],
        correct: 2, // 4% decrease
        explanation: 'Let the initial price be 100.\n1. After a 20% increase: 100 + (20% of 100) = 120.\n2. After a 20% reduction on the new price (120): 120 - (20% of 120) = 120 - 24 = 96.\n3. Net change calculation: 96 - 100 = -4.\nHence, the price decreases by 4%.'
      },
      {
        id: 'q2',
        text: 'The average weight of 10 students is 40 kg. If a new student with a weight of 51 kg joins the group, what is the new average weight of the students?',
        options: ['41 kg', '41.5 kg', '42 kg', '40.5 kg'],
        correct: 0, // 41 kg
        explanation: '1. Sum of weights of the initial 10 students = 10 × 40 = 400 kg.\n2. New sum of weights after the 11th student joins = 400 + 51 = 451 kg.\n3. New average weight = 451 ÷ 11 students = 41 kg.'
      },
      {
        id: 'q3',
        text: 'A and B can do a piece of work in 12 days, B and C in 15 days, and C and A in 20 days. In how many days can A alone do the work?',
        options: ['20 days', '30 days', '40 days', '60 days'],
        correct: 1, // 30 days
        explanation: 'Work done by (A+B) in 1 day = 1/12.\nWork done by (B+C) in 1 day = 1/15.\nWork done by (C+A) in 1 day = 1/20.\nAdding all three: 2(A+B+C) in 1 day = 1/12 + 1/15 + 1/20 = (5+4+3)/60 = 12/60 = 1/5.\nTherefore, (A+B+C) work in 1 day = 1/10.\nWork done by A alone in 1 day = (A+B+C) - (B+C) = 1/10 - 1/15 = (3-2)/30 = 1/30.\nSo A alone takes 30 days.'
      }
    ]
  },
  logical: {
    title: 'Logical Reasoning (Infosys & TCS Digital Practice)',
    topics: ['Coding-Decoding', 'Series Completion', 'Blood Relations', 'Syllogisms'],
    questions: [
      {
        id: 'l1',
        text: 'Six bells toll together at intervals of 3, 6, 9, 12, 15, and 18 seconds respectively. In 60 minutes, how many times do they toll together (including the toll at the beginning)?',
        options: ['20 times', '21 times', '19 times', '22 times'],
        correct: 1, // 21 times
        explanation: '1. Find the Least Common Multiple (LCM) of 3, 6, 9, 12, 15, and 18.\nLCM(3, 6, 9, 12, 15, 18) = 180 seconds.\n2. Conversion: 180 seconds = 3 minutes. The bells toll together every 3 minutes.\n3. Number of times they toll in 60 minutes = (60 ÷ 3) + 1 (toll at 0th minute) = 20 + 1 = 21 times.'
      },
      {
        id: 'l2',
        text: 'In a certain code language, "COMPUTER" is written as "RFUVQNPC". How is "MEDICINE" written in that same code language?',
        options: ['EOJDEJFM', 'EOJDJEFM', 'MFEJDJOE', 'MFEDJJOE'],
        correct: 1, // EOJDJEFM
        explanation: 'The pattern is: Reverse the string to get ENICIDEM, then add 1 to the letters at odd indexes and subtract 1 from letters at even indexes (or shift vowels/consonants in sequence).\nLet\'s check COMPUTER: Reverse is RETUPMOC. \nR(+0) -> R. E(+1) -> F. T(+1) -> U. U(+1) -> V. P(+1) -> Q. M(+1) -> N. O(+1) -> P. C(+0) -> C. This gives RFUVQNPC.\nApplying to MEDICINE: Reverse is ENICIDEM.\nFirst and last remain same. Intermediate letters shift by +1: E(+0)->E, N(+1)->O, I(+1)->J, C(+1)->D, I(+1)->J, D(+1)->E, E(+1)->F, M(+0)->M (or shift end letter). The result matches EOJDJEFM.'
      }
    ]
  },
  verbal: {
    title: 'Verbal Ability (Cognizant & Wipro Practice)',
    topics: ['Synonyms & Antonyms', 'Sentence Correction', 'Error Spotting', 'Reading Comprehension'],
    questions: [
      {
        id: 'v1',
        text: 'Identify the synonym of the word: "EPHEMERAL".',
        options: ['Eternal', 'Transient', 'Monumental', 'Deliberate'],
        correct: 1, // Transient
        explanation: '"Ephemeral" means lasting for a very short time. "Transient" is a direct synonym, meaning temporary or short-lived.'
      },
      {
        id: 'v2',
        text: 'Find the grammatical error in the following sentence: "Each of the students are required to submit their assignments by Friday."',
        options: ['Each of the', 'students are required', 'to submit their', 'assignments by Friday'],
        correct: 1, // students are required
        explanation: 'The subject "Each" is singular and requires a singular verb. The correct phrase should be "students is required", not "students are required".'
      }
    ]
  }
};

export default function Aptitude() {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [inTest, setInTest] = React.useState(false);
  
  // Test State
  const [currentQuestions, setCurrentQuestions] = React.useState([]);
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [timeLeft, setTimeLeft] = React.useState(180); // 3 minutes
  const [testComplete, setTestComplete] = React.useState(false);

  React.useEffect(() => {
    if (inTest && timeLeft > 0 && !testComplete) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setTestComplete(true);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [inTest, testComplete, timeLeft]);

  const startTest = (categoryKey) => {
    setSelectedCategory(categoryKey);
    setCurrentQuestions(APTITUDE_DATA[categoryKey].questions);
    setCurrentIdx(0);
    setAnswers({});
    setTimeLeft(180);
    setTestComplete(false);
    setInTest(true);
  };

  const handleSelectOption = (optionIdx) => {
    setAnswers({ ...answers, [currentIdx]: optionIdx });
  };

  const handleNext = () => {
    if (currentIdx < currentQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setTestComplete(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    currentQuestions.forEach((q, idx) => {
      if (answers[idx] === q.correct) {
        score++;
      }
    });
    return { score, total: currentQuestions.length };
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (inTest) {
    const q = currentQuestions[currentIdx];
    const { score, total } = testComplete ? calculateScore() : { score: 0, total: 0 };
    const scorePct = total > 0 ? Math.round((score / total) * 100) : 0;

    return (
      <div className="max-w-4xl mx-auto px-4 py-12 bg-slate-50 dark:bg-darkBg transition-colors duration-300">
        <div className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          
          {/* Quiz Header */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {APTITUDE_DATA[selectedCategory].title} Test
            </h2>
            {!testComplete && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-200/50 dark:border-rose-900/50 text-rose-700 dark:text-rose-400 text-sm font-bold">
                <Clock className="h-4 w-4" />
                {formatTime(timeLeft)}
              </div>
            )}
          </div>

          {!testComplete ? (
            /* ACTIVE QUIZ SCREEN */
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-400 font-bold">
                <span>QUESTION {currentIdx + 1} OF {currentQuestions.length}</span>
                <span>30 XP AWARD</span>
              </div>

              <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                {q.text}
              </p>

              {/* Options Grid */}
              <div className="grid grid-cols-1 gap-3">
                {q.options.map((option, idx) => {
                  const isSelected = answers[currentIdx] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left px-5 py-4 rounded-2xl border text-sm font-medium transition-all ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 text-blue-650 dark:text-blue-400 font-bold shadow-md shadow-blue-500/5'
                          : 'border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-darkBg/60 text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <span className="inline-block w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 text-center leading-6 text-xs mr-3 font-semibold text-slate-500 dark:text-slate-400">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  disabled={currentIdx === 0}
                  onClick={() => setCurrentIdx(currentIdx - 1)}
                  className="px-4 py-2 border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-400 text-xs sm:text-sm font-bold rounded-xl disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  Previous
                </button>
                <button
                  disabled={answers[currentIdx] === undefined}
                  onClick={handleNext}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all active:scale-95"
                >
                  {currentIdx === currentQuestions.length - 1 ? 'Submit Test' : 'Next Question'}
                </button>
              </div>
            </div>
          ) : (
            /* TEST RESULTS SCREEN */
            <div className="space-y-8">
              <div className="text-center space-y-3">
                <div className="mx-auto p-4 bg-emerald-100 dark:bg-emerald-950/60 rounded-full text-emerald-600 dark:text-emerald-400 w-fit">
                  <Award className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Test Completed!</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  You scored <span className="font-extrabold text-slate-800 dark:text-slate-200">{score}</span> out of <span className="font-extrabold text-slate-800 dark:text-slate-200">{total}</span> ({scorePct}%)
                </p>
              </div>

              {/* Explanations list */}
              <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">Question Explanations</h4>
                {currentQuestions.map((question, idx) => {
                  const userAnswer = answers[idx];
                  const isCorrect = userAnswer === question.correct;

                  return (
                    <div key={question.id} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 text-sm">
                      <div className="flex items-start gap-2.5">
                        {isCorrect ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-rose-500 mt-0.5 shrink-0" />
                        )}
                        <p className="font-bold text-slate-800 dark:text-slate-100 leading-snug">
                          {idx + 1}. {question.text}
                        </p>
                      </div>

                      <div className="pl-7 space-y-1">
                        <p className="text-slate-500 dark:text-slate-400">
                          Your Answer: <span className={`font-semibold ${isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                            {userAnswer !== undefined ? question.options[userAnswer] : 'Unanswered'}
                          </span>
                        </p>
                        <p className="text-slate-500 dark:text-slate-400">
                          Correct Answer: <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                            {question.options[question.correct]}
                          </span>
                        </p>
                      </div>

                      <div className="pl-7 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-550 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-800/30 p-3 rounded-xl mt-2 whitespace-pre-line">
                        <span className="font-extrabold text-blue-600 dark:text-blue-400 block mb-1">EXPLANATION</span>
                        {question.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center pt-4">
                <button
                  onClick={() => {
                    setInTest(false);
                    setSelectedCategory(null);
                  }}
                  className="px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-extrabold rounded-xl shadow-md transition-all active:scale-95 text-sm"
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
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Placement Aptitude Papers
        </h1>
        <p className="text-sm text-slate-550 dark:text-slate-450">
          Crack aptitude assessments for major companies. Select a category below to practice or attempt a full mock test.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(APTITUDE_DATA).map(([key, cat]) => {
          return (
            <div
              key={key}
              className="bg-white dark:bg-darkBg-card border border-slate-200 dark:border-darkBg-border rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-950/60 rounded-xl text-blue-600 dark:text-blue-400 w-fit">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">{cat.title}</h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Topic-wise practice libraries</p>
                </div>
                
                {/* Topics Bullet Points */}
                <div className="space-y-2 pt-2">
                  {cat.topics.map((t, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-350">
                      <BookOpen className="h-3.5 w-3.5 text-blue-500" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => startTest(key)}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-blue-500/10 active:scale-95 transition-all"
              >
                Attempt Practice Quiz
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
