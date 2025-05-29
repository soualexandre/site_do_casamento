import { GiftRepository } from '../lib/db/giftRepository.ts';
import { getDB } from '../lib/db/index.ts';
import { GiftGroup } from '../types/gift.ts';

export const INITIAL_DATA: GiftGroup = {
  kitchen: [
    {
      id: 'k1', name: 'Máquina de Lavar roupas', gifted: true, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ], giftedBy: 'Família Silva', message: 'Desejamos muito amor e felicidade!'
    },
    {
      id: 'k2', name: 'Tanquinho', gifted: true, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ], giftedBy: 'Tia Maria', message: ''
    },
    {
      id: 'k3', name: 'Tábua e ferro de passar roupas', gifted: true, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ], giftedBy: 'João Pedro', message: 'Que sejam muito felizes!'
    },
    {
      id: 'k4', name: 'Geladeira frost free', gifted: true, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ], giftedBy: 'Pais do Noivo', message: 'Com todo nosso amor e carinho'
    },
    {
      id: 'k5', name: 'Armário de aço', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k6', name: 'Fogão cooktop', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k7', name: 'Depurador de ar (exaustor ou coifa)', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k8', name: 'Forno Elétrico', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k9', name: 'Sanduicheira', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k10', name: 'Batedeira', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k11', name: 'Bebedouro/Purificador de água', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k12', name: 'Jogo de Panelas antiaderentes', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k13', name: 'Descanso de Panela', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k14', name: 'Frigideiras', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k15', name: 'Multiprocessador', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k16', name: 'Panela de Arroz elétrica', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k17', name: 'Panela de Pressão elétrica', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k18', name: 'Air Fryer', gifted: true, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ], giftedBy: 'Amigos da Faculdade', message: 'Para muitas receitas deliciosas!'
    },
    {
      id: 'k19', name: 'Liquidificador Turbo', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k20', name: 'Chaleira elétrica', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k21', name: 'Churrasqueira', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k22', name: 'Aparelho de Jantar (qualquer cor)', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k23', name: 'Jogo de talheres faqueiro', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k24', name: 'Colheres de preparo e de servir', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k25', name: 'Jogo de Facas', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k26', name: 'Tábua de corte', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k27', name: 'Fruteira de chão', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k28', name: 'Fruteira de mesa', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k29', name: 'Escorredor de louça', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k30', name: 'Travessas de vidro', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k31', name: 'Formas e assadeiras', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k32', name: 'Potes Herméticos', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k33', name: 'Jarras de vidro', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k34', name: 'Jogo de copos', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k35', name: 'Jogo de taças', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'k36', name: 'Bandejas', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    }
  ],
  bedroom: [
    {
      id: 'b1', name: 'Cama box de casal', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'b2', name: 'Travesseiros', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'b3', name: 'Cobre leito', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'b4', name: 'Lençol', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'b5', name: 'Edredom', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'b6', name: 'Ar condicionado', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'b7', name: 'Guarda-roupa casal', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'b8', name: 'Espelho para quarto (corpo inteiro)', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'b9', name: 'Toalhas de banho', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'b10', name: 'Toalhas de rosto e mão para banheiro', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'b11', name: 'Kit porta escova de dente e sabão', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    }
  ],
  living: [
    {
      id: 'l1', name: 'Sofá', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'l2', name: 'Televisão', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'l3', name: 'Carpete grande', gifted: true, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    },
    {
      id: 'l4', name: 'Rack/painel para TV', gifted: false, totalDesired: 1, images: [
        '/images/kitchen/washing-machine.jpg'
      ]
    }
  ]
};




export async function seedDatabase() {
  try {
    const db = getDB();
    db.prepare(`
  CREATE TABLE IF NOT EXISTS gifts (
    id TEXT PRIMARY KEY,
    category TEXT NOT NULL,
    name TEXT NOT NULL,
    gifted INTEGER DEFAULT 0,
    priority INTEGER,
    giftedBy TEXT,
    message TEXT,
    images TEXT
  );
`).run();
    await GiftRepository.seedInitialData(INITIAL_DATA);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}



seedDatabase();