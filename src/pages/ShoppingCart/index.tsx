import { Box, Button, Divider, Typography } from '@mui/material'
import { CartItemCard } from '../../components/Cart/CartItemCard'
import { formatCurrency } from '../../utils/FormatCurrency'
import { useCartContext } from '../../hooks/useCartContext'

export const ShoppingCart = () => {
  const { cartList, getTotal } = useCartContext()

  return (
    <Box
      sx={{
        maxWidth: '800px',
        mx: 'auto',
        mt: 4,
        mb: 8,
        background: 'white',
        borderRadius: 2,
        boxShadow: 3,
        p: 3,
      }}
    >
      <Typography variant="h5" fontWeight={600} mb={3}>
        🛒 Carrinho de Compras
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Box>
        {cartList.length === 0 ? (
          <Typography variant="body1" align="center" sx={{ mt: 4 }}>
            Seu carrinho está vazio 🛒
          </Typography>
        ) : (
          cartList.map((product) => <CartItemCard key={`product-${product.id}`} {...product} />)
        )}
      </Box>

      <Divider sx={{ my: 3 }} />

      {cartList.length > 0 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Valor Total da compra:{' '}
            <Box component="span" color="primary.main">
              {formatCurrency(getTotal())}
            </Box>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              borderRadius: 2,
            }}
          >
            Finalizar Compra
          </Button>
        </Box>
      )}
    </Box>
  )
}
