"use client";
import React from 'react';
import { useGiftList } from './hooks/useGiftList';
import { LoadingSpinner } from './ui/LoadingSpinner';
import { WeddingHeader } from './components/WeddingHeader';
import { GiftList } from './components/giftList';
import { WeddingFooter } from './components/WeddingFooter';
import { GiftConfirmationModal } from './components/GiftConfirmationModal';
import { X } from 'lucide-react';
import CategorySelector from './components/CategorySelector';

export const GiftPage = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    showModal,
    setShowModal,
    selectedItem,
    formData,
    setFormData,
    giftsData,
    loading,
    error,
    stats,
    categorizedItems,
    handleGiftIntent,
    handleSubmitGift,
    fetchGifts,
    setSelectedItem,
    categories,
    categoryData
  } = useGiftList();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
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
      <WeddingHeader stats={stats} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <GiftList
          categorizedItems={categorizedItems}
          selectedCategory={selectedCategory}
          categoryData={categoryData}
          onGiftSelect={handleGiftIntent}
        />

        <WeddingFooter />
      </div>

      <GiftConfirmationModal
        isOpen={showModal}
        item={selectedItem}
        formData={formData}
        onClose={() => {
          setShowModal(false);
          setSelectedItem(null);
        }}
        onSubmit={handleSubmitGift}
        onFormChange={setFormData}
      />
    </div>
  );
};
