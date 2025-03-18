export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}