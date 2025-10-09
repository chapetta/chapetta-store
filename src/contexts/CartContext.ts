import { createContext } from "react";
import type { Products } from "../types/ProductTypes";



interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void
  handleButtonAddToCart: (product: Products) => void


}

export const cartContext = createContext<CartContextType | undefined>(undefined)  