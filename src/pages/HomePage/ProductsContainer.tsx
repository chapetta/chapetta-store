import { useContext } from 'react';
import { ProductCard } from '../../components/ProductCard.tsx';
import { ProductContext } from '../../contexts/ProductContext.ts';

export const ProductsContainer = () => {
  const { products } = useContext(ProductContext)
    return (
        <section className='container flex flex-wrap mx-auto p-10 justify-center gap-10'>
          {products.map((product) => (
            <ProductCard 
              key={`product_${product.id}_key`}
              {...product}
            />
          ))}
        </section>
    );
};