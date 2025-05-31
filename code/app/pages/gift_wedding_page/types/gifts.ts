import { Bed, ChefHat, Gift, Home } from "lucide-react";
import { ComponentType, SVGProps } from "react";

export type CategoryId = 'all' | 'kitchen' | 'bedroom' | 'living';

export type GiftedBy = {
  name: string;
};

export type GiftMessage = {
  message: string;
};

export type GiftImage = {
  alt: string;
  url: string;
};

export interface ItemGift {
  id: number;
  created_at: string;
  category: string;
  name: string;
  quantity: number;
  images: { alt: string; url: string }[];
  gifted: boolean;
  giftedBy: { name: string }[] | null;
  message: { message: string }[] | null;
}

export type ApiGift = ItemGift;

export type ApiResponse = {
  gifts: ApiGift[];
};

export type Category = {
  id: CategoryId;
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type CategoryDataItem = {
  title: string;
  icon: React.ComponentType;
};

export type CategoryData = {
  [key in Exclude<CategoryId, 'all'>]: CategoryDataItem;
};

export const categories: Category[] = [
  { id: 'all', name: 'Todos os Itens', icon: Gift },
  { id: 'kitchen', name: 'Cozinha & Área de Serviço', icon: ChefHat },
  { id: 'bedroom', name: 'Quarto & Banheiro', icon: Bed },
  { id: 'living', name: 'Sala de Estar', icon: Home }
];

export const categoryData: CategoryData = {
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

export const categoryMap: Record<string, CategoryId> = {
  "Cozinha": "kitchen",
  "Quarto": "bedroom",
  "Banheiro": "bedroom",
  "Sala de Estar": "living"
};