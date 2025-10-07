import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

type ProductCard = {
  id: number;
  name: string;
  image: string;
  brand: string;
  feminine: boolean;
  price: number
}

export const ProductCard = ({ id, name, brand, image, price }: ProductCard) => {
  return (
    <article className="card-produto group w-48 bg-stone-100 shadow-xl shadow-slate-200 flex flex-col justify-around border-2 border-gray-200 rounded-lg ">
      <img
        src={image}
        alt={`imagem do produto ${id}`}
        className=" group-hover:scale-110 mx-6 my-4 transition-transform duration-300 transform"
      />
      <p className="mx-4 text-sm text-slate-400">{brand}</p>
      <p className="mx-4 text-sm ">{name}</p>
      <p className="mx-4 text-sm  text-green-700 ">${price}</p>
      <button className="bg-slate-950 rounded-md mx-4 my-1 text-slate-100 hover:bg-slate-800">
        <FontAwesomeIcon  icon={faCartPlus}/>
      </button>
    </article>

  );
};