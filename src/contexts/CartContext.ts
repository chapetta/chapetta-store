import type { CartContextType } from '@/types/CartContextType'
import { createContext } from 'react'

export const CartContext = createContext<CartContextType | undefined>(undefined)
