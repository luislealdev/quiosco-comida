"use client";
import { useStore } from "@/src/store"
import { ProductDetails } from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrency } from '../../src/utils/index';

export const OrderSummary = () => {

    const order = useStore(state => state.order);
    const total = useMemo(() => order.reduce((acc, item) => acc + item.price * item.quantity, 0), [order]);

    return (
        <div className="p-10" style={{ overflow: 'scroll' }}>
            <h1>Mi pedido</h1>

            {order.length === 0 ? <p>No hay productos en tu pedido</p> : <div className="mt-10 flex column gap-15">
                {
                    order.map((product) => (
                        <ProductDetails key={product.id} item={product} />
                    ))
                }
                <p className="mt-20 f-size-18 center-text">Total a pagar: <span className="bold">{formatCurrency(total)}</span></p>
            </div>}
        </div>
    )
}
