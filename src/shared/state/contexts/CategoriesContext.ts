import type { CategoriesContextType } from '@/shared/types/category-context'
import { createContext } from 'react'

export const CategoriesContext = createContext<CategoriesContextType>({
  listCategories: [],
  filterByCategorie: async () => {},
})
