import { createContext } from "react";


interface CategoriesContext {
  listCategories: string[]
}

export const CategorieContext = createContext<CategoriesContext>({listCategories: []})