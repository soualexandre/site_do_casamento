import { getDB } from './index.ts';
import { ItemGift, GiftGroup, UpdateGiftPayload } from '../../types/gift.ts';

export const GiftRepository = {
  async getAll(): Promise<GiftGroup> {
    const db = getDB();
    const result = db.prepare('SELECT * FROM gifts').all();

    const group: GiftGroup = {
      kitchen: [],
      bedroom: [],
      living: []
    };

    result.forEach(item => {
      const giftItem: ItemGift = {
      //@ts-ignore

        ...item,
      //@ts-ignore
        gifted: Boolean(item.gifted),
      //@ts-ignore
        images: item.images ? JSON.parse(item.images) : [] // ← converte para array
      };
      //@ts-ignore

      if (group[item.category as keyof GiftGroup]) {
      //@ts-ignore
        group[item.category as keyof GiftGroup].push(giftItem);
      }
    });

    return group;
  },

  async getById(id: string): Promise<ItemGift | null> {
    const db = getDB();
    const item = db.prepare('SELECT * FROM gifts WHERE id = ?').get(id);
    return item
      //@ts-ignore
      ? {
        ...item,
        //@ts-ignore
        gifted: Boolean(item.gifted),
        //@ts-ignore
        images: item.images ? JSON.parse(item.images) : [] // ← converte para array
      }
      : null;
  },

  async update(id: string, data: UpdateGiftPayload): Promise<boolean> {
    const db = getDB();
    const { gifted, giftedBy, message } = data;

    const result = db
      .prepare(
        `UPDATE gifts 
         SET gifted = ?, giftedBy = ?, message = ?
         WHERE id = ?`
      )
      .run(gifted ? 1 : 0, giftedBy, message, id);

    return result.changes > 0;
  },

  async seedInitialData(data: GiftGroup) {
    const db = getDB();

    const transaction = db.transaction(() => {
      for (const [category, items] of Object.entries(data)) {
        for (const item of items) {
          db.prepare(
            `INSERT OR IGNORE INTO gifts 
             (id, category, name, gifted, priority, giftedBy, message, images) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
          ).run(
            item.id,
            category,
            item.name,
            item.gifted ? 1 : 0,
            item.priority,
            item.giftedBy || null,
            item.message || null,
            JSON.stringify(item.images || []) // ← salva como string
          );
        }
      }
    });

    transaction();
  }
};
