import { useState } from "react";
import type { CategoriesContext } from "../../contexts/CategoriesContext";
import './style.css'



export const AsideCategoriesFilter = ({ listCategories, handleSearchForCategory }: CategoriesContext) => {
  const [selectedCategorie, setSelectedCategorie] = useState('')

  return (
    <aside className=" p-4 w-60 h-[500px] text-black flex flex-col gap-5 border-3 my-10 mx-10">
      <h2>Categorias:</h2>
      <nav>
        <ul>{
          listCategories.length > 0 && listCategories.map((categorie) => (
            <li key={categorie} className="flex gap-3 m-2">
              <label className="checkbox-2">
                <input type="radio"
                  checked={selectedCategorie === categorie}
                  name="categorie"
                  value={categorie}
                  onChange={(e) => setSelectedCategorie(e.target.value)}
                  onClick={() => handleSearchForCategory(categorie)}
                  className="checkbox-input"
                >
                </input>
                <svg className="checkbox-check" width="25" height="25">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </label>
              {categorie}

            </li>
          ))
        }</ul>
      </nav>
    </aside>
  );
};