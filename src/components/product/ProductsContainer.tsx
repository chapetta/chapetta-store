import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard.tsx'
import { useProductsContext } from '@/hooks/useProductsContext'
import type { Product } from '@/types/ProductType.ts'

export const ProductsContainer = () => {
  const { products } = useProductsContext()
  return (
    <section className="my-20 grid place-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {' '}
      {products.length > 0 ? (
        products.map((product: Product) => (
          <Link to={`/product/${product.id}`} key={`product_${product.id}_key`}>
            <ProductCard {...product} />
          </Link>
        ))
      ) : (
        <h2>Produto não encontrado!</h2>
      )}
    </section>
  )
}
