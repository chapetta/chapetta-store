import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import type { Products } from '../contexts/ProductContext'
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";


export const ProductCard = ({ id, title, price, description, category, image, rating }: Products) => {

  const fullStars = Math.floor(rating.rate);
  const hasHalfStar = rating.rate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <article className="card-produto group w-48 bg-stone-100 shadow-xl shadow-slate-200 flex flex-col justify-around border-2 border-gray-200 rounded-lg" >
      <img
        src={image}
        alt={`imagem do produto ${id}`}
        className=" group-hover:scale-110 mx-6 my-4 transition-transform duration-300 transform"
      />
      <p className="mx-4 text-sm line-clamp-2 ">{title}</p>
      <p className="mx-4 text-sm  text-green-700 ">${price}</p>
      <p className="mx-4 text-sm line-clamp-1">{description}</p>
      <div className="flex items-center gap-1 mx-4 text-yellow-400 py-2">
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesomeIcon key={`full-${i}`} icon={faStarSolid} />
        ))}
        {hasHalfStar && <FontAwesomeIcon icon={faStarSolid} className="opacity-60" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FontAwesomeIcon key={`empty-${i}`} icon={faStarEmpty} />
        ))}
        <span className="ml-1 text-xs text-slate-500">({rating.count})</span>
      </div>
      <button className="bg-slate-950 rounded-md mx-4 my-1 text-slate-100 hover:bg-slate-800">
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </article>

  );
};