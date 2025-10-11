import { Card, CardMedia, Box, Typography, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { formatCurrency } from '../../utils/FormatCurrency'
import { useCartContext } from '../../hooks/useCartContext'
import type { Products } from '../../contexts/ProductContext'

export const CartItemCard = ({ id, title, price, image, quantity }: Products) => {
  const { increaseQuantity, decreaseQuantity } = useCartContext()

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 1, mb: 2 }}>
      <CardMedia component="img" sx={{ width: 80, borderRadius: 1 }} image={image} alt={title} />
      <Box sx={{ flex: 1, ml: 2 }}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {formatCurrency(price)}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={() => decreaseQuantity(id)} size="small">
          <RemoveIcon />
        </IconButton>
        <Typography variant="body1" mx={1}>
          {quantity}
        </Typography>
        <IconButton onClick={() => increaseQuantity(id)} size="small">
          <AddIcon />
        </IconButton>
      </Box>
    </Card>
  )
}
