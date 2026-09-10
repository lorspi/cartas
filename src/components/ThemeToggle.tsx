import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeMode } from '../types';

interface ThemeToggleProps {
  theme: ThemeMode;
  onToggle: () => void;
  className?: string;
  variant?: 'minimal' | 'labeled';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  onToggle,
  className = '',
  variant = 'minimal',
}) => {
  const isDark = theme === 'dark';

  return (
    <button
      id="theme-toggle-btn"
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Cambiar a modo papel claro' : 'Cambiar a modo lectura nocturna'}
      title={isDark ? 'Modo claro (papel)' : 'Modo nocturno (biblioteca)'}
      className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-sm transition-colors text-xs font-sans tracking-wide text-[#6b645c] hover:text-[#211e1c] dark:text-[#9c958c] dark:hover:text-[#ede7e0] hover:bg-[#ece9e4]/60 dark:hover:bg-[#2a2927] border border-transparent hover:border-[#dad4cb]/70 dark:hover:border-[#383633] ${className}`}
    >
      {isDark ? (
        <Sun className="w-3.5 h-3.5 text-[#d0a65c]" strokeWidth={1.75} />
      ) : (
        <Moon className="w-3.5 h-3.5 text-[#5d4837]" strokeWidth={1.75} />
      )}
      {variant === 'labeled' && (
        <span className="font-normal">{isDark ? 'Modo papel' : 'Modo noche'}</span>
      )}
    </button>
  );
};
