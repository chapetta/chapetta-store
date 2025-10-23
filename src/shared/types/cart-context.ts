import type { Product } from '@/shared/types/product'

export interface CartContextType {
  addToCart: (product: Product) => void
  cartList: Product[]
  setCartList: (cartList: Product[]) => void
  increaseQuantity: (id: number) => void
  quantity: number
  getTotal: () => number
  decreaseQuantity: (id: number) => void
}
