import React from 'react';
import { ArrowRight, BookMarked, Compass } from 'lucide-react';
import { Letter } from '../types';
import { LetterList } from '../components/LetterList';
import { CATEGORIES } from '../data/letters';

interface HomeViewProps {
  letters: Letter[];
  onSelectLetter: (letter: Letter) => void;
  onNavigateArchive: (category?: string) => void;
  onNavigateAbout: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  letters,
  onSelectLetter,
  onNavigateArchive,
  onNavigateAbout,
}) => {
  // Show the latest 4-5 letters on home
  const recentLetters = letters.slice(0, 4);

  return (
    <div className="w-full">
      {/* Editorial Hero: Book cover feel with generous negative space */}
      <section
        id="home-hero"
        className="pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#dad4cb] dark:border-[#383633]"
      >
        <div className="max-w-3xl">
          {/* Subtle index tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-px bg-[#b84e2a] dark:bg-[#cf6e4b]" />
            <span className="font-sans text-xs uppercase tracking-widest text-[#b84e2a] dark:text-[#cf6e4b] font-medium">
              Archivo Editorial
            </span>
          </div>

          {/* Book Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#211e1c] dark:text-[#ede7e0] tracking-tight leading-[1.12]">
            Cartas que quedan
          </h1>

          {/* Subtitle */}
          <p className="font-serif text-xl sm:text-2xl md:text-2xl text-[#5d4837] dark:text-[#cfa152] mt-4 font-normal tracking-tight italic">
            Hay cosas que vale la pena dejar escritas.
          </p>

          {/* Intro quote */}
          <p className="font-serif text-base sm:text-lg text-[#6b645c] dark:text-[#9c958c] mt-6 sm:mt-8 max-w-xl leading-relaxed font-light">
            Un archivo de cartas, preguntas y reflexiones sobre esas cosas que seguimos intentando entender: el amor, la fe, la guerra, la paz y la dignidad humana.
          </p>

          {/* Quiet action links */}
          <div className="flex flex-wrap items-center gap-6 mt-10 font-sans text-xs tracking-wider uppercase">
            <button
              id="hero-go-archive"
              onClick={() => onNavigateArchive()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#211e1c] dark:bg-[#ede7e0] text-[#ece9e4] dark:text-[#1c1b1b] hover:bg-[#b84e2a] dark:hover:bg-[#cf6e4b] dark:hover:text-white transition-colors rounded-xs"
            >
              <span>Abrir archivo completo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              id="hero-go-about"
              onClick={onNavigateAbout}
              className="text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors py-2 border-b border-transparent hover:border-[#211e1c] dark:hover:border-[#ede7e0]"
            >
              Sobre este propósito
            </button>
          </div>
        </div>
      </section>

      {/* Section: Archivo reciente / Últimas cartas */}
      <section id="home-recent" className="py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-[#8c8479] dark:text-[#7d756a]">
              Documentos recientes
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#211e1c] dark:text-[#ede7e0] mt-1">
              Últimas cartas conservadas
            </h2>
          </div>

          <button
            onClick={() => onNavigateArchive()}
            className="font-sans text-xs uppercase tracking-wider text-[#b84e2a] dark:text-[#cf6e4b] hover:underline inline-flex items-center gap-1.5"
          >
            <span>Ver todo el índice ({letters.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <LetterList
          letters={recentLetters}
          onSelectLetter={onSelectLetter}
          onSelectCategory={(cat) => onNavigateArchive(cat)}
        />

        <div className="mt-8 text-center sm:text-left">
          <button
            onClick={() => onNavigateArchive()}
            className="font-sans text-xs uppercase tracking-wider text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0] py-2 border-b border-[#dad4cb] dark:border-[#383633] hover:border-[#211e1c] dark:hover:border-[#ede7e0] transition-colors"
          >
            Explorar todas las {letters.length} cartas del repositorio →
          </button>
        </div>
      </section>

      {/* Section: Exploración por categorías */}
      <section
        id="home-categories"
        className="py-16 sm:py-20 border-t border-[#dad4cb] dark:border-[#383633]"
      >
        <div className="max-w-xl mb-10">
          <span className="font-sans text-xs uppercase tracking-widest text-[#8c8479] dark:text-[#7d756a]">
            Clasificación temática
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#211e1c] dark:text-[#ede7e0] mt-1">
            Explorar por tema
          </h2>
          <p className="font-serif text-sm sm:text-base text-[#6b645c] dark:text-[#9c958c] mt-2 font-light">
            Cada documento aborda una dimensión de la experiencia humana, desde las heridas sociales hasta el silencio del perdón.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#dad4cb] dark:bg-[#383633] border border-[#dad4cb] dark:border-[#383633]">
          {CATEGORIES.map((category) => {
            const hasLetters = letters.some(
              (l) =>
                l.category.toLowerCase() === category.name.toLowerCase() ||
                l.tags.some((t) => t.toLowerCase() === category.name.toLowerCase())
            );

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => onNavigateArchive(category.name)}
                className="group text-left p-6 bg-[#ece9e4] dark:bg-[#1c1b1b] hover:bg-[#f5f1ec] dark:hover:bg-[#242321] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg text-[#211e1c] dark:text-[#ede7e0] group-hover:text-[#b84e2a] dark:group-hover:text-[#cf6e4b] transition-colors">
                      {category.name}
                    </span>
                    <span className="font-sans text-xs text-[#8c8479] dark:text-[#7d756a]">
                      {category.count > 0 ? `${category.count}` : '—'}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#6b645c] dark:text-[#9c958c] mt-2 leading-relaxed font-light">
                    {category.description}
                  </p>
                </div>

                <span className="font-sans text-[11px] text-[#b84e2a] dark:text-[#cf6e4b] opacity-0 group-hover:opacity-100 transition-opacity mt-4 inline-flex items-center gap-1">
                  <span>Ver cartas</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Bookish Colophon Card on Home */}
      <section className="mt-8 p-8 sm:p-12 border border-[#dad4cb] dark:border-[#383633] bg-[#f5f1ec] dark:bg-[#242321] rounded-xs text-center max-w-2xl mx-auto">
        <BookMarked className="w-6 h-6 mx-auto text-[#b84e2a] dark:text-[#cf6e4b] stroke-[1.25]" />
        <p className="font-serif text-lg sm:text-xl text-[#211e1c] dark:text-[#ede7e0] mt-4 italic font-normal">
          «Una carta es una conversación que se niega a extinguirse con el ruido del presente.»
        </p>
        <p className="font-sans text-xs text-[#8c8479] dark:text-[#7d756a] mt-3 uppercase tracking-widest">
          Archivo Digital de Pensamientos
        </p>
      </section>
    </div>
  );
};
