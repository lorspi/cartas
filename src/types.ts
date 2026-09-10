export type Category =
  | 'Amor'
  | 'Fe'
  | 'Guerra'
  | 'Paz'
  | 'Justicia'
  | 'Libertad'
  | 'Familia'
  | 'Sociedad'
  | 'Miedo'
  | 'Empatía'
  | 'Política';

export interface BiblicalQuote {
  quote: string;
  reference: string;
  context?: string;
}

export interface Letter {
  /** Derived from position in the chronologically-sorted archive, e.g. "01". */
  indexNumber: string;
  slug: string;
  title: string;
  category: Category;
  secondaryCategory?: string;
  tags: string[];
  excerpt: string;
  date: string; // ISO format: YYYY-MM-DD
  /** Derived from `date`. */
  year: string;
  /** Derived from `date`, e.g. "6 de septiembre de 2026". */
  formattedDate: string;
  readingTime: string;
  /** Derived from the word count of `body`. */
  wordCount: number;
  /** Epigraph shown alongside the letter; not necessarily quoted verbatim in the body. */
  biblicalQuote?: BiblicalQuote;
  /** Raw markdown body — relative image URLs are already resolved to absolute Vite-served URLs. */
  body: string;
}

export type ThemeMode = 'light' | 'dark';
export type FontSizeScale = 'sm' | 'base' | 'lg' | 'xl';

export type AppView =
  | { type: 'home' }
  | { type: 'archive'; category?: string; search?: string }
  | { type: 'letter'; slug: string }
  | { type: 'about' };
