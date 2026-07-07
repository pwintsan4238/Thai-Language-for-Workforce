import { Play, Volume2, Square, CheckCircle2, BookOpen, Eye, EyeOff, Settings, Star, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Lesson, UserProgress } from "../types";

interface TextbookProps {
  lessons: Lesson[];
  selectedLessonId: string;
  setSelectedLessonId: (id: string) => void;
  progress: UserProgress;
  onToggleLessonComplete: (lessonId: string) => void;
  speakText: (text: string, speed?: number) => void;
  stopSpeaking: () => void;
  isPlaying: boolean;
  currentSpeakingText: string | null;
  titleEn?: string;
  titleMy?: string;
}

export default function Textbook({
  lessons,
  selectedLessonId,
  setSelectedLessonId,
  progress,
  onToggleLessonComplete,
  speakText,
  stopSpeaking,
  isPlaying,
  currentSpeakingText,
  titleEn = "Workforce Textbook (All Lessons)",
  titleMy = "အလုပ်အင်တာဗျူး အမေးအဖြေ သင်ခန်းစာအားလုံးကို တစ်မျက်နှာတည်းတွင် လေ့လာရန်",
}: TextbookProps) {
  const [showBurmese, setShowBurmese] = useState(true);
  const [showPhonetics, setShowPhonetics] = useState(true);
  const [ttsSpeed, setTtsSpeed] = useState<number>(0.8); // Default slow for learning
  const [expandedBreakdowns, setExpandedBreakdowns] = useState<Record<string, boolean>>({});

  // Handle scrolling to specific lesson when selected from outside
  useEffect(() => {
    if (selectedLessonId) {
      const element = document.getElementById(`lesson-section-${selectedLessonId}`);
      if (element) {
        // Slight delay to ensure content is fully loaded
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [selectedLessonId]);

  // Check if speech playing matches a certain text
  const isLinePlaying = (text: string) => {
    if (!isPlaying || !currentSpeakingText) return false;
    return currentSpeakingText.trim() === text.trim();
  };

  // Speed cycler (0.6x -> 0.8x -> 1.0x -> 0.6x)
  const cycleSpeed = () => {
    setTtsSpeed((prev) => {
      if (prev === 0.6) return 0.8;
      if (prev === 0.8) return 1.0;
      return 0.6;
    });
  };

  return (
    <div className="py-3 space-y-4">
      
      {/* Lesson Selector / Header Controls Ribbon */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white border border-gray-100 p-4 rounded-2xl textbook-shadow">
        <div className="flex items-center gap-2">
          <BookOpen className="text-violet-600" size={20} />
          <div>
            <h2 className="text-lg font-bold text-gray-900 font-display">{titleEn}</h2>
            <p className="text-xs text-gray-500 font-sans">{titleMy}</p>
          </div>
        </div>

        {/* Display Controls & Unified Audio Configuration Button */}
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Single Unified Audio Speed Button */}
          <button
            id="btn-cycle-speed"
            onClick={cycleSpeed}
            className="px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer select-none"
            title="Click to cycle speed: 0.6x → 0.8x → 1.0x"
          >
            <Settings size={12} className="animate-spin-slow shrink-0" />
            <span>Speed: {ttsSpeed}x</span>
            <span className="text-[10px] font-normal opacity-80">(Cycle)</span>
          </button>

          <button
            id="btn-toggle-phonetics"
            onClick={() => setShowPhonetics(!showPhonetics)}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer select-none border flex items-center gap-1.5 transition-all ${
              showPhonetics
                ? "bg-violet-50 text-violet-700 border-violet-200"
                : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
            }`}
          >
            {showPhonetics ? <Eye size={12} /> : <EyeOff size={12} />}
            <span>Phonetics</span>
          </button>

          <button
            id="btn-toggle-burmese"
            onClick={() => setShowBurmese(!showBurmese)}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer select-none border flex items-center gap-1.5 transition-all ${
              showBurmese
                ? "bg-violet-50 text-violet-700 border-violet-200"
                : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
            }`}
          >
            {showBurmese ? <Eye size={12} /> : <EyeOff size={12} />}
            <span>Burmese (မြန်မာ)</span>
          </button>
        </div>
      </div>

      {/* Quick Jump Anchor Links */}
      <div className="bg-gray-100/60 p-2 rounded-xl border border-gray-200/50">
        <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 font-display px-2 mb-1">
          Quick Jump to Lesson / အခန်းများသို့ တိုက်ရိုက်သွားရန်:
        </p>
        <div className="flex flex-wrap gap-1">
          {lessons.map((lesson) => {
            const isLsnCompleted = progress.completedLessons.includes(lesson.id);
            return (
              <button
                key={lesson.id}
                id={`jump-btn-${lesson.id}`}
                onClick={() => {
                  setSelectedLessonId(lesson.id);
                  const element = document.getElementById(`lesson-section-${lesson.id}`);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="py-1 px-2 bg-white hover:bg-violet-50 text-gray-700 hover:text-violet-700 border border-gray-200 hover:border-violet-200 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1"
              >
                <span>Lsn {lesson.number}</span>
                {isLsnCompleted && <span className="text-[10px] text-emerald-600 font-bold">✓</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Continuous Single Page List of All Lessons */}
      <div className="space-y-6">
        {lessons.map((lesson) => {
          const isLsnCompleted = progress.completedLessons.includes(lesson.id);

          return (
            <div
              key={lesson.id}
              id={`lesson-section-${lesson.id}`}
              className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 textbook-shadow space-y-4 scroll-mt-20 border-l-4 border-l-violet-500"
            >
              {/* Textbook Lesson Header */}
              <div className="border-b border-gray-100 pb-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="bg-violet-100 text-violet-800 text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                      LESSON {lesson.number}
                    </span>
                    {isLsnCompleted && (
                      <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                        ✓ Passed & Reviewed
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 font-sans mt-1">
                    {lesson.titleMy}
                  </h3>
                </div>

                {/* Individual Lesson Completion Checkbox on the right side */}
                <div className="sm:self-start bg-gray-50 border border-gray-100 p-2 rounded-xl flex items-center gap-2 shrink-0">
                  <button
                    id={`checkbox-complete-${lesson.id}`}
                    onClick={() => onToggleLessonComplete(lesson.id)}
                    className={`p-1.5 rounded-lg border transition-all flex items-center justify-center shrink-0 cursor-pointer ${
                      isLsnCompleted
                        ? "bg-emerald-500 border-transparent text-white"
                        : "bg-white border-gray-200 text-gray-300 hover:border-violet-300 hover:bg-violet-50/20"
                    }`}
                  >
                    <CheckCircle2 size={15} />
                  </button>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-gray-900 leading-none">
                      {isLsnCompleted ? "Finished!" : "Mark Complete"}
                    </p>
                    <p className="text-[9px] text-gray-500 font-sans mt-0.5">
                      {isLsnCompleted ? "လေ့ကျက်ပြီး" : "ပြီးမြောက်ကြောင်းမှတ်ပါ"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dialogues List for this Lesson */}
              <div className="space-y-3">
                {lesson.dialogues.map((line) => {
                  const isPlayingThisLine = isLinePlaying(line.thai);
                  const isManager = line.speaker === "Phu-jat-kan";

                  return (
                    <div
                      key={line.id}
                      id={`dialogue-card-${line.id}`}
                      className={`p-3 sm:p-4 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                        isPlayingThisLine
                          ? "bg-violet-50/50 border-violet-400 shadow-md shadow-violet-50 ring-2 ring-violet-200/50"
                          : isManager
                          ? "bg-indigo-50/10 border-indigo-100 hover:border-indigo-200"
                          : "bg-amber-50/10 border-amber-100 hover:border-amber-200"
                      }`}
                    >
                      {/* Speaker Tag */}
                      <div className="flex items-center justify-between gap-3 mb-2 pb-1.5 border-b border-gray-100/50">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${isManager ? "bg-indigo-500" : "bg-amber-500"}`}></div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-700 font-display">
                            {isManager ? "Manager • " + line.speakerLabelTh : line.speakerLabelEn + " • " + line.speakerLabelTh}
                          </span>
                        </div>
                        
                        {/* Speech Trigger Button */}
                        <div className="flex items-center gap-2">
                          {line.vocabBreakdown && line.vocabBreakdown.length > 0 && (
                            <button
                              id={`btn-toggle-breakdown-${line.id}`}
                              onClick={() => {
                                setExpandedBreakdowns(prev => ({
                                  ...prev,
                                  [line.id]: !prev[line.id]
                                }));
                              }}
                              className={`p-1.5 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer select-none text-xs font-bold ${
                                expandedBreakdowns[line.id]
                                  ? "bg-violet-600 text-white shadow-xs"
                                  : isManager
                                  ? "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200"
                                  : "bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200"
                              }`}
                              title={expandedBreakdowns[line.id] ? "Hide words breakdown" : "Show word-by-word vocabulary breakdown"}
                            >
                              {expandedBreakdowns[line.id] ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
                              <span className="text-[10px] hidden sm:inline">
                                {expandedBreakdowns[line.id] ? "ဝှက်ရန်" : "စကားလုံးများ"}
                              </span>
                            </button>
                          )}

                          <button
                            id={`play-btn-${line.id}`}
                            onClick={() => {
                              if (isPlayingThisLine) {
                                stopSpeaking();
                              } else {
                                speakText(line.thai, ttsSpeed);
                              }
                            }}
                            className={`p-1.5 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer select-none text-xs font-bold ${
                              isPlayingThisLine
                                ? "bg-red-500 hover:bg-red-600 text-white shadow-xs"
                                : isManager
                                ? "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200"
                                : "bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200"
                            }`}
                            title={isPlayingThisLine ? "Stop Audio" : "Listen to Thai Voice"}
                          >
                            {isPlayingThisLine ? <Square size={11} fill="currentColor" /> : <Volume2 size={11} />}
                            <span className="text-[9px] hidden sm:inline">
                              {isPlayingThisLine ? "Stop" : "Listen Speak"}
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Content block */}
                      <div className="space-y-2 pl-3 border-l-2 border-gray-200">
                        
                        {/* Thai Script */}
                        <div className="space-y-0.5">
                          <p className="text-sm sm:text-base font-bold text-gray-900 leading-relaxed font-sans select-all">
                            {line.thai}
                          </p>
                          <span className="text-[9px] font-semibold tracking-wide text-gray-400 block font-display leading-none">
                            THAI SCRIPT
                          </span>
                        </div>

                        {/* Phonetics Pronunciation Guide */}
                        {showPhonetics && (
                          <div className="bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100 space-y-0.5">
                            <p className="text-xs font-mono font-medium text-violet-700 leading-relaxed italic select-all">
                              {line.phonetic}
                            </p>
                            <span className="text-[8px] font-bold text-violet-400 uppercase tracking-wider block leading-none font-display">
                              Phonetics (ENG Guide)
                            </span>
                          </div>
                        )}

                        {/* Burmese translation */}
                        {showBurmese && (
                          <div className="space-y-0.5 pt-0.5">
                            <p className="text-sm font-sans font-medium text-gray-700 leading-relaxed select-all">
                              {line.burmese}
                            </p>
                            <span className="text-[8px] font-bold text-gray-400 uppercase tracking-wider block font-display leading-none">
                              Burmese Translation (မြန်မာပြန်)
                            </span>
                          </div>
                        )}

                      </div>

                      {/* Collapsible Word Breakdown List */}
                      {line.vocabBreakdown && line.vocabBreakdown.length > 0 && expandedBreakdowns[line.id] && (
                        <div className="mt-3 p-3 bg-white/85 border border-violet-100 rounded-xl space-y-2 animate-fade-in text-xs shadow-xs">
                          <p className="text-[10px] font-bold text-violet-600 uppercase tracking-wider mb-2 border-b border-violet-50 pb-1 flex items-center justify-between">
                            <span>Word-by-Word Breakdown (စကားလုံးတစ်လုံးချင်း အဓိပ္ပာယ်)</span>
                            <span className="text-[9px] font-normal text-violet-400 lowercase">(click speaker to listen)</span>
                          </p>
                          <div className="grid grid-cols-1 divide-y divide-violet-100/50">
                            {line.vocabBreakdown.map((item, idx) => (
                              <div key={idx} className="py-2 flex items-center justify-between gap-3 text-xs">
                                <div className="flex items-center gap-2">
                                  {/* Play button for individual word */}
                                  <button
                                    onClick={() => speakText(item.word, ttsSpeed)}
                                    className="p-1 rounded-md bg-gray-50 hover:bg-violet-100 text-gray-500 hover:text-violet-700 transition-all cursor-pointer"
                                    title={`Pronounce "${item.word}"`}
                                  >
                                    <Volume2 size={10} />
                                  </button>
                                  <div className="flex items-baseline gap-1.5">
                                    <span className="font-bold text-gray-900 font-sans text-xs">{item.word}</span>
                                    <span className="text-[10px] text-violet-500 font-mono italic">({item.phonetic})</span>
                                  </div>
                                </div>
                                <span className="text-gray-600 font-sans text-[11px] font-medium text-right">{item.meaningMy}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
