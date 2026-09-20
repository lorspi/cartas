import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { OfflineIndicator } from './OfflineIndicator';
import { ThemeMode, AppView } from '../types';

interface HeaderProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isCurrent = (page: string) => {
    return currentView.type === page;
  };

  const handleNavClick = (view: AppView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className="w-full border-b border-[#dad4cb] dark:border-[#383633] bg-[#ece9e4]/90 dark:bg-[#1c1b1b]/90 backdrop-blur-xs sticky top-0 z-40 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo / Editorial Brand Title */}
        <button
          id="header-brand-logo"
          onClick={() => handleNavClick({ type: 'home' })}
          className="text-left group inline-flex flex-col items-start focus:outline-none"
        >
          <span className="font-serif text-lg sm:text-xl font-normal tracking-tight text-[#211e1c] dark:text-[#ede7e0] group-hover:text-[#b84e2a] dark:group-hover:text-[#cf6e4b] transition-colors">
            Cartas que quedan
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-sans">
          <button
            id="nav-link-archive"
            onClick={() => handleNavClick({ type: 'archive' })}
            className={`transition-colors tracking-wide py-1 text-xs uppercase ${
              isCurrent('archive')
                ? 'text-[#b84e2a] dark:text-[#cf6e4b] font-medium border-b border-[#b84e2a] dark:border-[#cf6e4b]'
                : 'text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0]'
            }`}
          >
            Archivo
          </button>

          {/*
          <button
            id="nav-link-categories"
            onClick={() => handleNavClick({ type: 'archive', category: 'all' })}
            className="text-xs uppercase tracking-wide py-1 text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors"
          >
            Categorías
          </button>
          */}

          <button
            id="nav-link-about"
            onClick={() => handleNavClick({ type: 'about' })}
            className={`transition-colors tracking-wide py-1 text-xs uppercase ${
              isCurrent('about')
                ? 'text-[#b84e2a] dark:text-[#cf6e4b] font-medium border-b border-[#b84e2a] dark:border-[#cf6e4b]'
                : 'text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0]'
            }`}
          >
            Sobre el proyecto
          </button>

          <div className="h-4 w-px bg-[#dad4cb] dark:bg-[#383633]" />

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <OfflineIndicator className="p-2 rounded-sm hover:bg-[#ece9e4]/60 dark:hover:bg-[#2a2927]" />
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <OfflineIndicator className="p-2 rounded-sm hover:bg-[#ece9e4]/60 dark:hover:bg-[#2a2927]" />

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="p-2 text-[#211e1c] dark:text-[#ede7e0] hover:bg-[#dad4cb]/40 dark:hover:bg-[#2a2927] rounded-sm transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" strokeWidth={1.75} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden border-t border-[#dad4cb] dark:border-[#383633] bg-[#ece9e4] dark:bg-[#1c1b1b] px-4 py-5 shadow-xs"
        >
          <nav className="flex flex-col gap-3 font-sans text-sm">
            <button
              id="mobile-nav-home"
              onClick={() => handleNavClick({ type: 'home' })}
              className={`text-left py-2 px-2 text-sm tracking-wide rounded-xs ${
                isCurrent('home')
                  ? 'text-[#b84e2a] dark:text-[#cf6e4b] font-medium bg-[#dad4cb]/30 dark:bg-[#2a2927]'
                  : 'text-[#211e1c] dark:text-[#ede7e0]'
              }`}
            >
              Portada
            </button>
            <button
              id="mobile-nav-archive"
              onClick={() => handleNavClick({ type: 'archive' })}
              className={`text-left py-2 px-2 text-sm tracking-wide rounded-xs ${
                isCurrent('archive')
                  ? 'text-[#b84e2a] dark:text-[#cf6e4b] font-medium bg-[#dad4cb]/30 dark:bg-[#2a2927]'
                  : 'text-[#211e1c] dark:text-[#ede7e0]'
              }`}
            >
              Archivo de documentos
            </button>
            {/* 
            <button
              id="mobile-nav-categories"
              onClick={() => handleNavClick({ type: 'archive', category: 'all' })}
              className="text-left py-2 px-2 text-sm tracking-wide text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0]"
            >
              Explorar por tema
            </button>
            */}
            <button
              id="mobile-nav-about"
              onClick={() => handleNavClick({ type: 'about' })}
              className={`text-left py-2 px-2 text-sm tracking-wide rounded-xs ${
                isCurrent('about')
                  ? 'text-[#b84e2a] dark:text-[#cf6e4b] font-medium bg-[#dad4cb]/30 dark:bg-[#2a2927]'
                  : 'text-[#211e1c] dark:text-[#ede7e0]'
              }`}
            >
              Sobre el proyecto
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
