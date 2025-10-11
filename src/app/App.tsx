import { ProductContext } from './contexts/ProductContext'
import { CartProvider } from '../providers/CartProvider'
import { Router } from '../routes'
import { CategoriesProvider } from '../providers/CategoryProvider'

function App() {
  // const handleButtonSearch = async (query: string) => {
  //   setLoading(true)

  //   const getProductsFromInputSearch = await getProductsFromQuery(query)
  //   const delay = new Promise((resolve) => setTimeout(resolve, 1000))

  //   const [results] = await Promise.all([getProductsFromInputSearch, delay])

  //   setProducts(results)
  //   setLoading(false)
  // }

  return (
    <>
      <ProductContext.Provider value={{ products, handleButtonSearch, loading }}>
        <CartProvider>
          <CategoriesProvider>
            <Router />
          </CategoriesProvider>
        </CartProvider>
      </ProductContext.Provider>
    </>
  )
}

export default App
