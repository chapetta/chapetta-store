import { createContext } from "react";


export interface CategoriesContext {
  listCategories: string[],
  handleSearchForCategory: (category: string) => Promise<void>
}

export const CategorieContext = createContext<CategoriesContext>({
  listCategories: [], 
  handleSearchForCategory: async () => {}
})