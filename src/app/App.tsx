import { CartProvider } from '@/providers/CartProvider'
import { CategoriesProvider } from '@/providers/CategoryProvider'
import { ProductsProvider } from '@/providers/ProductsProvider'
import { Router } from '@/routes'

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
      <ProductsProvider>
        <CartProvider>
          <CategoriesProvider>
            <Router />
          </CategoriesProvider>
        </CartProvider>
      </ProductsProvider>
    </>
  )
}

export default App
