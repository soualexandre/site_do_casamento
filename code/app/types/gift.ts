export type Priority = 'high' | 'medium' | 'low';
export type CategoryId = 'kitchen' | 'bedroom' | 'living' | 'all';

export interface ItemGift {
  id: string;
  name: string;
  gifted: boolean;
  giftedBy?: string | null;
  message?: string | null;
  totalDesired: number;
  images?: string[];
  category?: keyof GiftGroup;
}

export interface GiftGroup {
  kitchen: ItemGift[];
  bedroom: ItemGift[];
  living: ItemGift[];
}

export interface UpdateGiftPayload {
  gifted: boolean;
  giftedBy?: string | null;
  message?: string | null;
}