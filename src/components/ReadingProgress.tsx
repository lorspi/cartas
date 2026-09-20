import React, { useEffect, useState } from 'react';
import { setReadingProgress } from '../utils/readingProgress';

interface ReadingProgressProps {
  /** Letter slug this bar tracks; progress is persisted per slug in localStorage. */
  slug: string;
  /** Starting percentage, already resolved by the caller via
   *  `beginLetterSession` (0 if this letter's previous read was already
   *  complete, so re-reading it tracks a fresh pass). */
  initialProgress: number;
}

export const ReadingProgress: React.FC<ReadingProgressProps> = ({ slug, initialProgress }) => {
  const [progress, setProgress] = useState(initialProgress);

  useEffect(() => {
    setProgress(initialProgress);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setProgress(0);
        return;
      }
      const currentScroll = window.scrollY;
      const percentage = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setProgress((prev) => Math.max(prev, percentage));
      setReadingProgress(slug, percentage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug, initialProgress]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[2px] z-50 pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-[#b84e2a] dark:bg-[#cf6e4b] transition-all duration-150 ease-out opacity-80"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
