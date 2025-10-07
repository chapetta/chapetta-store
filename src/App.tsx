import { Router } from './routes'
import { cartContext } from './contexts/CartContext'
import { useEffect, useState } from 'react'
import { getCategories, getProducts } from './services/api'
import { CategorieContext } from './contexts/CategoriesContext'
import { ProductContext } from './contexts/ProductContext'
function App() {

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [listCategories, setListCategories] = useState([])
  const [ products, setProducts] = useState([])


  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories()
      console.log(data)
      setListCategories(data)
    }

    const fetchProducts =  async () => {
      const data = await getProducts()
      setProducts(data)
    }
    fetchCategories()
    fetchProducts()
  }, [])

  return (
    <>
    <ProductContext.Provider value={{products}}>
      <cartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
        <CategorieContext.Provider value={{ listCategories }}>
          <Router />
        </CategorieContext.Provider>
      </cartContext.Provider>
    </ProductContext.Provider>
    </>
  )
}

export default App
