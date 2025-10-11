export interface CategoriesContextType {
  listCategories: string[]
  filterByCategorie: (category: string) => Promise<void>
}
