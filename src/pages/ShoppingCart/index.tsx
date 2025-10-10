
import { useCart } from "../../UseHooks/UseCart";
import { CartItemCard } from "../../components/Cart/CartItemCard";



export const ShoppingCart = () => {

    const { cartList } = useCart()

    return (
        <section className="flex flex-col justify-center items-center w-full"
      >
        {cartList.length === 0 ? (
          <h3>Seu carrinho esta vazio</h3>
        ) : (
          cartList.map((product) => (
            <CartItemCard 
              key={`product key ${product.id}`}
              {...product}
            />
          ))
        )}

      </section>
    );
};