import React from 'react';
import { ArrowLeft, Feather } from 'lucide-react';

interface AboutViewProps {
  onBackToHome: () => void;
  onGoToArchive: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onBackToHome, onGoToArchive }) => {
  return (
    <article className="w-full pt-10 sm:pt-16 pb-24">
      {/* Back button */}
      <nav className="max-w-[720px] mx-auto px-4 sm:px-6 mb-10">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-[#6b645c] dark:text-[#9c958c] hover:text-[#211e1c] dark:hover:text-[#ede7e0] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Volver a la portada</span>
        </button>
      </nav>

      <div className="max-w-[720px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="mb-14 pb-8 border-b border-[#dad4cb] dark:border-[#383633]">
          <div className="flex items-center gap-2.5 mb-4">
            <Feather className="w-4 h-4 text-[#b84e2a] dark:text-[#cf6e4b]" strokeWidth={1.75} />
            <span className="font-sans text-xs uppercase tracking-widest text-[#b84e2a] dark:text-[#cf6e4b] font-medium">
              Manifiesto Editorial
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#211e1c] dark:text-[#ede7e0] tracking-tight">
            Sobre el proyecto
          </h1>
          <p className="font-serif text-lg sm:text-xl text-[#5d4837] dark:text-[#cfa152] italic mt-3 font-light">
            El valor de conservar lo escrito en un mundo de palabras efímeras.
          </p>
        </header>

        {/* Text Essay */}
        <div className="font-serif text-lg sm:text-[20px] leading-[1.85] text-[#2b2725] dark:text-[#e4ded6] space-y-7 font-light">
          <p className="drop-cap">
            <strong>Cartas que quedan</strong> nace de una idea sencilla: hay pensamientos que no deberían perderse en el vértigo de las redes sociales ni en el flujo incesante de información que consumimos y olvidamos en cuestión de minutos.
          </p>

          <p>
            Vivimos en la era más ruidosa de la historia humana. Opinamos a gran velocidad, reaccionamos con vehemencia ante cada titular y clasificamos a las personas en bandos antes de haberles escuchado pronunciar tres frases completas. En medio de ese torrente, la escritura epistolar y la lectura sosegada representan un refugio indispensable.
          </p>

          {/* Central Quote requested in prompt */}
          <div className="my-10 p-8 sm:p-10 border-y border-[#dad4cb] dark:border-[#383633] bg-[#f5f1ec]/60 dark:bg-[#242321]/60 text-center">
            <blockquote className="font-serif text-xl sm:text-2xl text-[#211e1c] dark:text-[#ede7e0] italic leading-relaxed">
              «Algunas preguntas no tienen una respuesta inmediata. Algunas conversaciones merecen continuar incluso cuando terminan. Y algunas cosas que aprendemos solo adquieren sentido cuando alguien las vuelve a leer años después.»
            </blockquote>
          </div>

          <p>
            Este es un pequeño archivo de esas ideas. Cartas pensadas no para acumular aplausos ni para alimentar debates estériles, sino para acompañar a quien necesita detenerse a pensar sobre el amor, el duelo, la violencia, la fe sin arrogancia, la justicia y el peso de las decisiones cotidianas.
          </p>

          <div className="py-6 border-l-2 border-[#b84e2a] dark:border-[#cf6e4b] pl-6 my-8 italic text-[#211e1c] dark:text-[#ede7e0] space-y-1">
            <p>Cartas para pensar.</p>
            <p>Cartas para recordar.</p>
            <p>Cartas para quienes vienen después.</p>
          </div>

          <p>
            Aunque varias de las reflexiones recogen la sabiduría milenaria de los textos bíblicos y la figura histórica de Jesús de Nazaret, el archivo no busca imponer dogmas ni erigir una liturgia cerrada. Busca poner en diálogo la espiritualidad profunda con la ética pública, la ternura en las relaciones y el sufrimiento real de nuestra sociedad.
          </p>

          <p>
            Si alguna de estas cartas te ayuda a respirar hondo, a perdonar una herida o a mirar con mayor compasión a tu vecino, el propósito de este repositorio estará cumplido.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-16 pt-10 border-t border-[#dad4cb] dark:border-[#383633] text-center sm:text-left">
          <button
            onClick={onGoToArchive}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#211e1c] dark:bg-[#ede7e0] text-[#ece9e4] dark:text-[#1c1b1b] hover:bg-[#b84e2a] dark:hover:bg-[#cf6e4b] dark:hover:text-white transition-colors font-sans text-xs uppercase tracking-wider rounded-xs"
          >
            <span>Ir al archivo de cartas</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
};
