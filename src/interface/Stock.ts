export interface ProductInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: string;
  rating: number;
  stock: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface StockInterface {
  limit: number;
  products: ProductInterface[];
  total: number;
}
