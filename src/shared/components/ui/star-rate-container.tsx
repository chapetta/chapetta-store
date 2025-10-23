import { Star } from 'lucide-react'
import type { Rating } from '@/shared/types/product'

interface StarRateContainerProps {
  rating: Rating
}

export const StarRateContainer = ({ rating }: StarRateContainerProps) => {
  const fullStars = Math.floor(rating.rate)
  const hasHalfStar = rating.rate % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex items-center gap-[2px] text-yellow-400">
      <span className="mr-1 text-xs font-medium text-slate-700">{rating.rate.toFixed(1)}</span>

      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-3 w-3 fill-yellow-400 stroke-yellow-400" />
      ))}
      {hasHalfStar && <Star className="h-3 w-3 fill-yellow-400/60 stroke-yellow-400/60" />}

      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-3 w-3 stroke-yellow-400" />
      ))}

      <span className="ml-1 text-[10px] text-slate-500">({rating.count})</span>
    </div>
  )
}
