import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import type { Products } from '../contexts/ProductContext'
import { StarRateContainer } from '../ui/StarRateContainer'
import { useCart } from '../UseHooks/UseCart'
import { formatCurrency } from '../shared/lib/FormatCurrency'

export const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: Products) => {
  const { handleButtonAddToCart } = useCart()

  return (
    <article className="card-produto group flex w-48 flex-col justify-around rounded-lg border-2 border-gray-200 bg-stone-100 shadow-xl shadow-slate-200">
      <img
        src={image}
        alt={`imagem do produto ${id}`}
        className="mx-6 my-4 transform transition-transform duration-300 group-hover:scale-110"
      />
      <p className="mx-4 line-clamp-2 text-sm">{title}</p>
      <p className="mx-4 text-sm text-green-700">{formatCurrency(price)}</p>
      <p className="mx-4 line-clamp-1 text-sm">{description}</p>
      <StarRateContainer rating={rating} />
      <button
        className="mx-4 my-1 rounded-md bg-slate-950 text-slate-100 hover:bg-slate-800"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleButtonAddToCart({ id, title, price, description, image, category, rating })
        }}
      >
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </article>
  )
}
