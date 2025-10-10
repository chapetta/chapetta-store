import { useContext } from "react";
import { ProductsContainer } from "./ProductsContainer";
import { CategorieContext } from "../../contexts/CategoriesContext";
import { InputSearch } from "../../components/InputSearch";
import { Loading } from "../../components/Loading";
import { ProductContext } from "../../contexts/ProductContext";
import { AsideCategoriesFilter } from "../../components/AsideCategoriesFilter";

export const MainSection = () => {

  const { listCategories, handleSearchForCategory  } = useContext(CategorieContext)
    const { loading } = useContext(ProductContext)

  return (
    <main className="grid grid-cols-[240px_1fr]">
      <AsideCategoriesFilter
        listCategories={listCategories}
        handleSearchForCategory={handleSearchForCategory}
      />
      <section>
        <InputSearch />
        {loading ? <Loading /> :
        <ProductsContainer />
        }
      </section>
    </main>
  );
};