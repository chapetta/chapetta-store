import { useEffect, useState } from 'react'
import type { Product } from '@/types/ProductType'

export const useCart = () => {
  const [cartList, setCartList] = useState<Product[] | []>([])
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const totalItems = cartList.reduce((sum, item) => sum + (item.quantity || 0), 0)
    setQuantity(totalItems)
  }, [cartList])

  const addToCart = (product: Product) => {
    setCartList((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id)

      if (existingProduct) {
        return prevCart.map((item) => {
          return item.id === product.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
        })
      }

      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const increaseQuantity = (id: number) => {
    setCartList((prevCart) =>
      prevCart.map((item) => {
        return item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      })
    )
  }

  const decreaseQuantity = (id: number) => {
    setCartList((prevCart) => {
      const existingProduct = cartList.find((item) => item.id === id)

      if (existingProduct && existingProduct.quantity === 1) {
        return prevCart.filter((item) => item.id !== id)
      }
      return prevCart.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      })
    })
  }

  const getTotal = () => {
    return cartList.reduce((acc, item) => acc + item.price * (item.quantity || 0), 0)
  }

  return { cartList, quantity, addToCart, decreaseQuantity, increaseQuantity, getTotal }
}
