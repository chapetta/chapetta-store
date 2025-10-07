import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import type {Products} from '../contexts/ProductContext'


export const ProductCard = ({ id, title, price , description, category,  image, rating }: Products) => {

  return (
    <article className="card-produto group w-48 bg-stone-100 shadow-xl shadow-slate-200 flex flex-col justify-around border-2 border-gray-200 rounded-lg ">
      <img
        src={image}
        alt={`imagem do produto ${id}`}
        className=" group-hover:scale-110 mx-6 my-4 transition-transform duration-300 transform"
      />
      <p className="mx-4 text-sm text-slate-400">{category}</p>
      <p className="mx-4 text-sm line-clamp-2 ">{title}</p>
      <p className="mx-4 text-sm  text-green-700 ">${price}</p>
      <p className="mx-4 text-sm line-clamp-1">{description}</p>
      <button className="bg-slate-950 rounded-md mx-4 my-1 text-slate-100 hover:bg-slate-800">
        <FontAwesomeIcon  icon={faCartPlus}/>
      </button>
    </article>

  );
};