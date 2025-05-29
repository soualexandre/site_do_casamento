import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';
import { INITIAL_DATA } from '../config/data-default.ts';
import { ItemGift } from '../types/gift.ts';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! 
);

async function seed() {
  console.log('🌱 Iniciando seed no Supabase...');

  for (const [room, gifts] of Object.entries(INITIAL_DATA)as [string, ItemGift[]][]) {
    for (const gift of gifts) {
      const { error } = await supabase.from('gifts').insert({
        id: gift.id,
        name: gift.name,
        gifted: gift.gifted,
        quantity: gift.totalDesired,
        category: gift.category,
        images: gift.images,
        giftedBy: gift.giftedBy || null,
        message: gift.message || null,
      });

      if (error) {
        console.error(`❌ Erro ao inserir o presente ${gift.name}:`, error);
      } else {
        console.log(`✅ Presente inserido: ${gift.name}`);
      }
    }
  }

  console.log('🌱 Seed finalizada!');
}

seed();
