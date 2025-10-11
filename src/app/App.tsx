import { Router } from './routes'
import { useEffect, useState } from 'react'
import { getCategories, getProducts, getProductsFromQuery } from './services/api'
import { CategorieContext } from './contexts/CategoriesContext'
import { ProductContext } from './contexts/ProductContext'
import type { Products } from './types/ProductTypes'
import { CartProvider } from '../providers/CartProvider'
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [listCategories, setListCategories] = useState([])

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true)
      const [categories, products] = await Promise.all([getCategories(), getProducts()])

      await new Promise((r) => setTimeout(r, 1000))

      setListCategories(categories)
      setProducts(products)
      setLoading(false)
    }

    fetchInitialData()
  }, [])

  const handleButtonSearch = async (query: string) => {
    setLoading(true)

    const getProductsFromInputSearch = await getProductsFromQuery(query)
    const delay = new Promise((resolve) => setTimeout(resolve, 1000))

    const [results] = await Promise.all([getProductsFromInputSearch, delay])

    setProducts(results)
    setLoading(false)
  }

  const handleSearchForCategory = async (category: string) => {
    const productsList = await getProducts()

    const newListByCategory = productsList.filter((item: Products) => item.category === category)

    setProducts(newListByCategory)
  }

  return (
    <>
      <ProductContext.Provider value={{ products, handleButtonSearch, loading }}>
        <CartProvider>
          <CategorieContext.Provider value={{ listCategories, handleSearchForCategory }}>
            <Router />
          </CategorieContext.Provider>
        </CartProvider>
      </ProductContext.Provider>
    </>
  )
}

export default App
