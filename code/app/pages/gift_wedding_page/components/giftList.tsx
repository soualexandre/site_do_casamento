import React from 'react';
import { CategoryData, ItemGift } from '../types/gifts';
import { GiftItem } from './GiftItem';
import { ChefHat, Bed, Home } from 'lucide-react';

type GiftListProps = {
  categorizedItems: { category: string; items: ItemGift[] }[];
  selectedCategory: string;
  categoryData: CategoryData;
  onGiftSelect: (item: ItemGift) => void;
};

export const GiftList = ({
  categorizedItems,
  selectedCategory,
  categoryData,
  onGiftSelect,
}: GiftListProps) => {
  const categoryIcons: Record<string, React.ComponentType> = {
    kitchen: ChefHat,
    bedroom: Bed,
    living: Home,
  };

  return (
    <div className="space-y-12 sm:space-y-16 px-4 sm:px-0">
      {categorizedItems.map(({ category, items }) => {
        const CategoryIcon = categoryIcons[category] || Home;
        const categoryInfo = categoryData[category as keyof typeof categoryData];

        return (
          <div key={category} className="space-y-6">
            {/* Título da categoria (exibido apenas no modo "todos") */}
            {selectedCategory === 'all' && categoryInfo && (
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-violet-500 p-3 sm:p-4 rounded-xl shadow-md">
                  {/*//@ts-ignore */}
                  <CategoryIcon className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h2 className="text-lg sm:text-2xl font-serif text-stone-800 tracking-wide">
                  {categoryInfo.title}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-stone-300 via-purple-200 to-transparent" />
              </div>
            )}

            {/* Dica especial para cozinha */}
            {(selectedCategory === 'kitchen' || category === 'kitchen') && (
              <div className="mt-4 sm:mt-8 px-4 py-3 sm:p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-stone-200 shadow-sm">
                <p className="text-stone-600 text-sm sm:text-base text-center leading-relaxed">
                  <span className="text-purple-600 font-semibold">💡 Dica Importante:</span>{' '}
                  Para itens de cozinha, preferimos as cores inox, cinza, prata ou preto.
                </p>
              </div>
            )}

            {/* Lista de itens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {items.map((item) => (
                <GiftItem key={item.id} item={item} onSelect={onGiftSelect} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
