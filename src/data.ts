import { MenuItem, Category } from './types';

export const categories: Category[] = [
  {
    id: 'starters',
    name: 'Starters',
    description: 'Begin your culinary journey with our delectable appetizers'
  },
  {
    id: 'main-courses',
    name: 'Main Courses',
    description: 'Savor our chef\'s signature dishes'
  },
  {
    id: 'pasta',
    name: 'Pasta & Risotto',
    description: 'Handcrafted Italian classics'
  },
  {
    id: 'seafood',
    name: 'Seafood',
    description: 'Fresh catches of the day'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet endings to your perfect meal'
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Refresh yourself with our drink selection'
  }
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls stuffed with wild mushrooms and truffle, served with parmesan aioli',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    category: 'starters'
  },
  {
    id: '2',
    name: 'Grilled Octopus',
    description: 'Tender octopus with chorizo, fingerling potatoes, and smoked paprika',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1599021456807-9c9bd1a49a10',
    category: 'starters'
  },
  {
    id: '3',
    name: 'Wagyu Beef Tartare',
    description: 'Hand-cut wagyu beef with traditional garnishes and house-made potato crisps',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f',
    category: 'starters'
  },
  {
    id: '4',
    name: 'Herb-Crusted Rack of Lamb',
    description: 'New Zealand lamb with mint pesto, roasted vegetables, and red wine reduction',
    price: 38.99,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    category: 'main-courses'
  },
  {
    id: '5',
    name: 'Duck Breast à l\'Orange',
    description: 'Pan-seared duck breast with orange sauce, wild rice, and seasonal vegetables',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1511910849309-0dffb8785146',
    category: 'main-courses'
  },
  {
    id: '6',
    name: 'Lobster Linguine',
    description: 'Fresh pasta with butter-poached lobster, cherry tomatoes, and herbs',
    price: 36.99,
    image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85',
    category: 'pasta'
  },
  {
    id: '7',
    name: 'Wild Mushroom Risotto',
    description: 'Arborio rice with porcini mushrooms, truffle oil, and aged parmesan',
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
    category: 'pasta'
  },
  {
    id: '8',
    name: 'Pan-Seared Sea Bass',
    description: 'Mediterranean sea bass with saffron sauce and seasonal vegetables',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2',
    category: 'seafood'
  },
  {
    id: '9',
    name: 'Chocolate Soufflé',
    description: 'Warm chocolate soufflé with vanilla bean ice cream',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc',
    category: 'desserts'
  },
  {
    id: '10',
    name: 'Signature Martini',
    description: 'House-infused gin with dry vermouth and olive tapenade',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813',
    category: 'beverages'
  }
];