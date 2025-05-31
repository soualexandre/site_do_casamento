import React from 'react';
import { Category } from '../types/gifts';

type CategorySelectorProps = {
  categories: Category[];
  selectedCategory: string;
  onSelect: (categoryId: string) => any;
};

export default function CategorySelector({ 
  categories, 
  selectedCategory, 
  onSelect 
}: CategorySelectorProps) {
  return (
    <div className="relative mb-8 md:mb-12">
      {/* Scroll horizontal para mobile */}
      <div className="md:hidden overflow-x-auto pb-3 hide-scrollbar">
        <div className="flex gap-3 w-max px-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => onSelect(category.id)}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-md'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Layout padrão para desktop */}
      <div className="hidden md:flex flex-wrap justify-center gap-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => onSelect(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-stone-600 hover:bg-stone-50 hover:text-purple-600 border border-stone-200 hover:border-purple-200 hover:shadow-md'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

