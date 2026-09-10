import React from 'react';
import { AppView } from '../types';

interface FooterProps {
  onNavigate: (view: AppView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer
      id="main-footer"
      className="w-full border-t border-[#dad4cb] dark:border-[#383633] mt-24 py-14 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-8">
          <div className="max-w-md">
            <h3 className="font-serif text-lg font-normal text-[#211e1c] dark:text-[#ede7e0]">
              Cartas que quedan
            </h3>
            <p className="font-serif italic text-sm text-[#6b645c] dark:text-[#9c958c] mt-1.5 leading-relaxed">
              «Hay cosas que vale la pena dejar escritas.»
            </p>
            <p className="font-sans text-xs text-[#6b645c] dark:text-[#9c958c] mt-3 leading-relaxed">
              Un archivo personal y editorial de reflexiones, cartas y preguntas humanas pensado para perdurar y volver a ser leído con calma.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 font-sans text-xs tracking-wider uppercase text-[#6b645c] dark:text-[#9c958c]">
            <button
              onClick={() => onNavigate({ type: 'home' })}
              className="hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors focus:outline-none"
            >
              Portada
            </button>
            <button
              onClick={() => onNavigate({ type: 'archive' })}
              className="hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors focus:outline-none"
            >
              Archivo
            </button>
            <button
              onClick={() => onNavigate({ type: 'about' })}
              className="hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors focus:outline-none"
            >
              Sobre el proyecto
            </button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#dad4cb]/50 dark:border-[#383633]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#8c8479] dark:text-[#7d756a] font-sans">
          <span>Un archivo digital de lectura pausada.</span>
          <span className="mt-1 sm:mt-0">2026</span>
        </div>
      </div>
    </footer>
  );
};
