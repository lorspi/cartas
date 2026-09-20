import React from 'react';
import { Sun, Moon, BookOpen, Minimize2 } from 'lucide-react';
import { OfflineIndicator } from './OfflineIndicator';
import { ThemeMode, FontSizeScale } from '../types';

interface ReadingControlsProps {
  fontSize: FontSizeScale;
  onChangeFontSize: (size: FontSizeScale) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  isFocusMode: boolean;
  onToggleFocusMode: () => void;
  className?: string;
}

export const ReadingControls: React.FC<ReadingControlsProps> = ({
  fontSize,
  onChangeFontSize,
  theme,
  onToggleTheme,
  isFocusMode,
  onToggleFocusMode,
  className = '',
}) => {
  const sizes: FontSizeScale[] = ['sm', 'base', 'lg', 'xl'];
  const currentIndex = sizes.indexOf(fontSize);

  const handleDecrease = () => {
    if (currentIndex > 0) {
      onChangeFontSize(sizes[currentIndex - 1]);
    }
  };

  const handleReset = () => {
    onChangeFontSize('base');
  };

  const handleIncrease = () => {
    if (currentIndex < sizes.length - 1) {
      onChangeFontSize(sizes[currentIndex + 1]);
    }
  };

  return (
    <div
      id="reading-controls-bar"
      aria-label="Controles de lectura"
      className={`inline-flex items-center gap-1 sm:gap-1.5 p-1 bg-[#f5f1ec] dark:bg-[#242321] border border-[#dad4cb] dark:border-[#383633] rounded-full text-xs font-sans text-[#6b645c] dark:text-[#9c958c] shadow-xs ${className}`}
    >
      {/* Font Size decrease: A- */}
      <button
        type="button"
        onClick={handleDecrease}
        disabled={currentIndex === 0}
        aria-label="Disminuir tamaño de letra"
        title="Reducir tipografía (A-)"
        className={`px-2 py-1 rounded-full transition-colors font-serif ${
          currentIndex === 0
            ? 'opacity-30 cursor-not-allowed'
            : 'hover:bg-[#ece9e4] dark:hover:bg-[#2a2927] hover:text-[#211e1c] dark:hover:text-[#ede7e0]'
        }`}
      >
        A<span className="text-[10px] font-sans -ml-0.5">−</span>
      </button>

      {/* Font Size reset: A */}
      <button
        type="button"
        onClick={handleReset}
        aria-label="Tamaño normal de letra"
        title="Tamaño original (A)"
        className={`px-2 py-1 rounded-full transition-colors font-serif ${
          fontSize === 'base'
            ? 'bg-[#ece9e4] dark:bg-[#2a2927] text-[#211e1c] dark:text-[#ede7e0] font-medium'
            : 'hover:bg-[#ece9e4] dark:hover:bg-[#2a2927] hover:text-[#211e1c] dark:hover:text-[#ede7e0]'
        }`}
      >
        A
      </button>

      {/* Font Size increase: A+ */}
      <button
        type="button"
        onClick={handleIncrease}
        disabled={currentIndex === sizes.length - 1}
        aria-label="Aumentar tamaño de letra"
        title="Aumentar tipografía (A+)"
        className={`px-2 py-1 rounded-full transition-colors font-serif ${
          currentIndex === sizes.length - 1
            ? 'opacity-30 cursor-not-allowed'
            : 'hover:bg-[#ece9e4] dark:hover:bg-[#2a2927] hover:text-[#211e1c] dark:hover:text-[#ede7e0]'
        }`}
      >
        A<span className="text-[10px] font-sans -ml-0.5">+</span>
      </button>

      <span className="h-3.5 w-px bg-[#dad4cb] dark:bg-[#383633] mx-0.5" />

      {/* Theme Toggle */}
      <button
        type="button"
        onClick={onToggleTheme}
        aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo noche'}
        title={theme === 'dark' ? 'Papel claro' : 'Tinta nocturna'}
        className="p-1.5 rounded-full hover:bg-[#ece9e4] dark:hover:bg-[#2a2927] hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors"
      >
        {theme === 'dark' ? (
          <Sun className="w-3.5 h-3.5 text-[#d0a65c]" strokeWidth={1.75} />
        ) : (
          <Moon className="w-3.5 h-3.5 text-[#5d4837]" strokeWidth={1.75} />
        )}
      </button>

      <OfflineIndicator
        className="p-1.5 rounded-full hover:bg-[#ece9e4] dark:hover:bg-[#2a2927]"
        side="top"
      />

      <span className="h-3.5 w-px bg-[#dad4cb] dark:bg-[#383633] mx-0.5" />

      {/* Focus reading mode */}
      <button
        type="button"
        onClick={onToggleFocusMode}
        aria-label={isFocusMode ? 'Salir de modo lectura' : 'Activar modo lectura silenciosa'}
        title={isFocusMode ? 'Salir de modo lectura' : 'Modo lectura pausada'}
        className={`flex items-center gap-1 px-2 py-1 rounded-full transition-colors ${
          isFocusMode
            ? 'bg-[#b84e2a]/10 dark:bg-[#cf6e4b]/15 text-[#b84e2a] dark:text-[#cf6e4b] font-medium'
            : 'hover:bg-[#ece9e4] dark:hover:bg-[#2a2927] hover:text-[#211e1c] dark:hover:text-[#ede7e0]'
        }`}
      >
        {isFocusMode ? (
          <>
            <Minimize2 className="w-3.5 h-3.5" strokeWidth={1.75} />
            <span className="hidden sm:inline text-[11px]">Normal</span>
          </>
        ) : (
          <>
            <BookOpen className="w-3.5 h-3.5" strokeWidth={1.75} />
            <span className="hidden sm:inline text-[11px]">Lectura</span>
          </>
        )}
      </button>
    </div>
  );
};
