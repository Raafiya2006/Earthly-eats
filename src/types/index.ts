export interface Product {
  id: string;
  name: string;
  category: 'vegetables' | 'fruits' | 'eggs';
  price: number;
  unit: string;
  image: string;
  description: string;
  nutritionalInfo: string;
  farmSource: {
    name: string;
    location: string;
  };
  harvestDate: string;
  isPopular: boolean;
  isNew: boolean;
  isHydroFresh: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  type: 'customer' | 'farmer' | 'admin';
}

export interface CartItem {
  product: Product;
  quantity: number;
}