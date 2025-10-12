import { useParams } from 'react-router-dom'
import { StarRateContainer } from '@/components/ui/StarRateContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { formatCurrency } from '@/utils/FormatCurrency'
import { Box, Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useProductsContext } from '@/hooks/useProductsContext'

export const ProductDetails = () => {
  const { id } = useParams()
  const { products } = useProductsContext()
  const productDetail = products.find((product) => product.id === Number(id))

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 px-4 py-10">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-around gap-12 rounded-3xl border border-slate-100 bg-white/80 p-10 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.15)] md:flex-row">
        <div className="flex w-full justify-center md:w-1/2 md:justify-start">
          <img
            src={productDetail?.image}
            alt={`imagem do produto com o id ${productDetail?.id}`}
            className="w-64 drop-shadow-2xl transition-transform duration-300 hover:scale-105 sm:w-72 md:w-80 lg:w-96"
          />
        </div>

        <div className="flex w-full flex-col justify-start space-y-4 text-center md:w-1/2 md:text-left">
          <h3 className="text-3xl leading-snug font-bold text-slate-800">{productDetail?.title}</h3>

          {productDetail && <StarRateContainer rating={productDetail.rating} />}

          <p className="text-sm leading-relaxed text-slate-600">{productDetail?.description}</p>

          <p className="text-3xl font-extrabold text-emerald-600">
            {formatCurrency(productDetail?.price || 0)}
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="mt-4 flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-amber-600 hover:shadow-lg">
              <FontAwesomeIcon icon={faCartShopping} />
              Adicionar ao Carrinho
            </button>
          </div>

          <Box>
            <Button variant="contained" className="flex gap-3 bg-amber-600 text-center">
              <ShoppingCartIcon />
              Adicionar ao Carrinho
            </Button>
          </Box>
        </div>
      </section>
    </main>
  )
}
