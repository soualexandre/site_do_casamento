"use client"
import { Bed, Check, ChefHat, ChevronLeft, ChevronRight, Gift, Heart, Home, MessageCircle, User, X } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Category, CategoryData } from '../types/category.ts';
import { CategoryId, ItemGift } from '../types/gift.ts';
import Image from 'next/image';

const categories: Category[] = [
  { id: 'all', name: 'Todos os Itens', icon: Gift },
  { id: 'kitchen', name: 'Cozinha & Área de Serviço', icon: ChefHat },
  { id: 'bedroom', name: 'Quarto & Banheiro', icon: Bed },
  { id: 'living', name: 'Sala de Estar', icon: Home }
];

const categoryData: CategoryData = {
  kitchen: {
    title: 'Cozinha & Área de Serviço',
    icon: ChefHat
  },
  bedroom: {
    title: 'Quarto & Banheiro',
    icon: Bed
  },
  living: {
    title: 'Sala de Estar',
    icon: Home
  }
};


const ImageCarousel = ({ images }: { images: string[] }) => {
  console.log('Rendering ImageCarousel with images:', images);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-stone-500">
        Sem imagem
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-2xl mb-6 group">
      {/* Imagem atual */}
      <Image
        src={images[currentIndex]}
        fill 
        alt={`Imagem ${currentIndex + 1} do presente`}
        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
      />

      {/* Navegação */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-5 h-5 text-stone-700" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-5 h-5 text-stone-700" />
          </button>
        </>
      )}

      {/* Indicadores */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
                }`}
              aria-label={`Ir para imagem ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}

      <div className="absolute top-4 right-4 bg-black/40 text-white text-xs px-2 py-1 rounded-full">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
};

const WeddingGiftList = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemGift | null>(null);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [giftsData, setGiftsData] = useState<Record<string, ItemGift[]> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGifts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/gift');

      if (!response.ok) {
        throw new Error('Falha ao carregar dados');
      }

      const { gifts } = await response.json();
      setGiftsData(gifts);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Erro ao carregar lista de presentes');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGifts();
  }, [fetchGifts]);

  const handleGiftIntent = (item: ItemGift) => {
    if (item.gifted) return;
    setSelectedItem(item);
    setFormData({ name: '', message: '' });
    setShowModal(true);
  };

  const handleSubmitGift = async () => {
    if (!selectedItem) return;
    if (!formData.name.trim()) {
      alert('Por favor, informe seu nome.');
      return;
    }

    try {
      const response = await fetch(`/api/gift?id=${selectedItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          gifted: true,
          giftedBy: formData.name.trim(),
          message: formData.message.trim()
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Falha na atualização');
      }

      // Atualizar estado local
      setGiftsData(prev => {
        if (!prev) return null;

        return Object.entries(prev).reduce((acc, [category, items]) => {
          const updatedItems = items.map(item =>
            item.id === selectedItem.id
              ? {
                ...item,
                gifted: true,
                giftedBy: formData.name.trim(),
                message: formData.message.trim()
              }
              : item
          );

          return { ...acc, [category]: updatedItems };
        }, {});
      });

      setShowModal(false);
      setSelectedItem(null);
      setFormData({ name: '', message: '' });
    } catch (err) {
      console.error('Update error:', err);
      alert('Erro ao atualizar presente. Tente novamente.');
    }
  };

  // Cálculos estatísticos
  const { totalItems, giftedCount, progressPercentage } = useMemo(() => {
    if (!giftsData) {
      return { totalItems: 0, giftedCount: 0, progressPercentage: 0 };
    }

    const allItems = Object.values(giftsData).flat();
    const total = allItems.length;
    const gifted = allItems.filter(item => item.gifted).length;
    const percentage = (gifted / total) * 100;

    return {
      totalItems: total,
      giftedCount: gifted,
      progressPercentage: percentage
    };
  }, [giftsData]);

  // Agrupar itens por categoria
  const categorizedItems = useMemo(() => {
    if (!giftsData) return [];

    if (selectedCategory === 'all') {
      return Object.entries(giftsData).map(([category, items]) => ({
        category,
        items
      }));
    }

    return [{
      category: selectedCategory,
      items: giftsData[selectedCategory]
    }];
  }, [giftsData, selectedCategory]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-lg text-stone-600">Carregando lista de presentes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md p-6 bg-white rounded-xl shadow-lg">
          <div className="text-red-500 mb-4">
            <X className="w-16 h-16 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-stone-800 mb-2">Erro ao carregar</h2>
          <p className="text-stone-600 mb-6">{error}</p>
          <button
            onClick={fetchGifts}
            className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-violet-600 transition-all"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  if (!giftsData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-stone-600">Nenhum dado disponível</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100">
      {/* Header com frase bíblica */}
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
                &ldquo;E disse o Senhor Deus: Não é bom que o homem esteja só; far-lhe-ei uma adjutora que esteja como diante dele.&rdquo;
              </p>
              <p className="text-sm text-stone-500 font-medium tracking-wider">GÊNESIS 2:18</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-lg mx-auto border border-stone-200/50 shadow-xl">
            <p className="text-stone-700 mb-6 font-medium text-lg">Progresso da Lista</p>
            <div className="w-full bg-stone-200 rounded-full h-4 mb-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-400 to-green-500 h-4 rounded-full transition-all duration-1000 ease-out shadow-sm"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-stone-600">
              <span className="font-semibold text-emerald-600 text-lg">{giftedCount}</span> de <span className="font-semibold text-lg">{totalItems}</span> itens presenteados
            </p>
          </div>
        </div>
      </div>

      {/* Navegação por categorias */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as CategoryId)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-sm ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-lg transform scale-105 shadow-purple-200'
                  : 'bg-white text-stone-600 hover:bg-stone-50 hover:text-purple-600 border-2 border-stone-200 hover:border-purple-200 hover:shadow-md'
                  }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Lista de presentes organizada por categoria */}
        <div className="space-y-16">
          {categorizedItems.map(({ category, items }) => {
            const categoryInfo = categoryData[category as keyof CategoryData];
            const CategoryIcon = categoryInfo?.icon || Home;

            return (
              <div key={category} className="space-y-8">
                {/* Título da categoria (apenas quando mostrar todos) */}
                {selectedCategory === 'all' && categoryInfo && (
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-gradient-to-br from-purple-500 to-violet-500 p-4 rounded-2xl shadow-lg">
                      <CategoryIcon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-serif text-stone-800 tracking-wide">{categoryInfo.title}</h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-stone-300 via-purple-200 to-transparent"></div>
                  </div>
                )}
                {/* Observação sobre cores */}
                {(selectedCategory === 'kitchen' || category === 'kitchen') && (
                  <div className="mt-12 p-8 bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-stone-200 shadow-lg">
                    <p className="text-stone-600 text-center font-medium text-lg leading-relaxed">
                      <span className="text-purple-600 font-semibold">💡 Dica Importante:</span> Para itens de cozinha, preferimos as cores inox, cinza, prata ou preto.
                    </p>
                  </div>
                )}

                {/* Grid de itens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${item.gifted
                        && 'bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 shadow-sm'
                        }`}
                      onClick={() => !item.gifted && handleGiftIntent(item)}
                    >
                      <div className="relative">
                        <ImageCarousel images={item.images || []} />
                        {/* Ícone de status */}
                        <div className={`absolute top-4 right-4 p-3 rounded-2xl shadow-sm z-10 ${item.gifted ? 'bg-emerald-100' : 'bg-gradient-to-br from-purple-100 to-violet-100'
                          }`}>
                          {item.gifted ? (
                            <Check className="w-6 h-6 text-emerald-600" />
                          ) : (
                            <Gift className="w-6 h-6 text-purple-600" />
                          )}
                        </div>
                      </div>

                      <h3 className={`text-xl font-medium mb-4 leading-relaxed ${item.gifted ? 'text-emerald-700' : 'text-stone-800'}`}>
                        {item.name}
                      </h3>

                      {item.gifted && (
                        <div className="mb-6 p-4 bg-white/80 rounded-2xl border-2 border-emerald-200 shadow-sm">
                          {item.message && (
                            <p className="text-sm text-emerald-700 italic leading-relaxed">
                              &ldquo;{item.message}&rdquo;
                            </p>
                          )}
                        </div>
                      )}

                      {!item.gifted ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleGiftIntent(item);
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
                            <span className="text-base">Já Presenteado</span>
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Rodapé com mensagem de agradecimento */}
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
      </div>

      {/* Modal de confirmação de presente */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-10 max-w-lg w-full shadow-2xl border-2 border-stone-200">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-serif text-stone-800 tracking-wide">Confirmar Presente</h3>
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedItem(null);
                }}
                className="p-3 hover:bg-stone-100 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-stone-500" />
              </button>
            </div>

            <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border-2 border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3 text-lg">Item Selecionado:</h4>
              <p className="text-purple-700 text-lg">{selectedItem.name}</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-3 text-base font-medium text-stone-700 mb-3">
                  <User className="w-5 h-5 text-purple-600" />
                  Seu Nome *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-black px-5 py-4 border-2 border-stone-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-base"
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-3 text-base font-medium text-stone-700 mb-3">
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                  Mensagem (opcional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full  text-black px-5 py-4 border-2 border-stone-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 resize-none text-base"
                  placeholder="Deixe uma mensagem carinhosa para os noivos"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedItem(null);
                }}
                className="flex-1 py-4 px-6 border-2 border-stone-300 text-stone-700 rounded-2xl hover:bg-stone-50 transition-all duration-200 font-medium text-base"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmitGift}
                className="flex-1 py-4 px-6 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-2xl hover:from-purple-600 hover:to-violet-600 transition-all duration-200 font-medium shadow-lg hover:shadow-purple-200 text-base"
              >
                Confirmar Presente
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeddingGiftList;