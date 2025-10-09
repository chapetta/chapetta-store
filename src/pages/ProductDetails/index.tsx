import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { StarRateContainer } from "../../components/StarRateContainer";

export const ProductDetails = () => {

    const { id } = useParams();
    const { products } = useContext(ProductContext)
    const productDetail = products.find((product) => product.id === Number(id))

    return (
        <main className="flex justify-center items-center my-40 gap-[200px]">
          <div>
          <img src={productDetail?.image} className="w-80" alt={`imagem do produto com o id ${productDetail?.id}`}/>
          </div>
          <div className="w-[400px] flex flex-col justify-center h-[500px]">
            <h3 className="text-2xl mb-5">{productDetail?.title}</h3>
            {productDetail && <StarRateContainer rating={productDetail?.rating}/>}
            <p className="mt-20">{productDetail?.description}</p>
            <p className="text-2xl">R$ {productDetail?.price}</p>
          </div>

        </main>
    );
};