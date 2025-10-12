import type { ReactNode } from 'react'
import { ProductsContext } from '@/contexts/ProductsContext'
import { useProducts } from '@/hooks/useProducts'

interface ProductsProviderProps {
  children: ReactNode
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const products = useProducts()
  return <ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>
}
