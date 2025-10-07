import { useContext } from "react";
import { ProductsContainer } from "./ProductsContainer";
import { CategorieContext } from "../../contexts/CategoriesContext";

export const MainSection = () => {

  const {listCategories} = useContext(CategorieContext)

  return (
    <>
    <aside>
      <nav>
        <ul>{

          listCategories.length > 0 && listCategories.map((categorie) => (
            <li key={categorie.id}>{categorie.name}</li>
          ))
          }</ul>
      </nav>
    </aside>
      <ProductsContainer />
    </>
  );
};