"use client";
import { useStore } from "@/src/store"
import { ProductDetails } from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrency } from '../../src/utils/index';
import { createOrder } from "@/actions/create-order-action";
import { orderSchema } from "@/src/schema";
import { toast } from "react-toastify";

export const OrderSummary = () => {

    const order = useStore(state => state.order);
    const clearOrder = useStore(state => state.clearOrder);
    const total = useMemo(() => order.reduce((acc, item) => acc + item.price * item.quantity, 0), [order]);

    const handleCreateOrder = async (formData: FormData) => {

        const name = formData.get('name');

        const data = {
            name,
            total,
            order
        }

        const result = orderSchema.safeParse(data);

        if (!result.success) {
            result.error.issues.forEach((issue) => {
                toast.error(issue.message);
            });
            return
        }

        const response = await createOrder(data);
        if (response?.errors) {
            response.errors.forEach((error) => {
                toast.error(error.message);
            });
        }

        toast.success('Pedido creado con éxito');

        clearOrder();
    };

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
                <form action={handleCreateOrder} className="flex column gap-15 justify-content">
                    <input type="text" placeholder="Nombre" className="p-10" name="name" />
                    <input type="submit" value="Confirmar pedido" className="ph-20 bg-black white-text no-border p-5 f-size-18" />
                </form>
            </div>}
        </div>
    )
}
