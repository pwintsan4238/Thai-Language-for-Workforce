import { useState } from "react";
import { Search, Volume2, BookOpen, CheckCircle, CheckSquare, Square, Star, HelpCircle, Eye, RefreshCw } from "lucide-react";
import { VocabItem, UserProgress } from "../types";

interface VocabularyListProps {
  vocabulary: VocabItem[];
  progress: UserProgress;
  onToggleVocabMastered: (vocabId: string) => void;
  speakText: (text: string, rate?: number) => void;
  isPlaying: boolean;
  currentSpeakingText: string | null;
}

export default function VocabularyList({
  vocabulary,
  progress,
  onToggleVocabMastered,
  speakText,
  isPlaying,
  currentSpeakingText,
}: VocabularyListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterLearned, setFilterLearned] = useState("All"); // All, Learning, Mastered
  const [vocabSpeed, setVocabSpeed] = useState<number>(0.8);

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(vocabulary.map((item) => item.category)))];

  // Filter items
  const filteredVocabulary = vocabulary.filter((item) => {
    const matchesSearch =
      item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phonetic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.meaningMy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.meaningEn.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

    const isMastered = progress.masteredVocab.includes(item.id);
    const matchesLearned =
      filterLearned === "All" ||
      (filterLearned === "Mastered" && isMastered) ||
      (filterLearned === "Learning" && !isMastered);

    return matchesSearch && matchesCategory && matchesLearned;
  });

  const handleToggleAllOnPage = () => {
    // Quick helper to master all currently filtered words
    filteredVocabulary.forEach((item) => {
      const isMastered = progress.masteredVocab.includes(item.id);
      if (!isMastered) {
        onToggleVocabMastered(item.id);
      }
    });
  };

  const isWordPlaying = (text: string) => {
    return isPlaying && currentSpeakingText === text;
  };

  return (
    <div className="py-3 space-y-4">
      
      {/* Title & Introduction banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="text-violet-600" size={20} />
          <div>
            <h2 className="text-lg font-bold text-gray-900 font-display">Workforce Vocabulary</h2>
            <p className="text-xs text-gray-500 font-sans">အလုပ်ခွင်သုံး စကားလုံးများနှင့် ဝေါဟာရများ</p>
          </div>
        </div>

        {/* Speed selection - Unified cyclic speed toggle */}
        <button
          id="btn-vocab-cycle-speed"
          onClick={() => {
            setVocabSpeed((prev) => {
              if (prev === 0.6) return 0.8;
              if (prev === 0.8) return 1.0;
              return 0.6;
            });
          }}
          className="px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer select-none self-start"
          title="Click to cycle speed: 0.6x → 0.8x → 1.0x"
        >
          <RefreshCw size={11} className="animate-spin-slow shrink-0" />
          <span>Speed: {vocabSpeed}x</span>
          <span className="text-[10px] font-normal opacity-80">(Cycle)</span>
        </button>
      </div>

      {/* Filter and Search Box */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 textbook-shadow space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              id="vocab-search-input"
              type="text"
              placeholder="Search words, phonetics, Burmese..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-hidden focus:border-violet-500 focus:ring-1 focus:ring-violet-200 font-sans"
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 uppercase tracking-wider font-bold shrink-0">Category</span>
            <select
              id="vocab-category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2 px-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-hidden focus:border-violet-500 focus:ring-1 focus:ring-violet-200 cursor-pointer font-sans"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Mastered status filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 uppercase tracking-wider font-bold shrink-0">Status</span>
            <div className="flex bg-gray-100 p-1 rounded-xl w-full">
              {[
                { value: "All", label: "All" },
                { value: "Learning", label: "Learning" },
                { value: "Mastered", label: "Mastered" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  id={`status-filter-${opt.value}`}
                  onClick={() => setFilterLearned(opt.value)}
                  className={`flex-1 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    filterLearned === opt.value
                      ? "bg-white text-violet-700 shadow-xs"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {opt.value}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Info & Bulk actions bar */}
        <div className="flex items-center justify-between text-xs text-gray-500 flex-wrap gap-2 pt-2 border-t border-gray-100/50">
          <p className="font-sans">
            Showing <strong className="text-gray-900">{filteredVocabulary.length}</strong> of {vocabulary.length} workforce words.
          </p>
          
          {filteredVocabulary.some(i => !progress.masteredVocab.includes(i.id)) && (
            <button
              id="btn-master-all"
              onClick={handleToggleAllOnPage}
              className="px-2.5 py-1 bg-violet-50 hover:bg-violet-100 text-violet-700 font-bold rounded-lg border border-violet-100 transition-all cursor-pointer text-[11px]"
            >
              Mark all on page as Mastered
            </button>
          )}
        </div>
      </div>

      {/* Vocabulary Flashcards Grid */}
      {filteredVocabulary.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredVocabulary.map((item) => {
            const isMastered = progress.masteredVocab.includes(item.id);
            const isPlayingThisWord = isWordPlaying(item.word);

            return (
              <div
                key={item.id}
                id={`vocab-card-${item.id}`}
                className={`p-4 rounded-2xl border card-transition relative flex flex-col justify-between ${
                  isPlayingThisWord
                    ? "bg-violet-50/50 border-violet-400 ring-2 ring-violet-200/50 shadow-md"
                    : isMastered
                    ? "bg-emerald-50/10 border-emerald-100 hover:border-emerald-200"
                    : "bg-white border-gray-100 hover:border-violet-200 hover:shadow-xs"
                }`}
              >
                {/* Card Header (Category & Audio speech control) */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-violet-500 bg-violet-50 px-2 py-0.5 rounded border border-violet-100">
                    {item.category}
                  </span>
                  
                  {/* Mastered Star toggle */}
                  <button
                    id={`btn-toggle-vocab-mastered-${item.id}`}
                    onClick={() => onToggleVocabMastered(item.id)}
                    className={`p-1 rounded-lg transition-all cursor-pointer ${
                      isMastered
                        ? "text-emerald-600 bg-emerald-50 hover:bg-emerald-100"
                        : "text-gray-300 hover:text-amber-500 hover:bg-gray-50"
                    }`}
                    title={isMastered ? "Mastered (Click to reset)" : "Mark as Mastered"}
                  >
                    <CheckCircle size={16} className={isMastered ? "fill-emerald-100" : ""} />
                  </button>
                </div>

                {/* Word content */}
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold text-gray-900 tracking-tight font-sans">
                      {item.word}
                    </h3>

                    {/* Speech play button */}
                    <button
                      id={`play-vocab-btn-${item.id}`}
                      onClick={() => speakText(item.word, vocabSpeed)}
                      className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                        isPlayingThisWord
                          ? "bg-violet-600 text-white animate-pulse"
                          : "bg-gray-100 hover:bg-violet-100 text-gray-600 hover:text-violet-700"
                      }`}
                      title="Pronounce Word"
                    >
                      <Volume2 size={12} />
                    </button>
                  </div>

                  <div className="bg-gray-50 px-2 py-1 rounded border border-gray-100 text-[10px] font-mono text-gray-500 italic leading-tight">
                    {item.phonetic}
                  </div>

                  {/* Meanings */}
                  <div className="space-y-1 pt-1.5 border-t border-gray-100/50">
                    <p className="text-xs text-gray-700 font-sans font-medium">
                      {item.meaningMy}
                    </p>
                    <p className="text-[10px] text-gray-400 font-sans leading-none">
                      EN: {item.meaningEn}
                    </p>
                  </div>
                </div>

                {/* Card Footer (Lesson link detail) */}
                <div className="flex items-center justify-between text-[9px] text-gray-400 pt-2 mt-2 border-t border-gray-100/50">
                  <span>Source: Lesson {item.lessonId.split("-")[1]}</span>
                  <span className={isMastered ? "text-emerald-600 font-bold" : "text-amber-600 font-semibold"}>
                    {isMastered ? "✓ Learned" : "○ Learning"}
                  </span>
                </div>

              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white border border-gray-100 p-8 text-center rounded-2xl textbook-shadow">
          <p className="text-sm font-semibold text-gray-500">No vocabulary words found matching your search filters.</p>
          <button
            id="btn-clear-vocab-filters"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
              setFilterLearned("All");
            }}
            className="mt-3 px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl text-xs cursor-pointer select-none transition-all inline-flex items-center gap-1.5"
          >
            Clear Filters
          </button>
        </div>
      )}

    </div>
  );
}
