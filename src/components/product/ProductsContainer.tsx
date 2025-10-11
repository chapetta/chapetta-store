import { useContext } from 'react'
import { ProductCard } from '../../components/ProductCard.tsx'
import { ProductContext } from '../../contexts/ProductContext.ts'
import { Link } from 'react-router-dom'

export const ProductsContainer = () => {
  const { products } = useContext(ProductContext)
  return (
    <section className="container mx-auto flex flex-wrap justify-center gap-10 p-10">
      {products.length > 0 ? (
        products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <ProductCard key={`product_${product.id}_key`} {...product} />
          </Link>
        ))
      ) : (
        <h2>Produto não encontrado!</h2>
      )}
    </section>
  )
}
