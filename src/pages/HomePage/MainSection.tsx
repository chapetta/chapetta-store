import { useContext } from 'react'
import { ProductsContainer } from '../../components/product/ProductsContainer'
import { InputSearch } from '../../components/ui/InputSearch'
import { Loading } from '../../components/ui/Loading'
import { ProductContext } from '../../contexts/ProductContext'
import { AsideCategoriesFilter } from '../../components/product/AsideCategoriesFilter'

export const MainSection = () => {
  const { loading } = useContext(ProductContext)

  return (
    <main className="grid grid-cols-[240px_1fr]">
      <AsideCategoriesFilter
      />
      <section>
        <InputSearch />
        {loading ? <Loading /> : <ProductsContainer />}
      </section>
    </main>
  )
}
