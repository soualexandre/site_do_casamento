import { GiftRepository } from './db/giftRepository.ts';
import { GiftGroup } from '../types/gift.ts';
import { INITIAL_DATA } from '../scripts/seed.ts';

async function seedDatabase() {
  try {
    await GiftRepository.seedInitialData(INITIAL_DATA as GiftGroup);
    console.log('Database seeded successfully');  
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();