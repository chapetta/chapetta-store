import { Box, Typography } from "@mui/material";
import { useCart } from "../../UseHooks/UseCart";
import { CartItemCard } from "../../components/Cart/CartItemCard";

export const ShoppingCart = () => {
  const { cartList } = useCart();

  return (
    <Box
      sx={{
        height: 400,               
        overflowY: "auto",       
        overflowX: "hidden",      
        pr: 1,                    
        "&::-webkit-scrollbar": { 
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#888",
          borderRadius: "8px",
        },
      }}
    >
      {cartList.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ mt: 2 }}>
          Seu carrinho está vazio 🛒
        </Typography>
      ) : (
        cartList.map((product) => (
          <CartItemCard
            key={`product-${product.id}`}
            {...product}
          />
        ))
      )}
    </Box>
  );
};
