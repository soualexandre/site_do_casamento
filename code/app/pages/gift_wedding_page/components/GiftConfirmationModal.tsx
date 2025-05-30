import React from 'react';
import { ItemGift } from '../types/gifts';
import { User, MessageCircle, X, Gift } from 'lucide-react';

type GiftConfirmationModalProps = {
  isOpen: boolean;
  item: ItemGift | null;
  formData: { name: string; message: string };
  onClose: () => void;
  onSubmit: () => void;
  onFormChange: (data: { name: string; message: string }) => void;
};

export const GiftConfirmationModal = ({
  isOpen,
  item,
  formData,
  onClose,
  onSubmit,
  onFormChange
}: GiftConfirmationModalProps) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto py-8">
      <div className="bg-white rounded-2xl md:rounded-3xl max-w-md w-full mx-2 shadow-2xl border border-stone-200 transition-all duration-300 transform md:max-w-lg">
        <div className="p-5 md:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="flex items-center gap-3">
              <Gift className="w-7 h-7 text-purple-600" />
              <h3 className="text-xl md:text-2xl font-bold text-stone-800 tracking-tight">
                Confirmar Presente
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-stone-100 rounded-full transition-colors duration-200"
              aria-label="Fechar"
            >
              <X className="w-5 h-5 text-stone-500" />
            </button>
          </div>

          {/* Item Preview */}
          <div className="mb-6 md:mb-8 p-4 md:p-5 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100">
            <h4 className="font-medium text-purple-700 mb-2 text-sm md:text-base">
              Você está presenteando:
            </h4>
            <p className="text-purple-800 font-semibold text-lg md:text-xl">{item.name}</p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            <div>
              <label className="flex items-center gap-2 text-sm md:text-base font-medium text-stone-700 mb-2">
                <User className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                Seu Nome *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => onFormChange({ ...formData, name: e.target.value })}
                className="w-full text-stone-800 px-4 py-3 md:px-5 md:py-4 border border-stone-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-base"
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm md:text-base font-medium text-stone-700 mb-2">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                Mensagem (opcional)
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => onFormChange({ ...formData, message: e.target.value })}
                className="w-full text-stone-800 px-4 py-3 md:px-5 md:py-4 border border-stone-300 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 resize-none text-base min-h-[120px]"
                placeholder="Deixe uma mensagem carinhosa para os noivos"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-3 mt-6 md:mt-8">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 md:py-4 border border-stone-300 text-stone-700 rounded-xl hover:bg-stone-50 transition-all duration-200 font-medium text-base"
            >
              Cancelar
            </button>
            <button
              onClick={onSubmit}
              disabled={!formData.name.trim()}
              className={`flex-1 py-3 px-4 md:py-4 text-white rounded-xl transition-all duration-200 font-medium text-base shadow-md ${
                formData.name.trim()
                  ? 'bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 active:scale-[0.98]'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Confirmar Presente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};