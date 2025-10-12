import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'
import type { Rating } from '@/types/ProductType'

interface StarRateContainerProps {
  rating: Rating
}

export const StarRateContainer = ({ rating }: StarRateContainerProps) => {
  const fullStars = Math.floor(rating.rate)
  const hasHalfStar = rating.rate % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="mx-4 flex items-center gap-1 py-2 text-yellow-400">
      <span className="mr-1 text-sm font-medium text-slate-700">{rating.rate.toFixed(1)}</span>
      {[...Array(fullStars)].map((_, i) => (
        <FontAwesomeIcon key={`full-${i}`} icon={faStarSolid} />
      ))}
      {hasHalfStar && <FontAwesomeIcon icon={faStarSolid} className="opacity-60" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon key={`empty-${i}`} icon={faStarEmpty} />
      ))}
      <span className="ml-1 text-xs text-slate-500">({rating.count})</span>
    </div>
  )
}
