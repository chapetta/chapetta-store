import { useContext, useState } from "react";
import { ProductsContainer } from "./ProductsContainer";
import { CategorieContext } from "../../contexts/CategoriesContext";
import { InputSearch } from "../../components/InputSearch";

export const MainSection = () => {

  const { listCategories } = useContext(CategorieContext)
  const [selectedCategorie, setSelectedCategorie] = useState('')

  return (
    <main className="grid grid-cols-[240px_1fr]">
      <aside className=" p-4 w-60 min-h-[100vh] sticky top-0 text-black flex flex-col gap-5 border-3">
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
        <ProductsContainer />
      </section>
    </main>
  );
};