
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  rating: number;
  inStock: boolean;
  featured?: boolean;
}
