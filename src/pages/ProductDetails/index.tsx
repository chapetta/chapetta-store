import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { StarRateContainer } from "../../components/StarRateContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const productDetail = products.find((product) => product.id === Number(id));

  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-slate-100 to-slate-200">
      <section className="flex flex-col md:flex-row justify-around items-center gap-20 bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-10 border border-slate-100 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.15)] max-w-7xl mx-auto w-full">
        
        <div>
          <img
            src={productDetail?.image}
            alt={`imagem do produto com o id ${productDetail?.id}`}
            className="w-80 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="w-[400px] flex flex-col justify-start h-[500px] p-4 space-y-4">
          <h3 className="text-3xl font-bold text-slate-800 leading-snug">
            {productDetail?.title}
          </h3>

          {productDetail && <StarRateContainer rating={productDetail.rating} />}

          <p className="text-slate-600 text-sm leading-relaxed">
            {productDetail?.description}
          </p>

          <p className="text-3xl font-extrabold text-emerald-600">
            R$ {productDetail?.price}
          </p>

          <button className="mt-auto flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            <FontAwesomeIcon icon={faCartShopping} />
            Adicionar ao Carrinho
          </button>
        </div>

      </section>
    </main>
  );
};
