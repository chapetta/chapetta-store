import { useContext } from "react";
import { cartContext } from "../contexts/CartContext";


export const useCart = () => {

  const context = useContext(cartContext);

  if (!context) {
    throw new Error("UseCart deve ser usado dentro de um cartProvider")
  }
  return context
}