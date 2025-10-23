import { Card, CardContent } from '@/shared/components/ui/card'
import { Separator } from '@/shared/components/ui/separator'
import { Button } from '@/shared/components/ui/button'
import { formatCurrency } from '@/shared/utils/format-currency'
import { useCartContext } from '@/shared/hooks/useCartContext'
import { CartItemCard } from '../components/CartItemCard'
import { useNavigate } from 'react-router-dom'
export const ShoppingCart = () => {
  const { cartList, getTotal } = useCartContext()

  const navigate = useNavigate()

  return (
    <Card className="mx-auto mt-10 w-full max-w-4xl border-none shadow-lg">
      <CardContent className="flex flex-col gap-6 px-8 py-10">
        <div className="flex items-center justify-center gap-3">
          <span className="text-4xl">🛒</span>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-800">
            {' '}
            Carrinho de Compras
          </h1>
        </div>
        <Separator />

        <div className="mt-4 flex w-full flex-col gap-4">
          {cartList.length === 0 ? (
            <h2>Seu carrinho está vazio 🛒</h2>
          ) : (
            cartList.map((product) => <CartItemCard key={`product-${product.id}`} {...product} />)
          )}
        </div>

        <Separator />

        {cartList.length > 0 && (
          <div className="mt-4 flex w-full items-center justify-between">
            <div className="flex gap-3 text-lg font-medium text-slate-700">
              Valor Total da compra:{' '}
              <span className="font-semibold text-slate-900">{formatCurrency(getTotal())}</span>
            </div>
            <Button
              className="px-8 py-5 text-base font-semibold transition-transform duration-100 active:scale-95"
              onClick={() => navigate('/checkout')}
            >
              Finalizar Compra
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
