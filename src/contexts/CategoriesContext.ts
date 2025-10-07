import { createContext } from "react";

type Categorie = {
  id: string;
  name: string
}

interface CategoriesContext {
  listCategories: Categorie[]
}

export const CategorieContext = createContext<CategoriesContext>({listCategories: []})