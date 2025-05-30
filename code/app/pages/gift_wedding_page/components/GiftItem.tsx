import React from 'react';
import { ItemGift } from '../types/gifts';
import { ImageCarousel } from './ImageCarousel';
import { Heart, Check } from 'lucide-react';

type GiftItemProps = {
  item: ItemGift;
  onSelect: (item: ItemGift) => void;
};

export const GiftItem = ({ item, onSelect }: GiftItemProps) => {
  const isGifted = (item.giftedBy?.length ?? 0) >= item.quantity;
  
  return (
    <div 
      className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${
        isGifted 
          ? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 shadow-sm cursor-not-allowed' 
          : 'hover:shadow-lg cursor-pointer'
      }`}
      onClick={() => !isGifted && onSelect(item)}
    >
      <div className="absolute top-4 left-4 bg-black/40 text-white text-xs px-2 py-1 rounded-full z-10">
        {item?.giftedBy?.length ?? 0} / {item?.quantity} Presenteado
      </div>

      <div className="relative">
        <ImageCarousel images={item.images} />
        <div className={`absolute top-4 right-4 p-3 rounded-2xl shadow-sm z-10 ${
          isGifted ? 'bg-emerald-100' : 'bg-gradient-to-br from-purple-100 to-violet-100'
        }`}>
          {isGifted ? (
            <Check className="w-6 h-6 text-emerald-600" />
          ) : (
            <Heart className="w-6 h-6 text-purple-600" />
          )}
        </div>
      </div>

      <h3 className={`text-xl font-medium mb-4 leading-relaxed ${
        isGifted ? 'text-emerald-700' : 'text-stone-800'
      }`}>
        {item.name}
      </h3>

      {isGifted && (item?.message?.length ?? 0) > 0 && (
        <div className="mb-6 p-4 bg-white/80 rounded-2xl border-2 border-emerald-200 shadow-sm">
          {item?.message?.map((msg, index) => (
            <p key={index} className="text-sm text-emerald-700 italic leading-relaxed">
              &ldquo;{msg.message}&rdquo;
            </p>
          ))}
        </div>
      )}

      {!isGifted ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(item);
          }}
          className="w-full py-4 px-6 rounded-2xl font-medium transition-all duration-300 bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:from-purple-600 hover:to-violet-600 hover:shadow-lg hover:shadow-purple-200 transform hover:scale-105"
        >
          <span className="flex items-center justify-center gap-3">
            <Heart className="w-5 h-5" />
            <span className="text-base">Quero Presentear</span>
          </span>
        </button>
      ) : (
        <div className="w-full py-4 px-6 rounded-2xl bg-emerald-100 text-emerald-700 font-medium text-center border-2 border-emerald-200">
          <span className="flex items-center justify-center gap-3">
            <Check className="w-5 h-5" />
            <span className="text-base">Completo</span>
          </span>
        </div>
      )}
    </div>
  );
};