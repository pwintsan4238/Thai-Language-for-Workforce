import { BookOpen, CheckCircle, HelpCircle, Award, Play, RotateCcw, AlertCircle, BookOpenCheck, Volume2, Sparkles, Star } from "lucide-react";
import { Lesson, VocabItem, UserProgress, QuizQuestion } from "../types";

interface DashboardProps {
  progress: UserProgress;
  lessons: Lesson[];
  vocabulary: VocabItem[];
  quizzes: QuizQuestion[];
  setActiveTab: (tab: string) => void;
  setSelectedLessonId: (id: string) => void;
  onResetProgress: () => void;
  onPlayIntroAudio: () => void;
  isIntroAudioPlaying: boolean;
}

export default function Dashboard({
  progress,
  lessons,
  vocabulary,
  quizzes,
  setActiveTab,
  setSelectedLessonId,
  onResetProgress,
  onPlayIntroAudio,
  isIntroAudioPlaying,
}: DashboardProps) {
  // Calculate stats
  const totalLessons = lessons.length;
  const completedLessonsCount = progress.completedLessons.length;
  const lessonProgressPercent = Math.round((completedLessonsCount / totalLessons) * 100);

  const totalVocab = vocabulary.length;
  const masteredVocabCount = progress.masteredVocab.length;
  const vocabProgressPercent = Math.round((masteredVocabCount / totalVocab) * 100);

  // Get next incomplete lesson
  const nextLesson = lessons.find(l => !progress.completedLessons.includes(l.id)) || lessons[0];

  // Get some vocabulary items that are NOT yet mastered
  const recommendedVocab = vocabulary
    .filter(v => !progress.masteredVocab.includes(v.id))
    .slice(0, 4);

  // Calculate Average Quiz Score
  const quizScores = Object.values(progress.quizHighScores);
  const averageQuizScore = quizScores.length > 0 
    ? Math.round(quizScores.reduce((sum, score) => sum + score, 0) / quizScores.length)
    : 0;

  return (
    <div className="space-y-8 py-6">
      
      {/* Welcome Hero Banner */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-700 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-lg shadow-violet-100">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-violet-500 opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute left-1/3 bottom-0 translate-y-12 w-48 h-48 bg-indigo-500 opacity-20 rounded-full blur-xl"></div>
        
        <div className="relative z-10 max-w-2xl">
          <span className="bg-white/10 backdrop-blur-md text-violet-100 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg">
            Learning Portal • ထိုင်းစကားလေ့လာရန်
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-display mt-3 leading-tight">
            Speak Thai with Confidence in the Workplace
          </h2>
          <p className="text-sm sm:text-base text-violet-100 font-sans mt-2 font-light">
            ထိုင်းနိုင်ငံသို့ ရောက်ရှိနေသော မြန်မာလုပ်သားများအတွက် အလုပ်အင်တာဗျူးနှင့် အလုပ်ခွင်သုံး ထိုင်းစကားပြောကို အလွယ်ကူဆုံး လေ့လာနိုင်ရန် ဖန်တီးထားသော သင်ပုန်းကြီး ဖြစ်ပါသည်။
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              id="btn-resume-learning"
              onClick={() => {
                setSelectedLessonId(nextLesson.id);
                if (nextLesson.id.startsWith("factory-")) {
                  setActiveTab("factory_interview");
                } else {
                  setActiveTab("restaurant_interview");
                }
              }}
              className="bg-white text-violet-700 hover:bg-violet-50 font-bold px-5 py-3 rounded-2xl text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Play size={16} fill="currentColor" />
              <span>
                {completedLessonsCount > 0 ? "Continue Learning" : "Start First Lesson"}
              </span>
              <span className="text-[10px] bg-violet-100 text-violet-800 px-2 py-0.5 rounded-full font-medium ml-1">
                Lesson {nextLesson.number}
              </span>
            </button>

            <button
              id="btn-intro-audio"
              onClick={onPlayIntroAudio}
              className={`border border-white/30 text-white hover:bg-white/10 font-medium px-4 py-3 rounded-2xl text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                isIntroAudioPlaying ? "bg-white/20 ring-2 ring-white/50" : ""
              }`}
            >
              <Volume2 size={16} className={isIntroAudioPlaying ? "animate-bounce" : ""} />
              <span>
                {isIntroAudioPlaying ? "Listening..." : "Hear Welcome Speech"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Progress Cards - Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Streak card */}
        <div className="bg-white border border-gray-100 p-5 rounded-2xl textbook-shadow flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 font-medium">Daily Streak</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 font-display">
              {progress.studyStreakDays} <span className="text-xs text-gray-400 font-sans font-normal">days</span>
            </h3>
            <p className="text-[11px] text-amber-600 mt-1 font-sans">
              လေ့လာမှု ရက်ဆက်တိုက်ရမှတ်
            </p>
          </div>
          <div className="bg-amber-50 p-3 rounded-xl text-amber-500">
            <span className="text-xl font-bold">🔥</span>
          </div>
        </div>

        {/* Lessons finished card */}
        <div className="bg-white border border-gray-100 p-5 rounded-2xl textbook-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Lessons Finished</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 font-display">
                {completedLessonsCount} <span className="text-xs text-gray-400 font-sans font-normal">/ {totalLessons}</span>
              </h3>
            </div>
            <div className="bg-emerald-50 p-3 rounded-xl text-emerald-500">
              <BookOpenCheck size={24} />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${lessonProgressPercent}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-sans">
              <span>{lessonProgressPercent}% Done</span>
              <span>ပြီးစီးမှုနှုန်း</span>
            </div>
          </div>
        </div>

        {/* Vocabulary card */}
        <div className="bg-white border border-gray-100 p-5 rounded-2xl textbook-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Words Mastered</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 font-display">
                {masteredVocabCount} <span className="text-xs text-gray-400 font-sans font-normal">/ {totalVocab}</span>
              </h3>
            </div>
            <div className="bg-violet-50 p-3 rounded-xl text-violet-500">
              <CheckCircle size={24} />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-violet-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${vocabProgressPercent}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-sans">
              <span>{vocabProgressPercent}% Mastered</span>
              <span>လေ့ကျက်ပြီး ဝေါဟာရ</span>
            </div>
          </div>
        </div>

        {/* Practice quiz score card */}
        <div className="bg-white border border-gray-100 p-5 rounded-2xl textbook-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 font-medium">Average Quiz Score</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 font-display">
                {averageQuizScore}%
              </h3>
            </div>
            <div className="bg-indigo-50 p-3 rounded-xl text-indigo-500">
              <Award size={24} />
            </div>
          </div>
          <div className="mt-3">
            <p className="text-[11px] text-gray-400 leading-tight">
              {quizScores.length} of {quizzes.length} quizzes attempted.
            </p>
            <p className="text-[11px] text-indigo-600 font-sans mt-0.5">
              ပျမ်းမျှ ဉာဏ်စမ်းအောင်မြင်မှု
            </p>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Textbook Syllabus Panel (Left/Center columns) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold font-display text-gray-900">
                Textbook Syllabus Overview
              </h3>
              <p className="text-xs text-gray-500 font-sans">
                เรียนรู้หัวข้อสำคัญ (10 Core Interview Topics)
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {lessons.map((lesson) => {
              const isCompleted = progress.completedLessons.includes(lesson.id);
              return (
                <div
                  key={lesson.id}
                  className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isCompleted
                      ? "bg-emerald-50/20 border-emerald-100"
                      : nextLesson.id === lesson.id
                      ? "bg-violet-50/10 border-violet-200 ring-1 ring-violet-100"
                      : "bg-white border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-xl font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 ${
                      isCompleted 
                        ? "bg-emerald-100 text-emerald-800" 
                        : "bg-violet-100 text-violet-800"
                    }`}>
                      {lesson.number}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        {lesson.id.startsWith("factory-") ? (
                          <span className="bg-blue-50 text-blue-700 text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-blue-100">
                            Factory
                          </span>
                        ) : (
                          <span className="bg-amber-50 text-amber-700 text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-amber-100">
                            Restaurant
                          </span>
                        )}
                        <h4 className="text-sm font-semibold text-gray-900 font-sans">
                          {lesson.titleEn}
                        </h4>
                        {isCompleted && (
                          <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                            <CheckCircle size={8} /> Completed
                          </span>
                        )}
                        {nextLesson.id === lesson.id && !isCompleted && (
                          <span className="bg-amber-100 text-amber-800 text-[9px] font-bold px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                            <Star size={8} className="fill-amber-500 text-amber-500" /> Recommended Next
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-violet-700 font-semibold font-display mt-0.5">
                        {lesson.titleTh}
                      </p>
                      <p className="text-xs text-gray-400 font-sans mt-1">
                        {lesson.titleMy}
                      </p>
                    </div>
                  </div>

                  <button
                    id={`btn-open-lesson-${lesson.id}`}
                    onClick={() => {
                      setSelectedLessonId(lesson.id);
                      if (lesson.id.startsWith("factory-")) {
                        setActiveTab("factory_interview");
                      } else {
                        setActiveTab("restaurant_interview");
                      }
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer select-none border shrink-0 text-center ${
                      isCompleted
                        ? "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                        : "bg-violet-600 border-transparent text-white hover:bg-violet-700 shadow-xs"
                    }`}
                  >
                    {isCompleted ? "Review Lesson" : "Start Learning"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Study Tips & Recommended Vocabulary (Right Column) */}
        <div className="space-y-6">
          
          {/* Recommended Vocab widget */}
          <div className="bg-white border border-gray-100 rounded-3xl p-5 textbook-shadow space-y-4">
            <div>
              <h3 className="text-sm font-bold font-display text-gray-900 uppercase tracking-wider">
                Recommended Vocabulary
              </h3>
              <p className="text-xs text-gray-500 font-sans mt-0.5">
                လေ့လာရန် အကြံပြုထားသော ဝေါဟာရများ
              </p>
            </div>

            {recommendedVocab.length > 0 ? (
              <div className="space-y-2.5">
                {recommendedVocab.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-gray-50/70 border border-gray-100 rounded-xl hover:border-violet-200 transition-all cursor-pointer flex justify-between items-center"
                    onClick={() => {
                      setActiveTab("vocabulary");
                    }}
                  >
                    <div>
                      <p className="text-sm font-bold text-violet-700">{item.word}</p>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">[{item.phonetic}]</p>
                      <p className="text-xs text-gray-600 font-sans mt-0.5">{item.meaningMy}</p>
                    </div>
                    <span className="text-[10px] font-semibold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full border border-violet-100">
                      Learn
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-emerald-50/30 border border-emerald-100 text-center rounded-xl">
                <span className="text-2xl">🎉</span>
                <p className="text-xs font-semibold text-emerald-800 mt-1">Excellent!</p>
                <p className="text-xs text-gray-500 mt-0.5">You have mastered all vocabulary words!</p>
              </div>
            )}
          </div>

          {/* Guidelines on Study Workflow */}
          <div className="bg-violet-50/30 border border-violet-100 rounded-3xl p-5 space-y-3.5">
            <h4 className="text-sm font-bold font-sans text-violet-900 flex items-center gap-2">
              <Sparkles size={16} className="text-violet-600" />
              <span>Study Workflow Guide</span>
            </h4>
            <div className="text-xs text-gray-600 space-y-3 font-sans">
              <div className="flex gap-2.5">
                <span className="font-bold text-violet-700 shrink-0 bg-violet-100/70 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">1</span>
                <div>
                  <p className="font-semibold text-gray-800 leading-tight">Listen to Audio Playbacks</p>
                  <p className="text-gray-500 mt-0.5 leading-normal">ထိုင်းလို အသံထွက်ကို နားထောင်ပါ။ နှေးနှေးကြားချင်ရင် Speech Speed ကို လျှော့ပါ။</p>
                </div>
              </div>
              <div className="flex gap-2.5">
                <span className="font-bold text-violet-700 shrink-0 bg-violet-100/70 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">2</span>
                <div>
                  <p className="font-semibold text-gray-800 leading-tight">Read Phonetics & Translate</p>
                  <p className="text-gray-500 mt-0.5 leading-normal">ENG အသံထွက်အကူနှင့် မြန်မာအဓိပ္ပာယ်ကို တွဲဖတ်ပြီး လေ့ကျင့်ပါ။</p>
                </div>
              </div>
              <div className="flex gap-2.5">
                <span className="font-bold text-violet-700 shrink-0 bg-violet-100/70 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">3</span>
                <div>
                  <p className="font-semibold text-gray-800 leading-tight">Master Vocabulary Lists</p>
                  <p className="text-gray-500 mt-0.5 leading-normal">ဝေါဟာရများကို သီးသန့် အလွတ်ကျက်ပြီး "Mastered" ဟု အမှန်ခြစ်ပါ။</p>
                </div>
              </div>
              <div className="flex gap-2.5">
                <span className="font-bold text-violet-700 shrink-0 bg-violet-100/70 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">4</span>
                <div>
                  <p className="font-semibold text-gray-800 leading-tight">Test with Review Quizzes</p>
                  <p className="text-gray-500 mt-0.5 leading-normal">ဉာဏ်စမ်း မေးခွန်းများကို ဖြေဆိုပြီး အောင်မြင်မှု တိုးတက်အောင် လုပ်ပါ။</p>
                </div>
              </div>
            </div>
          </div>

          {/* Danger Zone: Reset Progress */}
          <div className="border border-red-100 rounded-3xl p-5 bg-red-50/10 flex flex-col gap-3">
            <div className="flex gap-2 items-start text-red-800">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold font-sans">Reset Learning Progress</h4>
                <p className="text-[11px] text-gray-500 font-sans mt-0.5 leading-normal">
                  ဖျက်မည်။ ရမှတ်များနှင့် အမှန်ခြစ်ထားသမျှ အားလုံးကို အစမှ ပြန်လည် စတင်မည်။
                </p>
              </div>
            </div>
            <button
              id="btn-reset-progress"
              onClick={() => {
                if (window.confirm("Are you sure you want to delete all study history and progress? This cannot be undone.")) {
                  onResetProgress();
                }
              }}
              className="px-3 py-1.5 bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 font-semibold rounded-xl text-xs cursor-pointer select-none transition-all flex items-center justify-center gap-1.5 self-start"
            >
              <RotateCcw size={12} />
              Reset All Data
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
