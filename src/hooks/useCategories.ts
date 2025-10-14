import { useEffect, useState } from 'react'
import { getCategories } from '@/services/api'
import { useProductsContext } from './useProductsContext'

export const useCategories = () => {
  const [listCategories, setListCategories] = useState([])
  const productsContext = useProductsContext()

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories()

      setListCategories(data)
    }

    fetchCategories()
  }, [])

  const filterByCategorie = async (category: string) => {
    if (productsContext) {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
      const data = await response.json()
      productsContext.setProducts(data)
    }
  }

  return { listCategories, filterByCategorie }
}
