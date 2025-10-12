import type { ReactNode } from 'react'
import { CategoriesContext } from '@/contexts/CategoriesContext'
import { useCategories } from '@/hooks/useCategories'

interface CategoriesContextProps {
  children: ReactNode
}

export const CategoriesProvider = ({ children }: CategoriesContextProps) => {
  const categories = useCategories()
  return <CategoriesContext.Provider value={categories}>{children}</CategoriesContext.Provider>
}
