import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export const useCartContext = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCartContext deve ser usado dentro de um CartProvider')
  }

  return context
}
