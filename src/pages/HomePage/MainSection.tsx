import { ProductsContainer } from '@/components/product/ProductsContainer'
import { Loading } from '@/components/ui/Loading'
import { AsideCategoriesFilter } from '@/components/product/AsideCategoriesFilter'
import { useProductsContext } from '@/hooks/useProductsContext'

export const MainSection = () => {
  const { loading } = useProductsContext()

  return (
    <main className="grid grid-cols-[260px_1fr] gap-10 px-10">
      {' '}
      <AsideCategoriesFilter />
      <section>{loading ? <Loading /> : <ProductsContainer />}</section>
    </main>
  )
}
