import { createContext } from "react";

type Rating = {
  rate: number;
  count: number;
}

export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;

}

export interface ProductsContextType {
  products: Products[];
  handleButtonSearch: (query: string) => Promise<void>
}

export const ProductContext = createContext<ProductsContextType>({
  products: [],
   handleButtonSearch: async () => {}
  
  })