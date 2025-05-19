import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Spinach',
    category: 'vegetables',
    price: 2.99,
    unit: 'bunch',
    image: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg',
    description: 'Nutrient-rich spinach grown using advanced hydroponic techniques, free of pesticides and harmful chemicals.',
    nutritionalInfo: 'Rich in iron, vitamins A, C, and K. Low in calories, high in antioxidants.',
    farmSource: {
      name: 'Green Valley Hydroponics',
      location: 'Riverside, CA'
    },
    harvestDate: '2025-06-15',
    isPopular: true,
    isNew: false,
    isHydroFresh: true
  },
  {
    id: '2',
    name: 'Crisp Lettuce',
    category: 'vegetables',
    price: 3.49,
    unit: 'head',
    image: 'https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg',
    description: 'Crisp and fresh lettuce grown in our controlled hydroponic environment for maximum freshness and nutrition.',
    nutritionalInfo: 'Good source of fiber, vitamins A and K. Low in calories and carbohydrates.',
    farmSource: {
      name: 'Aqua Greens Farm',
      location: 'Portland, OR'
    },
    harvestDate: '2025-06-16',
    isPopular: true,
    isNew: false,
    isHydroFresh: true
  },
  {
    id: '3',
    name: 'Cherry Tomatoes',
    category: 'vegetables',
    price: 4.99,
    unit: 'pint',
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg',
    description: 'Sweet and juicy cherry tomatoes, grown hydroponically for consistent flavor and texture.',
    nutritionalInfo: 'Rich in lycopene, vitamins C, K, and potassium. Good source of antioxidants.',
    farmSource: {
      name: 'Sunlight Hydroponics',
      location: 'Austin, TX'
    },
    harvestDate: '2025-06-14',
    isPopular: false,
    isNew: true,
    isHydroFresh: true
  },
  {
    id: '4',
    name: 'Fresh Strawberries',
    category: 'fruits',
    price: 5.99,
    unit: 'box',
    image: 'https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg',
    description: 'Juicy, sweet strawberries grown in vertical hydroponic towers. Perfectly ripe and ready to eat.',
    nutritionalInfo: 'High in vitamin C, fiber, and antioxidants. Good source of manganese and potassium.',
    farmSource: {
      name: 'Berry Good Farms',
      location: 'San Diego, CA'
    },
    harvestDate: '2025-06-15',
    isPopular: true,
    isNew: false,
    isHydroFresh: true
  },
  {
    id: '5',
    name: 'Organic Eggs',
    category: 'eggs',
    price: 6.99,
    unit: 'dozen',
    image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
    description: 'Farm-fresh organic eggs from free-range chickens raised on hydroponically grown feed.',
    nutritionalInfo: 'Excellent source of protein, vitamins D, B12, and minerals. Rich in choline and antioxidants.',
    farmSource: {
      name: 'Clover Field Farm',
      location: 'Boulder, CO'
    },
    harvestDate: '2025-06-16',
    isPopular: true,
    isNew: false,
    isHydroFresh: false
  },
  {
    id: '6',
    name: 'Fresh Basil',
    category: 'vegetables',
    price: 2.49,
    unit: 'bunch',
    image: 'https://images.pexels.com/photos/5503206/pexels-photo-5503206.jpeg',
    description: 'Aromatic basil grown hydroponically for maximum flavor and essential oil content.',
    nutritionalInfo: 'Contains vitamin K, manganese, and essential oils. Has anti-inflammatory properties.',
    farmSource: {
      name: 'Herb Haven',
      location: 'Seattle, WA'
    },
    harvestDate: '2025-06-16',
    isPopular: false,
    isNew: true,
    isHydroFresh: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getPopularProducts = (): Product[] => {
  return products.filter(product => product.isPopular);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getHydroFreshProducts = (): Product[] => {
  return products.filter(product => product.isHydroFresh);
};