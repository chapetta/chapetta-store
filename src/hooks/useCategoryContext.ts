import { useContext } from 'react'
import { CategoriesContext } from '../contexts/CategoriesContext'

export const useCategories = () => {
  const context = useContext(CategoriesContext)

  if (!context) {
    throw new Error('useCategoriesContext deve ser usado dentro de um CategoriePRovider')
  }

  return context
}
