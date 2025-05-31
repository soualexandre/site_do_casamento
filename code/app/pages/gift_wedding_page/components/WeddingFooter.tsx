import React from 'react';
import { Heart } from 'lucide-react';

export const WeddingFooter = () => (
  <div className="mt-16 text-center">
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border-2 border-stone-200 shadow-xl max-w-3xl mx-auto">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-200 to-violet-200 mb-6">
        <Heart className="w-8 h-8 text-purple-600" />
      </div>
      <h3 className="text-3xl font-serif text-stone-800 mb-6 tracking-wide">Muito Obrigado!</h3>
      <p className="text-stone-600 leading-relaxed text-lg">
        Cada presente é uma bênção em nossa nova jornada juntos. Sua generosidade e carinho tornam nosso sonho ainda mais especial. Que Deus abençoe abundantemente sua vida!
      </p>
    </div>
  </div>
);