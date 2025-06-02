import { useState, useCallback, useEffect, useMemo } from 'react';
import {
    CategoryId,
    ItemGift,
    ApiResponse,
    categories,
    categoryData,
    categoryMap
} from '../types/gifts';

export const useGiftList = () => {
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

            const json: ApiResponse = await response.json();

            const grouped: Record<string, ItemGift[]> = { kitchen: [], bedroom: [], living: [], tools: [] };

            json.gifts.forEach((gift) => {
                const categoryId = gift.category;
                if (grouped[categoryId]) {
                    grouped[categoryId].push(gift);
                }
            });

            setGiftsData(grouped);
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
        if (item.gifted && (item.giftedBy?.length ?? 0) >= item.quantity) return;
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
                    name: formData.name.trim(),
                    message: formData.message.trim() || null
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Falha na atualização');
            }

            setGiftsData(prev => {
                if (!prev) return null;

                return Object.entries(prev).reduce((acc, [category, items]) => {
                    const updatedItems = items.map(item =>
                        item.id === selectedItem.id
                            ? {
                                ...item,
                                giftedBy: [...(item.giftedBy ?? []), { name: formData.name.trim() }],
                                message: formData.message.trim()
                                    ? [...(item.message ?? []), { message: formData.message.trim() }]
                                    : item.message
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

    const stats = useMemo(() => {
        if (!giftsData) {
            return { totalItems: 0, giftedCount: 0, progressPercentage: 0 };
        }

        const allItems = Object.values(giftsData).flat();
        const total = allItems.reduce((sum, item) => sum + item.quantity, 0);
        const gifted = allItems.reduce((sum, item) => sum + (item?.giftedBy?.length ?? 0), 0);
        const percentage = (gifted / total) * 100;

        return {
            totalItems: total,
            giftedCount: gifted,
            progressPercentage: percentage
        };
    }, [giftsData]);

    const categorizedItems = useMemo(() => {
        if (!giftsData) return [];

        if (selectedCategory === 'all') {
            return Object.entries(giftsData).map(([category, items]) => ({
                category,
                items
            }));
        }

        console.log('Selected category:', selectedCategory);
        console.log('giftsData[selectedCategory]:', giftsData[selectedCategory]);

        return [{
            category: selectedCategory,
            items: giftsData[selectedCategory]
        }];
    }, [giftsData, selectedCategory]);

    return {
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
    };
};