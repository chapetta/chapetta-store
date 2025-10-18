import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Star } from 'lucide-react'
import { useCartContext } from '@/hooks/useCartContext'
import type { Product } from '@/types/ProductType'
import { formatCurrency } from '@/utils/FormatCurrency'
import { StarRateContainer } from '../ui/StarRateContainer'

export const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: Product) => {
  const { addToCart } = useCartContext()

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id,
      title,
      price,
      description,
      image,
      category,
      rating,
      quantity: 1,
    })
  }

  return (
    <Card className="group bg-card border-border flex w-52 flex-col justify-between rounded-2xl border p-0 shadow-sm transition-all duration-200 hover:shadow-md">
      {' '}
      <CardContent className="flex flex-col items-center justify-center p-4">
        <img
          src={image}
          alt={`Imagem do produto ${title}`}
          className="mb-3 h-36 w-36 rounded-md object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <h3 className="text-foreground line-clamp-2 text-center text-sm font-medium">{title}</h3>

        <p className="text-muted-foreground mt-1 line-clamp-2 text-center text-sm">{description}</p>

        <div className="mt-2 flex flex-col items-center gap-1">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
            {formatCurrency(price)}
          </span>

          <div className="flex items-center gap-1 text-yellow-500">
            <StarRateContainer rating={rating} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <Button
          className="w-full cursor-pointer gap-2 transition-transform duration-100 active:scale-95"
          onClick={handleAdd}
        >
          <ShoppingCart className="h-4 w-4" />
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  )
}
