import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { INITIAL_LETTERS } from './data/letters';
import { Letter, ThemeMode, FontSizeScale, AppView } from './types';

// Views are code-split so each route only downloads what it needs. The letter
// detail view in particular pulls in the markdown stack (react-markdown,
// remark-gfm, rehype-raw), which we don't want in the initial bundle.
const HomeView = lazy(() =>
  import('./views/HomeView').then((m) => ({ default: m.HomeView })),
);
const ArchiveView = lazy(() =>
  import('./views/ArchiveView').then((m) => ({ default: m.ArchiveView })),
);
const LetterDetailView = lazy(() =>
  import('./views/LetterDetailView').then((m) => ({ default: m.LetterDetailView })),
);
const AboutView = lazy(() =>
  import('./views/AboutView').then((m) => ({ default: m.AboutView })),
);

export default function App() {
  // 1. Theme State
  // If the user has explicitly chosen a theme we honor it (persisted in
  // localStorage). Otherwise we follow the browser / OS color-scheme
  // preference and keep reacting to it live until the user picks one.
  const THEME_STORAGE_KEY = 'cartas_que_quedan_theme';

  const getSystemTheme = (): ThemeMode => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark';
    }
    return 'light';
  };

  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return getSystemTheme();
  });

  // Apply the current theme to the document root.
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Follow the OS color-scheme preference live, but only while the user hasn't
  // made an explicit choice (nothing stored in localStorage).
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') return; // user chose manually
      setTheme(event.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      // Toggling is an explicit choice, so persist it.
      localStorage.setItem(THEME_STORAGE_KEY, next);
      return next;
    });
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
  // BASE_URL is the deploy sub-path Vite serves from (e.g. "/cartas/" on
  // GitHub Pages, "/" on a custom domain). We strip it before matching routes
  // and prepend it when building links so the app works under any base.
  const BASE = import.meta.env.BASE_URL || '/';

  const stripBase = (pathname: string): string => {
    const normalizedBase = BASE.replace(/\/$/, ''); // "/cartas" or ""
    let route = pathname;
    if (normalizedBase && route.startsWith(normalizedBase)) {
      route = route.slice(normalizedBase.length);
    }
    if (!route.startsWith('/')) route = `/${route}`;
    return route;
  };

  const withBase = (route: string): string => {
    const normalizedBase = BASE.replace(/\/$/, ''); // "/cartas" or ""
    return `${normalizedBase}${route}` || '/';
  };

  const parseCurrentPath = (): AppView => {
    if (typeof window === 'undefined') return { type: 'home' };
    const pathname = stripBase(window.location.pathname);

    if (pathname.startsWith('/carta/')) {
      const slug = pathname.replace('/carta/', '').replace(/\/$/, '');
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
      newPath = `/carta/${view.slug}`;
    } else if (view.type === 'about') {
      newPath = '/sobre';
    }
    newPath = withBase(newPath);

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
        <Suspense
          fallback={
            <div
              className="flex items-center justify-center py-32 text-[#8c8479] dark:text-[#7d756a]"
              role="status"
              aria-live="polite"
            >
              <span className="font-serif text-sm tracking-wide animate-pulse">
                Cargando…
              </span>
            </div>
          }
        >
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
        </Suspense>
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={(view) => navigate(view)} />
    </div>
  );
}
