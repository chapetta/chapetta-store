import { Card } from '@/components/ui/card'
import { useCartContext } from '@/hooks/useCartContext'

export const CheckoutProducts = () => {
  const { cartList, getTotal } = useCartContext()

  const currencyFormat = (value: number) => {
    const result = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)

    return result
  }

  return (
    <Card className="flex gap-10 px-50 py-15">
      <h1 className="text-2xl font-semibold">Revise seus Produtos</h1>
      <div className="flex flex-col gap-8">
        {cartList.map((product) => (
          <div key={product.id} className="flex items-center gap-3 border-1">
            <img
              src={product.image}
              alt={`imagem do produto 
               ${product.title}`}
              className="w-15"
            />
            <p className="mx-5 w-100 truncate">{product.title}</p>
            <p className="overflow-auto font-semibold">
              {currencyFormat(product.price * product.quantity)}
            </p>
          </div>
        ))}
        <p>
          Total: <span className="font-bold">{currencyFormat(getTotal())}</span>
        </p>
      </div>
    </Card>
  )
}
