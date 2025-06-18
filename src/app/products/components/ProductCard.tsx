import { Product } from "@/types/mocks";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h2>{product.name}</h2>
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <p>{`Valor ${product.price.toFixed(5)}`}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;
