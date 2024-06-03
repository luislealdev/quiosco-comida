import { Product } from "@prisma/client"
import { formatCurrency } from '../../src/utils/index';
import Image from "next/image";
import { AddToCart } from "./AddToCart";

type ProductCardProps = {
    product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="bg-white">
            <Image src={`/products/${product.image}.jpg`} className="max-width" alt={product.name} width={300} height={300} />
            <div className="p-5">
                <h3 className="f-size-22 bold">{product.name}</h3>
                <p className="mt-10 f-size-24">{formatCurrency(product.price)}</p>
                <div className="flex justify-content mt-20">
                    <AddToCart product={product} />
                </div>
            </div>
        </div>
    )
}
