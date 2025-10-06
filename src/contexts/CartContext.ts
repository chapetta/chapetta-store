import { createContext } from "react";

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void
}

export const cartContext = createContext<CartContextType | undefined>(undefined)  