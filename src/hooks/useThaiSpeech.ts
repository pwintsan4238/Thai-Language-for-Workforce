import { useState, useEffect, useCallback, useRef } from "react";

export function useThaiSpeech() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentText, setCurrentText] = useState<string | null>(null);
  const [speechRate, setSpeechRate] = useState<number>(0.8); // Default slightly slower for learners (0.8x)
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Load voices
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentText(null);
    }
  }, []);

  const speak = useCallback((text: string, rateOverride?: number) => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      console.warn("Speech synthesis not supported in this browser");
      return;
    }

    // Cancel current speech
    window.speechSynthesis.cancel();

    const cleanText = text.replace(/["'()]/g, ""); // Clean up quotes
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utteranceRef.current = utterance;
    
    // Attempt to find a Thai voice dynamically
    const currentVoices = window.speechSynthesis.getVoices();
    const voicesList = currentVoices.length > 0 ? currentVoices : availableVoices;
    const thaiVoice = voicesList.find(voice => 
      voice.lang.toLowerCase().includes("th")
    );
    if (thaiVoice) {
      utterance.voice = thaiVoice;
    } else {
      // Fallback: search general languages or let browser choose, but set lang
      utterance.lang = "th-TH";
    }

    // Set rate/speed
    utterance.rate = rateOverride !== undefined ? rateOverride : speechRate;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsPlaying(true);
      setCurrentText(text);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setCurrentText(null);
    };

    utterance.onerror = (e) => {
      // Benign errors are triggered when user stops speech, restarts, or switches lines
      const benignErrors = ["interrupted", "canceled"];
      if (e && benignErrors.includes(e.error)) {
        setIsPlaying(false);
        setCurrentText(null);
        return;
      }
      
      console.warn("Speech synthesis warning:", e.error || e);
      setIsPlaying(false);
      setCurrentText(null);
    };

    window.speechSynthesis.speak(utterance);
  }, [availableVoices, speechRate]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return {
    speak,
    stop,
    isPlaying,
    currentText,
    speechRate,
    setSpeechRate,
    hasThaiVoice: availableVoices.some(v => v.lang.toLowerCase().includes("th")),
  };
}
