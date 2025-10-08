import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";

export const ProductDetails = () => {

    const { id } = useParams();
    const { products } = useContext(ProductContext)
    const productDetail = products.find((product) => product.id === Number(id))
    console.log(productDetail)
    console.log(id)
    return (
        <div>ProductDetails</div>
    );
};