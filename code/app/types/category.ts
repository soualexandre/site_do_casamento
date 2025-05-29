import { LucideIcon } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface CategoryData {
  [key: string]: {
    title: string;
    icon: LucideIcon;
  };
}