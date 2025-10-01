import { ProductCard } from '../../components/ProductCard.tsx';
import {catalog} from '../../utils/catalog.ts'

export const ProductsContainer = () => {
    return (
        <section className='container flex flex-wrap mx-auto p-10 justify-center gap-10'>
          {catalog.map((product) => (
            <ProductCard 
              key={`product_${product.id}_key`}
              {...product}
            />
          ))}
        </section>
    );
};