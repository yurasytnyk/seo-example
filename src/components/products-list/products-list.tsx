import Image from "next/image";
import { Product } from "@prisma/client";

interface Props {
  product: Product;
}

export const ProductsList = ({ product }: Props) => {
  return (
    <article className="text-center">
      <div className="relative">
        <div className="aspect-[40/40]">
          <Image
            fill={true}
            src={product.image}
            alt="Product image"
            className="object-cover object-top rounded-md"
          />
        </div>

        <div
          className={`${
            product.tag === "new" ? "bg-red-500" : "bg-black"
          } uppercase text-xs font-medium absolute top-3 left-5 px-2 text-white`}
        >
          {product.tag}
        </div>
      </div>

      <h2 className="pt-4 pb-1 text-white">{product.name}</h2>

      <h3 className="text-white">$ {product.price}</h3>
    </article>
  );
};
