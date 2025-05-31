import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ImageCarouselProps = {
  images: { url: string; alt: string }[];
};

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Reset index quando as imagens mudam
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full aspect-video flex items-center justify-center text-gray-500">
        Sem imagem
      </div>
    );
  }

  return (
    <div 
      className="relative w-full bg-gray-100 rounded-xl overflow-hidden shadow-sm"
      style={{ aspectRatio: '16/9' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contêiner principal da imagem */}
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={images[currentIndex].url}
          fill
          alt={images[currentIndex].alt || `Imagem ${currentIndex + 1}`}
          className="object-contain p-1 transition-opacity duration-300"
          priority
        />
      </div>

      {/* Overlay de navegação (só aparece quando há múltiplas imagens) */}
      {images.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between p-2">
          {/* Botão anterior com efeito de destaque */}
          <button
            onClick={goToPrev}
            className={`
              w-10 h-10 flex items-center justify-center rounded-full
              bg-white/80 backdrop-blur-sm shadow-lg
              transition-all duration-300 transform
              hover:bg-white hover:scale-110
              focus:outline-none focus:ring-2 focus:ring-blue-500
              ${isHovered ? 'opacity-100' : 'opacity-70'}
              border-2 border-white
            `}
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" strokeWidth={2} />
          </button>

          {/* Botão próximo com efeito de destaque */}
          <button
            onClick={goToNext}
            className={`
              w-10 h-10 flex items-center justify-center rounded-full
              bg-white/80 backdrop-blur-sm shadow-lg
              transition-all duration-300 transform
              hover:bg-white hover:scale-110
              focus:outline-none focus:ring-2 focus:ring-blue-500
              ${isHovered ? 'opacity-100' : 'opacity-70'}
              border-2 border-white
            `}
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" strokeWidth={2} />
          </button>
        </div>
      )}

      {/* Indicador de posição (inferior central) */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white shadow-md scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Contador de imagens (canto superior direito) */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};