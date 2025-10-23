import type { CartContextType } from '@/shared/types/cart-context'
import { createContext } from 'react'

export const CartContext = createContext<CartContextType | undefined>(undefined)
