
import { useCart } from "../../UseHooks/UseCart";
import { ProductCard } from "../ProductCard";


export const CartOverlay = () => {

  const { isCartOpen, setIsCartOpen, cartList } = useCart()

  return (
    <div className={`h-screen w-screen fixed top-0 left-0 flex z-11 ease-in-out duration-200 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <section
        className="w-3/4 bg-slate-950 opacity-50"
        onClick={() => setIsCartOpen(false)}
      >
      </section>
      <section className="w-1/4 bg-slate-950 min-w-96 border-l-4 border-slater-400 ps-5 flex flex-col justify-between text-white"
      >
        {cartList.length === 0 ? (
          <h3>Seu carrinho esta vazio</h3>
        ) : (
          cartList.map((product) => (
            <ProductCard 
              key={`product key ${product.id}`}
              {...product}
            />
          ))
        )}

      </section>

    </div>
  );
};