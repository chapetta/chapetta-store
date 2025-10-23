import { createContext } from 'react'
import type { ProductsContextType } from '@/shared/types/product'

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  searchProducts: async () => {},
  loading: false,
  setProducts: () => {},
})
