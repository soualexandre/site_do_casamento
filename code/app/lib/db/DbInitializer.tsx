'use client';

import { useEffect } from 'react';
import { seedDatabase } from '../../scripts/seed.ts';

const DbInitializer = () => {
  useEffect(() => {
    const initializeDb = async () => {
      try {
        await seedDatabase();
      } catch (error) {
        console.error('Falha na inicialização do banco:', error);
      }
    };

    initializeDb();
  }, []);

  return null; 
};

export default DbInitializer;