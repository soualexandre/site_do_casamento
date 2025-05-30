import React from 'react';
import { ItemGift } from '../types/gifts';
import { User, MessageCircle, X } from 'lucide-react';

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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-10 max-w-lg w-full shadow-2xl border-2 border-stone-200">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-serif text-stone-800 tracking-wide">Confirmar Presente</h3>
          <button
            onClick={onClose}
            className="p-3 hover:bg-stone-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-stone-500" />
          </button>
        </div>

        <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border-2 border-purple-200">
          <h4 className="font-semibold text-purple-800 mb-3 text-lg">Item Selecionado:</h4>
          <p className="text-purple-700 text-lg">{item.name}</p>
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
              onChange={(e) => onFormChange({ ...formData, name: e.target.value })}
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
              onChange={(e) => onFormChange({ ...formData, message: e.target.value })}
              className="w-full text-black px-5 py-4 border-2 border-stone-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 resize-none text-base"
              placeholder="Deixe uma mensagem carinhosa para os noivos"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={onClose}
            className="flex-1 py-4 px-6 border-2 border-stone-300 text-stone-700 rounded-2xl hover:bg-stone-50 transition-all duration-200 font-medium text-base"
          >
            Cancelar
          </button>
          <button
            onClick={onSubmit}
            className="flex-1 py-4 px-6 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-2xl hover:from-purple-600 hover:to-violet-600 transition-all duration-200 font-medium shadow-lg hover:shadow-purple-200 text-base"
          >
            Confirmar Presente
          </button>
        </div>
      </div>
    </div>
  );
};