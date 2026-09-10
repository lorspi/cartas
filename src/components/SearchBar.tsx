import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Buscar en el archivo por título, tema o palabra...',
  className = '',
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative flex items-center">
        <Search
          className="absolute left-3.5 w-4 h-4 text-[#8c8479] dark:text-[#7d756a] pointer-events-none"
          strokeWidth={1.75}
        />
        <input
          id="archive-search-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 bg-[#f5f1ec] dark:bg-[#242321] border border-[#dad4cb] dark:border-[#383633] rounded-xs font-serif text-sm sm:text-base text-[#211e1c] dark:text-[#ede7e0] placeholder-[#8c8479] dark:placeholder-[#7d756a] focus:outline-none focus:border-[#b84e2a] dark:focus:border-[#cf6e4b] transition-colors"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            aria-label="Limpiar búsqueda"
            className="absolute right-3 p-1 text-[#8c8479] hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors"
          >
            <X className="w-4 h-4" strokeWidth={1.75} />
          </button>
        )}
      </div>
    </div>
  );
};
