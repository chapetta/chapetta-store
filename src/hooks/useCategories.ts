import { useEffect, useState } from 'react'
import type { Products } from '../contexts/ProductContext'
import { getCategories, getProducts } from '../services/api'

export const useCategories = () => {
  const [listCategories, setListCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories()

      setListCategories(data)
    }

    fetchCategories()
  })

  const filterByCategorie = async (category: string) => {
    const products = await getProducts()

    return products.filter((product: Products) => product.category === category)
  }

  return { listCategories, filterByCategorie }
}
