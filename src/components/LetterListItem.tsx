import React, { useState } from 'react';
import { Clock, ArrowUpRight, Play } from 'lucide-react';
import { Letter } from '../types';
import { CategoryBadge } from './CategoryBadge';
import { LetterProgressBar } from './LetterProgressBar';
import {
  getReadingProgress,
  isLetterCompleted,
  READING_COMPLETE_THRESHOLD,
} from '../utils/readingProgress';

interface LetterListItemProps {
  letter: Letter;
  onSelect: (letter: Letter) => void;
  /** Opens the letter and starts its narration; shown only for narrated letters. */
  onListen?: (letter: Letter) => void;
  onSelectCategory?: (category: string) => void;
  showExcerpt?: boolean;
}

export const LetterListItem: React.FC<LetterListItemProps> = ({
  letter,
  onSelect,
  onListen,
  onSelectCategory,
  showExcerpt = true,
}) => {
  // Read once on mount: the list unmounts/remounts on every route change in
  // this SPA, so there's no need to react to storage updates while mounted.
  const [progress] = useState(() => getReadingProgress(letter.slug));
  const [completed] = useState(() => isLetterCompleted(letter.slug));
  // Same rule the letter view uses to resume the reader's position, so
  // "Continuar" picks up the narration where the reading/listening stopped.
  const canContinue = !completed && progress > 3 && progress < READING_COMPLETE_THRESHOLD;

  return (
    <article
      id={`letter-item-${letter.slug}`}
      onClick={() => onSelect(letter)}
      className="group py-8 sm:py-10 border-b border-[#dad4cb] dark:border-[#383633] cursor-pointer transition-colors hover:bg-[#ece9e4]/40 dark:hover:bg-[#242321]/50 -mx-3 px-3 sm:-mx-4 sm:px-4 rounded-xs"
    >
      <div className="flex flex-col gap-2.5">
        {/* Top meta row: Number and Category */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/*
            <span className="font-serif text-sm sm:text-base font-normal text-[#8c8479] dark:text-[#7d756a] tracking-wider">
              {letter.indexNumber}
            </span>
            <span className="text-[#dad4cb] dark:text-[#383633]">/</span>
            */}
            <CategoryBadge
              category={letter.category}
              secondaryCategory={letter.secondaryCategory}
              onClick={onSelectCategory}
            />
          </div>

          {/*
          <span className="font-sans text-xs text-[#8c8479] dark:text-[#7d756a]">
            {letter.year}
          </span>
          */}
        </div>

        {/* Letter Title */}
        <div className="flex items-baseline justify-between gap-4 mt-1">
          <h3 className="font-serif text-xl sm:text-2xl md:text-2xl font-normal text-[#211e1c] dark:text-[#ede7e0] leading-snug group-hover:text-[#b84e2a] dark:group-hover:text-[#cf6e4b] transition-colors">
            {letter.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-[#8c8479] dark:text-[#7d756a] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 hidden sm:block" />
        </div>

        {/* Excerpt */}
        {showExcerpt && (
          <p className="font-serif text-sm sm:text-base text-[#6b645c] dark:text-[#9c958c] leading-relaxed line-clamp-2 sm:line-clamp-3 mt-1 font-light">
            {letter.excerpt}
          </p>
        )}

        {/* Bottom meta row: Reading indicator and date */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mt-2 font-sans text-xs text-[#8c8479] dark:text-[#7d756a]">
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>{letter.readingTime}</span>
          </span>
          <span>·</span>
          <span className="whitespace-nowrap">{letter.formattedDate}</span>

          {onListen && letter.audioDuration && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // don't also trigger the card's plain "open"
                onListen(letter);
              }}
              aria-label={`${canContinue ? 'Continuar escuchando' : 'Escuchar'} «${letter.title}» (voz generada con IA)`}
              title="Narración con voz generada por IA"
              className="ml-auto shrink-0 inline-flex items-center gap-1.5 pl-2 pr-3 py-1 rounded-full border border-[#b84e2a]/40 dark:border-[#cf6e4b]/40 text-[#b84e2a] dark:text-[#cf6e4b] hover:bg-[#b84e2a] hover:text-white dark:hover:bg-[#cf6e4b] dark:hover:text-white hover:border-transparent transition-colors"
            >
              <Play className="w-3 h-3" fill="currentColor" />
              {canContinue ? (
                <>
                  <span className="font-medium">Continuar</span>
                  {/* Estimate: while narrating, the page follows the audio, so the
                      saved scroll % tracks the audio's % closely. */}
                  <span className="opacity-70">
                    · quedan {Math.max(1, Math.ceil((letter.audioDuration * (1 - progress / 100)) / 60))} min
                  </span>
                </>
              ) : (
                <>
                  <span className="font-medium">Escuchar</span>
                  <span className="opacity-70">· {Math.round(letter.audioDuration / 60)} min</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Reading progress: same signal as the bar shown inside the letter */}
        <LetterProgressBar progress={progress} isComplete={completed} />
      </div>
    </article>
  );
};
