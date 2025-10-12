import { createContext } from 'react'
import type { ProductsContextType } from '@/types/ProductType'

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  searchProducts: async () => {},
  loading: false,
})
