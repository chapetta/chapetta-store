import type { ReactNode } from 'react'
import { CartContext } from '@/contexts/CartContext'
import { useCart } from '@/hooks/useCart'

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const cart = useCart()
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}
