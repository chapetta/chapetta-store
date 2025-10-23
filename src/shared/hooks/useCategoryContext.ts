import { useContext } from 'react'
import { CategoriesContext } from '@/shared/state/contexts/CategoriesContext'

export const useCategoryContext = () => {
  const context = useContext(CategoriesContext)

  if (!context) {
    throw new Error('useCategoriesContext deve ser usado dentro de um CategoriePRovider')
  }

  return context
}
