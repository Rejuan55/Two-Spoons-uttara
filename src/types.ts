export interface MenuItem {
  id: string;
  name: string;
  category: 'mains' | 'soups-salads' | 'chocolate-cafe';
  description: string;
  isGuestFavorite?: boolean;
  image: string;
  tags?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'restaurant';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  author: string;
  quote: string;
  rating: number;
  source: string;
  sourceUrl: string;
}

export interface ReservationFormData {
  date: string;
  time: string;
  restaurant: string;
  numGuests: string;
  name: string;
  email: string;
  phone: string;
  comments: string;
}
