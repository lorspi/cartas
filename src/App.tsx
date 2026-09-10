import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { ArchiveView } from './views/ArchiveView';
import { LetterDetailView } from './views/LetterDetailView';
import { AboutView } from './views/AboutView';
import { INITIAL_LETTERS } from './data/letters';
import { Letter, ThemeMode, FontSizeScale, AppView } from './types';

export default function App() {
  // 1. Theme State (defaults to light as requested in the prompt, with persistent localStorage)
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cartas_que_quedan_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('cartas_que_quedan_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // 2. Font Size State (defaults to base, persistent in localStorage)
  const [fontSize, setFontSize] = useState<FontSizeScale>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cartas_que_quedan_fontsize');
      if (saved && ['sm', 'base', 'lg', 'xl'].includes(saved)) {
        return saved as FontSizeScale;
      }
    }
    return 'base';
  });

  const handleFontSizeChange = (size: FontSizeScale) => {
    setFontSize(size);
    localStorage.setItem('cartas_que_quedan_fontsize', size);
  };

  // 3. Routing & Path Management
  const parseCurrentPath = (): AppView => {
    if (typeof window === 'undefined') return { type: 'home' };
    const pathname = window.location.pathname;

    if (pathname.startsWith('/cartas/')) {
      const slug = pathname.replace('/cartas/', '').replace(/\/$/, '');
      if (slug) {
        return { type: 'letter', slug };
      }
    } else if (pathname === '/archivo' || pathname.startsWith('/archivo')) {
      const params = new URLSearchParams(window.location.search);
      const category = params.get('categoria') || undefined;
      const search = params.get('q') || undefined;
      return { type: 'archive', category, search };
    } else if (pathname === '/sobre' || pathname.startsWith('/sobre')) {
      return { type: 'about' };
    }

    return { type: 'home' };
  };

  const [currentView, setCurrentView] = useState<AppView>(parseCurrentPath);

  // Synchronize browser history and page titles
  const navigate = (view: AppView, replace = false) => {
    let newPath = '/';
    if (view.type === 'archive') {
      newPath = view.category ? `/archivo?categoria=${encodeURIComponent(view.category)}` : '/archivo';
    } else if (view.type === 'letter') {
      newPath = `/cartas/${view.slug}`;
    } else if (view.type === 'about') {
      newPath = '/sobre';
    }

    if (replace) {
      window.history.replaceState({ view }, '', newPath);
    } else {
      window.history.pushState({ view }, '', newPath);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen to popstate for back/forward browser buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(parseCurrentPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title and Open Graph meta tags dynamically based on view
  useEffect(() => {
    if (currentView.type === 'letter') {
      const letter = INITIAL_LETTERS.find((l) => l.slug === currentView.slug);
      if (letter) {
        document.title = `${letter.title} — Cartas que quedan`;
        return;
      }
    } else if (currentView.type === 'archive') {
      document.title = 'Archivo de documentos — Cartas que quedan';
      return;
    } else if (currentView.type === 'about') {
      document.title = 'Sobre el proyecto — Cartas que quedan';
      return;
    }
    document.title = 'Cartas que quedan — Un archivo digital';
  }, [currentView]);

  // Current selected letter if on detail view
  const currentLetter =
    currentView.type === 'letter'
      ? INITIAL_LETTERS.find((l) => l.slug === currentView.slug) || INITIAL_LETTERS[0]
      : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#ece9e4] dark:bg-[#1c1b1b] text-[#211e1c] dark:text-[#ede7e0] transition-colors duration-200 selection:bg-[#b84e2a]/20 selection:text-[#211e1c] dark:selection:bg-[#cf6e4b]/30 dark:selection:text-[#ede7e0]">
      {/* Editorial Header */}
      <Header
        currentView={currentView}
        onNavigate={(view) => navigate(view)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content View */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 md:px-8">
        {currentView.type === 'home' && (
          <HomeView
            letters={INITIAL_LETTERS}
            onSelectLetter={(letter) => navigate({ type: 'letter', slug: letter.slug })}
            onNavigateArchive={(category) => navigate({ type: 'archive', category })}
            onNavigateAbout={() => navigate({ type: 'about' })}
          />
        )}

        {currentView.type === 'archive' && (
          <ArchiveView
            letters={INITIAL_LETTERS}
            initialCategory={currentView.category}
            initialSearch={currentView.search}
            onSelectLetter={(letter) => navigate({ type: 'letter', slug: letter.slug })}
          />
        )}

        {currentView.type === 'letter' && currentLetter && (
          <LetterDetailView
            letter={currentLetter}
            allLetters={INITIAL_LETTERS}
            onBackToArchive={() => navigate({ type: 'archive' })}
            onSelectCategory={(category) => navigate({ type: 'archive', category })}
            onSelectLetter={(letter) => navigate({ type: 'letter', slug: letter.slug })}
            theme={theme}
            onToggleTheme={toggleTheme}
            fontSize={fontSize}
            onChangeFontSize={handleFontSizeChange}
          />
        )}

        {currentView.type === 'about' && (
          <AboutView
            onBackToHome={() => navigate({ type: 'home' })}
            onGoToArchive={() => navigate({ type: 'archive' })}
          />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={(view) => navigate(view)} />
    </div>
  );
}
