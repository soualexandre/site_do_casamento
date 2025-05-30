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
  onGiftSelect 
}: GiftListProps) => {
  const categoryIcons: Record<string, React.ComponentType> = {
    kitchen: ChefHat,
    bedroom: Bed,
    living: Home
  };

  return (
    <div className="space-y-16">
      {categorizedItems.map(({ category, items }) => {
        const CategoryIcon = categoryIcons[category] || Home;
        const categoryInfo = categoryData[category as keyof typeof categoryData];

        return (
          <div key={category} className="space-y-8">
            {selectedCategory === 'all' && categoryInfo && (
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-purple-500 to-violet-500 p-4 rounded-2xl shadow-lg">
                  <CategoryIcon  />
                </div>
                <h2 className="text-3xl font-serif text-stone-800 tracking-wide">{categoryInfo.title}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-stone-300 via-purple-200 to-transparent"></div>
              </div>
            )}

            {(selectedCategory === 'kitchen' || category === 'kitchen') && (
              <div className="mt-12 p-8 bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-stone-200 shadow-lg">
                <p className="text-stone-600 text-center font-medium text-lg leading-relaxed">
                  <span className="text-purple-600 font-semibold">💡 Dica Importante:</span> Para itens de cozinha, preferimos as cores inox, cinza, prata ou preto.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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