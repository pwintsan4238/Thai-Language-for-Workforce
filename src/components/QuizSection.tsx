import { useState } from "react";
import { Award, HelpCircle, ArrowRight, RotateCcw, CheckCircle, XCircle, ChevronRight, Volume2, Flame, RefreshCw } from "lucide-react";
import { QuizQuestion, UserProgress } from "../types";
import { LESSONS } from "../data";

interface QuizSectionProps {
  quizzes: QuizQuestion[];
  progress: UserProgress;
  onSaveQuizScore: (quizId: string, percentage: number) => void;
  speakText: (text: string, rate?: number) => void;
}

export default function QuizSection({
  quizzes,
  progress,
  onSaveQuizScore,
  speakText,
}: QuizSectionProps) {
  const [selectedLessonFilter, setSelectedLessonFilter] = useState<string>("All");
  
  // Game state
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizResults, setQuizResults] = useState<{ questionId: string; wasCorrect: boolean }[]>([]);

  // Filter questions based on selection
  const activeQuestions = selectedLessonFilter === "All"
    ? quizzes
    : quizzes.filter(q => q.lessonId === selectedLessonFilter);

  const startQuiz = () => {
    if (activeQuestions.length === 0) return;
    setIsQuizActive(true);
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizResults([]);
  };

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOptionIndex(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOptionIndex === null || isSubmitted) return;
    
    const question = activeQuestions[currentQuestionIndex];
    const isCorrect = selectedOptionIndex === question.correctIndex;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setQuizResults(prev => [
      ...prev,
      { questionId: question.id, wasCorrect: isCorrect }
    ]);
    
    setIsSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOptionIndex(null);
      setIsSubmitted(false);
    } else {
      // Finished! Save score
      const finalPercentage = Math.round((score / activeQuestions.length) * 100);
      onSaveQuizScore(selectedLessonFilter, finalPercentage);
      setIsQuizActive(false);
      // Keep state showing review or finished summary
      setIsSummaryView(true);
    }
  };

  const [isSummaryView, setIsSummaryView] = useState(false);

  const currentQuestion = activeQuestions[currentQuestionIndex];

  return (
    <div className="py-6 space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-2">
        <Award className="text-violet-600" size={24} />
        <div>
          <h2 className="text-xl font-bold text-gray-900 font-display">Workforce Practice Quizzes</h2>
          <p className="text-xs text-gray-500 font-sans">အလုပ်ခွင်သုံးစကား ဉာဏ်စမ်း ပဟေဠိများ</p>
        </div>
      </div>

      {/* Main Container */}
      {!isQuizActive && !isSummaryView ? (
        
        /* Quiz Launcher Page */
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 textbook-shadow space-y-6">
          <div className="max-w-2xl">
            <h3 className="text-lg font-bold text-gray-900 font-sans">
              Evaluate Your Workforce Thai Competency
            </h3>
            <p className="text-xs text-gray-500 font-sans mt-1 leading-relaxed">
              ဉာဏ်စမ်းမေးခွန်းများကို ဖြေဆိုပြီး အလုပ်ခွင် စကားပြော နားလည်မှုကို စမ်းသပ်ပါ။ သင်ခန်းစာ တစ်ခုချင်းစီအလိုက် သီးသန့်ဖြစ်စေ၊ သင်ခန်းစာအားလုံး ပေါင်းစပ်ပြီးဖြစ်စေ လေ့ကျင့်နိုင်ပါသည်။
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Lesson selectors card */}
            <div className="p-5 border border-gray-100 bg-gray-50/50 rounded-2xl space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 font-display">
                Select Study Unit
              </h4>
              
              <div className="space-y-2">
                {[
                  { id: "All", name: "All Units (Comprehensive Quiz)", questionsCount: quizzes.length },
                  ...LESSONS.map((lesson) => {
                    const isFactory = lesson.id.startsWith("factory");
                    const prefix = isFactory ? "Factory Unit" : "Restaurant Unit";
                    return {
                      id: lesson.id,
                      name: `${prefix} ${lesson.number}: ${lesson.titleEn}`,
                      questionsCount: quizzes.filter((q) => q.lessonId === lesson.id).length,
                    };
                  }).filter((unit) => unit.questionsCount > 0),
                ].map((unit) => {
                  const highscore = progress.quizHighScores[unit.id] !== undefined 
                    ? progress.quizHighScores[unit.id] 
                    : null;
                  const isSelected = selectedLessonFilter === unit.id;

                  return (
                    <button
                      key={unit.id}
                      id={`quiz-unit-${unit.id}`}
                      onClick={() => setSelectedLessonFilter(unit.id)}
                      className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? "bg-violet-600 text-white border-transparent shadow-sm"
                          : "bg-white border-gray-100 text-gray-700 hover:border-gray-200"
                      }`}
                    >
                      <div className="space-y-0.5">
                        <p className="text-xs font-semibold">{unit.name}</p>
                        <p className={`text-[10px] font-sans ${isSelected ? "text-violet-200" : "text-gray-400"}`}>
                          {unit.questionsCount} practice questions
                        </p>
                      </div>
                      
                      {highscore !== null && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isSelected ? "bg-white/20 text-white" : "bg-emerald-50 text-emerald-800 border border-emerald-100"
                        }`}>
                          Best: {highscore}%
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quiz Guidelines card */}
            <div className="p-5 bg-violet-50/30 border border-violet-100 rounded-2xl flex flex-col justify-between">
              <div className="space-y-3.5">
                <h4 className="text-sm font-bold text-violet-900 flex items-center gap-1.5 font-sans">
                  <span>Practice Rules & Tips</span>
                </h4>
                <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4 font-sans leading-relaxed">
                  <li>You will receive immediate feedback after answering each question.</li>
                  <li>Click on speaker icons to hear vocabulary pronunciations in Thai.</li>
                  <li>Achieve <strong>80% or above</strong> to demonstrate workforce readiness.</li>
                  <li>Each successful attempt will record a highscore to your study tracker dashboard.</li>
                </ul>
              </div>

              <button
                id="btn-start-quiz"
                onClick={startQuiz}
                disabled={activeQuestions.length === 0}
                className="w-full mt-6 bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-4 rounded-xl text-sm shadow-xs cursor-pointer text-center select-none"
              >
                Start Quiz Session ({activeQuestions.length} Questions)
              </button>
            </div>

          </div>
        </div>

      ) : isQuizActive && currentQuestion ? (
        
        /* Active Interactive Quiz Question */
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 textbook-shadow space-y-6">
          
          {/* Progress Header */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <span className="text-xs font-bold uppercase text-violet-600 tracking-wider font-display">
              Question {currentQuestionIndex + 1} of {activeQuestions.length}
            </span>
            <div className="flex gap-1">
              {activeQuestions.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx < currentQuestionIndex
                      ? quizResults[idx]?.wasCorrect ? "bg-emerald-500" : "bg-red-400"
                      : idx === currentQuestionIndex
                      ? "bg-violet-500 animate-pulse"
                      : "bg-gray-100"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-gray-900 font-sans leading-snug">
              {currentQuestion.questionText}
            </h3>
            <span className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider font-display">
              Category: Unit {currentQuestion.lessonId.split("-")[1]} Review
            </span>
          </div>

          {/* Options list */}
          <div className="space-y-2.5">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOptionIndex === idx;
              const isCorrectOpt = idx === currentQuestion.correctIndex;
              
              let optStyle = "bg-white border-gray-100 hover:border-gray-200 text-gray-800";
              
              if (isSubmitted) {
                if (isCorrectOpt) {
                  optStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 ring-1 ring-emerald-300";
                } else if (isSelected) {
                  optStyle = "bg-red-50 border-red-300 text-red-900";
                } else {
                  optStyle = "bg-gray-50/50 border-gray-100 text-gray-400";
                }
              } else if (isSelected) {
                optStyle = "bg-violet-50 border-violet-500 text-violet-900 ring-1 ring-violet-200";
              }

              return (
                <button
                  key={idx}
                  id={`option-${idx}`}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isSubmitted}
                  className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${optStyle} ${
                    !isSubmitted ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 border ${
                      isSelected 
                        ? "bg-violet-600 text-white border-transparent" 
                        : "bg-gray-50 text-gray-500 border-gray-200"
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm font-semibold font-sans">{option}</span>
                  </div>

                  {/* Play option audio if option looks like Thai text */}
                  {option.includes("(") && (
                    <button
                      id={`play-option-audio-${idx}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Extract Thai text before "("
                        const thaiWord = option.split("(")[0].trim();
                        speakText(thaiWord);
                      }}
                      className="p-1.5 bg-gray-100 hover:bg-violet-100 hover:text-violet-700 rounded-lg text-gray-400 transition-all cursor-pointer"
                      title="Hear Pronunciation"
                    >
                      <Volume2 size={12} />
                    </button>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            
            {/* Answer Result status */}
            <div>
              {isSubmitted && (
                <div className="flex items-start gap-2 max-w-lg">
                  {selectedOptionIndex === currentQuestion.correctIndex ? (
                    <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                  ) : (
                    <XCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
                  )}
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">
                      {selectedOptionIndex === currentQuestion.correctIndex ? "Correct Answer!" : "Incorrect Answer"}
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-normal font-sans mt-0.5">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Next / Submit buttons */}
            <div className="shrink-0 flex justify-end">
              {!isSubmitted ? (
                <button
                  id="btn-submit-answer"
                  onClick={handleSubmitAnswer}
                  disabled={selectedOptionIndex === null}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold shadow-xs transition-all select-none ${
                    selectedOptionIndex === null
                      ? "bg-gray-100 border-transparent text-gray-300 cursor-not-allowed"
                      : "bg-violet-600 border-transparent text-white hover:bg-violet-700 cursor-pointer"
                  }`}
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  id="btn-next-question"
                  onClick={handleNextQuestion}
                  className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer select-none"
                >
                  <span>
                    {currentQuestionIndex < activeQuestions.length - 1 ? "Next Question" : "Complete Quiz"}
                  </span>
                  <ChevronRight size={14} />
                </button>
              )}
            </div>

          </div>

        </div>

      ) : (
        
        /* Summary view after completion */
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 textbook-shadow space-y-6 text-center max-w-xl mx-auto">
          
          <div className="space-y-2">
            <span className="text-4xl">🏆</span>
            <h3 className="text-xl font-bold text-gray-900 font-sans">
              Quiz Session Completed!
            </h3>
            <p className="text-xs text-gray-500 font-sans">
              သင်ခန်းစာ ပြန်လည်ဆန်းစစ်ချက် ပြီးဆုံးပါပြီ။
            </p>
          </div>

          {/* Scores details */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4">
            <div className="flex justify-around items-center divide-x divide-gray-200">
              <div className="px-4 text-center">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Total Questions</p>
                <h4 className="text-2xl font-bold font-display text-gray-900 mt-1">{activeQuestions.length}</h4>
              </div>
              <div className="px-4 text-center">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Correct Answers</p>
                <h4 className="text-2xl font-bold font-display text-emerald-600 mt-1">{score}</h4>
              </div>
              <div className="px-4 text-center">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Passing Grade</p>
                <h4 className="text-2xl font-bold font-display text-gray-900 mt-1">80%</h4>
              </div>
            </div>

            <div className="border-t border-gray-200/50 pt-4 space-y-1.5">
              <div className="flex justify-between text-xs font-sans">
                <span className="text-gray-500">Your Grade Percentage:</span>
                <span className={`font-bold ${
                  (score / activeQuestions.length) >= 0.8 ? "text-emerald-600" : "text-amber-600"
                }`}>
                  {Math.round((score / activeQuestions.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    (score / activeQuestions.length) >= 0.8 ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                  style={{ width: `${(score / activeQuestions.length) * 100}%` }}
                ></div>
              </div>
              
              <p className="text-[11px] text-gray-400 font-sans italic leading-tight pt-1">
                {(score / activeQuestions.length) >= 0.8
                  ? "Congratulations! You possess strong competency in this workplace Thai session!"
                  : "Good effort! We recommend reviewing the Textbook Lessons and Vocabulary Cards before retrying."}
              </p>
            </div>
          </div>

          {/* Action triggers */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              id="btn-quiz-retry"
              onClick={startQuiz}
              className="flex-1 w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw size={12} />
              <span>Retry This Quiz</span>
            </button>

            <button
              id="btn-quiz-exit"
              onClick={() => {
                setIsSummaryView(false);
                setIsQuizActive(false);
              }}
              className="flex-1 w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-bold py-2.5 px-4 rounded-xl text-xs transition-all cursor-pointer"
            >
              Back to Launcher Menu
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
