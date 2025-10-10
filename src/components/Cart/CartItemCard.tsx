import { Card, CardMedia, Box, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import type { Products } from "../../types/ProductTypes";
import { formatCurrency } from "../FormatCurrency";
import { useCart } from "../../UseHooks/UseCart";

export const CartItemCard = ({ id, title, price, description, category, image, rating, quantity }: Products) => {

  const { handleButtonAddQuantity, handleButtonRemoveQuantity } = useCart()


  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 1, mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 80, borderRadius: 1 }}
        image={image}
        alt={title}
      />
      <Box sx={{ flex: 1, ml: 2 }}>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body2" color="textSecondary">{formatCurrency(price)}</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={() => handleButtonRemoveQuantity(id)} size="small">
          <RemoveIcon />
        </IconButton>
        <Typography variant="body1" mx={1}>
          {quantity}
        </Typography>
        <IconButton onClick={() => handleButtonAddQuantity(id)} size="small">
          <AddIcon />
        </IconButton>
      </Box>
    </Card>
  );
};