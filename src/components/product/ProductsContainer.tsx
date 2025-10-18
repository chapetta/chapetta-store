import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard.tsx'
import { useProductsContext } from '@/hooks/useProductsContext'
import type { Product } from '@/types/ProductType.ts'

export const ProductsContainer = () => {
  const { products } = useProductsContext()
  return (
    <section className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {products.length > 0 ? (
        products.map((product: Product) => (
          <Link to={`/product/${product.id}`} key={`product_${product.id}_key`}>
            <ProductCard {...product}/>
          </Link>
        ))
      ) : (
        <h2>Produto não encontrado!</h2>
      )}
    </section>
  )
}
