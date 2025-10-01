type ProductCard = {
  id: number;
  name: string;
  image: string;
  brand: string;
  feminine: boolean;
  price: number
}

export const ProductCard = ({id, name, brand, image, feminine, price }: ProductCard) => {
    return (
        <article>
          <img src={image} alt={`imagem do produto ${id}`} />
          <p>{brand}</p>
          <p>{name}</p>
          <p>{price}</p>
        </article>
    );
};