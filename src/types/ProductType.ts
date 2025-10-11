export interface Rating {
  rate: number
  count: number
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
  quantity?: number
}

export type Category = string

export interface ProductContextType {
  products: Product[]
  loading: boolean
  handleButtonSearch: (query: string) => Promise<void>
}

export interface CategoriesContextType {
  listCategories: Category[]
  handleSearchForCategory: (category: string) => Promise<void>
}
