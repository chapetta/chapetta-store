import { createContext } from "react";


interface CategoriesContext {
  listCategories: string[],
  handleSearchForCategory: (category: string) => Promise<void>
}

export const CategorieContext = createContext<CategoriesContext>({
  listCategories: [], 
  handleSearchForCategory: async () => {}
})