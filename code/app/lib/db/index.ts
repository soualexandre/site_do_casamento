import { Database } from 'better-sqlite3';
import betterSqlite3 from 'better-sqlite3';
import path from 'path';

let dbInstance: Database | null = null;

export const getDB = (): Database => {
  if (!dbInstance) {
    const dbPath = path.resolve(process.cwd(), 'gifts.db');
    dbInstance = betterSqlite3(dbPath);
    dbInstance.pragma('journal_mode = WAL');
  }
  return dbInstance;
};

export const initializeDB = () => {
  const db = getDB();
  const migration = `
    CREATE TABLE IF NOT EXISTS gifts (
      id TEXT PRIMARY KEY,
      category TEXT NOT NULL,
      name TEXT NOT NULL,
      totalDesired INTEGER NOT NULL DEFAULT 1,
      images TEXT, 
      gifted BOOLEAN NOT NULL DEFAULT 0,
      giftedBy TEXT,
      message TEXT
    );
    
    CREATE INDEX IF NOT EXISTS idx_gifts_category ON gifts(category);
    CREATE INDEX IF NOT EXISTS idx_gifts_gifted ON gifts(gifted);
  `;
  db.exec(migration);
};

