import React from 'react';

interface QuoteProps {
  text: string;
  reference?: string;
  isBiblical?: boolean;
  className?: string;
}

export const Quote: React.FC<QuoteProps> = ({
  text,
  reference,
  isBiblical = false,
  className = '',
}) => {
  return (
    <figure
      className={`my-10 pl-6 sm:pl-8 border-l-2 border-[#b84e2a] dark:border-[#cf6e4b] ${className}`}
    >
      <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-[#211e1c] dark:text-[#ede7e0] italic leading-relaxed tracking-tight">
        «{text.replace(/^[«"“]/, '').replace(/[»"”]$/, '')}»
      </blockquote>
      {reference && (
        <figcaption className="mt-3.5 flex items-center gap-2">
          {isBiblical && (
            <span className="inline-block w-2.5 h-px bg-[#b84e2a] dark:bg-[#cf6e4b]" />
          )}
          <span
            className={`font-sans text-xs tracking-wider uppercase ${
              isBiblical
                ? 'font-semibold text-[#b84e2a] dark:text-[#cf6e4b]'
                : 'text-[#6b645c] dark:text-[#9c958c]'
            }`}
          >
            {reference}
          </span>
        </figcaption>
      )}
    </figure>
  );
};
