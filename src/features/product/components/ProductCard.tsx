import { Card, CardContent, CardFooter } from '@/shared/components/ui/card'
import { Button } from '@/shared/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartContext } from '@/shared/hooks/useCartContext'
import type { Product } from '@/shared/types/product'
import { formatCurrency } from '@/shared/utils/format-currency'
import { StarRateContainer } from '@/shared/components/ui/star-rate-container'

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
    <Card
      role="button"
      tabIndex={0}
      className="group bg-card hover:border-border flex h-[440px] w-[200px] flex-col justify-between rounded-2xl border border-transparent shadow-none transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <CardContent className="flex flex-col p-4 pb-3">
        <div className="flex h-[140px] items-center justify-center">
          <img
            src={image}
            alt={`Imagem do produto ${title}`}
            className="h-[120px] w-[120px] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <p className="text-muted-foreground mt-2 text-[11px] tracking-widest uppercase">
          {category}
        </p>

        <h3 className="text-foreground mt-1 line-clamp-2 text-sm leading-snug font-semibold">
          {title}
        </h3>

        <div className="mt-1">
          <StarRateContainer rating={rating} />
        </div>

        <span className="mt-10 text-base font-semibold text-emerald-600 dark:text-emerald-400">
          {formatCurrency(price)}
        </span>
      </CardContent>

      <CardFooter className="mt-auto px-4 pb-4">
        <Button
          className="w-full gap-2 rounded-lg px-4 py-2 text-sm transition-transform duration-100 active:scale-95"
          onClick={handleAdd}
        >
          <ShoppingCart className="h-4 w-4" />
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  )
}
