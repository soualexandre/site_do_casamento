export type Priority = 'high' | 'medium' | 'low';
export type CategoryId = 'kitchen' | 'bedroom' | 'living' | 'all';

export interface ItemGift {
  id: string;
  name: string;
  gifted: boolean;
  giftedBy?: [{name: string}] | null;
  message?: [{message: string}] | null;
  quantity: number;
  images?: [{url: string; alt?: string}];
  category?: string;
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