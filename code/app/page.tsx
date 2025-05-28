"use client"
import { Bed, Check, ChefHat, Gift, Heart, Home, MessageCircle, User, X, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Definindo tipos
type Priority = 'high' | 'medium' | 'low';
type CategoryId = 'all' | 'kitchen' | 'bedroom' | 'living';

interface ItemGift {
  id: string;
  name: string;
  gifted: boolean;
  priority: Priority;
  giftedBy?: string;
  message?: string;
}

interface Category {
  id: CategoryId;
  name: string;
  icon: LucideIcon;
}

interface JsonData {
  gifts: {
    kitchen: ItemGift[];
    bedroom: ItemGift[];
    living: ItemGift[];
  };
}

interface FormData {
  name: string;
  message: string;
}

interface CategorizedItem {
  category: string;
  items: ItemGift[];
}

interface CategoryData {
  [key: string]: {
    title: string;
    icon: LucideIcon;
  };
}

const WeddingGiftList = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemGift | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: '', message: '' });

  const [jsonData, setJsonData] = useState<JsonData>({
    gifts: {
      kitchen: [
        { id: 'k1', name: 'Máquina de Lavar roupas', gifted: true, priority: 'high', giftedBy: 'Família Silva', message: 'Desejamos muito amor e felicidade!' },
        { id: 'k2', name: 'Tanquinho', gifted: true, priority: 'medium', giftedBy: 'Tia Maria', message: '' },
        { id: 'k3', name: 'Tábua e ferro de passar roupas', gifted: true, priority: 'medium', giftedBy: 'João Pedro', message: 'Que sejam muito felizes!' },
        { id: 'k4', name: 'Geladeira frost free', gifted: true, priority: 'high', giftedBy: 'Pais do Noivo', message: 'Com todo nosso amor e carinho' },
        { id: 'k5', name: 'Armário de aço', gifted: false, priority: 'high' },
        { id: 'k6', name: 'Fogão cooktop', gifted: false, priority: 'high' },
        { id: 'k7', name: 'Depurador de ar (exaustor ou coifa)', gifted: false, priority: 'medium' },
        { id: 'k8', name: 'Forno Elétrico', gifted: false, priority: 'medium' },
        { id: 'k9', name: 'Sanduicheira', gifted: false, priority: 'low' },
        { id: 'k10', name: 'Batedeira', gifted: false, priority: 'medium' },
        { id: 'k11', name: 'Bebedouro/Purificador de água', gifted: false, priority: 'high' },
        { id: 'k12', name: 'Jogo de Panelas antiaderentes', gifted: false, priority: 'high' },
        { id: 'k13', name: 'Descanso de Panela', gifted: false, priority: 'low' },
        { id: 'k14', name: 'Frigideiras', gifted: false, priority: 'medium' },
        { id: 'k15', name: 'Multiprocessador', gifted: false, priority: 'medium' },
        { id: 'k16', name: 'Panela de Arroz elétrica', gifted: false, priority: 'medium' },
        { id: 'k17', name: 'Panela de Pressão elétrica', gifted: false, priority: 'medium' },
        { id: 'k18', name: 'Air Fryer', gifted: true, priority: 'high', giftedBy: 'Amigos da Faculdade', message: 'Para muitas receitas deliciosas!' },
        { id: 'k19', name: 'Liquidificador Turbo', gifted: false, priority: 'medium' },
        { id: 'k20', name: 'Chaleira elétrica', gifted: false, priority: 'low' },
        { id: 'k21', name: 'Churrasqueira', gifted: false, priority: 'medium' },
        { id: 'k22', name: 'Aparelho de Jantar (qualquer cor)', gifted: false, priority: 'high' },
        { id: 'k23', name: 'Jogo de talheres faqueiro', gifted: false, priority: 'high' },
        { id: 'k24', name: 'Colheres de preparo e de servir', gifted: false, priority: 'medium' },
        { id: 'k25', name: 'Jogo de Facas', gifted: false, priority: 'medium' },
        { id: 'k26', name: 'Tábua de corte', gifted: false, priority: 'medium' },
        { id: 'k27', name: 'Fruteira de chão', gifted: false, priority: 'low' },
        { id: 'k28', name: 'Fruteira de mesa', gifted: false, priority: 'low' },
        { id: 'k29', name: 'Escorredor de louça', gifted: false, priority: 'medium' },
        { id: 'k30', name: 'Travessas de vidro', gifted: false, priority: 'medium' },
        { id: 'k31', name: 'Formas e assadeiras', gifted: false, priority: 'medium' },
        { id: 'k32', name: 'Potes Herméticos', gifted: false, priority: 'medium' },
        { id: 'k33', name: 'Jarras de vidro', gifted: false, priority: 'low' },
        { id: 'k34', name: 'Jogo de copos', gifted: false, priority: 'medium' },
        { id: 'k35', name: 'Jogo de taças', gifted: false, priority: 'medium' },
        { id: 'k36', name: 'Bandejas', gifted: false, priority: 'low' }
      ],
      bedroom: [
        { id: 'b1', name: 'Cama box de casal', gifted: false, priority: 'high' },
        { id: 'b2', name: 'Travesseiros', gifted: false, priority: 'high' },
        { id: 'b3', name: 'Cobre leito', gifted: false, priority: 'medium' },
        { id: 'b4', name: 'Lençol', gifted: false, priority: 'high' },
        { id: 'b5', name: 'Edredom', gifted: false, priority: 'high' },
        { id: 'b6', name: 'Ar condicionado', gifted: false, priority: 'high' },
        { id: 'b7', name: 'Guarda-roupa casal', gifted: false, priority: 'high' },
        { id: 'b8', name: 'Espelho para quarto (corpo inteiro)', gifted: false, priority: 'medium' },
        { id: 'b9', name: 'Toalhas de banho', gifted: false, priority: 'high' },
        { id: 'b10', name: 'Toalhas de rosto e mão para banheiro', gifted: false, priority: 'medium' },
        { id: 'b11', name: 'Kit porta escova de dente e sabão', gifted: false, priority: 'low' }
      ],
      living: [
        { id: 'l1', name: 'Sofá', gifted: false, priority: 'high' },
        { id: 'l2', name: 'Televisão', gifted: false, priority: 'high' },
        { id: 'l3', name: 'Carpete grande', gifted: true, priority: 'medium', giftedBy: 'Avós', message: 'Para deixar a casa mais aconchegante' },
        { id: 'l4', name: 'Rack/painel para TV', gifted: false, priority: 'medium' }
      ]
    }
  });

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

  const updateJsonData = (newData: JsonData) => {
    setJsonData(newData);
    console.log('JSON atualizado:', newData);
  };

  const getAllItems = (): CategorizedItem[] => {
    if (selectedCategory === 'all') {
      return Object.entries(jsonData.gifts).map(([category, items]) => ({
        category,
        items: items as ItemGift[]
      }));
    }
    return [{ category: selectedCategory, items: jsonData.gifts[selectedCategory] }];
  };

  const handleGiftIntent = (item: ItemGift) => {
    if (item.gifted) return;
    setSelectedItem(item);
    setFormData({ name: '', message: '' });
    setShowModal(true);
  };

  const handleSubmitGift = () => {
    if (!formData.name.trim() || !selectedItem) {
      alert('Por favor, informe seu nome.');
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newJsonData: any = { ...jsonData };
    const categoriesKeys: CategoryId[] = ['kitchen', 'bedroom', 'living'];

    for (const category of categoriesKeys) {
      const itemIndex = newJsonData.gifts[category].findIndex((item: Category) => item.id === selectedItem.id);
      if (itemIndex !== -1) {
        newJsonData.gifts[category][itemIndex] = {
          ...newJsonData.gifts[category][itemIndex],
          gifted: true,
          giftedBy: formData.name.trim(),
          message: formData.message.trim()
        };
        break;
      }
    }

    updateJsonData(newJsonData);
    setShowModal(false);
    setSelectedItem(null);
    setFormData({ name: '', message: '' });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
    setFormData({ name: '', message: '' });
  };

  const categorizedItems = getAllItems();
  const totalItems = Object.values(jsonData.gifts).flat().length;
  const giftedCount = Object.values(jsonData.gifts).flat().filter(item => item.gifted).length;
  const progressPercentage = (giftedCount / totalItems) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100">
      {/* Header com frase bíblica */}
      <div className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-neutral-100 to-stone-50">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-violet-100/30"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 to-violet-200 mb-6">
              <Image src={"/LOGO.png"} alt="Logo" width={90} height={90} />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-stone-800 mb-8 leading-tight tracking-wide">
              Nossa Lista de Casamento
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
                onClick={() => setSelectedCategory(category.id)}
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
                {(selectedCategory === 'kitchen' || selectedCategory === 'all') && (
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
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-3 rounded-2xl shadow-sm ${item.gifted ? 'bg-emerald-100' : 'bg-gradient-to-br from-purple-100 to-violet-100'}`}>
                          {item.gifted ? (
                            <Check className="w-6 h-6 text-emerald-600" />
                          ) : (
                            <Gift className={`w-6 h-6 text-purple-600`} />
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
                onClick={handleCloseModal}
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
                onClick={handleCloseModal}
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