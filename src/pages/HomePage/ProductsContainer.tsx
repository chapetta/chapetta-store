import { ProductCard } from '../../components/ProductCard.tsx';
import {catalog} from '../../utils/catalog.ts'

export const ProductsContainer = () => {
    return (
        <section>
          {catalog.map((product) => (
            <ProductCard 
              {...product}
            />
          ))}
        </section>
    );
};