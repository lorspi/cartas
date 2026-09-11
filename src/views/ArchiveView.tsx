import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, RotateCcw } from 'lucide-react';
import { Letter } from '../types';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { LetterList } from '../components/LetterList';
import { CATEGORIES } from '../data/letters';

interface ArchiveViewProps {
  letters: Letter[];
  initialCategory?: string;
  initialSearch?: string;
  onSelectLetter: (letter: Letter) => void;
}

type SortOrder = 'newest' | 'oldest' | 'readingTime';

/** Lowercase + strip diacritics so "empatia" matches "empatía". */
const normalize = (text: string): string =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

/** Turn a letter's markdown body into plain, searchable prose. */
const bodyToPlainText = (markdown: string): string =>
  markdown
    // Drop image references entirely (including resolved asset URLs)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    // Keep the link text, discard the URL
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    // Strip HTML tags
    .replace(/<[^>]+>/g, ' ')
    // Strip markdown formatting characters
    .replace(/[#>*_`~]/g, ' ')
    .replace(/\s+/g, ' ');

/**
 * Collect every biblical reference in a letter's body.
 * These live in `data-ref="Santiago 1:19"` attributes on <blockquote> tags
 * and would otherwise be discarded when HTML is stripped for search.
 */
const extractReferences = (markdown: string): string => {
  const refs: string[] = [];
  const re = /data-ref=["']([^"']+)["']/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(markdown)) !== null) {
    refs.push(match[1]);
  }
  return refs.join(' ');
};

export const ArchiveView: React.FC<ArchiveViewProps> = ({
  letters,
  initialCategory,
  initialSearch = '',
  onSelectLetter,
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory === 'all' ? null : initialCategory || null
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  // Filter and sort letters
  const filteredLetters = useMemo(() => {
    return letters
      .filter((letter) => {
        // Category filter: checks main category, secondary category or tags
        if (selectedCategory) {
          const cat = selectedCategory.toLowerCase();
          const matchesCategory =
            letter.category.toLowerCase() === cat ||
            letter.secondaryCategory?.toLowerCase().includes(cat) ||
            letter.tags.some((t) => t.toLowerCase() === cat);
          if (!matchesCategory) return false;
        }

        // Search query filter: checks title, excerpt, category, tags and the
        // full inner text of the letter (accent-insensitive).
        if (searchQuery.trim()) {
          const q = normalize(searchQuery.trim());
          const matchesTitle = normalize(letter.title).includes(q);
          const matchesExcerpt = normalize(letter.excerpt).includes(q);
          const matchesCategory = normalize(letter.category).includes(q);
          const matchesTags = letter.tags.some((t) => normalize(t).includes(q));
          const matchesContent = normalize(bodyToPlainText(letter.body)).includes(q);
          // Biblical references: both the epigraph and the inline `data-ref` citations.
          const matchesReference =
            (letter.biblicalQuote?.reference
              ? normalize(letter.biblicalQuote.reference).includes(q)
              : false) || normalize(extractReferences(letter.body)).includes(q);

          return (
            matchesTitle ||
            matchesExcerpt ||
            matchesCategory ||
            matchesTags ||
            matchesContent ||
            matchesReference
          );
        }

        return true;
      })
      .sort((a, b) => {
        if (sortOrder === 'newest') {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        if (sortOrder === 'oldest') {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        if (sortOrder === 'readingTime') {
          return a.wordCount - b.wordCount;
        }
        return 0;
      });
  }, [letters, searchQuery, selectedCategory, sortOrder]);

  // Only show categories that have at least one letter associated with them
  // (matching by main category, secondary category or tags — same logic as the filter).
  const categoryNames = useMemo(() => {
    return CATEGORIES.map((c) => c.name).filter((name) => {
      const cat = name.toLowerCase();
      return letters.some(
        (letter) =>
          letter.category.toLowerCase() === cat ||
          letter.secondaryCategory?.toLowerCase().includes(cat) ||
          letter.tags.some((t) => t.toLowerCase() === cat)
      );
    });
  }, [letters]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSortOrder('newest');
  };

  const hasActiveFilters = searchQuery.trim() !== '' || selectedCategory !== null || sortOrder !== 'newest';

  return (
    <div className="w-full pt-10 sm:pt-16 pb-20">
      {/* Archive Header */}
      <div className="max-w-3xl mb-12">
        <span className="font-sans text-xs uppercase tracking-widest text-[#8c8479] dark:text-[#7d756a]">
          Catálogo General
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#211e1c] dark:text-[#ede7e0] mt-2">
          Archivo de documentos
        </h1>
        <p className="font-serif text-base sm:text-lg text-[#6b645c] dark:text-[#9c958c] mt-3 font-light leading-relaxed">
          Un repositorio permanente de reflexiones, correspondencias y preguntas sobre la condición humana para leer a ritmo pausado.
        </p>
      </div>

      {/* Repository Controls: Search, Filters, Sort */}
      <div className="space-y-6 mb-10 pb-8 border-b border-[#dad4cb] dark:border-[#383633]">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Buscar por palabras, títulos, citas o temas en el archivo..."
        />

        {/* Category Tabs */}
        <div>
          <div className="text-[11px] font-sans uppercase tracking-widest text-[#8c8479] dark:text-[#7d756a] mb-2">
            Filtrar por temática:
          </div>
          <CategoryFilter
            categories={categoryNames}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Status bar: Count & Sort */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 font-sans text-xs text-[#8c8479] dark:text-[#7d756a]">
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#211e1c] dark:text-[#ede7e0]">
              {filteredLetters.length} {filteredLetters.length === 1 ? 'carta encontrada' : 'cartas encontradas'}
            </span>
            {hasActiveFilters && (
              <>
                <span>·</span>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-[#b84e2a] dark:text-[#cf6e4b] hover:underline inline-flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Limpiar filtros</span>
                </button>
              </>
            )}
          </div>

          {/* Chronological Sort selector */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Ordenar:</span>
            <select
              id="sort-order-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
              className="bg-transparent border border-[#dad4cb] dark:border-[#383633] rounded-xs px-2 py-1 text-xs text-[#211e1c] dark:text-[#ede7e0] focus:outline-none focus:border-[#b84e2a]"
            >
              <option value="newest" className="bg-[#ece9e4] dark:bg-[#1c1b1b]">
                Más recientes primero
              </option>
              <option value="oldest" className="bg-[#ece9e4] dark:bg-[#1c1b1b]">
                Orden cronológico (antiguas)
              </option>
              <option value="readingTime" className="bg-[#ece9e4] dark:bg-[#1c1b1b]">
                Lectura más breve
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Results List */}
      <LetterList
        letters={filteredLetters}
        onSelectLetter={onSelectLetter}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        emptyMessage={
          searchQuery
            ? `No encontramos ningún escrito con el término «${searchQuery}».`
            : selectedCategory
            ? `No hay cartas registradas bajo el tema «${selectedCategory}».`
            : 'No hay cartas disponibles en este archivo.'
        }
      />
    </div>
  );
};
