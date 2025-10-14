import { CartProvider } from '@/providers/CartProvider'
import { CategoriesProvider } from '@/providers/CategoryProvider'
import { ProductsProvider } from '@/providers/ProductsProvider'
import { Router } from '@/routes'

function App() {
  return (
    <>
      <ProductsProvider>
        <CategoriesProvider>
          <CartProvider>
            <Router />
          </CartProvider>
        </CategoriesProvider>
      </ProductsProvider>
    </>
  )
}

export default App
