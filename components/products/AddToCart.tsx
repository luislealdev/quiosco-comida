"use client"

import { useStore } from "@/src/store";
import { Product } from "@prisma/client";

type AddToCartProps = {
    product: Product;
}

export const AddToCart = ({ product }: AddToCartProps) => {

    const addToCart = useStore(state => state.addToCart);

    return (
        <button onClick={() => addToCart(product)} type="button" className="center-text bg-blue white-text no-border f-size-16 ph-20 p-10 m-10">
            AGREGAR
        </button>
    )
}
