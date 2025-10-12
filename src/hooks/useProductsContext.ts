import { useContext } from 'react'
import { ProductsContext } from '@/contexts/ProductsContext'

export const useProductsContext = () => {
  const context = useContext(ProductsContext)

  if (!context) {
    throw new Error('useProductsContext deve ser usado dentro de um ProductsProvider')
  }

  return context
}
