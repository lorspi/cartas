import React from 'react';

interface CategoryBadgeProps {
  category: string;
  secondaryCategory?: string;
  onClick?: (category: string) => void;
  className?: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category,
  secondaryCategory,
  onClick,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.stopPropagation();
      onClick(category);
    }
  };

  return (
    <div className={`inline-flex items-center text-xs font-sans tracking-wider uppercase text-[#b84e2a] dark:text-[#cf6e4b] ${className}`}>
      <button
        type="button"
        onClick={handleClick}
        disabled={!onClick}
        className={`${onClick ? 'hover:underline cursor-pointer' : 'cursor-default'} font-medium`}
      >
        {category}
      </button>
      {secondaryCategory && (
        <span className="text-[#8c8479] dark:text-[#7d756a] ml-1.5 font-normal lowercase tracking-normal">
          · {secondaryCategory}
        </span>
      )}
    </div>
  );
};
