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
  quantity: number
}

export interface ProductsContextType {
  products: Product[]
  searchProducts: (query: string) => Promise<void>
  loading: boolean
}
