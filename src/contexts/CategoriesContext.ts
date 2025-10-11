import { createContext } from 'react'
import type { CategoriesContextType } from '../types/CategoryContextType'

export const CategoriesContext = createContext<CategoriesContextType>({
  listCategories: [],
  handleSearchForCategory: async () => {},
})
