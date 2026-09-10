import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  className?: string;
  variant?: 'inline-tabs' | 'pills';
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  className = '',
  variant = 'inline-tabs',
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2.5 font-sans text-xs ${className}`}>
      <button
        type="button"
        onClick={() => onSelectCategory(null)}
        className={`transition-colors uppercase tracking-wider py-1 border-b ${
          selectedCategory === null
            ? 'text-[#b84e2a] dark:text-[#cf6e4b] border-[#b84e2a] dark:border-[#cf6e4b] font-medium'
            : 'text-[#6b645c] dark:text-[#9c958c] border-transparent hover:text-[#211e1c] dark:hover:text-[#ede7e0]'
        }`}
      >
        Todas las cartas
      </button>

      {categories.map((cat) => {
        const isSelected = selectedCategory?.toLowerCase() === cat.toLowerCase();
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(isSelected ? null : cat)}
            className={`transition-colors uppercase tracking-wider py-1 border-b ${
              isSelected
                ? 'text-[#b84e2a] dark:text-[#cf6e4b] border-[#b84e2a] dark:border-[#cf6e4b] font-medium'
                : 'text-[#6b645c] dark:text-[#9c958c] border-transparent hover:text-[#211e1c] dark:hover:text-[#ede7e0]'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};
