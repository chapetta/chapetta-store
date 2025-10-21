import type { Product } from '@/types/ProductType'

export interface CartContextType {
  addToCart: (product: Product) => void
  cartList: Product[]
  setCartList: (cartList: Product[]) => void
  increaseQuantity: (id: number) => void
  quantity: number
  getTotal: () => number
  decreaseQuantity: (id: number) => void
}
