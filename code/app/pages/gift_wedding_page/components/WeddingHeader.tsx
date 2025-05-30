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
  <div className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-neutral-100 to-stone-50">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-violet-100/30"></div>
    <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
      <div className="mb-10">
        <div className="inline-flex items-center justify-center w-26 h-26 rounded-full bg-gradient-to-br from-yellow-200 to-violet-200 mb-6">
          <Image src="/LOGO.png" alt="Logo do Casamento" width={130} height={130} />
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-stone-800 mb-8 leading-tight tracking-wide">
          Nossa Lista de Presentes
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl text-stone-600 mb-4 italic font-light leading-relaxed">
            &ldquo;há um tempo para todo propósito debaixo do céu.&rdquo;
          </p>
          <p className="text-sm text-stone-500 font-medium tracking-wider">ECLESIASTES 3:1</p>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-lg mx-auto border border-stone-200/50 shadow-xl">
        <p className="text-stone-700 mb-6 font-medium text-lg">Progresso da Lista</p>
        <ProgressBar progress={stats.progressPercentage} />
        <p className="text-stone-600">
          <span className="font-semibold text-emerald-600 text-lg">{stats.giftedCount}</span> de{' '}
          <span className="font-semibold text-lg">{stats.totalItems}</span> itens presenteados
        </p>
      </div>
    </div>
  </div>
);