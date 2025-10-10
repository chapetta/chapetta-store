
import { useCart } from "../../UseHooks/UseCart";
import { CartItemCard } from "../../components/Cart/CartItemCard";



export const ShoppingCart = () => {

    const { cartList } = useCart()

    return (
        <section className="w-1/4 bg-slate-950 min-w-96 border-l-4 border-slater-400 ps-5 flex flex-col justify-between text-white"
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