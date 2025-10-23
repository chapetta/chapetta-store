import type { ReactNode } from 'react'
import { CategoriesContext } from '@/shared/state/contexts/CategoriesContext'
import { useCategories } from '@/shared/hooks/useCategories'

interface CategoriesContextProps {
  children: ReactNode
}

export const CategoriesProvider = ({ children }: CategoriesContextProps) => {
  const categories = useCategories()

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  )
}
