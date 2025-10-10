import { createContext } from "react";
import type { Products } from "../types/ProductTypes";



interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void
  handleButtonAddToCart: (product: Products) => void
  cartList: Products[],
  handleButtonAddQuantity: (id: number) => void,
  quantity: number,
  getTotalValueCart: () => number;
}

export const cartContext = createContext<CartContextType | undefined>(undefined)  