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
  const hasMessages = (item?.message?.length ?? 0) > 0;

  return (
    <div
      className={`relative rounded-2xl border transition-all duration-300 hover:shadow-lg flex flex-col justify-between h-full overflow-hidden ${
        isGifted
          ? 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 cursor-not-allowed'
          : 'cursor-pointer border-gray-200 hover:border-purple-300 hover:scale-[1.015]'
      }`}
      onClick={() => !isGifted && onSelect(item)}
    >
      {/* Ícone de status */}
      <div
        className={`absolute top-3 right-3 p-2 rounded-full z-10 ${
          isGifted
            ? 'bg-emerald-100 text-emerald-600'
            : 'bg-gradient-to-br from-purple-100 to-violet-100 text-purple-600'
        }`}
      >
        {isGifted ? (
          <Check className="w-4 h-4" />
        ) : (
          <Heart className="w-4 h-4" />
        )}
      </div>

      {/* Image Carousel - Proporção 16:9 fixa */}
      <div className="w-full">
        <ImageCarousel images={item.images} />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3
          className={`text-lg font-semibold mb-2 ${
            isGifted ? 'text-emerald-700' : 'text-gray-800'
          }`}
        >
          {item.name} {item?.giftedBy?.length ?? 0}/{item?.quantity} 
        </h3>

        {/* Messages with smooth scrolling */}
        {hasMessages && (
          <div className="mb-3 p-3 bg-white/80 rounded-lg border border-emerald-200 shadow-xs max-h-[100px] overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-transparent">
            {item.message?.map((msg, index) => (
              <p
                key={index}
                className="text-xs text-emerald-700 italic leading-snug mb-1 last:mb-0"
              >
                &ldquo;{msg.message.length > 120 
                  ? `${msg.message.substring(0, 117)}...` 
                  : msg.message}&rdquo;
              </p>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="mt-auto pt-2">
          {!isGifted ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(item);
              }}
              className="w-full py-2.5 px-4 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-purple-500 to-violet-500 text-white hover:from-purple-600 hover:to-violet-600 hover:shadow-md active:scale-[0.98] text-sm"
            >
              <span className="flex items-center justify-center gap-2">
                <Heart className="w-4 h-4" />
                Quero Presentear
              </span>
            </button>
          ) : (
            <div className="w-full py-2.5 px-4 rounded-lg bg-emerald-100 text-emerald-700 font-medium text-center border border-emerald-200 text-sm">
              <span className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4" />
                Completo
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};