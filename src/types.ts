export interface VocabBreakdown {
  word: string;
  phonetic: string;
  meaningMy: string;
}

export interface DialogueLine {
  id: string;
  speaker: "Phu-jat-kan" | "Win" | "Aung-Aung";
  speakerLabelTh: string;
  speakerLabelEn: string;
  speakerLabelMy: string;
  thai: string;
  phonetic: string;
  burmese: string;
  vocabBreakdown?: VocabBreakdown[];
}

export interface Lesson {
  id: string;
  number: number;
  titleTh: string;
  titleEn: string;
  titleMy: string;
  description: string;
  dialogues: DialogueLine[];
}

export interface VocabItem {
  id: string;
  word: string;        // Thai word (e.g., "สวัสดี")
  phonetic: string;    // Pronunciation (e.g., "Sawatdee")
  meaningMy: string;   // Burmese translation (e.g., "မင်္ဂလာပါ")
  meaningEn: string;   // English translation (e.g., "Hello")
  category: string;    // Category (e.g., "Greeting", "Workplace", "Personal Info")
  lessonId: string;    // Linked lesson ID
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  lessonId: string;
}

export interface UserProgress {
  completedLessons: string[]; // List of completed lesson IDs
  masteredVocab: string[];    // List of completed vocab IDs
  quizHighScores: Record<string, number>; // Record of quiz ID -> highest score percentage
  studyStreakDays: number;
  lastStudyDate: string;      // YYYY-MM-DD
}
