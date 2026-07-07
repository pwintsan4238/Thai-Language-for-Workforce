import { useState, useEffect } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Textbook from "./components/Textbook";
import VocabularyList from "./components/VocabularyList";
import QuizSection from "./components/QuizSection";

import { useThaiSpeech } from "./hooks/useThaiSpeech";
import { LESSONS, VOCABULARY, QUIZZES, RESTAURANT_LESSONS, FACTORY_LESSONS } from "./data";
import { UserProgress } from "./types";
import { HelpCircle, Star, Sparkles, BookOpen } from "lucide-react";

const LOCAL_STORAGE_KEY = "thai_learning_workforce_progress";

const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: [],
  masteredVocab: [],
  quizHighScores: {},
  studyStreakDays: 1,
  lastStudyDate: "",
};

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [selectedLessonId, setSelectedLessonId] = useState<string>("lesson-1");
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [isIntroPlaying, setIsIntroPlaying] = useState(false);

  // Initialize Speech Hook
  const { speak, stop, isPlaying, currentText } = useThaiSpeech();

  // Load progress from localStorage on mount & initialize study streak
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    let currentProg = DEFAULT_PROGRESS;

    if (stored) {
      try {
        currentProg = JSON.parse(stored);
      } catch (e) {
        console.error("Error parsing stored progress, resetting", e);
      }
    }

    // Process Study Streak
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    const lastDate = currentProg.lastStudyDate;

    if (!lastDate) {
      // First time studying
      currentProg.studyStreakDays = 1;
      currentProg.lastStudyDate = today;
    } else if (lastDate !== today) {
      const lastStudyTime = new Date(lastDate).getTime();
      const todayTime = new Date(today).getTime();
      const oneDayInMs = 24 * 60 * 60 * 1000;
      const dateDiff = Math.round((todayTime - lastStudyTime) / oneDayInMs);

      if (dateDiff === 1) {
        // Studied yesterday! Increment streak
        currentProg.studyStreakDays = (currentProg.studyStreakDays || 0) + 1;
      } else if (dateDiff > 1) {
        // Missed study days. Reset streak to 1
        currentProg.studyStreakDays = 1;
      }
      currentProg.lastStudyDate = today;
    }

    setProgress(currentProg);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentProg));
  }, []);

  // Save progress helper
  const saveProgress = (updated: UserProgress) => {
    setProgress(updated);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  };

  // Lesson completions toggle
  const handleToggleLessonComplete = (lessonId: string) => {
    const isCompleted = progress.completedLessons.includes(lessonId);
    let updatedCompleted = [...progress.completedLessons];

    if (isCompleted) {
      updatedCompleted = updatedCompleted.filter((id) => id !== lessonId);
    } else {
      updatedCompleted.push(lessonId);
    }

    saveProgress({
      ...progress,
      completedLessons: updatedCompleted,
    });
  };

  // Vocab completed toggle
  const handleToggleVocabMastered = (vocabId: string) => {
    const isMastered = progress.masteredVocab.includes(vocabId);
    let updatedMastered = [...progress.masteredVocab];

    if (isMastered) {
      updatedMastered = updatedMastered.filter((id) => id !== vocabId);
    } else {
      updatedMastered.push(vocabId);
    }

    saveProgress({
      ...progress,
      masteredVocab: updatedMastered,
    });
  };

  // Save Quiz Highscore
  const handleSaveQuizScore = (quizId: string, percentage: number) => {
    const currentHigh = progress.quizHighScores[quizId] || 0;
    const updatedHighScores = { ...progress.quizHighScores };

    if (percentage > currentHigh) {
      updatedHighScores[quizId] = percentage;
    }

    saveProgress({
      ...progress,
      quizHighScores: updatedHighScores,
    });
  };

  // Reset Progress Data
  const handleResetProgress = () => {
    const today = new Date().toISOString().split("T")[0];
    const resetData: UserProgress = {
      completedLessons: [],
      masteredVocab: [],
      quizHighScores: {},
      studyStreakDays: 1,
      lastStudyDate: today,
    };
    saveProgress(resetData);
  };

  // Welcome Intro Speech Player
  const handlePlayWelcomeIntro = () => {
    if (isIntroPlaying) {
      stop();
      setIsIntroPlaying(false);
    } else {
      const introText = "สวัสดีครับ ยินดีต้อนรับเข้าสู่บทเรียนภาษาไทยเพื่อการทำงานครับ ขอให้โชคดีกับการเรียนรู้นะครับ";
      speak(introText, 0.85);
      setIsIntroPlaying(true);
    }
  };

  // Set Active Tab with automatic selectedLessonId correction
  const handleSetActiveTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === "restaurant_interview") {
      if (!RESTAURANT_LESSONS.some(l => l.id === selectedLessonId)) {
        setSelectedLessonId("lesson-1");
      }
    } else if (tab === "factory_interview") {
      if (!FACTORY_LESSONS.some(l => l.id === selectedLessonId)) {
        setSelectedLessonId("factory-lesson-1");
      }
    }
  };

  // Auto handle reset of intro state when speech ends
  useEffect(() => {
    if (!isPlaying) {
      setIsIntroPlaying(false);
    }
  }, [isPlaying]);

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col justify-between">
      
      {/* Upper Layout */}
      <div>
        
        {/* Navigation & Header */}
        <Header
          activeTab={activeTab}
          setActiveTab={handleSetActiveTab}
          progress={progress}
          totalLessons={LESSONS.length}
          totalVocab={VOCABULARY.length}
        />

        {/* Content body wrapper with fluid alignment */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          {activeTab === "dashboard" && (
            <Dashboard
              progress={progress}
              lessons={LESSONS}
              vocabulary={VOCABULARY}
              quizzes={QUIZZES}
              setActiveTab={setActiveTab}
              setSelectedLessonId={setSelectedLessonId}
              onResetProgress={handleResetProgress}
              onPlayIntroAudio={handlePlayWelcomeIntro}
              isIntroAudioPlaying={isIntroPlaying}
            />
          )}

          {activeTab === "restaurant_interview" && (
            <Textbook
              lessons={RESTAURANT_LESSONS}
              selectedLessonId={selectedLessonId}
              setSelectedLessonId={setSelectedLessonId}
              progress={progress}
              onToggleLessonComplete={handleToggleLessonComplete}
              speakText={speak}
              stopSpeaking={stop}
              isPlaying={isPlaying}
              currentSpeakingText={currentText}
              titleEn="Restaurant Job Interview"
              titleMy="စားသောက်ဆိုင် အင်တာဗျူး သင်ခန်းစာများ"
            />
          )}

          {activeTab === "factory_interview" && (
            <Textbook
              lessons={FACTORY_LESSONS}
              selectedLessonId={selectedLessonId}
              setSelectedLessonId={setSelectedLessonId}
              progress={progress}
              onToggleLessonComplete={handleToggleLessonComplete}
              speakText={speak}
              stopSpeaking={stop}
              isPlaying={isPlaying}
              currentSpeakingText={currentText}
              titleEn="Factory Job Interview"
              titleMy="စက်ရုံ အင်တာဗျူး သင်ခန်းစာများ"
            />
          )}

          {activeTab === "vocabulary" && (
            <VocabularyList
              vocabulary={VOCABULARY}
              progress={progress}
              onToggleVocabMastered={handleToggleVocabMastered}
              speakText={speak}
              isPlaying={isPlaying}
              currentSpeakingText={currentText}
            />
          )}

          {activeTab === "quizzes" && (
            <QuizSection
              quizzes={QUIZZES}
              progress={progress}
              onSaveQuizScore={handleSaveQuizScore}
              speakText={speak}
            />
          )}
        </main>

      </div>

      {/* Humble Footer Block */}
      <footer className="border-t border-gray-200/60 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-xs text-gray-500 font-sans">
              Developed for Thai-Myanmar Workforce Training Initiative.
            </p>
            <p className="text-[10px] text-gray-400 font-sans mt-0.5">
              မြန်မာနိုင်ငံသားများအတွက် အလုပ်ခွင်သုံး ထိုင်းစကားပြော လေ့လာသင်ယူရာနေရာ။
            </p>
          </div>
          
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-violet-600 bg-violet-50 px-3 py-1.5 rounded-xl border border-violet-100">
            <Sparkles size={11} />
            <span>Interactive Audio Enabled (Web Speech API)</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
