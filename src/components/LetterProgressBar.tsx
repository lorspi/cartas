import React from 'react';
import { Check } from 'lucide-react';

interface LetterProgressBarProps {
  /** Reader's current recorded position (0-100) for this letter. */
  progress: number;
  /** Whether the letter has ever been read to the end. When true the bar shows
   *  full with the "Leída" badge, independently of the current position (which
   *  may have receded if the reader scrolled back up before leaving). */
  isComplete?: boolean;
}

/** Compact "continue reading" indicator shown on letter cards in the home and
 *  archive lists. Mirrors the thin bar used inside the letter view itself so
 *  the reader recognizes it as the same signal, just inline instead of fixed
 *  to the top of the viewport. */
export const LetterProgressBar: React.FC<LetterProgressBarProps> = ({
  progress,
  isComplete = false,
}) => {
  const width = isComplete ? 100 : progress;
  // Show the bar as a meaningful signal when there's any recorded position OR
  // the letter has been completed (even if the position later receded to 0).
  const hasSignal = progress > 0 || isComplete;

  return (
    <div className="flex items-center gap-2 mt-2.5" aria-hidden={!hasSignal}>
      <div
        className="flex-1 h-[3px] rounded-full bg-[#dad4cb]/50 dark:bg-[#383633]/60 overflow-hidden"
        role={hasSignal ? 'progressbar' : undefined}
        aria-valuenow={hasSignal ? Math.round(width) : undefined}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={hasSignal ? 'Progreso de lectura' : undefined}
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
