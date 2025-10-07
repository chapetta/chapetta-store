import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";

export const InputSearch = () => {

  const { handleButtonSearch } = useContext(ProductContext)
  const [ inputValue, setInputValue ] = useState('')

  return (
    <div className="flex justify-center m-20">

      <label htmlFor="search" className="flex  justify-center">
        <input
          type="text"
          placeholder="Pesquiste um produto"
          id="search"
          name="search"
          className="text-center border-2"
          onChange={(e) =>  setInputValue(e.target.value)}
          />
      </label>
     <button className="cursor-pointer" onClick={() => handleButtonSearch(inputValue)}> <FontAwesomeIcon icon={faSearch}/></button>
    </div>
  );
};