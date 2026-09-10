import React from 'react';
import { Letter } from '../types';
import { LetterListItem } from './LetterListItem';

interface LetterListProps {
  letters: Letter[];
  onSelectLetter: (letter: Letter) => void;
  onSelectCategory?: (category: string) => void;
  emptyMessage?: string;
}

export const LetterList: React.FC<LetterListProps> = ({
  letters,
  onSelectLetter,
  onSelectCategory,
  emptyMessage = 'No se encontraron cartas en este archivo.',
}) => {
  if (letters.length === 0) {
    return (
      <div className="py-20 text-center border-t border-b border-[#dad4cb] dark:border-[#383633] my-8">
        <p className="font-serif text-lg text-[#6b645c] dark:text-[#9c958c] italic">
          {emptyMessage}
        </p>
        <p className="font-sans text-xs text-[#8c8479] dark:text-[#7d756a] mt-2">
          Intenta con otros términos o selecciona otra categoría temática.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full border-t border-[#dad4cb] dark:border-[#383633]">
      {letters.map((letter) => (
        <LetterListItem
          key={letter.slug}
          letter={letter}
          onSelect={onSelectLetter}
          onSelectCategory={onSelectCategory}
        />
      ))}
    </div>
  );
};
