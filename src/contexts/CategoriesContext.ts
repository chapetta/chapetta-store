import type { CategoriesContextType } from '@/types/CategoryContextType'
import { createContext } from 'react'

export const CategoriesContext = createContext<CategoriesContextType>({
  listCategories: [],
  filterByCategorie: async () => {},
})
