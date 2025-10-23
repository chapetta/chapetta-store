import { useParams } from 'react-router-dom'
import { useProductsContext } from '@/shared/hooks/useProductsContext'
import { StarRateContainer } from '@/shared/components/ui/star-rate-container'
import { formatCurrency } from '@/shared/utils/format-currency'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/shared/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { useCartContext } from '@/shared/hooks/useCartContext'

export const ProductDetails = () => {
  const { id } = useParams()
  const { products } = useProductsContext()
  const { addToCart } = useCartContext()
  const productDetail = products.find((product) => product.id === Number(id))

  if (!productDetail) {
    return (
      <div className="text-muted-foreground flex h-screen items-center justify-center">
        Produto não encontrado.
      </div>
    )
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 px-4 py-10">
      <Card className="mx-auto flex w-full max-w-6xl flex-col items-center justify-around gap-12 rounded-3xl border border-slate-100 bg-white/80 p-10 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.15)] md:flex-row">
        <CardHeader className="flex w-full justify-center md:w-1/2 md:justify-start">
          <img
            src={productDetail.image}
            alt={`Imagem do produto ${productDetail.title}`}
            className="w-64 drop-shadow-2xl transition-transform duration-300 hover:scale-105 sm:w-72 md:w-80 lg:w-96"
          />
        </CardHeader>

        <CardContent className="flex w-full flex-col justify-start space-y-10 text-center md:w-1/2 md:text-left">
          <CardTitle className="text-3xl leading-snug font-bold text-slate-800">
            {productDetail.title}
          </CardTitle>

          {productDetail && <StarRateContainer rating={productDetail.rating} />}

          <p className="text-sm leading-relaxed text-slate-600">{productDetail.description}</p>

          <p className="text-3xl font-extrabold text-emerald-600">
            {formatCurrency(productDetail.price || 0)}
          </p>

          <div className="flex justify-center md:justify-start">
            <Button
              size="lg"
              className="w-full gap-2 rounded-lg px-4 py-2 text-sm transition-transform duration-100 active:scale-95"
              onClick={() => addToCart(productDetail)}
            >
              <ShoppingCart className="h-5 w-5" />
              Adicionar ao Carrinho
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
