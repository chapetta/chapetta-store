import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const InputSearch = () => {
  return (
    <div className="flex m-0 justify-center m-20">

      <label htmlFor="search" className="flex  justify-center">
        <input
          type="text"
          placeholder="Pesquiste um produto"
          id="search"
          name="search"
          className="text-center border-2" />
      </label>
     <button className="cursor-pointer"> <FontAwesomeIcon icon={faSearch}/></button>
    </div>
  );
};