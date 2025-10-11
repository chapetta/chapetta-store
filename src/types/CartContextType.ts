import type { Products } from '../contexts/ProductContext'

export interface CartContextType {
  addToCart: (product: Products) => void
  cartList: Products[]
  increaseQuantity: (id: number) => void
  quantity: number
  getTotal: () => number
  decreaseQuantity: (id: number) => void
}
