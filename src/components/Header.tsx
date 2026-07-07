import { BookOpen, Award, CheckCircle, GraduationCap, Flame, Sparkles, Volume2, LayoutDashboard } from "lucide-react";
import { UserProgress } from "../types";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  progress: UserProgress;
  totalLessons: number;
  totalVocab: number;
}

export default function Header({
  activeTab,
  setActiveTab,
  progress,
  totalLessons,
  totalVocab,
}: HeaderProps) {
  // Calculate completion percentages
  const lessonProgressPercent = Math.round(
    (progress.completedLessons.length / totalLessons) * 100
  );
  const vocabProgressPercent = Math.round(
    (progress.masteredVocab.length / totalVocab) * 100
  );

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-5 gap-4">
          
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3">
            <div className="bg-violet-600 p-2.5 rounded-2xl text-white shadow-md shadow-violet-200 flex items-center justify-center">
              <GraduationCap size={28} className="animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold font-display text-gray-900 tracking-tight">
                  Thai for Workforce
                </h1>
                <span className="bg-violet-50 text-violet-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-violet-100 flex items-center gap-1">
                  <Sparkles size={10} /> สำหรับแรงงาน
                </span>
              </div>
              <p className="text-xs text-gray-500 font-sans mt-0.5">
                အလုပ်ခွင်သုံး ထိုင်းစကားပြော လေ့လာရေးစင်တာ (Burmese-Thai Learning Portal)
              </p>
            </div>
          </div>

          {/* Quick Stats Banner */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:self-center">
            
            {/* Streak Counter */}
            <div className="flex items-center gap-2 bg-amber-50/70 border border-amber-100 px-3 py-1.5 rounded-xl">
              <Flame size={18} className="text-amber-500 fill-amber-500" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-amber-700 font-bold leading-none">Streak</p>
                <p className="text-sm font-semibold text-amber-900 leading-tight">
                  {progress.studyStreakDays} {progress.studyStreakDays === 1 ? "Day" : "Days"}
                </p>
              </div>
            </div>

            {/* Lessons Finished */}
            <div className="flex items-center gap-2 bg-emerald-50/70 border border-emerald-100 px-3 py-1.5 rounded-xl">
              <CheckCircle size={18} className="text-emerald-500" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-emerald-700 font-bold leading-none">Lessons</p>
                <p className="text-sm font-semibold text-emerald-900 leading-tight">
                  {progress.completedLessons.length}/{totalLessons} ({lessonProgressPercent}%)
                </p>
              </div>
            </div>

            {/* Vocabulary Mastered */}
            <div className="flex items-center gap-2 bg-violet-50/70 border border-violet-100 px-3 py-1.5 rounded-xl">
              <BookOpen size={18} className="text-violet-500" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-violet-700 font-bold leading-none font-sans">Vocab</p>
                <p className="text-sm font-semibold text-violet-900 leading-tight">
                  {progress.masteredVocab.length}/{totalVocab} ({vocabProgressPercent}%)
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Navigation Tabs */}
        <div className="flex border-t border-gray-100 overflow-x-auto no-scrollbar">
          <nav className="flex items-stretch space-x-1 sm:space-x-3 py-2" aria-label="Tabs">
            {[
              { id: "restaurant_interview", labelMy: "စားသောက်ဆိုင် အင်တာဗျူး" },
              { id: "factory_interview", labelMy: "စက်ရုံ အင်တာဗျူး" },
              { id: "vocabulary", labelMy: "အလုပ်ခွင် ဝေါဟာရများ" },
              { id: "quizzes", labelMy: "ဉာဏ်စမ်း ပဟေဠိများ" },
              { id: "dashboard", labelMy: "ပင်မစာမျက်နှာ", isSymbol: true },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              if (tab.isSymbol) {
                return (
                  <button
                    key={tab.id}
                    id={`tab-btn-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    title={tab.labelMy}
                    className={`px-4 rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer select-none border-0 ${
                      isActive
                        ? "bg-violet-600 text-white shadow-sm shadow-violet-150"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <LayoutDashboard size={20} />
                  </button>
                );
              }
              return (
                <button
                  key={tab.id}
                  id={`tab-btn-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center justify-center cursor-pointer select-none ${
                    isActive
                      ? "bg-violet-600 text-white shadow-sm shadow-violet-150"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <span className={isActive ? "text-white" : "text-gray-700 hover:text-gray-900"}>
                    {tab.labelMy}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

      </div>
    </header>
  );
}
