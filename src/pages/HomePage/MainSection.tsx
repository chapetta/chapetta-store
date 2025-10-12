import { ProductsContainer } from '@/components/product/ProductsContainer'
import { InputSearch } from '@/components/ui/InputSearch'
import { Loading } from '@/components/ui/Loading'
import { AsideCategoriesFilter } from '@/components/product/AsideCategoriesFilter'
import { useProducts } from '@/hooks/useProducts'

export const MainSection = () => {
  const { loading } = useProducts()

  return (
    <main className="grid grid-cols-[240px_1fr]">
      <AsideCategoriesFilter />
      <section>
        <InputSearch />
        {loading ? <Loading /> : <ProductsContainer />}
      </section>
    </main>
  )
}
