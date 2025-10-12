import { useEffect, useState } from 'react'
import { getProducts, getProductsFromQuery } from '@/services/api'

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      const data = await getProducts()
      setProducts(data)
      setLoading(false)
    }
    fetchProducts()
  }, [])

  const searchProducts = async (query: string) => {
    setLoading(true)
    const data = await getProductsFromQuery(query)
    setProducts(data)
    setLoading(false)
  }

  return { products, loading, searchProducts }
}
