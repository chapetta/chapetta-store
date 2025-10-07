import { useContext, useState } from "react";
import { ProductsContainer } from "./ProductsContainer";
import { CategorieContext } from "../../contexts/CategoriesContext";
import { InputSearch } from "../../components/InputSearch";
import { Loading } from "../../components/Loading";
import { ProductContext } from "../../contexts/ProductContext";

export const MainSection = () => {

  const { listCategories, handleSearchForCategory  } = useContext(CategorieContext)
    const { loading } = useContext(ProductContext)
  const [selectedCategorie, setSelectedCategorie] = useState('')

  return (
    <main className="grid grid-cols-[240px_1fr]">
      <aside className=" p-4 w-60 min-h-[100vh] sticky top-0 text-black flex flex-col gap-5 border-3 my-10 mx-10">
        <h2>Categorias:</h2>
        <nav>
          <ul>{
            listCategories.length > 0 && listCategories.map((categorie) => (
              <li key={categorie} className="flex gap-3 m-3">
                <label>
                  <input type="radio"
                    checked={selectedCategorie === categorie}
                    name="categorie"
                    value={categorie}
                    onChange={(e) => setSelectedCategorie(e.target.value)}
                    onClick={() => handleSearchForCategory(categorie)}
                  >
                  </input>
                </label>
                {categorie}

              </li>
            ))
          }</ul>
        </nav>
      </aside>
      <section>
        <InputSearch />
        {loading ? <Loading /> :
        <ProductsContainer />
        }
      </section>
    </main>
  );
};