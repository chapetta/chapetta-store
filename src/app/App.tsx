import { CartProvider } from '@/providers/CartProvider'
import { CategoriesProvider } from '@/providers/CategoryProvider'
import { ProductsProvider } from '@/providers/ProductsProvider'
import { Router } from '@/routes'

function App() {
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
