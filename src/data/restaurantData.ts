import { MenuItem, GalleryItem, Testimonial } from '../types';

export const RESTAURANT_INFO = {
  name: 'Two Spoons Uttara',
  tagline: 'Happiness Begins Here',
  subtitle: 'Restaurant & Chocolate Cafe in Dhaka',
  phone: '01304-672621',
  phoneTel: '+8801304672621',
  website: 'twospoonsbd.com',
  websiteUrl: 'https://www.twospoonsbd.com/',
  address: 'Plot 38, Gareeb-e-Nawaz Ave, Sector 13, Uttara, Dhaka 1230',
  plusCode: 'V9FR+2F2',
  mapUrl: 'https://maps.google.com/?q=Two+Spoons+Uttara+Dhaka',
  googleRating: 4.3,
  reviewCount: 231,
  hoursWeekday: '11:00 AM – 02:00 AM',
  hoursWeekend: '11:00 AM – 02:00 AM',
  facebook: 'https://www.facebook.com/twospoonsuttara/',
  instagram: 'https://www.instagram.com/twospoons.dhk/',
  foodpanda: 'https://www.foodpanda.com.bd/restaurant/cf65/two-spoons',
  chittagongFacebook: 'https://www.facebook.com/twospoonsChittagong/',
};

export const MENU_ITEMS: MenuItem[] = [
  // Mains
  {
    id: 'm1',
    name: 'Belgian Chicken Steak',
    category: 'mains',
    description: 'The house steak, served with sides and sauce',
    isGuestFavorite: true,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1000&q=80',
    tags: ['Guest Favourite', 'House Special']
  },
  {
    id: 'm2',
    name: 'John Dory Fish',
    category: 'mains',
    description: 'Fillet of John Dory, pan finished',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=80',
    tags: ['Seafood']
  },
  {
    id: 'm3',
    name: 'Fish & Chips',
    category: 'mains',
    description: 'Battered fish with fries and tartare',
    image: 'https://images.unsplash.com/photo-1579208575657-c595a053b9b7?auto=format&fit=crop&w=1000&q=80',
    tags: ['Classic']
  },
  {
    id: 'm4',
    name: 'BBQ Chicken Meal',
    category: 'mains',
    description: 'Barbecue chicken served as a full meal',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1000&q=80',
    tags: ['Popular']
  },
  {
    id: 'm5',
    name: 'Oven Baked Pasta',
    category: 'mains',
    description: 'Baked in the oven until the top sets with melted golden cheese',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80',
    tags: ['Oven Baked']
  },
  {
    id: 'm6',
    name: 'Beef Burger & Fries',
    category: 'mains',
    description: 'Beef patty, full stack, with a side of fries',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80',
    tags: ['Gourmet Burger']
  },
  {
    id: 'm7',
    name: 'Fried Rice & Chicken',
    category: 'mains',
    description: 'Fried rice plated with savoury seasoned chicken',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1000&q=80',
    tags: ['Platters']
  },
  {
    id: 'm8',
    name: 'Fried Rice & Fish Fry',
    category: 'mains',
    description: 'Fried rice plated with golden crispy fish fry',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80',
    tags: ['Platters']
  },

  // Soups & Salads
  {
    id: 's1',
    name: 'Thai Thick Soup',
    category: 'soups-salads',
    description: 'Thick Thai style soup, served piping hot',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=80',
    tags: ['Hot Soup']
  },
  {
    id: 's2',
    name: 'Greek Salad',
    category: 'soups-salads',
    description: 'Cucumber, tomato, olives and feta tossed in virgin olive oil',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
    tags: ['Fresh']
  },
  {
    id: 's3',
    name: 'Chicken Caesar Salad',
    category: 'soups-salads',
    description: 'Grilled chicken, crisp leaves and Caesar dressing',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=1000&q=80',
    tags: ['Chef Special']
  },
  {
    id: 's4',
    name: 'Sharing Platters',
    category: 'soups-salads',
    description: 'Built for a table, not a plate — wings, fries, dips, and bites',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80',
    tags: ['For The Table']
  },

  // The Chocolate Cafe
  {
    id: 'c1',
    name: 'Chocolate Fondant',
    category: 'chocolate-cafe',
    description: 'Warm centre with molten chocolate lava, best eaten straight away',
    isGuestFavorite: true,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80',
    tags: ['Guest Favourite', 'Molten Lava']
  },
  {
    id: 'c2',
    name: 'Brownies',
    category: 'chocolate-cafe',
    description: 'Dense chocolate brownies straight from the dessert counter',
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?auto=format&fit=crop&w=1000&q=80',
    tags: ['Counter Fresh']
  },
  {
    id: 'c3',
    name: 'Crepes & Waffles',
    category: 'chocolate-cafe',
    description: 'Made fresh to order, lavishly finished with melted Belgian chocolate',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1000&q=80',
    tags: ['Signature Dessert']
  },
  {
    id: 'c4',
    name: 'Oreo Milkshake',
    category: 'chocolate-cafe',
    description: 'Thick creamy shake, blended thoroughly with Oreo cookies',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=80',
    tags: ['Chilled Shake']
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Crepes & Chocolate Delicacy',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Freshly prepared crepes smothered in warm gourmet chocolate.'
  },
  {
    id: 'g2',
    title: 'Two Spoons Uttara Dining Room',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Cozy and ambient dining room setting at Sector 13, Uttara.'
  },
  {
    id: 'g3',
    title: 'Belgian Chicken Steak Platter',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80',
    caption: 'Signature house steak served sizzling with sides and pepper sauce.'
  },
  {
    id: 'g4',
    title: 'Warm Molten Chocolate Fondant',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Decadent chocolate dessert with luscious warm flowing core.'
  },
  {
    id: 'g5',
    title: 'Two Spoons Evening Atmosphere',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Warm ambient lighting and comfortable seating for relaxed dinners.'
  },
  {
    id: 'g6',
    title: 'Outdoor & Lounge Seating',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80',
    caption: 'Open-air tables and modern lounge corners on Gareeb-e-Nawaz Ave.'
  },
  {
    id: 'g7',
    title: 'BBQ Meal & Oven Baked Pasta',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
    caption: 'Piping hot continental pasta baked fresh to order.'
  },
  {
    id: 'g8',
    title: 'Private Gathering & Dining Tables',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    caption: 'Spacious table settings perfect for families and friend groups.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Mitu',
    quote: 'best food in uttara',
    rating: 5,
    source: 'foodpanda & Google Reviews',
    sourceUrl: 'https://www.foodpanda.com.bd/restaurant/cf65/two-spoons'
  },
  {
    id: 't2',
    author: 'T.',
    quote: 'Best waffle ever, melts in mouth',
    rating: 5,
    source: 'foodpanda & Google Reviews',
    sourceUrl: 'https://www.foodpanda.com.bd/restaurant/cf65/two-spoons'
  },
  {
    id: 't3',
    author: 'MD',
    quote: 'The food was really so fresh & so yummy',
    rating: 5,
    source: 'foodpanda & Google Reviews',
    sourceUrl: 'https://www.foodpanda.com.bd/restaurant/cf65/two-spoons'
  },
  {
    id: 't4',
    author: 'Mabisha',
    quote: 'the chocolate was rich and very indulgent',
    rating: 5,
    source: 'foodpanda & Google Reviews',
    sourceUrl: 'https://www.foodpanda.com.bd/restaurant/cf65/two-spoons'
  },
  {
    id: 't5',
    author: 'Jinkispeach',
    quote: 'the spaghetti bolognese is amazing',
    rating: 5,
    source: 'foodpanda & Google Reviews',
    sourceUrl: 'https://www.foodpanda.com.bd/restaurant/cf65/two-spoons'
  }
];

export const GOOD_TO_KNOW = [
  {
    id: 'k1',
    title: 'Busiest Hour',
    timeframe: 'Around 9 PM',
    desc: 'Expect up to a 15 minute wait during peak weekend hours.'
  },
  {
    id: 'k2',
    title: 'Typical Visit',
    timeframe: 'No rush',
    desc: 'Guests usually stay 45 minutes to 2 hours for dinner and dessert.'
  },
  {
    id: 'k3',
    title: 'Outdoor Seating',
    timeframe: 'Weather permitting',
    desc: 'Open-air tables available on request under the evening sky.'
  },
  {
    id: 'k4',
    title: 'Late Night',
    timeframe: 'Until 2 AM',
    desc: 'Full kitchen and chocolate dessert counter open late every day.'
  }
];
