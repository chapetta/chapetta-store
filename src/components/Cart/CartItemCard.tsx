import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCartContext } from '@/hooks/useCartContext'
import { formatCurrency } from '@/utils/FormatCurrency'
import type { Product } from '@/types/ProductType'
export const CartItemCard = ({ id, title, price, image, quantity }: Product) => {
  const { increaseQuantity, decreaseQuantity } = useCartContext()

  return (
    <Card className="mb-3">
      <CardContent className="mr-3 flex items-center justify-between gap-3 px-5">
        <img src={image} alt={title} className="h-20 w-16 rounded object-contain" loading="lazy" />
        <div>
          <p className="w-80 truncate">{title}</p>
        </div>
        <div className="justify-cnnter flex items-center gap-3">
          <Button
            size="icon"
            className="cursor-pointer transition-transform duration-100 active:scale-95"
            variant={quantity > 1 ? 'outline' : 'destructive'}
            onClick={() => decreaseQuantity(id)}
          >
            {quantity > 1 ? <Minus size="16" /> : <Trash2 size="16" />}
          </Button>

          {quantity}
          <Button
            size="icon"
            className="cursor-pointer transition-transform duration-100 active:scale-95"
            variant="outline"
            onClick={() => increaseQuantity(id)}
          >
            <Plus size="small" />
          </Button>
          <div>
            <p className="ml-3">{formatCurrency(price * quantity)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
