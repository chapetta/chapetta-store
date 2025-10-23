import { ProductsContainer } from '@/features/product/components/ProductsContainer'
import { AsideCategoriesFilter } from '@/features/product/components/filters/AsideCategoriesFilter'
import { Loading } from '@/shared/components/ui/loading'
import { useProductsContext } from '@/shared/hooks/useProductsContext'

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
