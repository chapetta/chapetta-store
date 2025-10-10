import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { StarRateContainer } from "../../components/StarRateContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../../components/FormatCurrency";

export const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const productDetail = products.find((product) => product.id === Number(id));

  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-b from-slate-100 to-slate-200 px-4 py-10">
      <section className="flex flex-col md:flex-row justify-around items-center gap-12 bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-10 border border-slate-100 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.15)] max-w-7xl mx-auto w-full">

        <div className="flex justify-center md:justify-start w-full md:w-1/2">
          <img
            src={productDetail?.image}
            alt={`imagem do produto com o id ${productDetail?.id}`}
            className="w-64 sm:w-72 md:w-80 lg:w-96 drop-shadow-2xl hover:scale-105 transition-transform duration-300" />
        </div>

        <div className="flex flex-col justify-start w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h3 className="text-3xl font-bold text-slate-800 leading-snug">
            {productDetail?.title}
          </h3>

          {productDetail && <StarRateContainer rating={productDetail.rating} />}

          <p className="text-slate-600 text-sm leading-relaxed">
            {productDetail?.description}
          </p>

          <p className="text-3xl font-extrabold text-emerald-600">
            {formatCurrency(productDetail?.price || 0)}
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="mt-4 flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300">
              <FontAwesomeIcon icon={faCartShopping} />
              Adicionar ao Carrinho
            </button>
          </div>

        </div>

      </section>
    </main>
  );
};
