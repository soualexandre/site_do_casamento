import React from 'react';
import { Category } from '../types/gifts';

type CategorySelectorProps = {
  categories: Category[];
  selectedCategory: string;
  onSelect: any;
};

// Correção: Exportar como default
export default function CategorySelector({ 
  categories, 
  selectedCategory, 
  onSelect 
}: CategorySelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-12">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className={`flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-sm ${selectedCategory === category.id
              ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-lg transform scale-105'
              : 'bg-white text-stone-600 hover:bg-stone-50 hover:text-purple-600 border-2 border-stone-200 hover:border-purple-200 hover:shadow-md'
              }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
}