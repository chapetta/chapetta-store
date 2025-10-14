import { ProductsContainer } from '@/components/product/ProductsContainer'
import { InputSearch } from '@/components/ui/InputSearch'
import { Loading } from '@/components/ui/Loading'
import { AsideCategoriesFilter } from '@/components/product/AsideCategoriesFilter'
import { useProductsContext } from '@/hooks/useProductsContext'

export const MainSection = () => {
  const { loading } = useProductsContext()

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
