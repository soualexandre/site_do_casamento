import React from 'react';
import Image from 'next/image';
import { ProgressBar } from './ProgressBar';

type WeddingHeaderProps = {
  stats: {
    totalItems: number;
    giftedCount: number;
    progressPercentage: number;
  };
};

export const WeddingHeader = ({ stats }: WeddingHeaderProps) => (
  <div className="relative overflow-hidden">
    {/* Imagem de fundo cobrindo todo o header */}
    <div className="absolute inset-0 z-0">
      <Image 
        src="/preview.jpg" 
        alt="Fundo do Casamento"
        fill
        priority
        className="object-cover object-center"
      />
      {/* sobreposição opcional para melhor legibilidade */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
    </div>

    {/* Conteúdo do header */}
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 text-center">
      <div className="mb-8 md:mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 md:w-26 md:h-26 rounded-full bg-gradient-to-br from-yellow-200 to-violet-200 mb-4 md:mb-6">
          <Image 
            src="/LOGO.png" 
            alt="Logo do Casamento" 
            width={90} 
            height={90}
            className="w-16 h-16 md:w-24 md:h-24"
          />
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-800 mb-4 md:mb-6 leading-tight tracking-tight">
          Nossa Lista de Presentes
        </h1>

        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-stone-600 mb-2 md:mb-3 italic font-light leading-relaxed">
            &ldquo;Há um tempo para todo propósito debaixo do céu.&rdquo;
          </p>
          <p className="text-xs md:text-sm text-stone-500 font-medium tracking-wider">
            ECLESIASTES 3:1
          </p>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-5 md:p-6 max-w-md mx-auto border border-stone-200/50 shadow-lg">
        <p className="text-base md:text-lg text-stone-700 mb-3 md:mb-4 font-medium">
          Progresso da Lista
        </p>

        <div className="mb-3 md:mb-4">
          <ProgressBar progress={stats.progressPercentage} />
        </div>

        <p className="text-sm md:text-base text-stone-600">
          <span className="font-semibold text-emerald-600 text-base md:text-lg">{stats.giftedCount}</span> de{' '}
          <span className="font-semibold text-base md:text-lg">{stats.totalItems}</span> itens presenteados
        </p>
      </div>
    </div>
  </div>
);
