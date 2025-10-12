import { createContext } from 'react'
import type { ProductsContextType } from '@/types/ProductContextType'

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  searchProducts: async () => {},
  loading: false,
})
