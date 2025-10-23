import { CartProvider } from '@/shared/state/providers/CartProvider'
import { CategoriesProvider } from '@/shared/state/providers/CategoryProvider'
import { ProductsProvider } from '@/shared/state/providers/ProductsProvider'
import { Router } from '@/app/routes'

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
