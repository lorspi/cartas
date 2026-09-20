import React from 'react';
import { Check } from 'lucide-react';
import { READING_COMPLETE_THRESHOLD } from '../utils/readingProgress';

interface LetterProgressBarProps {
  /** Highest reading percentage (0-100) recorded for this letter. */
  progress: number;
}

/** Compact "continue reading" indicator shown on letter cards in the home and
 *  archive lists. Mirrors the thin bar used inside the letter view itself so
 *  the reader recognizes it as the same signal, just inline instead of fixed
 *  to the top of the viewport. */
export const LetterProgressBar: React.FC<LetterProgressBarProps> = ({ progress }) => {
  const isComplete = progress >= READING_COMPLETE_THRESHOLD;
  const width = isComplete ? 100 : progress;

  return (
    <div className="flex items-center gap-2 mt-2.5" aria-hidden={progress <= 0}>
      <div
        className="flex-1 h-[3px] rounded-full bg-[#dad4cb]/50 dark:bg-[#383633]/60 overflow-hidden"
        role={progress > 0 ? 'progressbar' : undefined}
        aria-valuenow={progress > 0 ? Math.round(width) : undefined}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={progress > 0 ? 'Progreso de lectura' : undefined}
      >
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            isComplete ? 'bg-[#7a8f6b] dark:bg-[#96ab86]' : 'bg-[#b84e2a] dark:bg-[#cf6e4b]'
          }`}
          style={{ width: `${width}%` }}
        />
      </div>

      {isComplete && (
        <span className="flex items-center gap-1 font-sans text-[10px] uppercase tracking-wider text-[#7a8f6b] dark:text-[#96ab86] shrink-0">
          <Check className="w-3 h-3" strokeWidth={2} />
          <span>Leída</span>
        </span>
      )}
    </div>
  );
};
